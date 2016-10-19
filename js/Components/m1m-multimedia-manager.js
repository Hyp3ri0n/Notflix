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
    var CompMultimediaManager;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CommService_1_1) {
                CommService_1 = CommService_1_1;
            }],
        execute: function() {
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
                    this.currentServer = this.currentServer === null ? event.value : null;
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
                    templateUrl: "ts/Components/Views/m1m-multimedia-manager.html"
                }), 
                __metadata('design:paramtypes', [CommService_1.CommService])
            ], CompMultimediaManager);
            exports_1("CompMultimediaManager", CompMultimediaManager);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLW11bHRpbWVkaWEtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQVFJLFlBQW9CLElBQWlCO29CQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO29CQUpyQyxrQkFBYSxHQUFtQixJQUFJLENBQUM7b0JBQ3JDLFdBQU0sR0FBc0IsRUFBRSxDQUFDO29CQUMvQixrQkFBYSxHQUFlLEtBQUssQ0FBQztvQkFHOUIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUUsQ0FBQyxJQUFjO3dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFFLFNBQVMsRUFBRSxJQUFJLENBQUUsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO3dCQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQzVDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ0QsTUFBTSxDQUFFLEVBQWUsRUFBRSxXQUFtQjtvQkFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFFLENBQUMsSUFBSSxDQUFFLENBQUMsSUFBSTt3QkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxDQUFDO3dCQUN4RCxFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7d0JBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDOUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCxTQUFTO29CQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCxjQUFjLENBQUMsS0FBSztvQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztvQkFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3hELENBQUM7WUFDTCxDQUFDO1lBakNHO2dCQUFDLFlBQUssRUFBRTs7Z0VBQUE7WUFMWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBSSx5QkFBeUI7b0JBQ3JDLFdBQVcsRUFBTyxpREFBaUQ7aUJBQ3RFLENBQUM7O3FDQUFBO1lBQ0YseURBa0NDLENBQUE7WUFBQSxDQUFDIiwiZmlsZSI6IkNvbXBvbmVudHMvbTFtLW11bHRpbWVkaWEtbWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgXHR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0NvbW1TZXJ2aWNlLCBEYXRhSW5pdCwgTWVkaWFTZXJ2ZXIsIE1lZGlhUmVuZGVyZXIsIE1lZGlhfSBmcm9tIFwiLi4vU2VydmljZXMvQ29tbVNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3JcdFx0OiBcImNvbXAtbXVsdGltZWRpYS1tYW5hZ2VyXCIsXG4gICAgdGVtcGxhdGVVcmwgICAgIDogXCJ0cy9Db21wb25lbnRzL1ZpZXdzL20xbS1tdWx0aW1lZGlhLW1hbmFnZXIuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIENvbXBNdWx0aW1lZGlhTWFuYWdlciB7XG4gICAgQElucHV0KCkgdGl0bGVcdDogc3RyaW5nO1xuICAgIG1lZGlhUmVuZGVyZXJzICA6IE1lZGlhUmVuZGVyZXJbXTtcbiAgICBtZWRpYVNlcnZlcnMgICAgOiBNZWRpYVNlcnZlciAgW107XG4gICAgY3VycmVudFNlcnZlciAgIDogTWVkaWFTZXJ2ZXIgPSBudWxsO1xuICAgIG1lZGlhcyAgICAgICAgICA6IE1lZGlhW10gPSBbXTtcbiAgICBtZW51RGlzcGxheWVkICAgOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW06IENvbW1TZXJ2aWNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCBcIkNvbW1TZXJ2aWNlOlwiLCBjb21tKTtcbiAgICAgICAgY29tbS5pbml0KCkuc3Vic2NyaWJlKCAoZGF0YTogRGF0YUluaXQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcImluaXQgPT5cIiwgZGF0YSApO1xuICAgICAgICAgICAgdGhpcy5tZWRpYVJlbmRlcmVycyA9IGRhdGEubWVkaWFSZW5kZXJlcnM7XG4gICAgICAgICAgICB0aGlzLm1lZGlhU2VydmVycyAgID0gZGF0YS5tZWRpYVNlcnZlcnM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBicm93c2UoIG1zOiBNZWRpYVNlcnZlciwgZGlyZWN0b3J5SWQgOnN0cmluZyApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbS5icm93c2UoIG1zLmlkLCBkaXJlY3RvcnlJZCApLnRoZW4oIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyggXCJCcm93c2VcIiwgbXMuaWQsIGRpcmVjdG9yeUlkLCBcIj0+XCIsIGRhdGEgKTtcbiAgICAgICAgICAgIG1zLmRpcmVjdG9yaWVzID0gZGF0YS5kaXJlY3RvcmllcztcbiAgICAgICAgICAgIHRoaXMubWVkaWFzID0gZGF0YS5tZWRpYXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1lbnVDbGljaygpIHtcbiAgICAgICAgdGhpcy5tZW51RGlzcGxheWVkID0gIXRoaXMubWVudURpc3BsYXllZDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5tZW51RGlzcGxheWVkKTtcbiAgICB9XG5cbiAgICBzZWxlY3RlZFNlcnZlcihldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50IGZyb20gc2VydmVyLCBzZXJ2ZXIgOiBcIiwgZXZlbnQpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTZXJ2ZXIgPSB0aGlzLmN1cnJlbnRTZXJ2ZXIgPT09IG51bGwgPyBldmVudC52YWx1ZSA6IG51bGw7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudFNlcnZlciA6IFwiLCB0aGlzLmN1cnJlbnRTZXJ2ZXIpO1xuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
