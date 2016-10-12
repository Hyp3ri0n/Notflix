/** Commentaire **/
import { Component, Input, OnInit	} from "@angular/core";
import {Directory, CommService, DataBrowse, Media} from "../Services/CommService";


@Component({
    selector		: "m1m-directory",
    templateUrl     : "ts/Components/Views/m1m-directory.html"
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
