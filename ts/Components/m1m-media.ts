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
    renderer    : MediaRenderer = null;

    constructor(private comm : CommService) {

    }
    loadMedia() {
        // temporaire : permet de recuperer le lecteur de la machine
        this.comm.mediaRenderers.forEach((e) => {
            console.log(e);
            if(e.name === "Kodi (f217-12)") {
                this.renderer = e;
            }
        });
        // permet de lancer le media sur le lecteur (ne fonctionne pas)
        if (this.renderer !== null) {
            this.comm.loadMedia(this.renderer.id, this.nf.serverId, this.nf.mediaId).then(() => {
                this.comm.play(this.renderer.id);
                console.log("Media played : ", this.nf.title, " on ", this.renderer.name);
            });
        }
    }
};
