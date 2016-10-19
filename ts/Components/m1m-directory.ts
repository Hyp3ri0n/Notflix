/** Commentaire **/
import {Component, Input, OnInit} from "@angular/core";
import {Directory, CommService, DataBrowse} from "../Services/CommService";


@Component({
    selector		: "m1m-directory",
    templateUrl     : "ts/Components/Views/m1m-directory.html"
})

export class CompDirectory implements OnInit {
    @Input() nf         : Directory;
    directories         : Directory[]   = [];
    open                : boolean       = false;

    constructor(private cs : CommService) {

    }

    ngOnInit() : void {
        // Chargement des médias sans charger les médias dans le CommService (attribut FALSE)
        this.cs.browse(this.nf.serverId, this.nf.directory, false).then((data: DataBrowse) => {
            this.directories = data.directories;
        });
    }

    itemClick() {
        this.open = !this.open;
        // Chargement des médias avec chargement dans la liste de CommService
        this.cs.browse(this.nf.serverId, this.nf.directory, true).then((data: DataBrowse) => {
            this.directories = data.directories;
        });
    }
};
