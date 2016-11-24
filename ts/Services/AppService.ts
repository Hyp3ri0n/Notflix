import {Injectable} from "@angular/core";
import {Media, Directory} from "./CommService";

@Injectable()
export class AppService {
    MODE_HOME            : number = 1;
    MODE_NAVIGATION      : number = 2;
    MODE_SETTINGS        : number = 3;
    MODE_LECTEURS        : number = 4;
    MODE_MEDIA           : number = 5;

    public currentMedia         : Media;
    private modeApp             : number = this.MODE_HOME;
    private currentDirectory    : Directory = null;

    setModeApp(mode: number) : void {
        if (mode !== this.modeApp) {
            if (mode < 6 || mode > 0) {
                this.modeApp = mode;
                this.currentDirectory = null;
            }
        }
    }

    setCurrentDirectort(dir: Directory) : void {
        this.currentDirectory = dir;
    }

    getCurrentDirectory() : Directory {
        return this.currentDirectory;
    }

    /*isMobile() : boolean{
        let isMobile:boolean = {
            Android: function() {
                return navigator.userAgent.match('/Android/i');
            },
            BlackBerry: function() {
                return navigator.userAgent.match('/BlackBerry/i');
            },
            iOS: function() {
                return navigator.userAgent.match('/iPhone|iPad|iPod/i');
            },
            Opera: function() {
                return navigator.userAgent.match('/Opera Mini/i');
            },
            Windows: function() {
                return navigator.userAgent.match('/IEMobile/i');
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        return isMobile;
    }*/
}
