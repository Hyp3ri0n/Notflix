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
    var CompDirectory;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CommService_1_1) {
                CommService_1 = CommService_1_1;
            }],
        execute: function() {
            let CompDirectory = class CompDirectory {
                constructor(cs) {
                    this.cs = cs;
                    this.directories = [];
                    this.open = false;
                }
                ngOnInit() {
                    // Chargement des médias sans charger les médias dans le CommService (attribut FALSE)
                    this.cs.browse(this.nf.serverId, this.nf.directory, false).then((data) => {
                        this.directories = data.directories;
                    });
                }
                itemClick() {
                    this.open = !this.open;
                    // Chargement des médias avec chargement dans la liste de CommService
                    this.cs.browse(this.nf.serverId, this.nf.directory, true).then((data) => {
                        this.directories = data.directories;
                    });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], CompDirectory.prototype, "nf", void 0);
            CompDirectory = __decorate([
                core_1.Component({
                    selector: "m1m-directory",
                    templateUrl: "ts/Components/Views/m1m-directory.html"
                }), 
                __metadata('design:paramtypes', [CommService_1.CommService])
            ], CompDirectory);
            exports_1("CompDirectory", CompDirectory);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLWRpcmVjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUtJLFlBQW9CLEVBQWdCO29CQUFoQixPQUFFLEdBQUYsRUFBRSxDQUFjO29CQUhwQyxnQkFBVyxHQUEyQixFQUFFLENBQUM7b0JBQ3pDLFNBQUksR0FBa0MsS0FBSyxDQUFDO2dCQUk1QyxDQUFDO2dCQUVELFFBQVE7b0JBQ0oscUZBQXFGO29CQUNyRixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFnQjt3QkFDN0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUN4QyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELFNBQVM7b0JBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ3ZCLHFFQUFxRTtvQkFDckUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBZ0I7d0JBQzVFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFDeEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztZQUNMLENBQUM7WUF0Qkc7Z0JBQUMsWUFBSyxFQUFFOztxREFBQTtZQU5aO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFJLGVBQWU7b0JBQzNCLFdBQVcsRUFBTyx3Q0FBd0M7aUJBQzdELENBQUM7OzZCQUFBO1lBRUYseUNBdUJDLENBQUE7WUFBQSxDQUFDIiwiZmlsZSI6IkNvbXBvbmVudHMvbTFtLWRpcmVjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBDb21tZW50YWlyZSAqKi9cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtEaXJlY3RvcnksIENvbW1TZXJ2aWNlLCBEYXRhQnJvd3NlfSBmcm9tIFwiLi4vU2VydmljZXMvQ29tbVNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3Rvclx0XHQ6IFwibTFtLWRpcmVjdG9yeVwiLFxuICAgIHRlbXBsYXRlVXJsICAgICA6IFwidHMvQ29tcG9uZW50cy9WaWV3cy9tMW0tZGlyZWN0b3J5Lmh0bWxcIlxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBEaXJlY3RvcnkgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIG5mICAgICAgICAgOiBEaXJlY3Rvcnk7XG4gICAgZGlyZWN0b3JpZXMgICAgICAgICA6IERpcmVjdG9yeVtdICAgPSBbXTtcbiAgICBvcGVuICAgICAgICAgICAgICAgIDogYm9vbGVhbiAgICAgICA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjcyA6IENvbW1TZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIDogdm9pZCB7XG4gICAgICAgIC8vIENoYXJnZW1lbnQgZGVzIG3DqWRpYXMgc2FucyBjaGFyZ2VyIGxlcyBtw6lkaWFzIGRhbnMgbGUgQ29tbVNlcnZpY2UgKGF0dHJpYnV0IEZBTFNFKVxuICAgICAgICB0aGlzLmNzLmJyb3dzZSh0aGlzLm5mLnNlcnZlcklkLCB0aGlzLm5mLmRpcmVjdG9yeSwgZmFsc2UpLnRoZW4oKGRhdGE6IERhdGFCcm93c2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0b3JpZXMgPSBkYXRhLmRpcmVjdG9yaWVzO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpdGVtQ2xpY2soKSB7XG4gICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgICAgIC8vIENoYXJnZW1lbnQgZGVzIG3DqWRpYXMgYXZlYyBjaGFyZ2VtZW50IGRhbnMgbGEgbGlzdGUgZGUgQ29tbVNlcnZpY2VcbiAgICAgICAgdGhpcy5jcy5icm93c2UodGhpcy5uZi5zZXJ2ZXJJZCwgdGhpcy5uZi5kaXJlY3RvcnksIHRydWUpLnRoZW4oKGRhdGE6IERhdGFCcm93c2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0b3JpZXMgPSBkYXRhLmRpcmVjdG9yaWVzO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
