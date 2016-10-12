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
                    this.selectedServer.emit({ value: this.nf });
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
                __metadata('design:type', core_1.EventEmitter)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLXNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBSU0sWUFBWTs7Ozs7Ozs7OztZQUFaLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0NBZXBCLENBQUM7WUFPRjtnQkFPSSxZQUFxQixFQUFnQjtvQkFBaEIsT0FBRSxHQUFGLEVBQUUsQ0FBYztvQkFIM0IsbUJBQWMsR0FBcUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ2hFLGNBQVMsR0FBMkIsS0FBSyxDQUFDO29CQUd0QyxPQUFPLENBQUMsR0FBRyxDQUFFLGNBQWMsRUFBRSxFQUFFLENBQUUsQ0FBQztnQkFDdEMsQ0FBQztnQkFDRCxRQUFRO29CQUNKLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFFLENBQUMsSUFBSSxDQUFFLENBQUMsSUFBZ0I7d0JBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7b0JBQ3hELENBQUMsQ0FBRSxDQUFDO2dCQUNSLENBQUM7Z0JBQ0QsUUFBUTtvQkFDSixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7Z0JBQy9DLENBQUM7WUFDTCxDQUFDO1lBbkJHO2dCQUFDLFlBQUssRUFBRTs7a0RBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OzZEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzs4REFBQTtZQUNSO2dCQUFDLGFBQU0sRUFBRTs7OERBQUE7WUFUYjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBSSxZQUFZO29CQUN4QixRQUFRLEVBQUksWUFBWTtpQkFDM0IsQ0FBQzs7MEJBQUE7WUFFRixtQ0FvQkMsQ0FBQTtZQUFBLENBQUMiLCJmaWxlIjoiQ29tcG9uZW50cy9tMW0tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIENvbW1lbnRhaXJlICoqL1xuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVkaWFTZXJ2ZXIsIENvbW1TZXJ2aWNlLCBEYXRhQnJvd3NlLCBEaXJlY3Rvcnl9IGZyb20gXCIuLi9TZXJ2aWNlcy9Db21tU2VydmljZVwiO1xuXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXG4gICAgPGRpdiBjbGFzcz1cInBhZGRpbmdJY29uTWVudVwiPlxuICAgICAgICA8ZGl2IChjbGljayk9XCJzaG93SW5mbygpXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPjxpIGNsYXNzPVwiZmEgZmEtc2VydmVyIGZhLTJ4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm1lbnVEaXNwbGF5ZWRcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jaztcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOiAzMDBweDsgb3ZlcmZsb3c6IGhpZGRlbjsgZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPnt7bmYubmFtZX19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNyb3NzRGlzcGxheWVkXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgZmEtMnhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJkaXNwbGF5ZWRcIiBzdHlsZT1cImJvcmRlcjogd2hpdGUgc29saWQgMXB4O1wiPlxuICAgICAgICAgICAgPG0xbS1kaXJlY3RvcnkgW25mXT1cImZvbGRlclwiICpuZ0Zvcj1cImxldCBmb2xkZXIgb2YgZGlyZWN0b3JpZXNcIj48L20xbS1kaXJlY3Rvcnk+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3JcdFx0OiBcIm0xbS1zZXJ2ZXJcIixcbiAgICB0ZW1wbGF0ZVx0XHQ6IGh0bWxUZW1wbGF0ZVxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBTZXJ2ZXIgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIG5mICAgICAgICAgICAgIDogTWVkaWFTZXJ2ZXI7XG4gICAgQElucHV0KCkgbWVudURpc3BsYXllZCAgOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGNyb3NzRGlzcGxheWVkIDogYm9vbGVhbjtcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRTZXJ2ZXI6IEV2ZW50RW1pdHRlcjx7fT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgZGlzcGxheWVkICAgICAgICAgICAgICAgOiBib29sZWFuID0gZmFsc2U7XG4gICAgZGlyZWN0b3JpZXMgICAgICAgICAgICAgOiBEaXJlY3RvcnlbXTtcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBjcyA6IENvbW1TZXJ2aWNlICkge1xuICAgICAgICBjb25zb2xlLmxvZyggXCJDb21tU2VydmljZTpcIiwgY3MgKTtcbiAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3MuYnJvd3NlKCB0aGlzLm5mLmlkICkudGhlbiggKGRhdGE6IERhdGFCcm93c2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0b3JpZXMgPSBkYXRhLmRpcmVjdG9yaWVzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coIFwibmV3IGRpcmVjdG9yaWVzOlwiLCBkYXRhLmRpcmVjdG9yaWVzICk7XG4gICAgICAgIH0gKTtcbiAgICB9XG4gICAgc2hvd0luZm8oKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkID0gIXRoaXMuZGlzcGxheWVkO1xuICAgICAgICB0aGlzLnNlbGVjdGVkU2VydmVyLmVtaXQoe3ZhbHVlOiB0aGlzLm5mfSk7XG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
