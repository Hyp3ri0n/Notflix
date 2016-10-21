import { Component, Input } from "@angular/core";
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

    isMedia(draggable: any) : boolean {
        return true;
    }

    loadAndPlay(media: Media) : void {
        this.media = media;
        this.comm.loadMedia(this.nf.id, this.media.serverId, this.media.mediaId);
        this.comm.play(this.nf.id);
    }
};
