/**
 * Created by fernaaur on 14/09/16.
 */
import { Component, Input 	} from "@angular/core";
import {Media, CommService, MediaRenderer} from "../Services/CommService";
import {AppService} from "../Services/AppService";


@Component({
    selector		: "m1m-media",
    templateUrl     : "ts/Components/Views/m1m-media.html"
})

export class CompMedia {
    @Input() nf : Media;
    renderer    : MediaRenderer = null;

    constructor(private comm : CommService, private app : AppService) {
        /* if(!this.app.isMobile()) {
            var medias = document.querySelectorAll(".draggableMedia");
            console.log(medias);
            medias.setAttribute("[alx-draggable]", "nf");
            medias.setAttribute("alx-dragstart-css", "mediaDrag");
        }*/
    }
    afficheMedia() {
        this.app.currentMedia = this.nf;
        this.app.setModeApp(this.app.MODE_MEDIA);
    }
};
