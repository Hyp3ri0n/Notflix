import { Component, Input 	} from "@angular/core";
import {CommService, MediaRenderer } from "../Services/CommService";

@Component({
    selector		: "m1m-lecteur",
    templateUrl     : "ts/Components/Views/m1m-lecteur.html"
})

export class CompLecteur {
    @Input() renderer : MediaRenderer;

    constructor(private comm: CommService) {
        console.log("Service : ", this.comm);
    }

    play() : void {
        this.comm.play(this.renderer.id);
    }

    pause() : void {
        this.comm.pause(this.renderer.id);
    }

    stop() : void {
        this.comm.stop(this.renderer.id);
    }
};
