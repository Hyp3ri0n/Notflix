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
                                (selectedServer)="selectedServer($event)"
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
                selectedServer(event) {
                    console.log("Event from server, server : ", event);
                    this.currentServer = this.currentServer === null ? event : null;
                    console.log("currentServer : ", this.currentServer);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLW11bHRpbWVkaWEtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBR00sWUFBWTs7Ozs7Ozs7OztZQUFaLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMENwQixDQUFDO1lBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWlDRztZQU1IO2dCQVFJLFlBQW9CLElBQWlCO29CQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO29CQUpyQyxrQkFBYSxHQUFtQixJQUFJLENBQUM7b0JBQ3JDLFdBQU0sR0FBc0IsRUFBRSxDQUFDO29CQUMvQixrQkFBYSxHQUFlLEtBQUssQ0FBQztvQkFHOUIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUUsQ0FBQyxJQUFjO3dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFFLFNBQVMsRUFBRSxJQUFJLENBQUUsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQzVDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ0QsTUFBTSxDQUFFLEVBQWUsRUFBRSxXQUFtQjtvQkFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFFLENBQUMsSUFBSSxDQUFFLENBQUMsSUFBSTt3QkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDO3dCQUN4RCxFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7d0JBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCxTQUFTO29CQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCxjQUFjLENBQUMsS0FBSztvQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDeEQsQ0FBQztZQUNMLENBQUM7WUFqQ0c7Z0JBQUMsWUFBSyxFQUFFOztnRUFBQTtZQUxaO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFJLHlCQUF5QjtvQkFDckMsUUFBUSxFQUFJLFlBQVk7aUJBQzNCLENBQUM7O3FDQUFBO1lBQ0YseURBa0NDLENBQUE7WUFBQSxDQUFDIiwiZmlsZSI6IkNvbXBvbmVudHMvbTFtLW11bHRpbWVkaWEtbWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgXHR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvbW1TZXJ2aWNlLCBEYXRhSW5pdCwgTWVkaWFTZXJ2ZXIsIE1lZGlhUmVuZGVyZXIsIE1lZGlhfSBmcm9tIFwiLi4vU2VydmljZXMvQ29tbVNlcnZpY2VcIjtcblxuY29uc3QgaHRtbFRlbXBsYXRlID0gYFxuICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbFdpZHRoXCIgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaHJpbmsgY29sdW1uc1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IGhlaWdodDogMTAwJTsgY29sb3I6d2hpdGU7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZGRpbmdJY29uTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIiAoY2xpY2spPVwibWVudUNsaWNrKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWJhcnMgZmEtMnhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm1lbnVEaXNwbGF5ZWRcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj5NZW51PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCIgc3R5bGU9XCJoZWlnaHQ6IDYwJTsgY29sb3I6d2hpdGU7IG92ZXJmbG93OiBoaWRkZW47XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPG0xbS1zZXJ2ZXIgKm5nRm9yPVwibGV0IHNlcnZlciBvZiBtZWRpYVNlcnZlcnNcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25mXT1cInNlcnZlclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVudURpc3BsYXllZF09XCJtZW51RGlzcGxheWVkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZFNlcnZlcik9XCJzZWxlY3RlZFNlcnZlcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Nyb3NzRGlzcGxheWVkXT1cImN1cnJlbnRTZXJ2ZXIgIT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8L20xbS1zZXJ2ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiAyMCU7IGNvbG9yOndoaXRlO1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWRkaW5nSWNvbk1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj48aSBjbGFzcz1cImZhIGZhLWNvZyBmYS0yeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm1lbnVEaXNwbGF5ZWRcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj5QYXJhbcOodHJlczwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWRkaW5nSWNvbk1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj48aSBjbGFzcz1cImZhIGZhLXBsYXktY2lyY2xlLW8gZmEtMnhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJtZW51RGlzcGxheWVkXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+RW4gY291cnM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgYmFja2dyb3VuZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7IGhlaWdodDogMTAwJTtcIj5cbiAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuXG4vKlxuIDxoMT5Db21wb3NhbnQgZGUgZ2VzdGlvbiBkZXMgcmVzc291cmNlcyBtdWx0aW3DqWRpYXM8L2gxPlxuIDxoci8+XG4ge3ttZWRpYXMgfCBqc29ufX1cbiA8bTFtLW1lZGlhICpuZ0Zvcj1cImxldCBtZWRpYSBvZiBtZWRpYXNcIiBbbmZdPVwibWVkaWFcIj48L20xbS1tZWRpYT5cbiA8aHIvPlxuIDxoMT57e3RpdGxlfX08L2gxPlxuIDxoci8+XG4gPHNlY3Rpb24+XG4gPGgzPkxpc3RlIGRlcyBsZWN0ZXVycyBVUG5QL0RMTkE8L2gzPlxuIDx1bD5cbiA8bGkgKm5nRm9yPVwibGV0IHJlbmRlcmVyIG9mIG1lZGlhUmVuZGVyZXJzXCI+XG4gPHA+e3tyZW5kZXJlci5uYW1lfX08L3A+XG4gPC9saT5cbiA8L3VsPlxuIDwvc2VjdGlvbj5cblxuIDxzZWN0aW9uPlxuIDxoMz5MaXN0ZSBkZXMgc2VydmV1cnMgVVBuUC9ETE5BPC9oMz5cbiA8bTFtLXNlcnZlciAqbmdGb3I9XCJsZXQgc2VydmVyIG9mIG1lZGlhU2VydmVyc1wiIFtuZl09XCJzZXJ2ZXJcIj48L20xbS1zZXJ2ZXI+XG4gPCEtLTx1bD5cbiA8bGkgKm5nRm9yPVwibGV0IHNlcnZlciBvZiBtZWRpYVNlcnZlcnNcIj5cbiA8cD57e3NlcnZlci5uYW1lfX08L3A+XG4gPHAgKGRibGNsaWNrKT1cImJyb3dzZShzZXJ2ZXIpXCI+XG4ge3tzZXJ2ZXIgfCBqc29ufX1cbiA8L3A+XG4gPGEgICpuZ0Zvcj1cImxldCBkaXIgb2Ygc2VydmVyLmRpcmVjdG9yaWVzXCJcbiAoZGJsY2xpY2spPVwiYnJvd3NlKHNlcnZlciwgZGlyLmRpcmVjdG9yeSlcIj5cbiB7e2Rpci5uYW1lfX1cbiA8L2E+XG4gPC9saT5cbiA8L3VsPi0tPlxuIDwvc2VjdGlvbj5cbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3Rvclx0XHQ6IFwiY29tcC1tdWx0aW1lZGlhLW1hbmFnZXJcIixcbiAgICB0ZW1wbGF0ZVx0XHQ6IGh0bWxUZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBDb21wTXVsdGltZWRpYU1hbmFnZXIge1xuICAgIEBJbnB1dCgpIHRpdGxlXHQ6IHN0cmluZztcbiAgICBtZWRpYVJlbmRlcmVycyAgOiBNZWRpYVJlbmRlcmVyW107XG4gICAgbWVkaWFTZXJ2ZXJzICAgIDogTWVkaWFTZXJ2ZXIgIFtdO1xuICAgIGN1cnJlbnRTZXJ2ZXIgICA6IE1lZGlhU2VydmVyID0gbnVsbDtcbiAgICBtZWRpYXMgICAgICAgICAgOiBNZWRpYVtdID0gW107XG4gICAgbWVudURpc3BsYXllZCAgIDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21tOiBDb21tU2VydmljZSkge1xuICAgICAgICBjb25zb2xlLmxvZyggXCJDb21tU2VydmljZTpcIiwgY29tbSk7XG4gICAgICAgIGNvbW0uaW5pdCgpLnN1YnNjcmliZSggKGRhdGE6IERhdGFJbml0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyggXCJpbml0ID0+XCIsIGRhdGEgKTtcbiAgICAgICAgICAgIHRoaXMubWVkaWFSZW5kZXJlcnMgPSBkYXRhLm1lZGlhUmVuZGVyZXJzO1xuICAgICAgICAgICAgdGhpcy5tZWRpYVNlcnZlcnMgICA9IGRhdGEubWVkaWFTZXJ2ZXJzO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYnJvd3NlKCBtczogTWVkaWFTZXJ2ZXIsIGRpcmVjdG9yeUlkIDpzdHJpbmcgKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbW0uYnJvd3NlKCBtcy5pZCwgZGlyZWN0b3J5SWQgKS50aGVuKCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coIFwiQnJvd3NlXCIsIG1zLmlkLCBkaXJlY3RvcnlJZCwgXCI9PlwiLCBkYXRhICk7XG4gICAgICAgICAgICBtcy5kaXJlY3RvcmllcyA9IGRhdGEuZGlyZWN0b3JpZXM7XG4gICAgICAgICAgICB0aGlzLm1lZGlhcyA9IGRhdGEubWVkaWFzO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtZW51Q2xpY2soKSB7XG4gICAgICAgIHRoaXMubWVudURpc3BsYXllZCA9ICF0aGlzLm1lbnVEaXNwbGF5ZWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVudURpc3BsYXllZCk7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWRTZXJ2ZXIoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmVudCBmcm9tIHNlcnZlciwgc2VydmVyIDogXCIsIGV2ZW50KTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VydmVyID0gdGhpcy5jdXJyZW50U2VydmVyID09PSBudWxsID8gZXZlbnQgOiBudWxsO1xuICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRTZXJ2ZXIgOiBcIiwgdGhpcy5jdXJyZW50U2VydmVyKTtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
