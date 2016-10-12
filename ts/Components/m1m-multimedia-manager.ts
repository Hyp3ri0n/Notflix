import { Component, Input 	} from "@angular/core";
import {CommService, DataInit, MediaServer, MediaRenderer, Media} from "../Services/CommService";

const htmlTemplate = `
    <div class="row fullWidth" style="height: 100%;">
        <!--MENU-->
        <div class="shrink columns" id="menu">
            <div class="hamburger paddingIconMenu">
                <div (click)="menuClick()">
                     <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
                    <div class="labelHamburger" *ngIf="menuDisplayed">Menu</div>
                </div>
            </div>
            <hr/>
            <div class="listServers">
                <m1m-server *ngFor="let server of mediaServers" 
                            [nf]="server" 
                            [menuDisplayed]="menuDisplayed" 
                            [crossDisplayed]="currentServer != null">
                </m1m-server>
            </div>
            <hr/>
            <div class="footerMenu">
                <div class="paddingIconMenu">
                    <div><i class="fa fa-cog fa-2x" aria-hidden="true"></i></div>
                    <div *ngIf="menuDisplayed">Paramètres</div>
                </div>
                <div class="paddingIconMenu">
                    <div>
                        <i class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i>
                    </div>
                    <div *ngIf="menuDisplayed">En cours</div>
                </div>
            </div>
        </div>
        <!--MAIN-->
        <div class="columns" id="main">
            <div class="filter">
                <div id="header">
                    Header
                </div>
                <div id="content">
                    Content
                </div>
                <div id="footer">
                    Footer
                </div>
            </div>
        </div>
    </div>
`;

/*
 <h1>Composant de gestion des ressources multimédias</h1>
 <hr/>
 {{medias | json}}
 <m1m-media *ngFor="let media of medias" [nf]="media"></m1m-media>
 <hr/>
 <h1>{{title}}</h1>
 <hr/>
 <section>
 <h3>Liste des lecteurs UPnP/DLNA</h3>
 <ul>
 <li *ngFor="let renderer of mediaRenderers">
 <p>{{renderer.name}}</p>
 </li>
 </ul>
 </section>

 <section>
 <h3>Liste des serveurs UPnP/DLNA</h3>
 <m1m-server *ngFor="let server of mediaServers" [nf]="server"></m1m-server>
 <!--<ul>
 <li *ngFor="let server of mediaServers">
 <p>{{server.name}}</p>
 <p (dblclick)="browse(server)">
 {{server | json}}
 </p>
 <a  *ngFor="let dir of server.directories"
 (dblclick)="browse(server, dir.directory)">
 {{dir.name}}
 </a>
 </li>
 </ul>-->
 </section>
 */

@Component({
    selector		: "comp-multimedia-manager",
    template		: htmlTemplate
})
export class CompMultimediaManager {
    @Input() title	: string;
    mediaRenderers  : MediaRenderer[];
    mediaServers    : MediaServer  [];
    currentServer    : MediaServer = null;
    medias          : Media[] = [];
    menuDisplayed   : boolean = false;
    constructor(private comm: CommService) {
        console.log( "CommService:", comm);
        comm.init().subscribe( (data: DataInit) => {
            console.log( "init =>", data );
            this.mediaRenderers = data.mediaRenderers;
            this.mediaServers   = data.mediaServers;
        });
    }
    browse( ms: MediaServer, directoryId :string ) {
        return this.comm.browse( ms.id, directoryId ).then( (data) => {
            console.log( "Browse", ms.id, directoryId, "=>", data );
            ms.directories = data.directories;
            this.medias = data.medias;
        });
    }

    menuClick() {
        this.menuDisplayed = !this.menuDisplayed;
        console.log(this.menuDisplayed);
    }
};
