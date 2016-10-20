import { Component, Input 	} from "@angular/core";
import {CommService, DataInit, MediaServer, MediaRenderer, Media} from "../Services/CommService";


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

    HOME : number = 1;
    NAVIGATION : number = 2;
    SETTINGS : number = 3;
    LECTEURS : number = 4;

    content         : number = this.HOME;

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
        this.currentServer = this.currentServer === null ? event.value : null;
        if(this.currentServer !== null) {
            this.setContentDisplay(this.NAVIGATION);
        } else {
            this.setContentDisplay(this.HOME);
        }
        console.log("currentServer : ", this.currentServer);
    }

    setContentDisplay(cd : number) {
        this.content = cd;
    }
};
