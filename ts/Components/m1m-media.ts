/**
 * Created by fernaaur on 14/09/16.
 */
import { Component, Input 	} from "@angular/core";
import {Media, CommService, MediaRenderer} from "../Services/CommService";


@Component({
    selector		: "m1m-media",
    templateUrl     : "ts/Components/Views/m1m-media.html"
})

export class CompMedia {
    @Input() nf : Media;
    renderer    : MediaRenderer;

    constructor(private comm : CommService) {

    }

    loadMedia() {
        this.comm.mediaRenderers.forEach((e) => {
           if(e.name === "Kodi (F213-04)") {
               this.renderer = e;
           }
        });

        this.comm.loadMedia(this.renderer.id, this.nf.serverId, this.nf.mediaId).then(() => {
            this.comm.play(this.renderer.id);
            console.log("Media played : ", this.nf.title, " on ", this.renderer.name);
        });
    }
};
