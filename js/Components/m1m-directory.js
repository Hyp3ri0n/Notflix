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
                    console.log(this.nf);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvbTFtLWRpcmVjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBSU0sWUFBWTs7Ozs7OztZQUFaLFlBQVksR0FBRzs7Ozs7Q0FLcEIsQ0FBQztZQU9GO2dCQUVJLFNBQVM7b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7WUFDTCxDQUFDO1lBSkc7Z0JBQUMsWUFBSyxFQUFFOztxREFBQTtZQU5aO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFJLGVBQWU7b0JBQzNCLFFBQVEsRUFBSSxZQUFZO2lCQUMzQixDQUFDOzs2QkFBQTtZQUVGLHlDQUtDLENBQUE7WUFBQSxDQUFDIiwiZmlsZSI6IkNvbXBvbmVudHMvbTFtLWRpcmVjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBDb21tZW50YWlyZSAqKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgXHR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEaXJlY3RvcnkgfSBmcm9tIFwiLi4vU2VydmljZXMvQ29tbVNlcnZpY2VcIjtcblxuY29uc3QgaHRtbFRlbXBsYXRlID0gYFxuXHQ8ZGl2IChjbGljayk9XCJpdGVtQ2xpY2soKVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZvbGRlci1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICB7e25mLm5hbWV9fVxuXHQ8L2Rpdj5cbmA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yXHRcdDogXCJtMW0tZGlyZWN0b3J5XCIsXG4gICAgdGVtcGxhdGVcdFx0OiBodG1sVGVtcGxhdGVcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wRGlyZWN0b3J5IHtcbiAgICBASW5wdXQoKSBuZiA6IERpcmVjdG9yeTtcbiAgICBpdGVtQ2xpY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmYpO1xuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
