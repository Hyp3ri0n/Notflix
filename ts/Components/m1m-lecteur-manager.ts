import {Component, Input, OnInit, ElementRef} from "@angular/core";
import {CommService, MediaRenderer, Media} from "../Services/CommService";
import {utils} from "../Services/utils";

@Component({
    selector		: "m1m-lecteur-manager",
    templateUrl     : "ts/Components/Views/m1m-lecteur-manager.html"
})

export class CompLecteurManager implements OnInit {
    @Input() nf	        : MediaRenderer;
    media               : Media;
    muted               : boolean = false;
    oldVolume           : number  = 0;
    displayPause        : boolean = false;
    valueVolume         : number  = 0;
    titleMedia          : string  = "Pas de média lancé...";
    regex               : RegExp  = new RegExp("<dc:title>([a-zA-Z0-9_\\.éèàç\\s\\-'&;`\\(\\)]*)\<\/dc:title>");
    regexWindowsFiles   : RegExp  = new RegExp("\(.*)");
    regexURLFiles       : RegExp  = new RegExp("/(.*)");

    constructor(private comm: CommService, private element: ElementRef) {
        console.log("");
    }

    ngOnInit() : void {
        console.log("Init Player");
        utils.call(this.nf.id, "getMediasStates", []).then((data) => {
            this.initLecteur(data);
        });
        utils.subscribeBrick(this.nf.id, "eventUPnP", (e) => { this.subscribeCallback(e); });
    }

    initLecteur(data: any) {
        console.log("DATA : ", data);
        let infosGeneral = data["urn:schemas-upnp-org:service:AVTransport:1"];
        let infosVolume = data["urn:schemas-upnp-org:service:RenderingControl:1"];

        // Play Pause
        if (infosGeneral["TransportState"] === "PLAYING") {
            this.displayPause = true;
        } else if (infosGeneral["TransportState"] === "PAUSED_PLAYBACK") {
            this.displayPause = false;
        } else {
            this.displayPause = false;
        }

        // Titre
        let lastIndex = infosGeneral["AVTransportURI"].lastIndexOf("\\");

        if(lastIndex !== -1) {
            let splitTitle = infosGeneral["AVTransportURI"].split("\\");
            console.log(splitTitle);
            this.titleMedia = this.decodeTitle(splitTitle[splitTitle.length - 1]);
        } else {
            let splitTitle = infosGeneral["AVTransportURI"].split("/");
            console.log(splitTitle);
            this.titleMedia = this.decodeTitle(splitTitle[splitTitle.length - 1]);
        }

        if(this.titleMedia === "") {
            if(this.regex.test(infosGeneral["AVTransportURIMetaData"])) {
                this.titleMedia = this.decodeTitle(this.regex.exec(infosGeneral["AVTransportURIMetaData"])[1]);
            }
        }
        if(this.titleMedia === "") {
            this.titleMedia = "Pas de média lancé...";
        }

        // Volume
        this.valueVolume = infosVolume["Volume"];
    }

    play() : void {
        this.comm.play(this.nf.id);
        console.log(this.nf.name);
    }
    pause() : void {
        this.comm.pause(this.nf.id);
    }
    stop() : void {
        this.comm.stop(this.nf.id);
    }
    setVolume() : void {
        this.muted = false;
        let e = this.element.nativeElement.querySelector("input[type=range]");
        this.valueVolume = e.value;
        this.comm.setVolume(this.nf.id, this.valueVolume);
    }
    isMedia(draggable: any) : boolean {
        return true;
    }
    loadAndPlay(media: Media) : void {
        this.media = media;
        this.comm.loadMedia(this.nf.id, this.media.serverId, this.media.mediaId);
        this.play();
    }

    subscribeCallback(e) : void {
        console.log("subscribe callback : ", e);

        switch (e.data.attribut) {
            case "Volume" :
                this.valueVolume = e.data.value;
                break;
            case "TransportState":
                if (e.data.value === "PLAYING") {
                    this.displayPause = true;
                } else if (e.data.value === "PAUSED_PLAYBACK") {
                    this.displayPause = false;
                } else {
                    this.displayPause = false;
                }
                break;
            case "NumberOfTracks":
                break;
            case "CurrentTrack":
                break;
            case "CurrentTrackDuration":
                break;
            case "CurrentMediaDuration":
                break;
            case "CurrentTrackMetaData":
            case "itemMetaData":
                if(this.regex.test(e.data.value)) {
                    if(this.decodeTitle(this.regex.exec(e.data.value)[1]) !== "") {
                        this.titleMedia = this.decodeTitle(this.regex.exec(e.data.value)[1]);
                    }
                }
                break;
            case "AVTransportURIMetaData":
                break;
            default:
                break;
        }
    }

    decodeTitle(title : string) : string {
        let newTitle : string = title;
        newTitle = newTitle.replace(new RegExp("&apos;", "g"), "'");
        newTitle = newTitle.replace(new RegExp("%2527", "g"), "'");
        newTitle = newTitle.replace(new RegExp("%2520", "g"), " ");
        newTitle = newTitle.replace(new RegExp("%255B", "g"), "[");
        newTitle = newTitle.replace(new RegExp("%255D", "g"), "]");
        newTitle = newTitle.replace(new RegExp("%25c3%2580", "g"), "A");
        return newTitle;
    }

    mute() : void {
        if (!this.muted) {
            this.oldVolume = this.valueVolume;
            this.valueVolume = 0;
        } else {
            this.valueVolume = this.oldVolume;
        }
        this.muted = !this.muted;
        this.comm.setVolume(this.nf.id, this.valueVolume);
    }
};
