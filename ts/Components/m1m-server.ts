/** Commentaire **/
import {Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import {MediaServer, CommService, DataBrowse, Directory} from "../Services/CommService";


@Component({
    selector		: "m1m-server",
    templateUrl     : "./Views/m1m-server.html"
})

export class CompServer implements OnInit {
    @Input() nf             : MediaServer;
    @Input() menuDisplayed  : boolean;
    @Input() crossDisplayed : boolean;
    @Output() selectedServer: EventEmitter<{}> = new EventEmitter();
    displayed               : boolean = false;
    directories             : Directory[];
    constructor( private cs : CommService ) {
        console.log( "CommService:", cs );
    }
    ngOnInit(): void {
        this.cs.browse( this.nf.id ).then( (data: DataBrowse) => {
            this.directories = data.directories;
            console.log( "new directories:", data.directories );
        } );
    }
    showInfo() {
        this.displayed = !this.displayed;
        this.selectedServer.emit({value: this.nf});
    }
};
