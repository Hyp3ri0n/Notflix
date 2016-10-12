import { Component, Input 	} from "@angular/core";
import {CommService, DataInit, MediaServer, MediaRenderer, Media} from "../Services/CommService";

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
    templateUrl     : "ts/Components/Views/m1m-multimedia-manager.html"
})
export class CompMultimediaManager {
    @Input() title	: string;
    mediaRenderers  : MediaRenderer[];
    mediaServers    : MediaServer  [];
    currentServer   : MediaServer = null;
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

    selectedServer(event) {
        console.log("Event from server, server : ", event);
        this.currentServer = this.currentServer === null ? event : null;
        console.log("currentServer : ", this.currentServer);
    }
};
