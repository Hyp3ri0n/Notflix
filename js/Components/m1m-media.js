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
    var CompMedia;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CommService_1_1) {
                CommService_1 = CommService_1_1;
            }],
        execute: function() {
            let CompMedia = class CompMedia {
                constructor(comm) {
                    this.comm = comm;
                    this.renderer = null;
                }
                loadMedia() {
                    // temporaire : permet de recuperer le lecteur de la machine
                    this.comm.mediaRenderers.forEach((e) => {
                        console.log(e);
                        if (e.name === "Kodi (f217-12)") {
                            this.renderer = e;
                        }
                    });
                    // permet de lancer le media sur le lecteur (ne fonctionne pas)
                    if (this.renderer !== null) {
                        this.comm.loadMedia(this.renderer.id, this.nf.serverId, this.nf.mediaId).then(() => {
                            this.comm.play(this.renderer.id);
                            console.log("Media played : ", this.nf.title, " on ", this.renderer.name);
                        });
                    }
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], CompMedia.prototype, "nf", void 0);
            CompMedia = __decorate([
                core_1.Component({
                    selector: "m1m-media",
                    templateUrl: "ts/Components/Views/m1m-media.html"
                }), 
                __metadata('design:paramtypes', [CommService_1.CommService])
            ], CompMedia);
            exports_1("CompMedia", CompMedia);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLW1lZGlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBSUksWUFBb0IsSUFBa0I7b0JBQWxCLFNBQUksR0FBSixJQUFJLENBQWM7b0JBRnRDLGFBQVEsR0FBc0IsSUFBSSxDQUFDO2dCQUluQyxDQUFDO2dCQUNELFNBQVM7b0JBQ0wsNERBQTREO29CQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNmLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxDQUFDOzRCQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzt3QkFDdEIsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDSCwrREFBK0Q7b0JBQy9ELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQzFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzlFLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7WUF0Qkc7Z0JBQUMsWUFBSyxFQUFFOztpREFBQTtZQU5aO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFJLFdBQVc7b0JBQ3ZCLFdBQVcsRUFBTyxvQ0FBb0M7aUJBQ3pELENBQUM7O3lCQUFBO1lBRUYsaUNBdUJDLENBQUE7WUFBQSxDQUFDIiwiZmlsZSI6IkNvbXBvbmVudHMvbTFtLW1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGZlcm5hYXVyIG9uIDE0LzA5LzE2LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IFx0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtNZWRpYSwgQ29tbVNlcnZpY2UsIE1lZGlhUmVuZGVyZXJ9IGZyb20gXCIuLi9TZXJ2aWNlcy9Db21tU2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yXHRcdDogXCJtMW0tbWVkaWFcIixcbiAgICB0ZW1wbGF0ZVVybCAgICAgOiBcInRzL0NvbXBvbmVudHMvVmlld3MvbTFtLW1lZGlhLmh0bWxcIlxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBNZWRpYSB7XG4gICAgQElucHV0KCkgbmYgOiBNZWRpYTtcbiAgICByZW5kZXJlciAgICA6IE1lZGlhUmVuZGVyZXIgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21tIDogQ29tbVNlcnZpY2UpIHtcblxuICAgIH1cbiAgICBsb2FkTWVkaWEoKSB7XG4gICAgICAgIC8vIHRlbXBvcmFpcmUgOiBwZXJtZXQgZGUgcmVjdXBlcmVyIGxlIGxlY3RldXIgZGUgbGEgbWFjaGluZVxuICAgICAgICB0aGlzLmNvbW0ubWVkaWFSZW5kZXJlcnMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBpZihlLm5hbWUgPT09IFwiS29kaSAoZjIxNy0xMilcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIgPSBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gcGVybWV0IGRlIGxhbmNlciBsZSBtZWRpYSBzdXIgbGUgbGVjdGV1ciAobmUgZm9uY3Rpb25uZSBwYXMpXG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW0ubG9hZE1lZGlhKHRoaXMucmVuZGVyZXIuaWQsIHRoaXMubmYuc2VydmVySWQsIHRoaXMubmYubWVkaWFJZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tLnBsYXkodGhpcy5yZW5kZXJlci5pZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNZWRpYSBwbGF5ZWQgOiBcIiwgdGhpcy5uZi50aXRsZSwgXCIgb24gXCIsIHRoaXMucmVuZGVyZXIubmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
