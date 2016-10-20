import {Injectable} from "@angular/core";

@Injectable()
export class AppService {
    MODE_HOME            : number = 1;
    MODE_NAVIGATION      : number = 2;
    MODE_SETTINGS        : number = 3;
    MODE_LECTEURS        : number = 4;

    private modeApp      : number = this.MODE_HOME;
    private currentDirectory     : string;

    setModeApp(mode: number) : void {
        if(mode < 5 || mode > 0) {
            this.modeApp = mode;
        }
    }

    setCurrentDirectort(id: string) : void {
        this.currentDirectory = id;
    }
}
