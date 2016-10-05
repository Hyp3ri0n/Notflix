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
                    template: htmlTemplate
                }), 
                __metadata('design:paramtypes', [])
            ], CompDirectory);
            exports_1("CompDirectory", CompDirectory);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLWRpcmVjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBSU0sWUFBWTs7Ozs7OztZQUFaLFlBQVksR0FBRzs7Ozs7Q0FLcEIsQ0FBQztZQU9GO2dCQUVJLFNBQVM7b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixDQUFDO1lBQ0wsQ0FBQztZQUpHO2dCQUFDLFlBQUssRUFBRTs7cURBQUE7WUFOWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBSSxlQUFlO29CQUMzQixRQUFRLEVBQUksWUFBWTtpQkFDM0IsQ0FBQzs7NkJBQUE7WUFFRix5Q0FLQyxDQUFBO1lBQUEsQ0FBQyIsImZpbGUiOiJDb21wb25lbnRzL20xbS1kaXJlY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQ29tbWVudGFpcmUgKiovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IFx0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRGlyZWN0b3J5IH0gZnJvbSBcIi4uL1NlcnZpY2VzL0NvbW1TZXJ2aWNlXCI7XG5cbmNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcblx0PGRpdiAoY2xpY2spPVwiaXRlbUNsaWNrKClcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1mb2xkZXItb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAge3tuZi5uYW1lfX1cblx0PC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3Rvclx0XHQ6IFwibTFtLWRpcmVjdG9yeVwiLFxuICAgIHRlbXBsYXRlXHRcdDogaHRtbFRlbXBsYXRlXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tcERpcmVjdG9yeSB7XG4gICAgQElucHV0KCkgbmYgOiBEaXJlY3Rvcnk7XG4gICAgaXRlbUNsaWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5mLm5hbWUpO1xuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
