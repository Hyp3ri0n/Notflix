import {Component, Input, OnInit, ElementRef} from "@angular/core";
import {CommService, Media, MediaRenderer} from "../Services/CommService";

@Component({
    selector		: "m1m-media-manager",
    templateUrl     : "ts/Components/Views/m1m-media-manager.html"
})

export class CompMediaManager implements OnInit {
    @Input() nf	        : Media;


    constructor(private comm: CommService, private element: ElementRef) {
        console.log(comm);
    }

    ngOnInit() : void {
        console.log("media : ", this.nf);
    }

    launchMedia() {
        let selectedId : String = this.element.nativeElement.querySelector("select").value;
        let selectedRenderer : MediaRenderer = this.comm.mediaRenderers.find(x => x.id === selectedId);
        console.log("Launch on : ", selectedRenderer.name);
        this.comm.loadMedia(selectedRenderer.id, this.nf.serverId, this.nf.mediaId);
        this.comm.play(selectedRenderer.id);
    }

    backToDirectory() {
        console.log("Back to ...");
        //Si possible mettre en title de la flèche, le nom du répertoire parent.
        //simuler un click sur le répertoire courrant du menu navigation
    }
};
