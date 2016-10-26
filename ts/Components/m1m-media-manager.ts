import {Component, Input, OnInit, ElementRef} from "@angular/core";
import {CommService, Media} from "../Services/CommService";

@Component({
    selector		: "m1m-media-manager",
    templateUrl     : "ts/Components/Views/m1m-media-manager.html"
})

export class CompMediaManager implements OnInit {
    @Input() nf	        : Media;


    constructor(private comm: CommService, private element: ElementRef) {
        console.log(comm);
    }

    ngOnInit() : void {
        console.log("media : ", this.nf);
    }
};
