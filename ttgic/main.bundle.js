webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".module1 {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n  background-color: #2196F3;\n}\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  z-index: -2;\n}\n\n.module1 {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n}\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 3.2rem;\n}\n.first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n\n.container{\n    width: 60%;}\n    \n  \n\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"module1\">\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n      About Us\n    </h1>\n    </div>\n    <div>\n      Who We are\n    </div>\n  </div></div></div></div>\n</div>\n<section class=\"first_sec\"> \n\n  <div class=\"container\"> \n    <div class=\"row\"> \n      <div class=\"col-md-12\">\n        <div class=\"text_body\"> \n\n          <p>\n            The Tithing to Grow in Christ Project is a satellite ministry of the Church Tithing Institute that seeks to optimize the spiritual and financial vitality of the local Church, through Church tithing. This is our Vision.\n          </p>\n\n          <p>\n            We view ourselves as a para-church ministry, coming alongside the local church to help church tithers take charge of the giving of their tithes, and have it count for growth in their personal relations with God; by having fulfillments in the <a href=\"/five_christain_persuasions\">Five Christian Persuasions of Church Tithing</a>. This is our Mission.\n          </p>\n          <p>\n            We stand by this mission, because it has its evidence in the Church tithing that God set up with Abraham, as an example for the Church to emulate.  \n          </p>\n<p>\n\n  Our purpose is education for impacting the culture and practice of tithing that plugs church tithers into the God’s Rubric for Church Tithing, aimed at securing the values of Church tithing for Church tithers, and its overall benefits for the local church.\n\n</p>\n<h4>The Values of Church Tithing\n</h4>\n<ul>\n<li>\tBoosting Church tithers’ pursuit of building and cultivating their personal relationship with God</li>\n<li>\tEnabling Church tithers to grow in their loving and trusting relations with God</li>\n<li>\tFocusing Church tithers to grow in the measure of his/her part in the body of Christ</li>\n<li>\tSustaining Church tithers’ commitment to live and to serve God alone, and distancing themselves from the lustful things of the world</li>\n<li>\tHelping Church tithers to keep their commitment to the advancement of the cause of Christ and His kingdom</li>\n<li>\tResourcing the demands for the living upkeep/necessities that come with the administration of the High Priestly ministry of Christ on earth, by and for the Church</li>\n<li>\tAllowing Church tithers to continuously experience the integrity of God’s personal presence and influence in their lives </li>\n<li>\tPositioning Church tithers to receive the overflowing abundance of the goodness God in their lives</li>\n</ul>\n\n<h4>\n  The Benefits of Church Tithing \n</h4>\n<ul>\n<li>\tOptimizes the Church’s Spiritual and financial vitality</li>\n<li>\tFosters a healthy and a vibrant community of God’s family</li>\n<li>\tEndows the Church to fulfill her mandate in advancing the cause of Christ and His kingdom</li>\n<li>\tEnables the Church to expand her local and global influence and reach</li>\n<li>  Frees Church leadership to seek the counsel of God in consecration, to provide effectual guidance and direction for the local church</li>\n\n</ul>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("../../../../../src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-us/about-us.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/about-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/achieving-growth-ict/achieving-growth-ict.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".module1 {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n  background-color: #4CAF50;/*#2196F3;*/\n}\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  z-index: -2;\n}\n\n.module1 {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n}\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 3.2rem;\n}\n.first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n\n.container{\n    width: 60%;}\n    \n  \n\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/achieving-growth-ict/achieving-growth-ict.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\">\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner1\">\n        <div class=\"text_over\">\n          <div>\n            <h1 class=\"five_per\">\n              The Growth Factor in Church Tithing\n            </h1>\n          </div>\n          <div>\n            Achieving Growth in our Personal Relations with God in Church Tithing\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<section class=\"first_sec\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"text_body\">\n\n          <p>\n            As the father of the Church, Abraham’s experience of growth in his personal relations with God, following his tithing is\n            what gives us the benchmark to seek growth in our personal relations with God, in Church tithing. What powered\n            Abraham into receiving the growth experience in his personal relations with God, following his tithing?\n          </p>\n\n          <p>\n            Many of us have not considered the spiritual and the sacred context that powered Abraham to give his tithes, and then, as\n            an outcome, receive the experience of growth in his personal relations with God. What was this spiritual and\n            sacred context?\n          </p>\n          <p>\n            1 First, let’s note that as the priest of God, Melchizedek represented God in his engagement with Abraham (Genesis 14:18),\n            and that characterizes their meeting as a spiritual and a sacred engagement between God and Abraham. 2 Furthermore,\n            Melchizedek brought forth bread and wine (Genesis 14:18), which means he had a fellowship of communion with Abraham.\n            3 A third thing to note is that Melchizedek declared to Abraham the word of God concerning God’s personal influence\n            in the winning of the battle against the kings (Genesis 14:19-20), which unveiled not only the personal nature\n            of God to Abraham, but also, that God can be related to, personally. 4 Fourthly, based on Abraham’s response\n            to the king of Sodom (Genesis 14:21-23), we are to note that Melchizedek dedicated him to God, and received his\n            pledge to distance himself from the king of Sodom, who perhaps symbolizes the lustful things of the world.\n          </p>\n          <p>\n\n            The above items give us the spiritual and sacred things that Abraham was involved with, prior to, or in the context of the\n            giving of his tithes. It appears by Melchizedek, that Abraham was engaged in a type of devotional activity with\n            God, before he gave the tithes, or in the process of giving his tithes. The nature of the devotional activity\n            with God unveiling His personal nature to Abraham would impact his personal relations with God to give him the\n            growth experience in his trust (Genesis 24:40, Romans 4:21, Hebrews 11:17-19), love (Genesis 22:12), and holiness\n            to God (Genesis 17:1), as well as the integrity of the personal presence and influence of God in his life (Genesis\n            24:40).\n\n            <p>\n              We see here that Abraham’s tithing was connected to a devotional activity with God to give him growth in his personal relations\n              with Him. In making Abraham the father of the Church, God was also benchmarking with him the spiritual and\n              the sacred approach that Church tithers are to give to the practice of Church tithing; that would result in\n              growth in their personal relations with Him. It is this understanding of God’s work in Abraham’s tithing that\n              gives us the framework for ‘Tithing to Grow in Christ’.\n\n            </p>\n            <p>\n              Tithing to Grow in Christ is an approach to Church tithing that situates church tithers into the discipline of having a devotional\n              time with God, before they give their tithes at church, with the goal of growing in their personal relations\n              with God, by having fulfillments in the <a href=\"/five_christain_persuasions\">Five Christian Persuasions of Church Tithing</a>.\n\n            </p>\n\n\n            <p>\n              The diligence we give to the ritual of having a quality devotional time with God regarding the Five Christian Persuasions\n              of Church Tithing, prior to the giving of our tithes at church is how we make our tithing count for growth\n              in our trusting and loving relations with God; all together allowing that diligence to impact our Christian\n              formation.\n\n            </p>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/achieving-growth-ict/achieving-growth-ict.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievingGrowthIctComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AchievingGrowthIctComponent = (function () {
    function AchievingGrowthIctComponent() {
    }
    AchievingGrowthIctComponent.prototype.ngOnInit = function () {
    };
    AchievingGrowthIctComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-achieving-growth-ict',
            template: __webpack_require__("../../../../../src/app/achieving-growth-ict/achieving-growth-ict.component.html"),
            styles: [__webpack_require__("../../../../../src/app/achieving-growth-ict/achieving-growth-ict.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AchievingGrowthIctComponent);
    return AchievingGrowthIctComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/achieving-growth-ict.component.js.map

/***/ }),

