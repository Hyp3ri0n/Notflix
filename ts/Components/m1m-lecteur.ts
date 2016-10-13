import { Component, Input 	} from "@angular/core";
import {CommService, MediaRenderer, Media} from "../Services/CommService";

@Component({
    selector		: "m1m-lecteur",
    templateUrl     : "ts/Components/Views/m1m-lecteur.html"
})
export class CompLecteur {
    @Input() nf	: MediaRenderer;
    media       : Media;

    constructor(private comm: CommService) {
        console.log(comm);
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

    loadMedia(media : Media) : void {
        this.media = media;

        this.comm.loadMedia(this.comm.mediaRenderers[0].id, this.media.serverId, this.media.mediaId);
    }
};
