/** Commentaire **/
import {Component, Input} from "@angular/core";
import {Directory, CommService, DataBrowse} from "../Services/CommService";


@Component({
    selector		: "m1m-directory",
    templateUrl     : "ts/Components/Views/m1m-directory.html"
})

export class CompDirectory {
    @Input() nf         : Directory;
    directories         : Directory[]   = [];
    open                : boolean       = false;

    constructor(private cs : CommService) {

    }

    itemClick() {
        this.open = !this.open;
        console.log(this.open);

        this.cs.browse(this.nf.serverId, this.nf.directory).then((data: DataBrowse) => {
            this.directories = data.directories;
        });
    }
};
