webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ServerUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
// This  file contains list of all the api this angular application uses.
// This file also documenting how to use the api

var ServerUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiURL;
var LogApi = {
    restUrl: { url: function () { return ServerUrl + '/api/logs'; } },
};


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thinaer_service__ = __webpack_require__("../../../../../src/app/thinaer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(thinaerService) {
        this.thinaerService = thinaerService;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__thinaer_service__["a" /* ThinaerService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_interceptor_service__ = __webpack_require__("../../../../../src/app/services/interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_logger_log_service__ = __webpack_require__("../../../../../src/app/services/logger/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_logger_log_publisher_service__ = __webpack_require__("../../../../../src/app/services/logger/log-publisher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_app_error_handler_service__ = __webpack_require__("../../../../../src/app/services/app-error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__thinaer_service__ = __webpack_require__("../../../../../src/app/thinaer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__devices_devices_component__ = __webpack_require__("../../../../../src/app/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_12__devices_devices_component__["a" /* DevicesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyModule */].forRoot()
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_6__services_interceptor_service__["a" /* InterceptorService */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_7__services_logger_log_service__["a" /* LogService */],
                __WEBPACK_IMPORTED_MODULE_8__services_logger_log_publisher_service__["a" /* LogPublisherService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9__services_app_error_handler_service__["a" /* AppErrorHandlerService */] },
                __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_10__thinaer_service__["a" /* ThinaerService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__devices_devices_component__ = __webpack_require__("../../../../../src/app/devices/devices.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__landing_landing_component__["a" /* LandingComponent */]
    },
    {
        path: 'device/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__devices_devices_component__["a" /* DevicesComponent */]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/devices/devices.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\" [routerLink]=\"['../../home']\">Thinaer API Demo</h4>\n\n  <div class=\"card-body\">\n    <div class=\"container\" style=\"margin-top: 5vh\" >\n\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <h3 style=\"width: 100%;text-align: center;opacity: 0.7\">Device details</h3>\n          <div class=\"card\">\n\n            <!--Card image-->\n\n            <div class=\"card-header\">\n              {{device.details?.name}}\n            </div>\n            <!--Card content-->\n            <div class=\"card-body\">\n              <!--Title-->\n              <!--Text-->\n              <dl class=\"row\">\n                <dt class=\"col-sm-3\">Id</dt>\n                <dd class=\"col-sm-9\">{{device.details?._id}}</dd>\n\n                <dt class=\"col-sm-3\">Created at</dt>\n                <dd class=\"col-sm-9\">{{device.details?.createdAt|date:'medium'}}</dd>\n\n                <dt class=\"col-sm-3 text-truncate\">Updated at</dt>\n                <dd class=\"col-sm-9\">{{device.details?.updatedAt|date:'medium'}}</dd>\n                <dt class=\"col-sm-3 text-truncate\">Activation date</dt>\n                <dd class=\"col-sm-9\">{{device.details?.activationDate|date:'medium'}}</dd>\n              </dl>\n\n            </div>\n\n          </div>\n\n\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h3 style=\"width: 100%;text-align: center;opacity: 0.7\">Device movement history</h3>\n          <div class=\"card\" *ngFor=\" let movement of device.movements?.docs\">\n\n            <!--Card content-->\n            <div class=\"card-body\">\n              <dl class=\"row\">\n\n                <dt class=\"col-sm-3\">deviceId</dt>\n                <dd class=\"col-sm-9\">{{movement.to.deviceId}}</dd>\n\n\n                <dt class=\"col-sm-3 text-truncate\">distanceFrom</dt>\n                <dd class=\"col-sm-9\">{{movement.to.distanceFrom}}</dd>\n\n                <dt class=\"col-sm-3 text-truncate\">distanceUnits</dt>\n                <dd class=\"col-sm-9\">{{movement.to.distanceUnits}}</dd>\n\n\n                <dt class=\"col-sm-3 text-truncate\">name</dt>\n                <dd class=\"col-sm-9\">{{movement.to.name}}</dd>\n\n                <dt class=\"col-sm-3 text-truncate\">rssi</dt>\n                <dd class=\"col-sm-9\">{{movement.to.rssi}}</dd>\n\n              </dl>\n\n\n            </div>\n\n          </div>\n\n          <h6 style=\"text-align: center\" *ngIf=\"!device.movements?.docs.length\">No movement history found</h6>\n\n        </div>\n\n        <div class=\"col-md-6\">\n          <h3 style=\"width: 100%;text-align: center;opacity: 0.7\">Device peripheral history</h3>\n\n\n          <div class=\"card\" *ngFor=\" let peripheral of device.perepherals?.docs\">\n            <!--Card content-->\n            <div class=\"card-body\">\n\n              <dl class=\"row\">\n                <dt class=\"col-sm-3\">entityDeviceId</dt>\n                <dd class=\"col-sm-9\">{{peripheral.entityDeviceId}}</dd>\n\n                <dt class=\"col-sm-3\">barometricPressure</dt>\n                <dd class=\"col-sm-9\">{{peripheral.reading.barometricPressure}}</dd>\n\n\n                <dt class=\"col-sm-3 text-truncate\">internalTemperature</dt>\n                <dd class=\"col-sm-9\">{{peripheral.reading.internalTemperature}}</dd>\n\n                <dt class=\"col-sm-3 text-truncate\">externalTemperature</dt>\n                <dd class=\"col-sm-9\">{{peripheral.reading.externalTemperature}}</dd>\n\n\n                <dt class=\"col-sm-3 text-truncate\">batteryLevel</dt>\n                <dd class=\"col-sm-9\">{{peripheral.reading.batteryLevel}}</dd>\n\n                <dt class=\"col-sm-3 text-truncate\">Updated at</dt>\n                <dd class=\"col-sm-9\">{{peripheral.reading.recordedAt|date:'medium'}}</dd>\n\n                <dt class=\"col-sm-3 text-truncate\">timestamp</dt>\n                <dd class=\"col-sm-9\">{{peripheral.reading.timestamp|date:'medium'}}</dd>\n                <dt class=\"col-sm-3 text-truncate\">updatedAt</dt>\n                <dd class=\"col-sm-9\">{{peripheral.reading.updatedAt|date:'medium'}}</dd>\n              </dl>\n\n            </div>\n\n          </div>\n\n          <h6 style=\"text-align: center\" *ngIf=\"!device.perepherals?.docs.length\">No peripheral history found</h6>\n        </div>\n      </div>\n\n\n\n\n\n    </div>\n\n  </div>\n</div>\n\n\n\n<!--Main Navigation-->\n"

/***/ }),

