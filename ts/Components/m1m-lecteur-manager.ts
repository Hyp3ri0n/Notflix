import { Component, Input, OnInit } from "@angular/core";
import {CommService, MediaRenderer, Media} from "../Services/CommService";
import {utils} from "../Services/utils";

@Component({
    selector		: "m1m-lecteur-manager",
    templateUrl     : "ts/Components/Views/m1m-lecteur-manager.html"
})

export class CompLecteurManager implements OnInit {
    @Input() nf	: MediaRenderer;
    media       : Media;

    constructor(private comm: CommService) {
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
        let value;
        [].forEach.call(document.querySelector("#fader" + this.nf.id), (e) => {
            value = e.value;
        });

        console.log(this.nf.name, value);
        this.comm.setVolume(this.nf.id, value);
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
        console.log("Attribut : ", e.data.attribut, " Value : ", e.data.value);

        switch (e.data.attribut) {
            case "Volume" :
                console.log("Volume set : ", e.data.value);
                break;
            case "TransportState":
                //TODO recuperer l'etat de lecture (PLAYING, PAUSED_PLAYBACK, STOPPED)
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
                break;
            case "AVTransportURIMetaData":
                break;
            default:
                break;
        }
    }
};
