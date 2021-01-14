(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-wrapper\">\r\n  <div id=\"page-middle-wrapper\">\r\n    <app-map></app-map>\r\n  </div>\r\n\r\n<!--   <div id=\"page-right-wrapper\">\r\n    <div id=\"page-left-weather-wrapper\">\r\n      <h2>What is Växjö weather forecast?</h2>\r\n      <p>Here is the local weather forecast for the next couple of days.</p>\r\n      <hr />\r\n      <app-weather></app-weather>\r\n    </div>\r\n    <app-career></app-career>\r\n  </div> -->\r\n\r\n<!--   <div id=\"page-right-wrapper\" style=\"margin-right: 35%;\">\r\n    <div id=\"page-left-disqus-wrapper\">\r\n      <h2>Write a tweet?</h2>\r\n      <p>Here you can type your post</p>\r\n      <hr />\r\n      <app-twitter></app-twitter>\r\n    </div>\r\n  </div> -->\r\n\r\n<!--   <div id=\"page-right-wrapper\" style=\"margin-right: 35%; margin-top: 25%;\">\r\n    <div id=\"page-left-disqus-wrapper\">\r\n      <h2>Parking</h2>\r\n      <hr />\r\n      <app-parking></app-parking>\r\n    </div>\r\n  </div> -->\r\n  <h1 style=\"display: flex;\r\n    position: absolute;\r\n    text-align: center;\r\n    display: block;\r\n    padding: 20px;\r\n    background-color: #fff !important;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    /* display: flex; */\r\n    /* justify-content: center; */\r\n    left: 50%;\r\n    transform: translate(-50%, 10px);\r\n    border-radius: 13px;\r\n    box-shadow: 1px 1px 9px 3px #ccc;\">\r\n    Welcome to my Mashup services\r\n  </h1>\r\n  <div id=\"page-right-wrapper\" style=\"right:50%;top:20%\" >\r\n    <div id=\"page-left-disqus-wrapper\" style=\"min-height: 270px;\">\r\n      <h2>Movie Search And Tweet Info</h2>\r\n      <hr />\r\n      <app-moovie></app-moovie>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"page-right-wrapper\" style=\"right:23%;top:20%\" >\r\n    <div id=\"page-left-disqus-wrapper\" style=\"min-height: 270px;\">\r\n      <h2>Message</h2>\r\n      <hr />\r\n      <app-message></app-message>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-mashup';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _career_career_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./career/career.component */ "./src/app/career/career.component.ts");
/* harmony import */ var _career_career_result_career_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./career/career-result/career-result.component */ "./src/app/career/career-result/career-result.component.ts");
/* harmony import */ var _twitter_twitter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./twitter/twitter.component */ "./src/app/twitter/twitter.component.ts");
/* harmony import */ var _moovie_moovie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./moovie/moovie.component */ "./src/app/moovie/moovie.component.ts");
/* harmony import */ var _parking_parking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parking/parking.component */ "./src/app/parking/parking.component.ts");
/* harmony import */ var _twitter_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./twitter.service */ "./src/app/twitter.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_6__["WeatherComponent"],
                _career_career_component__WEBPACK_IMPORTED_MODULE_7__["CareerComponent"],
                _career_career_result_career_result_component__WEBPACK_IMPORTED_MODULE_8__["CareerResultComponent"],
                _twitter_twitter_component__WEBPACK_IMPORTED_MODULE_9__["TwitterComponent"],
                _moovie_moovie_component__WEBPACK_IMPORTED_MODULE_10__["MoovieComponent"],
                _parking_parking_component__WEBPACK_IMPORTED_MODULE_11__["ParkingComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_14__["MessageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDs0WJS-0UQ8F3N-8qhxyPXDniFVmS0uHQ'
                })
            ],
            providers: [_twitter_service__WEBPACK_IMPORTED_MODULE_12__["TwitterService"]],
            entryComponents: [_career_career_result_career_result_component__WEBPACK_IMPORTED_MODULE_8__["CareerResultComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/career/career-result/career-result.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/career/career-result/career-result.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href={{url}} target=\"_blank\" style=\"display: block; text-decoration: none; margin-bottom: 20px;\">\r\n  <h3>{{company}}</h3>\r\n  <h4 style=\"margin-top: 5px; margin-bottom: 10px; font-style: italic;\">{{title}}</h4>\r\n  <p [innerHTML]=\"description\" ></p>\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/career/career-result/career-result.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/career/career-result/career-result.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmVlci9jYXJlZXItcmVzdWx0L2NhcmVlci1yZXN1bHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/career/career-result/career-result.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/career/career-result/career-result.component.ts ***!
  \*****************************************************************/
/*! exports provided: CareerResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerResultComponent", function() { return CareerResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CareerResultComponent = /** @class */ (function () {
    function CareerResultComponent() {
    }
    CareerResultComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CareerResultComponent.prototype, "company", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CareerResultComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CareerResultComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CareerResultComponent.prototype, "url", void 0);
    CareerResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-career-result',
            template: __webpack_require__(/*! ./career-result.component.html */ "./src/app/career/career-result/career-result.component.html"),
            styles: [__webpack_require__(/*! ./career-result.component.scss */ "./src/app/career/career-result/career-result.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CareerResultComponent);
    return CareerResultComponent;
}());



/***/ }),

/***/ "./src/app/career/career.component.html":
/*!**********************************************!*\
  !*** ./src/app/career/career.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: rgba(255, 255, 255, 0.85098); border: 1px solid rgb(219, 219, 219); padding: 25px; margin-bottom: 25px;\">\r\n  <h2>Looking for a job in Växjö?</h2>\r\n  <p>We help you to search for jobs in Vaxjo. Enter a job title, and click on the search button to find your dream job.</p>\r\n  <hr>\r\n  <input #careerInput placeholder=\"Web developer\" style=\"padding: 10px 5px; width: 100%;\">\r\n  <button (click)=\"onSearch(careerInput)\">Search</button>\r\n  <div #target style=\"margin-top: 20px;\">\r\n\r\n    <h3 *ngIf=\"noResult\" style=\"margin-bottom: 15px;\">No job listing found...</h3>\r\n    <p *ngIf=\"noResult\" > Try a different job title and see if you have better luck.</p>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/career/career.component.scss":
/*!**********************************************!*\
  !*** ./src/app/career/career.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmVlci9jYXJlZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/career/career.component.ts":
/*!********************************************!*\
  !*** ./src/app/career/career.component.ts ***!
  \********************************************/
/*! exports provided: CareerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerComponent", function() { return CareerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_career_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/career.service */ "./src/app/services/career.service.ts");
/* harmony import */ var _career_result_career_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./career-result/career-result.component */ "./src/app/career/career-result/career-result.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CareerComponent = /** @class */ (function () {
    function CareerComponent(careerService, resolver) {
        this.careerService = careerService;
        this.resolver = resolver;
        this.cmpArray = [];
        this.cmpRefArray = [];
        this.noResult = false;
    }
    CareerComponent.prototype.ngOnInit = function () {
    };
    CareerComponent.prototype.onSearch = function (input) {
        var _this = this;
        var title = input.value || input.placeholder;
        this.careerService.getJobs(title)
            .subscribe(function (response) {
            console.log(response);
            _this.onSearchResultsComplete(response);
        }, function (error) { return console.error(error); });
    };
    CareerComponent.prototype.onSearchResultsComplete = function (response) {
        for (var _i = 0, _a = this.cmpRefArray; _i < _a.length; _i++) {
            var i = _a[_i];
            i.destroy();
        }
        if (response.jobs == undefined) {
            this.noResult = true;
        }
        else {
            this.noResult = false;
            for (var i = 0; i < response.jobs.length; i++) {
                var c = response.jobs[i].company;
                var t = response.jobs[i].title;
                var d = response.jobs[i].description;
                var l = response.jobs[i].url;
                this.createComponent(c, t, d, l);
            }
        }
    };
    CareerComponent.prototype.createComponent = function (c, t, d, l) {
        var newComp = this.resolver.resolveComponentFactory(_career_result_career_result_component__WEBPACK_IMPORTED_MODULE_2__["CareerResultComponent"]);
        var cmpRef = this.target.createComponent(newComp);
        var cmp = cmpRef.instance;
        cmp.company = c;
        cmp.title = t;
        cmp.description = d;
        cmp.url = l;
        this.cmpRefArray.push(cmpRef);
        this.cmpArray.push(cmp);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('target', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], CareerComponent.prototype, "target", void 0);
    CareerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-career',
            template: __webpack_require__(/*! ./career.component.html */ "./src/app/career/career.component.html"),
            styles: [__webpack_require__(/*! ./career.component.scss */ "./src/app/career/career.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_career_service__WEBPACK_IMPORTED_MODULE_1__["CareerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], CareerComponent);
    return CareerComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"DEFAULT_MAP_LAT\" [longitude]=\"DEFAULT_MAP_LNG\" [zoom]=\"DEFAULT_MAP_ZOOM\">\r\n\r\n  <agm-marker *ngFor=\"let marker of markers; let i = index\"\r\n                          [latitude]=\"marker.lat\"\r\n                          [longitude]=\"marker.lang\"\r\n                          [title]=\"marker.title\"\r\n                          [visible]=\"true\">\r\n\r\n    <agm-info-window>\r\n      <img src=\"{{marker.img}}\" alt=\"flickr img\">\r\n    </agm-info-window>\r\n  </agm-marker>\r\n\r\n</agm-map>\r\n"

