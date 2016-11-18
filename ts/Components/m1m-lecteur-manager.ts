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
    displayPause        : boolean = false;
    valueVolume         : number = 0;
    titleMedia          : string = "Pas de média lancé...";
    regex               : RegExp = new RegExp("<dc:title>([a-zA-Z0-9_\.éèàç&\s-]*)</dc:title>");
    // regex              : RegExp = new RegExp("\<dc:title\>([a-zA-Z0-9_\.éèàç&\s-]*)\<\/dc:title\>");
    // todo : regex ID : regexId             : RegExp = new RegExp("\<item id="([]*)" parentID="" restricted="1"\>");

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
        console.log("Data : ", data);

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
        if (infosGeneral !== null && infosGeneral["CurrentTrackMetaData"] !== "") {
            //this.titleMedia = this.regex.exec(infosGeneralLinux["CurrentTrackMetaData"])[1];
            let splitTab = infosGeneral["AVTransportURI"].split("\\");
            this.titleMedia = splitTab[splitTab.length - 1];
        } else {
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
                // this.titleMedia = this.regex.exec(e.data.value)[1];
                // console.log("title media : ", this.titleMedia);
                break;
            case "CurrentTrackURI":
                let splitTab = e.data.value.split("\\");
                this.titleMedia = splitTab[splitTab.length - 1];
                break;
            case "AVTransportURIMetaData":
                break;
            default:
                break;
        }
    }
};
