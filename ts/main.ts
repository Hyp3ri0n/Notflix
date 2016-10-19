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
import {CompContainerMedia} 		from "./Components/m1m-media-container";

@Component({
	selector	: "root-manager",
	template	: `<comp-multimedia-manager title="Gestion des services UPnP/DLNA"></comp-multimedia-manager>
				  `
})
class RootManager {
}

//enableProdMode();
@NgModule({
	imports     : [BrowserModule, FormsModule, HttpModule],
	declarations: [RootManager, CompMultimediaManager, CompMedia, CompServer, CompDirectory, CompLecteur, CompContainerMedia],
	providers	: [CommService],
	bootstrap   : [RootManager]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