/***/ "../../../../../src/app/devices/devices.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/devices/devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thinaer_service__ = __webpack_require__("../../../../../src/app/thinaer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var DevicesComponent = /** @class */ (function () {
    function DevicesComponent(thinaerService, activatedRoute) {
        this.thinaerService = thinaerService;
        this.activatedRoute = activatedRoute;
        this.device = { details: {}, movements: [], perepherals: [] };
    }
    DevicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            console.log(param);
            _this.currentId = param.id;
            _this.getDeviceDetailById();
            _this.getDeviceMovements();
            _this.getDevicePeripheral();
        });
    };
    DevicesComponent.prototype.getDeviceDetailById = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.thinaerService.getDeviceDetailById(this.currentId)];
                    case 1:
                        data = _a.sent();
                        this.device.details = data || {};
                        console.log(this.device);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DevicesComponent.prototype.getDevicePeripheral = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.thinaerService.getDevicePerephral(this.currentId)];
                    case 1:
                        data = _a.sent();
                        this.device.perepherals = data || {};
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DevicesComponent.prototype.getDeviceMovements = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.thinaerService.getDeviceMovements(this.currentId)];
                    case 1:
                        data = _a.sent();
                        this.device.movements = data || {};
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DevicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-devices',
            template: __webpack_require__("../../../../../src/app/devices/devices.component.html"),
            styles: [__webpack_require__("../../../../../src/app/devices/devices.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__thinaer_service__["a" /* ThinaerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--Main Navigation-->\r\n  <div class=\"card\">\r\n    <h4 class=\"card-header\">Thinaer API Demo</h4>\r\n    <div class=\"card-body\">\r\n      <div style=\"margin-bottom: 40px;\">\r\n        <form class=\"form-inline\">\r\n          <input type=\"text\" name=\"appId\" [(ngModel)]=\"appId\"  class=\"form-control  \" id=\"inlineFormInputName2\" placeholder=\"APP ID\">\r\n          <button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"appIdChange()\">Change</button>\r\n        </form>\r\n\r\n      </div>\r\n\r\n      <div class=\"sk-cube-grid\" *ngIf=\"httpResolved1==='pending' || httpResolved2==='pending'\">\r\n        <div class=\"sk-cube sk-cube1\"></div>\r\n        <div class=\"sk-cube sk-cube2\"></div>\r\n        <div class=\"sk-cube sk-cube3\"></div>\r\n        <div class=\"sk-cube sk-cube4\"></div>\r\n        <div class=\"sk-cube sk-cube5\"></div>\r\n        <div class=\"sk-cube sk-cube6\"></div>\r\n        <div class=\"sk-cube sk-cube7\"></div>\r\n        <div class=\"sk-cube sk-cube8\"></div>\r\n        <div class=\"sk-cube sk-cube9\"></div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <h3 style=\"width: 100%;text-align: center;opacity: 0.7\">List of Places</h3>\r\n\r\n        <div class=\"col-md-3\"  style=\"margin-bottom: 10px;\" *ngFor=\"let device of places\">\r\n\r\n          <div class=\"card\">\r\n\r\n            <!--Card image-->\r\n\r\n            <!--Card content-->\r\n            <div class=\"card-body\">\r\n              <!--Title-->\r\n              <h4 class=\"card-title\">{{device.name}}</h4>\r\n              <!--Text-->\r\n\r\n              <p class=\"card-text\">{{device._id}}</p>\r\n\r\n              <p class=\"card-text\">{{device.activationDate|date:'medium'}}</p>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\" style=\"margin-top: 20px;\">\r\n        <h3 style=\"width: 100%;text-align: center;opacity: 0.7\">List of Devices</h3>\r\n\r\n          <div class=\"col-md-3\" style=\"margin-bottom: 10px;\" *ngFor=\"let device of devices\">\r\n\r\n            <div class=\"card\">\r\n\r\n              <!--Card image-->\r\n\r\n              <!--Card content-->\r\n              <div class=\"card-body\">\r\n                <!--Title-->\r\n                <h4 class=\"card-title\">{{device.name}}</h4>\r\n                <!--Text-->\r\n\r\n                <p class=\"card-text\">{{device._id}}</p>\r\n\r\n                <p class=\"card-text\">{{device.activationDate|date:'medium'}}</p>\r\n\r\n                <a href=\"#\" [routerLink]=\"['../device',device._id]\" class=\"  \" mdbRippleRadius>View</a>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n      </div>\r\n\r\n  </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n<!--Main Navigation-->\r\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-cube-grid {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -14px;\n  margin-right: -14px; }\n\n.sk-cube-grid .sk-cube {\n  width: 33%;\n  height: 33%;\n  background-color: #03b6b3;\n  float: left;\n  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; }\n\n.sk-cube-grid .sk-cube1 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n\n.sk-cube-grid .sk-cube2 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s; }\n\n.sk-cube-grid .sk-cube3 {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n\n.sk-cube-grid .sk-cube4 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s; }\n\n.sk-cube-grid .sk-cube5 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n\n.sk-cube-grid .sk-cube6 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s; }\n\n.sk-cube-grid .sk-cube7 {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s; }\n\n.sk-cube-grid .sk-cube8 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s; }\n\n.sk-cube-grid .sk-cube9 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n\n@-webkit-keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1); }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1); } }\n\n@keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1); }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thinaer_service__ = __webpack_require__("../../../../../src/app/thinaer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent(thinaerService) {
        this.thinaerService = thinaerService;
        this.appId = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].appId;
        this.places = [];
        this.devices = [];
        this.httpResolved1 = 'pending';
        this.httpResolved2 = 'pending';
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.getPlaces();
        this.getThings();
    };
    LandingComponent.prototype.appIdChange = function () {
        this.thinaerService.setAppId(this.appId);
        this.getPlaces();
        this.getThings();
    };
    LandingComponent.prototype.getThings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.httpResolved1 = 'pending';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.thinaerService.getThingsById()];
                    case 2:
                        data = _a.sent();
                        this.devices = data.docs;
                        this.httpResolved1 = 'resolved';
                        console.log('things are');
                        console.log(this.devices);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.httpResolved1 = 'resolved';
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LandingComponent.prototype.getPlaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.httpResolved2 = 'pending';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.thinaerService.getPlaceByiD()];
                    case 2:
                        data = _a.sent();
                        this.places = data.docs;
                        console.log('places are');
                        console.log(this.places);
                        this.httpResolved2 = 'resolved';
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        this.httpResolved2 = 'resolved';
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__thinaer_service__["a" /* ThinaerService */]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/app-error-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger_log_service__ = __webpack_require__("../../../../../src/app/services/logger/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppErrorHandlerService = /** @class */ (function () {
    function AppErrorHandlerService(injector) {
        this.injector = injector;
    }
    AppErrorHandlerService.prototype.handleError = function (error) {
        var logService = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__logger_log_service__["a" /* LogService */]);
        logService.fatal(error.message, error.stack);
    };
    AppErrorHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], AppErrorHandlerService);
    return AppErrorHandlerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InterceptorService = /** @class */ (function () {
    function InterceptorService(router, toastService) {
        this.router = router;
        this.toastService = toastService;
    }
    InterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                }
                if (err.status === 403) {
                    _this.toastService.error('Unauthorised', 'You are not authorised to perform this action');
                }
            }
        });
    };
    InterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__toast_service__["a" /* ToastService */]])
    ], InterceptorService);
    return InterceptorService;
}());



