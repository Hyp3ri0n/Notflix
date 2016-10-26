/// <reference path="../typings/index.d.ts" />

import { platformBrowserDynamic }   from "@angular/platform-browser-dynamic";
import {Component}                  from "@angular/core";
import { BrowserModule }    		from "@angular/platform-browser";
import { NgModule } 				from "@angular/core";
import { FormsModule }   			from "@angular/forms";
import {HttpModule} 				from "@angular/http";

import { CompMultimediaManager } 	from "./Components/m1m-multimedia-manager";
import { CompMedia } 				from "./Components/m1m-media";
import { CompServer } 				from "./Components/m1m-server";
import { CompDirectory } 			from "./Components/m1m-directory";
import { CompLecteur } 				from "./Components/m1m-lecteur";
import { CommService } 				from "./Services/CommService";

import { DragDropModule }           from "./Components/dragNdrop/DragDropModule";
import {CompLecteurManager} from "./Components/m1m-lecteur-manager";
import {AppService} from "./Services/AppService";
import {CompMediaManager} from "./Components/m1m-media-manager";


@Component({
	selector	: "root-manager",
	template	: `<comp-multimedia-manager alx-dragdrop></comp-multimedia-manager>				  `
})
class RootManager {
}

//enableProdMode();
@NgModule({
	imports     : [BrowserModule, FormsModule, HttpModule, DragDropModule ],
	declarations: [RootManager, CompMultimediaManager, CompMedia, CompServer,
					CompDirectory, CompLecteur, CompLecteurManager, CompMediaManager],
	providers	: [CommService, AppService],
	bootstrap   : [RootManager]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
