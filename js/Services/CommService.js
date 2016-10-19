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
            initDone = false;
            let CommService = class CommService {
                constructor(_http) {
                    this._http = _http;
                    this.medias = [];
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
                browse(mediaServerId, directoryId = "0", withMedias = true) {
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
                            // Nettoyage des medias courants
                            this.medias = [];
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
                                if (withMedias) {
                                    this.medias = dataBrowse.medias;
                                }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG4vLyBpbXBvcnQgXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuLy8gZXhwb3J0XG5leHBvcnQgaW50ZXJmYWNlIEJyaWNrIHtcbiAgICBpZCAgICAgIDogc3RyaW5nO1xuICAgIG5hbWUgICAgOiBzdHJpbmc7XG4gICAgdHlwZSAgICA6IHN0cmluZ1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBNZWRpYVJlbmRlcmVyIGV4dGVuZHMgQnJpY2sge1xuICAgIGljb25VUkwgOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhU2VydmVyICAgZXh0ZW5kcyBCcmljayB7XG4gICAgaWNvblVSTCAgICAgOiBzdHJpbmc7XG4gICAgZGlyZWN0b3JpZXMgOiBEaXJlY3RvcnlbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUluaXQge1xuICAgIG1lZGlhUmVuZGVyZXJzICA6IE1lZGlhUmVuZGVyZXJbXTtcbiAgICBtZWRpYVNlcnZlcnMgICAgOiBNZWRpYVNlcnZlciAgW107XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdG9yeSB7XG4gICAgc2VydmVySWQgICAgOiBzdHJpbmc7XG4gICAgbmFtZSAgICAgICAgOiBzdHJpbmc7XG4gICAgaWNvblVSTCAgICAgOiBzdHJpbmc7XG4gICAgZGlyZWN0b3J5ICAgOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhIHtcbiAgICBzZXJ2ZXJJZCAgICAgICAgOiBzdHJpbmc7XG4gICAgZGF0ZSAgICAgICAgICAgIDogc3RyaW5nO1xuICAgIHRpdGxlICAgICAgICAgICA6IHN0cmluZztcbiAgICBpY29uICAgICAgICAgICAgOiBzdHJpbmc7XG4gICAgbWVkaWFJZCAgICAgICAgIDogc3RyaW5nO1xuICAgIGNyZWF0b3IgICAgICAgICA6IHN0cmluZztcbiAgICBhY3RvcnMgICAgICAgICAgOiBzdHJpbmdbXTtcbiAgICBnZW5yZXMgICAgICAgICAgOiBzdHJpbmdbXTtcbiAgICBhbGJ1bWFydHVyaSAgICAgOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24gICAgIDogc3RyaW5nO1xuICAgIGxvbmdkZXNjcmlwdGlvbiA6IHN0cmluZztcbiAgICByZXNzb3VyY2UgICAgICAgOiBzdHJpbmc7XG4gICAgY2xhc3NlICAgICAgICAgIDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBEYXRhQnJvd3NlIHtcbiAgICBwYXJlbnREaXJlY3RvcnkgOiBzdHJpbmc7XG4gICAgZGlyZWN0b3JpZXMgICAgIDogRGlyZWN0b3J5W107XG4gICAgbWVkaWFzICAgICAgICAgIDogTWVkaWFbXTtcbiAgICBlcnJvciAgICAgICAgICAgOiBzdHJpbmc7XG59XG5cbmxldCBpbml0RG9uZSA9IGZhbHNlO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbW1TZXJ2aWNlIHtcbiAgICBtZWRpYXMgICAgICAgICAgOiBNZWRpYVtdID0gW107XG4gICAgbWVkaWFSZW5kZXJlcnMgIDogTWVkaWFSZW5kZXJlcltdID0gW107XG4gICAgbWVkaWFTZXJ2ZXJzICAgIDogTWVkaWFTZXJ2ZXIgIFtdID0gW107XG4gICAgb251cGRhdGUgICAgICAgIDogKG9wZXJhdGlvbjogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGJyaWNrOiBNZWRpYVJlbmRlcmVyIHwgTWVkaWFTZXJ2ZXIpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBwYXJzZXJcdDogRE9NUGFyc2VyO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgfVxuICAgIGluaXQoKSA6IE9ic2VydmFibGU8RGF0YUluaXQ+IHtcbiAgICAgICAgaWYoaW5pdERvbmUpIHt0aHJvdyBcIkNhbm5vdCBpbnN0YW50aWF0ZSBDb21tU2VydmljZSBtdWx0aXBsZSB0aW1lcy4uLlwiO30gZWxzZSB7aW5pdERvbmUgPSB0cnVlO31cbiAgICAgICAgdXRpbHMuaW5pdElPKCBsb2NhdGlvbi5ob3N0bmFtZSArIFwiOlwiICsgbG9jYXRpb24ucG9ydCArIFwiL20ybVwiICk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChcIi9nZXRDb250ZXh0XCIpLm1hcCggKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge2NvbnNvbGUuZXJyb3IoXCJJbXBvc3NpYmxlIHRvIGdldCBjb250ZXh0OlwiLCByZXNwb25zZSk7IHJldHVybjt9XG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IEpTT04ucGFyc2UoIHJlc3BvbnNlLnRleHQoKSApO1xuICAgICAgICAgICAgZm9yKGxldCBpIGluIGNvbnRleHQuYnJpY2tzICkge1xuICAgICAgICAgICAgICAgIHRoaXMub25icmlja0FwcGVhciggY29udGV4dC5icmlja3NbaV0gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHV0aWxzLmlvLm9uXHQoIFwiYnJpY2tBcHBlYXJzXCIsIChicmljazogTWVkaWFSZW5kZXJlciB8IE1lZGlhU2VydmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIFwiYnJpY2tBcHBlYXJzXCIsIGJyaWNrICk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbmJyaWNrQXBwZWFyKCBicmljayApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1dGlscy5pby5vblx0KCBcImJyaWNrRGlzYXBwZWFyc1wiLCAoIGRhdGEgKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJicmljayBicmlja0Rpc2FwcGVhcnNcIiwgZGF0YS5icmlja0lkKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXgsIGhhc0lkID0gZnVuY3Rpb24oYnJpY2ssIGkpIHtpbmRleCA9IGk7IHJldHVybiBicmljay5pZCA9PT0gZGF0YS5icmlja0lkO307XG4gICAgICAgICAgICAgICAgaWYoIHRoaXMubWVkaWFSZW5kZXJlcnMuZmluZCggaGFzSWQgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWRpYVJlbmRlcmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm9udXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9udXBkYXRlKFwiZGlzYXBwZWFyXCIsIFwiQnJpY2tVUG5QX01lZGlhUmVuZGVyZXJcIiwgZGF0YS5icmlja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiggdGhpcy5tZWRpYVNlcnZlcnMuZmluZCAgKCBoYXNJZCApICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZGlhU2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm9udXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9udXBkYXRlKCBcImRpc2FwcGVhclwiLCBcIkJyaWNrVVBuUF9NZWRpYVNlcnZlclwiICAsIGRhdGEuYnJpY2tJZCApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge21lZGlhUmVuZGVyZXJzOiB0aGlzLm1lZGlhUmVuZGVyZXJzLCBtZWRpYVNlcnZlcnM6IHRoaXMubWVkaWFTZXJ2ZXJzfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uYnJpY2tBcHBlYXIoYnJpY2s6IE1lZGlhUmVuZGVyZXIgfCBNZWRpYVNlcnZlcikgOiB2b2lkIHtcbiAgICAgICAgaWYoIGJyaWNrLnR5cGUuaW5kZXhPZihcIkJyaWNrVVBuUF9NZWRpYVJlbmRlcmVyXCIpID49IDAgKSB7XG4gICAgICAgICAgICB0aGlzLm1lZGlhUmVuZGVyZXJzLnB1c2goIDxNZWRpYVJlbmRlcmVyPmJyaWNrICk7XG4gICAgICAgICAgICBpZih0aGlzLm9udXBkYXRlKSB7dGhpcy5vbnVwZGF0ZSggXCJhcHBlYXJcIiwgXCJCcmlja1VQblBfTWVkaWFSZW5kZXJlclwiLCBicmljayApO31cbiAgICAgICAgfVxuICAgICAgICBpZiggYnJpY2sudHlwZS5pbmRleE9mKFwiQnJpY2tVUG5QX01lZGlhU2VydmVyXCIpID49IDAgKSB7XG4gICAgICAgICAgICB0aGlzLm1lZGlhU2VydmVycy5wdXNoKCA8TWVkaWFTZXJ2ZXI+YnJpY2sgKTtcbiAgICAgICAgICAgIGlmKHRoaXMub251cGRhdGUpIHt0aGlzLm9udXBkYXRlKCBcImFwcGVhclwiLCBcIkJyaWNrVVBuUF9NZWRpYVNlcnZlclwiLCBicmljayApO31cbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGF5KG1lZGlhUmVuZGVyZXJJZDogc3RyaW5nKSA6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB1dGlscy5jYWxsKG1lZGlhUmVuZGVyZXJJZCwgXCJQbGF5XCIgLCBbXSk7XG4gICAgfVxuICAgIHBhdXNlKG1lZGlhUmVuZGVyZXJJZDogc3RyaW5nKSA6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB1dGlscy5jYWxsKG1lZGlhUmVuZGVyZXJJZCwgXCJQYXVzZVwiLCBbXSk7XG4gICAgfVxuICAgIHN0b3AobWVkaWFSZW5kZXJlcklkOiBzdHJpbmcpIDogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmNhbGwobWVkaWFSZW5kZXJlcklkLCBcIlN0b3BcIiwgW10pO1xuICAgIH1cbiAgICBzZXRWb2x1bWUobWVkaWFSZW5kZXJlcklkOiBzdHJpbmcsIHZvbHVtZTogbnVtYmVyKSA6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB1dGlscy5jYWxsKG1lZGlhUmVuZGVyZXJJZCwgXCJzZXRWb2x1bWVcIiwgW3ZvbHVtZV0pO1xuICAgIH1cbiAgICBsb2FkTWVkaWEobWVkaWFSZW5kZXJlcklkOiBzdHJpbmcsIG1lZGlhU2VydmVySWQ6IHN0cmluZywgaXRlbUlkOiBzdHJpbmcpIDogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmNhbGwobWVkaWFSZW5kZXJlcklkLCBcImxvYWRNZWRpYVwiLCBbbWVkaWFTZXJ2ZXJJZCwgaXRlbUlkXSk7XG4gICAgfVxuICAgIGJyb3dzZShtZWRpYVNlcnZlcklkOiBzdHJpbmcsIGRpcmVjdG9yeUlkOiBzdHJpbmcgPSBcIjBcIiwgd2l0aE1lZGlhczogYm9vbGVhbiA9IHRydWUpIDogUHJvbWlzZTxEYXRhQnJvd3NlPiB7XG4gICAgICAgIHJldHVybiB1dGlscy5jYWxsKCBtZWRpYVNlcnZlcklkLCBcIkJyb3dzZVwiLCBbZGlyZWN0b3J5SWRdICkudGhlbiggKGRhdGFTdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhQnJvd3NlIDogRGF0YUJyb3dzZSA9IHtcbiAgICAgICAgICAgICAgICBwYXJlbnREaXJlY3RvcnkgOiBkaXJlY3RvcnlJZCxcbiAgICAgICAgICAgICAgICBkaXJlY3RvcmllcyAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICBtZWRpYXMgICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICBlcnJvciAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgZG9jICAgICAgICAgPSB0aGlzLnBhcnNlci5wYXJzZUZyb21TdHJpbmcoIGRhdGFTdHJpbmcsIFwidGV4dC94bWxcIiApO1xuICAgICAgICAgICAgICAgIGxldCBSZXN1bHQgICAgICA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiUmVzdWx0XCIpO1xuICAgICAgICAgICAgICAgIGxldCBSZXN1bHREb2MgICA9IHRoaXMucGFyc2VyLnBhcnNlRnJvbVN0cmluZyhSZXN1bHQudGV4dENvbnRlbnQsIFwidGV4dC94bWxcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBQYXJzZSBjb250YWluZXJzXG4gICAgICAgICAgICAgICAgZm9yKGxldCBjb250YWluZXIgb2YgUmVzdWx0RG9jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjb250YWluZXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgICAgOiBOb2RlO1xuICAgICAgICAgICAgICAgICAgICBkYXRhQnJvd3NlLmRpcmVjdG9yaWVzLnB1c2goIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZlcklkICAgIDogbWVkaWFTZXJ2ZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgICAgICAgIDogKG5vZGU9Y29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKSk/bm9kZS50ZXh0Q29udGVudDpcImluY29ubnVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VUkwgICAgIDogKG5vZGU9Y29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJhbGJ1bUFydFVSSVwiKSk/bm9kZS50ZXh0Q29udGVudDpcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5ICAgOiBjb250YWluZXIuZ2V0QXR0cmlidXRlKFwiaWRcIil9ICk7XG4gICAgICAgICAgICAgICAgfSAvLyBFbmQgb2YgY29udGFpbmVycyBwYXJzaW5nXG5cbiAgICAgICAgICAgICAgICAvLyBOZXR0b3lhZ2UgZGVzIG1lZGlhcyBjb3VyYW50c1xuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFzID0gW107XG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgaXRlbVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaXRlbSBvZiBSZXN1bHREb2MucXVlcnlTZWxlY3RvckFsbChcIml0ZW1cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgICAgOiBOb2RlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVkaWEgICA6IE1lZGlhO1xuICAgICAgICAgICAgICAgICAgICBkYXRhQnJvd3NlLm1lZGlhcy5wdXNoKCBtZWRpYSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHhtbEl0ZW0gICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJJZCAgICAgICAgOiBtZWRpYVNlcnZlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSAgICAgICAgICAgIDogKG5vZGU9aXRlbS5xdWVyeVNlbGVjdG9yKFwiZGF0ZVwiKSk/bm9kZS50ZXh0Q29udGVudDpcImluY29ubnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSAgICAgICAgICAgOiAobm9kZT1pdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKSk/bm9kZS50ZXh0Q29udGVudDpcImluY29ubnVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24gICAgICAgICAgICA6IChub2RlPWl0ZW0ucXVlcnlTZWxlY3RvcihcImljb25cIikpP25vZGUudGV4dENvbnRlbnQ6XCJpbWFnZXMvbWVkaWFfaWNvbi5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhSWQgICAgICAgICA6IGl0ZW0uZ2V0QXR0cmlidXRlKFwiaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yICAgICAgICAgOiAobm9kZT1pdGVtLnF1ZXJ5U2VsZWN0b3IoXCJjcmVhdG9yXCIpKT9ub2RlLnRleHRDb250ZW50OlwiaW5jb25udVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0b3JzICAgICAgICAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5yZXMgICAgICAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsYnVtYXJ0dXJpICAgICA6IChub2RlPWl0ZW0ucXVlcnlTZWxlY3RvcihcImFsYnVtYXJ0dXJpLCBhbGJ1bUFydFVSSSwgYWxidW1BcnRVcmlcIikpP25vZGUudGV4dENvbnRlbnQ6XCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uICAgICA6IChub2RlPWl0ZW0ucXVlcnlTZWxlY3RvcihcImRlc2NyaXB0aW9uXCIpKT9ub2RlLnRleHRDb250ZW50OlwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25nZGVzY3JpcHRpb24gOiAobm9kZT1pdGVtLnF1ZXJ5U2VsZWN0b3IoXCJsb25nZGVzY3JpcHRpb24sIGxvbmdEZXNjcmlwdGlvblwiKSk/bm9kZS50ZXh0Q29udGVudDpcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzc291cmNlICAgICAgIDogKG5vZGU9aXRlbS5xdWVyeVNlbGVjdG9yKFwicmVzXCIpKT9ub2RlLnRleHRDb250ZW50OlwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2UgICAgICAgICAgOiAobm9kZT1pdGVtLnF1ZXJ5U2VsZWN0b3IoXCJjbGFzc1wiKSk/bm9kZS50ZXh0Q29udGVudDpcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcblxuICAgICAgICAgICAgICAgICAgICBpZih3aXRoTWVkaWFzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lZGlhcyA9IGRhdGFCcm93c2UubWVkaWFzO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBhY3RvciBvZiBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiYWN0b3JcIiApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYS5hY3RvcnMucHVzaCggYWN0b3IudGV4dENvbnRlbnQgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGdlbnJlIG9mIGl0ZW0ucXVlcnlTZWxlY3RvckFsbCggXCJnZW5yZVwiICkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhLmdlbnJlcy5wdXNoKCBnZW5yZS50ZXh0Q29udGVudCApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBFbmQgb2YgaXRlbXMgcGFyc2luZ1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtkYXRhQnJvd3NlLmVycm9yID0gZXJyO31cbiAgICAgICAgICAgIHJldHVybiBkYXRhQnJvd3NlO1xuICAgIH0pO1xufX07XG4iXSwic291cmNlUm9vdCI6IiJ9
