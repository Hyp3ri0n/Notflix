/** Commentaire **/
import { Component, Input 	} from "@angular/core";
import { Directory } from "../Services/CommService";

const htmlTemplate = `
    <i (click)="itemClick()" class="fa fa-folder-o" aria-hidden="true"></i>
    {{nf.name}}
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
