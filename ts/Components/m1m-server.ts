/** Commentaire **/
import {Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import {MediaServer, CommService, DataBrowse, Directory} from "../Services/CommService";

const htmlTemplate = `
    <div class="paddingIconMenu">
        <div class="itemServer" (click)="showInfo()">
            <i class="fa fa-server fa-2x" aria-hidden="true"></i>
            <div *ngIf="menuDisplayed">
                <div class="labelServer">{{nf.name}}</div>
                <i *ngIf="crossDisplayed" class="fa fa-times fa-2x" aria-hidden="true"></i>
            </div>
        <div class="listDirectories" *ngIf="displayed">
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
    @Output() selectedServer = new EventEmitter();
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
    }
};
