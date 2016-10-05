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
                            <div style="display: inline-block;"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></div>
                            <div *ngIf="menuDisplayed" style="display: inline-block;">Menu</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="" style="height: 60%; color:white; overflow: hidden;">
                <div><m1m-server *ngFor="let server of mediaServers" [nf]="server" [menuDisplayed]="menuDisplayed" [crossDisplayed]="currentServer != null"></m1m-server></div>
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
                    template: htmlTemplate,
                    providers: [CommService_1.CommService]
                }), 
                __metadata('design:paramtypes', [CommService_1.CommService])
            ], CompMultimediaManager);
            exports_1("CompMultimediaManager", CompMultimediaManager);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLW11bHRpbWVkaWEtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBR00sWUFBWTs7Ozs7Ozs7OztZQUFaLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaUNwQixDQUFDO1lBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWlDRztZQU9IO2dCQU9JLFlBQW9CLElBQWlCO29CQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO29CQUhyQyxrQkFBYSxHQUFvQixJQUFJLENBQUM7b0JBQ3RDLFdBQU0sR0FBc0IsRUFBRSxDQUFDO29CQUMvQixrQkFBYSxHQUFlLEtBQUssQ0FBQztvQkFFOUIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUUsQ0FBQyxJQUFjO3dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFFLFNBQVMsRUFBRSxJQUFJLENBQUUsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQzVDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ0QsTUFBTSxDQUFFLEVBQWUsRUFBRSxXQUFtQjtvQkFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFFLENBQUMsSUFBSSxDQUFFLENBQUMsSUFBSTt3QkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDO3dCQUN4RCxFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7d0JBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCxTQUFTO29CQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztZQUNMLENBQUM7WUExQkc7Z0JBQUMsWUFBSyxFQUFFOztnRUFBQTtZQU5aO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFJLHlCQUF5QjtvQkFDckMsUUFBUSxFQUFJLFlBQVk7b0JBQ3hCLFNBQVMsRUFBUyxDQUFDLHlCQUFXLENBQUM7aUJBQ2xDLENBQUM7O3FDQUFBO1lBQ0YseURBMkJDLENBQUE7WUFBQSxDQUFDIiwiZmlsZSI6IkNvbXBvbmVudHMvbTFtLW11bHRpbWVkaWEtbWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgXHR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvbW1TZXJ2aWNlLCBEYXRhSW5pdCwgTWVkaWFTZXJ2ZXIsIE1lZGlhUmVuZGVyZXIsIE1lZGlhfSBmcm9tIFwiLi4vU2VydmljZXMvQ29tbVNlcnZpY2VcIjtcblxuY29uc3QgaHRtbFRlbXBsYXRlID0gYFxuICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbFdpZHRoXCIgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaHJpbmsgY29sdW1uc1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IGhlaWdodDogMTAwJTsgY29sb3I6d2hpdGU7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZGRpbmdJY29uTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIiAoY2xpY2spPVwibWVudUNsaWNrKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPjxpIGNsYXNzPVwiZmEgZmEtYmFycyBmYS0yeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibWVudURpc3BsYXllZFwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPk1lbnU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cImhlaWdodDogNjAlOyBjb2xvcjp3aGl0ZTsgb3ZlcmZsb3c6IGhpZGRlbjtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PjxtMW0tc2VydmVyICpuZ0Zvcj1cImxldCBzZXJ2ZXIgb2YgbWVkaWFTZXJ2ZXJzXCIgW25mXT1cInNlcnZlclwiIFttZW51RGlzcGxheWVkXT1cIm1lbnVEaXNwbGF5ZWRcIiBbY3Jvc3NEaXNwbGF5ZWRdPVwiY3VycmVudFNlcnZlciAhPSBudWxsXCI+PC9tMW0tc2VydmVyPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiIHN0eWxlPVwibWF4LWhlaWdodDogMjAlOyBjb2xvcjp3aGl0ZTtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFkZGluZ0ljb25NZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+PGkgY2xhc3M9XCJmYSBmYS1jb2cgZmEtMnhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJtZW51RGlzcGxheWVkXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+UGFyYW3DqHRyZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFkZGluZ0ljb25NZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+PGkgY2xhc3M9XCJmYSBmYS1wbGF5LWNpcmNsZS1vIGZhLTJ4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibWVudURpc3BsYXllZFwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPkVuIGNvdXJzPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGJhY2tncm91bmRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5OyBoZWlnaHQ6IDEwMCU7XCI+XG4gICAgICAgICAgICBDb250ZW50XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuLypcbiA8aDE+Q29tcG9zYW50IGRlIGdlc3Rpb24gZGVzIHJlc3NvdXJjZXMgbXVsdGltw6lkaWFzPC9oMT5cbiA8aHIvPlxuIHt7bWVkaWFzIHwganNvbn19XG4gPG0xbS1tZWRpYSAqbmdGb3I9XCJsZXQgbWVkaWEgb2YgbWVkaWFzXCIgW25mXT1cIm1lZGlhXCI+PC9tMW0tbWVkaWE+XG4gPGhyLz5cbiA8aDE+e3t0aXRsZX19PC9oMT5cbiA8aHIvPlxuIDxzZWN0aW9uPlxuIDxoMz5MaXN0ZSBkZXMgbGVjdGV1cnMgVVBuUC9ETE5BPC9oMz5cbiA8dWw+XG4gPGxpICpuZ0Zvcj1cImxldCByZW5kZXJlciBvZiBtZWRpYVJlbmRlcmVyc1wiPlxuIDxwPnt7cmVuZGVyZXIubmFtZX19PC9wPlxuIDwvbGk+XG4gPC91bD5cbiA8L3NlY3Rpb24+XG5cbiA8c2VjdGlvbj5cbiA8aDM+TGlzdGUgZGVzIHNlcnZldXJzIFVQblAvRExOQTwvaDM+XG4gPG0xbS1zZXJ2ZXIgKm5nRm9yPVwibGV0IHNlcnZlciBvZiBtZWRpYVNlcnZlcnNcIiBbbmZdPVwic2VydmVyXCI+PC9tMW0tc2VydmVyPlxuIDwhLS08dWw+XG4gPGxpICpuZ0Zvcj1cImxldCBzZXJ2ZXIgb2YgbWVkaWFTZXJ2ZXJzXCI+XG4gPHA+e3tzZXJ2ZXIubmFtZX19PC9wPlxuIDxwIChkYmxjbGljayk9XCJicm93c2Uoc2VydmVyKVwiPlxuIHt7c2VydmVyIHwganNvbn19XG4gPC9wPlxuIDxhICAqbmdGb3I9XCJsZXQgZGlyIG9mIHNlcnZlci5kaXJlY3Rvcmllc1wiXG4gKGRibGNsaWNrKT1cImJyb3dzZShzZXJ2ZXIsIGRpci5kaXJlY3RvcnkpXCI+XG4ge3tkaXIubmFtZX19XG4gPC9hPlxuIDwvbGk+XG4gPC91bD4tLT5cbiA8L3NlY3Rpb24+XG4gKi9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3JcdFx0OiBcImNvbXAtbXVsdGltZWRpYS1tYW5hZ2VyXCIsXG4gICAgdGVtcGxhdGVcdFx0OiBodG1sVGVtcGxhdGUsXG4gICAgcHJvdmlkZXJzICAgICAgIDogW0NvbW1TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wTXVsdGltZWRpYU1hbmFnZXIge1xuICAgIEBJbnB1dCgpIHRpdGxlXHQ6IHN0cmluZztcbiAgICBtZWRpYVJlbmRlcmVycyAgOiBNZWRpYVJlbmRlcmVyW107XG4gICAgbWVkaWFTZXJ2ZXJzICAgIDogTWVkaWFTZXJ2ZXIgIFtdO1xuICAgIGN1cnJlbnRTZXJ2ZXIgICAgOiBNZWRpYVNlcnZlciA9IG51bGw7XG4gICAgbWVkaWFzICAgICAgICAgIDogTWVkaWFbXSA9IFtdO1xuICAgIG1lbnVEaXNwbGF5ZWQgICA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW06IENvbW1TZXJ2aWNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCBcIkNvbW1TZXJ2aWNlOlwiLCBjb21tKTtcbiAgICAgICAgY29tbS5pbml0KCkuc3Vic2NyaWJlKCAoZGF0YTogRGF0YUluaXQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcImluaXQgPT5cIiwgZGF0YSApO1xuICAgICAgICAgICAgdGhpcy5tZWRpYVJlbmRlcmVycyA9IGRhdGEubWVkaWFSZW5kZXJlcnM7XG4gICAgICAgICAgICB0aGlzLm1lZGlhU2VydmVycyAgID0gZGF0YS5tZWRpYVNlcnZlcnM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBicm93c2UoIG1zOiBNZWRpYVNlcnZlciwgZGlyZWN0b3J5SWQgOnN0cmluZyApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbS5icm93c2UoIG1zLmlkLCBkaXJlY3RvcnlJZCApLnRoZW4oIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyggXCJCcm93c2VcIiwgbXMuaWQsIGRpcmVjdG9yeUlkLCBcIj0+XCIsIGRhdGEgKTtcbiAgICAgICAgICAgIG1zLmRpcmVjdG9yaWVzID0gZGF0YS5kaXJlY3RvcmllcztcbiAgICAgICAgICAgIHRoaXMubWVkaWFzID0gZGF0YS5tZWRpYXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1lbnVDbGljaygpIHtcbiAgICAgICAgdGhpcy5tZW51RGlzcGxheWVkID0gIXRoaXMubWVudURpc3BsYXllZDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tZW51RGlzcGxheWVkKTtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