/***/ }),

/***/ "../../../../../src/app/services/logger/log-entry.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogEntry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__log_level_enum__ = __webpack_require__("../../../../../src/app/services/logger/log-level.enum.ts");

var LogEntry = /** @class */ (function () {
    function LogEntry() {
        this.message = '';
        this.level = __WEBPACK_IMPORTED_MODULE_0__log_level_enum__["a" /* LogLevel */].All;
        this.extraInfo = [];
    }
    LogEntry.prototype.buildLogEntry = function () {
        var value = '';
        value = value + this.logDate + ':';
        value = value + ("type:" + __WEBPACK_IMPORTED_MODULE_0__log_level_enum__["a" /* LogLevel */][this.level] + ",");
        value = value + ("message:" + JSON.stringify(this.message) + ",");
        value += "extra:" + this.formatParams(this.extraInfo);
        return value;
    };
    LogEntry.prototype.formatParams = function (params) {
        var ret = params.join(',');
        if (params.some(function (p) { return typeof p === 'object'; })) {
            ret = '';
            for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
                var item = params_1[_i];
                ret += JSON.stringify(item) + ',';
            }
        }
        return ret;
    };
    return LogEntry;
}());



/***/ }),

/***/ "../../../../../src/app/services/logger/log-level.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogLevel; });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["All"] = 0] = "All";
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Warn"] = 3] = "Warn";
    LogLevel[LogLevel["Error"] = 4] = "Error";
    LogLevel[LogLevel["Fatal"] = 5] = "Fatal";
    LogLevel[LogLevel["Off"] = 6] = "Off";
})(LogLevel || (LogLevel = {}));


