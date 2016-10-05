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
    var htmlTemplate, CompServer;
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
    <div class="paddingIconMenu">
        <div (click)="showInfo()">
            <div style="display: inline-block;"><i class="fa fa-server fa-2x" aria-hidden="true"></i></div>
            <div *ngIf="menuDisplayed" style="display: inline-block;">
                <div style="max-width: 300px; overflow: hidden; display: inline-block;">{{nf.name}}</div>
                <div *ngIf="crossDisplayed" style="display: inline-block;">
                    <i class="fa fa-times fa-2x" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div *ngIf="displayed" style="border: white solid 1px;">
            <m1m-directory [nf]="folder" *ngFor="let folder of directories"></m1m-directory>
        </div>
    </div>
`;
            let CompServer = class CompServer {
                constructor(cs) {
                    this.cs = cs;
                    this.selectedServer = new core_1.EventEmitter();
                    this.displayed = false;
                    console.log("CommService:", cs);
                }
                ngOnInit() {
                    this.cs.browse(this.nf.id).then((data) => {
                        this.directories = data.directories;
                        console.log("new directories:", data.directories);
                    });
                }
                showInfo() {
                    this.displayed = !this.displayed;
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
            ], CompServer.prototype, "crossDisplayed", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], CompServer.prototype, "selectedServer", void 0);
            CompServer = __decorate([
                core_1.Component({
                    selector: "m1m-server",
                    template: htmlTemplate
                }), 
                __metadata('design:paramtypes', [CommService_1.CommService])
            ], CompServer);
            exports_1("CompServer", CompServer);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLXNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBSU0sWUFBWTs7Ozs7Ozs7OztZQUFaLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0NBZXBCLENBQUM7WUFPRjtnQkFPSSxZQUFxQixFQUFnQjtvQkFBaEIsT0FBRSxHQUFGLEVBQUUsQ0FBYztvQkFIM0IsbUJBQWMsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDOUMsY0FBUyxHQUEyQixLQUFLLENBQUM7b0JBR3RDLE9BQU8sQ0FBQyxHQUFHLENBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBRSxDQUFDO2dCQUN0QyxDQUFDO2dCQUNELFFBQVE7b0JBQ0osSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBQyxJQUFnQjt3QkFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO3dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQztvQkFDeEQsQ0FBQyxDQUFFLENBQUM7Z0JBQ1IsQ0FBQztnQkFDRCxRQUFRO29CQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNyQyxDQUFDO1lBQ0wsQ0FBQztZQWxCRztnQkFBQyxZQUFLLEVBQUU7O2tEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzs2REFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7OERBQUE7WUFDUjtnQkFBQyxhQUFNLEVBQUU7OzhEQUFBO1lBVGI7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUksWUFBWTtvQkFDeEIsUUFBUSxFQUFJLFlBQVk7aUJBQzNCLENBQUM7OzBCQUFBO1lBRUYsbUNBbUJDLENBQUE7WUFBQSxDQUFDIiwiZmlsZSI6IkNvbXBvbmVudHMvbTFtLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBDb21tZW50YWlyZSAqKi9cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge01lZGlhU2VydmVyLCBDb21tU2VydmljZSwgRGF0YUJyb3dzZSwgRGlyZWN0b3J5fSBmcm9tIFwiLi4vU2VydmljZXMvQ29tbVNlcnZpY2VcIjtcblxuY29uc3QgaHRtbFRlbXBsYXRlID0gYFxuICAgIDxkaXYgY2xhc3M9XCJwYWRkaW5nSWNvbk1lbnVcIj5cbiAgICAgICAgPGRpdiAoY2xpY2spPVwic2hvd0luZm8oKVwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj48aSBjbGFzcz1cImZhIGZhLXNlcnZlciBmYS0yeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJtZW51RGlzcGxheWVkXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC13aWR0aDogMzAwcHg7IG92ZXJmbG93OiBoaWRkZW47IGRpc3BsYXk6IGlubGluZS1ibG9jaztcIj57e25mLm5hbWV9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjcm9zc0Rpc3BsYXllZFwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzIGZhLTJ4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZGlzcGxheWVkXCIgc3R5bGU9XCJib3JkZXI6IHdoaXRlIHNvbGlkIDFweDtcIj5cbiAgICAgICAgICAgIDxtMW0tZGlyZWN0b3J5IFtuZl09XCJmb2xkZXJcIiAqbmdGb3I9XCJsZXQgZm9sZGVyIG9mIGRpcmVjdG9yaWVzXCI+PC9tMW0tZGlyZWN0b3J5PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yXHRcdDogXCJtMW0tc2VydmVyXCIsXG4gICAgdGVtcGxhdGVcdFx0OiBodG1sVGVtcGxhdGVcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wU2VydmVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBuZiAgICAgICAgICAgICA6IE1lZGlhU2VydmVyO1xuICAgIEBJbnB1dCgpIG1lbnVEaXNwbGF5ZWQgIDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBjcm9zc0Rpc3BsYXllZCA6IGJvb2xlYW47XG4gICAgQE91dHB1dCgpIHNlbGVjdGVkU2VydmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGRpc3BsYXllZCAgICAgICAgICAgICAgIDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGRpcmVjdG9yaWVzICAgICAgICAgICAgIDogRGlyZWN0b3J5W107XG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgY3MgOiBDb21tU2VydmljZSApIHtcbiAgICAgICAgY29uc29sZS5sb2coIFwiQ29tbVNlcnZpY2U6XCIsIGNzICk7XG4gICAgfVxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNzLmJyb3dzZSggdGhpcy5uZi5pZCApLnRoZW4oIChkYXRhOiBEYXRhQnJvd3NlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdG9yaWVzID0gZGF0YS5kaXJlY3RvcmllcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcIm5ldyBkaXJlY3RvcmllczpcIiwgZGF0YS5kaXJlY3RvcmllcyApO1xuICAgICAgICB9ICk7XG4gICAgfVxuICAgIHNob3dJbmZvKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXllZCA9ICF0aGlzLmRpc3BsYXllZDtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
