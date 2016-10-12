/** Commentaire **/
import { Component, Input 	} from "@angular/core";
import { Directory } from "../Services/CommService";

const htmlTemplate = `
	<div (click)="itemClick()">
        <i class="fa fa-folder-o" aria-hidden="true"></i>
        {{nf.name}}
	</div>
`;

@Component({
    selector		: "m1m-directory",
    template		: htmlTemplate
})

export class CompDirectory {
    @Input() nf : Directory;
    itemClick() {
        console.log(this.nf);
    }
};
