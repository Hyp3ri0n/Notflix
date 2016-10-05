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
    var htmlTemplate, CompMedia;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            htmlTemplate = `
	<p (click)="displayLongDescription()">
	    le titre: {{nf.title}}
	</p>
`;
            let CompMedia = class CompMedia {
                //constructor() {}
                displayLongDescription() {
                    console.log("Descirption du média:", this.nf.longdescription);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], CompMedia.prototype, "nf", void 0);
            CompMedia = __decorate([
                core_1.Component({
                    selector: "m1m-media",
                    template: htmlTemplate,
                    providers: []
                }), 
                __metadata('design:paramtypes', [])
            ], CompMedia);
            exports_1("CompMedia", CompMedia);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLW1lZGlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFNTSxZQUFZOzs7Ozs7O1lBQVosWUFBWSxHQUFHOzs7O0NBSXBCLENBQUM7WUFRRjtnQkFFSSxrQkFBa0I7Z0JBQ2xCLHNCQUFzQjtvQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBRSx1QkFBdUIsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBRSxDQUFDO2dCQUNwRSxDQUFDO1lBQ0wsQ0FBQztZQUxHO2dCQUFDLFlBQUssRUFBRTs7aURBQUE7WUFQWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBSSxXQUFXO29CQUN2QixRQUFRLEVBQUksWUFBWTtvQkFDeEIsU0FBUyxFQUFTLEVBQUU7aUJBQ3ZCLENBQUM7O3lCQUFBO1lBRUYsaUNBTUMsQ0FBQTtZQUFBLENBQUMiLCJmaWxlIjoiQ29tcG9uZW50cy9tMW0tbWVkaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgZmVybmFhdXIgb24gMTQvMDkvMTYuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgXHR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNZWRpYX0gZnJvbSBcIi4uL1NlcnZpY2VzL0NvbW1TZXJ2aWNlXCI7XG5cbmNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcblx0PHAgKGNsaWNrKT1cImRpc3BsYXlMb25nRGVzY3JpcHRpb24oKVwiPlxuXHQgICAgbGUgdGl0cmU6IHt7bmYudGl0bGV9fVxuXHQ8L3A+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3Rvclx0XHQ6IFwibTFtLW1lZGlhXCIsXG4gICAgdGVtcGxhdGVcdFx0OiBodG1sVGVtcGxhdGUsXG4gICAgcHJvdmlkZXJzICAgICAgIDogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wTWVkaWEge1xuICAgIEBJbnB1dCgpIG5mIDogTWVkaWE7XG4gICAgLy9jb25zdHJ1Y3RvcigpIHt9XG4gICAgZGlzcGxheUxvbmdEZXNjcmlwdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coIFwiRGVzY2lycHRpb24gZHUgbcOpZGlhOlwiLCB0aGlzLm5mLmxvbmdkZXNjcmlwdGlvbiApO1xuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
