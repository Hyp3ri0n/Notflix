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
    regex               : RegExp = new RegExp("\<dc:title\>([a-zA-Z0-9_\.]*)\<\/dc:title\>");

    constructor(private comm: CommService, private element: ElementRef) {
        console.log(comm);
    }

    ngOnInit() : void {
        console.log("Init Player");
        utils.subscribeBrick(this.nf.id, "eventUPnP", (e) => { this.subscribeCallback(e); });
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
        let e = this.element.nativeElement.querySelector("#fader");
        this.valueVolume = e.value;
        console.log("element : ", this.element.nativeElement, "Value fader : ", this.valueVolume);

        console.log(this.nf.name, this.valueVolume);
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
        console.log(e);

        switch (e.data.attribut) {
            case "Volume" :
                this.valueVolume = e.data.value;
                break;
            case "TransportState":
                //TODO recuperer l'etat de lecture (PLAYING, PAUSED_PLAYBACK, STOPPED)
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
                this.titleMedia = this.regex.exec(e.data.value)[1];
                break;
            case "AVTransportURIMetaData":
                break;
            default:
                break;
        }
    }
};