/***/ }),

/***/ "../../../../../src/app/services/logger/log-publisher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPublisherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_publisher__ = __webpack_require__("../../../../../src/app/services/logger/log-publisher.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_level_enum__ = __webpack_require__("../../../../../src/app/services/logger/log-level.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogPublisherService = /** @class */ (function () {
    function LogPublisherService(http) {
        this.http = http;
        this.publishers = [];
        this.buildPublishers();
    }
    LogPublisherService.prototype.buildPublishers = function () {
        this.publishers.push(new __WEBPACK_IMPORTED_MODULE_1__log_publisher__["a" /* LogConsole */](__WEBPACK_IMPORTED_MODULE_4_environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_3__log_level_enum__["a" /* LogLevel */].Off : __WEBPACK_IMPORTED_MODULE_3__log_level_enum__["a" /* LogLevel */].All));
        //this.publishers.push(new LogLocalStorage(LogLevel.Error));
        this.publishers.push(new __WEBPACK_IMPORTED_MODULE_1__log_publisher__["b" /* LogWebApiStorage */](__WEBPACK_IMPORTED_MODULE_3__log_level_enum__["a" /* LogLevel */].Error, this.http));
    };
    LogPublisherService.prototype.getPublishers = function () {
        return this.publishers;
    };
    LogPublisherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], LogPublisherService);
    return LogPublisherService;
}());



