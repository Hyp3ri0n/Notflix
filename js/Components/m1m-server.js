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
    var CompServer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CommService_1_1) {
                CommService_1 = CommService_1_1;
            }],
        execute: function() {
            let CompServer = class CompServer {
                constructor(cs, element) {
                    this.cs = cs;
                    this.element = element;
                    this.eventSelectedServer = new core_1.EventEmitter();
                    console.log("CommService:", cs);
                }
                ngOnInit() {
                    this.cs.browse(this.nf.id).then((data) => {
                        this.directories = data.directories;
                        console.log("new directories:", data.directories);
                    });
                    if (this.serverSelected) {
                        this.element.nativeElement.children[0].classList.add("solo");
                    }
                }
                showDirectories() {
                    this.eventSelectedServer.emit({ value: this.nf });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], CompServer.prototype, "nf", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], CompServer.prototype, "menuDisplayed", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Boolean)
            ], CompServer.prototype, "serverSelected", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], CompServer.prototype, "eventSelectedServer", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Array)
            ], CompServer.prototype, "medias", void 0);
            CompServer = __decorate([
                core_1.Component({
                    selector: "m1m-server",
                    templateUrl: "ts/Components/Views/m1m-server.html"
                }), 
                __metadata('design:paramtypes', [CommService_1.CommService, core_1.ElementRef])
            ], CompServer);
            exports_1("CompServer", CompServer);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLXNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQVFJLFlBQXFCLEVBQWdCLEVBQVUsT0FBb0I7b0JBQTlDLE9BQUUsR0FBRixFQUFFLENBQWM7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtvQkFKekQsd0JBQW1CLEdBQXdCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUtwRSxPQUFPLENBQUMsR0FBRyxDQUFFLGNBQWMsRUFBRSxFQUFFLENBQUUsQ0FBQztnQkFDdEMsQ0FBQztnQkFDRCxRQUFRO29CQUNKLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsSUFBSSxDQUFFLENBQUMsSUFBZ0I7d0JBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7b0JBQ3hELENBQUMsQ0FBRSxDQUFDO29CQUVKLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDakUsQ0FBQztnQkFDTCxDQUFDO2dCQUNELGVBQWU7b0JBQ1gsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztnQkFDcEQsQ0FBQztZQUNMLENBQUM7WUF2Qkc7Z0JBQUMsWUFBSyxFQUFFOztrREFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7NkRBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OzhEQUFBO1lBQ1I7Z0JBQUMsYUFBTSxFQUFFOzttRUFBQTtZQUNUO2dCQUFDLFlBQUssRUFBRTs7c0RBQUE7WUFWWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBSSxZQUFZO29CQUN4QixXQUFXLEVBQU8scUNBQXFDO2lCQUMxRCxDQUFDOzswQkFBQTtZQUVGLG1DQXdCQyxDQUFBO1lBQUEsQ0FBQyIsImZpbGUiOiJDb21wb25lbnRzL20xbS1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQ29tbWVudGFpcmUgKiovXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge01lZGlhU2VydmVyLCBDb21tU2VydmljZSwgRGF0YUJyb3dzZSwgRGlyZWN0b3J5LCBNZWRpYX0gZnJvbSBcIi4uL1NlcnZpY2VzL0NvbW1TZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3JcdFx0OiBcIm0xbS1zZXJ2ZXJcIixcbiAgICB0ZW1wbGF0ZVVybCAgICAgOiBcInRzL0NvbXBvbmVudHMvVmlld3MvbTFtLXNlcnZlci5odG1sXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wU2VydmVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBuZiAgICAgICAgICAgICAgICAgICAgIDogTWVkaWFTZXJ2ZXI7XG4gICAgQElucHV0KCkgbWVudURpc3BsYXllZCAgICAgICAgICA6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc2VydmVyU2VsZWN0ZWQgICAgICAgICA6IGJvb2xlYW47XG4gICAgQE91dHB1dCgpIGV2ZW50U2VsZWN0ZWRTZXJ2ZXIgICA6IEV2ZW50RW1pdHRlcjx7fT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQElucHV0KCkgbWVkaWFzICAgOiBNZWRpYVtdO1xuICAgIGRpcmVjdG9yaWVzICAgICAgICAgICAgICAgICAgICAgOiBEaXJlY3RvcnlbXTtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGNzIDogQ29tbVNlcnZpY2UsIHByaXZhdGUgZWxlbWVudCA6IEVsZW1lbnRSZWYgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCBcIkNvbW1TZXJ2aWNlOlwiLCBjcyApO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jcy5icm93c2UoIHRoaXMubmYuaWQgKS50aGVuKCAoZGF0YTogRGF0YUJyb3dzZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RvcmllcyA9IGRhdGEuZGlyZWN0b3JpZXM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyggXCJuZXcgZGlyZWN0b3JpZXM6XCIsIGRhdGEuZGlyZWN0b3JpZXMgKTtcbiAgICAgICAgfSApO1xuXG4gICAgICAgIGlmKHRoaXMuc2VydmVyU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoXCJzb2xvXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dEaXJlY3RvcmllcygpIHtcbiAgICAgICAgdGhpcy5ldmVudFNlbGVjdGVkU2VydmVyLmVtaXQoe3ZhbHVlOiB0aGlzLm5mfSk7XG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