/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL0M6XFxVc2Vyc1xcdXNtYW5cXERvd25sb2Fkc1xcQ29tcHJlc3NlZFxcQWtyYW1fUmFmaXF1ZV9hc3NpZzJcXERlbGl2ZXJhYmxlIDFcXE1hc2h1cF9Db2RlXFxmcm9udGVudC9zcmNcXGFwcFxcbWFwXFxtYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_flickr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/flickr.service */ "./src/app/services/flickr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = /** @class */ (function () {
    function MapComponent(flickrService) {
        this.flickrService = flickrService;
        this.DEFAULT_MAP_ZOOM = 12;
        this.DEFAULT_MAP_LAT = 56.8770413;
        this.DEFAULT_MAP_LNG = 14.8092744;
        this.markers = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        this.initFlickr();
    };
    MapComponent.prototype.initFlickr = function () {
        var _this = this;
        var args = { lat: 56.8770413, lon: 14.8092744, radius: 4, per_page: 10000, has_geo: true };
        this.flickrService.search(args)
            .subscribe(function (response) {
            var items = response['photos']['photo'];
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                _this.getLocationFromPhotos(item, item.id);
            }
        }, function (error) { return console.error(error); });
    };
    MapComponent.prototype.getLocationFromPhotos = function (item, id) {
        var _this = this;
        this.flickrService.getLocation(id)
            .subscribe(function (response) {
            _this.appendToMap(item, response);
        }, function (error) { return console.error(error); });
    };
    MapComponent.prototype.appendToMap = function (item, geoInfo) {
        var lati = Number(geoInfo.photo.location.latitude);
        var langi = Number(geoInfo.photo.location.longitude);
        var imgSrc = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_q.jpg';
        var marker = { lat: lati, lang: langi, title: item.title, img: imgSrc };
        this.markers.push(marker);
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_flickr_service__WEBPACK_IMPORTED_MODULE_1__["FlickrService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <input id=\"messageNum\" name=\"tweet\" type=\"text\" placeholder=\"Type Number +92333-------\" [(ngModel)]=\"messageNum\">\n  <input id=\"messageValue\" name=\"tweet\" type=\"text\" placeholder=\"Type Message\" [(ngModel)]=\"messageValue\">\n  <button (click)=\"handleClick(messageValue,messageNum)\" type=\"button\">Button</button>\n  <hr>\n\n</div>"

/***/ }),

