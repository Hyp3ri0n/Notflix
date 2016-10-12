/** Commentaire **/
import {Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import {MediaServer, CommService, DataBrowse, Directory} from "../Services/CommService";

const htmlTemplate = `
    <div class="paddingIconMenu">
        <div (click)="showInfo()">
            <div style="display: inline-block;"><i class="fa fa-server fa-2x" aria-hidden="true"></i></div>
            <div *ngIf="menuDisplayed" style="display: inline-block;">
                <div style="max-width: 300px; overflow: hidden; display: inline-block;">{{nf.name}}</div>
                <div *ngIf="crossDisplayed" style="display: inline-block;">
                    <i class="fa fa-times fa-2x" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div *ngIf="displayed" style="border: white solid 1px;">
            <m1m-directory [nf]="folder" *ngFor="let folder of directories"></m1m-directory>
        </div>
    </div>
`;

@Component({
    selector		: "m1m-server",
    template		: htmlTemplate
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
