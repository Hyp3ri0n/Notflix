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
        <!--MENU-->
        <div class="shrink columns" id="menu">
            <div class="hamburger paddingIconMenu">
                <div (click)="menuClick()">
                     <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
                    <div class="labelHamburger" *ngIf="menuDisplayed">Menu</div>
                </div>
            </div>
            <hr/>
            <div class="listServers">
                <div>
                    <m1m-server *ngFor="let server of mediaServers" 
                                [nf]="server" 
                                [menuDisplayed]="menuDisplayed" 
                                [crossDisplayed]="currentServer != null">
                    </m1m-server>
                </div>
            </div>
            <hr/>
            <div class="footerMenu">
                <div class="paddingIconMenu">
                    <div><i class="fa fa-cog fa-2x" aria-hidden="true"></i></div>
                    <div *ngIf="menuDisplayed">Paramètres</div>
                </div>
                <div class="paddingIconMenu">
                    <div>
                        <i class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i>
                    </div>
                    <div *ngIf="menuDisplayed">En cours</div>
                </div>
            </div>
        </div>
        <!--MAIN-->
        <div class="columns" id="main">
            <div class="filter">
                <div id="header">
                    Header
                </div>
                <div id="content">
                    Content
                </div>
                <div id="footer">
                    Footer
                </div>
            </div>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLW11bHRpbWVkaWEtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBR00sWUFBWTs7Ozs7Ozs7OztZQUFaLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWlEcEIsQ0FBQztZQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFpQ0c7WUFNSDtnQkFPSSxZQUFvQixJQUFpQjtvQkFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtvQkFIckMsa0JBQWEsR0FBb0IsSUFBSSxDQUFDO29CQUN0QyxXQUFNLEdBQXNCLEVBQUUsQ0FBQztvQkFDL0Isa0JBQWEsR0FBZSxLQUFLLENBQUM7b0JBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFFLENBQUMsSUFBYzt3QkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxTQUFTLEVBQUUsSUFBSSxDQUFFLENBQUM7d0JBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQzt3QkFDMUMsSUFBSSxDQUFDLFlBQVksR0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUM1QyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUNELE1BQU0sQ0FBRSxFQUFlLEVBQUUsV0FBbUI7b0JBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBRSxDQUFDLElBQUksQ0FBRSxDQUFDLElBQUk7d0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUUsQ0FBQzt3QkFDeEQsRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO3dCQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzlCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsU0FBUztvQkFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztvQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7WUFDTCxDQUFDO1lBMUJHO2dCQUFDLFlBQUssRUFBRTs7Z0VBQUE7WUFMWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBSSx5QkFBeUI7b0JBQ3JDLFFBQVEsRUFBSSxZQUFZO2lCQUMzQixDQUFDOztxQ0FBQTtZQUNGLHlEQTJCQyxDQUFBO1lBQUEsQ0FBQyIsImZpbGUiOiJDb21wb25lbnRzL20xbS1tdWx0aW1lZGlhLW1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IFx0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDb21tU2VydmljZSwgRGF0YUluaXQsIE1lZGlhU2VydmVyLCBNZWRpYVJlbmRlcmVyLCBNZWRpYX0gZnJvbSBcIi4uL1NlcnZpY2VzL0NvbW1TZXJ2aWNlXCI7XG5cbmNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGxXaWR0aFwiIHN0eWxlPVwiaGVpZ2h0OiAxMDAlO1wiPlxuICAgICAgICA8IS0tTUVOVS0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hyaW5rIGNvbHVtbnNcIiBpZD1cIm1lbnVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYW1idXJnZXIgcGFkZGluZ0ljb25NZW51XCI+XG4gICAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwibWVudUNsaWNrKClcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYmFycyBmYS0yeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsSGFtYnVyZ2VyXCIgKm5nSWY9XCJtZW51RGlzcGxheWVkXCI+TWVudTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RTZXJ2ZXJzXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPG0xbS1zZXJ2ZXIgKm5nRm9yPVwibGV0IHNlcnZlciBvZiBtZWRpYVNlcnZlcnNcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25mXT1cInNlcnZlclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWVudURpc3BsYXllZF09XCJtZW51RGlzcGxheWVkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjcm9zc0Rpc3BsYXllZF09XCJjdXJyZW50U2VydmVyICE9IG51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9tMW0tc2VydmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlck1lbnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFkZGluZ0ljb25NZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PGkgY2xhc3M9XCJmYSBmYS1jb2cgZmEtMnhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJtZW51RGlzcGxheWVkXCI+UGFyYW3DqHRyZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFkZGluZ0ljb25NZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsYXktY2lyY2xlLW8gZmEtMnhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibWVudURpc3BsYXllZFwiPkVuIGNvdXJzPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS1NQUlOLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCIgaWQ9XCJtYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICBIZWFkZXJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICBGb290ZXJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG5cbi8qXG4gPGgxPkNvbXBvc2FudCBkZSBnZXN0aW9uIGRlcyByZXNzb3VyY2VzIG11bHRpbcOpZGlhczwvaDE+XG4gPGhyLz5cbiB7e21lZGlhcyB8IGpzb259fVxuIDxtMW0tbWVkaWEgKm5nRm9yPVwibGV0IG1lZGlhIG9mIG1lZGlhc1wiIFtuZl09XCJtZWRpYVwiPjwvbTFtLW1lZGlhPlxuIDxoci8+XG4gPGgxPnt7dGl0bGV9fTwvaDE+XG4gPGhyLz5cbiA8c2VjdGlvbj5cbiA8aDM+TGlzdGUgZGVzIGxlY3RldXJzIFVQblAvRExOQTwvaDM+XG4gPHVsPlxuIDxsaSAqbmdGb3I9XCJsZXQgcmVuZGVyZXIgb2YgbWVkaWFSZW5kZXJlcnNcIj5cbiA8cD57e3JlbmRlcmVyLm5hbWV9fTwvcD5cbiA8L2xpPlxuIDwvdWw+XG4gPC9zZWN0aW9uPlxuXG4gPHNlY3Rpb24+XG4gPGgzPkxpc3RlIGRlcyBzZXJ2ZXVycyBVUG5QL0RMTkE8L2gzPlxuIDxtMW0tc2VydmVyICpuZ0Zvcj1cImxldCBzZXJ2ZXIgb2YgbWVkaWFTZXJ2ZXJzXCIgW25mXT1cInNlcnZlclwiPjwvbTFtLXNlcnZlcj5cbiA8IS0tPHVsPlxuIDxsaSAqbmdGb3I9XCJsZXQgc2VydmVyIG9mIG1lZGlhU2VydmVyc1wiPlxuIDxwPnt7c2VydmVyLm5hbWV9fTwvcD5cbiA8cCAoZGJsY2xpY2spPVwiYnJvd3NlKHNlcnZlcilcIj5cbiB7e3NlcnZlciB8IGpzb259fVxuIDwvcD5cbiA8YSAgKm5nRm9yPVwibGV0IGRpciBvZiBzZXJ2ZXIuZGlyZWN0b3JpZXNcIlxuIChkYmxjbGljayk9XCJicm93c2Uoc2VydmVyLCBkaXIuZGlyZWN0b3J5KVwiPlxuIHt7ZGlyLm5hbWV9fVxuIDwvYT5cbiA8L2xpPlxuIDwvdWw+LS0+XG4gPC9zZWN0aW9uPlxuICovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yXHRcdDogXCJjb21wLW11bHRpbWVkaWEtbWFuYWdlclwiLFxuICAgIHRlbXBsYXRlXHRcdDogaHRtbFRlbXBsYXRlXG59KVxuZXhwb3J0IGNsYXNzIENvbXBNdWx0aW1lZGlhTWFuYWdlciB7XG4gICAgQElucHV0KCkgdGl0bGVcdDogc3RyaW5nO1xuICAgIG1lZGlhUmVuZGVyZXJzICA6IE1lZGlhUmVuZGVyZXJbXTtcbiAgICBtZWRpYVNlcnZlcnMgICAgOiBNZWRpYVNlcnZlciAgW107XG4gICAgY3VycmVudFNlcnZlciAgICA6IE1lZGlhU2VydmVyID0gbnVsbDtcbiAgICBtZWRpYXMgICAgICAgICAgOiBNZWRpYVtdID0gW107XG4gICAgbWVudURpc3BsYXllZCAgIDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbTogQ29tbVNlcnZpY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coIFwiQ29tbVNlcnZpY2U6XCIsIGNvbW0pO1xuICAgICAgICBjb21tLmluaXQoKS5zdWJzY3JpYmUoIChkYXRhOiBEYXRhSW5pdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coIFwiaW5pdCA9PlwiLCBkYXRhICk7XG4gICAgICAgICAgICB0aGlzLm1lZGlhUmVuZGVyZXJzID0gZGF0YS5tZWRpYVJlbmRlcmVycztcbiAgICAgICAgICAgIHRoaXMubWVkaWFTZXJ2ZXJzICAgPSBkYXRhLm1lZGlhU2VydmVycztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGJyb3dzZSggbXM6IE1lZGlhU2VydmVyLCBkaXJlY3RvcnlJZCA6c3RyaW5nICkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21tLmJyb3dzZSggbXMuaWQsIGRpcmVjdG9yeUlkICkudGhlbiggKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcIkJyb3dzZVwiLCBtcy5pZCwgZGlyZWN0b3J5SWQsIFwiPT5cIiwgZGF0YSApO1xuICAgICAgICAgICAgbXMuZGlyZWN0b3JpZXMgPSBkYXRhLmRpcmVjdG9yaWVzO1xuICAgICAgICAgICAgdGhpcy5tZWRpYXMgPSBkYXRhLm1lZGlhcztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWVudUNsaWNrKCkge1xuICAgICAgICB0aGlzLm1lbnVEaXNwbGF5ZWQgPSAhdGhpcy5tZW51RGlzcGxheWVkO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1lbnVEaXNwbGF5ZWQpO1xuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
