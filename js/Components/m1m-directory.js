System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var htmlTemplate, CompDirectory;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            htmlTemplate = `
	<div (click)="itemClick()">
        <i class="fa fa-folder-o" aria-hidden="true"></i>
        {{nf.name}}
	</div>
`;
            let CompDirectory = class CompDirectory {
                itemClick() {
                    console.log(this.nf.name);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], CompDirectory.prototype, "nf", void 0);
            CompDirectory = __decorate([
                core_1.Component({
                    selector: "m1m-directory",
                    template: htmlTemplate,
                    providers: []
                }), 
                __metadata('design:paramtypes', [])
            ], CompDirectory);
            exports_1("CompDirectory", CompDirectory);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLWRpcmVjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBSU0sWUFBWTs7Ozs7OztZQUFaLFlBQVksR0FBRzs7Ozs7Q0FLcEIsQ0FBQztZQVFGO2dCQUVJLFNBQVM7b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixDQUFDO1lBQ0wsQ0FBQztZQUpHO2dCQUFDLFlBQUssRUFBRTs7cURBQUE7WUFQWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBSSxlQUFlO29CQUMzQixRQUFRLEVBQUksWUFBWTtvQkFDeEIsU0FBUyxFQUFTLEVBQUU7aUJBQ3ZCLENBQUM7OzZCQUFBO1lBRUYseUNBS0MsQ0FBQTtZQUFBLENBQUMiLCJmaWxlIjoiQ29tcG9uZW50cy9tMW0tZGlyZWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIENvbW1lbnRhaXJlICoqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCBcdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERpcmVjdG9yeSB9IGZyb20gXCIuLi9TZXJ2aWNlcy9Db21tU2VydmljZVwiO1xuXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXG5cdDxkaXYgKGNsaWNrKT1cIml0ZW1DbGljaygpXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZm9sZGVyLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIHt7bmYubmFtZX19XG5cdDwvZGl2PlxuYDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3JcdFx0OiBcIm0xbS1kaXJlY3RvcnlcIixcbiAgICB0ZW1wbGF0ZVx0XHQ6IGh0bWxUZW1wbGF0ZSxcbiAgICBwcm92aWRlcnMgICAgICAgOiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBEaXJlY3Rvcnkge1xuICAgIEBJbnB1dCgpIG5mIDogRGlyZWN0b3J5O1xuICAgIGl0ZW1DbGljaygpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uZi5uYW1lKTtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
