/**
 * Created by fernaaur on 14/09/16.
 */
import { Component, Input 	} from "@angular/core";
import { Media} from "../Services/CommService";

const htmlTemplate = `
	<p (click)="displayLongDescription()">
	    le titre: {{nf.title}}
	</p>
`;

@Component({
    selector		: "m1m-media",
    template		: htmlTemplate,
    providers       : []
})

export class CompMedia {
    @Input() nf : Media;
    //constructor() {}
    displayLongDescription() {
        console.log( "Descirption du média:", this.nf.longdescription );
    }
};