/***/ "./src/app/message/message.component.scss":
/*!************************************************!*\
  !*** ./src/app/message/message.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _twitter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../twitter.service */ "./src/app/twitter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(twitterService) {
        this.twitterService = twitterService;
    }
    MessageComponent.prototype.handleClick = function (messageValue, messageNum) {
        console.log(".....", messageValue, messageNum);
        var p = '{"status" : "' + messageValue + '", "number" : "' + messageNum + '"  }';
        console.log("This is tweet json parse", p);
        alert("Message send it on this number" + messageNum);
        this.twitterService.postMessage(JSON.parse(p)).subscribe(function (data) {
            console.log("This is data message", p);
        });
    };
    MessageComponent.prototype.ngOnInit = function () { };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-message",
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/message/message.component.scss")]
        }),
        __metadata("design:paramtypes", [_twitter_service__WEBPACK_IMPORTED_MODULE_1__["TwitterService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/moovie/moovie.component.html":
/*!**********************************************!*\
  !*** ./src/app/moovie/moovie.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <input id=\"tweetvalue\" name=\"tweet\" type=\"text\" [(ngModel)]=\"movievalue\">\n  <button (click)=\"handleClick(movievalue)\" type=\"button\">Button</button>\n  <hr>\n  <span>Director : {{director}}</span>\n  <br>\n  <span>Genre : {{genre}}</span>\n  <br>\n  <span>Run Time : {{runtime}}</span>\n</div>"

/***/ }),

/***/ "./src/app/moovie/moovie.component.scss":
/*!**********************************************!*\
  !*** ./src/app/moovie/moovie.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vb3ZpZS9tb292aWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/moovie/moovie.component.ts":
/*!********************************************!*\
  !*** ./src/app/moovie/moovie.component.ts ***!
  \********************************************/
/*! exports provided: MoovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoovieComponent", function() { return MoovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _twitter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../twitter.service */ "./src/app/twitter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoovieComponent = /** @class */ (function () {
    function MoovieComponent(twitterService) {
        this.twitterService = twitterService;
    }
    MoovieComponent.prototype.handleClick = function (movievalue) {
        var _this = this;
        var p = '{"movie" : "' + movievalue + '" }';
        console.log("This is tweet movie json", JSON.parse(p));
        this.twitterService.postMovie(JSON.parse(p)).subscribe(function (data) {
            //debugger;
            _this.director = data["director"];
            _this.genre = data["genre"];
            _this.runtime = data["runtime"];
            // this.tweet = data["result_twit"];
            // alert(this.tweet);
            console.log("This is data movie", data);
            var s = '{"status" : "' +
                data["director"] +
                '" , "duration" : "' +
                data["runtime"] +
                '" ,  "genre" : "' +
                data["genre"] +
                '" }';
            // var con = JSON.stringify(s);
            console.log("This is tweet + movie json parse", JSON.parse(s));
            _this.twitterService.postTweet(JSON.parse(s)).subscribe(function (obj) {
                _this.tweet = obj["created"];
                console.log("This is data twitter", obj);
                alert("Tweet Successfully on Twitter : " + _this.tweet);
            });
        });
    };
    MoovieComponent.prototype.ngOnInit = function () { };
    MoovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-moovie",
            template: __webpack_require__(/*! ./moovie.component.html */ "./src/app/moovie/moovie.component.html"),
            styles: [__webpack_require__(/*! ./moovie.component.scss */ "./src/app/moovie/moovie.component.scss")]
        }),
        __metadata("design:paramtypes", [_twitter_service__WEBPACK_IMPORTED_MODULE_1__["TwitterService"]])
    ], MoovieComponent);
    return MoovieComponent;
}());



