/** Commentaire **/
import {Component, Input, OnInit, ElementRef} from "@angular/core";
import {Directory, CommService, DataBrowse} from "../Services/CommService";
import {AppService} from "../Services/AppService";


@Component({
    selector		: "m1m-directory",
    templateUrl     : "ts/Components/Views/m1m-directory.html"
})

export class CompDirectory implements OnInit {
    @Input() nf         : Directory;
    directories         : Directory[]   = [];
    open                : boolean       = false;

    constructor(private cs : CommService, private element: ElementRef, private as : AppService) {

    }

    ngOnInit() : void {
        // Chargement des médias sans charger les médias dans le CommService (attribut FALSE)
        this.cs.browse(this.nf.serverId, this.nf.directory, false).then((data: DataBrowse) => {
            this.directories = data.directories;
        });
    }

    itemClick() {
        this.as.setModeApp(this.as.MODE_NAVIGATION);

        [].forEach.call(document.querySelectorAll(".activeDirectory"), function (el) {
            el.classList.remove("activeDirectory");
        });
        this.element.nativeElement.children[0].classList.add("activeDirectory");

        this.open = !this.open;
        if(this.open) {
            //this.element.nativeElement.classList.add("activeDirectory");
        }
        // Chargement des médias avec chargement dans la liste de CommService
        this.cs.browse(this.nf.serverId, this.nf.directory, true).then((data: DataBrowse) => {
            this.directories = data.directories;
        });
    }
};
