import { Component, Input 	} from "@angular/core";
import {CommService, DataInit, MediaServer, MediaRenderer, Media} from "../Services/CommService";

@Component({
    selector		: "m1m-lecteur",
    templateUrl     : "ts/Components/Views/m1m-lecteur.html"
})
export class CompLecteur {
    @Input() media	: Media;
    mediaRenderer  : MediaRenderer;

    constructor(private comm: CommService) {
    }

    play() : void {
        this.comm.play(this.mediaRenderer.id);
    }

    pause() : void {
        this.comm.pause(this.mediaRenderer.id);
    }

    stop() : void {
        this.comm.stop(this.mediaRenderer.id);
    }
};
