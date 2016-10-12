/** Commentaire **/
import { Component, Input, OnInit	} from "@angular/core";
import {Directory, CommService, DataBrowse, Media} from "../Services/CommService";

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

export class CompDirectory implements OnInit{
    @Input() nf : Directory;
    medias      : Media[];
    constructor(private cs : CommService) {

    }
    ngOnInit() : void {
        this.cs.browse(this.nf.serverId).then((data: DataBrowse) => {
            this.medias = data.medias;
        });
    }
    itemClick() {
        console.log(this.nf);
    }
};
