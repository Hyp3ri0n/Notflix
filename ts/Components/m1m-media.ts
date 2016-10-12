/**
 * Created by fernaaur on 14/09/16.
 */
import { Component, Input 	} from "@angular/core";
import { Media} from "../Services/CommService";


@Component({
    selector		: "m1m-media",
    templateUrl     : "ts/Components/Views/m1m-media.html"
})

export class CompMedia {
    @Input() nf : Media;
    //constructor() {}
    displayLongDescription() {
        console.log( "Description du média:", this.nf.longdescription );
    }
};