/***/ }),

/***/ "../../../../../src/app/services/logger/log-publisher.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LogPublisher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogConsole; });
/* unused harmony export LogLocalStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LogWebApiStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_config__ = __webpack_require__("../../../../../src/app/api.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_level_enum__ = __webpack_require__("../../../../../src/app/services/logger/log-level.enum.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LogPublisher = /** @class */ (function () {
    function LogPublisher() {
        this.location = '';
        this.level = __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].All;
    }
    LogPublisher.prototype.shouldLog = function (level) {
        if (level !== __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].Off && level >= this.level) {
            return true;
        }
        return false;
    };
    return LogPublisher;
}());

var LogConsole = /** @class */ (function (_super) {
    __extends(LogConsole, _super);
    function LogConsole(level) {
        var _this = _super.call(this) || this;
        _this.level = level || __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].All;
        return _this;
    }
    LogConsole.prototype.log = function (record) {
        if (!this.shouldLog(record.level)) {
            return;
        }
        if (record.level === __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].Error || record.level === __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].Fatal) {
            console.error(record.buildLogEntry());
        }
        else {
            console.log(record.buildLogEntry());
        }
    };
    LogConsole.prototype.clear = function () {
        console.clear();
    };
    return LogConsole;
}(LogPublisher));

var LogLocalStorage = /** @class */ (function (_super) {
    __extends(LogLocalStorage, _super);
    function LogLocalStorage(level) {
        var _this = _super.call(this) || this;
        _this.location = 'localstoragelog';
        _this.level = level || __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].All;
        return _this;
    }
    LogLocalStorage.prototype.log = function (record) {
        if (!this.shouldLog(record.level)) {
            return;
        }
        var entry = [];
        entry = JSON.parse(localStorage.getItem(this.location)) || [];
        entry.push(record);
        localStorage.setItem(this.location, JSON.stringify(entry));
    };
    LogLocalStorage.prototype.clear = function () {
        localStorage.clear();
    };
    return LogLocalStorage;
}(LogPublisher));

var LogWebApiStorage = /** @class */ (function (_super) {
    __extends(LogWebApiStorage, _super);
    function LogWebApiStorage(level, http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.location = __WEBPACK_IMPORTED_MODULE_0__api_config__["a" /* LogApi */].restUrl.url();
        _this.level = level || __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].All;
        return _this;
    }
    LogWebApiStorage.prototype.log = function (record) {
        if (!this.shouldLog(record.level)) {
            return;
        }
        this.http.post(this.location, record).subscribe(function (val) {
        }, function (err) {
        });
    };
    LogWebApiStorage.prototype.clear = function () {
    };
    return LogWebApiStorage;
}(LogPublisher));



/***/ }),

