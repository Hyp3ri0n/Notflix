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
                <div *ngIf="crossDisplayed" style="display: inline-block;"><i class="fa fa-times fa-2x" aria-hidden="true"></i></div>
            </div>
        </div>
        <div *ngIf="displayed" style="border: white solid 1px;"><m1m-directory [nf]="folder" *ngFor="let folder of directories"></m1m-directory></div>
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
                    template: htmlTemplate,
                    providers: [CommService_1.CommService]
                }), 
                __metadata('design:paramtypes', [CommService_1.CommService])
            ], CompServer);
            exports_1("CompServer", CompServer);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLXNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBSU0sWUFBWTs7Ozs7Ozs7OztZQUFaLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Q0FXcEIsQ0FBQztZQVFGO2dCQU9JLFlBQXFCLEVBQWdCO29CQUFoQixPQUFFLEdBQUYsRUFBRSxDQUFjO29CQUgzQixtQkFBYyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUM5QyxjQUFTLEdBQTJCLEtBQUssQ0FBQztvQkFHdEMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxjQUFjLEVBQUUsRUFBRSxDQUFFLENBQUM7Z0JBQ3RDLENBQUM7Z0JBQ0QsUUFBUTtvQkFDSixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBRSxDQUFDLElBQUksQ0FBRSxDQUFDLElBQWdCO3dCQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7d0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDO29CQUN4RCxDQUFDLENBQUUsQ0FBQztnQkFDUixDQUFDO2dCQUNELFFBQVE7b0JBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3JDLENBQUM7WUFDTCxDQUFDO1lBbEJHO2dCQUFDLFlBQUssRUFBRTs7a0RBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OzZEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzs4REFBQTtZQUNSO2dCQUFDLGFBQU0sRUFBRTs7OERBQUE7WUFWYjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBSSxZQUFZO29CQUN4QixRQUFRLEVBQUksWUFBWTtvQkFDeEIsU0FBUyxFQUFTLENBQUMseUJBQVcsQ0FBQztpQkFDbEMsQ0FBQzs7MEJBQUE7WUFFRixtQ0FtQkMsQ0FBQTtZQUFBLENBQUMiLCJmaWxlIjoiQ29tcG9uZW50cy9tMW0tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIENvbW1lbnRhaXJlICoqL1xuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVkaWFTZXJ2ZXIsIENvbW1TZXJ2aWNlLCBEYXRhQnJvd3NlLCBEaXJlY3Rvcnl9IGZyb20gXCIuLi9TZXJ2aWNlcy9Db21tU2VydmljZVwiO1xuXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXG4gICAgPGRpdiBjbGFzcz1cInBhZGRpbmdJY29uTWVudVwiPlxuICAgICAgICA8ZGl2IChjbGljayk9XCJzaG93SW5mbygpXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPjxpIGNsYXNzPVwiZmEgZmEtc2VydmVyIGZhLTJ4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm1lbnVEaXNwbGF5ZWRcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiAzMDBweDsgb3ZlcmZsb3c6IGhpZGRlbjsgZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPnt7bmYubmFtZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNyb3NzRGlzcGxheWVkXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lcyBmYS0yeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImRpc3BsYXllZFwiIHN0eWxlPVwiYm9yZGVyOiB3aGl0ZSBzb2xpZCAxcHg7XCI+PG0xbS1kaXJlY3RvcnkgW25mXT1cImZvbGRlclwiICpuZ0Zvcj1cImxldCBmb2xkZXIgb2YgZGlyZWN0b3JpZXNcIj48L20xbS1kaXJlY3Rvcnk+PC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3Rvclx0XHQ6IFwibTFtLXNlcnZlclwiLFxuICAgIHRlbXBsYXRlXHRcdDogaHRtbFRlbXBsYXRlLFxuICAgIHByb3ZpZGVycyAgICAgICA6IFtDb21tU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wU2VydmVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBuZiAgICAgICAgICAgICA6IE1lZGlhU2VydmVyO1xuICAgIEBJbnB1dCgpIG1lbnVEaXNwbGF5ZWQgIDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBjcm9zc0Rpc3BsYXllZCA6IGJvb2xlYW47XG4gICAgQE91dHB1dCgpIHNlbGVjdGVkU2VydmVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGRpc3BsYXllZCAgICAgICAgICAgICAgIDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGRpcmVjdG9yaWVzICAgICAgICAgICAgIDogRGlyZWN0b3J5W107XG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgY3MgOiBDb21tU2VydmljZSApIHtcbiAgICAgICAgY29uc29sZS5sb2coIFwiQ29tbVNlcnZpY2U6XCIsIGNzICk7XG4gICAgfVxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNzLmJyb3dzZSggdGhpcy5uZi5pZCApLnRoZW4oIChkYXRhOiBEYXRhQnJvd3NlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdG9yaWVzID0gZGF0YS5kaXJlY3RvcmllcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcIm5ldyBkaXJlY3RvcmllczpcIiwgZGF0YS5kaXJlY3RvcmllcyApO1xuICAgICAgICB9ICk7XG4gICAgfVxuICAgIHNob3dJbmZvKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXllZCA9ICF0aGlzLmRpc3BsYXllZDtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
