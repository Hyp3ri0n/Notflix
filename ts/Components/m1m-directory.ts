/** Commentaire **/
import { Component, Input } from "@angular/core";
import {Directory, CommService, DataBrowse, Media} from "../Services/CommService";


@Component({
    selector		: "m1m-directory",
    templateUrl     : "ts/Components/Views/m1m-directory.html"
})

export class CompDirectory {
    @Input() nf : Directory;
    medias      : Media[]       = [];
    directories : Directory[]   = [];
    open        : boolean = true;
    constructor(private cs : CommService) {

    }

    itemClick() {
        //this.open = !this.open;
        if(this.open) {
            this.cs.browse(this.nf.serverId, this.nf.directory).then((data: DataBrowse) => {
                this.directories = data.directories;
                this.medias = data.medias;
            });
        }
    }
};