/***/ "../../../../../src/app/services/logger/log.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_level_enum__ = __webpack_require__("../../../../../src/app/services/logger/log-level.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_entry__ = __webpack_require__("../../../../../src/app/services/logger/log-entry.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log_publisher_service__ = __webpack_require__("../../../../../src/app/services/logger/log-publisher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogService = /** @class */ (function () {
    function LogService(logPublisherService) {
        this.logPublisherService = logPublisherService;
        this.publishers = [];
        this.publishers = this.logPublisherService.getPublishers();
    }
    LogService.prototype.handleError = function (error) {
        this.fatal(error);
    };
    LogService.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(message, __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].All, optionalParams);
    };
    LogService.prototype.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(message, __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].Debug, optionalParams);
    };
    LogService.prototype.info = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(message, __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].Info, optionalParams);
    };
    LogService.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(message, __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].Error, optionalParams);
    };
    LogService.prototype.warning = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(message, __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].Error, optionalParams);
    };
    LogService.prototype.fatal = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(message, __WEBPACK_IMPORTED_MODULE_1__log_level_enum__["a" /* LogLevel */].Fatal, optionalParams);
    };
    LogService.prototype.writeToLog = function (message, level, params) {
        var entry = new __WEBPACK_IMPORTED_MODULE_2__log_entry__["a" /* LogEntry */]();
        entry.level = level;
        entry.message = message;
        entry.extraInfo = params;
        entry.logDate = new Date();
        this.publishers.forEach(function (publisher) {
            publisher.log(entry);
        });
    };
    LogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__log_publisher_service__["a" /* LogPublisherService */]])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "../../../../../src/app/services/toast.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService(toastyService, toastyConfig) {
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        // Assign the selected theme name to the `theme` property of the instance of ToastyConfig.
        // Possible values: default, bootstrap, material
        this.toastyConfig.theme = 'material';
    }
    ToastService.prototype.success = function (title, msg, timeout) {
        if (timeout === void 0) { timeout = 5000; }
        var toastOptions = {
            title: title ? title : 'Success',
            msg: msg,
            showClose: true,
            timeout: timeout,
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.success(toastOptions);
    };
    ToastService.prototype.info = function (title, msg, timeout) {
        if (timeout === void 0) { timeout = 5000; }
        var toastOptions = {
            title: title ? title : 'Info',
            msg: msg,
            showClose: true,
            timeout: timeout,
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.info(toastOptions);
    };
    ToastService.prototype.error = function (title, msg, timeout) {
        if (timeout === void 0) { timeout = 5000; }
        var toastOptions = {
            title: title ? title : 'Error',
            msg: msg,
            showClose: true,
            timeout: timeout,
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        this.toastyService.error(toastOptions);
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["c" /* ToastyService */], __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["a" /* ToastyConfig */]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "../../../../../src/app/thinaer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThinaerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_concatMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var ThinaerService = /** @class */ (function () {
    function ThinaerService(http) {
        this.http = http;
        this.appId = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].appId;
    }
    ThinaerService.prototype.setAppId = function (id) {
        this.appId = id;
    };
    ThinaerService.prototype.getPlaceByiD = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiURL + "/" + this.appId + "/places")
                        .toPromise()];
            });
        });
    };
    ThinaerService.prototype.getThingsById = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiURL + "/" + this.appId + "/things")
                        .toPromise()];
            });
        });
    };
    ThinaerService.prototype.getDevicePerephral = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiURL + "/" + this.appId + "/things/" + id + "/peripherals")
                        .toPromise()];
            });
        });
    };
    ThinaerService.prototype.getDeviceDetailById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiURL + "/" + this.appId + "/things/" + id)
                        .toPromise()];
            });
        });
    };
    ThinaerService.prototype.getDeviceMovements = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiURL + "/" + this.appId + "/things/" + id + "/movements")
                        .toPromise()];
            });
        });
    };
    ThinaerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ThinaerService);
    return ThinaerService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    apiURL: 'http://159.89.166.98:3001/api',
    apiPORT: '3001',
    appId: '5aa19a708255f653fc67fc58'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map