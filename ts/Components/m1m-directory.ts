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
    directories : Directory[];
    constructor(private cs : CommService) {

    }

    ngOnInit() : void {
        this.cs.browse(this.nf.serverId, this.nf.directory).then((data: DataBrowse) => {
            this.directories = data.directories;
            this.medias = data.medias;
        });
    }
    itemClick() {
        console.log("Directory : ", this.directories);
        this.cs.browse(this.nf.serverId, this.directories[0].directory).then((data: DataBrowse) => {
            this.cs.browse(this.nf.serverId, data.directories[1].directory).then((data1: DataBrowse) => {
                console.log("Donnees : ", data1);
                this.medias = data1.medias;
                this.cs.play(data1.medias[0].mediaId);
            });
        });

        console.log("All media : ", this.medias);
    }
};
