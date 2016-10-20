import { Component, Input 	} from "@angular/core";
import {CommService, DataInit, MediaServer, MediaRenderer, Media} from "../Services/CommService";
import {AppService} from "../Services/AppService";


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


    constructor(private comm: CommService, private appService: AppService) {
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
            this.appService.setModeApp(this.appService.MODE_NAVIGATION);
        } else {
            this.appService.setModeApp(this.appService.MODE_HOME);
        }
        console.log("currentServer : ", this.currentServer);
    }
};