/***/ }),

/***/ "./src/app/parking/parking.component.html":
/*!************************************************!*\
  !*** ./src/app/parking/parking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n  <button (click)=\"handleClick()\" type=\"button\">Button</button>\n  <hr>\n  <span>{{park}}</span>\n  <br>\n  <span>Lat : {{lat}} , Long : {{lng}}</span>\n</div>"

/***/ }),

/***/ "./src/app/parking/parking.component.scss":
/*!************************************************!*\
  !*** ./src/app/parking/parking.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcmtpbmcvcGFya2luZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/parking/parking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/parking/parking.component.ts ***!
  \**********************************************/
/*! exports provided: ParkingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingComponent", function() { return ParkingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _twitter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../twitter.service */ "./src/app/twitter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParkingComponent = /** @class */ (function () {
    function ParkingComponent(twitterService) {
        this.twitterService = twitterService;
    }
    ParkingComponent.prototype.handleClick = function () {
        this.twitterService.getTweet().subscribe(function (data) {
            // console.log('Long : '+ JSON.stringify(data));
            // this.park = data.name;
            // this.lat = data.lat;
            // this.lng = data.lng ;
        });
    };
    ParkingComponent.prototype.ngOnInit = function () { };
    ParkingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-parking",
            template: __webpack_require__(/*! ./parking.component.html */ "./src/app/parking/parking.component.html"),
            styles: [__webpack_require__(/*! ./parking.component.scss */ "./src/app/parking/parking.component.scss")]
        }),
        __metadata("design:paramtypes", [_twitter_service__WEBPACK_IMPORTED_MODULE_1__["TwitterService"]])
    ], ParkingComponent);
    return ParkingComponent;
}());



