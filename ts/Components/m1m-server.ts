/** Commentaire **/
import {Component, Input, OnInit, Output, EventEmitter, ElementRef} from "@angular/core";
import {MediaServer, CommService, DataBrowse, Directory, Media} from "../Services/CommService";


@Component({
    selector		: "m1m-server",
    templateUrl     : "ts/Components/Views/m1m-server.html"
})

export class CompServer implements OnInit {
    @Input() nf                     : MediaServer;
    @Input() menuDisplayed          : boolean;
    @Input() serverSelected         : boolean;
    @Output() eventSelectedServer   : EventEmitter<{}> = new EventEmitter();
    @Input() medias   : Media[];
    directories                     : Directory[];

    constructor( private cs : CommService, private element : ElementRef ) {
        console.log( "CommService:", cs );
    }
    ngOnInit(): void {
        this.cs.browse( this.nf.id ).then( (data: DataBrowse) => {
            this.directories = data.directories;
            console.log( "new directories:", data.directories );
        } );

        if(this.serverSelected) {
            this.element.nativeElement.children[0].classList.add("solo");
        }
    }
    showDirectories() {
        this.eventSelectedServer.emit({value: this.nf});
    }
};
