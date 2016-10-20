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
};
