System.register(["socket.io-client"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SIO;
    var Utils, utils;
    return {
        setters:[
            function (SIO_1) {
                SIO = SIO_1;
            }],
        execute: function() {
            console.log("SIO", SIO);
            class Utils {
                initIO(url) {
                    console.log("SIO:", url, SIO);
                    this.io = this.io || SIO.connect(url);
                    return this;
                }
                subscribeBrick(brickId, eventName, cb) {
                    let cbEventName = brickId + "::" + eventName;
                    this.io.emit("subscribeBrick", { brickId: brickId,
                        eventName: eventName,
                        cbEventName: cbEventName
                    });
                    this.io.on(cbEventName, cb);
                    return this;
                }
                call(objectId, method, params, cb) {
                    let call = { objectId: objectId,
                        method: method,
                        params: JSON.stringify(params)
                    };
                    // console.log( "Calling", call);
                    return new Promise((resolve) => {
                        this.io.emit("call", call, (data) => {
                            // console.log("Call", call.callId, " returns", data);
                            if (cb) {
                                cb(data);
                            }
                            resolve(data);
                        });
                    });
                }
            }
            exports_1("utils", utils = new Utils());
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZpY2VzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7ZUF3Q1csS0FBSzs7Ozs7OztZQXRDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxLQUFLLEVBQUUsR0FBRyxDQUFFLENBQUM7WUFFMUI7Z0JBRUksTUFBTSxDQUFDLEdBQVc7b0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRSxDQUFDO29CQUNoQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFDRCxjQUFjLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFO29CQUNqQyxJQUFJLFdBQVcsR0FBRyxPQUFPLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUcsZ0JBQWdCLEVBQ3pCLEVBQUUsT0FBTyxFQUFJLE9BQU87d0JBQ2hCLFNBQVMsRUFBRyxTQUFTO3dCQUNyQixXQUFXLEVBQUcsV0FBVztxQkFDOUIsQ0FDSixDQUFDO29CQUNGLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFHLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFDRCxJQUFJLENBQUMsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsTUFBYSxFQUFFLEVBQXFCO29CQUN2RSxJQUFJLElBQUksR0FBRyxFQUFFLFFBQVEsRUFBRyxRQUFRO3dCQUMxQixNQUFNLEVBQUcsTUFBTTt3QkFDZixNQUFNLEVBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxNQUFNLENBQUU7cUJBQ3RDLENBQUM7b0JBQ0YsaUNBQWlDO29CQUNqQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQVEsQ0FBQyxPQUFPO3dCQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBRyxNQUFNLEVBQUUsSUFBSSxFQUNyQixDQUFDLElBQUk7NEJBQ0gsc0RBQXNEOzRCQUN0RCxFQUFFLENBQUEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dDQUFBLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFBQSxDQUFDOzRCQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xCLENBQUMsQ0FDSixDQUFDO29CQUNOLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1lBRVUsbUJBQUEsS0FBSyxHQUFXLElBQUksS0FBSyxFQUFFLENBQUEsQ0FBQyIsImZpbGUiOiJTZXJ2aWNlcy91dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNJTyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuXG5jb25zb2xlLmxvZyggXCJTSU9cIiwgU0lPICk7XG5cbmNsYXNzIFV0aWxzIHtcbiAgICBpbyA6IFNvY2tldElPQ2xpZW50LlNvY2tldDtcbiAgICBpbml0SU8odXJsOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coIFwiU0lPOlwiLCB1cmwsIFNJTyApO1xuICAgICAgICB0aGlzLmlvID0gdGhpcy5pbyB8fCBTSU8uY29ubmVjdCh1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3Vic2NyaWJlQnJpY2soYnJpY2tJZCwgZXZlbnROYW1lLCBjYikge1xuICAgICAgICBsZXQgY2JFdmVudE5hbWUgPSBicmlja0lkICsgXCI6OlwiICsgZXZlbnROYW1lO1xuICAgICAgICB0aGlzLmlvLmVtaXRcdCggXCJzdWJzY3JpYmVCcmlja1wiXG4gICAgICAgICAgICAsIHsgYnJpY2tJZFx0XHQ6IGJyaWNrSWRcbiAgICAgICAgICAgICAgICAsIGV2ZW50TmFtZVx0OiBldmVudE5hbWVcbiAgICAgICAgICAgICAgICAsIGNiRXZlbnROYW1lXHQ6IGNiRXZlbnROYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaW8ub25cdCggY2JFdmVudE5hbWUsIGNiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNhbGwob2JqZWN0SWQ6IHN0cmluZywgbWV0aG9kOiBzdHJpbmcsIHBhcmFtczogYW55W10sIGNiPzooZGF0YTogYW55KT0+dm9pZCkge1xuICAgICAgICBsZXQgY2FsbCA9XHR7IG9iamVjdElkXHQ6IG9iamVjdElkXG4gICAgICAgICAgICAsIG1ldGhvZFx0OiBtZXRob2RcbiAgICAgICAgICAgICwgcGFyYW1zXHQ6IEpTT04uc3RyaW5naWZ5KCBwYXJhbXMgKVxuICAgICAgICB9O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJDYWxsaW5nXCIsIGNhbGwpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55Plx0KCAocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pby5lbWl0XHQoIFwiY2FsbFwiLCBjYWxsXG4gICAgICAgICAgICAgICAgLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNhbGxcIiwgY2FsbC5jYWxsSWQsIFwiIHJldHVybnNcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNiKSB7Y2IoZGF0YSk7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGxldCB1dGlscyA6IFV0aWxzID0gbmV3IFV0aWxzKCk7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
