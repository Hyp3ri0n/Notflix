/// <reference path="../typings/index.d.ts" />
System.register(["@angular/platform-browser-dynamic", "@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/http", "./Components/m1m-multimedia-manager", "./Components/m1m-media", "./Components/m1m-server", "./Components/m1m-directory"], function(exports_1, context_1) {
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
    var platform_browser_dynamic_1, core_1, platform_browser_1, core_2, forms_1, http_1, m1m_multimedia_manager_1, m1m_media_1, m1m_server_1, m1m_directory_1;
    var RootManager, AppModule;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (m1m_multimedia_manager_1_1) {
                m1m_multimedia_manager_1 = m1m_multimedia_manager_1_1;
            },
            function (m1m_media_1_1) {
                m1m_media_1 = m1m_media_1_1;
            },
            function (m1m_server_1_1) {
                m1m_server_1 = m1m_server_1_1;
            },
            function (m1m_directory_1_1) {
                m1m_directory_1 = m1m_directory_1_1;
            }],
        execute: function() {
            let RootManager = class RootManager {
            };
            RootManager = __decorate([
                core_1.Component({
                    selector: "root-manager",
                    template: `<comp-multimedia-manager title="Gestion des services UPnP/DLNA"></comp-multimedia-manager>
				  `,
                    providers: []
                }), 
                __metadata('design:paramtypes', [])
            ], RootManager);
            //enableProdMode();
            let AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_2.NgModule({
                    imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
                    declarations: [RootManager, m1m_multimedia_manager_1.CompMultimediaManager, m1m_media_1.CompMedia, m1m_server_1.CompServer, m1m_directory_1.CompDirectory],
                    bootstrap: [RootManager]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0I5QztZQUNBLENBQUM7WUFQRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNWLFFBQVEsRUFBRyxjQUFjO29CQUN6QixRQUFRLEVBQUc7T0FDTDtvQkFDTixTQUFTLEVBQUcsRUFBRTtpQkFDZCxDQUFDOzsyQkFBQTtZQUlGLG1CQUFtQjtZQU1uQjtZQUF3QixDQUFDO1lBTHpCO2dCQUFDLGVBQVEsQ0FBQztvQkFDVCxPQUFPLEVBQU8sQ0FBQyxnQ0FBYSxFQUFFLG1CQUFXLEVBQUUsaUJBQVUsQ0FBQztvQkFDdEQsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLDhDQUFxQixFQUFFLHFCQUFTLEVBQUUsdUJBQVUsRUFBRSw2QkFBYSxDQUFDO29CQUN4RixTQUFTLEVBQUssQ0FBQyxXQUFXLENBQUM7aUJBQzNCLENBQUM7O3lCQUFBO1lBQ0YsaUNBQXlCLENBQUE7WUFFekIsaURBQXNCLEVBQUUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2luZGV4LmQudHNcIiAvPlxuXG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gICBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljXCI7XG5pbXBvcnQge0NvbXBvbmVudH0gICAgICAgICAgICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9ICAgIFx0XHRmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBcdFx0XHRcdGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgXHRcdFx0ZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge0h0dHBNb2R1bGV9IFx0XHRcdFx0ZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHsgQ29tcE11bHRpbWVkaWFNYW5hZ2VyIH0gXHRmcm9tIFwiLi9Db21wb25lbnRzL20xbS1tdWx0aW1lZGlhLW1hbmFnZXJcIjtcbmltcG9ydCB7IENvbXBNZWRpYSB9IFx0XHRcdFx0ZnJvbSBcIi4vQ29tcG9uZW50cy9tMW0tbWVkaWFcIjtcbmltcG9ydCB7IENvbXBTZXJ2ZXIgfSBcdFx0XHRcdGZyb20gXCIuL0NvbXBvbmVudHMvbTFtLXNlcnZlclwiO1xuaW1wb3J0IHsgQ29tcERpcmVjdG9yeSB9IFx0XHRcdFx0ZnJvbSBcIi4vQ29tcG9uZW50cy9tMW0tZGlyZWN0b3J5XCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3Rvclx0OiBcInJvb3QtbWFuYWdlclwiLFxuXHR0ZW1wbGF0ZVx0OiBgPGNvbXAtbXVsdGltZWRpYS1tYW5hZ2VyIHRpdGxlPVwiR2VzdGlvbiBkZXMgc2VydmljZXMgVVBuUC9ETE5BXCI+PC9jb21wLW11bHRpbWVkaWEtbWFuYWdlcj5cblx0XHRcdFx0ICBgLFxuXHRwcm92aWRlcnNcdDogW11cbn0pXG5jbGFzcyBSb290TWFuYWdlciB7XG59XG5cbi8vZW5hYmxlUHJvZE1vZGUoKTtcbkBOZ01vZHVsZSh7XG5cdGltcG9ydHMgICAgIDogW0Jyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBIdHRwTW9kdWxlXSxcblx0ZGVjbGFyYXRpb25zOiBbUm9vdE1hbmFnZXIsIENvbXBNdWx0aW1lZGlhTWFuYWdlciwgQ29tcE1lZGlhLCBDb21wU2VydmVyLCBDb21wRGlyZWN0b3J5XSxcblx0Ym9vdHN0cmFwICAgOiBbUm9vdE1hbmFnZXJdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9