/***/ "../../../../../src/app/acts/acts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n\n.pic_over{\n    text-align: center;\n}\n.btn-primary{\n        box-shadow: 2px 2px 11px #666666;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n      padding-top: 1rem;\n    text-align: center;\n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/acts/acts.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"pic_over\">\n<img src=\"assets/images/acts.png\">\n  </div>\n  <div class=\"cont\"> \n    <p>\nWonna be a proud member of ACTS, and be an advocate of Church Tithing? \n\n</p>\n</div>\n</div>\n\n</div>\n\n</div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/acts/acts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ACTsComponent = (function () {
    function ACTsComponent() {
        this.state = '';
    }
    ACTsComponent.prototype.ngOnInit = function () {
    };
    ACTsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-acts',
            template: __webpack_require__("../../../../../src/app/acts/acts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/acts/acts.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], ACTsComponent);
    return ACTsComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/acts.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page_spacer{\n    padding-top: 75px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<html>\n        <app-nav-header></app-nav-header>\n        <div class=\"page_spacer\"></div>\n    <body>\n<router-outlet></router-outlet>\n<app-footer> </app-footer>\n    </body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__email_email_component__ = __webpack_require__("../../../../../src/app/email/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__members_members_component__ = __webpack_require__("../../../../../src/app/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__content_menu_content_menu_component__ = __webpack_require__("../../../../../src/app/content-menu/content-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__day1_day1_component__ = __webpack_require__("../../../../../src/app/day1/day1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__nav_header_nav_header_component__ = __webpack_require__("../../../../../src/app/nav-header/nav-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__about_us_about_us_component__ = __webpack_require__("../../../../../src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__faqs_faqs_component__ = __webpack_require__("../../../../../src/app/faqs/faqs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__donations_donations_component__ = __webpack_require__("../../../../../src/app/donations/donations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__five_christian_persuasions_five_christian_persuasions_component__ = __webpack_require__("../../../../../src/app/five-christian-persuasions/five-christian-persuasions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__test_test_component__ = __webpack_require__("../../../../../src/app/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__the_abraham_factor_the_abraham_factor_component__ = __webpack_require__("../../../../../src/app/the-abraham-factor/the-abraham-factor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__the_god_factor_the_god_factor_component__ = __webpack_require__("../../../../../src/app/the-god-factor/the-god-factor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__the_growth_factor_the_growth_factor_component__ = __webpack_require__("../../../../../src/app/the-growth-factor/the-growth-factor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__how_i_grow_in_how_i_grow_in_component__ = __webpack_require__("../../../../../src/app/how-i-grow-in/how-i-grow-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__achieving_growth_ict_achieving_growth_ict_component__ = __webpack_require__("../../../../../src/app/achieving-growth-ict/achieving-growth-ict.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__biblical_assumption_of_giving_biblical_assumption_of_giving_component__ = __webpack_require__("../../../../../src/app/biblical-assumption-of-giving/biblical-assumption-of-giving.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__gods_rubric_gods_rubric_component__ = __webpack_require__("../../../../../src/app/gods-rubric/gods-rubric.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__email_auth_email_auth_component__ = __webpack_require__("../../../../../src/app/email-auth/email-auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__day_donations_day_donations_component__ = __webpack_require__("../../../../../src/app/day-donations/day-donations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__day1_1_day1_1_component__ = __webpack_require__("../../../../../src/app/day1-1/day1-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__day1_2_day1_2_component__ = __webpack_require__("../../../../../src/app/day1-2/day1-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__day1_3_day1_3_component__ = __webpack_require__("../../../../../src/app/day1-3/day1-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__day1_4_day1_4_component__ = __webpack_require__("../../../../../src/app/day1-4/day1-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__day1_5_day1_5_component__ = __webpack_require__("../../../../../src/app/day1-5/day1-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__acts_acts_component__ = __webpack_require__("../../../../../src/app/acts/acts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__day2_day2_component__ = __webpack_require__("../../../../../src/app/day2/day2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__day2_1_day2_1_component__ = __webpack_require__("../../../../../src/app/day2-1/day2-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__day2_2_day2_2_component__ = __webpack_require__("../../../../../src/app/day2-2/day2-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__day2_3_day2_3_component__ = __webpack_require__("../../../../../src/app/day2-3/day2-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__day2_4_day2_4_component__ = __webpack_require__("../../../../../src/app/day2-4/day2-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__day2_5_day2_5_component__ = __webpack_require__("../../../../../src/app/day2-5/day2-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__day3_day3_component__ = __webpack_require__("../../../../../src/app/day3/day3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__day3_1_day3_1_component__ = __webpack_require__("../../../../../src/app/day3-1/day3-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__day3_2_day3_2_component__ = __webpack_require__("../../../../../src/app/day3-2/day3-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__day3_3_day3_3_component__ = __webpack_require__("../../../../../src/app/day3-3/day3-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__day3_4_day3_4_component__ = __webpack_require__("../../../../../src/app/day3-4/day3-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__day3_5_day3_5_component__ = __webpack_require__("../../../../../src/app/day3-5/day3-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__day1_donate_day1_donate_component__ = __webpack_require__("../../../../../src/app/day1-donate/day1-donate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__day2_donate_day2_donate_component__ = __webpack_require__("../../../../../src/app/day2-donate/day2-donate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__day3_donate_day3_donate_component__ = __webpack_require__("../../../../../src/app/day3-donate/day3-donate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__day4_day4_component__ = __webpack_require__("../../../../../src/app/day4/day4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__day4_1_day4_1_component__ = __webpack_require__("../../../../../src/app/day4-1/day4-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__day4_2_day4_2_component__ = __webpack_require__("../../../../../src/app/day4-2/day4-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__day4_3_day4_3_component__ = __webpack_require__("../../../../../src/app/day4-3/day4-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__day4_4_day4_4_component__ = __webpack_require__("../../../../../src/app/day4-4/day4-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__day4_5_day4_5_component__ = __webpack_require__("../../../../../src/app/day4-5/day4-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__day4_6_day4_6_component__ = __webpack_require__("../../../../../src/app/day4-6/day4-6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__day5_day5_component__ = __webpack_require__("../../../../../src/app/day5/day5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__day5_1_day5_1_component__ = __webpack_require__("../../../../../src/app/day5-1/day5-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__day5_2_day5_2_component__ = __webpack_require__("../../../../../src/app/day5-2/day5-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__day5_3_day5_3_component__ = __webpack_require__("../../../../../src/app/day5-3/day5-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__day5_4_day5_4_component__ = __webpack_require__("../../../../../src/app/day5-4/day5-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__day5_5_day5_5_component__ = __webpack_require__("../../../../../src/app/day5-5/day5-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__day5_6_day5_6_component__ = __webpack_require__("../../../../../src/app/day5-6/day5-6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__day6_day6_component__ = __webpack_require__("../../../../../src/app/day6/day6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__day6_1_day6_1_component__ = __webpack_require__("../../../../../src/app/day6-1/day6-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__day6_2_day6_2_component__ = __webpack_require__("../../../../../src/app/day6-2/day6-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__day6_3_day6_3_component__ = __webpack_require__("../../../../../src/app/day6-3/day6-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__day6_4_day6_4_component__ = __webpack_require__("../../../../../src/app/day6-4/day6-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__day6_5_day6_5_component__ = __webpack_require__("../../../../../src/app/day6-5/day6-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__day6_6_day6_6_component__ = __webpack_require__("../../../../../src/app/day6-6/day6-6.component.ts");
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











































































//import { ResetPasswordComponent } from './reset-password/reset-password.component';
// Must export the config
var firebaseConfig = {
    apiKey: "AIzaSyBSq5CduRfRzzjCvYAZSQLYDM4GMr62kGA",
    authDomain: "ttgic-42210.firebaseapp.com",
    databaseURL: "https://ttgic-42210.firebaseio.com",
    projectId: "ttgic-42210",
    storageBucket: "ttgic-42210.appspot.com",
    messagingSenderId: "827252826819"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                // LoginComponent,
                __WEBPACK_IMPORTED_MODULE_8__email_email_component__["a" /* EmailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_10__members_members_component__["a" /* MembersComponent */],
                __WEBPACK_IMPORTED_MODULE_13__content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_14__content_menu_content_menu_component__["a" /* ContentMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__day1_day1_component__["a" /* Day1Component */],
                __WEBPACK_IMPORTED_MODULE_16__nav_header_nav_header_component__["a" /* NavHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_18__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__faqs_faqs_component__["a" /* FaqsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__donations_donations_component__["a" /* DonationsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__five_christian_persuasions_five_christian_persuasions_component__["a" /* FiveChristianPersuasionsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_23__test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_24__the_abraham_factor_the_abraham_factor_component__["a" /* TheAbrahamFactorComponent */],
                __WEBPACK_IMPORTED_MODULE_25__the_god_factor_the_god_factor_component__["a" /* TheGodFactorComponent */],
                __WEBPACK_IMPORTED_MODULE_26__the_growth_factor_the_growth_factor_component__["a" /* TheGrowthFactorComponent */],
                __WEBPACK_IMPORTED_MODULE_27__how_i_grow_in_how_i_grow_in_component__["a" /* HowIGrowInComponent */],
                __WEBPACK_IMPORTED_MODULE_28__achieving_growth_ict_achieving_growth_ict_component__["a" /* AchievingGrowthIctComponent */],
                __WEBPACK_IMPORTED_MODULE_29__biblical_assumption_of_giving_biblical_assumption_of_giving_component__["a" /* BiblicalAssumptionOfGivingComponent */],
                __WEBPACK_IMPORTED_MODULE_30__gods_rubric_gods_rubric_component__["a" /* GodsRubricComponent */],
                __WEBPACK_IMPORTED_MODULE_31__email_auth_email_auth_component__["a" /* EmailAuthComponent */],
                __WEBPACK_IMPORTED_MODULE_32__day_donations_day_donations_component__["a" /* DayDonationsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__day1_1_day1_1_component__["a" /* Day11Component */],
                __WEBPACK_IMPORTED_MODULE_34__day1_2_day1_2_component__["a" /* Day12Component */],
                __WEBPACK_IMPORTED_MODULE_35__day1_3_day1_3_component__["a" /* Day13Component */],
                __WEBPACK_IMPORTED_MODULE_36__day1_4_day1_4_component__["a" /* Day14Component */],
                __WEBPACK_IMPORTED_MODULE_37__day1_5_day1_5_component__["a" /* Day15Component */],
                __WEBPACK_IMPORTED_MODULE_38__acts_acts_component__["a" /* ACTsComponent */],
                __WEBPACK_IMPORTED_MODULE_39__day2_day2_component__["a" /* Day2Component */],
                __WEBPACK_IMPORTED_MODULE_40__day2_1_day2_1_component__["a" /* Day21Component */],
                __WEBPACK_IMPORTED_MODULE_41__day2_2_day2_2_component__["a" /* Day22Component */],
                __WEBPACK_IMPORTED_MODULE_42__day2_3_day2_3_component__["a" /* Day23Component */],
                __WEBPACK_IMPORTED_MODULE_43__day2_4_day2_4_component__["a" /* Day24Component */],
                __WEBPACK_IMPORTED_MODULE_44__day2_5_day2_5_component__["a" /* Day25Component */],
                __WEBPACK_IMPORTED_MODULE_45__day3_day3_component__["a" /* Day3Component */],
                __WEBPACK_IMPORTED_MODULE_46__day3_1_day3_1_component__["a" /* Day31Component */],
                __WEBPACK_IMPORTED_MODULE_47__day3_2_day3_2_component__["a" /* Day32Component */],
                __WEBPACK_IMPORTED_MODULE_48__day3_3_day3_3_component__["a" /* Day33Component */],
                __WEBPACK_IMPORTED_MODULE_49__day3_4_day3_4_component__["a" /* Day34Component */],
                __WEBPACK_IMPORTED_MODULE_50__day3_5_day3_5_component__["a" /* Day35Component */],
                __WEBPACK_IMPORTED_MODULE_51__day1_donate_day1_donate_component__["a" /* Day1DonateComponent */],
                __WEBPACK_IMPORTED_MODULE_52__day2_donate_day2_donate_component__["a" /* Day2DonateComponent */],
                __WEBPACK_IMPORTED_MODULE_53__day3_donate_day3_donate_component__["a" /* Day3DonateComponent */],
                __WEBPACK_IMPORTED_MODULE_54__day4_day4_component__["a" /* Day4Component */],
                __WEBPACK_IMPORTED_MODULE_55__day4_1_day4_1_component__["a" /* Day41Component */],
                __WEBPACK_IMPORTED_MODULE_56__day4_2_day4_2_component__["a" /* Day42Component */],
                __WEBPACK_IMPORTED_MODULE_57__day4_3_day4_3_component__["a" /* Day43Component */],
                __WEBPACK_IMPORTED_MODULE_58__day4_4_day4_4_component__["a" /* Day44Component */],
                __WEBPACK_IMPORTED_MODULE_59__day4_5_day4_5_component__["a" /* Day45Component */],
                __WEBPACK_IMPORTED_MODULE_60__day4_6_day4_6_component__["a" /* Day46Component */],
                __WEBPACK_IMPORTED_MODULE_61__day5_day5_component__["a" /* Day5Component */],
                __WEBPACK_IMPORTED_MODULE_62__day5_1_day5_1_component__["a" /* Day51Component */],
                __WEBPACK_IMPORTED_MODULE_63__day5_2_day5_2_component__["a" /* Day52Component */],
                __WEBPACK_IMPORTED_MODULE_64__day5_3_day5_3_component__["a" /* Day53Component */],
                __WEBPACK_IMPORTED_MODULE_65__day5_4_day5_4_component__["a" /* Day54Component */],
                __WEBPACK_IMPORTED_MODULE_66__day5_5_day5_5_component__["a" /* Day55Component */],
                __WEBPACK_IMPORTED_MODULE_67__day5_6_day5_6_component__["a" /* Day56Component */],
                __WEBPACK_IMPORTED_MODULE_68__day6_day6_component__["a" /* Day6Component */],
                __WEBPACK_IMPORTED_MODULE_69__day6_1_day6_1_component__["a" /* Day61Component */],
                __WEBPACK_IMPORTED_MODULE_70__day6_2_day6_2_component__["a" /* Day62Component */],
                __WEBPACK_IMPORTED_MODULE_71__day6_3_day6_3_component__["a" /* Day63Component */],
                __WEBPACK_IMPORTED_MODULE_72__day6_4_day6_4_component__["a" /* Day64Component */],
                __WEBPACK_IMPORTED_MODULE_73__day6_5_day6_5_component__["a" /* Day65Component */],
                __WEBPACK_IMPORTED_MODULE_74__day6_6_day6_6_component__["a" /* Day66Component */] //,
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* routes */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__auth_service__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__members_members_component__ = __webpack_require__("../../../../../src/app/members/members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__day1_day1_component__ = __webpack_require__("../../../../../src/app/day1/day1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_us_about_us_component__ = __webpack_require__("../../../../../src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__faqs_faqs_component__ = __webpack_require__("../../../../../src/app/faqs/faqs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__donations_donations_component__ = __webpack_require__("../../../../../src/app/donations/donations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__five_christian_persuasions_five_christian_persuasions_component__ = __webpack_require__("../../../../../src/app/five-christian-persuasions/five-christian-persuasions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__test_test_component__ = __webpack_require__("../../../../../src/app/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__the_abraham_factor_the_abraham_factor_component__ = __webpack_require__("../../../../../src/app/the-abraham-factor/the-abraham-factor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__the_god_factor_the_god_factor_component__ = __webpack_require__("../../../../../src/app/the-god-factor/the-god-factor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__the_growth_factor_the_growth_factor_component__ = __webpack_require__("../../../../../src/app/the-growth-factor/the-growth-factor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__how_i_grow_in_how_i_grow_in_component__ = __webpack_require__("../../../../../src/app/how-i-grow-in/how-i-grow-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__achieving_growth_ict_achieving_growth_ict_component__ = __webpack_require__("../../../../../src/app/achieving-growth-ict/achieving-growth-ict.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__biblical_assumption_of_giving_biblical_assumption_of_giving_component__ = __webpack_require__("../../../../../src/app/biblical-assumption-of-giving/biblical-assumption-of-giving.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__gods_rubric_gods_rubric_component__ = __webpack_require__("../../../../../src/app/gods-rubric/gods-rubric.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__email_auth_email_auth_component__ = __webpack_require__("../../../../../src/app/email-auth/email-auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__day1_1_day1_1_component__ = __webpack_require__("../../../../../src/app/day1-1/day1-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__day1_2_day1_2_component__ = __webpack_require__("../../../../../src/app/day1-2/day1-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__day1_3_day1_3_component__ = __webpack_require__("../../../../../src/app/day1-3/day1-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__day1_4_day1_4_component__ = __webpack_require__("../../../../../src/app/day1-4/day1-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__day1_5_day1_5_component__ = __webpack_require__("../../../../../src/app/day1-5/day1-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__acts_acts_component__ = __webpack_require__("../../../../../src/app/acts/acts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__day2_day2_component__ = __webpack_require__("../../../../../src/app/day2/day2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__day2_1_day2_1_component__ = __webpack_require__("../../../../../src/app/day2-1/day2-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__day2_2_day2_2_component__ = __webpack_require__("../../../../../src/app/day2-2/day2-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__day2_3_day2_3_component__ = __webpack_require__("../../../../../src/app/day2-3/day2-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__day2_4_day2_4_component__ = __webpack_require__("../../../../../src/app/day2-4/day2-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__day2_5_day2_5_component__ = __webpack_require__("../../../../../src/app/day2-5/day2-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__day3_day3_component__ = __webpack_require__("../../../../../src/app/day3/day3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__day3_1_day3_1_component__ = __webpack_require__("../../../../../src/app/day3-1/day3-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__day3_2_day3_2_component__ = __webpack_require__("../../../../../src/app/day3-2/day3-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__day3_3_day3_3_component__ = __webpack_require__("../../../../../src/app/day3-3/day3-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__day3_4_day3_4_component__ = __webpack_require__("../../../../../src/app/day3-4/day3-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__day3_5_day3_5_component__ = __webpack_require__("../../../../../src/app/day3-5/day3-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__day1_donate_day1_donate_component__ = __webpack_require__("../../../../../src/app/day1-donate/day1-donate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__day2_donate_day2_donate_component__ = __webpack_require__("../../../../../src/app/day2-donate/day2-donate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__day3_donate_day3_donate_component__ = __webpack_require__("../../../../../src/app/day3-donate/day3-donate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__day4_day4_component__ = __webpack_require__("../../../../../src/app/day4/day4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__day4_1_day4_1_component__ = __webpack_require__("../../../../../src/app/day4-1/day4-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__day4_2_day4_2_component__ = __webpack_require__("../../../../../src/app/day4-2/day4-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__day4_3_day4_3_component__ = __webpack_require__("../../../../../src/app/day4-3/day4-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__day4_4_day4_4_component__ = __webpack_require__("../../../../../src/app/day4-4/day4-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__day4_5_day4_5_component__ = __webpack_require__("../../../../../src/app/day4-5/day4-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__day4_6_day4_6_component__ = __webpack_require__("../../../../../src/app/day4-6/day4-6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__day5_day5_component__ = __webpack_require__("../../../../../src/app/day5/day5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__day5_1_day5_1_component__ = __webpack_require__("../../../../../src/app/day5-1/day5-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__day5_2_day5_2_component__ = __webpack_require__("../../../../../src/app/day5-2/day5-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__day5_3_day5_3_component__ = __webpack_require__("../../../../../src/app/day5-3/day5-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__day5_4_day5_4_component__ = __webpack_require__("../../../../../src/app/day5-4/day5-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__day5_5_day5_5_component__ = __webpack_require__("../../../../../src/app/day5-5/day5-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__day5_6_day5_6_component__ = __webpack_require__("../../../../../src/app/day5-6/day5-6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__day6_day6_component__ = __webpack_require__("../../../../../src/app/day6/day6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__day6_1_day6_1_component__ = __webpack_require__("../../../../../src/app/day6-1/day6-1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__day6_2_day6_2_component__ = __webpack_require__("../../../../../src/app/day6-2/day6-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__day6_3_day6_3_component__ = __webpack_require__("../../../../../src/app/day6-3/day6-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__day6_4_day6_4_component__ = __webpack_require__("../../../../../src/app/day6-4/day6-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__day6_5_day6_5_component__ = __webpack_require__("../../../../../src/app/day6-5/day6-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__day6_6_day6_6_component__ = __webpack_require__("../../../../../src/app/day6-6/day6-6.component.ts");
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });































































var router = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    // { path: 'reset_password', component: ResetPasswordComponent },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'email_auth', component: __WEBPACK_IMPORTED_MODULE_20__email_auth_email_auth_component__["a" /* EmailAuthComponent */] },
    { path: 'members', component: __WEBPACK_IMPORTED_MODULE_1__members_members_component__["a" /* MembersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthGuard */]] },
    { path: 'content', component: __WEBPACK_IMPORTED_MODULE_4__content_content_component__["a" /* ContentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: 'day1', pathMatch: 'full' },
            { path: 'acts', component: __WEBPACK_IMPORTED_MODULE_26__acts_acts_component__["a" /* ACTsComponent */] },
            { path: 'day1', component: __WEBPACK_IMPORTED_MODULE_6__day1_day1_component__["a" /* Day1Component */] },
            { path: 'day1_1', component: __WEBPACK_IMPORTED_MODULE_21__day1_1_day1_1_component__["a" /* Day11Component */] },
            { path: 'day1_2', component: __WEBPACK_IMPORTED_MODULE_22__day1_2_day1_2_component__["a" /* Day12Component */] },
            { path: 'day1_3', component: __WEBPACK_IMPORTED_MODULE_23__day1_3_day1_3_component__["a" /* Day13Component */] },
            { path: 'day1_4', component: __WEBPACK_IMPORTED_MODULE_24__day1_4_day1_4_component__["a" /* Day14Component */] },
            { path: 'day1_5', component: __WEBPACK_IMPORTED_MODULE_25__day1_5_day1_5_component__["a" /* Day15Component */] },
            { path: 'day1Donate', component: __WEBPACK_IMPORTED_MODULE_39__day1_donate_day1_donate_component__["a" /* Day1DonateComponent */] },
            { path: 'day2', component: __WEBPACK_IMPORTED_MODULE_27__day2_day2_component__["a" /* Day2Component */] },
            { path: 'day2_1', component: __WEBPACK_IMPORTED_MODULE_28__day2_1_day2_1_component__["a" /* Day21Component */] },
            { path: 'day2_2', component: __WEBPACK_IMPORTED_MODULE_29__day2_2_day2_2_component__["a" /* Day22Component */] },
            { path: 'day2_3', component: __WEBPACK_IMPORTED_MODULE_30__day2_3_day2_3_component__["a" /* Day23Component */] },
            { path: 'day2_4', component: __WEBPACK_IMPORTED_MODULE_31__day2_4_day2_4_component__["a" /* Day24Component */] },
            { path: 'day2_5', component: __WEBPACK_IMPORTED_MODULE_32__day2_5_day2_5_component__["a" /* Day25Component */] },
            { path: 'day2Donate', component: __WEBPACK_IMPORTED_MODULE_40__day2_donate_day2_donate_component__["a" /* Day2DonateComponent */] },
            { path: 'day3', component: __WEBPACK_IMPORTED_MODULE_33__day3_day3_component__["a" /* Day3Component */] },
            { path: 'day3_1', component: __WEBPACK_IMPORTED_MODULE_34__day3_1_day3_1_component__["a" /* Day31Component */] },
            { path: 'day3_2', component: __WEBPACK_IMPORTED_MODULE_35__day3_2_day3_2_component__["a" /* Day32Component */] },
            { path: 'day3_3', component: __WEBPACK_IMPORTED_MODULE_36__day3_3_day3_3_component__["a" /* Day33Component */] },
            { path: 'day3_4', component: __WEBPACK_IMPORTED_MODULE_37__day3_4_day3_4_component__["a" /* Day34Component */] },
            { path: 'day3_5', component: __WEBPACK_IMPORTED_MODULE_38__day3_5_day3_5_component__["a" /* Day35Component */] },
            { path: 'day3Donate', component: __WEBPACK_IMPORTED_MODULE_41__day3_donate_day3_donate_component__["a" /* Day3DonateComponent */] },
            { path: 'day4', component: __WEBPACK_IMPORTED_MODULE_42__day4_day4_component__["a" /* Day4Component */] },
            { path: 'day4_1', component: __WEBPACK_IMPORTED_MODULE_43__day4_1_day4_1_component__["a" /* Day41Component */] },
            { path: 'day4_2', component: __WEBPACK_IMPORTED_MODULE_44__day4_2_day4_2_component__["a" /* Day42Component */] },
            { path: 'day4_3', component: __WEBPACK_IMPORTED_MODULE_45__day4_3_day4_3_component__["a" /* Day43Component */] },
            { path: 'day4_4', component: __WEBPACK_IMPORTED_MODULE_46__day4_4_day4_4_component__["a" /* Day44Component */] },
            { path: 'day4_5', component: __WEBPACK_IMPORTED_MODULE_47__day4_5_day4_5_component__["a" /* Day45Component */] },
            { path: 'day4_6', component: __WEBPACK_IMPORTED_MODULE_48__day4_6_day4_6_component__["a" /* Day46Component */] },
            { path: 'day5', component: __WEBPACK_IMPORTED_MODULE_49__day5_day5_component__["a" /* Day5Component */] },
            { path: 'day5_1', component: __WEBPACK_IMPORTED_MODULE_50__day5_1_day5_1_component__["a" /* Day51Component */] },
            { path: 'day5_2', component: __WEBPACK_IMPORTED_MODULE_51__day5_2_day5_2_component__["a" /* Day52Component */] },
            { path: 'day5_3', component: __WEBPACK_IMPORTED_MODULE_52__day5_3_day5_3_component__["a" /* Day53Component */] },
            { path: 'day5_4', component: __WEBPACK_IMPORTED_MODULE_53__day5_4_day5_4_component__["a" /* Day54Component */] },
            { path: 'day5_5', component: __WEBPACK_IMPORTED_MODULE_54__day5_5_day5_5_component__["a" /* Day55Component */] },
            { path: 'day5_6', component: __WEBPACK_IMPORTED_MODULE_55__day5_6_day5_6_component__["a" /* Day56Component */] },
            { path: 'day6', component: __WEBPACK_IMPORTED_MODULE_56__day6_day6_component__["a" /* Day6Component */] },
            { path: 'day6_1', component: __WEBPACK_IMPORTED_MODULE_57__day6_1_day6_1_component__["a" /* Day61Component */] },
            { path: 'day6_2', component: __WEBPACK_IMPORTED_MODULE_58__day6_2_day6_2_component__["a" /* Day62Component */] },
            { path: 'day6_3', component: __WEBPACK_IMPORTED_MODULE_59__day6_3_day6_3_component__["a" /* Day63Component */] },
            { path: 'day6_4', component: __WEBPACK_IMPORTED_MODULE_60__day6_4_day6_4_component__["a" /* Day64Component */] },
            { path: 'day6_5', component: __WEBPACK_IMPORTED_MODULE_61__day6_5_day6_5_component__["a" /* Day65Component */] },
            { path: 'day6_6', component: __WEBPACK_IMPORTED_MODULE_62__day6_6_day6_6_component__["a" /* Day66Component */] }
        ]
    },
    //{ path: 'content-menu', component: ContentMenuComponent, canActivate: [AuthGuard] },
    { path: 'about_us', component: __WEBPACK_IMPORTED_MODULE_7__about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: 'faqs', component: __WEBPACK_IMPORTED_MODULE_9__faqs_faqs_component__["a" /* FaqsComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_12__test_test_component__["a" /* TestComponent */] },
    { path: 'the_God_factor', component: __WEBPACK_IMPORTED_MODULE_14__the_god_factor_the_god_factor_component__["a" /* TheGodFactorComponent */] },
    { path: 'the_growth_factor', component: __WEBPACK_IMPORTED_MODULE_15__the_growth_factor_the_growth_factor_component__["a" /* TheGrowthFactorComponent */] },
    { path: 'how_i_grow', component: __WEBPACK_IMPORTED_MODULE_16__how_i_grow_in_how_i_grow_in_component__["a" /* HowIGrowInComponent */] },
    { path: 'donations', component: __WEBPACK_IMPORTED_MODULE_10__donations_donations_component__["a" /* DonationsComponent */] },
    { path: 'five_christain_persuasions', component: __WEBPACK_IMPORTED_MODULE_11__five_christian_persuasions_five_christian_persuasions_component__["a" /* FiveChristianPersuasionsComponent */] },
    { path: 'the_abraham_factor', component: __WEBPACK_IMPORTED_MODULE_13__the_abraham_factor_the_abraham_factor_component__["a" /* TheAbrahamFactorComponent */] },
    { path: 'acheving_growth_ict', component: __WEBPACK_IMPORTED_MODULE_17__achieving_growth_ict_achieving_growth_ict_component__["a" /* AchievingGrowthIctComponent */] },
    { path: 'biblical_assumption_of_giving', component: __WEBPACK_IMPORTED_MODULE_18__biblical_assumption_of_giving_biblical_assumption_of_giving_component__["a" /* BiblicalAssumptionOfGivingComponent */] },
    { path: 'Gods_rubric', component: __WEBPACK_IMPORTED_MODULE_19__gods_rubric_gods_rubric_component__["a" /* GodsRubricComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(router);
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_angularfire2__ = __webpack_require__("../../../../angularfire2/angularfire2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].from(this.auth)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated)
                _this.router.navigate(['/email_auth']);
        });
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_angularfire2__["a" /* AngularFireAuth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2_angularfire2__["a" /* AngularFireAuth */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/biblical-assumption-of-giving/biblical-assumption-of-giving.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".module1 {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n  background-color: #4CAF50;/*#2196F3;*/\n}\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  z-index: -2;\n}\n\n.module1 {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n}\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 3.2rem;\n}\n.first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n\n.container{\n    width: 60%;}\n    \n  \n\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/biblical-assumption-of-giving/biblical-assumption-of-giving.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\">\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner1\">\n        <div class=\"text_over\">\n          <div>\n            <h1 class=\"five_per\">\nThe Biblical Assumption of Giving\n            </h1>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<section class=\"first_sec\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"text_body\">\n\n          <p>\n            Biblically, there is good amount of scriptural indications that correlation exits between love and giving—the one who is loved more receives much in giving from the one who is extending the love. Inversely, the one who is loved less receives less in giving from the one who is extending the love.\n\n          </p>\n\n          <p>\n            For example, in Genesis 37:3, we learn that Israel (Jacob) loved Joseph more than all his children and made or gave him a coat of many colors. In 1Samuel 1:4–5, we are told that when the time was that Elkanah would offer, he gave to Peninnah, his wife, and all her sons and daughters portions. But unto Hannah, he gave her worthy portion for he loved Hannah. In 1Samuel 18:1–4, the Bible indicates that Jonathan gave David his military regalia—from his robe to his weapons—because he loved David as his own soul. And in Luke 7:36–47, Christ comments to Peter on the ‘sinful’ woman’s expressions of love on him: \n\n          </p>\n          <div class=\"text_squeez\">\n            Seest thou this woman? I entered into thine house, thou gavest me no water for my feet: but she hath washed my feet with tears, and wiped them with the hairs of her head. Thou gavest me no kiss: but this woman since the time I came in hath not ceased to kiss my feet. My head with oil thou didst not anoint: but this woman hath anointed my feet with ointment. Wherefore I say unto thee, her sins, which are many, are forgiven; for she loved much: but to whom little is forgiven, the same loveth little. \n          </div>\n          \n          <p>\n           In John 3:16, Christ reveals the heart of God for mankind: “For God so loved the world that He gave His only begotten Son that whosoever believeth in Him should not die but have everlasting life.” \n\n          </p>\n          <p>\n            With the above scriptural indications, the point is well captured that while love may not be the basis for all giving, they show that in most cases, love is a major underlining factor in the acts of giving. These scriptural examples then give us the correlation between love and giving, as represented by this diagram:\n\n          </p>\n           <div class=\"hold_img\">\n             <img src=\"assets/images/chart1.jpg\">\n           </div>\n           <div class=\"pct_caption\">\n             The More one Loves the more one gives<br>\n             The Less one Loves the less one gives\n           </div>\n            <p>\n              Scripturally, if love is what powers giving, the most logical approach to optimize giving is to cultivate love. That is what God did with Abraham, in making him the father of the Church. Without much elaboration, we need to realize that God had to cultivate much love in the heart and life of Abraham towards him to the degree that he would test that love in Abraham’s heart, by asking him to sacrifice Isaac his only son. Abraham passed that test according to the standards of Christ – ‘if you love me, you will obey my commandment. \n            </p>\n           \n           <p>\n             What more, we need to realize that God’s cultivation of love in Abraham’s heart and life began with his tithing in Genesis 14, when by Melchizedek, He declared His personal influence in Abraham’s winning of the battle against the great kings. By that declaration God revealed His personal nature to Abraham, for the patriarch to begin to relate to him personally.   \n\n           </p>\n<p>\n  And so, scripturally, there is a biblical assumption that instigates a Christian approach for the optimization of giving in the local church, which is to come by the cultivation of love in our hearts towards God, by the Holy Spirit, through education.  \n\n</p>\n\n<p>\n\n  With this view of the Christian approach for optimizing giving in the local church, the Church Tithing Institute advocates for a holistic Christian education that emphasizes both the teaching of financial giving on the Christian matters of financial management and stewardship; and the education that allows the Holy Spirit to cultivate love in our hearts towards God, for a habit of giving that flows out of our loving relations with God. The latter emphasis gives the objective for the Tithing to Grow in Christ Devotional APP.  The Devotional App is designed for Church tithers to have that intimacy with God in the giving of their tithes.\n</p>\n\n           \n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/biblical-assumption-of-giving/biblical-assumption-of-giving.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiblicalAssumptionOfGivingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BiblicalAssumptionOfGivingComponent = (function () {
    function BiblicalAssumptionOfGivingComponent() {
    }
    BiblicalAssumptionOfGivingComponent.prototype.ngOnInit = function () {
    };
    BiblicalAssumptionOfGivingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-biblical-assumption-of-giving',
            template: __webpack_require__("../../../../../src/app/biblical-assumption-of-giving/biblical-assumption-of-giving.component.html"),
            styles: [__webpack_require__("../../../../../src/app/biblical-assumption-of-giving/biblical-assumption-of-giving.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], BiblicalAssumptionOfGivingComponent);
    return BiblicalAssumptionOfGivingComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/biblical-assumption-of-giving.component.js.map

/***/ }),

/***/ "../../../../../src/app/content-menu/content-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Slabo+27px);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Kumar+One);", ""]);

// module
exports.push([module.i, "a, a:hover, a:focus{outline:none; text-decoration:none;}\n\nbody{\n    font-family: 'Open Sans', sans-serif;\n}\n\nh2{float:left; width:100%; color:#fff; margin-bottom:30px; font-size: 14px;}\nh2 span{font-family: 'Kumar One', cursive; display:block; font-size:45px; text-transform:none; margin-bottom:20px; margin-top:30px;}\nh2 a{color:#fff; font-weight:bold;}\n\n\nsection{\n    \n    float:left;\n    width:100%;\n    background: #43cea2;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to left, #185a9d, #43cea2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\npadding:30px 0;\n}\n\n.card {\n    background-color: #fff;\n    border-radius: 0.25rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n    margin-bottom:1px;\n    border:none;\n}\n.card-header:first-child {\n    border-radius: 0;\n}\n.card-header {\n    background-color: #f7f7f9;\n    margin-bottom: 0;\n    padding: 20px 1.25rem;\n    border:none;\n    \n    \n}\n.card-header a i{\n    float:left;\n    font-size:25px;\n    padding:5px 0;\n    margin:0 25px 0 0px;\n    color:#195C9D;\n}\n.card-header i{\n    float:right;        \n    font-size:30px;\n    width:1%;\n    margin-top:8px;\n    margin-right:10px;\n}\n.card-header a{\n    width:97%;\n    float:left;\n    color:#565656;\n}\n.card-header p{\n    margin:0;\n}\n\n.card-header h3{\n    margin:0 0 0px;\n    font-size:20px;\n    font-family: 'Slabo 27px', serif;\n    font-weight:bold;\n    color:#3fc199;\n    \n}\n.card-block {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    padding: 20px;\n    color:#232323;\n    box-shadow:inset 0px 4px 5px rgba(0,0,0,0.1);\n    border-top:1px soild #000;\n    border-radius:0;\n}\n\n.list-group-item {\n    font-size: 14px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content-menu/content-menu.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"bd-example\" data-example-id=\"\">\n        <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n         \n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\"\n                  class=\"collapsed\">\n          <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\n            <h3>Day 1</h3>\n            <p>The aim of church tithing</p>\n        </a>\n\n              </div>\n            </div>\n\n            <div id=\"collapseOne\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" aria-expanded=\"false\" style=\"\">\n              <div class=\"card-block\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">Being purpose driven with your tithe</li>\n                  <li class=\"list-group-item\">The spiritual matter</li>\n                   <li class=\"list-group-item\">The importance of spiritual matter</li>\n                    <li class=\"list-group-item\">Spiritual impartation</li>\n                     <li class=\"list-group-item\">Donation</li>\n                      <li class=\"list-group-item\">Test yourself</li>\n                       <li class=\"list-group-item\">ACTS</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseOne\"\n                  class=\"collapsed\">\n          <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\n            <h3>Day 2</h3>\n            <p>The objective of church tithing</p>\n        </a>\n                <!--i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i-->\n              </div>\n            </div>\n            <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" aria-expanded=\"false\">\n              <div class=\"card-block\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">Acknowledging God's personal influence in your life</li>\n                  <li class=\"list-group-item\">The spiritual matter</li>\n                   <li class=\"list-group-item\">The importance of spiritual matter</li>\n                    <li class=\"list-group-item\">Spiritual impartation</li>\n                     <li class=\"list-group-item\">Donation</li>\n                      <li class=\"list-group-item\">Test yourself</li>\n                       <li class=\"list-group-item\">ACTS</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseOne\"\n                  class=\"collapsed\">\n          <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\n            <h3>Day 3</h3>\n            <p>The Goal of tithing</p>\n        </a>\n                <!--i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i-->\n              </div>\n            </div>\n            <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\" aria-expanded=\"false\">\n              <div class=\"card-block\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">Reckoning with the spiritual benefits of your tithing</li>\n                  <li class=\"list-group-item\">The spiritual matter</li>\n                   <li class=\"list-group-item\">The importance of spiritual matter</li>\n                    <li class=\"list-group-item\">Spiritual impartation</li>\n                     <li class=\"list-group-item\">Donation</li>\n                      <li class=\"list-group-item\">Test yourself</li>\n                       <li class=\"list-group-item\">ACTS</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseOne\"\n                  class=\"collapsed\">\n          <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\n            <h3>Day 4</h3>\n            <p>The purpose of church tithing</p>\n        </a>\n                <!--i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i-->\n              </div>\n            </div>\n\n            <div id=\"collapseFour\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" aria-expanded=\"false\" style=\"\">\n              <div class=\"card-block\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">Talking to God concernign His church</li>\n                  <li class=\"list-group-item\">The spiritual matter</li>\n                   <li class=\"list-group-item\">The importance of spiritual matter</li>\n                    <li class=\"list-group-item\">Spiritual impartation</li>\n                     <li class=\"list-group-item\">Donation</li>\n                      <li class=\"list-group-item\">Test yourself</li>\n                       <li class=\"list-group-item\">ACTS</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseOne\"\n                  class=\"collapsed\">\n          <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\n            <h3>Day 5</h3>\n            <p>The sacred significance of church tithing</p>\n        </a>\n                <!--i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i-->\n              </div>\n            </div>\n            <div id=\"collapseFive\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" aria-expanded=\"false\">\n              <div class=\"card-block\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">Dedicating your life to God</li>\n                  <li class=\"list-group-item\">The spiritual matter</li>\n                   <li class=\"list-group-item\">The importance of spiritual matter</li>\n                    <li class=\"list-group-item\">Spiritual impartation</li>\n                     <li class=\"list-group-item\">Donation</li>\n                      <li class=\"list-group-item\">Test yourself</li>\n                       <li class=\"list-group-item\">ACTS</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n       \n\n        <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" aria-expanded=\"false\" aria-controls=\"collapseOne\"\n                  class=\"collapsed\">\n          <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\n            <h3>Day 6</h3>\n            <p>Setting aside the tithe</p>\n        </a>\n                <!--i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i-->\n              </div>\n            </div>\n            <div id=\"collapseSix\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" aria-expanded=\"false\">\n              <div class=\"card-block\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">Setting aside your tithe to God</li>\n                  <li class=\"list-group-item\">The spiritual matter</li>\n                   <li class=\"list-group-item\">The importance of spiritual matter</li>\n                    <li class=\"list-group-item\">Spiritual impartation</li>\n                     <li class=\"list-group-item\">Donation</li>\n                      <li class=\"list-group-item\">Test yourself</li>\n                       <li class=\"list-group-item\">ACTS</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "../../../../../src/app/content-menu/content-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentMenuComponent = (function () {
    function ContentMenuComponent() {
    }
    ContentMenuComponent.prototype.ngOnInit = function () {
    };
    ContentMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-content-menu',
            template: __webpack_require__("../../../../../src/app/content-menu/content-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content-menu/content-menu.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], ContentMenuComponent);
    return ContentMenuComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/content-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Slabo+27px);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Kumar+One);", ""]);

// module
exports.push([module.i, "\n/*\n#left_side{\n    width: 30%;\n}*/\n/*\n.outer {\nwidth: 100%;\n    height:400px;\n    overflow:hidden;\n}\n\n.leftcol {\n   \n}\n\n.rightcol {\n\n    overflow:scroll;\n    height:1000px; /* I WANT THIS BUT DYNAMICALLY CHANGES W/ .OUTER *//*\n}\n*/\n\n\n.navbar, .bg-faded, .footer_sec1,.footer_sec{display: none!important;}\n.page_spacer{padding-top: 0!important;}\n\n#rightSide{\n   position: relative;\n  \n   width: 100%;\n   padding-bottom: 100px;\n   height: auto;\n   \n}\n\n.first{\n    background-color: #ffffff;\n  \n    width: 100%;\n    z-index: 2;\n    height: 70px;\n}\n\n.bas_btn {\n  font-size: inherit;\n    margin:0;\n    text-align: right;\n}\n.bas_btn span{\n  \n}\n\n.logd_as{\n    text-align: right;\n}\n#accordian, .bd-example{\n    overflow-y: scroll!important;\n    width: 100%;\n    /*height: 100%;*/\n    height: 100%;\n}\na, a:hover, a:focus{outline:none; text-decoration:none;}\n\nbody{\n    font-family: 'Open Sans', sans-serif;\n}\n\nbutton {\n    padding: 0.3em;\n}\n\n.members_cont{\n    width: 100%;\n    \n   \n}\n.members_sec{\n\n    width: 100%;\n    padding-top: 30px;\n      background-color: #ffffff;\n height: auto;\n    \noverflow: auto;  \n}\nh2{float:left; width:100%; color:#fff; margin-bottom:30px; font-size: 14px;}\nh2 span{font-family: 'Kumar One', cursive; display:block; font-size:45px; text-transform:none; margin-bottom:20px; margin-top:30px;}\nh2 a{color:#fff; font-weight:bold;}\n\n\n.card {\n    background-color: #fff;\n    border-radius: 0.25rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n    margin-bottom:1px;\n    border:none;\n}\n.card-header:first-child {\n    border-radius: 0;\n}\n.card-header {\n    background-color: #f7f7f9;\n    margin-bottom: 0;\n    padding: 1rem;\n    border:none;\n    \n    \n}\n.card-header a i{\n    float:left;\n    font-size:25px;\n    padding:5px 0;\n    margin:0 25px 0 0px;\n    color:#195C9D;\n}\n.card-header i{\n    float:right;        \n    font-size:30px;\n    width:1%;\n    margin-top:8px;\n    margin-right:10px;\n}\n.card-header a{\n    width:97%;\n    float:left;\n    color:#565656;\n}\n.card-header p{\n    margin:0;\n}\n\n.card-header h3{\n    margin:0 0 0px;\n    font-size:20px;\n    font-family: 'Slabo 27px', serif;\n    font-weight:bold;\n    color:#3fc199;\n    \n}\n.card-block {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    padding: 20px;\n    color:#232323;\n    box-shadow:inset 0px 4px 5px rgba(0,0,0,0.1);\n    border-top:1px soild #000;\n    border-radius:0;\n}\n\n.list-group-item {\n    font-size: 14px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "\n <!--section class=\"first\">\n\n<div class=\"container\">\n    <div class=\"row\" >  \n  <div class=\"col-md-8\" id=\"left_side\"><h4>Welcome to Tithing to grow in Christ</h4>\n</div>\n<div class=\"col-md-3\">  <div class=\"logd_as\">Logged in as {{ name.auth.email }}</div></div>\n  <div class=\"col-md-1\"><a (click)=\"logout()\" class=\"bas_btn\"><span>| Logout</span></a></div>\n   </div>\n</div>\n</section-->\n <section class=\"members_sec\" [@fallIn]='state'>\n<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-4\" id=\"leftSide\">\n     \n    <!--accordian begins-->\n      <div class=\"bd-example\" data-example-id=\"\">\n        <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n         \n          <div class=\"card\" >\n            \n<!--a [routerLink]=\"['day1']\"-->\n            <a class=\"card-header\" role=\"tab\" id=\"headingOne\" [routerLink]=\"['day1']\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\"\n                  class=\"collapsed\">\n          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n             <h3> Day 1</h3>\n            <p>The aim of church tithing</p>\n        </a>\n\n              </div>\n            </a>\n<!--/a-->\n            <div id=\"collapseOne\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" aria-expanded=\"false\" style=\"\">\n              <div class=\"card-block\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\"><a [routerLink]=\"['day1_1']\">Being purpose driven with your tithe</a></li>\n                  <li class=\"list-group-item\"><a [routerLink]=\"['day1_2']\">The spiritual matter</a></li>\n                   <li class=\"list-group-item\"><a [routerLink]=\"['day1_3']\">The importance of spiritual matter</a></li>\n                    <li class=\"list-group-item\"><a [routerLink]=\"['day1_4']\">Spiritual impartation</a></li>\n                     <li class=\"list-group-item\"><a [routerLink]=\"['day1Donate']\">Donation</a></li>\n                      <li class=\"list-group-item\"><a [routerLink]=\"['day1_5']\">Test yourself</a></li>\n                       <li class=\"list-group-item\"><a [routerLink]=\"['acts']\">ACTS</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card\">\n            \n            <a class=\"card-header\" role=\"tab\" id=\"headingTwo\" [routerLink]=\"['day2']\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseOne\"\n                  class=\"collapsed\">\n          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n            <h3> Day 2</h3>\n            <p>The objective of church tithing</p>\n        </a>\n                <!--i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i-->\n              </div>\n            </a>\n        \n            <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" aria-expanded=\"false\">\n              <div class=\"card-block\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">  <a [routerLink]=\"['day2_1']\">Acknowledging God's personal influence in your life</a></li>\n                  <li class=\"list-group-item\">  <a [routerLink]=\"['day2_2']\">The spiritual matter</a></li>\n                   <li class=\"list-group-item\">  <a [routerLink]=\"['day2_3']\">The importance of spiritual matter</a></li>\n                    <li class=\"list-group-item\">  <a [routerLink]=\"['day2_4']\">Spiritual impartation</a></li>\n                     <li class=\"list-group-item\">  <a [routerLink]=\"['day2Donate']\">Donation</a></li>\n                      <li class=\"list-group-item\">  <a [routerLink]=\"['day2_5']\">Test yourself</a></li>\n                       <li class=\"list-group-item\">  <a [routerLink]=\"['acts']\">ACTS</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <a class=\"card-header\" role=\"tab\" id=\"headingThree\" [routerLink]=\"['day3']\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseOne\"\n                  class=\"collapsed\">\n          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n            <h3> Day 3</h3>\n            <p>The Goal of tithing</p>\n        </a>\n                <!--i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i-->\n              </div>\n            </a>\n            <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\" aria-expanded=\"false\">\n              <div class=\"card-block\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\"><a [routerLink]=\"['day3_1']\">Reckoning with the spiritual benefits of your tithing</a></li>\n                  <li class=\"list-group-item\"><a [routerLink]=\"['day3_2']\">The spiritual matter</a></li>\n                   <li class=\"list-group-item\"><a [routerLink]=\"['day3_3']\">The importance of spiritual matter</a></li>\n                    <li class=\"list-group-item\"><a [routerLink]=\"['day3_4']\">Spiritual impartation</a></li>\n                     <li class=\"list-group-item\"><a [routerLink]=\"['day3Donate']\">Donation</a></li>\n                      <li class=\"list-group-item\"><a [routerLink]=\"['day3_5']\">Test yourself</a></li>\n                       <li class=\"list-group-item\"><a [routerLink]=\"['acts']\">ACTS</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingFour\" [routerLink]=\"['day4']\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseOne\"\n                  class=\"collapsed\">\n          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n            <h3> Day 4</h3>\n            <p>The purpose of church tithing</p>\n        </a>\n                <!--i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i-->\n              </div>\n            </div>\n\n            <div id=\"collapseFour\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingFour\" aria-expanded=\"false\" style=\"\">\n              <div class=\"card-block\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\"><a [routerLink]=\"['day4_1']\">Talking to God concernign His church</a></li>\n                  <li class=\"list-group-item\"><a [routerLink]=\"['day4_2']\">The spiritual matter</a></li>\n                   <li class=\"list-group-item\"><a [routerLink]=\"['day4_3']\">The importance of spiritual matter</a></li>\n                    <li class=\"list-group-item\"><a [routerLink]=\"['day4_4']\">Spiritual impartation</a></li>\n                     <li class=\"list-group-item\"><a [routerLink]=\"['day4_5']\">Donation</a></li>\n                      <li class=\"list-group-item\"><a [routerLink]=\"['day4_6']\">Test yourself</a></li>\n                       <li class=\"list-group-item\"><a [routerLink]=\"['acts']\">ACTS</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingFive\" [routerLink]=\"['day5']\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseOne\"\n                  class=\"collapsed\">\n          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n            <h3> Day 5</h3>\n            <p>The sacred significance of church tithing</p>\n        </a>\n                <!--i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i-->\n              </div>\n            </div>\n            <div id=\"collapseFive\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingFive\" aria-expanded=\"false\">\n              <div class=\"card-block\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\"><a [routerLink]=\"['day5_1']\">Dedicating your life to God</a></li>\n                  <li class=\"list-group-item\"><a [routerLink]=\"['day5_2']\">The spiritual matter</a></li>\n                   <li class=\"list-group-item\"><a [routerLink]=\"['day5_3']\">The importance of spiritual matter</a></li>\n                    <li class=\"list-group-item\"><a [routerLink]=\"['day5_4']\">Spiritual impartation</a></li>\n                     <li class=\"list-group-item\"><a [routerLink]=\"['day5_5']\">Donation</a></li>\n                      <li class=\"list-group-item\"><a [routerLink]=\"['day5_6']\">Test yourself</a></li>\n                       <li class=\"list-group-item\"><a [routerLink]=\"['acts']\">ACTS</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n       \n\n        <div class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingSix\" [routerLink]=\"['day6']\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" aria-expanded=\"false\" aria-controls=\"collapseOne\"\n                  class=\"collapsed\">\n          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n            <h3> Day 6</h3>\n            <p>Setting aside the tithe</p>\n        </a>\n                <!--i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i-->\n              </div>\n            </div>\n            <div id=\"collapseSix\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingSix\" aria-expanded=\"false\">\n              <div class=\"card-block\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\"><a [routerLink]=\"['day6_1']\">Setting aside your tithe to God</a></li>\n                  <li class=\"list-group-item\"><a [routerLink]=\"['day6_2']\">The spiritual matter</a></li>\n                   <li class=\"list-group-item\"><a [routerLink]=\"['day6_3']\">The Church Tithing Creed</a></li>\n                    <li class=\"list-group-item\"><a [routerLink]=\"['day6_4']\">To God be The Glory</a></li>\n                     <li class=\"list-group-item\"><a [routerLink]=\"['day6_5']\">A Fact to Remember</a></li>\n                      <li class=\"list-group-item\"><a [routerLink]=\"['day6_6']\">Donation</a></li>\n                       <li class=\"list-group-item\"><a [routerLink]=\"['acts']\">ACTS</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n<!--accordian ends-->\n    </div>\n    <div class=\"col-md-8\" id=\"rightSide\"><div class=\"members_cont\"> \n   \n<router-outlet></router-outlet>\n      </div>\n      </div>\n  </div>\n  </div>\n </section>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentComponent = (function () {
    function ContentComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.name = auth;
            }
        });
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent.prototype.logout = function () {
        this.af.auth.logout();
        this.router.navigateByUrl('/email_auth');
    };
    ContentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("../../../../../src/app/content/content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/content.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ContentComponent);
    return ContentComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/content.component.js.map

/***/ }),

/***/ "../../../../../src/app/day-donations/day-donations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day-donations/day-donations.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/day-donations/day-donations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayDonationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DayDonationsComponent = (function () {
    function DayDonationsComponent() {
        this.state = '';
    }
    DayDonationsComponent.prototype.ngOnInit = function () {
    };
    DayDonationsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day-donations',
            template: __webpack_require__("../../../../../src/app/day-donations/day-donations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day-donations/day-donations.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], DayDonationsComponent);
    return DayDonationsComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day-donations.component.js.map

/***/ }),

/***/ "../../../../../src/app/day1-1/day1-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n\n.five_per{\n    font-size: 2.2rem;\n}\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: left;\n}\n\n.cont{\n     margin: auto;\n    text-align: left;\n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day1-1/day1-1.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n     DAY 1: BEING PURPOSE DRIVEN WITH YOUR TITHING\n    </h1>\n    </div>\n\n  </div>\n\n\n</div>\n<div class=\"cont\">  \n    <p>\nPlease diligently follow every line of instruction to get the most out of this devotional.\n</p>\n  <div class=\"direct\">\n    <div class=\"next\"><a [routerLink]=\"['/content/day1_2']\">Next>></a></div>\n</div>\n</div>\n</div>\n\n</div>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/day1-1/day1-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day11Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Day11Component = (function () {
    function Day11Component(router) {
        this.router = router;
        this.state = '';
    }
    Day11Component.prototype.ngOnInit = function () {
    };
    Day11Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day1-1',
            template: __webpack_require__("../../../../../src/app/day1-1/day1-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day1-1/day1-1.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], Day11Component);
    return Day11Component;
    var _a;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day1-1.component.js.map

/***/ }),

/***/ "../../../../../src/app/day1-2/day1-2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day1-2/day1-2.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 1: THE SPIRITUAL MATTER\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\n   Question to Consider : \n</h4>\n    <p>\nWhat is my aim for tithing?\n</p>\n<h4 class=\"question\">Response to Consider:\n</h4>\n<p>I am tithing with the aim to: \n</p>\n<ol>\n  <li>Build strong personal relationship with God \n  </li>\n  <li>Cultivate the integrity of His personal presence in my life\n  </li>\n</ol>\n\n<h4 class=\"question\">Question:</h4>\n<p>Why is this the aim for my tithing?\n</p>\n\n<h4 class=\"question\">Insightful Commentary\n</h4>By Samuel Kirk Mills\n<p>Abraham’s tithing to Melchizedek shows his pursuit of personal relations with God. Melchizedek’s declaration — “And he blessed him, and said, Blessed be Abram of the most high God, possessor of heaven and earth: And blessed be the most high God, which hath delivered thine enemies into thy hand,” (Genesis 14:19–20), revealed the personal nature of God and His personal influence to Abraham. And so, by the declaration of Melchizedek, Abraham came to know that God is personal, and that He can be related to personally. Abraham’s tithing therefore was a choice to relate to God, personally. The choice Abraham made to relate to God personally by tithing was the indication that his tithing was a pursuit of personal relationship with God. Following his tithing, Abraham was greatly strengthened in his personal relationship with God. \n</p>\n<ul>\n  <li>God established an everlasting covenant with him.</li>\n  <li>Abraham no longer built altars in relating to God</li>\n  <li>Abraham began having personal conversations with God</li>\n</ul>\n\n<h4 class=\"question\">The Basis of the Aim of Tithing\n</h4>\n<p>The strengthening of Abraham’s personal relations with God following his tithing is what gives us the aim of Church tithing as a pursuit of building strong personal relations with God.\n\n</p>\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\n  Take a few moment to ponder and/or meditate on the responses, the commentary, and the basis for the aim of Church tithing. Internalize and let them settle in your spirit/heart, and mind.\n\n</p>\n</div>\n</div>\n\n</div>\n <div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day1_1']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day1_3']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day1-2/day1-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day12Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day12Component = (function () {
    function Day12Component() {
        this.state = '';
    }
    Day12Component.prototype.ngOnInit = function () {
    };
    Day12Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day1-2',
            template: __webpack_require__("../../../../../src/app/day1-2/day1-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day1-2/day1-2.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day12Component);
    return Day12Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day1-2.component.js.map

/***/ }),

/***/ "../../../../../src/app/day1-3/day1-3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day1-3/day1-3.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 1: THE IMPORTANCE OF THE SPIRITUAL MATTER\n\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\n   Question to Consider : \n</h4>\n    <p>\nDo I have to be bothered with the pursuit of personal relationship with God?\n</p>\n<h4 class=\"question\">Response to Ponder:\n</h4>\n<p><strong>Yes</strong>. It is part of being Christian to have a strong personal relationship with God, which will strengthen your trusting, and loving relations with Him.\n\n</p>\n\n<h4 class=\"question\">Scripture Reading\n</h4>\n<p>Scripture reading has a way of implanting in our hearts a deep yeaning and appreciation of God.\n\n</p>\n\n<h4 class=\"question\">Psalm 42:1–2 \n\n</h4>\n<p>As a deer pants for flowing streams, so pants my soul for you, O God. My soul thirsts for God, for the living God. When shall I come and appear before God?\n</p>\n\n\n<h4 class=\"question\">Psalm 63:6 \n\n</h4>\n<p>I think about you before I go to sleep, and my thoughts turn to you during the night.\n\n</p>\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\n  Take a few moments to ponder, and/or meditate on the scriptures you have just read. Internalize the meaning each brings to you by the help of the Holy Spirit; let that meaning settle in your spirit and mental consciousness.\n\n</p>\n</div>\n</div>\n\n</div>\n\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day1_2']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day1_4']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day1-3/day1-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day13Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day13Component = (function () {
    function Day13Component() {
        this.state = '';
    }
    Day13Component.prototype.ngOnInit = function () {
    };
    Day13Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day1-3',
            template: __webpack_require__("../../../../../src/app/day1-3/day1-3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day1-3/day1-3.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day13Component);
    return Day13Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day1-3.component.js.map

/***/ }),

/***/ "../../../../../src/app/day1-4/day1-4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day1-4/day1-4.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n DAY 1: SPIRITUAL IMPARTATION\n\n\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\n  A Moment of Prayer\n\n</h4>\n    <p>\nPrayer has a way of allowing the Holy Spirit to form in our hearts Christian values, virtues, and principles, for them to be noticeable in our living lifestyle.\n\n</p>\n<p>You are now going to talk to God concerning growth in your personal relationship with Him.\n</p>\n\n\n<h4 class=\"question\"> Prayer Points\n</h4>\n\n<ul>\n<li>Thank God for the gift of the integrity of His personal presence to you\n</li>\n<li>Pray, asking the Holy Spirit to form in your heart, a yearning for God that would deepen your love for him\n</li>\n<li>Pray, requesting that the Holy Spirit will form in you a heart of certainty concerning the personal presence of God, so that you will act trusting God accordingly\n</li>\n<li>Pray for the Holy Spirit to grant the you ability to hear God \n</li>\n<li>Worship the Lord for granting your requests\n</li>\n\n\n</ul>\n\n<h4 class=\"question\">Listening to Hear from God\n\n</h4>\n<p>Please remain quiet and listen to hear God speak to you in your heart concerning what you have read about Him, and what you have talked to Him about, and/or what He would like you to know and or to do.\n\n\n</p>\n\n<h4 class=\"question\">Notes\n</h4>\n\n<ul>\n<li> In your journal, please write down what in your heart you heard God spoke to you about. \n</li>\n<li> Using Google Search, or any other efficient Search tool, please find and write down a corresponding scripture or bible verse to what you heard God spoke to you about in your heart\n</li>\n\n</ul>\n\n\n<h4 class=\"question\">Psalm 63:6 \n\n</h4>\n<p>I think about you before I go to sleep, and my thoughts turn to you during the night.\n\n</p>\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\n  Take a few moments to ponder, and/or meditate on the scriptures you have just read. Internalize the meaning each brings to you by the help of the Holy Spirit; let that meaning settle in your spirit and mental consciousness.\n\n</p>\n</div>\n</div>\n\n</div>\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day1_3']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day1Donate']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day1-4/day1-4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day14Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day14Component = (function () {
    function Day14Component() {
        this.state = '';
    }
    Day14Component.prototype.ngOnInit = function () {
    };
    Day14Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day1-4',
            template: __webpack_require__("../../../../../src/app/day1-4/day1-4.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day1-4/day1-4.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day14Component);
    return Day14Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day1-4.component.js.map

/***/ }),

/***/ "../../../../../src/app/day1-5/day1-5.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n\n.modal-content {padding: 1rem;}\n.btn-primary{\n        box-shadow: 2px 2px 11px #666666;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n\n}\n\n.it{\n    font-style: italic;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day1-5/day1-5.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 1: TEST YOURSELF\n\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\n  What do you know concerning the Aim of Church tithing? \n \n</h4>\n    <p>\n1). It is Abraham’s tithing that gives us the aim of Church tithing, when he got to know from Melchizedek that God is personal and can be related to personally.\n</p>\n\n<ul class=\"it\">\n    <li>True</li>\n    <li>False</li>\n</ul>\n\n<p>2). What indication is there that the aim of Abraham’s tithing was a pursuit of building and cultivating personal relationship with God?\n</p>\n<ul class=\"it\">\n    <li>A. Following his tithing, Abraham began to have personal conversations with God, instead of building altars\n    </li>\n    <li>B. He went to his father’s house in Haran to share his great benefits in obeying God\n    </li>\n    <li>C. Following his tithing, he became wealthy in gold and cattle\n    </li>\n</ul>\n\n<p>3). As the father of the Church, it is Abraham’s tithing that gives us the foundation and the legitimacy for Church tithing.\n</p>\n\n<ul class=\"it\">\n    <li>True</li>\n    <li>False</li>\n</ul>\n\n</div>\n</div>\n\n</div>\n<div class=\"sm_btn\">\n                       <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">Answers</button>\n                        </div>\n\n\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <ol>\n          <li>True</li>\n          <li>A</li>\n          <li>True</li>\n          </ol>\n    </div>\n  </div>\n</div>\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day1Donate']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/acts']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day1-5/day1-5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day15Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day15Component = (function () {
    function Day15Component() {
        this.state = '';
    }
    Day15Component.prototype.ngOnInit = function () {
    };
    Day15Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day1-5',
            template: __webpack_require__("../../../../../src/app/day1-5/day1-5.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day1-5/day1-5.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day15Component);
    return Day15Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day1-5.component.js.map

/***/ }),

/***/ "../../../../../src/app/day1-donate/day1-donate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  \n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n  \n\n\n.btn-primary{\n        box-shadow: 2px 2px 11px #666666;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n\n\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day1-donate/day1-donate.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state' class=\"first\">\n<div class=\"container\"> \n  \n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n  DONATIONS\n    </h1>\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n\n    <p>\nYour donation helps others to be uplifted in the giving of their tithes and Christian formation. \n\n</p>\n\n<div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickMe()\">Donate Online</button>\n                        </div>\n\n                        <p>We always ensure your information is safe.\n                        </p>\n</div>\n</div>\n\n</div>\n</div>\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day1_4']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day1_5']\">Next->></a></div>\n</div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/day1-donate/day1-donate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day1DonateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day1DonateComponent = (function () {
    function Day1DonateComponent() {
        this.state = '';
    }
    Day1DonateComponent.prototype.onClickMe = function () {
    };
    Day1DonateComponent.prototype.ngOnInit = function () {
    };
    Day1DonateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day1-donate',
            template: __webpack_require__("../../../../../src/app/day1-donate/day1-donate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day1-donate/day1-donate.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day1DonateComponent);
    return Day1DonateComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day1-donate.component.js.map

/***/ }),

/***/ "../../../../../src/app/day1/day1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".module1 {\n  width: 100%;\n  height: inherit;\n  position: relative;\n  height: 500px;\n  z-index: 0;\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  background: rgba(0,0,0,.6);\n  z-index: -2;\n  border-radius: 5px;\n}\n\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  z-index: -2;\n   /*background-color: #4CAF50;*/\n  \n}\n\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 4rem;\n}\n.first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n  \n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.btn-primary{\n        box-shadow: 2px 2px 11px #333333;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n    margin: auto;\n    text-align: center;\n\n}\n\n  /*\n  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fade-in {\n\topacity:0;\n\t-webkit-animation:fadeIn ease-in 1;\n\t-moz-animation:fadeIn ease-in 1;\n\tanimation:fadeIn ease-in 1;\n\n\t-webkit-animation-fill-mode:forwards;\n\t-moz-animation-fill-mode:forwards;\n\tanimation-fill-mode:forwards;\n\n\t-webkit-animation-duration:0.75s;\n\t-moz-animation-duration:0.75s;\n\tanimation-duration:0.75s;\n}\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day1/day1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\" style=\"background-image: url('assets/images/flower.jpg');\" [@fallIn]='state'>\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n      Day 1 \n    </h1>\n    </div>\n    <div>\n      The aim of church tithing\n    </div>\n    <div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/content/day1_1']\">Begin</button>\n                        </div>\n  </div></div></div></div>\n  <div class=\"direct\">\n    <div class=\"next\"><a [routerLink]=\"['/content/day1_1']\">Next>></a></div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/day1/day1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day1Component = (function () {
    function Day1Component() {
        this.state = '';
    }
    Day1Component.prototype.ngOnInit = function () {
    };
    Day1Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day1',
            template: __webpack_require__("../../../../../src/app/day1/day1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day1/day1.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day1Component);
    return Day1Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day1.component.js.map

/***/ }),

/***/ "../../../../../src/app/day2-1/day2-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n\n.five_per{\n    font-size: 2.2rem;\n}\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: left;\n}\n\n.cont{\n     margin: auto;\n    text-align: left;\n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day2-1/day2-1.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n    DAY 2: ACKNOWLEDGING GOD’S PERSONAL INFLUENCE IN YOUR LIFE\n    </h1>\n    </div>\n\n  </div>\n\n\n</div>\n<div class=\"cont\">  \n    <p>\nPlease diligently follow every line of instruction to get the most out of this devotional.\n</p>\n  <div class=\"direct\">\n    <div class=\"next\"><a [routerLink]=\"['/content/day2_2']\">Next>></a></div>\n</div>\n</div>\n</div>\n\n</div>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/day2-1/day2-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day21Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day21Component = (function () {
    function Day21Component() {
        this.state = '';
    }
    Day21Component.prototype.ngOnInit = function () {
    };
    Day21Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day2-1',
            template: __webpack_require__("../../../../../src/app/day2-1/day2-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day2-1/day2-1.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day21Component);
    return Day21Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day2-1.component.js.map

/***/ }),

/***/ "../../../../../src/app/day2-2/day2-2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day2-2/day2-2.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 2: THE SPIRITUAL MATTER\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\n   Question to Consider : \n</h4>\n    <p>\nWhat is my objective persuasion for tithing?\n</p>\n<h4 class=\"question\">Response to Consider:\n</h4>\n<p>\n  I am tithing with the objective persuasion of acknowledging God’s personal influence in my life; demonstrating that God is the source of my life,\n</p>\n\n\n<h4 class=\"question\">Question:</h4>\n<p>Why is this the objective of my tithing?\n</p>\n\n<h4 class=\"question\">Insightful Commentary\n</h4>By Samuel Kirk Mills\n<p>\nIn the land of his nativity that is Ur of Mesopotamia, before God appeared to him, Abraham served other gods (Joshua 24). In serving other gods, it was most likely that Abraham viewed God only as an impersonal Being. The building of an altar at any time God appeared to him was a key indication that Abraham’s view of God only as impersonal was not renewed, when he was initially brought into the Land of Canaan. Thus, the building of an altar at any time God appeared to him was Abraham’s way of relating to God impersonally. Abraham gained the knowledge of the view of God that He is also personal, when Melchizedek declared to him the personal influence of God in the winning of the battle against the kings. Abraham’s belief in the revealed nature of God as personal and His personal influence in his life formed the objective reason for his tithing. Abraham’s tithing was an acknowledgment he gave to the revealed personal influence of God in his life.   \n</p>\n\n\n<h4 class=\"question\">The Basis of the Aim of Tithing\n</h4>\n<p>The tithing of Abraham as a recognition of God’s personal influence in his life is what gives us the objective of Church tithing as giving acknowledgement to God’s personal influence in our lives, glorifying God as the source of our lives, even the things we do to earn for our living on earth.\n\n</p>\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\n  Take a few moment to ponder and/or meditate on the responses, the commentary, and the basis for the aim of Church tithing. Internalize and let them settle in your spirit/heart, and mind. \n\n</p>\n</div>\n</div>\n\n</div>\n <div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day2_1']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day2_3']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day2-2/day2-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day22Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day22Component = (function () {
    function Day22Component() {
        this.state = '';
    }
    Day22Component.prototype.ngOnInit = function () {
    };
    Day22Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day2-2',
            template: __webpack_require__("../../../../../src/app/day2-2/day2-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day2-2/day2-2.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day22Component);
    return Day22Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day2-2.component.js.map

/***/ }),

/***/ "../../../../../src/app/day2-3/day2-3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day2-3/day2-3.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 2: THE IMPORTANCE OF THE SPIRITUAL MATTER\n\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\n   Question to Consider : \n</h4>\n    <p>\nIs God really a personal influence in my life? Is He really the source of my life, and who provides for my daily living?\n\n</p>\n<h4 class=\"question\">Response to Ponder:\n</h4>\n<p><strong>Yes</strong>. It is part of being Christian to acknowledge the personal influence of God in your life.\n</p>\n<p><strong>Yes</strong>. It is part of being Christian to acknowledge God as the source of your life, and that will help you to depend strongly on Him for His provisions concerning every aspect of your life. \n\n</p>\n\n<h4 class=\"question\">Scripture Reading\n</h4>\n<p>Scripture reading has a way of implanting in our hearts a deep yeaning and appreciation of God.\n\n</p>\n\n<h4 class=\"question\">Acts 17:28\n\n</h4>\n<p>For in him we live, and move, and have our being.\n</p>\n\n\n<h4 class=\"question\">Philippians 2:13\n\n</h4>\n<p>For it is God who works in you, both to will and to work for his good pleasure. \n</p>\n\n<h4 class=\"question\">Deuteronomy 8:17–18 \n</h4>\n<p>Beware lest you say in your heart, “My power and the might of my hand have gotten me this wealth.” You shall remember the LORD your God, for it is he who gives you power to get wealth that he may confirm his covenant that he swore to your fathers, as it is this day.\n</p>\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\n  Take a few moments to ponder, and/or meditate on the scriptures you have just read. Internalize the meaning each brings to you by the help of the Holy Spirit; let that meaning settle in your spirit and mental consciousness.\n</p>\n</div>\n</div>\n\n</div>\n\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day2_2']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day2_4']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day2-3/day2-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day23Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day23Component = (function () {
    function Day23Component() {
        this.state = '';
    }
    Day23Component.prototype.ngOnInit = function () {
    };
    Day23Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day2-3',
            template: __webpack_require__("../../../../../src/app/day2-3/day2-3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day2-3/day2-3.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day23Component);
    return Day23Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day2-3.component.js.map

/***/ }),

/***/ "../../../../../src/app/day2-4/day2-4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day2-4/day2-4.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n  DAY 2: SPIRITUAL IMPARTATION\n\n\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\n  A Moment of Prayer\n\n</h4><blockquote>\n    <p>\nPrayer has a way of allowing the Holy Spirit to form in our hearts Christian values, virtues, and principles, for them to be noticeable in our living lifestyle.\n    </p>\n</blockquote>\n<p>You are now going to talk to God concerning growth in your personal relationship with Him.\n</p>\n\n\n<h4 class=\"question\"> Prayer Points\n</h4>\n\n<ul>\n<li>Thank God for the gift of His personal influence in your life\n</li>\n<li>Pray, requesting that He will continue to open your eyes to see His personal influence in your life\n</li>\n<li>Pray, requesting that He will open your eyes to continue to see Him as your source of life\n</li>\n<li>Pray, requesting that the Holy Spirit will build in you a condition of dependability on God \n</li>\n<li>Worship the Lord for granting your requests\n</li>\n\n\n</ul>\n\n<h4 class=\"question\">Listening to Hear from God\n\n</h4>\n<p>Please remain quiet and listen to hear God speak to you in your heart concerning what you have read about Him, and what you have talked to Him about, and/or what He would like you to know and or to do.\n</p>\n\n<h4 class=\"question\">Notes\n</h4>\n\n<ul>\n<li> In your journal, please write down what in your heart you heard God spoke to you about. \n</li>\n<li> \n  Using Google Search, or any other efficient Search tool, please find and write down a corresponding scripture or bible verse to what you heard God spoke to you about in your heart\n</li>\n\n</ul>\n\n\n<!--h4 class=\"question\">Psalm 63:6 \n\n</h4>\n<p>I think about you before I go to sleep, and my thoughts turn to you during the night.\n\n</p>\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\n  Take a few moments to ponder, and/or meditate on the scriptures you have just read. Internalize the meaning each brings to you by the help of the Holy Spirit; let that meaning settle in your spirit and mental consciousness.\n\n</p-->\n</div>\n</div>\n\n</div>\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day2_3']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day2Donate']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day2-4/day2-4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day24Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day24Component = (function () {
    function Day24Component() {
        this.state = '';
    }
    Day24Component.prototype.ngOnInit = function () {
    };
    Day24Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day2-4',
            template: __webpack_require__("../../../../../src/app/day2-4/day2-4.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day2-4/day2-4.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day24Component);
    return Day24Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day2-4.component.js.map

/***/ }),

/***/ "../../../../../src/app/day2-5/day2-5.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n\n.modal-content {padding: 1rem;}\n.btn-primary{\n        box-shadow: 2px 2px 11px #666666;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n\n}\n\n.it{\n    font-style: italic;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day2-5/day2-5.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 2: TEST YOURSELF\n\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\nWhat do you know concerning the Objective of Church tithing? \n \n</h4>\n    <p>\n1). It is Abraham’s tithing that gives us the objective of Church tithing, in acknowledging the personal influence of God in his life, which He demonstrated by helping him to win the battle against the kings. \n</p>\n\n<ul class=\"it\">\n    <li>True</li>\n    <li>False</li>\n</ul>\n\n<p>2). What scriptural indication is there that the objective of Abraham’s tithing was a pursuit of acknowledging the personal influence of God in his life?\n</p>\n<ul class=\"it\">\n    <li>A. Going to the battle with his 318 trained men, whom he armed  \n\n    </li>\n    <li>B. Melchizedek helping him to know that the winning of his battle against the kings was by the personal help of God\n\n    </li>\n    <li>C. Following his tithing, he became wealthy in gold and cattle\n\n    </li>\n</ul>\n\n<p>3). As the father of the Church, it is Abraham’s tithing that gives us the foundation and the legitimacy for Church tithing.\n\n</p>\n\n<ul class=\"it\">\n    <li>True</li>\n    <li>False</li>\n</ul>\n\n</div>\n</div>\n\n</div>\n<div class=\"sm_btn\">\n                       <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">Answers</button>\n                        </div>\n\n\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <ol>\n          <li>True</li>\n          <li>B</li>\n          <li>True</li>\n          </ol>\n    </div>\n  </div>\n</div>\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day2Donate']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/acts']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day2-5/day2-5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day25Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day25Component = (function () {
    function Day25Component() {
        this.state = '';
    }
    Day25Component.prototype.ngOnInit = function () {
    };
    Day25Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day2-5',
            template: __webpack_require__("../../../../../src/app/day2-5/day2-5.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day2-5/day2-5.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day25Component);
    return Day25Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day2-5.component.js.map

/***/ }),

/***/ "../../../../../src/app/day2-donate/day2-donate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  \n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n  \n\n\n.btn-primary{\n        box-shadow: 2px 2px 11px #666666;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n\n\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day2-donate/day2-donate.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state' class=\"first\">\n<div class=\"container\"> \n  \n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n  DONATIONS\n    </h1>\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n\n    <p>\nYour donation helps others to be uplifted in the giving of their tithes and Christian formation. \n\n</p>\n\n<div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickMe()\">Donate Online</button>\n                        </div>\n\n                        <p>We always ensure your information is safe.\n                        </p>\n</div>\n</div>\n\n</div>\n</div>\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day2_4']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day2_5']\">Next->></a></div>\n</div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/day2-donate/day2-donate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day2DonateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day2DonateComponent = (function () {
    function Day2DonateComponent() {
        this.state = '';
    }
    Day2DonateComponent.prototype.onClickMe = function () {
    };
    Day2DonateComponent.prototype.ngOnInit = function () {
    };
    Day2DonateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day2-donate',
            template: __webpack_require__("../../../../../src/app/day2-donate/day2-donate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day2-donate/day2-donate.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day2DonateComponent);
    return Day2DonateComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day2-donate.component.js.map

/***/ }),

/***/ "../../../../../src/app/day2/day2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary{\n        box-shadow: 2px 2px 11px #333333;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n    margin: auto;\n    text-align: center;\n\n}\n.module1 {\n  width: 100%;\n  height: inherit;\n  position: relative;\n  height: 500px;\n  z-index: 0;\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  background: rgba(0,0,0,.6);\n  z-index: -2;\n  border-radius: 5px;\n}\n\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  z-index: -2;\n   /*background-color: #4CAF50;*/\n  \n}\n\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 4rem;\n}\n.first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n  \n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day2/day2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\" style=\"background-image: url('assets/images/flower7.jpg');\" [@fallIn]='state'>\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n      Day 2 \n    </h1>\n    </div>\n    <div>\n      The Objective of church tithing\n    </div>\n     <div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/content/day2_1']\">Begin</button>\n                        </div>\n  </div></div></div></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/day2/day2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day2Component = (function () {
    function Day2Component() {
        this.state = '';
    }
    Day2Component.prototype.ngOnInit = function () {
    };
    Day2Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day2',
            template: __webpack_require__("../../../../../src/app/day2/day2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day2/day2.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day2Component);
    return Day2Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day2.component.js.map

/***/ }),

/***/ "../../../../../src/app/day3-1/day3-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n\n.five_per{\n    font-size: 2.2rem;\n}\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: left;\n}\n\n.cont{\n     margin: auto;\n    text-align: left;\n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day3-1/day3-1.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n  DAY 3: RECKONING WITH THE SPIRITUAL BENEFITS OF YOUR TITHING\n    </h1>\n    </div>\n\n  </div>\n\n\n</div>\n<div class=\"cont\">  \n    <p>\nPlease diligently follow every line of instruction to get the most out of this devotional.\n\n</p>\n  <div class=\"direct\">\n    <div class=\"next\"><a [routerLink]=\"['/content/day3_2']\">Next>></a></div>\n</div>\n</div>\n</div>\n\n</div>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/day3-1/day3-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day31Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day31Component = (function () {
    function Day31Component() {
        this.state = '';
    }
    Day31Component.prototype.ngOnInit = function () {
    };
    Day31Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day3-1',
            template: __webpack_require__("../../../../../src/app/day3-1/day3-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day3-1/day3-1.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day31Component);
    return Day31Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day3-1.component.js.map

/***/ }),

/***/ "../../../../../src/app/day3-2/day3-2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day3-2/day3-2.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 3: THE SPIRITUAL MATTER\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\n   Question to Consider : \n</h4>\n    <p>\nWhat is my goal in tithing God?\n\n</p>\n<h4 class=\"question\">Response to Consider:\n</h4>\n<p>\nI am tithing with the goal to: \n</p>\n<p>\n  Grow in my Christian faith. That I will experience more of the integrity of God in my life, that I will trust God more, that I will love God more, and that I will live more holy to God.\n\n</p>\n\n\n<h4 class=\"question\">Question:</h4>\n<p>Why is this the goal of my tithing?\n\n</p>\n\n<h4 class=\"question\">Insightful Commentary\n</h4>By Samuel Kirk Mills\n<p>\nBefore his tithing in Genesis 14, Genesis 11, 12, and 13 clearly showed that Abraham was wealthy, but  relatively poorer in his spiritual and personal relations with God. There are 3 key behaviors of Abraham that indicated that before his tithing he was relatively poorer in his personal relations with God when he was initially brought to the Land of Canaan: </p>\n<ol>\n<li>\n   Building altars when God appears to him\n</li>\n<li>\n  Compromising on Sarah when he faced the threat of losing her and his life\n</li>\n<li>\n  Going to the battle against the kings without consulting God. These behaviors pointed out 3 things in Abraham: \n  <ul>\n    <li>Abraham’s impersonal relations with God </li>\n    <li>Abraham’s weakness concerning his trust in God</li>\n    <li>Abraham’s lack in his dependency on God. \nFollowing his tithing, Abraham was still wealthy, but became richer in his spiritual and personal relations with God. Abraham matured greatly in his personal relations with God marked by the increasing integrity of God’s personal presence in his life, his trust, love and holiness to God. \n</li>\n  </ul>\n  </li>\n\n</ol>\n\n<h4 class=\"question\">The Basis of the Goal of Tithing\n</h4>\n<p>\n  Abraham’s exponential growth in his personal relations with the Lord following his tithing is what gives us the goal of Church tithing as a point of grace for growth in our trusting, and loving relations with God. \n\n</p>\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\n  Take a few moment to ponder and/or meditate on the responses, the commentary, and the basis for the aim of Church tithing. Internalize and let them settle in your spirit/heart, and mind. \n\n</p>\n</div>\n</div>\n\n</div>\n <div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day3_1']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day3_3']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day3-2/day3-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day32Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day32Component = (function () {
    function Day32Component() {
        this.state = '';
    }
    Day32Component.prototype.ngOnInit = function () {
    };
    Day32Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day3-2',
            template: __webpack_require__("../../../../../src/app/day3-2/day3-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day3-2/day3-2.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day32Component);
    return Day32Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day3-2.component.js.map

/***/ }),

/***/ "../../../../../src/app/day3-3/day3-3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day3-3/day3-3.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 3: THE IMPORTANCE OF THE SPIRITUAL MATTER\n    </h1>\n  </div>\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\n   Question to Consider : \n</h4>\n    <p>\nDo I really have to bother with growth in my trusting and loving relations with God?\n</p>\n<h4 class=\"question\">Response to Ponder:\n</h4>\n<p><strong>Yes</strong>. It is part of being Christian to trust God, to love God, and to be holy to God, which helps you to consider the personal presence of God in your life.\n</p>\n\n\n<h4 class=\"question\">Scripture Reading\n</h4>\n<p>Scripture reading has a way of implanting in our hearts a deep yeaning and appreciation of God.\n\n</p>\n\n<h4 class=\"question\">Matthew 22:37 \n\n\n</h4>\n<p>And he said to him, “You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the great and first commandment.” \n\n</p>\n\n\n<h4 class=\"question\">Proverbs 30:5 \n</h4>\n<p>Every word of God is pure: he is a shield unto them that put their trust in him.\n\n</p>\n\n<h4 class=\"question\">1 Peter 1:14–16 \n\n</h4>\n<p>\n  As obedient children, do not be conformed to the passions of your former ignorance, but as he who called you is holy, you also be holy in all your conduct, since it is written, “You shall be holy, for I am holy.” \n</p>\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\n  Take a few moments to ponder, and/or meditate on the scriptures you have just read. Internalize the meaning each brings to you by the help of the Holy Spirit; let that meaning settle in your spirit and mental consciousness.\n</p>\n</div>\n</div>\n\n</div>\n\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day3_2']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day3_4']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day3-3/day3-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day33Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day33Component = (function () {
    function Day33Component() {
        this.state = '';
    }
    Day33Component.prototype.ngOnInit = function () {
    };
    Day33Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day3-3',
            template: __webpack_require__("../../../../../src/app/day3-3/day3-3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day3-3/day3-3.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day33Component);
    return Day33Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day3-3.component.js.map

/***/ }),

/***/ "../../../../../src/app/day3-4/day3-4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day3-4/day3-4.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner1\">\n        <div class=\"text_over\">\n          <h1 class=\"five_per\">\n            DAY 3: SPIRITUAL IMPARTATION\n          </h1>\n        </div>\n      </div>\n      <div class=\"cont\">\n        <h4 class=\"question\">\n          A Moment of Prayer\n\n        </h4>\n        <p>\n          Prayer has a way of allowing the Holy Spirit to form in our hearts Christian values, virtues, and principles, for them to\n          be noticeable in our living lifestyle.\n\n        </p>\n        <p>You are now going to talk to God concerning the personal influence of God in your life.\n        </p>\n\n\n        <h4 class=\"question\"> Prayer Points\n        </h4>\n\n        <ul>\n          <li>Thank God for the gift of spiritual growth in your life\n\n          </li>\n          <li>Pray, requesting that He will continue to grant you the inclination in seeking to trust Him\n\n          </li>\n          <li>Pray, requesting that He will continue to grant you the passion in seeking to love Him \n\n          </li>\n          <li>Pray, requesting that He will continue to grant you the desire in seeking to live in holiness to Him \n\n          </li>\n          <li>Worship the Lord for granting your requests\n\n          </li>\n\n\n        </ul>\n\n        <h4 class=\"question\">Listening to Hear from God\n\n        </h4>\n        <p>Please remain quiet and listen to hear God speak to you in your heart concerning what you have read about Him, and what you have talked to Him about, and/or what He would like you to know and or to do.\n\n        </p>\n\n        <h4 class=\"question\">Notes\n        </h4>\n\n        <ul>\n          <li> In your journal, please write down what in your heart you heard God spoke to you about. \n          </li>\n          <li>  Using Google Search, or any other efficient Search tool, please find and write down a corresponding scripture or bible verse to what you heard God spoke to you about in your heart\n\n          </li>\n\n        </ul>\n\n\n        <!--h4 class=\"question\">Psalm 63:6 \n\n</h4>\n<p>I think about you before I go to sleep, and my thoughts turn to you during the night.\n\n</p>\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\n  Take a few moments to ponder, and/or meditate on the scriptures you have just read. Internalize the meaning each brings to you by the help of the Holy Spirit; let that meaning settle in your spirit and mental consciousness.\n\n</p-->\n      </div>\n    </div>\n\n  </div>\n  <div class=\"direct\">\n    <div class=\"prev\">\n      <a [routerLink]=\"['/content/day3_3']\">\n        <<-Prev.</a>\n    </div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day3Donate']\">Next->></a></div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/day3-4/day3-4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day34Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day34Component = (function () {
    function Day34Component() {
        this.state = '';
    }
    Day34Component.prototype.ngOnInit = function () {
    };
    Day34Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day3-4',
            template: __webpack_require__("../../../../../src/app/day3-4/day3-4.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day3-4/day3-4.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day34Component);
    return Day34Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day3-4.component.js.map

/***/ }),

/***/ "../../../../../src/app/day3-5/day3-5.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n\n.modal-content {padding: 1rem;}\n.btn-primary{\n        box-shadow: 2px 2px 11px #666666;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n\n}\n\n.it{\n    font-style: italic;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day3-5/day3-5.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 3: TEST YOURSELF\n\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\nWhat do you know concerning the Goal of Church tithing? \n</h4>\n    <p>\n1). It is Abraham’s tithing that gives us the goal of Church tithing, by the occurrence of growth in his trusting and loving relations with God, following the giving of his tithes to Melchizedek\n</p>\n\n<ul class=\"it\">\n    <li>True</li>\n    <li>False</li>\n</ul>\n\n<p>2). What scriptural indications are there that Abraham was relatively poorer in his personal relations with God, before he gave his tithes?\n</p>\n<ul class=\"it\">\n    <li>A. His association with the king of Sodom, offering a peace treaty with the Canaanites  \n    </li>\n    <li>B. Following his tithing, he became wealthy in gold and cattle\n    </li>\n    <li>C. He will build an altar, when God appears to him. Compromises on Sarah, not consulting God, before going to the battle\n    </li>\n</ul>\n\n<p>3). Following his tithing Abraham will no longer build altars in his relations with God. Instead, he began to have personal conversations with God.\n</p>\n\n<ul class=\"it\">\n    <li>True</li>\n    <li>False</li>\n</ul>\n\n</div>\n</div>\n\n</div>\n<div class=\"sm_btn\">\n                       <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">Answers</button>\n                        </div>\n\n\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <ol>\n          <li>True</li>\n          <li>C</li>\n          <li>True</li>\n          </ol>\n    </div>\n  </div>\n</div>\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day3Donate']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/acts']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day3-5/day3-5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day35Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day35Component = (function () {
    function Day35Component() {
        this.state = '';
    }
    Day35Component.prototype.ngOnInit = function () {
    };
    Day35Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day3-5',
            template: __webpack_require__("../../../../../src/app/day3-5/day3-5.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day3-5/day3-5.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day35Component);
    return Day35Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day3-5.component.js.map

/***/ }),

/***/ "../../../../../src/app/day3-donate/day3-donate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  \n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n  \n\n\n.btn-primary{\n        box-shadow: 2px 2px 11px #666666;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n\n\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day3-donate/day3-donate.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state' class=\"first\">\n<div class=\"container\"> \n  \n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n  DONATIONS\n    </h1>\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n\n    <p>\nYour donation helps others to be uplifted in the giving of their tithes and Christian formation. \n\n</p>\n\n<div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickMe()\">Donate Online</button>\n                        </div>\n\n                        <p>We always ensure your information is safe.\n                        </p>\n</div>\n</div>\n\n</div>\n</div>\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day3_4']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day3_5']\">Next->></a></div>\n</div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/day3-donate/day3-donate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day3DonateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day3DonateComponent = (function () {
    function Day3DonateComponent() {
        this.state = '';
    }
    Day3DonateComponent.prototype.onClickMe = function () {
    };
    Day3DonateComponent.prototype.ngOnInit = function () {
    };
    Day3DonateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day3-donate',
            template: __webpack_require__("../../../../../src/app/day3-donate/day3-donate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day3-donate/day3-donate.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day3DonateComponent);
    return Day3DonateComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day3-donate.component.js.map

/***/ }),

/***/ "../../../../../src/app/day3/day3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary{\n        box-shadow: 2px 2px 11px #333333;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n    margin: auto;\n    text-align: center;\n\n}\n\n.module1 {\n  width: 100%;\n  height: inherit;\n  position: relative;\n  height: 500px;\n  z-index: 0;\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  background: rgba(0,0,0,.6);\n  z-index: -2;\n  border-radius: 5px;\n}\n\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  z-index: -2;\n   /*background-color: #4CAF50;*/\n  \n}\n\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 4rem;\n}\n.first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n  \n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day3/day3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\" style=\"background-image: url('assets/images/flower6.jpg');\" [@fallIn]='state'>\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n      Day 3\n    </h1>\n    </div>\n    <div>\n      The Goal of tithing\n    </div>\n     <div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/content/day3_1']\">Begin</button>\n                        </div>\n  </div></div></div></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/day3/day3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day3Component = (function () {
    function Day3Component() {
        this.state = '';
    }
    Day3Component.prototype.ngOnInit = function () {
    };
    Day3Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day3',
            template: __webpack_require__("../../../../../src/app/day3/day3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day3/day3.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day3Component);
    return Day3Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day3.component.js.map

/***/ }),

/***/ "../../../../../src/app/day4-1/day4-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n\n.five_per{\n    font-size: 2.2rem;\n}\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: left;\n}\n\n.cont{\n     margin: auto;\n    text-align: left;\n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day4-1/day4-1.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\nDAY 4: TALKING TO GOD CONCERNING HIS CHURCH\n\n    </h1>\n    </div>\n\n  </div>\n\n\n</div>\n<div class=\"cont\">  \n    <p>\nPlease diligently follow every line of instruction to get the most out of this devotional.\n\n</p>\n  <div class=\"direct\">\n    <div class=\"next\"><a [routerLink]=\"['/content/day4_2']\">Next>></a></div>\n</div>\n</div>\n</div>\n\n</div>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/day4-1/day4-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day41Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day41Component = (function () {
    function Day41Component() {
        this.state = '';
    }
    Day41Component.prototype.ngOnInit = function () {
    };
    Day41Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day4-1',
            template: __webpack_require__("../../../../../src/app/day4-1/day4-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day4-1/day4-1.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day41Component);
    return Day41Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day4-1.component.js.map

/***/ }),

/***/ "../../../../../src/app/day4-2/day4-2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day4-2/day4-2.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 4: THE SPIRITUAL MATTER\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\n   Question to Consider : \n</h4>\n    <p>\nWhat is my purpose in tithing God?\n</p>\n<h4 class=\"question\">Response to Consider:\n</h4>\n<p>\nI am tithing with the purpose of: \n \n</p>\n<p>\n Resourcing and or contributing to the High Priestly Ministry of Christ to the Church, for their Christian formation – that is the birthing, nurturing, and the maturing of their Christian life.\n\n</p>\n\n\n<h4 class=\"question\">Question:</h4>\n<p>Why is this the purpose of my tithing?\n</p>\n\n<h4 class=\"question\">Insightful Commentary\n</h4>By Samuel Kirk Mills\n<p>\nThe Bible gives us enough information about Melchizedek and Abraham that allows us to carefully ponder on what God was about in getting them to engage to the intent that He would work in Abraham to tithe to Melchizedek.  Concerning Melchizedek, we are told that the office of Christ’s High Priestly Ministry is after the order of Melchizedek (Hebrews 5:5-6). Abraham, we are told is the father of the Christian faith, the Church of Christ for that matter (Romans 4:11-13). These scriptural references should enlighten us that the engagement between Melchizedek and Abraham in Genesis Chapter 14 was not a simple random human encounter. For what they each represent in the redemptive work of God concerning mankind for the cause of Christ and His Kingdom, It was an extraordinary event, purposed and planned by God to take place. \n </p>\n<p>\n  It should indicate to us that through Melchizedek, God was introducing His priestly requirement that Christ will come to fulfill for the church, and that through Abraham, He was equally establishing the unique type of giving that the church would be made to give for the catering of the priestly service of Christ on earth. Today, the substance of what is given is in the form of money and or other physical properties. We can pair Melchizedek and Christ, Abraham and the church to establish an analogous relations that bring out the purpose of Church tithing.\n</p>\n<p>\n  In Abraham was the Church — (Galatians 3:7)\n</p>\n<p>\n  In Melchizedek was Christ — (Hebrews 7:17)\n</p>\n<p>\n  Abraham’s tithing to Melchizedek was the Church tithing to Christ\n</p>\n\n<h4 class=\"question\">The Basis of the Goal of Tithing\n</h4>\n<p>\n  The analogy that Abraham’s tithing to Melchizedek was the Church tithing to the High Priestly Ministry Christ is what gives us the purpose of Church tithing as a unique type of giving for the monetary/in-kind resourcing of the High Priestly Ministry of Christ to the Church on earth.\n</p>\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\n  Take a few moment to ponder and/or meditate on the responses, the commentary, and the basis for the aim of Church tithing. Internalize and let them settle in your spirit/heart, and mind.\n\n</p>\n</div>\n</div>\n\n</div>\n <div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day4_1']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day4_3']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day4-2/day4-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day42Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day42Component = (function () {
    function Day42Component() {
        this.state = '';
    }
    Day42Component.prototype.ngOnInit = function () {
    };
    Day42Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day4-2',
            template: __webpack_require__("../../../../../src/app/day4-2/day4-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day4-2/day4-2.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day42Component);
    return Day42Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day4-2.component.js.map

/***/ }),

/***/ "../../../../../src/app/day4-3/day4-3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day4-3/day4-3.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 4: THE IMPORTANCE OF THE SPIRITUAL MATTER\n    </h1>\n  </div>\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\n   Question to Consider : \n</h4>\n    <p>\nDo I really have to bother with the High Priestly Ministry of Christ to the Church?\n\n</p>\n<h4 class=\"question\">Response to Ponder:\n</h4>\n<p><strong>Yes</strong>. It is part of being Christian to be actively involved in the work concerning the birthing, nurturing and the maturing faith life of the heirs of salvation for the glorious kingdom of God that is taking place in your local church.\n</p>\n<p><strong>Yes</strong>. Since Abraham the father of the Church was made to tithed to Melchizedek, the priest of the Most High God, and Christ’s Priestly Office being after his order, it is part of being Christian to tithe to the High Priestly Ministry of Christ to the Church\n</p>\n\n\n<h4 class=\"question\">Scripture Reading\n</h4>\n<p>Scripture reading has a way of implanting in our hearts a deep yeaning and appreciation of God.\n</p>\n\n<h4 class=\"question\">Hebrews 6:17-20 \n</h4>\n<p>Wherein God, willing more abundantly to shew unto the heirs of promise the immutability of his counsel, confirmed it by an oath:  That by two immutable things, in which it was impossible for God to lie, we might have a strong consolation, who have fled for refuge to lay hold upon the hope set before us:  Which hope we have as an anchor of the soul, both sure \n</p>\n\n<h4 class=\"question\">Matthew 6:33\n</h4>\n<p>But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.\n</p>\n\n<h4 class=\"question\">Acts 20:35\n\n</h4>\n<p>\n  I have shewed you all things, how that so laboring ye ought to support the weak, and to remember the words of the Lord Jesus, how he said, It is more blessed to give than to receive\n</p>\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\nTake a few moments to ponder, and/or meditate on the scriptures you have just read. Internalize the meaning each brings to you by the help of the Holy Spirit; let that meaning settle in your spirit and mental consciousness.\n</p>\n</div>\n</div>\n\n</div>\n\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day4_2']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day4_4']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day4-3/day4-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day43Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day43Component = (function () {
    function Day43Component() {
        this.state = '';
    }
    Day43Component.prototype.ngOnInit = function () {
    };
    Day43Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day4-3',
            template: __webpack_require__("../../../../../src/app/day4-3/day4-3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day4-3/day4-3.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day43Component);
    return Day43Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day4-3.component.js.map

/***/ }),

/***/ "../../../../../src/app/day4-4/day4-4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day4-4/day4-4.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner1\">\n        <div class=\"text_over\">\n          <h1 class=\"five_per\">\n            DAY 4: SPIRITUAL IMPARTATION\n          </h1>\n        </div>\n      </div>\n      <div class=\"cont\">\n        <h4 class=\"question\">\n          A Moment of Prayer\n\n        </h4>\n        <p>\n         Prayer has a way of allowing the Holy Spirit to form in our hearts Christian values, virtues, and principles, for them to be noticeable in our living lifestyle.\n\n        </p>\n        <p>You are now going to talk to God concerning the personal influence of God in your life.\n  </p>\n\n\n        <h4 class=\"question\"> Prayer Points\n        </h4>\n\n        <ul>\n          <li>Pray for your local church to be strong in love and oneness and in the power of the Holy Spirit \n\n          </li>\n          <li>Pray for the effectual ministry of your pastor and leaders of your local church\n\n          </li>\n          <li>Pray, requesting that the Lord will grant you grace to use the gift of the Holy Spirit in you for the equipping and edification of your God-given church \n\n          </li>\n          <li>Pray for the church of Christ in general and that God will add to the number those who are to be saved, nurtured, and matured in Christ\n\n          </li>\n          <li>Pray concerning the soon coming of our Lord, Jesus Christ\n          </li>\n<li>Worship the Lord for granting your requests\n</li>\n        </ul>\n\n        <h4 class=\"question\">Listening to Hear from God\n\n        </h4>\n        <p>Please remain quiet and listen to hear God speak to you in your heart concerning what you have read about Him, and what you have talked to Him about, and/or what He would like you to know and or to do.\n        </p>\n\n        <h4 class=\"question\">Notes\n        </h4>\n\n        <ul>\n          <li> In your journal, please write down what in your heart you heard God spoke to you about. \n  </li>\n          <li>  Using Google Search, or any other efficient Search tool, please find and write down a corresponding scripture or bible verse to what you heard God spoke to you about in your heart\n          </li>\n\n        </ul>\n\n\n        <!--h4 class=\"question\">Psalm 63:6 \n\n</h4>\n<p>I think about you before I go to sleep, and my thoughts turn to you during the night.\n\n</p>\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\n  Take a few moments to ponder, and/or meditate on the scriptures you have just read. Internalize the meaning each brings to you by the help of the Holy Spirit; let that meaning settle in your spirit and mental consciousness.\n\n</p-->\n      </div>\n    </div>\n\n  </div>\n  <div class=\"direct\">\n    <div class=\"prev\">\n      <a [routerLink]=\"['/content/day4_3']\">\n        <<-Prev.</a>\n    </div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day4_5']\">Next->></a></div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/day4-4/day4-4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day44Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day44Component = (function () {
    function Day44Component() {
        this.state = '';
    }
    Day44Component.prototype.ngOnInit = function () {
    };
    Day44Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day4-4',
            template: __webpack_require__("../../../../../src/app/day4-4/day4-4.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day4-4/day4-4.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day44Component);
    return Day44Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day4-4.component.js.map

/***/ }),

/***/ "../../../../../src/app/day4-5/day4-5.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  \n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n  \n\n\n.btn-primary{\n        box-shadow: 2px 2px 11px #666666;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n\n\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day4-5/day4-5.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state' class=\"first\">\n<div class=\"container\"> \n  \n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n  DONATIONS\n    </h1>\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n\n    <p>\nYour donation helps others to be uplifted in the giving of their tithes and Christian formation. \n\n</p>\n\n<div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickMe()\">Donate Online</button>\n                        </div>\n\n                        <p>We always ensure your information is safe.\n                        </p>\n</div>\n</div>\n\n</div>\n</div>\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day4_4']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day4_6']\">Next->></a></div>\n</div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/day4-5/day4-5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day45Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day45Component = (function () {
    function Day45Component() {
        this.state = '';
    }
    Day45Component.prototype.onClickMe = function () {
    };
    Day45Component.prototype.ngOnInit = function () {
    };
    Day45Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day4-5',
            template: __webpack_require__("../../../../../src/app/day4-5/day4-5.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day4-5/day4-5.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day45Component);
    return Day45Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day4-5.component.js.map

/***/ }),

/***/ "../../../../../src/app/day4-6/day4-6.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n\n.modal-content {padding: 1rem;}\n.btn-primary{\n        box-shadow: 2px 2px 11px #666666;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n\n}\n\n.it{\n    font-style: italic;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day4-6/day4-6.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 4: TEST YOURSELF\n\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\nWhat do you know concerning the Purpose of Church tithing? \n</h4>\n    <p>\n1). It is Abraham’s tithing that gives us the purpose of Church tithing – as a unique type of giving for the (monetary/in-kind) resourcing of the High Priestly Ministry of Christ to the Church on earth. \n</p>\n\n<ul class=\"it\">\n    <li>True</li>\n    <li>False</li>\n</ul>\n\n<p>2). What indication is there that God established in Abraham the purpose of Church tithing as a unique type of giving, for the resourcing of the High Priestly Ministry of Christ to the Church on earth?\n</p>\n<ul class=\"it\">\n    <li>A. There is no such indication, since Abraham randomly tithed \n    </li>\n    <li>B. In making Abraham the father of the Church, God purposed and planned that he will tithe to Melchizedek, who was a type of Christ’s High Priesthood\n </li>\n    <li>C. Melchizedek coming along with bread and wine, which he shared with Abraham \n </li>\n</ul>\n\n<p>3). Abraham’s tithing was out of a cultural practice that he rendered to Melchizedek; it has nothing to do with the Church of the living God\n</p>\n\n<ul class=\"it\">\n    <li>True</li>\n    <li>False</li>\n</ul>\n\n</div>\n</div>\n\n</div>\n<div class=\"sm_btn\">\n                       <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">Answers</button>\n                        </div>\n\n\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <ol>\n          <li>True</li>\n          <li>B</li>\n          <li>False</li>\n          </ol>\n    </div>\n  </div>\n</div>\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day4_5']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/acts']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day4-6/day4-6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day46Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day46Component = (function () {
    function Day46Component() {
        this.state = '';
    }
    Day46Component.prototype.ngOnInit = function () {
    };
    Day46Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day4-6',
            template: __webpack_require__("../../../../../src/app/day4-6/day4-6.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day4-6/day4-6.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day46Component);
    return Day46Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day4-6.component.js.map

/***/ }),

/***/ "../../../../../src/app/day4/day4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary{\n        box-shadow: 2px 2px 11px #333333;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n    margin: auto;\n    text-align: center;\n\n}\n\n.module1 {\n  width: 100%;\n  height: inherit;\n  position: relative;\n  height: 500px;\n  z-index: 0;\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  background: rgba(0,0,0,.6);\n  z-index: -2;\n  border-radius: 5px;\n}\n\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  z-index: -2;\n   /*background-color: #4CAF50;*/\n  \n}\n\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 4rem;\n}\n.first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n  \n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day4/day4.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\" style=\"background-image: url('assets/images/flower5.jpg');\" [@fallIn]='state'>\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n      Day 4\n    </h1>\n    </div>\n    <div>\n      The Purpose of Church Tithing\n    </div>\n     <div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/content/day4_1']\">Begin</button>\n                        </div>\n  </div></div></div></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/day4/day4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day4Component = (function () {
    function Day4Component() {
        this.state = '';
    }
    Day4Component.prototype.ngOnInit = function () {
    };
    Day4Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day4',
            template: __webpack_require__("../../../../../src/app/day4/day4.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day4/day4.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day4Component);
    return Day4Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day4.component.js.map

/***/ }),

/***/ "../../../../../src/app/day5-1/day5-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n\n.five_per{\n    font-size: 2.2rem;\n}\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: left;\n}\n\n.cont{\n     margin: auto;\n    text-align: left;\n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day5-1/day5-1.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\nDAY 5: DEDICATING YOUR LIFE TO GOD\n    </h1>\n    </div>\n  </div>\n</div>\n<div class=\"cont\">  \n    <p>\nPlease diligently follow every line of instruction to get the most out of this devotional.\n</p>\n  <div class=\"direct\">\n    <div class=\"next\"><a [routerLink]=\"['/content/day5_2']\">Next>></a></div>\n</div>\n</div>\n</div>\n\n</div>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/day5-1/day5-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day51Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day51Component = (function () {
    function Day51Component() {
        this.state = '';
    }
    Day51Component.prototype.ngOnInit = function () {
    };
    Day51Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day5-1',
            template: __webpack_require__("../../../../../src/app/day5-1/day5-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day5-1/day5-1.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day51Component);
    return Day51Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day5-1.component.js.map

/***/ }),

/***/ "../../../../../src/app/day5-2/day5-2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day5-2/day5-2.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 5: THE SPIRITUAL MATTER\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\n   Question to Consider : \n</h4>\n    <p>\nWhat is the sacred significance of the giving of my tithes at church?\n\n</p>\n<h4 class=\"question\">Response to Consider:\n</h4>\n<p>\nI am tithing to:\n \n</p>\n<p>\n Strengthen my covenant and sacred relations with God.\n\n</p>\n\n\n<h4 class=\"question\">Question:</h4>\n<p>Why is this the sacred significance for the giving of my tithes?\n\n</p>\n\n<h4 class=\"question\">Insightful Commentary\n</h4>By Samuel Kirk Mills\n<p>\nThrough Melchizedek, God established the sacred nature of Church tithing by the sanctification and the consecration that he administered to Abraham, when he received his tithes; and through the personal dedication of Abraham to Him, by separating himself from the king of Sodom (the world and its lust), when he presented his tithes. \n </p>\n<p>\nWe know Melchizedek consecrated Abraham, when he received his tithes, based on the patriarch’s admission to the king of Sodom:  “I have lift up mine hand unto the LORD, the most high God, the possessor of heaven and earth, that I will not take from a thread even to a shoelatchet, and that I will not take any thing that is thine,” (Genesis 14:22-23). <strong>When did Abraham lift his hand to the Lord?</strong> The phrase ‘the most high God, the possessor of heaven and earth’ were part of the words Melchizedek had used to address Abraham to suggest that the patriarch most likely took that vow of consecration during their encounter, when he tithed. In connection with the consecration to serve and to live for God only, Abraham also took the stance to separate himself from the world and its lust (the king of Sodom).   \n</p>\n\n<h4 class=\"question\">The Basis of the Sacred Nature of Tithing\n</h4>\n<p>\nEssentially, it is Melchizedek’s sanctification and consecration of Abraham, when he received his tithes, and Abraham’s dedication to God to live and to serve Him alone, separating himself from the world and its lust (the king of Sodom), when he gave his tithes that give us the sacred significance of Church tithing. \n</p>\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\n  Take a few moment to ponder and/or meditate on the responses, the commentary, and the basis for the sacred significance of Church tithing. Internalize and let them settle in your spirit and mental consciousness.\n</p>\n</div>\n</div>\n\n</div>\n <div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day5_1']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day5_3']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day5-2/day5-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day52Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day52Component = (function () {
    function Day52Component() {
        this.state = '';
    }
    Day52Component.prototype.ngOnInit = function () {
    };
    Day52Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day5-2',
            template: __webpack_require__("../../../../../src/app/day5-2/day5-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day5-2/day5-2.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day52Component);
    return Day52Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day5-2.component.js.map

/***/ }),

/***/ "../../../../../src/app/day5-3/day5-3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day5-3/day5-3.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 5: THE IMPORTANCE OF THE SPIRITUAL MATTER\n    </h1>\n  </div>\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\n   Question to Consider : \n</h4>\n    <p>\nDo I really have to bother with strengthening my covenant and sacred relations with God?\n\n</p>\n<h4 class=\"question\">Response to Ponder:\n</h4>\n<p><strong>Yes</strong>. It is part of being Christian to remain constantly sanctified and consecrated to the Lord, which will keep you in an unbroken fellowship with Him\n</p>\n\n\n<h4 class=\"question\">Scripture Reading\n</h4>\n<p>Scripture reading has a way of implanting in our hearts a deep yeaning and appreciation of God.\n</p>\n\n<h4 class=\"question\">Genesis 17:1–2 \n\n</h4>\n<p>And when Abram was ninety-nine years old, the LORD appeared to Abram, and said unto him, I am the Almighty God; walk before me, and be thou perfect. And I will make my covenant between me and thee, and will multiply thee exceedingly. \n</p>\n\n<h4 class=\"question\">Romans 12:1–2\n\n</h4>\n<p>I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service. And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God. \n</p>\n\n\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\nTake a few moments to ponder, and/or meditate on the scriptures you have just read. Internalize the meaning each brings to you by the help of the Holy Spirit; let that meaning settle in your spirit and mental consciousness.\n</p>\n</div>\n</div>\n\n</div>\n\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day5_2']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day5_4']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day5-3/day5-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day53Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day53Component = (function () {
    function Day53Component() {
        this.state = '';
    }
    Day53Component.prototype.ngOnInit = function () {
    };
    Day53Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day5-3',
            template: __webpack_require__("../../../../../src/app/day5-3/day5-3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day5-3/day5-3.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day53Component);
    return Day53Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day5-3.component.js.map

/***/ }),

/***/ "../../../../../src/app/day5-4/day5-4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day5-4/day5-4.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner1\">\n        <div class=\"text_over\">\n          <h1 class=\"five_per\">\n            DAY 5: SPIRITUAL IMPARTATION\n          </h1>\n        </div>\n      </div>\n      <div class=\"cont\">\n        <h4 class=\"question\">\n          A Moment of Prayer\n\n        </h4>\n        <p>\nPrayer has a way of allowing the Holy Spirit to form in our hearts Christian values, virtues, and principles, for them to be noticeable in our living lifestyle.\n        </p>\n        <p>You are now going to talk to God concerning keeping your covenant relationship with Him in sanctification and consecration. \n </p>\n\n\n        <h4 class=\"question\"> Prayer Points\n        </h4>\n\n        <ul>\n          <li>Thank God for the gift of His unbroken fellowship with you\n\n          </li>\n          <li>Pray, requesting that the Holy Spirit will build a condition within you against any friendship with the world and its lust\n\n          </li>\n          <li>Pray, requesting that the Holy Spirit will constantly quicken you to be fervent prayer \n\n          </li>\n          <li>Pray, requesting that the Holy Spirit will constantly quicken you to remain in the reading, meditating, and the studying of the scriptures\n\n          </li>\n          <li>Worship the Lord for granting your requests\n  </li>\n        </ul>\n\n        <h4 class=\"question\">Listening to Hear from God\n        </h4>\n        <p>Please remain quiet and listen to hear God speak to you in your heart concerning what you have read about Him, and what you have talked to Him about, and/or what He would like you to know and or to do.\n </p>\n\n        <h4 class=\"question\">Notes\n        </h4>\n\n        <ul>\n          <li> In your journal, please write down what in your heart you heard God spoke to you about. \n </li>\n          <li> Using Google Search, or any other efficient Search tool, please find and write down a corresponding scripture or bible verse to what you heard God spoke to you about in your heart\n </li>\n\n        </ul>\n\n\n        <!--h4 class=\"question\">Psalm 63:6 \n\n</h4>\n<p>I think about you before I go to sleep, and my thoughts turn to you during the night.\n\n</p>\n\n<h4 class=\"question\">A Moment of Reflection\n\n</h4>\n<p>\n  Take a few moments to ponder, and/or meditate on the scriptures you have just read. Internalize the meaning each brings to you by the help of the Holy Spirit; let that meaning settle in your spirit and mental consciousness.\n\n</p-->\n      </div>\n    </div>\n\n  </div>\n  <div class=\"direct\">\n    <div class=\"prev\">\n      <a [routerLink]=\"['/content/day5_3']\">\n        <<-Prev.</a>\n    </div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day5_5']\">Next->></a></div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/day5-4/day5-4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day54Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day54Component = (function () {
    function Day54Component() {
        this.state = '';
    }
    Day54Component.prototype.ngOnInit = function () {
    };
    Day54Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day5-4',
            template: __webpack_require__("../../../../../src/app/day5-4/day5-4.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day5-4/day5-4.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day54Component);
    return Day54Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day5-4.component.js.map

/***/ }),

/***/ "../../../../../src/app/day5-5/day5-5.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  \n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n  \n\n\n.btn-primary{\n        box-shadow: 2px 2px 11px #666666;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n\n\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day5-5/day5-5.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state' class=\"first\">\n<div class=\"container\"> \n  \n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n  DONATIONS\n    </h1>\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n\n    <p>\nYour donation helps others to be uplifted in the giving of their tithes and Christian formation. \n\n</p>\n\n<div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickMe()\">Donate Online</button>\n                        </div>\n\n                        <p>We always ensure your information is safe.\n                        </p>\n</div>\n</div>\n\n</div>\n</div>\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day5_4']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day5_6']\">Next->></a></div>\n</div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/day5-5/day5-5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day55Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day55Component = (function () {
    function Day55Component() {
        this.state = '';
    }
    Day55Component.prototype.onClickMe = function () {
    };
    Day55Component.prototype.ngOnInit = function () {
    };
    Day55Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day5-5',
            template: __webpack_require__("../../../../../src/app/day5-5/day5-5.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day5-5/day5-5.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day55Component);
    return Day55Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day5-5.component.js.map

/***/ }),

/***/ "../../../../../src/app/day5-6/day5-6.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n\n.modal-content {padding: 1rem;}\n.btn-primary{\n        box-shadow: 2px 2px 11px #666666;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n\n}\n\n.it{\n    font-style: italic;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day5-6/day5-6.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    TEST YOURSELF\n\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\nWhat do you know concerning the Sacred significance of Church tithing? \n \n</h4>\n    <p>\n1). It is Abraham’s tithing that gives us the Sacred significance of Church tithing, when he gave tithes to Melchizedek, in association with dedicating his life to live and to serve God alone.\n</p>\n\n<ul class=\"it\">\n    <li>True</li>\n    <li>False</li>\n</ul>\n\n<p>2). What indication is there in the scriptures that God established the sacred significance of Church tithing with Abraham?\n</p>\n<ul class=\"it\">\n    <li>A. Making Abraham to give his tithes in connection with dedicating his life to live and to serve Him alone\n</li>\n    <li>B. Making Abraham to strike a deal with the King of Sodom to get back Lot , his nephew\n </li>\n    <li>C. Making Abraham to turn his back to the ruins of Ai, with his face toward Bethel\n </li>\n</ul>\n\n<p>3). As the father of the Church, it is Abraham’s tithing that gives us the foundation and the legitimacy for Church tithing\n</p>\n\n<ul class=\"it\">\n    <li>True</li>\n    <li>False</li>\n</ul>\n\n</div>\n</div>\n\n</div>\n<div class=\"sm_btn\">\n                       <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">Answers</button>\n                        </div>\n\n\n<div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <ol>\n          <li>True</li>\n          <li>A</li>\n          <li>True</li>\n          </ol>\n    </div>\n  </div>\n</div>\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day5_5']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/acts']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day5-6/day5-6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day56Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day56Component = (function () {
    function Day56Component() {
        this.state = '';
    }
    Day56Component.prototype.ngOnInit = function () {
    };
    Day56Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day5-6',
            template: __webpack_require__("../../../../../src/app/day5-6/day5-6.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day5-6/day5-6.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day56Component);
    return Day56Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day5-6.component.js.map

/***/ }),

/***/ "../../../../../src/app/day5/day5.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary{\n        box-shadow: 2px 2px 11px #333333;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n    margin: auto;\n    text-align: center;\n\n}\n\n.module1 {\n  width: 100%;\n  height: inherit;\n  position: relative;\n  height: 500px;\n  z-index: 0;\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  background: rgba(0,0,0,.6);\n  z-index: -2;\n  border-radius: 5px;\n}\n\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  z-index: -2;\n   /*background-color: #4CAF50;*/\n  \n}\n\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 4rem;\n}\n.first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n  \n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day5/day5.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\" style=\"background-image: url('assets/images/flower4.jpg');\" [@fallIn]='state'>\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n      Day 5\n    </h1>\n    </div>\n    <div>\n      The Sacred Significance of Church Tithing\n    </div>\n     <div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/content/day5_1']\">Begin</button>\n                        </div>\n  </div></div></div></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/day5/day5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day5Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day5Component = (function () {
    function Day5Component() {
        this.state = '';
    }
    Day5Component.prototype.ngOnInit = function () {
    };
    Day5Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day5',
            template: __webpack_require__("../../../../../src/app/day5/day5.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day5/day5.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day5Component);
    return Day5Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day5.component.js.map

/***/ }),

/***/ "../../../../../src/app/day6-1/day6-1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n\n.five_per{\n    font-size: 2.2rem;\n}\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: left;\n}\n\n.cont{\n     margin: auto;\n    text-align: left;\n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day6-1/day6-1.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\nDAY 6: SETTING ASIDE YOUR TITHES TO GOD\n    </h1>\n    </div>\n  </div>\n</div>\n<div class=\"cont\">  \n    <p>\nPlease diligently follow every line of instruction to get the most out of this devotional.\n</p>\n  <div class=\"direct\">\n    <div class=\"next\"><a [routerLink]=\"['/content/day6_2']\">Next>></a></div>\n</div>\n</div>\n</div>\n\n</div>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/day6-1/day6-1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day61Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day61Component = (function () {
    function Day61Component() {
        this.state = '';
    }
    Day61Component.prototype.ngOnInit = function () {
    };
    Day61Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day6-1',
            template: __webpack_require__("../../../../../src/app/day6-1/day6-1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day6-1/day6-1.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day61Component);
    return Day61Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day6-1.component.js.map

/***/ }),

/***/ "../../../../../src/app/day6-2/day6-2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day6-2/day6-2.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 6: THE SPIRITUAL MATTER\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 class=\"question\">\n  You are now about to set your tithes aside.\n\n</h4>\n    <p>\nBut, before you finally do that prayerfully read to yourself, the Church Tithing Creed.\n</p>\n\n</div>\n</div>\n\n</div>\n <div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day6_1']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day6_3']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day6-2/day6-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day62Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day62Component = (function () {
    function Day62Component() {
        this.state = '';
    }
    Day62Component.prototype.ngOnInit = function () {
    };
    Day62Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day6-2',
            template: __webpack_require__("../../../../../src/app/day6-2/day6-2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day6-2/day6-2.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day62Component);
    return Day62Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day6-2.component.js.map

/***/ }),

/***/ "../../../../../src/app/day6-3/day6-3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     /*margin: auto;*/\n   width: 50%;\n      padding-top: 1rem;\n     \n}\n.cont h4{\n line-height: 1.5;\n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day6-3/day6-3.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n   DAY 6: THE CHURCH TITHING CREED\n    </h1>\n   \n   \n\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n<h4 >\n  My Father, the Lord, the Most-High God\nThe possessor of heaven and earth\nYour most holy name be praised forevermore \nI bring you my tithes in honor of your holy name \nAnd by my tithes, I acknowledge you as my personal source\n</h4>\n<h4>Through my work to put bread on the table\nAnd to meet other needs in my life\nIn tithing, I dedicate to you my spirit, soul, and body\nIn tithing, I consecrate myself to you, most Holy Father \nWhile I renounce my friendship with the world and its lust\n</h4>\n<h4>I petition that you will daily fill my life with the Holy Spirit\nThat I may grow in knowing you and your Holy Son, Jesus Christ \n</h4>\n\n<h4>To whom I tithe, as the High Priest of the Most-High God \nTo His Church, and to me, a member of His Holy Church \n</h4>\n\n<h4>And for the furtherance of your kingdom, my Father\nGrant me an abiding personal relationship with you \nTo help my trust, my love, and my holiness to you\nFor yours is the kingdom, the power, and the glory\nForever and ever.</h4>\n\n</div>\n\n\n</div>\n\n</div>\n <div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day6_2']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day6_4']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day6-3/day6-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day63Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day63Component = (function () {
    function Day63Component() {
        this.state = '';
    }
    Day63Component.prototype.ngOnInit = function () {
    };
    Day63Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day6-3',
            template: __webpack_require__("../../../../../src/app/day6-3/day6-3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day6-3/day6-3.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day63Component);
    return Day63Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day6-3.component.js.map

/***/ }),

/***/ "../../../../../src/app/day6-4/day6-4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day6-4/day6-4.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 6: TO GOD BE THE GLORY!\n    </h1>\n  </div>\n</div>\n\n    <p>\nFollowing the declaration of the creed, you’ll now put your tithes in the designated envelope to be presented at your local church.\n</p>\n\n\n\n\n</div>\n</div>\n\n\n\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day6_3']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day6_5']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day6-4/day6-4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day64Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day64Component = (function () {
    function Day64Component() {
        this.state = '';
    }
    Day64Component.prototype.ngOnInit = function () {
    };
    Day64Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day6-4',
            template: __webpack_require__("../../../../../src/app/day6-4/day6-4.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day6-4/day6-4.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day64Component);
    return Day64Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day6-4.component.js.map

/***/ }),

/***/ "../../../../../src/app/day6-5/day6-5.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day6-5/day6-5.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state'>\n\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n    DAY 6: A FACT TO REMEMBER \n\n    </h1>\n  </div>\n</div>\n\n    <p>\nThe tithe you have just set aside is no longer yours. It is God’s part of the income, the revenue, and/or what you have acquired. It is holy. It is for the exclusive use of the Lord toward His priestly work in the church. \n</p>\n\n <div class=\"cont\">\n        <h4 class=\"question\">\n         PEACE AND MANY BLESSINGS TO YOU!\n        </h4></div>\n\n\n\n</div>\n</div>\n\n\n\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day6_4']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/day6_6']\">Next->></a></div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/day6-5/day6-5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day65Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day65Component = (function () {
    function Day65Component() {
        this.state = '';
    }
    Day65Component.prototype.onClickMe = function () {
    };
    Day65Component.prototype.ngOnInit = function () {
    };
    Day65Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day6-5',
            template: __webpack_require__("../../../../../src/app/day6-5/day6-5.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day6-5/day6-5.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day65Component);
    return Day65Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day6-5.component.js.map

/***/ }),

/***/ "../../../../../src/app/day6-6/day6-6.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  \n  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n.prev{\n    float: left;\n}\n  \n\n\n.btn-primary{\n        box-shadow: 2px 2px 11px #666666;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n\n\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day6-6/day6-6.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state' class=\"first\">\n<div class=\"container\"> \n  \n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n  DONATIONS\n    </h1>\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n\n    <p>\nYour donation helps others to be uplifted in the giving of their tithes and Christian formation. \n\n</p>\n\n<div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickMe()\">Donate Online</button>\n                        </div>\n\n                        <p>We always ensure your information is safe.\n                        </p>\n</div>\n</div>\n\n</div>\n</div>\n<div class=\"direct\">\n    <div class=\"prev\"><a [routerLink]=\"['/content/day6_5']\"><<-Prev.</a></div>\n    <div class=\"next\"><a [routerLink]=\"['/content/acts']\">Next->></a></div>\n</div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/day6-6/day6-6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day66Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day66Component = (function () {
    function Day66Component() {
        this.state = '';
    }
    Day66Component.prototype.ngOnInit = function () {
    };
    Day66Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day6-6',
            template: __webpack_require__("../../../../../src/app/day6-6/day6-6.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day6-6/day6-6.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day66Component);
    return Day66Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day6-6.component.js.map

/***/ }),

/***/ "../../../../../src/app/day6/day6.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary{\n        box-shadow: 2px 2px 11px #333333;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n    margin: auto;\n    text-align: center;\n\n}\n\n.module1 {\n  width: 100%;\n  height: inherit;\n  position: relative;\n  height: 500px;\n  z-index: 0;\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  background: rgba(0,0,0,.6);\n  z-index: -2;\n  border-radius: 5px;\n}\n\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  z-index: -2;\n   /*background-color: #4CAF50;*/\n  \n}\n\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 4rem;\n}\n.first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n  \n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/day6/day6.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\" style=\"background-image: url('assets/images/flower2.jpg');\" [@fallIn]='state'>\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n      Day 6\n    </h1>\n    </div>\n    <div>\nSetting Aside the Tithes\n    </div>\n     <div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/content/day6_1']\">Begin</button>\n                        </div>\n  </div></div></div></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/day6/day6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day6Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day6Component = (function () {
    function Day6Component() {
        this.state = '';
    }
    Day6Component.prototype.ngOnInit = function () {
    };
    Day6Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-day6',
            template: __webpack_require__("../../../../../src/app/day6/day6.component.html"),
            styles: [__webpack_require__("../../../../../src/app/day6/day6.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], Day6Component);
    return Day6Component;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/day6.component.js.map

/***/ }),

/***/ "../../../../../src/app/donations/donations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .direct{\n      padding-top: 1rem;\n      width: 100%;\n  }\n  .next{\n      float: right;\n  }\n\n\n.btn-primary{\n        box-shadow: 2px 2px 11px #666666;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n\n}\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n        margin-left: 1rem;\n  \n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.question{\n       font-family: 'Passion One', cursive;\n        text-align: left;\n}\n\n.inner1{\n    margin: auto;\n    width: 100%;\n    color: #666666;\n    \n    /*font-size: 1.2rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;*/\n  \n}\n\n.cont{\n     margin: auto;\n   \n      padding-top: 1rem;\n    \n}\n\n.five_per{\n    padding-top: 1rem;\n    font-family: 'Passion One', cursive;\n    font-size: 2.2rem;\n     text-align:left;\n}\n.container{\n    width: 60%;}\n\n    .first{\n        background-color: white;\n       height:70vh;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/donations/donations.component.html":
/***/ (function(module, exports) {

module.exports = "<section [@fallIn]='state' class=\"first\">\n<div class=\"container\"> \n  \n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n<h1 class=\"five_per\">\n  DONATIONS\n    </h1>\n  </div>\n\n\n</div>\n<div class=\"cont\"> \n\n    <p>\nYour donation helps others to be uplifted in the giving of their tithes and Christian formation. \n\n</p>\n\n<div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickMe()\">Donate Online</button>\n                        </div>\n\n                        <p>We always ensure your information is safe.\n                        </p>\n</div>\n</div>\n\n</div>\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/donations/donations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DonationsComponent = (function () {
    function DonationsComponent() {
        this.state = '';
    }
    DonationsComponent.prototype.ngOnInit = function () {
    };
    DonationsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-donations',
            template: __webpack_require__("../../../../../src/app/donations/donations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/donations/donations.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], DonationsComponent);
    return DonationsComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/donations.component.js.map

/***/ }),

/***/ "../../../../../src/app/email-auth/email-auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.first{\n  height: 100%;\n  background-color: #ffffff;\n    padding: 1rem 0 3rem 0;\n}\n.Cre{\n  margin-top: 100px;\n}\n.frm{\n    color: #333!important;\n}\n.txt{\n    color: #333;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #16a085; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.custom-button-color {\n  background-color: #16a085;\n  color: white;\n}\n\nform {\n  /*background-image: url(\"../../assets/register-bg.png\");*/\n  background-attachment: inherit;\n  background-position: center;\n  background-repeat: no-repeat;\n /* padding-top: 15%;\n  padding-left: 20%;\n  padding-right: 20%;\n  padding-bottom: 10%;\n  margin-top: 2%;*/\n}\n\n.form-group {\n  font-family: 'Roboto', sans-serif;\n  color: white;\n}\n\nh5 {\n  color: white;\n  text-align: center;\n  font-size: 24px;\n  font-family: 'Roboto', sans-serif;\n}\n\ninput {\n  opacity: .7;\n}\n\nbutton {\n  font-family: 'Roboto', sans-serif;\n  margin-top: 2%;\n}\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fade-in {\n\topacity:0;\n\t-webkit-animation:fadeIn ease-in 1;\n\tanimation:fadeIn ease-in 1;\n\n\t-webkit-animation-fill-mode:forwards;\n\tanimation-fill-mode:forwards;\n\n\t-webkit-animation-duration:0.75s;\n\tanimation-duration:0.75s;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email-auth/email-auth.component.html":
/***/ (function(module, exports) {

module.exports = "<section class =\"first\" [@fallIn]='state'>\n<div class=\"container\">\n \n        <form class=\"form-horizontal\" role=\"form\" #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n            <div class=\"row\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-4\">\n                    <div class=\"Cre\">\n                    <h3>Please Login</h3>\n                    <hr></div>\n                     <span class=\"error\" *ngIf=\"error\">{{ error }}</span>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-4\">\n                    <div class=\"form-group has-danger\">\n                        <label class=\"sr-only\" for=\"email\">E-Mail Address</label>\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                            <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\"\n                                   placeholder=\"Your email address here\" (ngModel)=\"email\" required autofocus>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\"></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label class=\"sr-only\" for=\"password\">Password</label>\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                            <input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\"\n                                   placeholder=\"Your password here\" (ngModel)=\"password\" required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\"></div>\n            </div>\n            <!--div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\" style=\"padding-top: .35rem\">\n                    <div class=\"form-check mb-2 mr-sm-2 mb-sm-0\">\n                        <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" name=\"remember\"\n                                   type=\"checkbox\" >\n                            <span style=\"padding-bottom: .15rem\">Remember me</span>\n                        </label>\n                    </div>\n                </div>\n            </div-->\n            <div class=\"row\" style=\"padding: 1rem 0 2rem 0;\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-4\">\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!formData.valid\"><i class=\"fa fa-sign-in\"></i> Login</button>\n                    <!--a class=\"btn btn-link\" href=\"/password/reset\">Forgot Your Password?</a-->                \n                    <a routerLink=\"/signup\" class=\"alc\">Don't have an account?</a>\n             \n                </div>\n                \n            </div>\n     \n        </form>\n           </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/email-auth/email-auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailAuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailAuthComponent = (function () {
    function EmailAuthComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.state = '';
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/members');
            }
        });
    }
    EmailAuthComponent.prototype.resetpassword = function () {
        //console.log('reset password button');
        // send to componet reset password
        this.router.navigate(['/reset_password']);
    };
    EmailAuthComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            // console.log(formData.value);
            this.af.auth.login({
                email: formData.value.email,
                password: formData.value.password
            }, {
                provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Password,
                method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Password,
            }).then(function (success) {
                // console.log(success);
                _this.router.navigate(['/members']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    EmailAuthComponent.prototype.ngOnInit = function () {
    };
    EmailAuthComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-email-auth',
            template: __webpack_require__("../../../../../src/app/email-auth/email-auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email-auth/email-auth.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], EmailAuthComponent);
    return EmailAuthComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/email-auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/email/email.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".frm{\n    color: #333!important;\n}\n.txt{\n    color: #333;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #16a085; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.custom-button-color {\n  background-color: #16a085;\n  color: white;\n}\n\nform {\n  /*background-image: url(\"../../assets/register-bg.png\");*/\n  background-attachment: inherit;\n  background-position: center;\n  background-repeat: no-repeat;\n /* padding-top: 15%;\n  padding-left: 20%;\n  padding-right: 20%;\n  padding-bottom: 10%;\n  margin-top: 2%;*/\n}\n\n.form-group {\n  font-family: 'Roboto', sans-serif;\n  color: white;\n}\n\nh5 {\n  color: white;\n  text-align: center;\n  font-size: 24px;\n  font-family: 'Roboto', sans-serif;\n}\n\ninput {\n  opacity: .7;\n}\n\nbutton {\n  font-family: 'Roboto', sans-serif;\n  margin-top: 2%;\n}\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fade-in {\n\topacity:0;\n\t-webkit-animation:fadeIn ease-in 1;\n\tanimation:fadeIn ease-in 1;\n\n\t-webkit-animation-fill-mode:forwards;\n\tanimation-fill-mode:forwards;\n\n\t-webkit-animation-duration:0.75s;\n\tanimation-duration:0.75s;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email/email.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div class=\"form-container\">\n    <a href=\"/home\">Go back</a>\n    <h4>Welcome to Tithing to Grow in Christ</h4>\n\n    <span class=\"error\" *ngIf=\"error\" [@fallIn]='state'>{{ error }}</span>\n\n    <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n\n<div class=\"form-group\">\n  <label for=\"email\">Email</label>\n      <input type=\"text\" placeholder=\"Email address..\" (ngModel)=\"email\" name=\"email\" class=\"txt\" required>\n</div>\n\n<div class=\"form-group\">\n  <label for=\"password\">Password</label>\n      <input type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" class=\"txt\" required>\n</div>\n\n      <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"basic-btn\">Log in</button>\n      <a routerLink=\"/signup\" class=\"alc\">Don't have an account?</a>\n  </form>\n</div-->\n\n\n<section class =\"first\">\n<div class=\"container\">\n \n        <form class=\"form-horizontal\" role=\"form\" #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n            <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\">\n                    <h2>Please Login</h2>\n                    <hr>\n                     <span class=\"error\" *ngIf=\"error\" [@fallIn]='state'>{{ error }}</span>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group has-danger\">\n                        <label class=\"sr-only\" for=\"email\">E-Mail Address</label>\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                            <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\"\n                                   placeholder=\"you@example.com\" (ngModel)=\"email\" required autofocus>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\"></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label class=\"sr-only\" for=\"password\">Password</label>\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                            <input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\"\n                                   placeholder=\"Password\" (ngModel)=\"password\" required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\"></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\" style=\"padding-top: .35rem\">\n                    <div class=\"form-check mb-2 mr-sm-2 mb-sm-0\">\n                        <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" name=\"remember\"\n                                   type=\"checkbox\" >\n                            <span style=\"padding-bottom: .15rem\">Remember me</span>\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\" style=\"padding-top: 1rem\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\">\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!formData.valid\"><i class=\"fa fa-sign-in\"></i> Login</button>\n                    <a class=\"btn btn-link\" href=\"/password/reset\">Forgot Your Password?</a>                \n                    <a routerLink=\"/signup\" class=\"alc\">Don't have an account?</a>\n                </div>\n                \n            </div>\n     \n        </form>\n           </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/email/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { LoginRegisterModel } from '../../models/login-register-model';
var EmailComponent = (function () {
    function EmailComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.state = '';
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/members');
            }
        });
    }
    EmailComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            // console.log(formData.value);
            this.af.auth.login({
                email: formData.value.email,
                password: formData.value.password
            }, {
                provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Password,
                method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Password,
            }).then(function (success) {
                // console.log(success);
                _this.router.navigate(['/members']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-email',
            template: __webpack_require__("../../../../../src/app/email/email.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email/email.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])()],
            host: { '[@moveIn]': '' }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], EmailComponent);
    return EmailComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/email.component.js.map

/***/ }),

/***/ "../../../../../src/app/faqs/faqs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faqs/faqs.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/faqs/faqs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqsComponent = (function () {
    function FaqsComponent() {
    }
    FaqsComponent.prototype.ngOnInit = function () {
    };
    FaqsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-faqs',
            template: __webpack_require__("../../../../../src/app/faqs/faqs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/faqs/faqs.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], FaqsComponent);
    return FaqsComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/faqs.component.js.map

/***/ }),

/***/ "../../../../../src/app/five-christian-persuasions/five-christian-persuasions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".module1 {\n  width: 100%;\n  height: 400px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n  background-size: cover;\n}\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  background: rgba(0,0,0,.6);\n  z-index: -2;\n}\n\n.module1 {\n  width: 100%;\n  height: 400px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n}\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 3.2rem;\n}\n#first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n\n.container{\n    width: 60%;}\n    \n    .second{\n\n    }\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/five-christian-persuasions/five-christian-persuasions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\" style=\"background-image: url('assets/images/corn_fields.jpg');\">\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n      The 5 Christian persuasions of church tithing\n    </h1>\n    </div>\n    <div>\n      Follow these five christian persuasions of church tithing to help you make your tithing count for your christian growth.\n    </div>\n  </div></div></div></div>\n</div>\n\n<section id=\"first_sec\">\n  <div class=\"container\">\n    <div class=\"row\">\n<div class=\"col-md-8\">\n  <div class=\"heading\">\n  1. THE AIM OF CHURCH TITHING\n  </div>\n  <div class=\"heading_sub\">Knowing and relating to God personally</div>\n  <div class=\"text_body\">\n    Building and cultivating personal relationship with God.<br>\n    The aim of Church Tithing is to build strong personal relationship with God, by cultivating the integrity of his personal presence in our lives. \n<br>\nIt comes from the tithing of Abraham in Genesis 14. Melchizedek’s declaration in Genesis 14:19–20 revealed the personal nature of God and His personal presence and influence in our lives to Abraham. And so, by the declaration of Melchizedek, Abraham came to know that God is personal, and that He can be related to personally. indicating that his tithing was a pursuit of building and cultivating personal relationship with God. Following his tithing, the nature of Abraham’s relations with God changed from impersonal manner to that of a person to person relations with God. The scripture registered that change by the following examples: \n\n<ol>\n <li>\tGod established an everlasting covenant with him, as between two persons. </li>\n<li>\tAbraham no longer built altars in relating to God </li>\n<li>\tAbraham began having person to person conversations with God </li>\n</ol>\n\n\n  </div>\n\n  <p>In Church tithing, we are making a pursuit of building and cultivating our personal relations with God.\n</p>\n</div>\n<div class=\"col-md-4\">\n  <div class=\"outer\"><div class=\"middle\"><div class=\"inner\">\n  <div class=\"right_sidebar\"> Menu</div>\n</div></div></div></div>\n    </div>\n    </div>\n    </section>\n\n    <!--second section-->\n <section class=\"second\">\n   <div class=\"container\">\n     <div class=\"row\">\n\n       <div class=col-md-12>\n         <div class=\"heading\">\n           2. THE OBJECTIVE OF CHURCH TITHING\n         </div>\n          <div class=\"heading_sub\">\n            Aknowledging God's personal influence in your life\n          </div>\n\n          <div class=\"text_body\">\n            The objective of Church Tithing is to acknowledge God’s personal influence in our lives, demonstrating that He is the source of our lives.\nIt comes from the tithing of Abraham in Genesis 14. He learned from Melchizedek that God was the one who personally gave his enemies into his hands, when he went to the battle against the kings; and that revealed the personal nature of God and His personal influence in his life. Abraham gave tithes of all, when he gained this knowledge about God in his life, for the establishment of the objective of Church tithing, as the father of the Church. In Church tithing, we are glorifying God as the source of our lives, even the honorable things we do to earn for our living on earth.\n\n          </div>\n       </div>\n     </div>\n\n   </div>\n    </section>\n    <!-- -->\n\n<section id=\"first_sec\">\n  <div class=\"container\">\n    <div class=\"row\">\n<div class=\"col-md-8\">\n  <div class=\"heading\">\n  3. THE GOAL OF CHURCH TITHING\n  </div>\n  <div class=\"heading_sub\">Making it count for growth in your personal relations from God</div>\n  <div class=\"text_body\">\n Opitimizing your personal relations with God\n <br>\n The goal of Church Tithing is to experience increase in the integrity of God’s presence in our lives, growing in our trusting, and loving relations with Him, and being more holy to Him.\nIt comes from the tithing of Abraham in Genesis 14. Before his tithing, it was obvious that Abraham was wealthy, but poorer in his spiritual and personal relations with God. Following his tithing, the scripture registered that he was still wealthy, but became richer in his spiritual and personal relations with God, marked by the increasing integrity of God’s personal presence and influence in his life, and observable growth in his trusting, and loving relations with God, and in his holiness to Him. As the father of the Church, the exponential growth in his spiritual and personal relations with God benchmarks these outcomes following his tithing as the goal for Church tithing. In Church tithing, we are optimizing growth in our trusting and loving relations with God, and being holy to Him.\n\n\n  </div>\n\n  \n</div>\n<div class=\"col-md-4\">\n  <div class=\"right_sidebar\"> Menu</div>\n</div>\n    </div>\n    </div>\n    </section>\n\n    <!-- -->\n\n     <section class=\"second\">\n   <div class=\"container\">\n     <div class=\"row\">\n\n       <div class=col-md-8>\n         <div class=\"heading\">\n           4. THE PURPOSE OF CHURCH TITHING\n         </div>\n          <div class=\"heading_sub\">\n            Resourcing the high Priestly Ministry of church to the church, on earth\n          </div>\n\n          <div class=\"text_body\">\n            Optimizing the economic vitality of the Local Church.<br>\n            The purpose of Church tithing is to resource the economic demands of the High Priestly Ministry of Christ on earth, by and for the Church.\nIt comes from the pattern God established with the tithing of Abraham to Melchizedek, and the tithing of the Israelites to the Aaronic Levitical priesthood. This pattern indicates that Church tithing was an envisioned purpose of God to serve as a unique type of giving to cater for the demands for the living upkeep/necessities that come with the administration of the High Priestly ministry of Christ on earth, by and for the Church. Today, the substance of what is given is in the form of money and or other in-kind physical properties. As the demand for the living upkeep/necessities are catered for, the Church is economically equipped to carry forth with her mandate of God for the birthing, nurturing, and the maturing of Church tithers in their Christian life. In Church tithing, we are uniquely giving for the monetary/in-kind resourcing of the High Priestly Ministry of Christ to the Church, on earth.\n\n          </div>\n       </div>\n       <div class=\"col-md-4\">\n<div class=\"outer\"><div class=\"middle\"><div class=\"inner\">\n         <img src=\"assets/images/Picture2.png\">\n         </div></div></div>\n       </div>\n     </div>\n\n   </div>\n    </section>\n    <!-- -->\n\n\n<section id=\"first_sec\">\n  <div class=\"container\">\n    <div class=\"row\">\n<div class=\"col-md-8\">\n  <div class=\"heading\">\n  5. THE SACRED SIGNIFICANCE OF CHURCH TITHING\n  </div>\n  <div class=\"heading_sub\">Dedicating your life to God</div>\n  <div class=\"text_body\">\nLiving and serving God alone\n <br>\nThe sacred significance of Church tithing is to consecrate our lives to God, keeping our dedication to live and to serve him alone.\nIt is rooted in the tithing of Abraham in Genesis 14. We know Melchizedek consecrated Abraham, when he received his tithes, based on the patriarch’s admission to the king of Sodom: “I have lift up mine hand unto the LORD, the most high God, the possessor of heaven and earth, that I will not take from a thread even to a shoelatchet, and that I will not take any thing that is thine,” (Genesis 14:22-23). When did Abraham lift his hand to the Lord? The phrase ‘the Most High God, the possessor of heaven and earth’ were part of the words Melchizedek had used to address Abraham to suggest that the patriarch most likely took that vow of consecration during their encounter, when he tithed. About the consecration to live and to serve God only, Abraham also took the sacred stance to separate himself from the world and its lust (represented by the king of Sodom). In Church tithing, we are distancing ourselves from the lustful things of the world, dedicating our lives to live and to serve God alone.  \n\n\n  </div>\n\n  \n</div>\n<div class=\"col-md-4\">\n  <div class=\"right_sidebar\"> Menu</div>\n</div>\n    </div>\n    </div>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/five-christian-persuasions/five-christian-persuasions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiveChristianPersuasionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FiveChristianPersuasionsComponent = (function () {
    function FiveChristianPersuasionsComponent() {
    }
    FiveChristianPersuasionsComponent.prototype.ngOnInit = function () {
    };
    FiveChristianPersuasionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-five-christian-persuasions',
            template: __webpack_require__("../../../../../src/app/five-christian-persuasions/five-christian-persuasions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/five-christian-persuasions/five-christian-persuasions.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["c" /* moveInLeft */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["d" /* moveInRight */])()]
        }), 
        __metadata('design:paramtypes', [])
    ], FiveChristianPersuasionsComponent);
    return FiveChristianPersuasionsComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/five-christian-persuasions.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.ft{\n    margin: auto;\n    text-align: center;\n    background-color: #ffffff;\n    color: #666666;\n    font-size: 1rem;\n    padding: 0.5rem;\n}\n\n.footer_sec1{\n    background-color: #1976D2;\n    margin: auto;\n    color: #ffffff;\n    position: absolute;\n    width: 100%;\n    padding: 2rem 0 0 0;\n\n\n}\n\n\n.row_foot{\n    width: 50%;\n    margin: auto;\n    padding-bottom:1rem;\n}\n\n.footer_sec{\n    text-align: center;\n    padding: 15px 0 ;\n    position: absolute;\n    width: 100%;\n    right: 0;\n    left: 0;\n    bottom: 0;\n}\na.nav-link.lg span{\n  background-color: #FFC107;\n  padding: 5px;\n  border-radius: 5px;\n \n}\n.nav-link.active span{\n    color: #ffffff!important;\n      background-color: #4CAF50;\n  padding: 5px 10px;\n  border-radius: 5px;\n  \n}\n.nav-link {\n    display: block;\n    padding: 0.5rem 0;\n     margin-top: 1.5rem;\n}\n.wd{\n    width: 100%;\n    padding: 0.3rem;\n}\n.row_foot_1{\n   \n    \n}\n.container_1{\n    width: 80%;\n    margin: auto;\n    padding-bottom: 2rem;\n}\na{\n    color: #ffffff;\n}\n.footer_title{\n \n    font-family: 'Passion One', cursive;\n    border-bottom: solid 1px #ffffff;\n    margin-bottom: 1rem;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"footer_sec1\">\n\n    <!--div class=\"row_foot\">\n<div class=\"row\">\n<div class=\"col-md-2\">Home</div>\n<div class=\"col-md-2\">About Us</div>\n<div class=\"col-md-2\">FAQs</div>\n<div class=\"col-md-2\">Contact Us</div>\n<div class=\"col-md-2\">Donations</div>\n<div class=\"col-md-2\">Connect</div>\n</div>\n    </div-->\n <!--div class=\"row_foot\">\n<div class=\"row\">\n\n<div class=\"col-md-4\"></div>\n<div class=\"col-md-4\">\n<div class=\"row\">\n<div class=\"col-sm-4\"><a href=\"https://www.facebook.com/tithingtogrowinchrist/\" target=\"_blank\"><i class=\"fa fa-facebook-square fa-2x\" aria-hidden=\"true\"></i></a></div>\n<div class=\"col-sm-4\"><a href=\"https://twitter.com/infotithing\" target=\"_blank\"><i class=\"fa fa-twitter-square fa-2x\" aria-hidden=\"true\"></i></a></div>\n<div class=\"col-sm-4\"><a href=\"https://www.youtube.com/channel/UCL9XNwlpmK8wrdoA8x-cYXQ\" target=\"_blank\"><i class=\"fa fa-youtube-square fa-2x\" aria-hidden=\"true\"></i></a></div>\n</div>\n<div class=\"col-md-4\"></div>\n</div>\n\n\n</div>\n </div-->\n\n<div class=\"container_1\">\n    <div class=\"row\">\n\n    <div class=\"col-md-6\"><div class=\"wd\">\n <div class=\"row\"><div class=\"col-sm-12\">\n   <div class=\"footer_title\">  <h3>Navigation</h3></div>\n   </div></div>\n   <div class=\"row\"><div class=\"col-sm-12\">\n     <ul>\n           <li>\n             <a class=\"\" href=\"/about_us\">About Us</a>\n       </li>\n        <li>\n             <a class=\"\" href=\"/acheving_growth_ict\">Achieving growth in our personal relationship with God in Church Tithing</a>\n       </li>\n\n <li>\n             <a class=\"\" href=\"/faqs\">FAQ's</a>\n       </li>\n\n        <li>\n             <a class=\"\" href=\"/how_i_grow\">How I grow in my loving relationship with God</a>\n       </li>\n        <li>\n             <a class=\"\" href=\"/Gods_rubric\">God's Rubric in church tithing</a>\n       </li>\n        <li>\n             <a class=\"\" href=\"/the_abraham_factor\">The Abraham Factor</a>\n       </li>\n <li>\n             <a class=\"\" href=\"/biblical_assumption_of_giving\">The Biblical assumption in church tithing</a>\n       </li>\n       \n       \n        <li>\n             <a class=\"\" href=\"/five_christain_persuasions\">The five Christian persuations of Church tithing</a>\n       </li>\n       \n        <li>\n             <a class=\"\" href=\"/the_God_factor\">The God Factor</a>\n       </li>\n        <li>\n             <a class=\"\" href=\"/the_growth_factor\">The Growth Factor</a>\n       </li>\n      \n      \n      \n       \n       \n       \n      \n       \n     </ul>\n            </div></div>\n       </div></div>\n\n       <div class=\"col-md-3\"><div class=\"wd\">\n         <div class=\"row\"><div class=\"col-sm-12\">\n     <div class=\"footer_title\"> <h3>Register for free</h3></div>\n           \n           </div></div>\n            <div class=\"row\"><div class=\"col-sm-12\">Create a free account and register to access a 6 Day devotional\n          <a class=\"nav-link active\" href=\"/members\"><span>Start Devotional</span></a>\n           </div></div>\n       </div></div>\n\n       <div class=\"col-md-3\"><div class=\"wd\">\n          <div class=\"row\"><div class=\"col-sm-12\">\n          <div class=\"footer_title\">   <h3> Connect</h3></div>\n            </div></div>\n          <div class=\"row\">\n<div class=\"col-sm-4\"><a href=\"https://www.facebook.com/tithingtogrowinchrist/\" target=\"_blank\"><i class=\"fa fa-facebook-square fa-2x\" aria-hidden=\"true\"></i></a></div>\n<div class=\"col-sm-4\"><a href=\"https://twitter.com/infotithing\" target=\"_blank\"><i class=\"fa fa-twitter-square fa-2x\" aria-hidden=\"true\"></i></a></div>\n<div class=\"col-sm-4\"><a href=\"https://www.youtube.com/channel/UCL9XNwlpmK8wrdoA8x-cYXQ\" target=\"_blank\"><i class=\"fa fa-youtube-square fa-2x\" aria-hidden=\"true\"></i></a></div>\n</div>\n         </div> \n   \n    </div></div>\n    </div>\n\n<footer>\n    <div class=\"ft\">All Rights Reserved - Tithing to grow in Christ Project - Copyright - 2017</div>\n  </footer>\n</section>\n\n<!--section class=\"footer_sec\">\n  <footer>\n    <div>All Rights Reserved - Tithing to grow in Christ Project - Copyright - 2017</div>\n  </footer>\n</section-->"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/gods-rubric/gods-rubric.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".module1 {\n    width: 100%;\n    height: 200px;\n    position: relative;\n    overflow: hidden;\n    z-index: 0;\n    background-color: #4CAF50;\n    /*#2196F3;*/\n}\n\n.inner1 {\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n    font-family: 'Passion One', cursive;\n    font-weight: 400;\n    text-align: center;\n}\n\n.outer {\n    display: table;\n    height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.module1:before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: -2;\n}\n\n.module1 {\n    width: 100%;\n    height: 200px;\n    position: relative;\n    overflow: hidden;\n    z-index: 0;\n}\n\n.module1 > .text_over {\n    position: absolute;\n    width: 100%;\n    /*padding: 20px 10px;*/\n    width: 50%;\n    color: white;\n}\n\n.module1 > .text_over > h1 {\n    color: white;\n    text-shadow: 0 1px 0 black;\n    /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n}\n\n.five_per {\n    font-size: 3.2rem;\n}\n\n.first_sec {\n    background-color: #ffffff;\n}\n\n.right_sidebar {\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n\n.container {\n    width: 60%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n}\n\n.heading {\n    font-family: 'Passion One', cursive;\n    font-size: 36px;\n}\n\n.row {\n    widows: 7%;\n    margin: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gods-rubric/gods-rubric.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\">\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner1\">\n        <div class=\"text_over\">\n          <div>\n            <h1 class=\"five_per\">\n              The God’s Rubric for Church Tithing\n            </h1>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<section class=\"first_sec\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"text_body\">\n\n          <p>\n            From educational standpoint, rubric defines in writing what is expected of the student to get a particular grade on an assignment.\n            Usually rubric has explicit criteria/categories/classifications upon which a student’s work is assessed and graded.\n          </p>\n\n          <p>\n            Is there such a rubric that God established for Church tithing? As with our unfamiliarity with the possibility of Christian\n            growth in Church tithing, because of what our traditional approach to tithing had been; in that same reason,\n            we are not conversant with the biblical fact that there is rubric for Church tithing that God established with\n            Abraham, in making him the father of the Church.\n\n          </p>\n\n          <p>\n            We will discover that the God’s Rubric for Church Tithing speaks to the things God laid out in Abraham’s tithing that are\n            to classify what constitutes Church tithing. In other words, the God’s Rubric for Church Tithing provides the\n            characteristic elements that give identity to the nature of Church tithing that God established with Abraham,\n            the father of the Church. It defines what we are to regard as Church tithing.\n\n          </p>\n          <p>\n            It is important for the community of church tithers to become conversant with the God’s Rubric for Church Tithing in consideration\n            of the imperative to achieve the credibility of what God, with the tithing of Abraham classified as Church tithing.\n            And how does Abraham’s tithing bring out the God’s Rubric for Church Tithing? Our scriptural reference is:\n\n          </p>\n          <p>\n            Genesis 14:17-22\n\n          </p>\n\n          <p>\n            From what we have read, we can now gather the things that form the God’s Rubric for Church tithing. There was fellowshipping,\n            with the fact that Melchizedek brought with him bread and wine. They had a fellowship of communion. There was\n            also the giving of the tithes, obviously stated that Abraham gave tithes of all. There was also the dedicating\n            of Abraham’s life to God, in the light of what Abraham said to the king of Sodom that he had lifted his hand\n            to the Most-High God. The dedicating of Abraham’s life to God implies committing him to the kingdom agenda of\n            God. What we have here at this engagement of Melchizedek and Abraham are four principal things:\n\n          </p>\n\n\n          <div class=\"text_squeez\">\n            <ol>\n              <li>The giving of the tithes to God</li>\n              <li>The fellowshipping with God</li>\n              <li>The dedicating of life to God</li>\n              <li>The committing to the Kingdom of God\n              </li>\n\n\n            </ol>\n          </div>\n\n          <p>\n            It is these four things that give us the God’s Rubric for Church tithing. Together, they define for us what we are to regard\n            as Church tithing. So that Church tithing is not only the giving of the tithes, but the sum of four essential\n            elements illustrated with this diagram:\n\n          </p>\n\n          <div class=\"hold_img\">\n            <img src=\"assets/images/chart2.jpg\">\n          </div>\n\n          <p>\n            The credibility of Church tithing is in these four things taking place simultaneously, when we are about it. One without\n            the others discredits the credibility of the nature of the practice of Church tithing that God had set up.\n          </p>\n\n          <p>\n            Unfortunately, what we have as a practice of Church tithing in most local churches is a heavy focus on the giving of the\n            tithes to God with little or no attention at all given to the other three elements.\n\n          </p>\n          <div class=\"hold_img\">\n            <img src=\"assets/images/Picture11.png\">\n          </div>\n          In a nutshell, the God’s Rubric for Church Tithing give evidence for a new education and a new approach to the culture and\n          practice of tithing in the local church. This new approach must then match with what God envisioned through Abraham\n          to be the practice and the outcomes of Church tithing, by and for the Church. The Tithing to Grow in Christ Devotional\n          is that ingenious approach to Church tithing designed to bring Church tithers into compliance with the God’s Rubric\n          for Church Tithing, and for them to have fulfillments in the <a href=\"five_christain_persuasions\">Five Christian Persuasions of Church Tithing;</a>          fruitfully impacting their Christian formation.\n\n\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/gods-rubric/gods-rubric.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GodsRubricComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GodsRubricComponent = (function () {
    function GodsRubricComponent() {
    }
    GodsRubricComponent.prototype.ngOnInit = function () {
    };
    GodsRubricComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-gods-rubric',
            template: __webpack_require__("../../../../../src/app/gods-rubric/gods-rubric.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gods-rubric/gods-rubric.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], GodsRubricComponent);
    return GodsRubricComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/gods-rubric.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".oval_pic{\n    border-radius: 125px;\n    width: 250px;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    text-align: center;\n    margin-bottom: 2rem;\n}\n.chart_image{\n    text-align: center;\n}\n.container_1 {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    width: 55%;\n    margin: auto;}\n\n.frnt_images{\n    margin-right: auto;\n    margin-left: auto;\n    max-width: 1280px;\n}\n.col-sm-6 > .sm_img{\n    width: 311px;\n    padding: 6px;\n}\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n\n}\n.btn-primary{\n        box-shadow: 2px 2px 11px #666666;\n        }\n\n\n#first_sec{\n    margin-top:0;\n    padding: 0;\n    background-color: white;\n    overflow: hidden;\n    box-sizing: border-box;\n}\n\n#first_sec_1{\n    margin-top:0;\n    padding: 0;\n    background-color: white;\n    overflow: hidden;\n    box-sizing: border-box;\n}\n\n.img_left_align{\n        width: 100%;\n    text-align: right;\n}\n.img_cn_align{\n    margin: auto;\n    width: inherit;\n    text-align: center;\n\n}\n\n.sec_two{\n    padding: 2rem 0 2rem;\n    border-top: 1px solid #eee;\n   /* background-color: #F0F7FA;*/\n    background-color:#D6EFFA;\n}\n\n.sec_two_text{\n      padding: 1rem 0 0 0;\n}\n\n.sec_two_text_1{\n      padding: 0rem 1rem 0 0;\n}\n\n.sec_two_text_2{\n      padding: 1rem 1rem 0 0;\n}\n.sec_two_text_3{\n padding: 1rem 0 0 0;\n text-align: left;\n}\n#sec_three{\n    padding: 2rem 0 0;\n     background-color: white;\n}\n\n#sec_four{\n    padding: 2rem 0 2rem;\n     /* background-color: #F0F7FA;*/\n    background-color:#D6EFFA;\n}\n#sec_grad{\nbackground: linear-gradient(#ffffff, #BBDEFB);/*#D6EFFA);*/\n}\n\n#sec_five{\n    padding: 2rem 0 2rem;\n    background-color: white;\n}\n#sec_six{\n    padding: 2rem 0 2rem;\n    background-color: white;\n}\n\n.main_text{\n    text-align: left;\n}\n\n\n.main_text{\n    width: 100%;\n}\n.text_title{\n    width: 100%;\n}\n.img_here{\n    width: 560px;\n    height: 315px;;\n    position: relative;\n}\n\n.big_front_img{\nborder-radius: 5px;\n}\n\n#sm-img.col-sm-6{\n    width: inherit;\n}\n#sm-img1, #sm-img2, #sm-img3{\n   \n}\n\n#left_big_image , #right_images{\n /*position: relative; */\n width: 100%;\n margin: auto;\n -webkit-box-flex: 1;\n     -ms-flex: 1 1 0%;\n         flex: 1 1 0%;\n -webkit-box-orient: vertical;\n -webkit-box-direction: normal;\n     -ms-flex-flow: column nowrap;\n         flex-flow: column nowrap;\n -webkit-box-align: stretch;\n     -ms-flex-align: stretch;\n         align-items: stretch;\npadding: 6px;\n}\n\n.text_overlay{\n    position: absolute;\n    bottom: 2%;\n    width: 90%;\n    font-size: 18px;\n    color: white;\n    font-weight: 700;\n    text-align: center;\n    line-height: 1.3rem;\n    padding: 0 0.9rem;\n}\n\n.text_overlay span{\n   \n}\n\n.small_front_img{\n    border-radius: 10px;\n        margin: auto;\n        width: 100%;\n       \n}\n#row_top{\n\n}\n#row_bot{\n\n}\n\n.center_text{\n    text-align: center;\n    padding: 2rem 0 2rem;\n    width: 60%;\n    margin: auto;\n}\n.cover_all{\n    background-color: #ffffff;\n    width: 90%;\n    height: 150px;\n    text-align: center;\n    margin: auto;\n    color: #0063B1;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n.your_tithing{\n    font-family: 'Passion One', cursive;\nfont-size: 58px;\ncolor: #4CAF50;\n}\n.center_text span{\n    border-bottom: 1px solid #999999;\n}\n.left_text{\n    text-align-last: left;\n    padding: 0rem 0 1rem;\n     color: #1976D2;\n}\n.bib_text{\n    font-family: 'Passion One', cursive;\n    margin: 0;\n    color: #1976D2;\n}\n\n.bib_text_1{\n        font-family: 'Passion One', cursive;\n    margin: 0;\n    color: #1976D2;\n    text-align: center;\n}\n.cover_bot{\n    padding: 2rem 1rem;\n}\n .p_skinny{\n    width: 60%;\n    margin: auto;\n}\n\n.module1 {\n  width: 100%;\n  height: 400px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n  background-size: cover;\n}\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  padding: 20px 10px;\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    float: left;\n    margin-left: 2rem;\n    z-index: 2;\n       font-size: 3.2rem;\n\n}\n.white_bg{\n    background-color: white;\n}\n\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  background: rgba(0,0,0,.6);\n  z-index: -2;\n}\n.inner1{\n    margin-right: auto;\n    width: 40%;\n    float: left;\n    margin-left: 2rem;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n}\n.row_foot{\n    width: 50%;\n    margin: auto;\n    padding-bottom:1rem;\n}\n.five_per{\n    font-size: 3.2rem;\n}\n\n\n\n .ln>.d-block{width: 100%;}\n \n\n\n\n\n.text_overlay{\n    position: absolute;\n    bottom: 6%;\n    width: 90%;  \n    font-size: 20px;\n    color: white;\n    font-weight: 700;\n    text-align: center;\n    line-height: 1.7rem;\n    padding: 0 0.9rem;\n}\n\n.text_overlay >span{\n   background-color: rgba(0,0,0,.6);\n   padding: 2px 5px;\n   border-radius: 5px;\n}\n.carousel-caption >h3 {\n     font-family: 'Passion One', cursive!important;\nfont-size: 56px!important;\n}\n .carousel-caption >h3 >span {\n    font-size: 92px!important;\n  letter-spacing: 3px;\n}\n\n .carousel-caption >p{\n    font-size: 32px!important;\n}\n\n\n .carousel-caption{\n    bottom: 10%!important;\n}\n\n.ln{\n    color:#ffffff;\n    bottom: 10%!important;\n    text-decoration: none;\n    width: 100%;\n}\n.ln >p{\n    font-size: 32px!important;\n}\n.ln >h3 >span {\n    font-size: 92px!important;\n  letter-spacing: 3px;\n}\n.ln >h3 {\n     font-family: 'Passion One', cursive!important;\nfont-size: 56px!important;\n}\n.blue_bg{\n    background-color: #BBDEFB;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section id=\"first_sec\" [@fallIn]=\"state\">\n\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\" >\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\" >\n    <div class=\"carousel-item active\"> <a class=\"ln\" href=\"/five_christain_persuasions\">\n      <img class=\"d-block img-fluid\" src=\"assets/images/slides/slide1.jpg\" alt=\"First slide\"></a>\n      <div class=\"carousel-caption d-none d-md-block\"><a class=\"ln\" href=\"/five_christain_persuasions\">\n    <h3><span>THE FIVE CHRISTIAN</span><br> PERSUASIONS OF CHURCH TITHING</h3>\n    <p>Making the giving of your tithes count <br>in your growth in Christ</p></a>\n  </div>\n    </div>\n    <div class=\"carousel-item\"><a class=\"ln\" href=\"/five_christain_persuasions\">\n      <img class=\"d-block img-fluid\" src=\"assets/images/slides/slide2.jpg\" alt=\"Second slide\"></a>\n      <div class=\"carousel-caption d-none d-md-block\"><a class=\"ln\" href=\"/five_christain_persuasions\">\n       <h3><span>THE FIVE CHRISTIAN</span><br> PERSUASIONS OF CHURCH TITHING</h3>\n    <p>Making the giving of your tithes count <br>in your growth in Christ</p></a>\n  </div>\n    </div>\n    <div class=\"carousel-item\"><a class=\"ln\" href=\"/five_christain_persuasions\">\n      <img class=\"d-block img-fluid\" src=\"assets/images/slides/slide3.jpg\" alt=\"Third slide\"></a>\n      <div class=\"carousel-caption d-none d-md-block\"><a class=\"ln\" href=\"/five_christain_persuasions\">\n       <h3><span>THE FIVE CHRISTIAN</span><br> PERSUASIONS OF CHURCH TITHING</h3>\n    <p>Making the giving of your tithes count <br>in your growth in Christ</p></a>\n  </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n</section>\n\n\n<section id=\"first_sec_1\">\n  \n<div class=\"container\"> \n\n  <div class=\"row\"> \n    <div class=\"col-md-3\">\n <a class=\"small_image\" href=\"/the_God_factor\"><img class=\"small_front_img\" src=\"assets/images/milky.jpg\" style=\"width:100%\">\n            <div class=\"text_overlay\">\n              <span>The God factor in church tithing</span></div>\n          </a>\n\n    </div>\n     <div class=\"col-md-3\">\n<a class=\"small_image\"  href=\"/the_abraham_factor\"><img class=\"small_front_img\" src=\"assets/images/outside.jpg\" style=\"width:100%\">\n            <div class=\"text_overlay\">\n              <span>The Abraham factor in church tithing</span></div>\n          </a>\n\n     </div>\n      <div class=\"col-md-3\">\n        <a class=\"small_image\" href=\"/the_growth_factor\"><img class=\"small_front_img\" src=\"assets/images/growth.jpg\" style=\"width:100%\">\n            <div class=\"text_overlay\">\n              <span>The Growth factor in church tithing</span></div>\n          </a>\n      </div>\n       <div class=\"col-md-3\">\n         <a class=\"small_image\" href=\"/how_i_grow\"><img class=\"small_front_img\" src=\"assets/images/phone_hand.jpg\" style=\"width:100%\">\n            <div class=\"text_overlay\">\n              <span>How I grow in my loving relationship with God</span></div>\n          </a>\n       </div>\n  </div>\n</div>\n</section>\n<!--end of section one-->\n\n\n<section class=\"sec_two\" >\n\n  <div class=\"container_1\">\n    <div class=\"row\">\n      \n       \n       <div class=\"col-md-6\">\n         <div class=\"row\">\n           <div class=\"col-sm-12\">  <div class=\"chart_image\">\n           <a href=\"/Gods_rubric\">\n          <img src=\"assets/images/chart2.jpg\" class=\"oval_pic\"></a></div></div>\n         </div>\n          <div class=\"row\">\n           <div class=\"col-sm-12\"><a href=\"/Gods_rubric\">\n                 <h3 class=\"bib_text_1\">The God’s Rubric for Church Tithing</h3></a></div>\n         </div>\n           <div class=\"row\">\n           <div class=\"col-sm-12\"> <div class=\"sec_two_text_3\">\n                    Learn about the 4 essential things that God established with Abraham that gives credibility to your practice of Church Tithing.\n                  </div></div>\n         </div>\n       </div>\n       \n        <div class=\"col-md-6\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\"> <div class=\"chart_image\"><a href=\"/biblical_assumption_of_giving\"><img src=\"assets/images/chart1.jpg\" class=\"oval_pic\"></a></div></div>\n          </div>\n           <div class=\"row\">\n           <div class=\"col-sm-12\"><a href=\"/biblical_assumption_of_giving\">\n                  <h3 class=\"bib_text_1\">The Biblical Assumption of Giving</h3></a></div>\n         </div>\n           <div class=\"row\">\n           <div class=\"col-sm-12\"><div class=\"sec_two_text_3\">\n                    Learn about the giving of your tithes out of a growing loving relation with God, set on the assumption that the more one\n                    loves, the more one gives, and the less one loves, the less one gives.\n                  </div></div>\n         </div>\n        </div>\n         \n    </div>\n  </div>\n</section>\n\n<section id=\"sec_three\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n\n        <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"sec_two_text\">\n                    <h2 class=\"bib_text\">Bernie Speller on five spiritual substances for Tithing to grow in Christ</h2>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"sec_two_text\">\n                    Bernnine Speller explains the five plus principles that pastors need to know about the benefits the Tithing to Grow in Christ\n                    devotional offers their local church, when members of their congregation combine using it with the giving\n                    of their tithes.</div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"sm_btn\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickMe()\">Try the App today</button>\n\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-5\">\n        <div class=\"img_here\">\n         <iframe width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/AJCAKWtYq4Q\" frameborder=\"0\" allowfullscreen></iframe>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--New section-->\n\n\n<section id=\"sec_grad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"center_text\">\n          <h2 class=\"your_tithing\"><span>YOUR TITHING TO GROW IN CHRIST APP</span></h2>\n        </div>\n        \n      </div>\n    </div>\n    \n\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner\">\n\n        <!-- here-->\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"left_text\">\n              <h5>EXCLUSIVELY FOR CHURCH TITHERS</h5>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"sec_two_text_1\">\n              <h2 class=\"bib_text\">Get the best out of the giving your tithes.</h2>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"sec_two_text_2\">\n              Before you give your tithes at church, a daily devotional time with God to have fulfilments in the 5 Christian Persuasions\n              of Church Tithing will add to growth in your trusting and loving relations with Him\n            </div>\n          \n          </div>\n        </div>\n            </div>\n          </div>\n </div>\n        <!-- -->\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner\">\n        <div class=\"img_cn_align\">\n          <img src=\"assets/images/iphone7app.png\" width=\"350px\" height=\"\">\n        </div>\n            </div></div></div>\n      </div>\n      <div class=\"col-md-4\">\n\n        <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner\">\n\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"sec_two_text\">\n                    <p>\n                      As a Church tither, Tithing to Grow in Chris is a quality devotional time you'll have with God, before giving your tithes\n                      at church.\n                    </p>The Devotional App is designed to assist you in spiritually relating to God personally in the giving\n                    of your tithes. As you use this devotional guide, before presenting your tithes to God at church, you\n                    wil soon find yourself experiencing seven things. These seven things are as follows:\n\n                    <ul>\n                      <li>\n                        Getting closer to God\n                      </li>\n                      <li>Thinking about God</li>\n                      <li>Praying to God</li>\n                      <li>Reading about God</li>\n                      <li>Honoring God</li>\n                      <li>Giving to God</li>\n                      <li>Hearing from God</li>\n                    </ul>\n\n                    <p>\n                      The whole experience is designed to provide the grounds to grow in your trusting and loving relationship with God, and being\n                      holy to Him.\n                    </p>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickMe()\">Try the App today</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n\n\n<!--section id=\"sec_five\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"center_text\">\n          <h2 class=\"bib_text\"><span style=\"border-bottom: 1px solid gray;\">Items of Interest</span></h2>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <div class=\"cover_all\"><div class=\"cover_top\"><i class=\"fa fa-users fa-3x\" aria-hidden=\"true\"></i></div><div class=\"cover_bot\"><h6>Workshop for local churches</h6></div></div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"cover_all\"><div class=\"cover_top\"><i class=\"fa fa-phone fa-3x\" aria-hidden=\"true\"></i></div><div class=\"cover_bot\"><h6>Contact Us</h6></div></div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"cover_all\"><div class=\"cover_top\"><i class=\"fa fa-users fa-3x\" aria-hidden=\"true\"></i></div><div class=\"cover_bot\"><h6>Association of Church Tithers</h6></div></div>\n      </div>\n   \n      <div class=\"col-md-2\">\n        <div class=\"cover_all\"><div class=\"cover_top\"><i class=\"fa fa-bullhorn fa-3x\" aria-hidden=\"true\"></i></div><div class=\"cover_bot\"><h6>Publications</h6></div>\n\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"cover_all\"><div class=\"cover_top\"><i class=\"fa fa-question-circle fa-3x\" aria-hidden=\"true\"></i></div><div class=\"cover_bot\"><h6>FAQs</h6></div></div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"cover_all\"><div class=\"cover_top\"><i class=\"fa fa-refresh fa-3x\" aria-hidden=\"true\"></i></div><div class=\"cover_bot\"><h6>Updates</h6></div></div>\n      </div>\n    </div>\n  </div>\n\n</section-->\n\n<section class=\"blue_bg\">\n <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"center_text\">\n          <h2 class=\"bib_text\">Paradigm Shift</h2>\n        </div>\n      </div>\n    </div>\n</section>\n\n<div class=\"module1\" style=\"background-image: url('assets/images/bg_parallax.jpg');\">\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n      New Way\n    </h1>\n    </div>\n    <div>\n      Before I give my tithe at church, I spend quality time with God, using tithing to grow in Christ devotional App guide.\n    </div>\n  </div></div></div></div>\n</div>\n\n<section id=\"sec_six\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"center_text\">\n          <h2 class=\"bib_text\">Making it Count for Your Christian Growth</h2>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <p class=\"p_skinny\">Traditionally, what we know and are accustomed to in the giving of our tithes is to put the tithes in a designated\n          envelop, and then drop it in whatever is used for the collection. We usually go about this without a prior devotional\n          time with God.<br>\n        Tithing to Grow in Christ is a new approach to the giving of our tithes, which we are to accommodate with the goal\n          to grow in our trusting and loving relations with God.<br>\n        Tithing to Grow in Christ comes out of Abraham’s tithing, which was followed by growth in his trusting and loving\n          relations with God, and in being holier to Him.<br>\n       Tithing to Grow in Christ makes it necessary to have a quality devotional time with God regarding the <a href=\"five_christain_persuasions\">Five Persuasions\n          of Church Tithing</a>, before we give the tithes at church.<br>\n       The diligence we give to the ritual of having a prior quality devotional time with God regarding the Five Persuasions\n          of Church Tithing is how we make the giving of our tithes count for growth in our trusting and loving relations\n          with God.\n        </p>\n\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.five_chrst_per = function () {
        this.router.navigate(['five_christain_persuasions']);
    };
    HomeComponent.prototype.abraham_factor = function () {
        this.router.navigate(['abraham_factor']);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["b" /* fallIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["c" /* moveInLeft */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["d" /* moveInRight */])()]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/how-i-grow-in/how-i-grow-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".module1 {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n  background-color: #4CAF50;/*#2196F3;*/\n}\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  z-index: -2;\n}\n\n.module1 {\n  width: 100%;\n  height: 200px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n}\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 3.2rem;\n}\n.first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n\n.container{\n    width: 60%;}\n    \n  \n\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/how-i-grow-in/how-i-grow-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\">\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner1\">\n        <div class=\"text_over\">\n          <div>\n            <h1 class=\"five_per\">\n              The Growth Factor in Church Tithing\n            </h1>\n          </div>\n          <div>\n            Achieving Growth in our Personal Relations with God in Church Tithing\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<section class=\"first_sec\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"text_body\">\n\n          <p>\n            As the father of the Church, Abraham’s experience of growth in his personal relations with God, following his tithing is\n            what gives us the benchmark to seek growth in our personal relations with God, in Church tithing. What powered\n            Abraham into receiving the growth experience in his personal relations with God, following his tithing?\n          </p>\n\n          <p>\n            Many of us have not considered the spiritual and the sacred context that powered Abraham to give his tithes, and then, as\n            an outcome, receive the experience of growth in his personal relations with God. What was this spiritual and\n            sacred context?\n          </p>\n          <p>\n            1 First, let’s note that as the priest of God, Melchizedek represented God in his engagement with Abraham (Genesis 14:18),\n            and that characterizes their meeting as a spiritual and a sacred engagement between God and Abraham. 2 Furthermore,\n            Melchizedek brought forth bread and wine (Genesis 14:18), which means he had a fellowship of communion with Abraham.\n            3 A third thing to note is that Melchizedek declared to Abraham the word of God concerning God’s personal influence\n            in the winning of the battle against the kings (Genesis 14:19-20), which unveiled not only the personal nature\n            of God to Abraham, but also, that God can be related to, personally. 4 Fourthly, based on Abraham’s response\n            to the king of Sodom (Genesis 14:21-23), we are to note that Melchizedek dedicated him to God, and received his\n            pledge to distance himself from the king of Sodom, who perhaps symbolizes the lustful things of the world.\n          </p>\n          <p>\n\n            The above items give us the spiritual and sacred things that Abraham was involved with, prior to, or in the context of the\n            giving of his tithes. It appears by Melchizedek, that Abraham was engaged in a type of devotional activity with\n            God, before he gave the tithes, or in the process of giving his tithes. The nature of the devotional activity\n            with God unveiling His personal nature to Abraham would impact his personal relations with God to give him the\n            growth experience in his trust (Genesis 24:40, Romans 4:21, Hebrews 11:17-19), love (Genesis 22:12), and holiness\n            to God (Genesis 17:1), as well as the integrity of the personal presence and influence of God in his life (Genesis\n            24:40).\n\n            <p>\n              We see here that Abraham’s tithing was connected to a devotional activity with God to give him growth in his personal relations\n              with Him. In making Abraham the father of the Church, God was also benchmarking with him the spiritual and\n              the sacred approach that Church tithers are to give to the practice of Church tithing; that would result in\n              growth in their personal relations with Him. It is this understanding of God’s work in Abraham’s tithing that\n              gives us the framework for ‘Tithing to Grow in Christ’.\n\n            </p>\n            <p>\n              Tithing to Grow in Christ is an approach to Church tithing that situates church tithers into the discipline of having a devotional\n              time with God, before they give their tithes at church, with the goal of growing in their personal relations\n              with God, by having fulfillments in the <a href=\"/five_christain_persuasions\">Five Christian Persuasions of Church Tithing</a>.\n\n            </p>\n\n\n            <p>\n              The diligence we give to the ritual of having a quality devotional time with God regarding the Five Christian Persuasions\n              of Church Tithing, prior to the giving of our tithes at church is how we make our tithing count for growth\n              in our trusting and loving relations with God; all together allowing that diligence to impact our Christian\n              formation.\n\n            </p>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/how-i-grow-in/how-i-grow-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowIGrowInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowIGrowInComponent = (function () {
    function HowIGrowInComponent() {
    }
    HowIGrowInComponent.prototype.ngOnInit = function () {
    };
    HowIGrowInComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-how-i-grow-in',
            template: __webpack_require__("../../../../../src/app/how-i-grow-in/how-i-grow-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/how-i-grow-in/how-i-grow-in.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], HowIGrowInComponent);
    return HowIGrowInComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/how-i-grow-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/members/members.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".module1 {\n  width: 100%;\n  height: 500px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n  background-size: cover;\n  border-radius: 10px;\n}\n\n\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  background: rgba(0,0,0,.6);\n  z-index: -2;\n}\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 3.2rem;\n}\n.first_sec{\nbackground-color: #ffffff;\n}\n\n.first{\n    background-color: #ffffff;\n}\n\n.bas_btn {\n  font-size: inherit;\n    margin:0;\n    text-align: right;\n}\n.bas_btn span{\n  \n}\n\n.logd_as{\n    text-align: right;\n}\n\n\n.btn-primary{\n        box-shadow: 2px 2px 11px #333333;\n        }\n\n.sm_btn{\n    left: 0;\n    width: 200px;\n    padding-top: 1rem;\n    margin: auto;\n    text-align: center;\n\n}\n@media (max-width: 600px) {\n    #page {\n        padding:1em;\n    }\n    #toolbar {\n        width:90%;\n        margin-left: -45%;\n    }\n\n   \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/members.component.html":
/***/ (function(module, exports) {

module.exports = "<!--section class=\"first\">\n\n<div class=\"container\">\n    <div class=\"row\">  \n  <div class=\"col-md-8\"><h4>Welcome to Tithing to grow in Christ</h4>\n</div>\n<div class=\"col-md-3\">  <div class=\"logd_as\">Logged in as {{ name.auth.email }}</div></div>\n  <div class=\"col-md-1\"><a (click)=\"logout()\" class=\"bas_btn\"><span>| Logout</span></a></div>\n   </div>\n</div>\n</section-->\n\n<section [@fallIn]='state' class=\"sec\">\n\n\n<div class=\"container\">\n\n<div class=\"module1\" style=\"background-image: url('assets/images/corn.jpg');\">\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner1\">\n        <div class=\"text_over\">\n          <div>\n            <h1 class=\"five_per\">\n              Your Daily Devotions\n            </h1>\n          </div>\n     \n           <div class=\"sm_btn\">\n                          <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/content\">Begin 6 Day Devotional</button>\n                        </div>\n         \n        </div>\n      </div>\n    </div>\n \n</div>    </div> </div>\n\n  \n\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/members/members.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MembersComponent = (function () {
    function MembersComponent(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.state = '';
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.name = auth;
            }
        });
    }
    MembersComponent.prototype.logout = function () {
        this.af.auth.logout();
        this.router.navigateByUrl('/email_auth');
    };
    MembersComponent.prototype.gotoContent = function () {
        this.af.auth.logout();
        this.router.navigateByUrl('/content');
    };
    MembersComponent.prototype.ngOnInit = function () {
    };
    MembersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-members',
            template: __webpack_require__("../../../../../src/app/members/members.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/members.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], MembersComponent);
    return MembersComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/members.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav-header/nav-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand{\n    height: 60px;\n}\n\n.navbar-light .navbar-brand {\ncolor: #1976D2;\nfont-family: 'Lato', sans-serif;\nfont-weight: bold;\nfont-size: 18px;\n\n}\nnavbar, .navbar-toggleable-md, .navbar-light, .bg-faded {\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.10), 0 6px 10px 0 rgba(0,0,0,.10), 0 1px 18px 0 rgba(0,0,0,.10);\n}\n\n.navbar-light .navbar-nav .active>.nav-link{\n    color: #545454;\n}\n.navbar-brand {\n    display: inline-block;\n    padding-top: 0.1rem;\n    padding-bottom: .59rem;\n    margin-right: 1rem;\n    font-size: 1.25rem;\n    line-height: inherit;\n    white-space: nowrap;\n}\n.bg-faded {\n    background-color: white;\n    }\n\n    .navbar {\n    /*overflow: hidden;*/\n     z-index: 99;\n    position: fixed; \n    width: 100%; \n    /* Set the navbar to fixed position */\n   /* top: 0; /* Position the navbar at the top of the page */\n    /* Full width */\n}\n\n.navbar-light .navbar-toggler {\n     border-color: #ffffff;\n}\n\na.nav-link.lg{\n    font-weight: 700;\n    color: #1976D2;\n}\n\na.nav-link.lg span{\n  background-color: #FFC107;\n  padding: 5px;\n  border-radius: 5px;\n}\n\n.navbar-toggler-icon {\nmargin-left: 90%;\n}\n.nav-link.active{\n    color: #ffffff!important;\n}\n.nav-pills .nav-link.active{\n    background-color: #2196F3;\n}\n.nav-link {\n    display: block;\n    padding: .2em 1em;\n}\n/*\ncolors\norange: #FFC107\ngreen: #4CAF50\nblue: #2196F3\n\nfont-family: 'Cairo', sans-serif;\n\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-header/nav-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md nav-pills navbar-light bg-faded navbar-fixed-top\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/images/LOGO.png\" width=\"60px\"> TITHING TO GROW IN CHRIST</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav ml-auto mt-2 mt-md-0\">\n      <!--li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a> \n      </li-->\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"/members\"><span>Free Devotional</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/about_us\">About Us</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/faqs\">FAQs</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/donations\">Donations</a>\n      </li>\n      <!--li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/email_auth\">Sign-in/Sign-up</a>\n      </li-->\n      <li>\n        <a class=\"nav-link lg\" (click)=\"handleLoginLogoutLink()\">{{ loginLogoutLink }}</a>\n      </li>\n    </ul>\n   \n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav-header/nav-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_models_current_user_model__ = __webpack_require__("../../../../../src/models/current-user-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavHeaderComponent = (function () {
    function NavHeaderComponent(af, router) {
        this.af = af;
        this.router = router;
        this.isCollapsed = true;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_2_models_current_user_model__["a" /* CurrentUserModel */](null, null, null);
        //this.currentUser = new CurrentUserModel(null, null, null);
    }
    NavHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.auth.subscribe(function (auth) {
            _this.authStatus = auth;
            if (auth == null) {
                _this.loginLogoutLink = 'Login';
            }
            else {
                _this.loginLogoutLink = 'Logout';
                // get the current users data here
                _this.currentUser.uid = auth.auth.uid;
                _this.userSubscription = _this.af.database.object("/users/" + auth.auth.uid).subscribe(function (snapshot) {
                    _this.currentUser.name = snapshot['name'];
                });
            }
        });
        console.log('OnInit called, subscribing to Authentication');
    };
    NavHeaderComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.authStatus == null) {
            this.loginLogoutLink = 'Login/Signup';
        }
        else {
            this.af.auth.subscribe(function (auth) {
                if (auth) {
                    _this.name = auth;
                }
            });
            this.nm = 'Logout: ' + this.name.auth.email;
            this.loginLogoutLink = this.nm;
        }
    };
    NavHeaderComponent.prototype.handleLoginLogoutLink = function () {
        this.isCollapsed = true;
        if (this.loginLogoutLink === 'Login/Signup') {
            this.router.navigate(['/email_auth']);
        }
        else {
            this.userSubscription.unsubscribe();
            this.router.navigate(['/']);
            this.af.auth.logout();
        }
    };
    NavHeaderComponent.prototype.logout = function () {
        this.af.auth.logout();
        this.router.navigateByUrl('/');
    };
    NavHeaderComponent.prototype.homeRedirect = function () {
        this.isCollapsed = true;
        this.router.navigate(['/']);
    };
    NavHeaderComponent.prototype.ngOnDestroy = function () {
        this.af.auth.unsubscribe();
        console.log('OnDestroy called, unsubsribing');
    };
    NavHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-nav-header',
            template: __webpack_require__("../../../../../src/app/nav-header/nav-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-header/nav-header.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavHeaderComponent);
    return NavHeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/nav-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".module1 {\n  width: 100%;\n height: 700px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n  background-size: cover;\n}\n\n\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  background: rgba(0,0,0,.6);\n  z-index: -2;\n}\n\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 3.2rem;\n}\n#first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n\n.container{\n    width: 60%;}\n    \n    .second{\n\n    }\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\" style=\"background-image: url('assets/images/page_not_found.jpeg');\">\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n      SORRY!\n    </h1>\n    </div>\n    <div>\n     We don't have the page you are looking for.\n    </div>\n  </div></div></div></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = moveIn;
/* harmony export (immutable) */ __webpack_exports__["b"] = fallIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = moveInLeft;
/* harmony export (immutable) */ __webpack_exports__["d"] = moveInRight;

function moveIn() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('moveIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '0', transform: 'translateX(100px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('.6s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '1', transform: 'translateX(0)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('.3s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function fallIn() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('fallIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '0', transform: 'translateY(80px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('.8s .5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '1', transform: 'translateX(0)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('.6s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function moveInLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('moveInLeft', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '0', transform: 'translateX(-100px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('.6s .2s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}
function moveInRight() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('moveInRight', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '0', transform: 'translateX(100px)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* animate */])('.6s .2s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* style */])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/router.animations.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".first{\n   height: 100%;\n  background-color: #ffffff;\n  padding: 1rem 0 3rem 0;\n}\n\n.Cre{\n  margin-top: 100px;\n}\n\n.already{\n  text-align: center;\n}\n\n.frm{\n    color: #333!important;\n}\n.txt{\n    color: #333;\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #16a085; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.custom-button-color {\n  background-color: #16a085;\n  color: white;\n}\n\nform {\n  /*background-image: url(\"../../assets/register-bg.png\");*/\n  background-attachment: inherit;\n  background-position: center;\n  background-repeat: no-repeat;\n /* padding-top: 15%;\n  padding-left: 20%;\n  padding-right: 20%;\n  padding-bottom: 10%;\n  margin-top: 2%;*/\n}\n\n.form-group {\n  font-family: 'Roboto', sans-serif;\n  color: white;\n}\n\nh5 {\n  color: white;\n  text-align: center;\n  font-size: 24px;\n  font-family: 'Roboto', sans-serif;\n}\n\ninput {\n  opacity: .7;\n}\n\nbutton {\n  font-family: 'Roboto', sans-serif;\n  margin-top: 2%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"first\" [@fallIn]='state'>\n<div class=\"container\">\n  <a routerLink=\"/email_auth\" id=\"goback\">Go back</a>\n  <span class=\"error\" *ngIf=\"error\" >{{ error }}</span>\n    \n  <!--form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\"-->\n\n    <!--input type=\"text\" placeholder=\"First Name..\" (ngModel)=\"name\" name=\"name\" class=\"txt\" required-->\n   <!-- Email\n    <input type=\"text\" placeholder=\"Email address..\" (ngModel)=\"email\" name=\"email\" class=\"txt\" required>\n    Password\n    <input type=\"password\" placeholder=\"Password\" (ngModel)=\"password\" name=\"password\" class=\"txt\" required>\n\n    <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"basic-btn\">Create my account</button>\n  </form>-->\n\n   <form class=\"form-horizontal\" role=\"form\" #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\n            <div class=\"row\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-4\">\n                    <div class=\"Cre\">\n                    <h3>Please Create and account</h3>\n                    <hr></div>\n                     <span class=\"error\" *ngIf=\"error\">{{ error }}</span>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-4\">\n                    <div class=\"form-group has-danger\">\n                        <label class=\"sr-only\" for=\"email\">E-Mail Address</label>\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                            <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\"\n                                   placeholder=\"Your email address here\" (ngModel)=\"email\" required autofocus>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\"></div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label class=\"sr-only\" for=\"password\">Password</label>\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                            <input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\"\n                                   placeholder=\"Your password here\" (ngModel)=\"password\" required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\"></div>\n            </div>\n  \n            <div class=\"row\" style=\"padding-top: 1rem\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-4\">\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!formData.valid\"><i class=\"fa fa-sign-in\"></i> Create my account</button>\n                         <a routerLink=\"/email_auth\" class=\"alc\">Already have an account? Login</a>     \n                   \n                </div>\n                \n            </div>\n\n     \n        </form>\n</div></section>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(af, router) {
        this.af = af;
        this.router = router;
        this.state = '';
    }
    SignupComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            //console.log(formData.value);
            this.af.auth.createUser({
                //name: formData.value.name,
                email: formData.value.email,
                password: formData.value.password
            }).then(function (success) {
                _this.router.navigate(['/members']);
            }).catch(function (err) {
                _this.error = err;
            });
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")],
            animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* moveIn */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* fallIn */])()]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".first{\n    background-color: #ffffff;\n}\n#sidebar .list-group-item {\n    border-radius: 0;\n    background-color: #333;\n    color: #ccc;\n    border-left: 0;\n    border-right: 0;\n    border-color: #2c2c2c;\n    white-space: nowrap;\n}\n\n/* highlight active menu */\n#sidebar .list-group-item:not(.collapsed) {\n    background-color: #222;\n}\n\n/* closed state */\n#sidebar .list-group .list-group-item[aria-expanded=\"false\"]::after {\n  content: \" \\F0D7\";\n  font-family: FontAwesome;\n  display: inline;\n  text-align: right;\n  padding-left: 5px;\n}\n\n/* open state */\n#sidebar .list-group .list-group-item[aria-expanded=\"true\"] {\n  background-color: #222;\n}\n#sidebar .list-group .list-group-item[aria-expanded=\"true\"]::after {\n  content: \" \\F0DA\";\n  font-family: FontAwesome;\n  display: inline;\n  text-align: right;\n  padding-left: 5px;\n}\n\n/* level 1*/\n#sidebar .list-group .collapse .list-group-item  {\n  padding-left: 20px;\n}\n\n/* level 2*/\n#sidebar .list-group .collapse > .collapse .list-group-item {\n  padding-left: 30px;\n}\n\n/* level 3*/\n#sidebar .list-group .collapse > .collapse > .collapse .list-group-item {\n  padding-left: 40px;\n}\n\n@media (max-width:48em) {\n    /* overlay sub levels on small screens */\n    #sidebar .list-group .collapse.in, #sidebar .list-group .collapsing {\n        position: absolute;\n        z-index: 1;\n        width: 190px;\n    }\n    #sidebar .list-group > .list-group-item {\n        text-align: center;\n        padding: .75rem .5rem;\n    }\n    /* hide caret icons of top level when collapsed */\n    #sidebar .list-group > .list-group-item[aria-expanded=\"true\"]::after,\n    #sidebar .list-group > .list-group-item[aria-expanded=\"false\"]::after {\n        display:none;\n    }\n}\n\n/* change transition animation to width when entire sidebar is toggled */\n#sidebar.collapse {\n  transition-timing-function: ease;\n  transition-duration: .2s;\n}\n\n#sidebar.collapsing {\n  opacity: 0.8;\n  width: 0;\n  transition-timing-function: ease-in;\n  transition-property: width;\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"first\">\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-xs-1 p-l-0 p-r-0 collapse in\" id=\"sidebar\">\n            <div class=\"list-group panel\">\n                <a href=\"#day1\" class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-parent=\"#sidebar\" aria-expanded=\"false\"><i class=\"fa fa-dashboard\"></i> <span class=\"hidden-sm-down\">DAY 1 - The aim of church tithing</span> </a>\n                <div class=\"collapse\" id=\"day1\">\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day1\">Being purpose driven with your tithe</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day1\">The spiritual matter</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day1\">The importance of spiritual matter</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day1\">Spiritual impartation</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day1\">Donation</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day1\">Test yourself</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day1\">ACTS</a>\n                </div>\n\n                <a href=\"#day2\" class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-parent=\"#sidebar\" aria-expanded=\"false\"><i class=\"fa fa-book\"></i> <span class=\"hidden-sm-down\">DAY 2 - The Objective of church tithing </span></a>\n                <div class=\"collapse\" id=\"day2\">\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day2\">Acknowledging God's personal influence in your life</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day2\">The spiritual matter</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day2\">The importance of spiritual matter</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day2\">Spiritual impartation</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day2\">Donation</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day2\">Test yourself</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day2\">ACTS</a>\n                </div>\n\n\n                <a href=\"#day3\" class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-parent=\"#sidebar\" aria-expanded=\"false\"><i class=\"fa fa-book\"></i> <span class=\"hidden-sm-down\">DAY 3 - The Objective of church tithing </span></a>\n                <div class=\"collapse\" id=\"day3\">\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day3\">Acknowledging God's personal influence in your life</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day3\">The spiritual matter</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day3\">The importance of spiritual matter</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day3\">Spiritual impartation</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day3\">Donation</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day3\">Test yourself</a>\n                  <a href=\"#\" class=\"list-group-item\" data-parent=\"#day3\">ACTS</a>\n                </div>\n                <a href=\"#\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-heart\"></i> <span class=\"hidden-sm-down\">Item 4</span></a>\n                <a href=\"#\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-list\"></i> <span class=\"hidden-sm-down\">Item 5</span></a>\n                <a href=\"#\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-clock-o\"></i> <span class=\"hidden-sm-down\">Link</span></a>\n                <a href=\"#\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-th\"></i> <span class=\"hidden-sm-down\">Link</span></a>\n                <a href=\"#\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-gear\"></i> <span class=\"hidden-sm-down\">Link</span></a>\n                <a href=\"#\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-calendar\"></i> <span class=\"hidden-sm-down\">Link</span></a>\n                <a href=\"#\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-envelope\"></i> <span class=\"hidden-sm-down\">Link</span></a>\n                <a href=\"#\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"hidden-sm-down\">Link</span></a>\n                <a href=\"#\" class=\"list-group-item collapsed\" data-parent=\"#sidebar\"><i class=\"fa fa-star\"></i> <span class=\"hidden-sm-down\">Link</span></a>\n            </div>\n        </div>\n        <main class=\"col-md-8 col-xs-11 p-l-2 p-t-2\">\n            <a href=\"#sidebar\" data-toggle=\"collapse\"><i class=\"fa fa-navicon fa-lg\"></i></a>\n            <hr>\n            <div class=\"page-header\">\n                <h1>Bootstrap 4 Sidebar Menu</h1>\n            </div>\n            <p class=\"lead\">A responsive, multi-level vertical accordion.</p>\n        </main>\n    </div>\n</div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test/test.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/test.component.js.map

/***/ }),

/***/ "../../../../../src/app/the-abraham-factor/the-abraham-factor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".module1 {\n  width: 100%;\n  height: 400px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n  background-size: cover;\n}\n\n\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  background: rgba(0,0,0,.6);\n  z-index: -2;\n}\n\n\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 3.2rem;\n}\n.first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n\n.container{\n    width: 60%;}\n    \n    .second{\n\n    }\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }\n  .text_body_img{\n      text-align: center;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/the-abraham-factor/the-abraham-factor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\" style=\"background-image: url('assets/images/outside.jpg');\">\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n      The Abraham Factor in Church Tithing\n    </h1>\n    </div>\n    <div>\nQuestion: How is Abraham a Factor in Church Tithing?\n    </div>\n  </div></div></div></div>\n</div>\n\n\n<section class=\"first_sec\">\n  <div class=\"container\">\n    <div class=\"row\">\n<div class=\"col-md-12\">\n \n  <div class=\"heading_sub\"><p>The significance of Abraham in God’s program for the Church, and for that matter a foundation to the education and the practice of Church tithing is given to us by the following scriptures:</p></div>\n  <div class=\"text_body\">\n   <ul>\n     <li>Romans 4:11-13</li>\n     <li>Galatians 3:27-29</li>\n     <li>John 8:38-39 </li>\n   </ul>\n\n  </div>\n   <div class=\"text_body\">\n         <p>  By these scriptures, Abraham is portrayed as the father of the Christian faith, and for that matter the father of the Church. As the father of all those who believe, Abraham stands out as the one special and significant person that God would model the foundation, the order, the experiences, and the practices of the Christian faith. \n         </p>\n          </div>\n          <div class=\"text_body\">\n    <p>   The illustration below helps us to conceptualize God’s big idea in making Abraham the father of the Christian faith. As the foundation for His Church program, it comprised the sum of at least eight subsets of benchmarks that He set up in the patriarch of our faith. These are to be discernible experiential features in the make-up of the Church. So that one without the rest or the rest without one would distort the Church’s credibility of being the children of Abraham, and or for that matter the body of Christ.          \n\n    </p>\n          </div>\n\n  \n</div>\n\n    </div>\n    </div>\n    </section>\n\n    <!--second section-->\n    <!-- -->\n\n<section id=\"second\">\n  <div class=\"container\">\n    <div class=\"row\">\n<div class=\"col-md-12\">\n  \n  <div class=\"text_body_img\">\n <img src=\"assets/images/Picture1.png\">\n\n  </div>\n\n  \n</div>\n\n    </div>\n    </div>\n    </section>\n\n    <!-- -->\n\n     <section class=\"first_sec\">\n   <div class=\"container\">\n     <div class=\"row\">\n\n       <div class=\"col-md-12\">\n         <div class=\"text_body\">\n         The lesson from the foregoing discussion is that we need to study the tithing of Abraham to retrieve the grace of God given to it (such as the God’s Rubric for Church Tithing, and the Five Christian Persuasions of Church Tithing), for the benefit of the Local Church. This is important for the fact that when as a Local Church we are not tithing, then we are not following that example of Abraham set by God, therefore deficient in being the children of Abraham according to the intimations of Christ and the Apostle Paul. And when we are tithing, the practice should be in alignment with the core foundational principles that had been benchmarked in the tithing of Abraham. \n         </div>\n         <div class=\"text_body\">\n<p>For further reading on the core foundational principles on Church tithing please see related articles</p>\n</div>\n         </div>\n     </div>\n\n   </div>\n    </section>\n    <!-- -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/the-abraham-factor/the-abraham-factor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheAbrahamFactorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TheAbrahamFactorComponent = (function () {
    function TheAbrahamFactorComponent() {
    }
    TheAbrahamFactorComponent.prototype.ngOnInit = function () {
    };
    TheAbrahamFactorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-the-abraham-factor',
            template: __webpack_require__("../../../../../src/app/the-abraham-factor/the-abraham-factor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/the-abraham-factor/the-abraham-factor.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], TheAbrahamFactorComponent);
    return TheAbrahamFactorComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/the-abraham-factor.component.js.map

/***/ }),

/***/ "../../../../../src/app/the-god-factor/the-god-factor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".module1 {\n  width: 100%;\n  height: 400px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n  background-size: cover;\n}\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  background: rgba(0,0,0,.6);\n  z-index: -2;\n}\n\n.module1 {\n  width: 100%;\n  height: 400px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n}\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 3.2rem;\n}\n.first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n\n.container{\n    width: 60%;}\n    \n    .second{\n\n    }\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }\n  .text_body_img{\n      text-align: center;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/the-god-factor/the-god-factor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\" style=\"background-image: url('assets/images/milky.jpg');\">\n <div class=\"outer\">\n          <div class=\"middle\">\n            <div class=\"inner1\">\n  <div class=\"text_over\">\n    <div><h1 class=\"five_per\">\n      The God Factor in Church Tithing\n    </h1>\n    </div>\n    <div>\nQuestion: How is God a Factor in Church Tithing?\n    </div>\n  </div></div></div></div>\n</div>\n\n<section class=\"first_sec\">\n  <div class=\"container\">\n    <div class=\"row\">\n<div class=\"col-md-12\">\n \n \n  <div class=\"text_body\">\n   <p>\nDid you know, or are you aware that there is a God factor in Church tithing, by considering His influence in the tithing of Abraham to Melchizedek? The corresponding question would then be; how did God influence Abraham’s tithing to Melchizedek to give us the God’s factor in Church tithing? At least, there are couple of considerations to this question.\n      </p>\n<p>\n  Melchizedek’s Receipt of Abraham’s Tithes\n</p>\n<p>\nMelchizedek, we are told is the priest of the most-high God. As the priest of God, he represented God. In receiving Abraham’s tithes, it means God was pleased with Abraham’s act of tithing. Since God was pleased with the act of Abraham’s tithing, it suggests that his tithing was an act of faith, for without faith no one can please God (Hebrews 11:6). We also know from the Apostle Paul that faith comes by hearing, and hearing by the word of God (Romans 10:17). \n</p>\n<p>\n  In respect to the aspect of faith that comes by the hearing of the word God, the passage in Genesis 14:19-20 shows that Abraham gave tithes when he heard by Melchizedek’s declaration that it was God who gave his enemies into his hands.  Most likely, in gaining understanding of Melchizedek’s declaration of the word of God, it prompted Abraham to tithe, confirming the influence of God as a factor in his tithing. Holding the fact that the influence of God was a factor in the tithing of Abraham, it means that his tithing was not a random act, or by chance. That brings us to our second consideration to the God factor in Church tithing.\n</p>\n<p>The Plan of God Concerning Abraham’s Tithing\n</p>\n<p>\n  Part of our Christian fundamental knowledge about God is that all the details of our lives on earth are of the plan of God. Millard Erickson, a Christian theologian, briefly helps us to understand the meaning of God’s plan. He defines the plan of God as God’s eternal decision rendering certain all things concerning our lives that would happen (Erickson, 1992, p. 109). God’s eternal decision simply means the decisions and the choices that God had made before time concerning a matter, a thing, or a person, for example. Erickson is pointing us to a strong fundamental position of our Christian belief, that nothing happens on earth by chance, and/or independent of God.\n</p>\n<p>\n  In addressing the question, what made Abraham to tithe, Erickson helps us with our conclusion that Abraham’s tithing was a planned behavior from God. He did not tithe by chance, and neither did he simply tithe out of the goodness of his heart. God planned and God worked in him to tithe by bringing about the circumstances that brought him to do so. \n</p>\n<p>\n  Because of Ephesians 1:11 and Ephesians 3:11, we gain the understanding that God’s plan and work is largely designed by His eternal determinations in Christ. So that God’s work in the tithing of Abraham was designed by his determinate decision in Christ to be the High Priest of God to the Church, and the Church, tithing to that purpose. To state the obvious, if it were not for His determinate decision in Christ to be the High Priest of God to the Church and all that would pertain to it, including Church tithing, God would not have planned and worked in Abraham to tithe. And most probably, Abraham would not have tithed at all.\n</p>\n<p>\n  In a nutshell, God planned and worked in Abraham to tithe, in making him the father of the Church, because he had conceived and envisioned it to be a type of giving that the Church would be made to do in relation to the High Priestly Ministry of Christ.\n</p>\n\n  </div>\n  \n    \n\n  \n</div>\n\n    </div>\n    </div>\n    </section>\n\n    <!--second section-->\n    <!-- -->\n\n\n\n    <!-- -->\n\n \n    <!-- -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/the-god-factor/the-god-factor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheGodFactorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TheGodFactorComponent = (function () {
    function TheGodFactorComponent() {
    }
    TheGodFactorComponent.prototype.ngOnInit = function () {
    };
    TheGodFactorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-the-god-factor',
            template: __webpack_require__("../../../../../src/app/the-god-factor/the-god-factor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/the-god-factor/the-god-factor.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], TheGodFactorComponent);
    return TheGodFactorComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/the-god-factor.component.js.map

/***/ }),

/***/ "../../../../../src/app/the-growth-factor/the-growth-factor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".module1 {\n  width: 100%;\n  height: 400px;\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n  background-size: cover;\n}\n\n\n.inner1{\n    margin: auto;\n    width: 60%;\n    color: #ffffff;\n    text-shadow: 0 1px 0 black;\n    font-size: 1.7rem;\n   font-family: 'Passion One', cursive;\n   font-weight: 400;\n   text-align: center;\n}\n\n\n.outer {\n    display: table;\n   height: 100%;\n    width: 100%;\n}\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.module1:before{\n  content: \"\";\n  position: absolute;\n  left: 0; right: 0;\n  top: 0; bottom: 0;\n  background: rgba(0,0,0,.6);\n  z-index: -2;\n}\n\n.module1 > .text_over {\n  position: absolute;\n  width: 100%;\n  /*padding: 20px 10px;*/\n  width: 50%;\n    color: white;\n}\n.module1 > .text_over > h1 {\n  color: white;\n  text-shadow: 0 1px 0 black;\n  /*font-family: 'Passion One', cursive;*/\n    /*float: left;\n    margin-left: 2rem;*/\n    z-index: 2;\n  \n\n}\n\n.five_per{\n    font-size: 3.2rem;\n}\n.first_sec{\nbackground-color: #ffffff;\n}\n.right_sidebar{\n    background-color: #F0F7FA;\n    width: 100%;\n    border-radius: 8px;\n    height: 200px;\n    text-align: left;\n    padding: 20px 25px;\n}\n\n.container{\n    width: 60%;}\n    \n  \n\n\n.middle {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.inner {\n    margin-left: auto;\n    margin-right: auto; \n    width: 100%;\n}\n   \n  .heading{\n         font-family: 'Passion One', cursive;\n         font-size: 36px;\n  }\n  .row{\n      widows: 7%;\n      margin: auto;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/the-growth-factor/the-growth-factor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"module1\" style=\"background-image: url('assets/images/growth.jpg');\">\n  <div class=\"outer\">\n    <div class=\"middle\">\n      <div class=\"inner1\">\n        <div class=\"text_over\">\n          <div>\n            <h1 class=\"five_per\">\n              The Growth Factor in Church Tithing\n            </h1>\n          </div>\n          <div>\n            Question: How is Christian Growth a Factor in Church Tithing?\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<section class=\"first_sec\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"text_body\">\n\n          <p>\n            For many of us, the idea of Christian Growth in Church tithing is incomprehensible. We are not familiar with that fact, because\n            traditionally, what we know and are accustomed to in the giving of our tithes is to put the tithes in a designated\n            envelop, and then drop it in whatever is used for the collection at church, or mail it, or use an online giving\n            system with a credit/debit card. This traditional approach in tithing does not lend us the inclination to connect\n            the giving of tithes to possibilities of growth in our personal relations with God.\n          </p>\n\n          <p>\n            However, in turning to Abraham there is a realization of aspects of growth in his personal relations with God that followed\n            his tithing. As the father of the Church, these aspects of growth following Abraham’s tithing are indications\n            that growth outcomes in our personal relations with God are expected, when we are truly about Church tithing.\n            It then gives us the implication that Christian growth was a factor in the Church tithing that God envisioned\n            as part of his agenda in perfecting the Church in Christ, and for that matter, it would serve as part of the\n            benchmarks in Church tithing that he established with Abraham (in making him the father of us all, Romans 4:16),\n            for the Church.\n          </p>\n          <p>\n            And how does the scripture register these aspects of growth following the tithing of Abraham?\n          </p>\n          <p>\n\n            Before his tithing in Genesis 14, Genesis 11, 12, and 13 clearly showed that Abraham was wealthy, but relatively poorer in\n            his spiritual and personal relations with God.\n            <p>\n              There are 3 key behaviors of Abraham that indicated that before his tithing he was relatively poorer in his personal relations\n              with God, when he was initially brought to the Land of Canaan:\n            </p>\n            <ol>\n              <li> Building altars when God appears to him </li>\n              <li> Compromising on Sarah when he faced the threat of losing her and his life</li>\n              <li> Going to the battle against the kings without consulting God. <br>\n                <ol>These behaviors pointed out 3 things in Abraham:\n                  <li> Abraham’s impersonal relations with God </li>\n                  <li> Abraham’s weakness concerning his trust in God </li>\n                  <li> Abraham’s lack in his dependency on God. </li>\n                </ol>\n              </li>\n\n            </ol>\n\n\n            <p>\n              Following his tithing, Abraham was still wealthy, but became richer in his spiritual and personal relations with God. Abraham\n              matured greatly in his personal relations with God marked by the increasing integrity of God’s personal presence\n              in his life (Genesis 24:40), his trust (Genesis 24:40, Romans 4:21, Hebrews 11:17-19), love (Genesis 22:12),\n              and holiness to God (Genesis 17:1).\n\n            </p>\n            <p>How then, are we to achieve growth in our personal relations with God through Church tithing? Please read the\n              article on <a href=\"/acheving_growth_ict\">Achieving Growth in our Personal Relations with God</a>.\n\n            </p >\n            <div style=\"text-align: center;\">\n            <h4>PEACE & MANY BLESSINGS\n            </h4></div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/the-growth-factor/the-growth-factor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheGrowthFactorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TheGrowthFactorComponent = (function () {
    function TheGrowthFactorComponent() {
    }
    TheGrowthFactorComponent.prototype.ngOnInit = function () {
    };
    TheGrowthFactorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-the-growth-factor',
            template: __webpack_require__("../../../../../src/app/the-growth-factor/the-growth-factor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/the-growth-factor/the-growth-factor.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], TheGrowthFactorComponent);
    return TheGrowthFactorComponent;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/the-growth-factor.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/main.js.map

/***/ }),

/***/ "../../../../../src/models/current-user-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentUserModel; });
var CurrentUserModel = (function () {
    function CurrentUserModel(name, email, uid) {
        this.name = name;
        this.email = email;
        this.uid = uid;
    }
    return CurrentUserModel;
}());
//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/current-user-model.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Volumes/Storage/angular/ang-auth/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map