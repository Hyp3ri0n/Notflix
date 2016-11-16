import { Component } from "@angular/core";
import {CommService, DataInit, MediaServer, MediaRenderer, Media} from "../Services/CommService";
import {AppService} from "../Services/AppService";


@Component({
    selector		: "comp-multimedia-manager",
    templateUrl     : "ts/Components/Views/m1m-multimedia-manager.html"
})
export class CompMultimediaManager {
/*    @Input() title	: string;*/
    mediaRenderers  : MediaRenderer[];
    mediaServers    : MediaServer  [];
    currentServer   : MediaServer = null;
    medias          : Media[] = [];
    menuDisplayed   : boolean = false;
    idInterval      : number;


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

    selectedServer(event) : void {
        console.log("Event from server, server : ", event);
        this.currentServer = this.currentServer === null ? event.value : null;
        if(this.currentServer !== null) {
            this.appService.setModeApp(this.appService.MODE_NAVIGATION);
        } else {
            this.appService.setModeApp(this.appService.MODE_HOME);
        }
        console.log("currentServer : ", this.currentServer);
    }

    scrollEnter(event : any, up : boolean) : void {
        let divLecteurs : Element = document.querySelector("#idDivListOfLecteurs");
        let facteur     : number  = 7;

        this.idInterval = setInterval(() => {
            if(up) {
                divLecteurs.scrollTop -= facteur;
            } else {
                divLecteurs.scrollTop += facteur;
            }
        }, 25);
    }

    scrollExit(event : any) : void {
        console.log("Scroll exit");
        clearInterval(this.idInterval);
    }

    // TODO : nginit boolean à false si pas de scroll (donc pas de flèche)

    isMedia() {
        return true;
    }


};
