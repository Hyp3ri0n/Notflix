/// <reference path="../typings/index.d.ts" />
System.register(["@angular/platform-browser-dynamic", "@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/http", "./Components/m1m-multimedia-manager", "./Components/m1m-media", "./Components/m1m-server", "./Components/m1m-directory", "./Components/m1m-lecteur", "./Services/CommService", "./Components/dragNdrop/DragDropModule"], function(exports_1, context_1) {
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
    var platform_browser_dynamic_1, core_1, platform_browser_1, core_2, forms_1, http_1, m1m_multimedia_manager_1, m1m_media_1, m1m_server_1, m1m_directory_1, m1m_lecteur_1, CommService_1, DragDropModule_1;
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
            },
            function (m1m_lecteur_1_1) {
                m1m_lecteur_1 = m1m_lecteur_1_1;
            },
            function (CommService_1_1) {
                CommService_1 = CommService_1_1;
            },
            function (DragDropModule_1_1) {
                DragDropModule_1 = DragDropModule_1_1;
            }],
        execute: function() {
            let RootManager = class RootManager {
            };
            RootManager = __decorate([
                core_1.Component({
                    selector: "root-manager",
                    template: `<comp-multimedia-manager title="Gestion des services UPnP/DLNA" alx-dragdrop></comp-multimedia-manager>				  `
                }), 
                __metadata('design:paramtypes', [])
            ], RootManager);
            //enableProdMode();
            let AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_2.NgModule({
                    imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, DragDropModule_1.DragDropModule],
                    declarations: [RootManager, m1m_multimedia_manager_1.CompMultimediaManager, m1m_media_1.CompMedia, m1m_server_1.CompServer, m1m_directory_1.CompDirectory, m1m_lecteur_1.CompLecteur],
                    providers: [CommService_1.CommService],
                    bootstrap: [RootManager]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUI5QztZQUNBLENBQUM7WUFMRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNWLFFBQVEsRUFBRyxjQUFjO29CQUN6QixRQUFRLEVBQUcsK0dBQStHO2lCQUMxSCxDQUFDOzsyQkFBQTtZQUlGLG1CQUFtQjtZQU9uQjtZQUF3QixDQUFDO1lBTnpCO2dCQUFDLGVBQVEsQ0FBQztvQkFDVCxPQUFPLEVBQU8sQ0FBQyxnQ0FBYSxFQUFFLG1CQUFXLEVBQUUsaUJBQVUsRUFBRSwrQkFBYyxDQUFFO29CQUN2RSxZQUFZLEVBQUUsQ0FBQyxXQUFXLEVBQUUsOENBQXFCLEVBQUUscUJBQVMsRUFBRSx1QkFBVSxFQUFFLDZCQUFhLEVBQUUseUJBQVcsQ0FBQztvQkFDckcsU0FBUyxFQUFHLENBQUMseUJBQVcsQ0FBQztvQkFDekIsU0FBUyxFQUFLLENBQUMsV0FBVyxDQUFDO2lCQUMzQixDQUFDOzt5QkFBQTtZQUNGLGlDQUF5QixDQUFBO1lBRXpCLGlEQUFzQixFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cblxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9ICAgZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pY1wiO1xuaW1wb3J0IHtDb21wb25lbnR9ICAgICAgICAgICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSAgICBcdFx0ZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gXHRcdFx0XHRmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgIFx0XHRcdGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtIdHRwTW9kdWxlfSBcdFx0XHRcdGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5cbmltcG9ydCB7IENvbXBNdWx0aW1lZGlhTWFuYWdlciB9IFx0ZnJvbSBcIi4vQ29tcG9uZW50cy9tMW0tbXVsdGltZWRpYS1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBDb21wTWVkaWEgfSBcdFx0XHRcdGZyb20gXCIuL0NvbXBvbmVudHMvbTFtLW1lZGlhXCI7XG5pbXBvcnQgeyBDb21wU2VydmVyIH0gXHRcdFx0XHRmcm9tIFwiLi9Db21wb25lbnRzL20xbS1zZXJ2ZXJcIjtcbmltcG9ydCB7IENvbXBEaXJlY3RvcnkgfSBcdFx0XHRmcm9tIFwiLi9Db21wb25lbnRzL20xbS1kaXJlY3RvcnlcIjtcbmltcG9ydCB7IENvbXBMZWN0ZXVyIH0gXHRcdFx0XHRmcm9tIFwiLi9Db21wb25lbnRzL20xbS1sZWN0ZXVyXCI7XG5pbXBvcnQgeyBDb21tU2VydmljZSB9IFx0XHRcdFx0ZnJvbSBcIi4vU2VydmljZXMvQ29tbVNlcnZpY2VcIjtcblxuaW1wb3J0IHsgRHJhZ0Ryb3BNb2R1bGUgfSAgICAgICAgICAgZnJvbSBcIi4vQ29tcG9uZW50cy9kcmFnTmRyb3AvRHJhZ0Ryb3BNb2R1bGVcIjtcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3JcdDogXCJyb290LW1hbmFnZXJcIixcblx0dGVtcGxhdGVcdDogYDxjb21wLW11bHRpbWVkaWEtbWFuYWdlciB0aXRsZT1cIkdlc3Rpb24gZGVzIHNlcnZpY2VzIFVQblAvRExOQVwiIGFseC1kcmFnZHJvcD48L2NvbXAtbXVsdGltZWRpYS1tYW5hZ2VyPlx0XHRcdFx0ICBgXG59KVxuY2xhc3MgUm9vdE1hbmFnZXIge1xufVxuXG4vL2VuYWJsZVByb2RNb2RlKCk7XG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzICAgICA6IFtCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgSHR0cE1vZHVsZSwgRHJhZ0Ryb3BNb2R1bGUgXSxcblx0ZGVjbGFyYXRpb25zOiBbUm9vdE1hbmFnZXIsIENvbXBNdWx0aW1lZGlhTWFuYWdlciwgQ29tcE1lZGlhLCBDb21wU2VydmVyLCBDb21wRGlyZWN0b3J5LCBDb21wTGVjdGV1cl0sXG5cdHByb3ZpZGVyc1x0OiBbQ29tbVNlcnZpY2VdLFxuXHRib290c3RyYXAgICA6IFtSb290TWFuYWdlcl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
