/** Commentaire **/
import {Component, Input} from "@angular/core";
import {Directory, CommService, Media} from "../Services/CommService";


@Component({
    selector		: "m1m-media-container",
    templateUrl     : "ts/Components/Views/m1m-media-container.html"
})

export class CompContainerMedia {
    directory : Directory = null;
    @Input() mediasList : Media[];

    constructor(private cs : CommService) {

    }
};
