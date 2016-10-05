System.register(["@angular/core", "@angular/http", "./utils", "rxjs/add/operator/map"], function(exports_1, context_1) {
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
    var core_1, http_1, utils_1;
    var initDone, CommService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (_1) {}],
        execute: function() {
            ;
            ;
            initDone = false;
            let CommService = class CommService {
                constructor(_http) {
                    this._http = _http;
                    this.mediaRenderers = [];
                    this.mediaServers = [];
                    this.parser = new DOMParser();
                }
                init() {
                    if (initDone) {
                        throw "Cannot instantiate CommService multiple times...";
                    }
                    else {
                        initDone = true;
                    }
                    utils_1.utils.initIO(location.hostname + ":" + location.port + "/m2m");
                    return this._http.get("/getContext").map((response) => {
                        if (response.status !== 200) {
                            console.error("Impossible to get context:", response);
                            return;
                        }
                        let context = JSON.parse(response.text());
                        for (let i in context.bricks) {
                            this.onbrickAppear(context.bricks[i]);
                        }
                        utils_1.utils.io.on("brickAppears", (brick) => {
                            console.log("brickAppears", brick);
                            this.onbrickAppear(brick);
                        });
                        utils_1.utils.io.on("brickDisappears", (data) => {
                            console.log("brick brickDisappears", data.brickId);
                            let index, hasId = function (brick, i) { index = i; return brick.id === data.brickId; };
                            if (this.mediaRenderers.find(hasId)) {
                                this.mediaRenderers.splice(index, 1);
                                if (this.onupdate) {
                                    this.onupdate("disappear", "BrickUPnP_MediaRenderer", data.brickId);
                                }
                            }
                            if (this.mediaServers.find(hasId)) {
                                this.mediaServers.splice(index, 1);
                                if (this.onupdate) {
                                    this.onupdate("disappear", "BrickUPnP_MediaServer", data.brickId);
                                }
                            }
                        });
                        return { mediaRenderers: this.mediaRenderers, mediaServers: this.mediaServers };
                    });
                }
                onbrickAppear(brick) {
                    if (brick.type.indexOf("BrickUPnP_MediaRenderer") >= 0) {
                        this.mediaRenderers.push(brick);
                        if (this.onupdate) {
                            this.onupdate("appear", "BrickUPnP_MediaRenderer", brick);
                        }
                    }
                    if (brick.type.indexOf("BrickUPnP_MediaServer") >= 0) {
                        this.mediaServers.push(brick);
                        if (this.onupdate) {
                            this.onupdate("appear", "BrickUPnP_MediaServer", brick);
                        }
                    }
                }
                play(mediaRendererId) {
                    return utils_1.utils.call(mediaRendererId, "Play", []);
                }
                pause(mediaRendererId) {
                    return utils_1.utils.call(mediaRendererId, "Pause", []);
                }
                stop(mediaRendererId) {
                    return utils_1.utils.call(mediaRendererId, "Stop", []);
                }
                setVolume(mediaRendererId, volume) {
                    return utils_1.utils.call(mediaRendererId, "setVolume", [volume]);
                }
                loadMedia(mediaRendererId, mediaServerId, itemId) {
                    return utils_1.utils.call(mediaRendererId, "loadMedia", [mediaServerId, itemId]);
                }
                browse(mediaServerId, directoryId = "0") {
                    return utils_1.utils.call(mediaServerId, "Browse", [directoryId]).then((dataString) => {
                        let dataBrowse = {
                            parentDirectory: directoryId,
                            directories: [],
                            medias: [],
                            error: null
                        };
                        try {
                            let doc = this.parser.parseFromString(dataString, "text/xml");
                            let Result = doc.querySelector("Result");
                            let ResultDoc = this.parser.parseFromString(Result.textContent, "text/xml");
                            // Parse containers
                            for (let container of ResultDoc.querySelectorAll("container")) {
                                let node;
                                dataBrowse.directories.push({
                                    serverId: mediaServerId,
                                    name: (node = container.querySelector("title")) ? node.textContent : "inconnu",
                                    iconURL: (node = container.querySelector("albumArtURI")) ? node.textContent : "",
                                    directory: container.getAttribute("id") });
                            } // End of containers parsing
                            // Parse item
                            for (let item of ResultDoc.querySelectorAll("item")) {
                                let node;
                                let media;
                                dataBrowse.medias.push(media = {
                                    // xmlItem         : item,
                                    serverId: mediaServerId,
                                    date: (node = item.querySelector("date")) ? node.textContent : "inconnue",
                                    title: (node = item.querySelector("title")) ? node.textContent : "inconnu",
                                    icon: (node = item.querySelector("icon")) ? node.textContent : "images/media_icon.jpg",
                                    mediaId: item.getAttribute("id"),
                                    creator: (node = item.querySelector("creator")) ? node.textContent : "inconnu",
                                    actors: [],
                                    genres: [],
                                    albumarturi: (node = item.querySelector("albumarturi, albumArtURI, albumArtUri")) ? node.textContent : "",
                                    description: (node = item.querySelector("description")) ? node.textContent : "",
                                    longdescription: (node = item.querySelector("longdescription, longDescription")) ? node.textContent : "",
                                    ressource: (node = item.querySelector("res")) ? node.textContent : "",
                                    classe: (node = item.querySelector("class")) ? node.textContent : ""
                                });
                                for (let actor of item.querySelectorAll("actor")) {
                                    media.actors.push(actor.textContent);
                                }
                                for (let genre of item.querySelectorAll("genre")) {
                                    media.genres.push(genre.textContent);
                                }
                            } // End of items parsing
                        }
                        catch (err) {
                            dataBrowse.error = err;
                        }
                        return dataBrowse;
                    });
                }
            };
            CommService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], CommService);
            exports_1("CommService", CommService);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZpY2VzL0NvbW1TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFxREksUUFBUTs7Ozs7Ozs7Ozs7Ozs7WUE5QlgsQ0FBQztZQTRCRCxDQUFDO1lBRUUsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUVyQjtnQkFLSSxZQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBSi9CLG1CQUFjLEdBQXNCLEVBQUUsQ0FBQztvQkFDdkMsaUJBQVksR0FBd0IsRUFBRSxDQUFDO29CQUluQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsSUFBSTtvQkFDQSxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUFBLE1BQU0sa0RBQWtELENBQUM7b0JBQUEsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFBQSxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUFBLENBQUM7b0JBQ2hHLGFBQUssQ0FBQyxNQUFNLENBQUUsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUUsQ0FBQztvQkFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxDQUFDLFFBQVE7d0JBQy9DLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFBQSxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLFFBQVEsQ0FBQyxDQUFDOzRCQUFDLE1BQU0sQ0FBQzt3QkFBQSxDQUFDO3dCQUM1RixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBRSxDQUFDO3dCQUM1QyxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENB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dEUsTUFBTSxFQUFZLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsV0FBVyxHQUFDLEVBQUU7aUNBQzNFLENBQUUsQ0FBQztnQ0FDSixHQUFHLENBQUEsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUUsT0FBTyxDQUFFLENBQUMsQ0FBQyxDQUFDO29DQUNoRCxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUMsV0FBVyxDQUFFLENBQUM7Z0NBQzNDLENBQUM7Z0NBQ0QsR0FBRyxDQUFBLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFFLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQztvQ0FDaEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBRSxDQUFDO2dDQUMzQyxDQUFDOzRCQUNMLENBQUMsQ0FBQyx1QkFBdUI7d0JBQzdCLENBQUU7d0JBQUEsS0FBSyxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFBQSxVQUFVLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFBQSxDQUFDO3dCQUN0QyxNQUFNLENBQUMsVUFBVSxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQUEsQ0FBQztZQXZIRjtnQkFBQyxpQkFBVSxFQUFFOzsyQkFBQTtZQUNiLHFDQXNIRSxDQUFBO1lBQUEsQ0FBQyIsImZpbGUiOiJTZXJ2aWNlcy9Db21tU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuLy8gaW1wb3J0IFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbi8vIGV4cG9ydFxuZXhwb3J0IGludGVyZmFjZSBCcmljayB7XG4gICAgaWQgICAgICA6IHN0cmluZztcbiAgICBuYW1lICAgIDogc3RyaW5nO1xuICAgIHR5cGUgICAgOiBzdHJpbmdbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFSZW5kZXJlciBleHRlbmRzIEJyaWNrIHtcbiAgICBpY29uVVJMIDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBNZWRpYVNlcnZlciAgIGV4dGVuZHMgQnJpY2sge1xuICAgIGljb25VUkwgICAgIDogc3RyaW5nO1xuICAgIGRpcmVjdG9yaWVzIDogRGlyZWN0b3J5W107XG59XG5leHBvcnQgaW50ZXJmYWNlIERhdGFJbml0IHtcbiAgICBtZWRpYVJlbmRlcmVycyAgOiBNZWRpYVJlbmRlcmVyW107XG4gICAgbWVkaWFTZXJ2ZXJzICAgIDogTWVkaWFTZXJ2ZXIgIFtdO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBEaXJlY3Rvcnkge1xuICAgIHNlcnZlcklkICAgIDogc3RyaW5nO1xuICAgIG5hbWUgICAgICAgIDogc3RyaW5nO1xuICAgIGljb25VUkwgICAgIDogc3RyaW5nO1xuICAgIGRpcmVjdG9yeSAgIDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBNZWRpYSB7XG4gICAgc2VydmVySWQgICAgICAgIDogc3RyaW5nO1xuICAgIGRhdGUgICAgICAgICAgICA6IHN0cmluZztcbiAgICB0aXRsZSAgICAgICAgICAgOiBzdHJpbmc7XG4gICAgaWNvbiAgICAgICAgICAgIDogc3RyaW5nO1xuICAgIG1lZGlhSWQgICAgICAgICA6IHN0cmluZztcbiAgICBjcmVhdG9yICAgICAgICAgOiBzdHJpbmc7XG4gICAgYWN0b3JzICAgICAgICAgIDogc3RyaW5nW107XG4gICAgZ2VucmVzICAgICAgICAgIDogc3RyaW5nW107XG4gICAgYWxidW1hcnR1cmkgICAgIDogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uICAgICA6IHN0cmluZztcbiAgICBsb25nZGVzY3JpcHRpb24gOiBzdHJpbmc7XG4gICAgcmVzc291cmNlICAgICAgIDogc3RyaW5nO1xuICAgIGNsYXNzZSAgICAgICAgICA6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUJyb3dzZSB7XG4gICAgcGFyZW50RGlyZWN0b3J5IDogc3RyaW5nO1xuICAgIGRpcmVjdG9yaWVzICAgICA6IERpcmVjdG9yeVtdO1xuICAgIG1lZGlhcyAgICAgICAgICA6IE1lZGlhW107XG4gICAgZXJyb3IgICAgICAgICAgIDogc3RyaW5nO1xufTtcblxubGV0IGluaXREb25lID0gZmFsc2U7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tbVNlcnZpY2Uge1xuICAgIG1lZGlhUmVuZGVyZXJzICA6IE1lZGlhUmVuZGVyZXJbXSA9IFtdO1xuICAgIG1lZGlhU2VydmVycyAgICA6IE1lZGlhU2VydmVyICBbXSA9IFtdO1xuICAgIG9udXBkYXRlICAgICAgICA6IChvcGVyYXRpb246IHN0cmluZywgdHlwZTogc3RyaW5nLCBicmljazogTWVkaWFSZW5kZXJlciB8IE1lZGlhU2VydmVyKSA9PiB2b2lkO1xuICAgIHByaXZhdGUgcGFyc2VyXHQ6IERPTVBhcnNlcjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7XG4gICAgICAgIHRoaXMucGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIH1cbiAgICBpbml0KCkgOiBPYnNlcnZhYmxlPERhdGFJbml0PiB7XG4gICAgICAgIGlmKGluaXREb25lKSB7dGhyb3cgXCJDYW5ub3QgaW5zdGFudGlhdGUgQ29tbVNlcnZpY2UgbXVsdGlwbGUgdGltZXMuLi5cIjt9IGVsc2Uge2luaXREb25lID0gdHJ1ZTt9XG4gICAgICAgIHV0aWxzLmluaXRJTyggbG9jYXRpb24uaG9zdG5hbWUgKyBcIjpcIiArIGxvY2F0aW9uLnBvcnQgKyBcIi9tMm1cIiApO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoXCIvZ2V0Q29udGV4dFwiKS5tYXAoIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtjb25zb2xlLmVycm9yKFwiSW1wb3NzaWJsZSB0byBnZXQgY29udGV4dDpcIiwgcmVzcG9uc2UpOyByZXR1cm47fVxuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSBKU09OLnBhcnNlKCByZXNwb25zZS50ZXh0KCkgKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSBpbiBjb250ZXh0LmJyaWNrcyApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uYnJpY2tBcHBlYXIoIGNvbnRleHQuYnJpY2tzW2ldICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1dGlscy5pby5vblx0KCBcImJyaWNrQXBwZWFyc1wiLCAoYnJpY2s6IE1lZGlhUmVuZGVyZXIgfCBNZWRpYVNlcnZlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcImJyaWNrQXBwZWFyc1wiLCBicmljayApO1xuICAgICAgICAgICAgICAgIHRoaXMub25icmlja0FwcGVhciggYnJpY2sgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdXRpbHMuaW8ub25cdCggXCJicmlja0Rpc2FwcGVhcnNcIiwgKCBkYXRhICkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYnJpY2sgYnJpY2tEaXNhcHBlYXJzXCIsIGRhdGEuYnJpY2tJZCk7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4LCBoYXNJZCA9IGZ1bmN0aW9uKGJyaWNrLCBpKSB7aW5kZXggPSBpOyByZXR1cm4gYnJpY2suaWQgPT09IGRhdGEuYnJpY2tJZDt9O1xuICAgICAgICAgICAgICAgIGlmKCB0aGlzLm1lZGlhUmVuZGVyZXJzLmZpbmQoIGhhc0lkICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVkaWFSZW5kZXJlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5vbnVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbnVwZGF0ZShcImRpc2FwcGVhclwiLCBcIkJyaWNrVVBuUF9NZWRpYVJlbmRlcmVyXCIsIGRhdGEuYnJpY2tJZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoIHRoaXMubWVkaWFTZXJ2ZXJzLmZpbmQgICggaGFzSWQgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWRpYVNlcnZlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5vbnVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbnVwZGF0ZSggXCJkaXNhcHBlYXJcIiwgXCJCcmlja1VQblBfTWVkaWFTZXJ2ZXJcIiAgLCBkYXRhLmJyaWNrSWQgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHttZWRpYVJlbmRlcmVyczogdGhpcy5tZWRpYVJlbmRlcmVycywgbWVkaWFTZXJ2ZXJzOiB0aGlzLm1lZGlhU2VydmVyc307XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbmJyaWNrQXBwZWFyKGJyaWNrOiBNZWRpYVJlbmRlcmVyIHwgTWVkaWFTZXJ2ZXIpIDogdm9pZCB7XG4gICAgICAgIGlmKCBicmljay50eXBlLmluZGV4T2YoXCJCcmlja1VQblBfTWVkaWFSZW5kZXJlclwiKSA+PSAwICkge1xuICAgICAgICAgICAgdGhpcy5tZWRpYVJlbmRlcmVycy5wdXNoKCA8TWVkaWFSZW5kZXJlcj5icmljayApO1xuICAgICAgICAgICAgaWYodGhpcy5vbnVwZGF0ZSkge3RoaXMub251cGRhdGUoIFwiYXBwZWFyXCIsIFwiQnJpY2tVUG5QX01lZGlhUmVuZGVyZXJcIiwgYnJpY2sgKTt9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIGJyaWNrLnR5cGUuaW5kZXhPZihcIkJyaWNrVVBuUF9NZWRpYVNlcnZlclwiKSA+PSAwICkge1xuICAgICAgICAgICAgdGhpcy5tZWRpYVNlcnZlcnMucHVzaCggPE1lZGlhU2VydmVyPmJyaWNrICk7XG4gICAgICAgICAgICBpZih0aGlzLm9udXBkYXRlKSB7dGhpcy5vbnVwZGF0ZSggXCJhcHBlYXJcIiwgXCJCcmlja1VQblBfTWVkaWFTZXJ2ZXJcIiwgYnJpY2sgKTt9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGxheShtZWRpYVJlbmRlcmVySWQ6IHN0cmluZykgOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdXRpbHMuY2FsbChtZWRpYVJlbmRlcmVySWQsIFwiUGxheVwiICwgW10pO1xuICAgIH1cbiAgICBwYXVzZShtZWRpYVJlbmRlcmVySWQ6IHN0cmluZykgOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdXRpbHMuY2FsbChtZWRpYVJlbmRlcmVySWQsIFwiUGF1c2VcIiwgW10pO1xuICAgIH1cbiAgICBzdG9wKG1lZGlhUmVuZGVyZXJJZDogc3RyaW5nKSA6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB1dGlscy5jYWxsKG1lZGlhUmVuZGVyZXJJZCwgXCJTdG9wXCIsIFtdKTtcbiAgICB9XG4gICAgc2V0Vm9sdW1lKG1lZGlhUmVuZGVyZXJJZDogc3RyaW5nLCB2b2x1bWU6IG51bWJlcikgOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdXRpbHMuY2FsbChtZWRpYVJlbmRlcmVySWQsIFwic2V0Vm9sdW1lXCIsIFt2b2x1bWVdKTtcbiAgICB9XG4gICAgbG9hZE1lZGlhKG1lZGlhUmVuZGVyZXJJZDogc3RyaW5nLCBtZWRpYVNlcnZlcklkOiBzdHJpbmcsIGl0ZW1JZDogc3RyaW5nKSA6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB1dGlscy5jYWxsKG1lZGlhUmVuZGVyZXJJZCwgXCJsb2FkTWVkaWFcIiwgW21lZGlhU2VydmVySWQsIGl0ZW1JZF0pO1xuICAgIH1cbiAgICBicm93c2UobWVkaWFTZXJ2ZXJJZDogc3RyaW5nLCBkaXJlY3RvcnlJZDogc3RyaW5nID0gXCIwXCIpIDogUHJvbWlzZTxEYXRhQnJvd3NlPiB7XG4gICAgICAgIHJldHVybiB1dGlscy5jYWxsKCBtZWRpYVNlcnZlcklkLCBcIkJyb3dzZVwiLCBbZGlyZWN0b3J5SWRdICkudGhlbiggKGRhdGFTdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhQnJvd3NlIDogRGF0YUJyb3dzZSA9IHtcbiAgICAgICAgICAgICAgICBwYXJlbnREaXJlY3RvcnkgOiBkaXJlY3RvcnlJZCxcbiAgICAgICAgICAgICAgICBkaXJlY3RvcmllcyAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICBtZWRpYXMgICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICBlcnJvciAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgZG9jICAgICAgICAgPSB0aGlzLnBhcnNlci5wYXJzZUZyb21TdHJpbmcoIGRhdGFTdHJpbmcsIFwidGV4dC94bWxcIiApO1xuICAgICAgICAgICAgICAgIGxldCBSZXN1bHQgICAgICA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiUmVzdWx0XCIpO1xuICAgICAgICAgICAgICAgIGxldCBSZXN1bHREb2MgICA9IHRoaXMucGFyc2VyLnBhcnNlRnJvbVN0cmluZyhSZXN1bHQudGV4dENvbnRlbnQsIFwidGV4dC94bWxcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBQYXJzZSBjb250YWluZXJzXG4gICAgICAgICAgICAgICAgZm9yKGxldCBjb250YWluZXIgb2YgUmVzdWx0RG9jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjb250YWluZXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgICAgOiBOb2RlO1xuICAgICAgICAgICAgICAgICAgICBkYXRhQnJvd3NlLmRpcmVjdG9yaWVzLnB1c2goIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlcklkICAgIDogbWVkaWFTZXJ2ZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgICAgICAgIDogKG5vZGU9Y29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKSk/bm9kZS50ZXh0Q29udGVudDpcImluY29ubnVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VUkwgICAgIDogKG5vZGU9Y29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJhbGJ1bUFydFVSSVwiKSk/bm9kZS50ZXh0Q29udGVudDpcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5ICAgOiBjb250YWluZXIuZ2V0QXR0cmlidXRlKFwiaWRcIil9ICk7XG4gICAgICAgICAgICAgICAgfSAvLyBFbmQgb2YgY29udGFpbmVycyBwYXJzaW5nXG5cbiAgICAgICAgICAgICAgICAvLyBQYXJzZSBpdGVtXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpdGVtIG9mIFJlc3VsdERvYy5xdWVyeVNlbGVjdG9yQWxsKFwiaXRlbVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSAgICA6IE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtZWRpYSAgIDogTWVkaWE7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFCcm93c2UubWVkaWFzLnB1c2goIG1lZGlhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8geG1sSXRlbSAgICAgICAgIDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlcklkICAgICAgICA6IG1lZGlhU2VydmVySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlICAgICAgICAgICAgOiAobm9kZT1pdGVtLnF1ZXJ5U2VsZWN0b3IoXCJkYXRlXCIpKT9ub2RlLnRleHRDb250ZW50OlwiaW5jb25udWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlICAgICAgICAgICA6IChub2RlPWl0ZW0ucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpKT9ub2RlLnRleHRDb250ZW50OlwiaW5jb25udVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbiAgICAgICAgICAgIDogKG5vZGU9aXRlbS5xdWVyeVNlbGVjdG9yKFwiaWNvblwiKSk/bm9kZS50ZXh0Q29udGVudDpcImltYWdlcy9tZWRpYV9pY29uLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFJZCAgICAgICAgIDogaXRlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3IgICAgICAgICA6IChub2RlPWl0ZW0ucXVlcnlTZWxlY3RvcihcImNyZWF0b3JcIikpP25vZGUudGV4dENvbnRlbnQ6XCJpbmNvbm51XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RvcnMgICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbnJlcyAgICAgICAgICA6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxidW1hcnR1cmkgICAgIDogKG5vZGU9aXRlbS5xdWVyeVNlbGVjdG9yKFwiYWxidW1hcnR1cmksIGFsYnVtQXJ0VVJJLCBhbGJ1bUFydFVyaVwiKSk/bm9kZS50ZXh0Q29udGVudDpcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gICAgIDogKG5vZGU9aXRlbS5xdWVyeVNlbGVjdG9yKFwiZGVzY3JpcHRpb25cIikpP25vZGUudGV4dENvbnRlbnQ6XCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdkZXNjcmlwdGlvbiA6IChub2RlPWl0ZW0ucXVlcnlTZWxlY3RvcihcImxvbmdkZXNjcmlwdGlvbiwgbG9uZ0Rlc2NyaXB0aW9uXCIpKT9ub2RlLnRleHRDb250ZW50OlwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNzb3VyY2UgICAgICAgOiAobm9kZT1pdGVtLnF1ZXJ5U2VsZWN0b3IoXCJyZXNcIikpP25vZGUudGV4dENvbnRlbnQ6XCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZSAgICAgICAgICA6IChub2RlPWl0ZW0ucXVlcnlTZWxlY3RvcihcImNsYXNzXCIpKT9ub2RlLnRleHRDb250ZW50OlwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGFjdG9yIG9mIGl0ZW0ucXVlcnlTZWxlY3RvckFsbCggXCJhY3RvclwiICkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhLmFjdG9ycy5wdXNoKCBhY3Rvci50ZXh0Q29udGVudCApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgZ2VucmUgb2YgaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCBcImdlbnJlXCIgKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWEuZ2VucmVzLnB1c2goIGdlbnJlLnRleHRDb250ZW50ICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIEVuZCBvZiBpdGVtcyBwYXJzaW5nXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge2RhdGFCcm93c2UuZXJyb3IgPSBlcnI7fVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFCcm93c2U7XG4gICAgfSk7XG59fTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
