function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _directory_directory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./directory/directory.component */
    "./src/app/directory/directory.component.ts");
    /* harmony import */


    var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./privacy/privacy.component */
    "./src/app/privacy/privacy.component.ts");

    var routes = [{
      path: '',
      component: _directory_directory_component__WEBPACK_IMPORTED_MODULE_2__["DirectoryComponent"]
    }, {
      path: 'privacy',
      component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'acnh-directory';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 48,
      vars: 0,
      consts: [["id", "heading", 1, "centered"], ["id", "logo"], ["href", "./", 2, "color", "#67AF40"], ["id", "sublogo"], ["href", "https://nookipedia.com/wiki/Main_Page", 2, "color", "#67AF40"], ["href", "https://github.com/Nookipedia/acnh.directory"], ["id", "footer", 1, "center"], ["id", "footer-top"], ["href", "https://nookipedia.com/wiki/Main_Page"], ["href", "https://www.kevinpayravi.com/"], ["href", "/privacy"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ACNH.Directory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Your one-stop site for ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Animal Crossing: New Horizons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " resources ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Brought to you by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nookipedia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Contribute on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Nookipedia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " (you can contribute!) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Built by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "@KevinPayravi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Animal Crossing is a registered trademark of Nintendo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " ACNH.Directory in no way claims ownership of any intellectual property associated with Animal Crossing. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " ACNH.Directory is not responsible for the content on the listed external sites. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-multiselect-dropdown */
    "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./privacy/privacy.component */
    "./src/app/privacy/privacy.component.ts");
    /* harmony import */


    var _directory_directory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./directory/directory.component */
    "./src/app/directory/directory.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyComponent"], _directory_directory_component__WEBPACK_IMPORTED_MODULE_8__["DirectoryComponent"]],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyComponent"], _directory_directory_component__WEBPACK_IMPORTED_MODULE_8__["DirectoryComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/data/languages.ts":
  /*!***********************************!*\
    !*** ./src/app/data/languages.ts ***!
    \***********************************/

  /*! exports provided: languages */

  /***/
  function srcAppDataLanguagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "languages", function () {
      return languages;
    });

    var languages = [{
      code: "en",
      text: "English"
    }, {
      code: "es",
      text: "Español"
    }, {
      code: "fr",
      text: "Français"
    }, {
      code: "de",
      text: "Deutsch"
    }, {
      code: "it",
      text: "Italiano"
    }, {
      code: "nl",
      text: "Nederlands"
    }, {
      code: "ru",
      text: "Русский"
    }, {
      code: "zh",
      text: "简体中文"
    }, {
      code: "jp",
      text: "日本語"
    }, {
      code: "ko",
      text: "한국어"
    }];
    /***/
  },

  /***/
  "./src/app/data/project-data.ts":
  /*!**************************************!*\
    !*** ./src/app/data/project-data.ts ***!
    \**************************************/

  /*! exports provided: projectsData */

  /***/
  function srcAppDataProjectDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "projectsData", function () {
      return projectsData;
    });

    var projectsData = [{
      name: "AC Community (JP)",
      description: "あつまれ どうぶつの森 コミュニティ",
      languages: ["jp"],
      logo: "",
      logoStyle: "",
      site: "",
      android: "",
      ios: "https://apps.apple.com/jp/app/id1507394206",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["critters", "fossils", "items"],
      tools: ["turnips"]
    }, {
      name: "AC Community (KO)",
      description: "모여봐요 동물의 숲 커뮤니티",
      languages: ["ko"],
      logo: "",
      logoStyle: "",
      site: "",
      android: "",
      ios: "https://apps.apple.com/kr/app/id1507394206",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["critters", "fossils"],
      tools: ["turnips"]
    }, {
      name: "AC Helper",
      description: "Companion app for catching critters, logging critters and items, and turnip predictions",
      languages: ["en", "es", "de", "fr", "it", "jp", "ru", "zh"],
      logo: "ac-helper.png",
      logoStyle: "icon",
      site: "",
      android: "",
      ios: "https://apps.apple.com/us/app/id1508764244",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "https://github.com/Dimillian/ACHNBrowserUI",
      information: ["critters", "fossils"],
      tools: ["music", "turnips"]
    }, {
      name: "AC Miles",
      description: "Achievement visualizer for Animal Crossing: New Horizons",
      languages: ["en"],
      logo: "",
      logoStyle: "",
      site: "https://acmiles.com/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "https://github.com/MariuszDabrowski/ac-miles",
      information: ["gameplay"],
      tools: []
    }, {
      name: "ACNH API",
      description: "A free RESTful API for critters, fossils, art, music, furniture and villagers from Animal Crossing: New Horizons",
      languages: ["en"],
      logo: "",
      logoStyle: "",
      site: "https://acnhapi.com/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "https://github.com/alexislours/ACNHAPI",
      information: ["art", "critters", "fossils", "items", "villagers"],
      tools: ["api"]
    }, {
      name: "ACNH Database",
      description: "List of critters, items, villagers, recipes, and more",
      languages: ["en"],
      logo: "acnh-database.png",
      logoStyle: "banner",
      site: "https://www.acnhdatabase.me/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "https://github.com/shengye000/ACNHDatabase",
      information: ["art", "critters", "fossils", "items", "villagers"],
      tools: ["music"]
    }, {
      name: "ACNH Data Spreadsheet",
      description: "A comprehensive Google spreadsheet documenting items, villagers, achievements, and much more",
      languages: ["en"],
      logo: "",
      logoStyle: "",
      site: "https://tinyurl.com/acnh-sheet",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["art", "critters", "fossils", "items", "villagers"],
      tools: []
    }, {
      name: "ACNH Flowers",
      description: "A simple ACNH guide explaining how to plant flowers to maximize crossbreeding for hybrid flowers and unique colors",
      languages: ["en"],
      logo: "acnh-flowers.png",
      logoStyle: "banner",
      site: "https://newhorizons.florist/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["flowers"],
      tools: []
    }, {
      name: "ACNH.Guide",
      description: "User-friendly display of data for bugs, fish, villagers, items, and more",
      languages: ["en"],
      logo: "acnh-guide.png",
      logoStyle: "icon",
      site: "https://acnh.guide/",
      android: "https://play.google.com/store/apps/details?id=dev.genesy.animalcrossingnhguide",
      ios: "https://apps.apple.com/us/app/id1504317399",
      discord: "5vwumWT",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["art", "critters", "fossils", "items", "villagers"],
      tools: ["checklist", "turnips"]
    }, {
      name: "ACNH Life",
      description: "Mobile app with critter info, item checklists, turnip calculator, and more",
      languages: ["en"],
      logo: "acnh-life.png",
      logoStyle: "banner",
      logoBorder: true,
      site: "",
      android: "https://play.google.com/store/apps/details?id=com.hangodjin.animal_crossing_guide",
      ios: "https://apps.apple.com/us/app/acnh-life/id1504842752",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["art", "critters", "items", "villagers"],
      tools: ["checklist", "turnips"]
    }, {
      name: "ACNH Music",
      description: "Web app that plays the current hourly music from Animal Crossing: New Horizons.",
      languages: ["en"],
      logo: "",
      logoStyle: "",
      site: "https://acnhapi.com/acnh-music",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: [],
      tools: ["music"]
    }, {
      name: "ACNH Translation Spreadsheet",
      description: "A Google spreadsheet listing translation for most of the game's data",
      languages: ["en", "es", "fr", "de", "it", "nl", "ru", "zh", "jp", "ko"],
      logo: "",
      logoStyle: "",
      site: "https://bit.ly/acnh-translations",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "https://github.com/alexislours/translation-sheet-data",
      information: ["art", "critters", "fossils", "items", "villagers"],
      tools: []
    }, {
      name: "ACNH Travel Guide",
      description: "New Horizons companion app, providing you with information and progress tracking",
      languages: ["en"],
      logo: "acnh-travel-guide.png",
      logoStyle: "icon",
      site: "",
      android: "",
      ios: "https://apps.apple.com/us/app/acnh-travel-guide/id1502818559",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["art", "critters", "fossils", "items", "villagers"],
      tools: ["checklist", "turnips"]
    }, {
      name: "Almanook",
      description: "Companion site with info on collectibles, villagers, and more",
      languages: ["en"],
      logo: "almanook.png",
      logoStyle: "banner",
      site: "https://www.almanook.me/home/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["art", "critters", "fossils", "items", "villagers"],
      tools: []
    }, {
      name: "Animal Crossing Pattern Tool",
      description: "Pattern designer compatible with NL, HHD, and NH",
      languages: ["en"],
      logo: "ac-pattern-tool.png",
      logoStyle: "icon",
      site: "https://acpatterns.com/",
      android: "",
      ios: "",
      discord: "9rGkZNk",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: [],
      tools: ["design sharing"]
    }, {
      name: "Animal Crossing Wiki",
      description: "Animal-Crossing-Wiki von AC-Booster.net",
      languages: ["de"],
      logo: "animal-crossing-wiki-de.png",
      logoStyle: "",
      site: "https://animalcrossingwiki.de/",
      android: "",
      ios: "",
      discord: "rkUDD4F",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["art", "critters", "fossils", "gameplay", "gifts", "items", "villagers"],
      tools: ["wiki"]
    }, {
      name: "Animal Crossing World",
      description: "Blogs and guides about the Animal Crossing series",
      languages: ["en"],
      logo: "animal-crossing-world.png",
      logoStyle: "",
      site: "https://animalcrossingworld.com/",
      android: "",
      ios: "",
      discord: "",
      facebook: "AnimalCrossWorld",
      instagram: "animalcrossing_world",
      twitter: "ACWorldBlog",
      git: "",
      information: ["gameplay"],
      tools: []
    }, {
      name: "cestislife's Visual Guides",
      description: "A compilation of visual guides made by cestislife",
      languages: ["en"],
      logo: "cestislife.png",
      logoStyle: "icon",
      site: "https://cestislife.github.io/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["critters", "flowers", "gameplay"],
      tools: []
    }, {
      name: "Completionista",
      description: "Learn about and track museum collectibles, flowers, albums, recipes, and more",
      languages: ["en"],
      logo: "completionista.png",
      logoStyle: "icon",
      site: "https://completionista.com/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["art", "critters", "fossils", "items", "villagers"],
      tools: ["checklist"]
    }, {
      name: "CatalogScanner",
      description: "A simple bot for quickly extracting catalogs, recipes, critters and more from recorded videos.",
      languages: ["en", "es", "de", "fr", "it", "ja", "ko", "nl", "ru", "zh"],
      logo: "catalog-scanner.png",
      logoStyle: "icon",
      site: "https://nook.lol/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "catalogscanner",
      git: "",
      information: ["critters", "items"],
      tools: ["api"]
    }, {
      name: "Custom Crossing",
      description: "Pattern and design sharing",
      languages: ["en"],
      logo: "custom-crossing.png",
      logoStyle: "banner",
      site: "https://customcrossing.com/",
      android: "",
      ios: "",
      discord: "aYQ3yXw",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: [],
      tools: ["design sharing"]
    }, {
      name: "DodoCodes.com",
      description: "All in one ACNH Community with Dodo codes, designs, auctions, giveaways, articles, dreams, user ratings, wishlists, catalogs, and more",
      languages: ["en", "de", "fr", "zh"],
      logo: "dodocodescom.png",
      logoStyle: "banner",
      logoBorder: true,
      site: "https://dodocodes.com",
      android: "https://play.google.com/store/apps/details?id=com.dodocodes.mobile",
      ios: "https://apps.apple.com/us/app/dodocodes/id1512463462",
      discord: "dodocodes",
      facebook: "dodocodes",
      instagram: "dodocodes.app",
      twitter: "dodo_codes",
      git: "",
      information: [],
      tools: ["design sharing", "dreams", "giveaways", "marketplace", "queueing"]
    }, {
      name: "FANDOM Animal Crossing Wiki",
      description: "FANDOM Animal Crossing wiki that anyone can contribute to",
      languages: ["en"],
      logo: "acw.png",
      logoStyle: "banner",
      site: "https://animalcrossing.fandom.com/wiki/Animal_Crossing_Wiki",
      android: "",
      ios: "",
      discord: "5vDwcy",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["art", "critters", "fossils", "gameplay", "items", "villagers"],
      tools: ["wiki"]
    }, {
      name: "Garden Science Flower Breeding Simulator",
      description: "A fancy tool to simulate flower breeding and pattern performance",
      languages: ["en", "es", "de", "fr", "it", "jp", "ko", "nl", "ru", "zh"],
      logo: "garden-science.png",
      logoStyle: "icon",
      site: "https://gardenscience.ac/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["flowers"],
      tools: ["simulator"]
    }, {
      name: "Happy Island Designer",
      description: "Draw terrain and paths, place buildings, and trace your in-game map",
      languages: ["en"],
      logo: "",
      logoStyle: "",
      site: "https://eugeneration.github.io/HappyIslandDesigner/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: [],
      tools: ["simulator"]
    }, {
      name: "icebr's AC:NH Helper",
      description: "Fish and bugs that are available for catching in AC:NH depend on location, time and current month",
      languages: ["en", "es", "de", "fr", "it", "jp", "ko", "nl", "ru", "zh"],
      logo: "icebr.png",
      logoStyle: "icon",
      site: "https://icebr.art/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["critters"],
      tools: ["checklist"]
    }, {
      name: "MeteoNook",
      description: "Predict your island's weather patterns, including exact times for meteor showers, rainbows and the aurora borealis",
      languages: ["en"],
      logo: "",
      logoStyle: "",
      site: "https://wuffs.org/acnh/weather/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "https://github.com/Treeki/MeteoNook/",
      information: [],
      tools: ["weather"]
    }, {
      name: "NMT Calculator",
      description: "Calculates odds of finding villagers on Mystery Islands.",
      languages: ["en"],
      logo: "",
      logoStyle: "",
      site: "https://acnhapi.com/nmt-calculator",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "https://github.com/alexislours/nmt-calculator",
      information: ["villagers"],
      tools: ["simulator"]
    }, {
      name: "Nookazon",
      description: "Buy and sell Animal Crossing: New Horizons items",
      languages: ["en", "es", "de", "fr", "it", "jp", "ko", "nl", "ru", "zh"],
      logo: "nookazon.svg",
      logoStyle: "banner",
      site: "https://nookazon.com/",
      android: "",
      ios: "",
      discord: "nookazon",
      facebook: "nookazon",
      instagram: "nookazon",
      twitter: "nookazon",
      git: "",
      information: ["items"],
      tools: ["marketplace"]
    }, {
      name: "Nook DB.io",
      description: "Comprehensive item database with filtering, checklists, stalk market calculator, a music player, and more",
      languages: ["en", "es", "de", "fr", "it", "jp", "ko", "ru", "zh"],
      logo: "nook-db-io.png",
      logoStyle: "icon",
      site: "https://nookdb.io/",
      android: "https://play.google.com/store/apps/details?id=io.nookdb.android",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["flowers", "items"],
      tools: ["checklist", "music", "turnips"]
    }, {
      name: "Nook Exchange",
      description: "Item tracker and marketplace",
      languages: ["en", "es", "de", "fr", "it", "jp", "ko", "nl", "ru", "zh"],
      logo: "nook-exchange.png",
      logoStyle: "banner",
      site: "https://nook.exchange/",
      android: "",
      ios: "",
      discord: "9sh66CX",
      facebook: "",
      instagram: "",
      twitter: "nookexchange",
      git: "",
      information: ["items"],
      tools: ["marketplace"]
    }, {
      name: "Nookipedia",
      description: "The independent Animal Crossing wiki, covering the series along with an API service",
      languages: ["en"],
      logo: "nookipedia.png",
      logoStyle: "banner",
      site: "https://nookipedia.com/wiki/Main_Page",
      android: "",
      ios: "",
      discord: "5Sfg3CT",
      facebook: "nookipedia",
      instagram: "nookipedia",
      twitter: "nookipedia",
      git: "",
      information: ["art", "critters", "fossils", "gameplay", "gifts", "items", "villagers"],
      tools: ["api", "wiki"]
    }, {
      name: "Nook Knack",
      description: "Catch it. Sell it. Track it.",
      languages: ["en"],
      logo: "nook-knack.png",
      logoStyle: "icon",
      site: "",
      android: "https://play.google.com/store/apps/details?id=com.digiwrecks.nookknack",
      ios: "https://apps.apple.com/us/app/nook-knack-acnh-pricing/id1505749434",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["critters"],
      tools: ["checklist"]
    }, {
      name: "Nook Market",
      description: "Buy and sell items and villagers",
      languages: ["en"],
      logo: "nook-market.png",
      logoStyle: "icon",
      site: "https://nook.market/",
      android: "",
      ios: "",
      discord: "NS5yfKS",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["items"],
      tools: ["marketplace"]
    }, {
      name: "Nooknet",
      description: "Comprehensive services, including checklists, design sharing, dream codes, tune creation, turnip calculator, and more",
      languages: ["en"],
      logo: "nooknet.png",
      logoStyle: "banner",
      site: "https://nooknet.net/",
      android: "",
      ios: "",
      discord: "RwNrqmH",
      facebook: "NookNetNet",
      instagram: "nooknetnet",
      twitter: "nooknetnet",
      git: "",
      information: ["art", "flowers", "gameplay", "villagers"],
      tools: ["checklist", "design sharing", "dreams", "town tunes", "turnips", "queueing"]
    }, {
      name: "Nook Plaza",
      description: "Item catalog, wishlists, villager gifts, island rating calc, weather forecasting, fake art detector, and more!",
      languages: ["en", "es", "de", "fr", "it", "jp", "ru", "zh"],
      logo: "nook-plaza.png",
      logoStyle: "banner",
      site: "https://nookplaza.net/",
      android: "",
      ios: "",
      discord: "SppmqEk",
      facebook: "",
      instagram: "nookplaza",
      twitter: "nook_plaza",
      git: "",
      information: ["art", "critters", "fossils", "gifts", "items", "villagers"],
      tools: ["checklist", "fake art", "island rating", "simulator", "weather"]
    }, {
      name: "Nooks Guide",
      description: "List of critters, items, villagers, recipes, and more",
      languages: ["en"],
      logo: "nooks-guide.jpg",
      logoStyle: "icon",
      site: "https://nooksguide.com/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["art", "critters", "fossils", "villagers"],
      tools: ["checklist", "design sharing", "dreams", "turnips", "queueing"]
    }, {
      name: "Nook's Island",
      description: "Browse from 20,000+ user-submitted custom designs, or submit your own",
      languages: ["en"],
      logo: "nooks-island.png",
      logoStyle: "banner",
      site: "https://nooksisland.com/designs",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "nooks.island",
      twitter: "NooksIsland",
      git: "",
      information: ["critters"],
      tools: ["design sharing", "dreams", "marketplace"]
    }, {
      name: "Stalks.io",
      description: "Get stalk price predictions, forecasts and advice for you and your friends' islands",
      languages: ["en"],
      logo: "stalks-io.png",
      logoStyle: "banner",
      site: "https://stalks.io/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "stalksio",
      git: "",
      information: [],
      tools: ["turnips"]
    }, {
      name: "Tanuki Forest",
      description: "Database of items, critters, clothing, and villagers",
      languages: ["en"],
      logo: "tanuki-forest.gif",
      logoStyle: "banner",
      site: "https://www.tanukiforest.com",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "",
      information: ["art", "critters", "fossils", "items", "villages"],
      tools: []
    }, {
      name: "Turnip.Exchange",
      description: "Queue for turnip selling and more",
      languages: ["en"],
      logo: "turnip-exchange.png",
      logoStyle: "banner",
      site: "https://turnip.exchange/",
      android: "",
      ios: "",
      discord: "warpworld",
      facebook: "",
      instagram: "",
      twitter: "WarpWorld",
      git: "",
      information: [],
      tools: ["queueing"]
    }, {
      name: "Turnip Prophet",
      description: "Turnip price prediction tool available in multiple languages.",
      languages: ["en", "es", "fr", "de", "it", "nl", "ru", "zh", "jp", "ko"],
      logo: "",
      logoStyle: "",
      site: "https://turnipprophet.io/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "",
      twitter: "",
      git: "https://github.com/mikebryant/ac-nh-turnip-prices",
      information: [],
      tools: ["turnips"]
    }, {
      name: "VillagerDB",
      description: "Database of items and villagers, with a wishlist maker",
      languages: ["en"],
      logo: "villagerdb.jpg",
      logoStyle: "icon",
      site: "https://villagerdb.com/",
      android: "",
      ios: "",
      discord: "n4527pm",
      facebook: "",
      instagram: "",
      twitter: "villagerdb",
      git: "https://github.com/jefflomacy/villagerdb",
      information: ["art", "critters", "fossils", "items", "villagers"],
      tools: ["checklist"]
    }, {
      name: "VillagersClub",
      description: "Villagers, clothing, and furniture info",
      languages: ["en"],
      logo: "villagers-club.png",
      logoStyle: "banner",
      site: "https://villagers.club/",
      android: "",
      ios: "",
      discord: "dr89DQZ",
      facebook: "VillagersClub",
      instagram: "villagersclub",
      twitter: "VillagersClub",
      git: "",
      information: ["critters", "items", "villagers"],
      tools: ["checklist", "marketplace"]
    }, {
      name: "Yue's ACNH Guides",
      description: "Visual guides made by Yue, available in multiple languages",
      languages: ["en", "de", "jp", "zh"],
      logo: "yue's-acnh-guides.png",
      logoStyle: "",
      site: "https://yuexr.github.io/acnh/",
      android: "",
      ios: "",
      discord: "",
      facebook: "",
      instagram: "yuecrossing",
      twitter: "yuecrossing",
      git: "",
      information: ["flowers", "gameplay"],
      tools: []
    }];
    /***/
  },

  /***/
  "./src/app/directory/directory.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/directory/directory.component.ts ***!
    \**************************************************/

  /*! exports provided: DirectoryComponent */

  /***/
  function srcAppDirectoryDirectoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectoryComponent", function () {
      return DirectoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _data_project_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data/project-data */
    "./src/app/data/project-data.ts");
    /* harmony import */


    var _data_languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data/languages */
    "./src/app/data/languages.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-multiselect-dropdown */
    "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");

    function DirectoryComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DirectoryComponent_div_6_Template_input_change_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.applyFilters();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", lang_r4.code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", lang_r4.code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", lang_r4.code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r4.text);
      }
    }

    function DirectoryComponent_span_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sort A \u2192 Z");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DirectoryComponent_span_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sort Z \u2192 A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DirectoryComponent_div_40_div_3_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", p_r7.site, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("logo-border", p_r7.logoBorder);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/logos/", p_r7.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", p_r7.name);
      }
    }

    function DirectoryComponent_div_40_div_3_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 45);
      }

      if (rf & 2) {
        var p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("logo-border", p_r7.logoBorder);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/logos/", p_r7.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", p_r7.name);
      }
    }

    function DirectoryComponent_div_40_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DirectoryComponent_div_40_div_3_a_1_Template, 2, 5, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DirectoryComponent_div_40_div_3_ng_template_2_Template, 1, 4, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.site !== undefined && p_r7.site !== "")("ngIfElse", _r21);
      }
    }

    function DirectoryComponent_div_40_div_4_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", p_r7.site, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r7.name);
      }
    }

    function DirectoryComponent_div_40_div_4_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r7.name);
      }
    }

    function DirectoryComponent_div_40_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DirectoryComponent_div_40_div_4_a_1_Template, 3, 2, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DirectoryComponent_div_40_div_4_ng_template_2_Template, 2, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.site !== undefined && p_r7.site !== "")("ngIfElse", _r27);
      }
    }

    function DirectoryComponent_div_40_span_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectoryComponent_div_40_span_10_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var c_r32 = ctx.$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r33.singleInformationFilter(c_r32);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r32);
      }
    }

    function DirectoryComponent_div_40_span_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectoryComponent_div_40_span_11_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var c_r35 = ctx.$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r36.singleFeatureFilter(c_r35);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r35);
      }
    }

    function DirectoryComponent_div_40_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", p_r7.site, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DirectoryComponent_div_40_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", p_r7.android, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DirectoryComponent_div_40_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", p_r7.ios, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DirectoryComponent_div_40_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/", p_r7.facebook, "/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DirectoryComponent_div_40_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://twitter.com/", p_r7.twitter, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DirectoryComponent_div_40_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.instagram.com/", p_r7.instagram, "/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DirectoryComponent_div_40_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://discord.gg/", p_r7.discord, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DirectoryComponent_div_40_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", p_r7.git, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DirectoryComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DirectoryComponent_div_40_div_3_Template, 4, 2, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DirectoryComponent_div_40_div_4_Template, 4, 2, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DirectoryComponent_div_40_span_10_Template, 2, 1, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DirectoryComponent_div_40_span_11_Template, 2, 1, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DirectoryComponent_div_40_div_13_Template, 4, 1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DirectoryComponent_div_40_div_14_Template, 4, 1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DirectoryComponent_div_40_div_15_Template, 4, 1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DirectoryComponent_div_40_div_16_Template, 4, 1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DirectoryComponent_div_40_div_17_Template, 4, 1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DirectoryComponent_div_40_div_18_Template, 4, 1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DirectoryComponent_div_40_div_19_Template, 4, 1, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DirectoryComponent_div_40_div_20_Template, 4, 1, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.logo !== undefined && p_r7.logo !== "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.logoStyle === "icon" || p_r7.logo === undefined || p_r7.logo === "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r7.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", p_r7.information);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", p_r7.tools);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.site !== undefined && p_r7.site !== "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.android);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.ios);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.facebook);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.twitter);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.instagram);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.discord);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", p_r7.git);
      }
    }

    var DirectoryComponent = /*#__PURE__*/function () {
      function DirectoryComponent() {
        _classCallCheck(this, DirectoryComponent);

        this.langForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          lang: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.languageList = _data_languages__WEBPACK_IMPORTED_MODULE_3__["languages"];
        this.dropdownListPlatforms = [];
        this.dropdownListInformation = [];
        this.dropdownListTools = [];
        this.selectedItemsPlatforms = [];
        this.selectedItemsInformation = [];
        this.selectedItemsTools = [];
        this.shuffledData = this.shuffle(_data_project_data__WEBPACK_IMPORTED_MODULE_2__["projectsData"]);
        this.projects = this.shuffledData;
        this.filterData = this.shuffledData;
        this.ifFilterMeetsAll = false;
        this.sorted = false;
      }

      _createClass(DirectoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Set default value to English and filter:
          this.langForm.patchValue({
            lang: 'en',
            tc: true
          }); // Set filter dropdown values:

          this.dropdownListPlatforms = [{
            item_id: 'website',
            item_text: 'Website'
          }, {
            item_id: 'android',
            item_text: 'Android'
          }, {
            item_id: 'ios',
            item_text: 'iOS'
          }];
          this.dropdownListInformation = [{
            item_id: 'art',
            item_text: 'Art'
          }, {
            item_id: 'critters',
            item_text: 'Critters'
          }, {
            item_id: 'flowers',
            item_text: 'Flowers'
          }, {
            item_id: 'fossils',
            item_text: 'Fossils'
          }, {
            item_id: 'gameplay',
            item_text: 'Gameplay'
          }, {
            item_id: 'gifts',
            item_text: 'Gifting'
          }, {
            item_id: 'items',
            item_text: 'Items'
          }, {
            item_id: 'villagers',
            item_text: 'Villagers'
          }];
          this.dropdownListTools = [{
            item_id: 'api',
            item_text: 'API'
          }, {
            item_id: 'checklist',
            item_text: 'Checklist'
          }, {
            item_id: 'design sharing',
            item_text: 'Design Sharing'
          }, {
            item_id: 'dreams',
            item_text: 'Dream Sharing'
          }, {
            item_id: 'fake art',
            item_text: 'Fake Art Detection'
          }, {
            item_id: 'island rating',
            item_text: 'Island Rating Calc'
          }, {
            item_id: 'marketplace',
            item_text: 'Marketplace'
          }, {
            item_id: 'music',
            item_text: 'Music Player'
          }, {
            item_id: 'queueing',
            item_text: 'Queueing'
          }, {
            item_id: 'simulator',
            item_text: 'Simulator'
          }, {
            item_id: 'town tunes',
            item_text: 'Town Tunes'
          }, {
            item_id: 'turnips',
            item_text: 'Turnip Pricing'
          }, {
            item_id: 'weather',
            item_text: 'Weather Forecast'
          }, {
            item_id: 'wiki',
            item_text: 'Wiki'
          }]; // Dropdown settings:

          this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            itemsShowLimit: 3,
            allowSearchFilter: false,
            enableCheckAll: false
          };
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          document.body.scrollTop = 0; // For Safari

          document.documentElement.scrollTop = 0;
        }
      }, {
        key: "resetFilters",
        value: function resetFilters() {
          this.selectedItemsPlatforms = [];
          this.selectedItemsInformation = [];
          this.selectedItemsTools = [];
          this.applyFilters();
        }
      }, {
        key: "applyFilters",
        value: function applyFilters() {
          var _this = this;

          var selectedItemsPlatforms = [];

          var _iterator = _createForOfIteratorHelper(this.selectedItemsPlatforms),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var platform = _step.value;
              selectedItemsPlatforms.push(platform.item_id);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var selectedItemsInformation = [];

          var _iterator2 = _createForOfIteratorHelper(this.selectedItemsInformation),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var info = _step2.value;
              selectedItemsInformation.push(info.item_id);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          var selectedItemsTools = [];

          var _iterator3 = _createForOfIteratorHelper(this.selectedItemsTools),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var tool = _step3.value;
              selectedItemsTools.push(tool.item_id);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          this.projects = this.filterData.filter(function (item) {
            var platforms = [];

            if (item.site !== '') {
              platforms.push('website');
            }

            if (item.android !== '') {
              platforms.push('android');
            }

            if (item.ios !== '') {
              platforms.push('ios');
            }

            var totalLength = _this.selectedItemsPlatforms.length + _this.selectedItemsInformation.length + _this.selectedItemsTools.length;

            if (_this.ifFilterMeetsAll) {
              return (!totalLength || (!selectedItemsPlatforms.length || selectedItemsPlatforms.every(function (p) {
                return platforms.includes(p);
              })) && (!selectedItemsInformation.length || selectedItemsInformation.every(function (c) {
                return item.information.includes(c);
              })) && (!selectedItemsTools.length || selectedItemsTools.every(function (c) {
                return item.tools.includes(c);
              }))) && item.languages.includes(_this.langForm.get('lang').value);
            } else {
              return (!totalLength || (!selectedItemsPlatforms.length || selectedItemsPlatforms.some(function (p) {
                return platforms.includes(p);
              })) && (!selectedItemsInformation.length || selectedItemsInformation.some(function (c) {
                return item.information.includes(c);
              })) && (!selectedItemsTools.length || selectedItemsTools.some(function (c) {
                return item.tools.includes(c);
              }))) && item.languages.includes(_this.langForm.get('lang').value);
            }
          });
        }
      }, {
        key: "singleInformationFilter",
        value: function singleInformationFilter(selection) {
          var _this2 = this;

          this.selectedItemsPlatforms = [];
          this.selectedItemsInformation = [this.dropdownListInformation.filter(function (obj) {
            return obj.item_id === selection;
          })[0]];
          this.selectedItemsTools = [];
          var categories = [selection];
          this.projects = this.filterData.filter(function (item) {
            var cats = item.information.concat(item.tools);

            if (_this2.ifFilterMeetsAll) {
              return (categories.length === 0 || categories.every(function (c) {
                return cats.includes(c);
              })) && item.languages.includes(_this2.langForm.get('lang').value);
            } else {
              return (categories.length === 0 || categories.some(function (c) {
                return cats.indexOf(c) >= 0;
              })) && item.languages.includes(_this2.langForm.get('lang').value);
            }
          });
          this.scrollToTop();
        }
      }, {
        key: "singleFeatureFilter",
        value: function singleFeatureFilter(selection) {
          var _this3 = this;

          this.selectedItemsPlatforms = [];
          this.selectedItemsInformation = [];
          this.selectedItemsTools = [this.dropdownListTools.filter(function (obj) {
            return obj.item_id === selection;
          })[0]];
          var categories = [selection];
          this.projects = this.filterData.filter(function (item) {
            var cats = item.information.concat(item.tools);

            if (_this3.ifFilterMeetsAll) {
              return (categories.length === 0 || categories.every(function (c) {
                return cats.includes(c);
              })) && item.languages.includes(_this3.langForm.get('lang').value);
            } else {
              return (categories.length === 0 || categories.some(function (c) {
                return cats.indexOf(c) >= 0;
              })) && item.languages.includes(_this3.langForm.get('lang').value);
            }
          });
          this.scrollToTop();
        }
      }, {
        key: "filterToggle",
        value: function filterToggle(event) {
          if (event.target.checked) {
            this.ifFilterMeetsAll = true;
          } else {
            this.ifFilterMeetsAll = false;
          }

          this.applyFilters();
        }
      }, {
        key: "shuffleProjects",
        value: function shuffleProjects() {
          this.filterData = this.shuffle(this.filterData);
          this.sorted = false;
          this.applyFilters();
        }
      }, {
        key: "shuffle",
        value: function shuffle(arr) {
          for (var i = 0; i < arr.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (arr.length - i));
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
          }

          return arr;
        }
      }, {
        key: "sortProjects",
        value: function sortProjects() {
          if (this.sorted) {
            this.filterData.sort(this.sortZToA);
            this.sorted = false;
          } else {
            this.filterData.sort(this.sortAToZ);
            this.sorted = true;
          }

          this.applyFilters();
        }
      }, {
        key: "sortAToZ",
        value: function sortAToZ(a, b) {
          var name1 = a.name.toUpperCase();
          var name2 = b.name.toUpperCase();
          var comparison = 0;

          if (name1 > name2) {
            comparison = 1;
          } else if (name1 < name2) {
            comparison = -1;
          }

          return comparison;
        }
      }, {
        key: "sortZToA",
        value: function sortZToA(a, b) {
          var name1 = a.name.toUpperCase();
          var name2 = b.name.toUpperCase();
          var comparison = 0;

          if (name1 < name2) {
            comparison = 1;
          } else if (name1 > name2) {
            comparison = -1;
          }

          return comparison;
        }
      }]);

      return DirectoryComponent;
    }();

    DirectoryComponent.ɵfac = function DirectoryComponent_Factory(t) {
      return new (t || DirectoryComponent)();
    };

    DirectoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DirectoryComponent,
      selectors: [["app-directory"]],
      decls: 41,
      vars: 17,
      consts: [[1, "box", "centered"], [1, "content-div"], [1, "font-tools", "coustard"], ["id", "lang-form", 1, "coustard", 3, "formGroup"], [4, "ngFor", "ngForOf"], ["id", "filters-container", 1, "flex-container"], [1, "flex-item", "filter"], [1, "font-platforms", "coustard"], [3, "settings", "placeholder", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect"], [1, "font-information", "coustard"], [1, "font-prose", "centered", "table"], [1, "switch", 2, "margin-right", "10px"], ["type", "checkbox", 3, "change"], [1, "slider"], [1, "toggle-label"], [1, "font-prose"], [1, "button", 3, "click"], [4, "ngIf"], ["id", "heading-bottom"], [1, "results", "constrained"], ["class", "listing max-width", 4, "ngFor", "ngForOf"], [3, "for"], ["type", "radio", "name", "lang", "formControlName", "lang", 3, "id", "value", "change"], [1, "listing", "max-width"], [1, "flex-container-inline", "name-container"], ["class", "flex-item", 4, "ngIf"], [1, "description"], [1, "table", "max-width", 2, "padding", "10px 0px"], [1, "description", 2, "display", "table-cell", "text-align", "center", "vertical-align", "middle"], [1, "tags"], ["class", "tag information hover", 3, "click", 4, "ngFor", "ngForOf"], ["class", "tag tools hover", 3, "click", 4, "ngFor", "ngForOf"], [1, "flex-container", "link-button"], ["class", "link-button site", "tabindex", "0", 4, "ngIf"], ["class", "link-button android", "tabindex", "0", 4, "ngIf"], ["class", "link-button ios", "tabindex", "0", 4, "ngIf"], ["class", "link-button facebook", "tabindex", "0", 4, "ngIf"], ["class", "link-button twitter", "tabindex", "0", 4, "ngIf"], ["class", "link-button instagram", "tabindex", "0", 4, "ngIf"], ["class", "link-button discord", "tabindex", "0", 4, "ngIf"], ["class", "link-button git", "tabindex", "0", 4, "ngIf"], [1, "flex-item"], ["target", "_blank", "nofollow", "", 3, "href", 4, "ngIf", "ngIfElse"], ["noLink", ""], ["target", "_blank", "nofollow", "", 3, "href"], [3, "src", "alt"], [1, "title"], [1, "tag", "information", "hover", 3, "click"], [1, "tag", "tools", "hover", 3, "click"], ["tabindex", "0", 1, "link-button", "site"], ["src", "assets/images/links/link.png", "alt", "Visit website", "width", "16px", 1, "link-button"], ["tabindex", "0", 1, "link-button", "android"], ["src", "assets/images/links/android.png", "alt", "Download on Google Play", "width", "16px", 1, "link-button"], ["tabindex", "0", 1, "link-button", "ios"], ["src", "assets/images/links/apple.png", "alt", "Download on the App Store", "width", "16px", 1, "link-button"], ["tabindex", "0", 1, "link-button", "facebook"], ["src", "assets/images/links/facebook.png", "alt", "Facebook profile", "width", "16px", 1, "link-button"], ["tabindex", "0", 1, "link-button", "twitter"], ["src", "assets/images/links/twitter.png", "alt", "Twitter profile", "width", "16px", 1, "link-button"], ["tabindex", "0", 1, "link-button", "instagram"], ["src", "assets/images/links/instagram.png", "alt", "Instagram profile", "width", "16px", 1, "link-button"], ["tabindex", "0", 1, "link-button", "discord"], ["src", "assets/images/links/discord.png", "alt", "Discord invite", "width", "16px", 1, "link-button"], ["tabindex", "0", 1, "link-button", "git"], ["src", "assets/images/links/git.png", "alt", "Git link", "width", "16px", 1, "link-button"]],
      template: function DirectoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Resource Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DirectoryComponent_div_6_Template, 5, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Platforms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ng-multiselect-dropdown", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DirectoryComponent_Template_ng_multiselect_dropdown_ngModelChange_13_listener($event) {
            return ctx.selectedItemsPlatforms = $event;
          })("onSelect", function DirectoryComponent_Template_ng_multiselect_dropdown_onSelect_13_listener() {
            return ctx.applyFilters();
          })("onDeSelect", function DirectoryComponent_Template_ng_multiselect_dropdown_onDeSelect_13_listener() {
            return ctx.applyFilters();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ng-multiselect-dropdown", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DirectoryComponent_Template_ng_multiselect_dropdown_ngModelChange_17_listener($event) {
            return ctx.selectedItemsInformation = $event;
          })("onSelect", function DirectoryComponent_Template_ng_multiselect_dropdown_onSelect_17_listener() {
            return ctx.applyFilters();
          })("onDeSelect", function DirectoryComponent_Template_ng_multiselect_dropdown_onDeSelect_17_listener() {
            return ctx.applyFilters();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tools");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ng-multiselect-dropdown", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DirectoryComponent_Template_ng_multiselect_dropdown_ngModelChange_21_listener($event) {
            return ctx.selectedItemsTools = $event;
          })("onSelect", function DirectoryComponent_Template_ng_multiselect_dropdown_onSelect_21_listener() {
            return ctx.applyFilters();
          })("onDeSelect", function DirectoryComponent_Template_ng_multiselect_dropdown_onDeSelect_21_listener() {
            return ctx.applyFilters();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DirectoryComponent_Template_input_change_24_listener($event) {
            return ctx.filterToggle($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Only show listings that match all selected filters within each category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectoryComponent_Template_button_click_29_listener() {
            return ctx.resetFilters();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Reset Filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectoryComponent_Template_button_click_33_listener() {
            return ctx.shuffleProjects();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Randomize Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DirectoryComponent_Template_button_click_35_listener() {
            return ctx.sortProjects();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DirectoryComponent_span_36_Template, 2, 0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DirectoryComponent_span_37_Template, 2, 0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DirectoryComponent_div_40_Template, 21, 13, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.langForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languageList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.dropdownSettings)("placeholder", "Select platform...")("data", ctx.dropdownListPlatforms)("ngModel", ctx.selectedItemsPlatforms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.dropdownSettings)("placeholder", "Select info...")("data", ctx.dropdownListInformation)("ngModel", ctx.selectedItemsInformation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.dropdownSettings)("placeholder", "Select tools...")("data", ctx.dropdownListTools)("ngModel", ctx.selectedItemsTools);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sorted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sorted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".content-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.description[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: .95em;\n  padding: 10px 5px 0;\n}\n\n.results[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 0 70px;\n  grid-template-columns:repeat(auto-fill, 450px);\n  justify-content: center;\n  margin-left: -6px;\n  width: 99%;\n}\n\n\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 5px;\n  white-space: nowrap;\n}\n\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n#filters-container[_ngcontent-%COMP%] {\n  -moz-column-gap: 40px;\n       column-gap: 40px;\n  margin: 0 auto;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n#lang-form[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 600px;\n}\n\n.filter[_ngcontent-%COMP%] {\n  padding: 0px 5px 10px 5px;\n}\n\n.toggle-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: .9em;\n  padding-bottom: 20px;\n  vertical-align: middle;\n}\n\n\n\na.button[_ngcontent-%COMP%] {\n  background-color: green;\n  border-radius: 4px;\n  color: #FFFFFF;\n  display: inline-block;\n  min-width: 50px;\n  padding: 8px;\n  text-align: center;\n  text-decoration: none;\n}\n\nlabel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #575757;\n}\n\n.listing[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border: 1px solid #CCCCCC;\n  border-radius: 5px;\n  margin: 1em auto;\n  padding: 20px 7px 10px;\n  position: relative;\n  text-align: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: 'Coustard', 'Linux Libertine', Georgia, Times, serif;\n  font-size: 1.6em;\n}\n\n.name-container[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n.name-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 100px;\n  max-width: 90%;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  max-width: 60%;\n}\n\n.logo-border[_ngcontent-%COMP%] {\n  filter: drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black);\n}\n\n.link-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 6px 0 3px;\n}\n\n.link-button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-radius: 7px;\n  flex: 1;\n  margin: 0 3px;\n}\n\n.link-button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  filter: brightness(85%);\n}\n\n.link-button.site[_ngcontent-%COMP%] {\n  background-color: #666699;\n  box-shadow: 2px 2px #2b2b68;\n}\n\n.link-button.android[_ngcontent-%COMP%] {\n  background-color: #3DDC84;\n  box-shadow: 2px 2px #00bd52;\n}\n\n.link-button.ios[_ngcontent-%COMP%] {\n  background-color: #666666;\n  box-shadow: 2px 2px #040303;\n}\n\n.link-button.facebook[_ngcontent-%COMP%] {\n  background-color: #3C64A7;\n  box-shadow: 2px 2px #13397a;\n}\n\n.link-button.twitter[_ngcontent-%COMP%] {\n  background-color: #00B3E0;\n  box-shadow: 2px 2px #00637a;\n}\n\n.link-button.instagram[_ngcontent-%COMP%] {\n  background-color: #F00075;\n  box-shadow: 2px 2px #b60059;\n}\n\n.link-button.discord[_ngcontent-%COMP%] {\n  background-color: #7289DA;\n  box-shadow: 2px 2px #334dad;\n}\n\n.link-button.git[_ngcontent-%COMP%] {\n  background-color: #f14e32;\n  box-shadow: 2px 2px #bf3b24;\n}\n\n.tags[_ngcontent-%COMP%] {\n  padding: 0 5px 10px;\n}\n\n.tag[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  color: #464646;\n  display: inline-block;\n  font-size: .8em;\n  margin: 5px;\n  padding: 2px 4px;\n}\n\n.tag.platforms[_ngcontent-%COMP%] {\n  background: #A6D8E5;\n  border: 2px solid #359EBB;\n}\n\n.tag.information[_ngcontent-%COMP%] {\n  background: #F5EA9A;\n  border: 2px solid #F1E26F;\n}\n\n.tag.tools[_ngcontent-%COMP%] {\n  background: #AFD9C0;\n  border: 2px solid #61A33E;\n}\n\n\n\n@media only screen and (max-width: 750px) {\n  a.button[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  \n  #filters-container[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  \n  .results[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, 90%) !important;\n  }\n  \n  .listing[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n\n  .name-container[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  \n  .title[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    max-width: 200px;\n  }\n  \n  .flex-item.filter[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    width: 90%;\n  }\n  \n  .flex-container-inline[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlyZWN0b3J5L2RpcmVjdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7O0FBRVg7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw4Q0FBOEM7RUFDOUMsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBZ0I7T0FBaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUEsYUFBYTs7QUFFYjtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUVBQWlFO0VBQ2pFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUVFLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQSxlQUFlOztBQUVmO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0Usd0RBQXdEO0VBQzFEOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGlyZWN0b3J5L2RpcmVjdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTEFZT1VUICovXG5cbi5jb250ZW50LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAuOTVlbTtcbiAgcGFkZGluZzogMTBweCA1cHggMDtcbn1cblxuLnJlc3VsdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMCA3MHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KGF1dG8tZmlsbCwgNDUwcHgpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XG4gIHdpZHRoOiA5OSU7XG59XG5cbi8qIEZJTFRFUlMgKi9cblxuZm9ybSBsYWJlbCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuZm9ybSBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmZvcm0gbGFiZWwgc3BhbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbiNmaWx0ZXJzLWNvbnRhaW5lciB7XG4gIGNvbHVtbi1nYXA6IDQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbiNsYW5nLWZvcm0ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuLmZpbHRlciB7XG4gIHBhZGRpbmc6IDBweCA1cHggMTBweCA1cHg7XG59XG5cbi50b2dnbGUtbGFiZWwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBmb250LXNpemU6IC45ZW07XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4vKiBMSVNUSU5HUyAqL1xuXG5hLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGFiZWwgaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxubGFiZWwgc3BhbiB7XG4gIGNvbG9yOiAjNTc1NzU3O1xufVxuXG4ubGlzdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgcGFkZGluZzogMjBweCA3cHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ291c3RhcmQnLCAnTGludXggTGliZXJ0aW5lJywgR2VvcmdpYSwgVGltZXMsIHNlcmlmO1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuXG4ubmFtZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmFtZS1jb250YWluZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG1heC13aWR0aDogOTAlO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG59XG5cbi5sb2dvLWJvcmRlciB7XG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygxcHgxcHgwYmxhY2spIGRyb3Atc2hhZG93KC0xcHggLTFweCAwIGJsYWNrKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDAgYmxhY2spIGRyb3Atc2hhZG93KC0xcHggLTFweCAwIGJsYWNrKTtcbn1cblxuLmxpbmstYnV0dG9uIGltZyB7XG4gIHBhZGRpbmc6IDZweCAwIDNweDtcbn1cblxuLmxpbmstYnV0dG9uIGRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwIDNweDtcbn1cblxuLmxpbmstYnV0dG9uIGRpdjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xufVxuXG4ubGluay1idXR0b24uc2l0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY2OTk7XG4gIGJveC1zaGFkb3c6IDJweCAycHggIzJiMmI2ODtcbn1cblxuLmxpbmstYnV0dG9uLmFuZHJvaWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0REQzg0O1xuICBib3gtc2hhZG93OiAycHggMnB4ICMwMGJkNTI7XG59XG5cbi5saW5rLWJ1dHRvbi5pb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xuICBib3gtc2hhZG93OiAycHggMnB4ICMwNDAzMDM7XG59XG5cbi5saW5rLWJ1dHRvbi5mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQzY0QTc7XG4gIGJveC1zaGFkb3c6IDJweCAycHggIzEzMzk3YTtcbn1cblxuLmxpbmstYnV0dG9uLnR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCM0UwO1xuICBib3gtc2hhZG93OiAycHggMnB4ICMwMDYzN2E7XG59XG5cbi5saW5rLWJ1dHRvbi5pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjAwMDc1O1xuICBib3gtc2hhZG93OiAycHggMnB4ICNiNjAwNTk7XG59XG5cbi5saW5rLWJ1dHRvbi5kaXNjb3JkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyODlEQTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAjMzM0ZGFkO1xufVxuXG4ubGluay1idXR0b24uZ2l0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxNGUzMjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAjYmYzYjI0O1xufVxuXG4udGFncyB7XG4gIHBhZGRpbmc6IDAgNXB4IDEwcHg7XG59XG5cbi50YWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogIzQ2NDY0NjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IC44ZW07XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAycHggNHB4O1xufVxuXG4udGFnLnBsYXRmb3JtcyB7XG4gIGJhY2tncm91bmQ6ICNBNkQ4RTU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNTlFQkI7XG59XG5cbi50YWcuaW5mb3JtYXRpb24ge1xuICBiYWNrZ3JvdW5kOiAjRjVFQTlBO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRjFFMjZGO1xufVxuXG4udGFnLnRvb2xzIHtcbiAgYmFja2dyb3VuZDogI0FGRDlDMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzYxQTMzRTtcbn1cblxuLyogUkVTUE9OU0lWRSAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIGEuYnV0dG9uIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIFxuICAjZmlsdGVycy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAucmVzdWx0cyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCA5MCUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5saXN0aW5nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAubmFtZS1jb250YWluZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cbiAgXG4gIC5mbGV4LWl0ZW0uZmlsdGVyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIFxuICAuZmxleC1jb250YWluZXItaW5saW5lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-directory',
          templateUrl: './directory.component.html',
          styleUrls: ['./directory.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/privacy/privacy.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/privacy/privacy.component.ts ***!
    \**********************************************/

  /*! exports provided: PrivacyComponent */

  /***/
  function srcAppPrivacyPrivacyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function () {
      return PrivacyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PrivacyComponent = /*#__PURE__*/function () {
      function PrivacyComponent() {
        _classCallCheck(this, PrivacyComponent);
      }

      _createClass(PrivacyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrivacyComponent;
    }();

    PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) {
      return new (t || PrivacyComponent)();
    };

    PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrivacyComponent,
      selectors: [["app-privacy"]],
      decls: 33,
      vars: 0,
      consts: [[1, "box"], ["href", "https://analytics.google.com/analytics/web/"], ["href", "https://analytics.google.com/"], ["href", "https://policies.google.com/privacy"]],
      template: function PrivacyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Last Update: 2020-10-04");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " By using our site, you consent to our privacy policy. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Any external websites we link to have their own separate and independent privacy policies; we have no responsibility or control over how these websites conduct themselves. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "What information do we collect?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ACNH.Directory is delivered through ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cloudflare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "'s CDN, which includes basic privacy-friendly analytics. We also use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Google Analytics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " to collect, monitor and analyze usage of ACNH.Directory. Google Analytics's privacy policy can be viewed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ". This service is used to determine the popularity of certain content, and to better understand online activity. By accessing ACNH.Directory, you consent to the collection and use of your information by Google Analytics. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "California Online Privacy Protection Act Compliance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " We have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We therefore do not distribute your personal information to outside parties without your consent. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Childrens Online Privacy Protection Act Compliance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), as we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90%;\n  max-width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmFjeS9wcml2YWN5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-privacy',
          templateUrl: './privacy.component.html',
          styleUrls: ['./privacy.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/acnh.directory/acnh.directory/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map