/***/ }),

/***/ "./src/app/services/career.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/career.service.ts ***!
  \********************************************/
/*! exports provided: CareerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerService", function() { return CareerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CareerService = /** @class */ (function () {
    function CareerService(http) {
        this.http = http;
    }
    CareerService.prototype.getJobs = function (title) {
        var url = 'https://ansion.lnu.se/mashup/php/CareerService.php?title=' + title;
        // let url = 'dist/php/CareerService.php?title=' + title;
        return this.http.get(url);
        // .map((res: Response) => res.json());
    };
    CareerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CareerService);
    return CareerService;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/flickr.service.ts ***!
  \********************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlickrService = /** @class */ (function () {
    function FlickrService(http) {
        this.http = http;
        this.APIKey = '373937260aa0697f912fe74d747c9201';
    }
    FlickrService.prototype.search = function (args) {
        var query = this.buildQueryString('flickr.photos.search', args);
        return this.http.get(query);
    };
    FlickrService.prototype.buildQueryString = function (method, args) {
        var URL = 'https://www.flickr.com/services/rest/?method=' + method + '&api_key=' + this.APIKey + '&format=json&nojsoncallback=?';
        for (var property in args) {
            URL += '&' + property + '=' + args[property];
        }
        return URL;
    };
    FlickrService.prototype.getLocation = function (id) {
        var object = { photo_id: id };
        var query = this.buildQueryString('flickr.photos.geo.getLocation', object);
        return this.http.get(query);
    };
    FlickrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// https://rapidapi.com/community/api/open-weather-map/endpoints
var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getWheather = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                'x-rapidapi-key': 'f39e85f34bmsh7d71d4457c1b593p1aa362jsn35b5005904ee'
            })
        };
        var url = 'https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=växjö&cnt=5&units=metric';
        return this.http.get(url, httpOptions);
    };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/twitter.service.ts":
/*!************************************!*\
  !*** ./src/app/twitter.service.ts ***!
  \************************************/
/*! exports provided: TwitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterService", function() { return TwitterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        "Content-Type": "application/json"
    })
};
var TwitterService = /** @class */ (function () {
    function TwitterService(http) {
        this.http = http;
    }
    TwitterService.prototype.postTweet = function (p) {
        return this.http.post("https://nizami-api.herokuapp.com/twitter", p, httpOptions);
    };
    TwitterService.prototype.postMovie = function (p) {
        return this.http.post("https://nizami-api.herokuapp.com/movie", p, httpOptions);
    };
    TwitterService.prototype.postMessage = function (p) {
        return this.http.post("https://secure-river-26243.herokuapp.com/message", 
        // "https://nizami-api.herokuapp.com/message",
        p, httpOptions);
    };
    TwitterService.prototype.getTweet = function () {
        return this.http.get("https://nizami-api.herokuapp.com/parking", httpOptions);
    };
    TwitterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TwitterService);
    return TwitterService;
}());



