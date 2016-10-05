System.register(["@angular/core", "../Services/CommService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, CommService_1;
    var htmlTemplate, CompMultimediaManager;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CommService_1_1) {
                CommService_1 = CommService_1_1;
            }],
        execute: function() {
            htmlTemplate = `
    <div class="row fullWidth" style="height: 100%;">
        <div class="shrink columns" style="background-color: black; height: 100%; color:white;">
            <div class="">
                <div>
                    <div class="paddingIconMenu">
                        <div style="display: inline-block;" (click)="menuClick()">
                            <div style="display: inline-block;">
                                <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
                            </div>
                            <div *ngIf="menuDisplayed" style="display: inline-block;">Menu</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="" style="height: 60%; color:white; overflow: hidden;">
                <div>
                    <m1m-server *ngFor="let server of mediaServers" 
                                [nf]="server" 
                                [menuDisplayed]="menuDisplayed" 
                                [crossDisplayed]="currentServer != null">
                    </m1m-server>
                </div>
            </div>
            <hr/>
            <div class="" style="max-height: 20%; color:white;">
                <div class="paddingIconMenu">
                    <div style="display: inline-block;"><i class="fa fa-cog fa-2x" aria-hidden="true"></i></div>
                    <div *ngIf="menuDisplayed" style="display: inline-block;">Paramètres</div>
                </div>
                <div class="paddingIconMenu">
                    <div style="display: inline-block;"><i class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i></div>
                    <div *ngIf="menuDisplayed" style="display: inline-block;">En cours</div>
                </div>
            </div>
        </div>
        <div class="columns background" style="background-color: darkgray; height: 100%;">
            Content
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
            let CompMultimediaManager = class CompMultimediaManager {
                constructor(comm) {
                    this.comm = comm;
                    this.currentServer = null;
                    this.medias = [];
                    this.menuDisplayed = false;
                    console.log("CommService:", comm);
                    comm.init().subscribe((data) => {
                        console.log("init =>", data);
                        this.mediaRenderers = data.mediaRenderers;
                        this.mediaServers = data.mediaServers;
                    });
                }
                browse(ms, directoryId) {
                    return this.comm.browse(ms.id, directoryId).then((data) => {
                        console.log("Browse", ms.id, directoryId, "=>", data);
                        ms.directories = data.directories;
                        this.medias = data.medias;
                    });
                }
                menuClick() {
                    this.menuDisplayed = !this.menuDisplayed;
                    console.log(this.menuDisplayed);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], CompMultimediaManager.prototype, "title", void 0);
            CompMultimediaManager = __decorate([
                core_1.Component({
                    selector: "comp-multimedia-manager",
                    template: htmlTemplate
                }), 
                __metadata('design:paramtypes', [CommService_1.CommService])
            ], CompMultimediaManager);
            exports_1("CompMultimediaManager", CompMultimediaManager);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLW11bHRpbWVkaWEtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBR00sWUFBWTs7Ozs7Ozs7OztZQUFaLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F5Q3BCLENBQUM7WUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBaUNHO1lBTUg7Z0JBT0ksWUFBb0IsSUFBaUI7b0JBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7b0JBSHJDLGtCQUFhLEdBQW9CLElBQUksQ0FBQztvQkFDdEMsV0FBTSxHQUFzQixFQUFFLENBQUM7b0JBQy9CLGtCQUFhLEdBQWUsS0FBSyxDQUFDO29CQUU5QixPQUFPLENBQUMsR0FBRyxDQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBRSxDQUFDLElBQWM7d0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUUsU0FBUyxFQUFFLElBQUksQ0FBRSxDQUFDO3dCQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7d0JBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUssSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDNUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFDRCxNQUFNLENBQUUsRUFBZSxFQUFFLFdBQW1CO29CQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBQyxJQUFJO3dCQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFFLENBQUM7d0JBQ3hELEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUM5QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELFNBQVM7b0JBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO1lBQ0wsQ0FBQztZQTFCRztnQkFBQyxZQUFLLEVBQUU7O2dFQUFBO1lBTFo7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUkseUJBQXlCO29CQUNyQyxRQUFRLEVBQUksWUFBWTtpQkFDM0IsQ0FBQzs7cUNBQUE7WUFDRix5REEyQkMsQ0FBQTtZQUFBLENBQUMiLCJmaWxlIjoiQ29tcG9uZW50cy9tMW0tbXVsdGltZWRpYS1tYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCBcdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q29tbVNlcnZpY2UsIERhdGFJbml0LCBNZWRpYVNlcnZlciwgTWVkaWFSZW5kZXJlciwgTWVkaWF9IGZyb20gXCIuLi9TZXJ2aWNlcy9Db21tU2VydmljZVwiO1xuXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsV2lkdGhcIiBzdHlsZT1cImhlaWdodDogMTAwJTtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNocmluayBjb2x1bW5zXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgaGVpZ2h0OiAxMDAlOyBjb2xvcjp3aGl0ZTtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFkZGluZ0ljb25NZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiIChjbGljayk9XCJtZW51Q2xpY2soKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYmFycyBmYS0yeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibWVudURpc3BsYXllZFwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPk1lbnU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cImhlaWdodDogNjAlOyBjb2xvcjp3aGl0ZTsgb3ZlcmZsb3c6IGhpZGRlbjtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bTFtLXNlcnZlciAqbmdGb3I9XCJsZXQgc2VydmVyIG9mIG1lZGlhU2VydmVyc1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmZdPVwic2VydmVyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttZW51RGlzcGxheWVkXT1cIm1lbnVEaXNwbGF5ZWRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nyb3NzRGlzcGxheWVkXT1cImN1cnJlbnRTZXJ2ZXIgIT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8L20xbS1zZXJ2ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiAyMCU7IGNvbG9yOndoaXRlO1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWRkaW5nSWNvbk1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj48aSBjbGFzcz1cImZhIGZhLWNvZyBmYS0yeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm1lbnVEaXNwbGF5ZWRcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj5QYXJhbcOodHJlczwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWRkaW5nSWNvbk1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj48aSBjbGFzcz1cImZhIGZhLXBsYXktY2lyY2xlLW8gZmEtMnhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJtZW51RGlzcGxheWVkXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+RW4gY291cnM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgYmFja2dyb3VuZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7IGhlaWdodDogMTAwJTtcIj5cbiAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuXG4vKlxuIDxoMT5Db21wb3NhbnQgZGUgZ2VzdGlvbiBkZXMgcmVzc291cmNlcyBtdWx0aW3DqWRpYXM8L2gxPlxuIDxoci8+XG4ge3ttZWRpYXMgfCBqc29ufX1cbiA8bTFtLW1lZGlhICpuZ0Zvcj1cImxldCBtZWRpYSBvZiBtZWRpYXNcIiBbbmZdPVwibWVkaWFcIj48L20xbS1tZWRpYT5cbiA8aHIvPlxuIDxoMT57e3RpdGxlfX08L2gxPlxuIDxoci8+XG4gPHNlY3Rpb24+XG4gPGgzPkxpc3RlIGRlcyBsZWN0ZXVycyBVUG5QL0RMTkE8L2gzPlxuIDx1bD5cbiA8bGkgKm5nRm9yPVwibGV0IHJlbmRlcmVyIG9mIG1lZGlhUmVuZGVyZXJzXCI+XG4gPHA+e3tyZW5kZXJlci5uYW1lfX08L3A+XG4gPC9saT5cbiA8L3VsPlxuIDwvc2VjdGlvbj5cblxuIDxzZWN0aW9uPlxuIDxoMz5MaXN0ZSBkZXMgc2VydmV1cnMgVVBuUC9ETE5BPC9oMz5cbiA8bTFtLXNlcnZlciAqbmdGb3I9XCJsZXQgc2VydmVyIG9mIG1lZGlhU2VydmVyc1wiIFtuZl09XCJzZXJ2ZXJcIj48L20xbS1zZXJ2ZXI+XG4gPCEtLTx1bD5cbiA8bGkgKm5nRm9yPVwibGV0IHNlcnZlciBvZiBtZWRpYVNlcnZlcnNcIj5cbiA8cD57e3NlcnZlci5uYW1lfX08L3A+XG4gPHAgKGRibGNsaWNrKT1cImJyb3dzZShzZXJ2ZXIpXCI+XG4ge3tzZXJ2ZXIgfCBqc29ufX1cbiA8L3A+XG4gPGEgICpuZ0Zvcj1cImxldCBkaXIgb2Ygc2VydmVyLmRpcmVjdG9yaWVzXCJcbiAoZGJsY2xpY2spPVwiYnJvd3NlKHNlcnZlciwgZGlyLmRpcmVjdG9yeSlcIj5cbiB7e2Rpci5uYW1lfX1cbiA8L2E+XG4gPC9saT5cbiA8L3VsPi0tPlxuIDwvc2VjdGlvbj5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3Rvclx0XHQ6IFwiY29tcC1tdWx0aW1lZGlhLW1hbmFnZXJcIixcbiAgICB0ZW1wbGF0ZVx0XHQ6IGh0bWxUZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBDb21wTXVsdGltZWRpYU1hbmFnZXIge1xuICAgIEBJbnB1dCgpIHRpdGxlXHQ6IHN0cmluZztcbiAgICBtZWRpYVJlbmRlcmVycyAgOiBNZWRpYVJlbmRlcmVyW107XG4gICAgbWVkaWFTZXJ2ZXJzICAgIDogTWVkaWFTZXJ2ZXIgIFtdO1xuICAgIGN1cnJlbnRTZXJ2ZXIgICAgOiBNZWRpYVNlcnZlciA9IG51bGw7XG4gICAgbWVkaWFzICAgICAgICAgIDogTWVkaWFbXSA9IFtdO1xuICAgIG1lbnVEaXNwbGF5ZWQgICA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW06IENvbW1TZXJ2aWNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCBcIkNvbW1TZXJ2aWNlOlwiLCBjb21tKTtcbiAgICAgICAgY29tbS5pbml0KCkuc3Vic2NyaWJlKCAoZGF0YTogRGF0YUluaXQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcImluaXQgPT5cIiwgZGF0YSApO1xuICAgICAgICAgICAgdGhpcy5tZWRpYVJlbmRlcmVycyA9IGRhdGEubWVkaWFSZW5kZXJlcnM7XG4gICAgICAgICAgICB0aGlzLm1lZGlhU2VydmVycyAgID0gZGF0YS5tZWRpYVNlcnZlcnM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBicm93c2UoIG1zOiBNZWRpYVNlcnZlciwgZGlyZWN0b3J5SWQgOnN0cmluZyApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbS5icm93c2UoIG1zLmlkLCBkaXJlY3RvcnlJZCApLnRoZW4oIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyggXCJCcm93c2VcIiwgbXMuaWQsIGRpcmVjdG9yeUlkLCBcIj0+XCIsIGRhdGEgKTtcbiAgICAgICAgICAgIG1zLmRpcmVjdG9yaWVzID0gZGF0YS5kaXJlY3RvcmllcztcbiAgICAgICAgICAgIHRoaXMubWVkaWFzID0gZGF0YS5tZWRpYXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1lbnVDbGljaygpIHtcbiAgICAgICAgdGhpcy5tZW51RGlzcGxheWVkID0gIXRoaXMubWVudURpc3BsYXllZDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tZW51RGlzcGxheWVkKTtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