/***/ }),

/***/ "./src/app/twitter/twitter.component.html":
/*!************************************************!*\
  !*** ./src/app/twitter/twitter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <input id=\"tweetvalue\" name=\"tweet\" type=\"text\" [(ngModel)]=\"tweetvalue\">\n  <button (click)=\"handleClick(tweetvalue)\" type=\"button\">Button</button>\n  <hr>\n  <span>{{tweet}}</span>\n  <br>\n  <span>{{date}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/twitter/twitter.component.scss":
/*!************************************************!*\
  !*** ./src/app/twitter/twitter.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3aXR0ZXIvdHdpdHRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/twitter/twitter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/twitter/twitter.component.ts ***!
  \**********************************************/
/*! exports provided: TwitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterComponent", function() { return TwitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _twitter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../twitter.service */ "./src/app/twitter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwitterComponent = /** @class */ (function () {
    function TwitterComponent(twitterService) {
        this.twitterService = twitterService;
    }
    TwitterComponent.prototype.ngOnInit = function () { };
    TwitterComponent.prototype.handleClick = function (tweetvalue) {
        var _this = this;
        var p = '{"status" : "' + tweetvalue + '" }';
        console.log("This is tweet json parse", JSON.parse(p));
        this.twitterService.postTweet(JSON.parse(p)).subscribe(function (data) {
            _this.tweet = data["result_twit"];
            _this.date = data["created"];
            console.log("This is data twitter", data);
        });
    };
    TwitterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-twitter",
            template: __webpack_require__(/*! ./twitter.component.html */ "./src/app/twitter/twitter.component.html"),
            styles: [__webpack_require__(/*! ./twitter.component.scss */ "./src/app/twitter/twitter.component.scss")]
        }),
        __metadata("design:paramtypes", [_twitter_service__WEBPACK_IMPORTED_MODULE_1__["TwitterService"]])
    ], TwitterComponent);
    return TwitterComponent;
}());



/***/ }),

/***/ "./src/app/weather/weather.component.html":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-left-weather-forecast-wrapper\">\r\n  <div *ngFor=\"let forecast of forecasts\" class=\"page-left-weather-forecast-day-wrapper\">\r\n    <h3>{{forecast.day}}</h3>\r\n    <!--<img src=\"{{forecast.icon}}\">-->\r\n    <p>Temperature: {{forecast.temp}}</p>\r\n    <p>{{forecast.description}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/weather/weather.component.scss":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/weather.service */ "./src/app/services/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.forecasts = [];
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weatherService.getWheather()
            .subscribe(function (data) {
            _this.createWeatherForecasts(data);
        }, function (err) { return console.error(err); });
    };
    WeatherComponent.prototype.createWeatherForecasts = function (data) {
        data = data.list;
        for (var i = 0; i < data.length; i++) {
            var dayStr = new Date(data[i].dt * 1000).getDay();
            var forecastObj = { day: this.formatDay(dayStr), temp: data[i].temp.day, description: data[i].weather[0].main };
            this.forecasts.push(forecastObj);
        }
    };
    WeatherComponent.prototype.formatDay = function (day) {
        var result = '';
        switch (day) {
            case 1:
                result = 'Mon';
                break;
            case 2:
                result = 'Tue';
                break;
            case 3:
                result = 'Wed';
                break;
            case 4:
                result = 'Thu';
                break;
            case 5:
                result = 'Fri';
                break;
            case 6:
                result = 'Sat';
                break;
            case 0:
                result = 'Sun';
                break;
        }
        return result;
    };
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.scss */ "./src/app/weather/weather.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\usman\Downloads\Compressed\Akram_Rafique_assig2\Deliverable 1\Mashup_Code\frontent\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map