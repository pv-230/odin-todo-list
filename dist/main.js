/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/projects/projects.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/projects/projects.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/Roboto-Regular.ttf */ "./src/assets/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/hamburger-icon.svg */ "./src/assets/images/hamburger-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/backburger.svg */ "./src/assets/images/backburger.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/forwardburger.svg */ "./src/assets/images/forwardburger.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/delete-outline.svg */ "./src/assets/images/delete-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/plus.svg */ "./src/assets/images/plus.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'RobotoRegular';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\n:root {\n  /* Colors */\n  --sidebar-bg: #eeeeee;\n  --sidebar-selected: #b1b1b1;\n  --sidebar-menu-hover: #dddddd;\n  --sidebar-add-hover: #90ff6e;\n  --sidebar-delete-hover: #ff6464;\n\n  /* Sizes */\n  --sidebar-width: 300px;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  width: var(--sidebar-width);\n  min-width: var(--sidebar-width);\n  box-shadow: 2px 0px 8px #bbbbbb;\n  font-family: 'RobotoRegular';\n  background-color: var(--sidebar-bg);\n  z-index: 1;\n}\n\n.projects_closed {\n  width: fit-content;\n  min-width: fit-content;\n  position: absolute;\n  background-color: transparent;\n  box-shadow: none;\n}\n\n/* Sidebar menu top */\n\n.projects__title-group {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid var(--sidebar-selected);\n}\n\n.projects__title-group_closed {\n  border-bottom: none;\n}\n\n.projects__menu-title {\n  font-size: 48px;\n}\n\n.projects__menu-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 48px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.projects__menu-btn:hover {\n  background-color: var(--sidebar-menu-hover);\n  cursor: pointer;\n}\n\n.projects__menu-btn_open:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n}\n\n.projects__menu-btn_closed:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: cover;\n  background-color: transparent;\n}\n\n.projects__menu-icon {\n  width: 48px;\n  height: 48px;\n}\n\n/* Sidebar items */\n\n.projects__item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 20px;\n  font-family: RobotoRegular;\n  height: 58px;\n}\n\n.projects__item:hover:not(.projects__item_selected) {\n  background-color: #d8d8d8;\n}\n\n.projects__item_selected {\n  background-color: var(--sidebar-selected);\n}\n\n.projects__item-title {\n  font-size: 32px;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.projects__delete-btn {\n  width: 48px;\n  height: 48px;\n  border-radius: 5px;\n}\n\n.projects__item:hover .projects__delete-btn {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: cover;\n}\n\n.projects__delete-btn:hover {\n  background-color: var(--sidebar-delete-hover);\n  cursor: pointer;\n}\n\n/* Sidebar new item input */\n\n.projects__new-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 20px;\n  font-family: RobotoRegular;\n}\n\n.projects__new-item-input {\n  border: none;\n  background-color: #dddddd;\n  width: 200px;\n  height: 32px;\n  border-radius: 5px;\n  font-size: 18px;\n  padding: 0 5px;\n}\n\n.projects__new-item-input:focus {\n  outline: 2px solid var(--input-focus-border);\n}\n\n.projects__add-btn {\n  width: 48px;\n  height: 48px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.projects__add-btn:hover {\n  background-color: var(--sidebar-add-hover);\n  cursor: pointer;\n}\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/components/projects/projects.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,+DAAoE;AACtE;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,2BAA2B;EAC3B,6BAA6B;EAC7B,4BAA4B;EAC5B,+BAA+B;;EAE/B,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,+BAA+B;EAC/B,+BAA+B;EAC/B,4BAA4B;EAC5B,mCAAmC;EACnC,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,qBAAqB;;AAErB;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,gDAAgD;AAClD;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,yDAA6D;EAC7D,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,2CAA2C;EAC3C,eAAe;AACjB;;AAEA;EACE,yDAAyD;EACzD,sBAAsB;AACxB;;AAEA;EACE,yDAA4D;EAC5D,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,kBAAkB;;AAElB;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,yDAA6D;EAC7D,sBAAsB;AACxB;;AAEA;EACE,6CAA6C;EAC7C,eAAe;AACjB;;AAEA,2BAA2B;;AAE3B;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yDAAmD;EACnD,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;EAC1C,eAAe;AACjB;;AAEA;EACE,aAAa;AACf","sourcesContent":["@font-face {\n  font-family: 'RobotoRegular';\n  src: url('../../assets/fonts/Roboto-Regular.ttf') format('truetype');\n}\n\n:root {\n  /* Colors */\n  --sidebar-bg: #eeeeee;\n  --sidebar-selected: #b1b1b1;\n  --sidebar-menu-hover: #dddddd;\n  --sidebar-add-hover: #90ff6e;\n  --sidebar-delete-hover: #ff6464;\n\n  /* Sizes */\n  --sidebar-width: 300px;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  width: var(--sidebar-width);\n  min-width: var(--sidebar-width);\n  box-shadow: 2px 0px 8px #bbbbbb;\n  font-family: 'RobotoRegular';\n  background-color: var(--sidebar-bg);\n  z-index: 1;\n}\n\n.projects_closed {\n  width: fit-content;\n  min-width: fit-content;\n  position: absolute;\n  background-color: transparent;\n  box-shadow: none;\n}\n\n/* Sidebar menu top */\n\n.projects__title-group {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid var(--sidebar-selected);\n}\n\n.projects__title-group_closed {\n  border-bottom: none;\n}\n\n.projects__menu-title {\n  font-size: 48px;\n}\n\n.projects__menu-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 48px;\n  background-image: url(../../assets/images/hamburger-icon.svg);\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.projects__menu-btn:hover {\n  background-color: var(--sidebar-menu-hover);\n  cursor: pointer;\n}\n\n.projects__menu-btn_open:hover {\n  background-image: url(../../assets/images/backburger.svg);\n  background-size: cover;\n}\n\n.projects__menu-btn_closed:hover {\n  background-image: url(../../assets/images/forwardburger.svg);\n  background-size: cover;\n  background-color: transparent;\n}\n\n.projects__menu-icon {\n  width: 48px;\n  height: 48px;\n}\n\n/* Sidebar items */\n\n.projects__item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 20px;\n  font-family: RobotoRegular;\n  height: 58px;\n}\n\n.projects__item:hover:not(.projects__item_selected) {\n  background-color: #d8d8d8;\n}\n\n.projects__item_selected {\n  background-color: var(--sidebar-selected);\n}\n\n.projects__item-title {\n  font-size: 32px;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.projects__delete-btn {\n  width: 48px;\n  height: 48px;\n  border-radius: 5px;\n}\n\n.projects__item:hover .projects__delete-btn {\n  background-image: url(../../assets/images/delete-outline.svg);\n  background-size: cover;\n}\n\n.projects__delete-btn:hover {\n  background-color: var(--sidebar-delete-hover);\n  cursor: pointer;\n}\n\n/* Sidebar new item input */\n\n.projects__new-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 20px;\n  font-family: RobotoRegular;\n}\n\n.projects__new-item-input {\n  border: none;\n  background-color: #dddddd;\n  width: 200px;\n  height: 32px;\n  border-radius: 5px;\n  font-size: 18px;\n  padding: 0 5px;\n}\n\n.projects__new-item-input:focus {\n  outline: 2px solid var(--input-focus-border);\n}\n\n.projects__add-btn {\n  width: 48px;\n  height: 48px;\n  background-image: url(../../assets/images/plus.svg);\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.projects__add-btn:hover {\n  background-color: var(--sidebar-add-hover);\n  cursor: pointer;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/tasks/tasks.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/tasks/tasks.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/fonts/Roboto-Regular.ttf */ "./src/assets/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/pencil-outline.svg */ "./src/assets/images/pencil-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/content-save-edit-outline.svg */ "./src/assets/images/content-save-edit-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/close.svg */ "./src/assets/images/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'RobotoRegular';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\n:root {\n  --project-info-bg: #b7b0ff;\n  --tasks-bg: #d9d9d9;\n  --task-item-bg: #eeeeee;\n  --add-task-btn: #91ec36;\n  --add-task-btn-hover: #85da31;\n  --cancel-btn: rgb(223, 60, 60);\n  --cancel-btn-hover: rgb(206, 54, 54);\n  --border-gray: #acacac;\n  --input-focus-border: rgb(61, 61, 253);\n\n  --info-bar-height: 150px;\n}\n\n/* Parent container for tasks and current project info */\n\n.tasks {\n  width: 100%;\n  background-color: var(--tasks-bg);\n  font-family: RobotoRegular;\n}\n\n/* Project info */\n\n.tasks__project-info {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  height: var(--info-bar-height);\n  background-color: var(--project-info-bg);\n  border-bottom: 1px solid gray;\n}\n\n.tasks__project-title {\n  font-size: 48px;\n}\n\n.tasks__title-group,\n.tasks__descrip-group {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  min-height: 24px;\n}\n\n.tasks__edit-title-btn,\n.tasks__edit-descrip-btn {\n  display: none;\n}\n\n.tasks__title-group:hover .tasks__edit-title-btn:not(.hidden),\n.tasks__descrip-group:hover .tasks__edit-descrip-btn:not(.hidden) {\n  display: block;\n  width: 24px;\n  height: 24px;\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n}\n\n.tasks__title-group:hover .tasks__edit-title-btn:hover,\n.tasks__descrip-group:hover .tasks__edit-descrip-btn:hover {\n  background-color: rgba(238, 238, 238, 50%);\n}\n\n.tasks__save-title-btn {\n  width: 24px;\n  height: 24px;\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n}\n\n.tasks__save-title-btn:hover {\n  background-color: rgba(238, 238, 238, 50%);\n}\n\n.tasks__new-title-input {\n  border: none;\n  background-color: #dddddd;\n  width: 35ch;\n  height: 48px;\n  border-radius: 5px;\n  font-size: 18px;\n  padding: 0 5px;\n}\n\n.tasks__new-title-input:focus {\n  outline: 2px solid var(--input-focus-border);\n}\n\n.tasks__project-title,\n.tasks__project-descrip {\n  max-width: 80%;\n}\n\n.tasks__save-descrip-btn {\n  width: 24px;\n  height: 24px;\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n}\n\n.tasks__save-descrip-btn:hover {\n  background-color: rgba(238, 238, 238, 50%);\n}\n\n.tasks__new-descrip-input {\n  border: none;\n  background-color: #dddddd;\n  width: 35ch;\n  height: 48px;\n  border-radius: 5px;\n  font-size: 18px;\n  padding: 0 5px;\n}\n\n.tasks__new-descrip-input:focus {\n  outline: 2px solid var(--input-focus-border);\n}\n\n/* Parent container for task operations */\n\n.tasks__view {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  padding: 20px;\n  height: calc(100vh - var(--info-bar-height));\n  overflow: auto;\n}\n\n/* Add task button */\n\n.tasks__add-task-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  background-color: var(--add-task-btn);\n  width: fit-content;\n  height: 48px;\n  padding: 0;\n  padding-right: 10px;\n}\n\n.tasks__add-task-btn:hover {\n  background-color: var(--add-task-btn-hover);\n}\n\n.tasks__add-task-icon {\n  height: 80%;\n}\n\n.tasks__add-task-text {\n  font-size: 18px;\n}\n\n/* Task list and items */\n\n.tasks__list {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n}\n\n.tasks__item {\n  display: grid;\n  grid-template-columns: 20px 1fr auto auto;\n  border-radius: 5px;\n  background-color: var(--task-item-bg);\n  width: min(100%, 800px);\n  box-shadow: 5px 5px 5px #c2c2c2;\n}\n\n.tasks__item:hover {\n  outline: 2px solid rgb(147, 147, 255);\n  cursor: pointer;\n}\n\n.tasks__no-task {\n  text-align: center;\n  border-radius: 5px;\n  padding: 10px;\n  background-color: var(--task-item-bg);\n  width: fit-content;\n}\n\n/* Item card styling */\n\n.item__title {\n  display: flex;\n  align-items: center;\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  font-size: 20px;\n  padding: 5px;\n  max-width: 40ch;\n}\n\n.item__date {\n  display: flex;\n  align-items: center;\n  grid-column: 3 / 4;\n  grid-row: 1 / 2;\n  font-size: 20px;\n  padding: 5px;\n}\n\n.item__description {\n  display: flex;\n  align-items: center;\n  grid-column: 2 / 4;\n  grid-row: 2 / 3;\n  color: rgb(54, 54, 54);\n  padding: 5px;\n  max-width: 80%;\n  hyphens: auto;\n  word-break: break-word;\n}\n\n.item__close-btn {\n  grid-column: 4 / 5;\n  grid-row: 1 / 2;\n  width: 32px;\n  height: 32px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.item__close-btn:hover {\n  background-color: #dbdbdb;\n}\n\n.item__tab {\n  grid-column: 1 / 2;\n  grid-row: 1 / 3;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.item__tab_red {\n  background-color: rgb(255, 75, 75);\n}\n\n.item__tab_yellow {\n  background-color: rgb(251, 255, 44);\n}\n\n.item__tab_green {\n  background-color: rgb(86, 255, 44);\n}\n\n.item__edit-btn {\n  grid-column: 4 / 5;\n  grid-row: 2 / 3;\n  width: 32px;\n  height: 32px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n}\n\n.item__edit-btn:hover {\n  background-color: var(--tasks-bg);\n}\n\n/* New/edit task inputs */\n\n.new-task__inputs,\n.edit-task__inputs {\n  display: grid;\n  width: fit-content;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap: 5px;\n  min-width: max-content;\n  background-color: var(--task-item-bg);\n  padding: 20px;\n  border-radius: 5px;\n}\n\n.new-task__title .edit-task__inputs {\n  padding: 5px;\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.new-task__title_invalid,\n.edit-task__title_invalid {\n  outline: 2px solid red;\n}\n\n.new-task__description,\n.edit-task__description {\n  padding: 5px;\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.new-task__date,\n.edit-task__date {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  height: 100%;\n}\n\n.new-task__priority,\n.edit-task__priority {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  height: 100%;\n}\n\n.new-task__accept-btn,\n.edit-task__accept-btn {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  background-color: var(--add-task-btn);\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n  height: 100%;\n}\n\n.new-task__accept-btn:hover .edit-task__accept-btn:hover {\n  background-color: var(--add-task-btn-hover);\n}\n\n.new-task__cancel-btn,\n.edit-task__cancel-btn {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  background-color: var(--cancel-btn);\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  height: 100%;\n}\n\n.new-task__cancel-btn:hover,\n.edit-task__cancel-btn:hover {\n  background-color: var(--cancel-btn-hover);\n}\n\n/* Used to hide elements */\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/components/tasks/tasks.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'RobotoRegular';\n  src: url('../../assets/fonts/Roboto-Regular.ttf') format('truetype');\n}\n\n:root {\n  --project-info-bg: #b7b0ff;\n  --tasks-bg: #d9d9d9;\n  --task-item-bg: #eeeeee;\n  --add-task-btn: #91ec36;\n  --add-task-btn-hover: #85da31;\n  --cancel-btn: rgb(223, 60, 60);\n  --cancel-btn-hover: rgb(206, 54, 54);\n  --border-gray: #acacac;\n  --input-focus-border: rgb(61, 61, 253);\n\n  --info-bar-height: 150px;\n}\n\n/* Parent container for tasks and current project info */\n\n.tasks {\n  width: 100%;\n  background-color: var(--tasks-bg);\n  font-family: RobotoRegular;\n}\n\n/* Project info */\n\n.tasks__project-info {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  height: var(--info-bar-height);\n  background-color: var(--project-info-bg);\n  border-bottom: 1px solid gray;\n}\n\n.tasks__project-title {\n  font-size: 48px;\n}\n\n.tasks__title-group,\n.tasks__descrip-group {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  min-height: 24px;\n}\n\n.tasks__edit-title-btn,\n.tasks__edit-descrip-btn {\n  display: none;\n}\n\n.tasks__title-group:hover .tasks__edit-title-btn:not(.hidden),\n.tasks__descrip-group:hover .tasks__edit-descrip-btn:not(.hidden) {\n  display: block;\n  width: 24px;\n  height: 24px;\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n  background-image: url(../../assets/images/pencil-outline.svg);\n  background-size: cover;\n}\n\n.tasks__title-group:hover .tasks__edit-title-btn:hover,\n.tasks__descrip-group:hover .tasks__edit-descrip-btn:hover {\n  background-color: rgba(238, 238, 238, 50%);\n}\n\n.tasks__save-title-btn {\n  width: 24px;\n  height: 24px;\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n  background-image: url(../../assets/images/content-save-edit-outline.svg);\n  background-size: cover;\n}\n\n.tasks__save-title-btn:hover {\n  background-color: rgba(238, 238, 238, 50%);\n}\n\n.tasks__new-title-input {\n  border: none;\n  background-color: #dddddd;\n  width: 35ch;\n  height: 48px;\n  border-radius: 5px;\n  font-size: 18px;\n  padding: 0 5px;\n}\n\n.tasks__new-title-input:focus {\n  outline: 2px solid var(--input-focus-border);\n}\n\n.tasks__project-title,\n.tasks__project-descrip {\n  max-width: 80%;\n}\n\n.tasks__save-descrip-btn {\n  width: 24px;\n  height: 24px;\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n  background-image: url(../../assets/images/content-save-edit-outline.svg);\n  background-size: cover;\n}\n\n.tasks__save-descrip-btn:hover {\n  background-color: rgba(238, 238, 238, 50%);\n}\n\n.tasks__new-descrip-input {\n  border: none;\n  background-color: #dddddd;\n  width: 35ch;\n  height: 48px;\n  border-radius: 5px;\n  font-size: 18px;\n  padding: 0 5px;\n}\n\n.tasks__new-descrip-input:focus {\n  outline: 2px solid var(--input-focus-border);\n}\n\n/* Parent container for task operations */\n\n.tasks__view {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  padding: 20px;\n  height: calc(100vh - var(--info-bar-height));\n  overflow: auto;\n}\n\n/* Add task button */\n\n.tasks__add-task-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  background-color: var(--add-task-btn);\n  width: fit-content;\n  height: 48px;\n  padding: 0;\n  padding-right: 10px;\n}\n\n.tasks__add-task-btn:hover {\n  background-color: var(--add-task-btn-hover);\n}\n\n.tasks__add-task-icon {\n  height: 80%;\n}\n\n.tasks__add-task-text {\n  font-size: 18px;\n}\n\n/* Task list and items */\n\n.tasks__list {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n}\n\n.tasks__item {\n  display: grid;\n  grid-template-columns: 20px 1fr auto auto;\n  border-radius: 5px;\n  background-color: var(--task-item-bg);\n  width: min(100%, 800px);\n  box-shadow: 5px 5px 5px #c2c2c2;\n}\n\n.tasks__item:hover {\n  outline: 2px solid rgb(147, 147, 255);\n  cursor: pointer;\n}\n\n.tasks__no-task {\n  text-align: center;\n  border-radius: 5px;\n  padding: 10px;\n  background-color: var(--task-item-bg);\n  width: fit-content;\n}\n\n/* Item card styling */\n\n.item__title {\n  display: flex;\n  align-items: center;\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  font-size: 20px;\n  padding: 5px;\n  max-width: 40ch;\n}\n\n.item__date {\n  display: flex;\n  align-items: center;\n  grid-column: 3 / 4;\n  grid-row: 1 / 2;\n  font-size: 20px;\n  padding: 5px;\n}\n\n.item__description {\n  display: flex;\n  align-items: center;\n  grid-column: 2 / 4;\n  grid-row: 2 / 3;\n  color: rgb(54, 54, 54);\n  padding: 5px;\n  max-width: 80%;\n  hyphens: auto;\n  word-break: break-word;\n}\n\n.item__close-btn {\n  grid-column: 4 / 5;\n  grid-row: 1 / 2;\n  width: 32px;\n  height: 32px;\n  background-image: url(../../assets/images/close.svg);\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.item__close-btn:hover {\n  background-color: #dbdbdb;\n}\n\n.item__tab {\n  grid-column: 1 / 2;\n  grid-row: 1 / 3;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.item__tab_red {\n  background-color: rgb(255, 75, 75);\n}\n\n.item__tab_yellow {\n  background-color: rgb(251, 255, 44);\n}\n\n.item__tab_green {\n  background-color: rgb(86, 255, 44);\n}\n\n.item__edit-btn {\n  grid-column: 4 / 5;\n  grid-row: 2 / 3;\n  width: 32px;\n  height: 32px;\n  background-image: url(../../assets/images/pencil-outline.svg);\n  background-size: cover;\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n}\n\n.item__edit-btn:hover {\n  background-color: var(--tasks-bg);\n}\n\n/* New/edit task inputs */\n\n.new-task__inputs,\n.edit-task__inputs {\n  display: grid;\n  width: fit-content;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap: 5px;\n  min-width: max-content;\n  background-color: var(--task-item-bg);\n  padding: 20px;\n  border-radius: 5px;\n}\n\n.new-task__title .edit-task__inputs {\n  padding: 5px;\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.new-task__title_invalid,\n.edit-task__title_invalid {\n  outline: 2px solid red;\n}\n\n.new-task__description,\n.edit-task__description {\n  padding: 5px;\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.new-task__date,\n.edit-task__date {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  height: 100%;\n}\n\n.new-task__priority,\n.edit-task__priority {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  height: 100%;\n}\n\n.new-task__accept-btn,\n.edit-task__accept-btn {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  background-color: var(--add-task-btn);\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n  height: 100%;\n}\n\n.new-task__accept-btn:hover .edit-task__accept-btn:hover {\n  background-color: var(--add-task-btn-hover);\n}\n\n.new-task__cancel-btn,\n.edit-task__cancel-btn {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  background-color: var(--cancel-btn);\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  height: 100%;\n}\n\n.new-task__cancel-btn:hover,\n.edit-task__cancel-btn:hover {\n  background-color: var(--cancel-btn-hover);\n}\n\n/* Used to hide elements */\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;AACjB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/plus.svg */ "./src/assets/images/plus.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Todo App</title>\n  </head>\n  <body>\n    <div class=\"projects\">\n      <div class=\"projects__title-group\">\n        <span class=\"projects__menu-title\">Projects</span>\n        <div class=\"projects__menu-btn projects__menu-btn_open\"></div>\n      </div>\n      <div class=\"projects__new-item\">\n        <input\n          class=\"projects__new-item-input\"\n          type=\"text\"\n          placeholder=\"New Project\"\n          maxlength=\"30\"\n          autocomplete=\"off\"\n        />\n        <div class=\"projects__add-btn\"></div>\n      </div>\n      <ul class=\"projects__list\"></ul>\n    </div>\n    <div class=\"tasks\">\n      <div class=\"tasks__project-info\">\n        <div class=\"tasks__title-group\">\n          <span class=\"tasks__project-title\"></span>\n          <button class=\"tasks__edit-title-btn\" type=\"button\"></button>\n        </div>\n        <div class=\"tasks__descrip-group\">\n          <p class=\"tasks__project-descrip\"></p>\n          <button class=\"tasks__edit-descrip-btn\" type=\"button\"></button>\n        </div>\n      </div>\n      <div class=\"tasks__view\">\n        <button class=\"tasks__add-task-btn\" type=\"button\">\n          <img class=\"tasks__add-task-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\n          <span class=\"tasks__add-task-text\">New Task</span>\n        </button>\n        <div class=\"tasks__list\"></div>\n      </div>\n    </div>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/components/projects/projects.css":
/*!**********************************************!*\
  !*** ./src/components/projects/projects.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./projects.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/projects/projects.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/tasks/tasks.css":
/*!****************************************!*\
  !*** ./src/components/tasks/tasks.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./tasks.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/tasks/tasks.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tasks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/projects/projects.js":
/*!*********************************************!*\
  !*** ./src/components/projects/projects.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.css */ "./src/components/projects/projects.css");
/* harmony import */ var _tasks_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks/tasks */ "./src/components/tasks/tasks.js");
/* harmony import */ var _models_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Project */ "./src/models/Project.js");
/* harmony import */ var _models_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Task */ "./src/models/Task.js");





const state = {
  projArr: [(0,_models_Project__WEBPACK_IMPORTED_MODULE_2__["default"])()], // Stores all projects starting with the default
  currentProj: 0, // Currently selected project by index
};

// HTML elements
const menuBtn = document.querySelector('.projects__menu-btn');
const projects = document.querySelector('.projects');
const menuGroup = document.querySelector('.projects__title-group');
const menuTitle = document.querySelector('.projects__menu-title');
const projectsInput = document.querySelector('.projects__new-item');
const projectsList = document.querySelector('.projects__list');
const projectInfo = document.querySelector('.tasks__project-info');
const addProjectBtn = document.querySelector('.projects__add-btn');
const projectTitle = document.querySelector('.tasks__project-title');
const editTitleBtn = document.querySelector('.tasks__edit-title-btn');
const projectDescrip = document.querySelector('.tasks__project-descrip');
const editDescripBtn = document.querySelector('.tasks__edit-descrip-btn');

// Temp for testing
state.projArr[state.currentProj].addTask(
  (0,_models_Task__WEBPACK_IMPORTED_MODULE_3__["default"])('Test Title', 'Test Description', '2022-09-22', 1)
);

/**
 * Checks to see if the user is editing project info.
 * @returns True if currently editing project info.
 */
const isEditing = () => {
  const saveTitleBtn = document.querySelector('.tasks__save-title-btn');
  const saveDescripBtn = document.querySelector('.tasks__save-descrip-btn');

  if (saveTitleBtn || saveDescripBtn) {
    return true;
  }

  return false;
};

/**
 * Displays all existing projects in the sidebar.
 */
const displayProjList = () => {
  while (projectsList.firstChild) {
    projectsList.removeChild(projectsList.lastChild);
  }

  // Adds all existing projects to the sidebar
  state.projArr.forEach((p, i) => {
    const listItem = document.createElement('li');
    listItem.classList.add('projects__item');
    listItem.setAttribute('data-index', i);

    // Event listener for selections
    listItem.addEventListener('click', (e) => {
      if (!isEditing()) {
        const dataIndex = Number(e.currentTarget.getAttribute('data-index'));
        state.currentProj = dataIndex;
        displayProjList();
        _tasks_tasks__WEBPACK_IMPORTED_MODULE_1__.updateTasks(state);
      }
    });

    // Highlight selected project
    if (state.currentProj === i) {
      listItem.classList.add('projects__item_selected');
    }

    // Sets project title
    const listItemTitle = document.createElement('span');
    listItemTitle.classList.add('projects__item-title');
    listItemTitle.textContent = p.getTitle();
    listItem.appendChild(listItemTitle);

    // Shows project delete button if more than one project
    if (state.projArr.length > 1) {
      const deleteBtn = document.createElement('div');
      deleteBtn.classList.add('projects__delete-btn');
      deleteBtn.setAttribute('data-index', i);
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dataIndex = Number(e.currentTarget.getAttribute('data-index'));
        state.projArr.splice(dataIndex, 1);
        state.currentProj = 0;
        displayProjList();
        _tasks_tasks__WEBPACK_IMPORTED_MODULE_1__.updateTasks(state);
      });
      listItem.appendChild(deleteBtn);
    }

    projectsList.appendChild(listItem);
  });
};

/**
 * Event listener for adding new projects.
 */
addProjectBtn.addEventListener('click', () => {
  const newProjectTitle = document.querySelector(
    '.projects__new-item-input'
  ).value;

  if (newProjectTitle && !isEditing()) {
    document.querySelector('.projects__new-item-input').value = '';
    const newProject = (0,_models_Project__WEBPACK_IMPORTED_MODULE_2__["default"])(newProjectTitle, 'No description.');
    state.projArr.push(newProject);
    state.currentProj = state.projArr.length - 1;
    displayProjList();
    _tasks_tasks__WEBPACK_IMPORTED_MODULE_1__.updateTasks(state);
  }
});

/**
 * Event listener for the menu button (show/hide projects).
 */
menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('projects__menu-btn_open')) {
    menuBtn.classList.replace(
      'projects__menu-btn_open',
      'projects__menu-btn_closed'
    );
    projects.classList.add('projects_closed');
    projectInfo.style.padding = '20px 20px 20px 85px';
    menuGroup.classList.add('projects__title-group_closed');
    menuTitle.classList.add('hidden');
    projectsInput.classList.add('hidden');
    projectsList.classList.add('hidden');
  } else {
    menuBtn.classList.replace(
      'projects__menu-btn_closed',
      'projects__menu-btn_open'
    );
    projects.classList.remove('projects_closed');
    projectInfo.style.padding = '20px';
    menuGroup.classList.remove('projects__title-group_closed');
    menuTitle.classList.remove('hidden');
    projectsInput.classList.remove('hidden');
    projectsList.classList.remove('hidden');
  }
});

/**
 * Event listener to edit project title.
 */
editTitleBtn.addEventListener('click', () => {
  if (!document.querySelector('.tasks__new-title-input')) {
    editDescripBtn.classList.add('hidden');

    const saveTitleBtn = document.createElement('button');
    saveTitleBtn.classList.add('tasks__save-title-btn');

    const newTitleInput = document.createElement('input');
    newTitleInput.classList.add('tasks__new-title-input');
    newTitleInput.setAttribute('type', 'text');
    newTitleInput.setAttribute('maxlength', '30');
    newTitleInput.value = state.projArr[state.currentProj].getTitle();

    saveTitleBtn.addEventListener('click', () => {
      state.projArr[state.currentProj].setTitle(newTitleInput.value);
      saveTitleBtn.replaceWith(editTitleBtn);
      newTitleInput.replaceWith(projectTitle);
      editDescripBtn.classList.remove('hidden');
      displayProjList();
      _tasks_tasks__WEBPACK_IMPORTED_MODULE_1__.updateTasks(state);
    });

    editTitleBtn.replaceWith(saveTitleBtn);
    projectTitle.replaceWith(newTitleInput);
  }
});

/**
 * Event listener to edit project description.
 */
editDescripBtn.addEventListener('click', () => {
  if (!document.querySelector('.tasks__new-descrip-input')) {
    editTitleBtn.classList.add('hidden');

    const saveDescripBtn = document.createElement('button');
    saveDescripBtn.classList.add('tasks__save-descrip-btn');

    const newDescripInput = document.createElement('input');
    newDescripInput.classList.add('tasks__new-descrip-input');
    newDescripInput.setAttribute('type', 'text');
    newDescripInput.setAttribute('maxlength', '250');
    newDescripInput.value = state.projArr[state.currentProj].getDescription();

    saveDescripBtn.addEventListener('click', () => {
      state.projArr[state.currentProj].setDescription(newDescripInput.value);
      saveDescripBtn.replaceWith(editDescripBtn);
      newDescripInput.replaceWith(projectDescrip);
      editTitleBtn.classList.remove('hidden');
      displayProjList();
      _tasks_tasks__WEBPACK_IMPORTED_MODULE_1__.updateTasks(state);
    });

    editDescripBtn.replaceWith(saveDescripBtn);
    projectDescrip.replaceWith(newDescripInput);
  }
});

// Initialize views
displayProjList();
_tasks_tasks__WEBPACK_IMPORTED_MODULE_1__.updateTasks(state);


/***/ }),

/***/ "./src/components/tasks/tasks.js":
/*!***************************************!*\
  !*** ./src/components/tasks/tasks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateTasks": () => (/* binding */ updateTasks)
/* harmony export */ });
/* harmony import */ var _tasks_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.css */ "./src/components/tasks/tasks.css");
/* harmony import */ var _models_Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Task */ "./src/models/Task.js");



let state = null;

/**
 * Displays project info for the currently selected project.
 */
const displayProjectInfo = () => {
  const currentProject = state.projArr[state.currentProj];

  const projectTitle = document.querySelector('.tasks__project-title');
  if (projectTitle) {
    projectTitle.textContent = currentProject.getTitle();
  }

  const projectDescrip = document.querySelector('.tasks__project-descrip');
  if (projectDescrip) {
    projectDescrip.textContent = currentProject.getDescription();
  }
};

/**
 * Displays all tasks for a project and show project info.
 */
const displayTaskList = () => {
  const currentProject = state.projArr[state.currentProj];

  // Clears all tasks from the display
  const tasksList = document.querySelector('.tasks__list');
  while (tasksList.firstChild) {
    tasksList.removeChild(tasksList.lastChild);
  }

  // Repopulates the task list
  let item;
  if (currentProject.getTasks().length === 0) {
    item = document.createElement('div');
    item.classList.add('tasks__no-task');
    item.textContent = 'You have no tasks.';
    tasksList.appendChild(item);
  } else {
    currentProject.getTasks().forEach((task, index) => {
      item = document.createElement('div');
      item.classList.add('tasks__item');

      // Sets priority color
      const taskPriorityTab = document.createElement('div');
      taskPriorityTab.classList.add('item__tab');
      const taskPriority = Number(task.getPriority());
      if (taskPriority === 1) {
        taskPriorityTab.classList.add('item__tab_red');
      } else if (taskPriority === 2) {
        taskPriorityTab.classList.add('item__tab_yellow');
      } else if (taskPriority === 3) {
        taskPriorityTab.classList.add('item__tab_green');
      }

      // Sets title
      const taskTitle = document.createElement('span');
      taskTitle.classList.add('item__title');
      taskTitle.textContent = task.getTitle();

      // Sets due date
      const taskDate = document.createElement('span');
      taskDate.classList.add('item__date');
      const dueDate = task.getDueDate();
      if (dueDate) {
        taskDate.textContent = `Due: ${dueDate}`;
      }

      // Task delete button
      const deleteBtn = document.createElement('div');
      deleteBtn.classList.add('item__close-btn');
      deleteBtn.setAttribute('data-index', index);
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const i = e.currentTarget.getAttribute('data-index');
        state.projArr[state.currentProj].removeTask(i);
        displayTaskList();
      });

      // Expands task when clicked
      item.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('tasks__item_expanded')) {
          e.currentTarget.classList.remove('tasks__item_expanded');
          e.currentTarget.querySelector('.item__description').remove();
          e.currentTarget.querySelector('.item__edit-btn').remove();
        } else {
          e.currentTarget.classList.add('tasks__item_expanded');

          // Displays task description
          const taskDescription = document.createElement('span');
          taskDescription.classList.add('item__description');
          taskDescription.textContent = task.getDescription();
          e.currentTarget.appendChild(taskDescription);

          // Displays an edit button for the task
          const editBtn = document.createElement('button');
          editBtn.setAttribute('type', 'text');
          editBtn.setAttribute('data-index', index);
          editBtn.classList.add('item__edit-btn');
          // eslint-disable-next-line no-use-before-define
          editBtn.addEventListener('click', showEditTask);
          e.currentTarget.appendChild(editBtn);
        }
      });

      item.appendChild(taskPriorityTab);
      item.appendChild(taskTitle);
      item.appendChild(taskDate);
      item.appendChild(deleteBtn);
      tasksList.appendChild(item);
    });
  }
};

const updateTaskInfo = (e) => {
  e.stopPropagation();
  const taskIndex = e.currentTarget.getAttribute('data-index');

  const title = document.querySelector('.edit-task__title').value;
  const descrip = document.querySelector('.edit-task__description').value;
  const date = document.querySelector('.edit-task__date').value;
  const priority = document.querySelector('.edit-task__priority').value;

  if (!title) {
    const titleInput = document.querySelector('.edit-task__title');
    titleInput.classList.add('edit-task__title_invalid');
    return;
  }

  state.projArr[state.currentProj].replaceTask(
    taskIndex,
    (0,_models_Task__WEBPACK_IMPORTED_MODULE_1__["default"])(title, descrip, date, priority)
  );
  displayTaskList();
};

/**
 * Displays a form to edit task info.
 */
const showEditTask = (e) => {
  e.stopPropagation();
  const taskIndex = e.currentTarget.getAttribute('data-index');
  const currentTask = state.projArr[state.currentProj].getTasks()[taskIndex];

  // Parent container for the task edit options
  const editTaskInputs = document.createElement('div');
  editTaskInputs.classList.add('edit-task__inputs');

  // Title input
  const editTaskTitle = document.createElement('input');
  editTaskTitle.classList.add('edit-task__title');
  editTaskTitle.setAttribute('type', 'text');
  editTaskTitle.value = currentTask.getTitle();
  editTaskTitle.setAttribute('maxlength', '30');
  editTaskInputs.appendChild(editTaskTitle);

  // Description input
  const editTaskDescription = document.createElement('input');
  editTaskDescription.classList.add('edit-task__description');
  editTaskDescription.setAttribute('type', 'text');
  editTaskDescription.value = currentTask.getDescription();
  editTaskDescription.setAttribute('maxlength', '100');
  editTaskInputs.appendChild(editTaskDescription);

  // Due date input
  const editTaskDate = document.createElement('input');
  editTaskDate.classList.add('edit-task__date');
  editTaskDate.setAttribute('type', 'date');
  editTaskDate.value = currentTask.getDueDate();
  editTaskInputs.appendChild(editTaskDate);

  // Priority input
  const editTaskPriority = document.createElement('select');
  editTaskPriority.classList.add('edit-task__priority');
  let option = document.createElement('option');
  option.textContent = 'Select a priority level';
  option.value = 0;
  editTaskPriority.appendChild(option);
  for (let i = 1; i <= 3; i += 1) {
    option = document.createElement('option');
    if (Number(currentTask.getPriority()) === i) {
      option.setAttribute('selected', true);
    }
    option.textContent = `${i}`;
    option.value = i;
    editTaskPriority.appendChild(option);
  }
  editTaskInputs.appendChild(editTaskPriority);

  // Confirmation button
  const acceptBtn = document.createElement('button');
  acceptBtn.classList.add('edit-task__accept-btn');
  acceptBtn.setAttribute('type', 'button');
  acceptBtn.setAttribute('data-index', taskIndex);
  acceptBtn.textContent = 'Accept';
  acceptBtn.addEventListener('click', updateTaskInfo);
  editTaskInputs.appendChild(acceptBtn);

  // Cancel button
  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('edit-task__cancel-btn');
  cancelBtn.setAttribute('type', 'button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.addEventListener('click', () => {
    editTaskInputs.remove();
    displayTaskList();
  });
  editTaskInputs.appendChild(cancelBtn);

  e.currentTarget.parentElement.replaceWith(editTaskInputs);
};

/**
 * Initializes the task view.
 * @param {Object} s App state.
 */
const updateTasks = (s) => {
  state = s;
  displayProjectInfo();
  displayTaskList();
};

/**
 * Closes the input form for new tasks.
 */
const closeNewTask = () => {
  const addTaskBtn = document.querySelector('.tasks__add-task-btn');
  addTaskBtn.classList.remove('hidden');

  const newTaskInputs = document.querySelector('.new-task__inputs');
  newTaskInputs.remove();
};

/**
 * Adds the new task to the current project.
 */
const addNewTask = () => {
  const title = document.querySelector('.new-task__title').value;
  const descrip = document.querySelector('.new-task__description').value;
  const date = document.querySelector('.new-task__date').value;
  const priority = document.querySelector('.new-task__priority').value;

  if (!title) {
    const titleInput = document.querySelector('.new-task__title');
    titleInput.classList.add('new-task__title_invalid');
    return;
  }

  state.projArr[state.currentProj].addTask(
    (0,_models_Task__WEBPACK_IMPORTED_MODULE_1__["default"])(title, descrip, date, priority)
  );
  closeNewTask();
  displayTaskList();
};

/**
 * Shows a form where the user can enter information about a new task.
 */
const displayNewTask = () => {
  const addTaskBtn = document.querySelector('.tasks__add-task-btn');
  addTaskBtn.classList.add('hidden');

  // Parent and reference nodes
  const taskView = document.querySelector('.tasks__view');
  const taskList = document.querySelector('.tasks__list');

  // Parent container for the task options
  const newTask = document.createElement('div');
  newTask.classList.add('new-task__inputs');

  // Title input
  const newTaskTitle = document.createElement('input');
  newTaskTitle.classList.add('new-task__title');
  newTaskTitle.setAttribute('type', 'text');
  newTaskTitle.setAttribute('placeholder', 'Enter title');
  newTaskTitle.setAttribute('maxlength', '30');

  // Description input
  const newTaskDescription = document.createElement('input');
  newTaskDescription.classList.add('new-task__description');
  newTaskDescription.setAttribute('type', 'text');
  newTaskDescription.setAttribute('placeholder', 'Enter description');
  newTaskDescription.setAttribute('maxlength', '100');

  // Due date input
  const newTaskDate = document.createElement('input');
  newTaskDate.classList.add('new-task__date');
  newTaskDate.setAttribute('type', 'date');

  // Priority input
  const newTaskPriority = document.createElement('select');
  newTaskPriority.classList.add('new-task__priority');
  let option = document.createElement('option');
  option.textContent = 'Select a priority level';
  option.value = 0;
  newTaskPriority.appendChild(option);
  for (let i = 1; i <= 3; i += 1) {
    option = document.createElement('option');
    option.textContent = `${i}`;
    option.value = i;
    newTaskPriority.appendChild(option);
  }

  // Confirmation button
  const acceptBtn = document.createElement('button');
  acceptBtn.classList.add('new-task__accept-btn');
  acceptBtn.setAttribute('type', 'button');
  acceptBtn.textContent = 'Accept';
  acceptBtn.addEventListener('click', addNewTask);

  // Cancel button
  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('new-task__cancel-btn');
  cancelBtn.setAttribute('type', 'button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.addEventListener('click', closeNewTask);

  newTask.appendChild(newTaskTitle);
  newTask.appendChild(newTaskDescription);
  newTask.appendChild(newTaskDate);
  newTask.appendChild(newTaskPriority);
  newTask.appendChild(acceptBtn);
  newTask.appendChild(cancelBtn);

  taskView.insertBefore(newTask, taskList);
};

// Event listeners
const addTaskBtn = document.querySelector('.tasks__add-task-btn');
addTaskBtn.addEventListener('click', displayNewTask);




/***/ }),

/***/ "./src/models/Project.js":
/*!*******************************!*\
  !*** ./src/models/Project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Represents a project object.
 * @param {string} t Title
 * @param {string} d Description
 * @returns Object containing public functions
 */
const Project = (t, d) => {
  let title = typeof t === 'string' ? t : 'Default';
  let description = typeof t === 'string' ? d : 'This is the default project.';
  const tasks = [];

  // Getters
  const getTitle = () => title;
  const getDescription = () => description;
  const getTasks = () => [...tasks];

  // Setters
  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);

  // Adds a task object to the list.
  const addTask = (taskItem) => tasks.push(taskItem);

  // Removes a task object from the list.
  const removeTask = (index) => {
    tasks.splice(index, 1);
  };

  // Replaces a task with another.
  const replaceTask = (index, task) => {
    tasks.splice(index, 1, task);
  };

  return {
    getTitle,
    getDescription,
    getTasks,
    setTitle,
    setDescription,
    addTask,
    removeTask,
    replaceTask,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/models/Task.js":
/*!****************************!*\
  !*** ./src/models/Task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Represents a todo object.
 * @param {string} t Title
 * @param {string} d Description
 * @param {string} dd Due date
 * @param {number} p Priority
 * @returns Object containing public functions
 */
const Task = (t, d, dd, p) => {
  let title = t;
  let description = d;
  let dueDate = dd;
  let priority = p;

  // Getters
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;

  // Setters
  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);
  const setDueDate = (newDueDate) => (dueDate = newDueDate);
  const setPriority = (newPriority) => (priority = newPriority);

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/assets/images/backburger.svg":
/*!******************************************!*\
  !*** ./src/assets/images/backburger.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e05062d61ebac865ebf.svg";

/***/ }),

/***/ "./src/assets/images/close.svg":
/*!*************************************!*\
  !*** ./src/assets/images/close.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b91a99eecff921e31c64.svg";

/***/ }),

/***/ "./src/assets/images/content-save-edit-outline.svg":
/*!*********************************************************!*\
  !*** ./src/assets/images/content-save-edit-outline.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ea74612ad4e65a85750.svg";

/***/ }),

/***/ "./src/assets/images/delete-outline.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/delete-outline.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de0bb67a90c508546224.svg";

/***/ }),

/***/ "./src/assets/images/forwardburger.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/forwardburger.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0815698b2d4f4f70bb9.svg";

/***/ }),

/***/ "./src/assets/images/hamburger-icon.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/hamburger-icon.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ebd4eddbedf22e5b291.svg";

/***/ }),

/***/ "./src/assets/images/pencil-outline.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/pencil-outline.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c11ca64583db9195885d.svg";

/***/ }),

/***/ "./src/assets/images/plus.svg":
/*!************************************!*\
  !*** ./src/assets/images/plus.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _components_projects_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/projects/projects */ "./src/components/projects/projects.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9B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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFpQjtBQUN6QjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBaUI7QUFDekIsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QiwyREFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFpQjtBQUNyQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBaUI7QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBaUI7QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxxREFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaE5JO0FBQ2dCOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3REFBSTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsRUFBRTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksd0RBQUk7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSw0QkFBNEIsRUFBRTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7QUM5VXZCO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0N2QjtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCc0I7QUFDRDtBQUNBO0FBQ21CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL3Rhc2tzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNzcz85Njc0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tzL3Rhc2tzLmNzcz80MWEzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzZXQuY3NzP2VkZTAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy90YXNrcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9UYXNrLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaGFtYnVyZ2VyLWljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrYnVyZ2VyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZm9yd2FyZGJ1cmdlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2RlbGV0ZS1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGx1cy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbjpyb290IHtcXG4gIC8qIENvbG9ycyAqL1xcbiAgLS1zaWRlYmFyLWJnOiAjZWVlZWVlO1xcbiAgLS1zaWRlYmFyLXNlbGVjdGVkOiAjYjFiMWIxO1xcbiAgLS1zaWRlYmFyLW1lbnUtaG92ZXI6ICNkZGRkZGQ7XFxuICAtLXNpZGViYXItYWRkLWhvdmVyOiAjOTBmZjZlO1xcbiAgLS1zaWRlYmFyLWRlbGV0ZS1ob3ZlcjogI2ZmNjQ2NDtcXG5cXG4gIC8qIFNpemVzICovXFxuICAtLXNpZGViYXItd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICBtaW4td2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgYm94LXNoYWRvdzogMnB4IDBweCA4cHggI2JiYmJiYjtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcic7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5wcm9qZWN0c19jbG9zZWQge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyogU2lkZWJhciBtZW51IHRvcCAqL1xcblxcbi5wcm9qZWN0c19fdGl0bGUtZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNpZGViYXItc2VsZWN0ZWQpO1xcbn1cXG5cXG4ucHJvamVjdHNfX3RpdGxlLWdyb3VwX2Nsb3NlZCB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdHNfX21lbnUtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4ucHJvamVjdHNfX21lbnUtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNDhweDtcXG4gIGhlaWdodDogNDhweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdHNfX21lbnUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItbWVudS1ob3Zlcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0c19fbWVudS1idG5fb3Blbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnByb2plY3RzX19tZW51LWJ0bl9jbG9zZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnByb2plY3RzX19tZW51LWljb24ge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxufVxcblxcbi8qIFNpZGViYXIgaXRlbXMgKi9cXG5cXG4ucHJvamVjdHNfX2l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyO1xcbiAgaGVpZ2h0OiA1OHB4O1xcbn1cXG5cXG4ucHJvamVjdHNfX2l0ZW06aG92ZXI6bm90KC5wcm9qZWN0c19faXRlbV9zZWxlY3RlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcXG59XFxuXFxuLnByb2plY3RzX19pdGVtX3NlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItc2VsZWN0ZWQpO1xcbn1cXG5cXG4ucHJvamVjdHNfX2l0ZW0tdGl0bGUge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnByb2plY3RzX19kZWxldGUtYnRuIHtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdHNfX2l0ZW06aG92ZXIgLnByb2plY3RzX19kZWxldGUtYnRuIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ucHJvamVjdHNfX2RlbGV0ZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1kZWxldGUtaG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBTaWRlYmFyIG5ldyBpdGVtIGlucHV0ICovXFxuXFxuLnByb2plY3RzX19uZXctaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXI7XFxufVxcblxcbi5wcm9qZWN0c19fbmV3LWl0ZW0taW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4ucHJvamVjdHNfX25ldy1pdGVtLWlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1pbnB1dC1mb2N1cy1ib3JkZXIpO1xcbn1cXG5cXG4ucHJvamVjdHNfX2FkZC1idG4ge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3RzX19hZGQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYWRkLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsK0RBQW9FO0FBQ3RFOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QiwrQkFBK0I7O0VBRS9CLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixtQ0FBbUM7RUFDbkMsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUE2RDtFQUM3RCxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5REFBeUQ7RUFDekQsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseURBQTREO0VBQzVELHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseURBQTZEO0VBQzdELHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxlQUFlO0FBQ2pCOztBQUVBLDJCQUEyQjs7QUFFM0I7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQW1EO0VBQ25ELHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcic7XFxuICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLyogQ29sb3JzICovXFxuICAtLXNpZGViYXItYmc6ICNlZWVlZWU7XFxuICAtLXNpZGViYXItc2VsZWN0ZWQ6ICNiMWIxYjE7XFxuICAtLXNpZGViYXItbWVudS1ob3ZlcjogI2RkZGRkZDtcXG4gIC0tc2lkZWJhci1hZGQtaG92ZXI6ICM5MGZmNmU7XFxuICAtLXNpZGViYXItZGVsZXRlLWhvdmVyOiAjZmY2NDY0O1xcblxcbiAgLyogU2l6ZXMgKi9cXG4gIC0tc2lkZWJhci13aWR0aDogMzAwcHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXG4gIG1pbi13aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICBib3gtc2hhZG93OiAycHggMHB4IDhweCAjYmJiYmJiO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmcpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnByb2plY3RzX2Nsb3NlZCB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKiBTaWRlYmFyIG1lbnUgdG9wICovXFxuXFxuLnByb2plY3RzX190aXRsZS1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc2lkZWJhci1zZWxlY3RlZCk7XFxufVxcblxcbi5wcm9qZWN0c19fdGl0bGUtZ3JvdXBfY2xvc2VkIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0c19fbWVudS10aXRsZSB7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi5wcm9qZWN0c19fbWVudS1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaGFtYnVyZ2VyLWljb24uc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0c19fbWVudS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1tZW51LWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzX19tZW51LWJ0bl9vcGVuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tidXJnZXIuc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5wcm9qZWN0c19fbWVudS1idG5fY2xvc2VkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ZvcndhcmRidXJnZXIuc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnByb2plY3RzX19tZW51LWljb24ge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxufVxcblxcbi8qIFNpZGViYXIgaXRlbXMgKi9cXG5cXG4ucHJvamVjdHNfX2l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyO1xcbiAgaGVpZ2h0OiA1OHB4O1xcbn1cXG5cXG4ucHJvamVjdHNfX2l0ZW06aG92ZXI6bm90KC5wcm9qZWN0c19faXRlbV9zZWxlY3RlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcXG59XFxuXFxuLnByb2plY3RzX19pdGVtX3NlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItc2VsZWN0ZWQpO1xcbn1cXG5cXG4ucHJvamVjdHNfX2l0ZW0tdGl0bGUge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnByb2plY3RzX19kZWxldGUtYnRuIHtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdHNfX2l0ZW06aG92ZXIgLnByb2plY3RzX19kZWxldGUtYnRuIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2RlbGV0ZS1vdXRsaW5lLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ucHJvamVjdHNfX2RlbGV0ZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1kZWxldGUtaG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBTaWRlYmFyIG5ldyBpdGVtIGlucHV0ICovXFxuXFxuLnByb2plY3RzX19uZXctaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IFJvYm90b1JlZ3VsYXI7XFxufVxcblxcbi5wcm9qZWN0c19fbmV3LWl0ZW0taW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4ucHJvamVjdHNfX25ldy1pdGVtLWlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1pbnB1dC1mb2N1cy1ib3JkZXIpO1xcbn1cXG5cXG4ucHJvamVjdHNfX2FkZC1idG4ge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9wbHVzLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdHNfX2FkZC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1hZGQtaG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGVuY2lsLW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jb250ZW50LXNhdmUtZWRpdC1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY2xvc2Uuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wcm9qZWN0LWluZm8tYmc6ICNiN2IwZmY7XFxuICAtLXRhc2tzLWJnOiAjZDlkOWQ5O1xcbiAgLS10YXNrLWl0ZW0tYmc6ICNlZWVlZWU7XFxuICAtLWFkZC10YXNrLWJ0bjogIzkxZWMzNjtcXG4gIC0tYWRkLXRhc2stYnRuLWhvdmVyOiAjODVkYTMxO1xcbiAgLS1jYW5jZWwtYnRuOiByZ2IoMjIzLCA2MCwgNjApO1xcbiAgLS1jYW5jZWwtYnRuLWhvdmVyOiByZ2IoMjA2LCA1NCwgNTQpO1xcbiAgLS1ib3JkZXItZ3JheTogI2FjYWNhYztcXG4gIC0taW5wdXQtZm9jdXMtYm9yZGVyOiByZ2IoNjEsIDYxLCAyNTMpO1xcblxcbiAgLS1pbmZvLWJhci1oZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4vKiBQYXJlbnQgY29udGFpbmVyIGZvciB0YXNrcyBhbmQgY3VycmVudCBwcm9qZWN0IGluZm8gKi9cXG5cXG4udGFza3Mge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrcy1iZyk7XFxuICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcXG59XFxuXFxuLyogUHJvamVjdCBpbmZvICovXFxuXFxuLnRhc2tzX19wcm9qZWN0LWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiB2YXIoLS1pbmZvLWJhci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1pbmZvLWJnKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4udGFza3NfX3Byb2plY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4udGFza3NfX3RpdGxlLWdyb3VwLFxcbi50YXNrc19fZGVzY3JpcC1ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDI0cHg7XFxufVxcblxcbi50YXNrc19fZWRpdC10aXRsZS1idG4sXFxuLnRhc2tzX19lZGl0LWRlc2NyaXAtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrc19fdGl0bGUtZ3JvdXA6aG92ZXIgLnRhc2tzX19lZGl0LXRpdGxlLWJ0bjpub3QoLmhpZGRlbiksXFxuLnRhc2tzX19kZXNjcmlwLWdyb3VwOmhvdmVyIC50YXNrc19fZWRpdC1kZXNjcmlwLWJ0bjpub3QoLmhpZGRlbikge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi50YXNrc19fdGl0bGUtZ3JvdXA6aG92ZXIgLnRhc2tzX19lZGl0LXRpdGxlLWJ0bjpob3ZlcixcXG4udGFza3NfX2Rlc2NyaXAtZ3JvdXA6aG92ZXIgLnRhc2tzX19lZGl0LWRlc2NyaXAtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMzgsIDIzOCwgNTAlKTtcXG59XFxuXFxuLnRhc2tzX19zYXZlLXRpdGxlLWJ0biB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi50YXNrc19fc2F2ZS10aXRsZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDIzOCwgMjM4LCA1MCUpO1xcbn1cXG5cXG4udGFza3NfX25ldy10aXRsZS1pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcbiAgd2lkdGg6IDM1Y2g7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLnRhc2tzX19uZXctdGl0bGUtaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWlucHV0LWZvY3VzLWJvcmRlcik7XFxufVxcblxcbi50YXNrc19fcHJvamVjdC10aXRsZSxcXG4udGFza3NfX3Byb2plY3QtZGVzY3JpcCB7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG59XFxuXFxuLnRhc2tzX19zYXZlLWRlc2NyaXAtYnRuIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnRhc2tzX19zYXZlLWRlc2NyaXAtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMzgsIDIzOCwgNTAlKTtcXG59XFxuXFxuLnRhc2tzX19uZXctZGVzY3JpcC1pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcbiAgd2lkdGg6IDM1Y2g7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLnRhc2tzX19uZXctZGVzY3JpcC1pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0taW5wdXQtZm9jdXMtYm9yZGVyKTtcXG59XFxuXFxuLyogUGFyZW50IGNvbnRhaW5lciBmb3IgdGFzayBvcGVyYXRpb25zICovXFxuXFxuLnRhc2tzX192aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1pbmZvLWJhci1oZWlnaHQpKTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKiBBZGQgdGFzayBidXR0b24gKi9cXG5cXG4udGFza3NfX2FkZC10YXNrLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkLXRhc2stYnRuKTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogNDhweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udGFza3NfX2FkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtdGFzay1idG4taG92ZXIpO1xcbn1cXG5cXG4udGFza3NfX2FkZC10YXNrLWljb24ge1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi50YXNrc19fYWRkLXRhc2stdGV4dCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi8qIFRhc2sgbGlzdCBhbmQgaXRlbXMgKi9cXG5cXG4udGFza3NfX2xpc3Qge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza3NfX2l0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnIgYXV0byBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFzay1pdGVtLWJnKTtcXG4gIHdpZHRoOiBtaW4oMTAwJSwgODAwcHgpO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggI2MyYzJjMjtcXG59XFxuXFxuLnRhc2tzX19pdGVtOmhvdmVyIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMTQ3LCAxNDcsIDI1NSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrc19fbm8tdGFzayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFzay1pdGVtLWJnKTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLyogSXRlbSBjYXJkIHN0eWxpbmcgKi9cXG5cXG4uaXRlbV9fdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXgtd2lkdGg6IDQwY2g7XFxufVxcblxcbi5pdGVtX19kYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uaXRlbV9fZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBjb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICBoeXBoZW5zOiBhdXRvO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG59XFxuXFxuLml0ZW1fX2Nsb3NlLWJ0biB7XFxuICBncmlkLWNvbHVtbjogNCAvIDU7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaXRlbV9fY2xvc2UtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XFxufVxcblxcbi5pdGVtX190YWIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaXRlbV9fdGFiX3JlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NSwgNzUpO1xcbn1cXG5cXG4uaXRlbV9fdGFiX3llbGxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyNTUsIDQ0KTtcXG59XFxuXFxuLml0ZW1fX3RhYl9ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODYsIDI1NSwgNDQpO1xcbn1cXG5cXG4uaXRlbV9fZWRpdC1idG4ge1xcbiAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaXRlbV9fZWRpdC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFza3MtYmcpO1xcbn1cXG5cXG4vKiBOZXcvZWRpdCB0YXNrIGlucHV0cyAqL1xcblxcbi5uZXctdGFza19faW5wdXRzLFxcbi5lZGl0LXRhc2tfX2lucHV0cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIGdhcDogNXB4O1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2staXRlbS1iZyk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubmV3LXRhc2tfX3RpdGxlIC5lZGl0LXRhc2tfX2lucHV0cyB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5uZXctdGFza19fdGl0bGVfaW52YWxpZCxcXG4uZWRpdC10YXNrX190aXRsZV9pbnZhbGlkIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi5uZXctdGFza19fZGVzY3JpcHRpb24sXFxuLmVkaXQtdGFza19fZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ubmV3LXRhc2tfX2RhdGUsXFxuLmVkaXQtdGFza19fZGF0ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uZXctdGFza19fcHJpb3JpdHksXFxuLmVkaXQtdGFza19fcHJpb3JpdHkge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubmV3LXRhc2tfX2FjY2VwdC1idG4sXFxuLmVkaXQtdGFza19fYWNjZXB0LWJ0biB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtdGFzay1idG4pO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubmV3LXRhc2tfX2FjY2VwdC1idG46aG92ZXIgLmVkaXQtdGFza19fYWNjZXB0LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtdGFzay1idG4taG92ZXIpO1xcbn1cXG5cXG4ubmV3LXRhc2tfX2NhbmNlbC1idG4sXFxuLmVkaXQtdGFza19fY2FuY2VsLWJ0biB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW5jZWwtYnRuKTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5ldy10YXNrX19jYW5jZWwtYnRuOmhvdmVyLFxcbi5lZGl0LXRhc2tfX2NhbmNlbC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWJ0bi1ob3Zlcik7XFxufVxcblxcbi8qIFVzZWQgdG8gaGlkZSBlbGVtZW50cyAqL1xcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvdGFza3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQTRCO0VB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QTs7RUFFRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBOztFQUVFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBOztFQUVFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBOztFQUVFLHlDQUF5QztBQUMzQzs7QUFFQSwwQkFBMEI7O0FBRTFCO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJztcXG4gIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXByb2plY3QtaW5mby1iZzogI2I3YjBmZjtcXG4gIC0tdGFza3MtYmc6ICNkOWQ5ZDk7XFxuICAtLXRhc2staXRlbS1iZzogI2VlZWVlZTtcXG4gIC0tYWRkLXRhc2stYnRuOiAjOTFlYzM2O1xcbiAgLS1hZGQtdGFzay1idG4taG92ZXI6ICM4NWRhMzE7XFxuICAtLWNhbmNlbC1idG46IHJnYigyMjMsIDYwLCA2MCk7XFxuICAtLWNhbmNlbC1idG4taG92ZXI6IHJnYigyMDYsIDU0LCA1NCk7XFxuICAtLWJvcmRlci1ncmF5OiAjYWNhY2FjO1xcbiAgLS1pbnB1dC1mb2N1cy1ib3JkZXI6IHJnYig2MSwgNjEsIDI1Myk7XFxuXFxuICAtLWluZm8tYmFyLWhlaWdodDogMTUwcHg7XFxufVxcblxcbi8qIFBhcmVudCBjb250YWluZXIgZm9yIHRhc2tzIGFuZCBjdXJyZW50IHByb2plY3QgaW5mbyAqL1xcblxcbi50YXNrcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2tzLWJnKTtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyO1xcbn1cXG5cXG4vKiBQcm9qZWN0IGluZm8gKi9cXG5cXG4udGFza3NfX3Byb2plY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IHZhcigtLWluZm8tYmFyLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LWluZm8tYmcpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi50YXNrc19fcHJvamVjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi50YXNrc19fdGl0bGUtZ3JvdXAsXFxuLnRhc2tzX19kZXNjcmlwLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMjRweDtcXG59XFxuXFxuLnRhc2tzX19lZGl0LXRpdGxlLWJ0bixcXG4udGFza3NfX2VkaXQtZGVzY3JpcC1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2tzX190aXRsZS1ncm91cDpob3ZlciAudGFza3NfX2VkaXQtdGl0bGUtYnRuOm5vdCguaGlkZGVuKSxcXG4udGFza3NfX2Rlc2NyaXAtZ3JvdXA6aG92ZXIgLnRhc2tzX19lZGl0LWRlc2NyaXAtYnRuOm5vdCguaGlkZGVuKSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9wZW5jaWwtb3V0bGluZS5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnRhc2tzX190aXRsZS1ncm91cDpob3ZlciAudGFza3NfX2VkaXQtdGl0bGUtYnRuOmhvdmVyLFxcbi50YXNrc19fZGVzY3JpcC1ncm91cDpob3ZlciAudGFza3NfX2VkaXQtZGVzY3JpcC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDIzOCwgMjM4LCA1MCUpO1xcbn1cXG5cXG4udGFza3NfX3NhdmUtdGl0bGUtYnRuIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9jb250ZW50LXNhdmUtZWRpdC1vdXRsaW5lLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4udGFza3NfX3NhdmUtdGl0bGUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMzgsIDIzOCwgNTAlKTtcXG59XFxuXFxuLnRhc2tzX19uZXctdGl0bGUtaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG4gIHdpZHRoOiAzNWNoO1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbi50YXNrc19fbmV3LXRpdGxlLWlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1pbnB1dC1mb2N1cy1ib3JkZXIpO1xcbn1cXG5cXG4udGFza3NfX3Byb2plY3QtdGl0bGUsXFxuLnRhc2tzX19wcm9qZWN0LWRlc2NyaXAge1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxufVxcblxcbi50YXNrc19fc2F2ZS1kZXNjcmlwLWJ0biB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvY29udGVudC1zYXZlLWVkaXQtb3V0bGluZS5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnRhc2tzX19zYXZlLWRlc2NyaXAtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMzgsIDIzOCwgNTAlKTtcXG59XFxuXFxuLnRhc2tzX19uZXctZGVzY3JpcC1pbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcbiAgd2lkdGg6IDM1Y2g7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLnRhc2tzX19uZXctZGVzY3JpcC1pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0taW5wdXQtZm9jdXMtYm9yZGVyKTtcXG59XFxuXFxuLyogUGFyZW50IGNvbnRhaW5lciBmb3IgdGFzayBvcGVyYXRpb25zICovXFxuXFxuLnRhc2tzX192aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1pbmZvLWJhci1oZWlnaHQpKTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKiBBZGQgdGFzayBidXR0b24gKi9cXG5cXG4udGFza3NfX2FkZC10YXNrLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkLXRhc2stYnRuKTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogNDhweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udGFza3NfX2FkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtdGFzay1idG4taG92ZXIpO1xcbn1cXG5cXG4udGFza3NfX2FkZC10YXNrLWljb24ge1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi50YXNrc19fYWRkLXRhc2stdGV4dCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi8qIFRhc2sgbGlzdCBhbmQgaXRlbXMgKi9cXG5cXG4udGFza3NfX2xpc3Qge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza3NfX2l0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxZnIgYXV0byBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFzay1pdGVtLWJnKTtcXG4gIHdpZHRoOiBtaW4oMTAwJSwgODAwcHgpO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggI2MyYzJjMjtcXG59XFxuXFxuLnRhc2tzX19pdGVtOmhvdmVyIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoMTQ3LCAxNDcsIDI1NSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrc19fbm8tdGFzayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFzay1pdGVtLWJnKTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLyogSXRlbSBjYXJkIHN0eWxpbmcgKi9cXG5cXG4uaXRlbV9fdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXgtd2lkdGg6IDQwY2g7XFxufVxcblxcbi5pdGVtX19kYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uaXRlbV9fZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBjb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICBoeXBoZW5zOiBhdXRvO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG59XFxuXFxuLml0ZW1fX2Nsb3NlLWJ0biB7XFxuICBncmlkLWNvbHVtbjogNCAvIDU7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2Nsb3NlLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaXRlbV9fY2xvc2UtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XFxufVxcblxcbi5pdGVtX190YWIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaXRlbV9fdGFiX3JlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3NSwgNzUpO1xcbn1cXG5cXG4uaXRlbV9fdGFiX3llbGxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyNTUsIDQ0KTtcXG59XFxuXFxuLml0ZW1fX3RhYl9ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODYsIDI1NSwgNDQpO1xcbn1cXG5cXG4uaXRlbV9fZWRpdC1idG4ge1xcbiAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9wZW5jaWwtb3V0bGluZS5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaXRlbV9fZWRpdC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFza3MtYmcpO1xcbn1cXG5cXG4vKiBOZXcvZWRpdCB0YXNrIGlucHV0cyAqL1xcblxcbi5uZXctdGFza19faW5wdXRzLFxcbi5lZGl0LXRhc2tfX2lucHV0cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIGdhcDogNXB4O1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2staXRlbS1iZyk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubmV3LXRhc2tfX3RpdGxlIC5lZGl0LXRhc2tfX2lucHV0cyB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5uZXctdGFza19fdGl0bGVfaW52YWxpZCxcXG4uZWRpdC10YXNrX190aXRsZV9pbnZhbGlkIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi5uZXctdGFza19fZGVzY3JpcHRpb24sXFxuLmVkaXQtdGFza19fZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ubmV3LXRhc2tfX2RhdGUsXFxuLmVkaXQtdGFza19fZGF0ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uZXctdGFza19fcHJpb3JpdHksXFxuLmVkaXQtdGFza19fcHJpb3JpdHkge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubmV3LXRhc2tfX2FjY2VwdC1idG4sXFxuLmVkaXQtdGFza19fYWNjZXB0LWJ0biB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtdGFzay1idG4pO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubmV3LXRhc2tfX2FjY2VwdC1idG46aG92ZXIgLmVkaXQtdGFza19fYWNjZXB0LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtdGFzay1idG4taG92ZXIpO1xcbn1cXG5cXG4ubmV3LXRhc2tfX2NhbmNlbC1idG4sXFxuLmVkaXQtdGFza19fY2FuY2VsLWJ0biB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW5jZWwtYnRuKTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5ldy10YXNrX19jYW5jZWwtYnRuOmhvdmVyLFxcbi5lZGl0LXRhc2tfX2NhbmNlbC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWJ0bi1ob3Zlcik7XFxufVxcblxcbi8qIFVzZWQgdG8gaGlkZSBlbGVtZW50cyAqL1xcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWFnZXMvcGx1cy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuICA8aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcbiAgICA8dGl0bGU+VG9kbyBBcHA8L3RpdGxlPlxcbiAgPC9oZWFkPlxcbiAgPGJvZHk+XFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3RzXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0c19fdGl0bGUtZ3JvdXBcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcInByb2plY3RzX19tZW51LXRpdGxlXFxcIj5Qcm9qZWN0czwvc3Bhbj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3RzX19tZW51LWJ0biBwcm9qZWN0c19fbWVudS1idG5fb3BlblxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdHNfX25ldy1pdGVtXFxcIj5cXG4gICAgICAgIDxpbnB1dFxcbiAgICAgICAgICBjbGFzcz1cXFwicHJvamVjdHNfX25ldy1pdGVtLWlucHV0XFxcIlxcbiAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiTmV3IFByb2plY3RcXFwiXFxuICAgICAgICAgIG1heGxlbmd0aD1cXFwiMzBcXFwiXFxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIlxcbiAgICAgICAgLz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3RzX19hZGQtYnRuXFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8dWwgY2xhc3M9XFxcInByb2plY3RzX19saXN0XFxcIj48L3VsPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFza3NcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRhc2tzX19wcm9qZWN0LWluZm9cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFza3NfX3RpdGxlLWdyb3VwXFxcIj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRhc2tzX19wcm9qZWN0LXRpdGxlXFxcIj48L3NwYW4+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInRhc2tzX19lZGl0LXRpdGxlLWJ0blxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj48L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFza3NfX2Rlc2NyaXAtZ3JvdXBcXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwidGFza3NfX3Byb2plY3QtZGVzY3JpcFxcXCI+PC9wPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ0YXNrc19fZWRpdC1kZXNjcmlwLWJ0blxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj48L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRhc2tzX192aWV3XFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInRhc2tzX19hZGQtdGFzay1idG5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XFxuICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInRhc2tzX19hZGQtdGFzay1pY29uXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiAvPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFza3NfX2FkZC10YXNrLXRleHRcXFwiPk5ldyBUYXNrPC9zcGFuPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YXNrc19fbGlzdFxcXCI+PC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza3MuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9wcm9qZWN0cy5jc3MnO1xuaW1wb3J0ICogYXMgdGFza3MgZnJvbSAnLi4vdGFza3MvdGFza3MnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vLi4vbW9kZWxzL1Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi4vLi4vbW9kZWxzL1Rhc2snO1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgcHJvakFycjogW1Byb2plY3QoKV0sIC8vIFN0b3JlcyBhbGwgcHJvamVjdHMgc3RhcnRpbmcgd2l0aCB0aGUgZGVmYXVsdFxuICBjdXJyZW50UHJvajogMCwgLy8gQ3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QgYnkgaW5kZXhcbn07XG5cbi8vIEhUTUwgZWxlbWVudHNcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNfX21lbnUtYnRuJyk7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuY29uc3QgbWVudUdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX190aXRsZS1ncm91cCcpO1xuY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19tZW51LXRpdGxlJyk7XG5jb25zdCBwcm9qZWN0c0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19uZXctaXRlbScpO1xuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19saXN0Jyk7XG5jb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fcHJvamVjdC1pbmZvJyk7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19hZGQtYnRuJyk7XG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NfX3Byb2plY3QtdGl0bGUnKTtcbmNvbnN0IGVkaXRUaXRsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fZWRpdC10aXRsZS1idG4nKTtcbmNvbnN0IHByb2plY3REZXNjcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX19wcm9qZWN0LWRlc2NyaXAnKTtcbmNvbnN0IGVkaXREZXNjcmlwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX19lZGl0LWRlc2NyaXAtYnRuJyk7XG5cbi8vIFRlbXAgZm9yIHRlc3RpbmdcbnN0YXRlLnByb2pBcnJbc3RhdGUuY3VycmVudFByb2pdLmFkZFRhc2soXG4gIFRhc2soJ1Rlc3QgVGl0bGUnLCAnVGVzdCBEZXNjcmlwdGlvbicsICcyMDIyLTA5LTIyJywgMSlcbik7XG5cbi8qKlxuICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgdXNlciBpcyBlZGl0aW5nIHByb2plY3QgaW5mby5cbiAqIEByZXR1cm5zIFRydWUgaWYgY3VycmVudGx5IGVkaXRpbmcgcHJvamVjdCBpbmZvLlxuICovXG5jb25zdCBpc0VkaXRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IHNhdmVUaXRsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fc2F2ZS10aXRsZS1idG4nKTtcbiAgY29uc3Qgc2F2ZURlc2NyaXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NfX3NhdmUtZGVzY3JpcC1idG4nKTtcblxuICBpZiAoc2F2ZVRpdGxlQnRuIHx8IHNhdmVEZXNjcmlwQnRuKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIERpc3BsYXlzIGFsbCBleGlzdGluZyBwcm9qZWN0cyBpbiB0aGUgc2lkZWJhci5cbiAqL1xuY29uc3QgZGlzcGxheVByb2pMaXN0ID0gKCkgPT4ge1xuICB3aGlsZSAocHJvamVjdHNMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qZWN0c0xpc3QucmVtb3ZlQ2hpbGQocHJvamVjdHNMaXN0Lmxhc3RDaGlsZCk7XG4gIH1cblxuICAvLyBBZGRzIGFsbCBleGlzdGluZyBwcm9qZWN0cyB0byB0aGUgc2lkZWJhclxuICBzdGF0ZS5wcm9qQXJyLmZvckVhY2goKHAsIGkpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdHNfX2l0ZW0nKTtcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpKTtcblxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBzZWxlY3Rpb25zXG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKCFpc0VkaXRpbmcoKSkge1xuICAgICAgICBjb25zdCBkYXRhSW5kZXggPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcbiAgICAgICAgc3RhdGUuY3VycmVudFByb2ogPSBkYXRhSW5kZXg7XG4gICAgICAgIGRpc3BsYXlQcm9qTGlzdCgpO1xuICAgICAgICB0YXNrcy51cGRhdGVUYXNrcyhzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBIaWdobGlnaHQgc2VsZWN0ZWQgcHJvamVjdFxuICAgIGlmIChzdGF0ZS5jdXJyZW50UHJvaiA9PT0gaSkge1xuICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdHNfX2l0ZW1fc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICAvLyBTZXRzIHByb2plY3QgdGl0bGVcbiAgICBjb25zdCBsaXN0SXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxpc3RJdGVtVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNfX2l0ZW0tdGl0bGUnKTtcbiAgICBsaXN0SXRlbVRpdGxlLnRleHRDb250ZW50ID0gcC5nZXRUaXRsZSgpO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RJdGVtVGl0bGUpO1xuXG4gICAgLy8gU2hvd3MgcHJvamVjdCBkZWxldGUgYnV0dG9uIGlmIG1vcmUgdGhhbiBvbmUgcHJvamVjdFxuICAgIGlmIChzdGF0ZS5wcm9qQXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzX19kZWxldGUtYnRuJyk7XG4gICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaSk7XG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBkYXRhSW5kZXggPSBOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcbiAgICAgICAgc3RhdGUucHJvakFyci5zcGxpY2UoZGF0YUluZGV4LCAxKTtcbiAgICAgICAgc3RhdGUuY3VycmVudFByb2ogPSAwO1xuICAgICAgICBkaXNwbGF5UHJvakxpc3QoKTtcbiAgICAgICAgdGFza3MudXBkYXRlVGFza3Moc3RhdGUpO1xuICAgICAgfSk7XG4gICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIH1cblxuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBFdmVudCBsaXN0ZW5lciBmb3IgYWRkaW5nIG5ldyBwcm9qZWN0cy5cbiAqL1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnByb2plY3RzX19uZXctaXRlbS1pbnB1dCdcbiAgKS52YWx1ZTtcblxuICBpZiAobmV3UHJvamVjdFRpdGxlICYmICFpc0VkaXRpbmcoKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fbmV3LWl0ZW0taW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSwgJ05vIGRlc2NyaXB0aW9uLicpO1xuICAgIHN0YXRlLnByb2pBcnIucHVzaChuZXdQcm9qZWN0KTtcbiAgICBzdGF0ZS5jdXJyZW50UHJvaiA9IHN0YXRlLnByb2pBcnIubGVuZ3RoIC0gMTtcbiAgICBkaXNwbGF5UHJvakxpc3QoKTtcbiAgICB0YXNrcy51cGRhdGVUYXNrcyhzdGF0ZSk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIEV2ZW50IGxpc3RlbmVyIGZvciB0aGUgbWVudSBidXR0b24gKHNob3cvaGlkZSBwcm9qZWN0cykuXG4gKi9cbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChtZW51QnRuLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdHNfX21lbnUtYnRuX29wZW4nKSkge1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlcGxhY2UoXG4gICAgICAncHJvamVjdHNfX21lbnUtYnRuX29wZW4nLFxuICAgICAgJ3Byb2plY3RzX19tZW51LWJ0bl9jbG9zZWQnXG4gICAgKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c19jbG9zZWQnKTtcbiAgICBwcm9qZWN0SW5mby5zdHlsZS5wYWRkaW5nID0gJzIwcHggMjBweCAyMHB4IDg1cHgnO1xuICAgIG1lbnVHcm91cC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c19fdGl0bGUtZ3JvdXBfY2xvc2VkJyk7XG4gICAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHByb2plY3RzSW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9IGVsc2Uge1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlcGxhY2UoXG4gICAgICAncHJvamVjdHNfX21lbnUtYnRuX2Nsb3NlZCcsXG4gICAgICAncHJvamVjdHNfX21lbnUtYnRuX29wZW4nXG4gICAgKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0c19jbG9zZWQnKTtcbiAgICBwcm9qZWN0SW5mby5zdHlsZS5wYWRkaW5nID0gJzIwcHgnO1xuICAgIG1lbnVHcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0c19fdGl0bGUtZ3JvdXBfY2xvc2VkJyk7XG4gICAgbWVudVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHByb2plY3RzSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9XG59KTtcblxuLyoqXG4gKiBFdmVudCBsaXN0ZW5lciB0byBlZGl0IHByb2plY3QgdGl0bGUuXG4gKi9cbmVkaXRUaXRsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NfX25ldy10aXRsZS1pbnB1dCcpKSB7XG4gICAgZWRpdERlc2NyaXBCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cbiAgICBjb25zdCBzYXZlVGl0bGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlVGl0bGVCdG4uY2xhc3NMaXN0LmFkZCgndGFza3NfX3NhdmUtdGl0bGUtYnRuJyk7XG5cbiAgICBjb25zdCBuZXdUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuZXdUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tzX19uZXctdGl0bGUtaW5wdXQnKTtcbiAgICBuZXdUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmV3VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICczMCcpO1xuICAgIG5ld1RpdGxlSW5wdXQudmFsdWUgPSBzdGF0ZS5wcm9qQXJyW3N0YXRlLmN1cnJlbnRQcm9qXS5nZXRUaXRsZSgpO1xuXG4gICAgc2F2ZVRpdGxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc3RhdGUucHJvakFycltzdGF0ZS5jdXJyZW50UHJval0uc2V0VGl0bGUobmV3VGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICBzYXZlVGl0bGVCdG4ucmVwbGFjZVdpdGgoZWRpdFRpdGxlQnRuKTtcbiAgICAgIG5ld1RpdGxlSW5wdXQucmVwbGFjZVdpdGgocHJvamVjdFRpdGxlKTtcbiAgICAgIGVkaXREZXNjcmlwQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZGlzcGxheVByb2pMaXN0KCk7XG4gICAgICB0YXNrcy51cGRhdGVUYXNrcyhzdGF0ZSk7XG4gICAgfSk7XG5cbiAgICBlZGl0VGl0bGVCdG4ucmVwbGFjZVdpdGgoc2F2ZVRpdGxlQnRuKTtcbiAgICBwcm9qZWN0VGl0bGUucmVwbGFjZVdpdGgobmV3VGl0bGVJbnB1dCk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIEV2ZW50IGxpc3RlbmVyIHRvIGVkaXQgcHJvamVjdCBkZXNjcmlwdGlvbi5cbiAqL1xuZWRpdERlc2NyaXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX19uZXctZGVzY3JpcC1pbnB1dCcpKSB7XG4gICAgZWRpdFRpdGxlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgY29uc3Qgc2F2ZURlc2NyaXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlRGVzY3JpcEJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrc19fc2F2ZS1kZXNjcmlwLWJ0bicpO1xuXG4gICAgY29uc3QgbmV3RGVzY3JpcElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuZXdEZXNjcmlwSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFza3NfX25ldy1kZXNjcmlwLWlucHV0Jyk7XG4gICAgbmV3RGVzY3JpcElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmV3RGVzY3JpcElucHV0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzI1MCcpO1xuICAgIG5ld0Rlc2NyaXBJbnB1dC52YWx1ZSA9IHN0YXRlLnByb2pBcnJbc3RhdGUuY3VycmVudFByb2pdLmdldERlc2NyaXB0aW9uKCk7XG5cbiAgICBzYXZlRGVzY3JpcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHN0YXRlLnByb2pBcnJbc3RhdGUuY3VycmVudFByb2pdLnNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXBJbnB1dC52YWx1ZSk7XG4gICAgICBzYXZlRGVzY3JpcEJ0bi5yZXBsYWNlV2l0aChlZGl0RGVzY3JpcEJ0bik7XG4gICAgICBuZXdEZXNjcmlwSW5wdXQucmVwbGFjZVdpdGgocHJvamVjdERlc2NyaXApO1xuICAgICAgZWRpdFRpdGxlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgZGlzcGxheVByb2pMaXN0KCk7XG4gICAgICB0YXNrcy51cGRhdGVUYXNrcyhzdGF0ZSk7XG4gICAgfSk7XG5cbiAgICBlZGl0RGVzY3JpcEJ0bi5yZXBsYWNlV2l0aChzYXZlRGVzY3JpcEJ0bik7XG4gICAgcHJvamVjdERlc2NyaXAucmVwbGFjZVdpdGgobmV3RGVzY3JpcElucHV0KTtcbiAgfVxufSk7XG5cbi8vIEluaXRpYWxpemUgdmlld3NcbmRpc3BsYXlQcm9qTGlzdCgpO1xudGFza3MudXBkYXRlVGFza3Moc3RhdGUpO1xuIiwiaW1wb3J0ICcuL3Rhc2tzLmNzcyc7XG5pbXBvcnQgVGFzayBmcm9tICcuLi8uLi9tb2RlbHMvVGFzayc7XG5cbmxldCBzdGF0ZSA9IG51bGw7XG5cbi8qKlxuICogRGlzcGxheXMgcHJvamVjdCBpbmZvIGZvciB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QuXG4gKi9cbmNvbnN0IGRpc3BsYXlQcm9qZWN0SW5mbyA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBzdGF0ZS5wcm9qQXJyW3N0YXRlLmN1cnJlbnRQcm9qXTtcblxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NfX3Byb2plY3QtdGl0bGUnKTtcbiAgaWYgKHByb2plY3RUaXRsZSkge1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LmdldFRpdGxlKCk7XG4gIH1cblxuICBjb25zdCBwcm9qZWN0RGVzY3JpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fcHJvamVjdC1kZXNjcmlwJyk7XG4gIGlmIChwcm9qZWN0RGVzY3JpcCkge1xuICAgIHByb2plY3REZXNjcmlwLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QuZ2V0RGVzY3JpcHRpb24oKTtcbiAgfVxufTtcblxuLyoqXG4gKiBEaXNwbGF5cyBhbGwgdGFza3MgZm9yIGEgcHJvamVjdCBhbmQgc2hvdyBwcm9qZWN0IGluZm8uXG4gKi9cbmNvbnN0IGRpc3BsYXlUYXNrTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBzdGF0ZS5wcm9qQXJyW3N0YXRlLmN1cnJlbnRQcm9qXTtcblxuICAvLyBDbGVhcnMgYWxsIHRhc2tzIGZyb20gdGhlIGRpc3BsYXlcbiAgY29uc3QgdGFza3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX19saXN0Jyk7XG4gIHdoaWxlICh0YXNrc0xpc3QuZmlyc3RDaGlsZCkge1xuICAgIHRhc2tzTGlzdC5yZW1vdmVDaGlsZCh0YXNrc0xpc3QubGFzdENoaWxkKTtcbiAgfVxuXG4gIC8vIFJlcG9wdWxhdGVzIHRoZSB0YXNrIGxpc3RcbiAgbGV0IGl0ZW07XG4gIGlmIChjdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCA9PT0gMCkge1xuICAgIGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzX19uby10YXNrJyk7XG4gICAgaXRlbS50ZXh0Q29udGVudCA9ICdZb3UgaGF2ZSBubyB0YXNrcy4nO1xuICAgIHRhc2tzTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzX19pdGVtJyk7XG5cbiAgICAgIC8vIFNldHMgcHJpb3JpdHkgY29sb3JcbiAgICAgIGNvbnN0IHRhc2tQcmlvcml0eVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza1ByaW9yaXR5VGFiLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX3RhYicpO1xuICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gTnVtYmVyKHRhc2suZ2V0UHJpb3JpdHkoKSk7XG4gICAgICBpZiAodGFza1ByaW9yaXR5ID09PSAxKSB7XG4gICAgICAgIHRhc2tQcmlvcml0eVRhYi5jbGFzc0xpc3QuYWRkKCdpdGVtX190YWJfcmVkJyk7XG4gICAgICB9IGVsc2UgaWYgKHRhc2tQcmlvcml0eSA9PT0gMikge1xuICAgICAgICB0YXNrUHJpb3JpdHlUYWIuY2xhc3NMaXN0LmFkZCgnaXRlbV9fdGFiX3llbGxvdycpO1xuICAgICAgfSBlbHNlIGlmICh0YXNrUHJpb3JpdHkgPT09IDMpIHtcbiAgICAgICAgdGFza1ByaW9yaXR5VGFiLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX3RhYl9ncmVlbicpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXRzIHRpdGxlXG4gICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbV9fdGl0bGUnKTtcbiAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKTtcblxuICAgICAgLy8gU2V0cyBkdWUgZGF0ZVxuICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCdpdGVtX19kYXRlJyk7XG4gICAgICBjb25zdCBkdWVEYXRlID0gdGFzay5nZXREdWVEYXRlKCk7XG4gICAgICBpZiAoZHVlRGF0ZSkge1xuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7ZHVlRGF0ZX1gO1xuICAgICAgfVxuXG4gICAgICAvLyBUYXNrIGRlbGV0ZSBidXR0b25cbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX2Nsb3NlLWJ0bicpO1xuICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGkgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgIHN0YXRlLnByb2pBcnJbc3RhdGUuY3VycmVudFByb2pdLnJlbW92ZVRhc2soaSk7XG4gICAgICAgIGRpc3BsYXlUYXNrTGlzdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEV4cGFuZHMgdGFzayB3aGVuIGNsaWNrZWRcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFza3NfX2l0ZW1fZXhwYW5kZWQnKSkge1xuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrc19faXRlbV9leHBhbmRlZCcpO1xuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcuaXRlbV9fZGVzY3JpcHRpb24nKS5yZW1vdmUoKTtcbiAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcignLml0ZW1fX2VkaXQtYnRuJykucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tzX19pdGVtX2V4cGFuZGVkJyk7XG5cbiAgICAgICAgICAvLyBEaXNwbGF5cyB0YXNrIGRlc2NyaXB0aW9uXG4gICAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtX19kZXNjcmlwdGlvbicpO1xuICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKTtcbiAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcblxuICAgICAgICAgIC8vIERpc3BsYXlzIGFuIGVkaXQgYnV0dG9uIGZvciB0aGUgdGFza1xuICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XG4gICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdpdGVtX19lZGl0LWJ0bicpO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RWRpdFRhc2spO1xuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5VGFiKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgdGFza3NMaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVUYXNrSW5mbyA9IChlKSA9PiB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2tfX3RpdGxlJykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrX19kZXNjcmlwdGlvbicpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFza19fZGF0ZScpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2tfX3ByaW9yaXR5JykudmFsdWU7XG5cbiAgaWYgKCF0aXRsZSkge1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrX190aXRsZScpO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZWRpdC10YXNrX190aXRsZV9pbnZhbGlkJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUucHJvakFycltzdGF0ZS5jdXJyZW50UHJval0ucmVwbGFjZVRhc2soXG4gICAgdGFza0luZGV4LFxuICAgIFRhc2sodGl0bGUsIGRlc2NyaXAsIGRhdGUsIHByaW9yaXR5KVxuICApO1xuICBkaXNwbGF5VGFza0xpc3QoKTtcbn07XG5cbi8qKlxuICogRGlzcGxheXMgYSBmb3JtIHRvIGVkaXQgdGFzayBpbmZvLlxuICovXG5jb25zdCBzaG93RWRpdFRhc2sgPSAoZSkgPT4ge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBjb25zdCB0YXNrSW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gIGNvbnN0IGN1cnJlbnRUYXNrID0gc3RhdGUucHJvakFycltzdGF0ZS5jdXJyZW50UHJval0uZ2V0VGFza3MoKVt0YXNrSW5kZXhdO1xuXG4gIC8vIFBhcmVudCBjb250YWluZXIgZm9yIHRoZSB0YXNrIGVkaXQgb3B0aW9uc1xuICBjb25zdCBlZGl0VGFza0lucHV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0VGFza0lucHV0cy5jbGFzc0xpc3QuYWRkKCdlZGl0LXRhc2tfX2lucHV0cycpO1xuXG4gIC8vIFRpdGxlIGlucHV0XG4gIGNvbnN0IGVkaXRUYXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBlZGl0VGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdGFza19fdGl0bGUnKTtcbiAgZWRpdFRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBlZGl0VGFza1RpdGxlLnZhbHVlID0gY3VycmVudFRhc2suZ2V0VGl0bGUoKTtcbiAgZWRpdFRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICczMCcpO1xuICBlZGl0VGFza0lucHV0cy5hcHBlbmRDaGlsZChlZGl0VGFza1RpdGxlKTtcblxuICAvLyBEZXNjcmlwdGlvbiBpbnB1dFxuICBjb25zdCBlZGl0VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZWRpdFRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRhc2tfX2Rlc2NyaXB0aW9uJyk7XG4gIGVkaXRUYXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZWRpdFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IGN1cnJlbnRUYXNrLmdldERlc2NyaXB0aW9uKCk7XG4gIGVkaXRUYXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTAwJyk7XG4gIGVkaXRUYXNrSW5wdXRzLmFwcGVuZENoaWxkKGVkaXRUYXNrRGVzY3JpcHRpb24pO1xuXG4gIC8vIER1ZSBkYXRlIGlucHV0XG4gIGNvbnN0IGVkaXRUYXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGVkaXRUYXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCdlZGl0LXRhc2tfX2RhdGUnKTtcbiAgZWRpdFRhc2tEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGVkaXRUYXNrRGF0ZS52YWx1ZSA9IGN1cnJlbnRUYXNrLmdldER1ZURhdGUoKTtcbiAgZWRpdFRhc2tJbnB1dHMuYXBwZW5kQ2hpbGQoZWRpdFRhc2tEYXRlKTtcblxuICAvLyBQcmlvcml0eSBpbnB1dFxuICBjb25zdCBlZGl0VGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGVkaXRUYXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnZWRpdC10YXNrX19wcmlvcml0eScpO1xuICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9ICdTZWxlY3QgYSBwcmlvcml0eSBsZXZlbCc7XG4gIG9wdGlvbi52YWx1ZSA9IDA7XG4gIGVkaXRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSArPSAxKSB7XG4gICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaWYgKE51bWJlcihjdXJyZW50VGFzay5nZXRQcmlvcml0eSgpKSA9PT0gaSkge1xuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICB9XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gYCR7aX1gO1xuICAgIG9wdGlvbi52YWx1ZSA9IGk7XG4gICAgZWRpdFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG4gIGVkaXRUYXNrSW5wdXRzLmFwcGVuZENoaWxkKGVkaXRUYXNrUHJpb3JpdHkpO1xuXG4gIC8vIENvbmZpcm1hdGlvbiBidXR0b25cbiAgY29uc3QgYWNjZXB0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFjY2VwdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRhc2tfX2FjY2VwdC1idG4nKTtcbiAgYWNjZXB0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgYWNjZXB0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIHRhc2tJbmRleCk7XG4gIGFjY2VwdEJ0bi50ZXh0Q29udGVudCA9ICdBY2NlcHQnO1xuICBhY2NlcHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVUYXNrSW5mbyk7XG4gIGVkaXRUYXNrSW5wdXRzLmFwcGVuZENoaWxkKGFjY2VwdEJ0bik7XG5cbiAgLy8gQ2FuY2VsIGJ1dHRvblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdGFza19fY2FuY2VsLWJ0bicpO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVkaXRUYXNrSW5wdXRzLnJlbW92ZSgpO1xuICAgIGRpc3BsYXlUYXNrTGlzdCgpO1xuICB9KTtcbiAgZWRpdFRhc2tJbnB1dHMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5yZXBsYWNlV2l0aChlZGl0VGFza0lucHV0cyk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHRoZSB0YXNrIHZpZXcuXG4gKiBAcGFyYW0ge09iamVjdH0gcyBBcHAgc3RhdGUuXG4gKi9cbmNvbnN0IHVwZGF0ZVRhc2tzID0gKHMpID0+IHtcbiAgc3RhdGUgPSBzO1xuICBkaXNwbGF5UHJvamVjdEluZm8oKTtcbiAgZGlzcGxheVRhc2tMaXN0KCk7XG59O1xuXG4vKipcbiAqIENsb3NlcyB0aGUgaW5wdXQgZm9ybSBmb3IgbmV3IHRhc2tzLlxuICovXG5jb25zdCBjbG9zZU5ld1Rhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NfX2FkZC10YXNrLWJ0bicpO1xuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gIGNvbnN0IG5ld1Rhc2tJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2tfX2lucHV0cycpO1xuICBuZXdUYXNrSW5wdXRzLnJlbW92ZSgpO1xufTtcblxuLyoqXG4gKiBBZGRzIHRoZSBuZXcgdGFzayB0byB0aGUgY3VycmVudCBwcm9qZWN0LlxuICovXG5jb25zdCBhZGROZXdUYXNrID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFza19fdGl0bGUnKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFza19fZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFza19fZGF0ZScpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFza19fcHJpb3JpdHknKS52YWx1ZTtcblxuICBpZiAoIXRpdGxlKSB7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFza19fdGl0bGUnKTtcbiAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrX190aXRsZV9pbnZhbGlkJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUucHJvakFycltzdGF0ZS5jdXJyZW50UHJval0uYWRkVGFzayhcbiAgICBUYXNrKHRpdGxlLCBkZXNjcmlwLCBkYXRlLCBwcmlvcml0eSlcbiAgKTtcbiAgY2xvc2VOZXdUYXNrKCk7XG4gIGRpc3BsYXlUYXNrTGlzdCgpO1xufTtcblxuLyoqXG4gKiBTaG93cyBhIGZvcm0gd2hlcmUgdGhlIHVzZXIgY2FuIGVudGVyIGluZm9ybWF0aW9uIGFib3V0IGEgbmV3IHRhc2suXG4gKi9cbmNvbnN0IGRpc3BsYXlOZXdUYXNrID0gKCkgPT4ge1xuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX19hZGQtdGFzay1idG4nKTtcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAvLyBQYXJlbnQgYW5kIHJlZmVyZW5jZSBub2Rlc1xuICBjb25zdCB0YXNrVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fdmlldycpO1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fbGlzdCcpO1xuXG4gIC8vIFBhcmVudCBjb250YWluZXIgZm9yIHRoZSB0YXNrIG9wdGlvbnNcbiAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrX19pbnB1dHMnKTtcblxuICAvLyBUaXRsZSBpbnB1dFxuICBjb25zdCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuZXdUYXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2tfX3RpdGxlJyk7XG4gIG5ld1Rhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuZXdUYXNrVGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciB0aXRsZScpO1xuICBuZXdUYXNrVGl0bGUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMzAnKTtcblxuICAvLyBEZXNjcmlwdGlvbiBpbnB1dFxuICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuZXdUYXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2tfX2Rlc2NyaXB0aW9uJyk7XG4gIG5ld1Rhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuZXdUYXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBkZXNjcmlwdGlvbicpO1xuICBuZXdUYXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTAwJyk7XG5cbiAgLy8gRHVlIGRhdGUgaW5wdXRcbiAgY29uc3QgbmV3VGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuZXdUYXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCduZXctdGFza19fZGF0ZScpO1xuICBuZXdUYXNrRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuXG4gIC8vIFByaW9yaXR5IGlucHV0XG4gIGNvbnN0IG5ld1Rhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBuZXdUYXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2tfX3ByaW9yaXR5Jyk7XG4gIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uLnRleHRDb250ZW50ID0gJ1NlbGVjdCBhIHByaW9yaXR5IGxldmVsJztcbiAgb3B0aW9uLnZhbHVlID0gMDtcbiAgbmV3VGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkgKz0gMSkge1xuICAgIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGAke2l9YDtcbiAgICBvcHRpb24udmFsdWUgPSBpO1xuICAgIG5ld1Rhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG5cbiAgLy8gQ29uZmlybWF0aW9uIGJ1dHRvblxuICBjb25zdCBhY2NlcHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWNjZXB0QnRuLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrX19hY2NlcHQtYnRuJyk7XG4gIGFjY2VwdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGFjY2VwdEJ0bi50ZXh0Q29udGVudCA9ICdBY2NlcHQnO1xuICBhY2NlcHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdUYXNrKTtcblxuICAvLyBDYW5jZWwgYnV0dG9uXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2tfX2NhbmNlbC1idG4nKTtcbiAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTmV3VGFzayk7XG5cbiAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrVGl0bGUpO1xuICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tEZXNjcmlwdGlvbik7XG4gIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGFza0RhdGUpO1xuICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tQcmlvcml0eSk7XG4gIG5ld1Rhc2suYXBwZW5kQ2hpbGQoYWNjZXB0QnRuKTtcbiAgbmV3VGFzay5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gIHRhc2tWaWV3Lmluc2VydEJlZm9yZShuZXdUYXNrLCB0YXNrTGlzdCk7XG59O1xuXG4vLyBFdmVudCBsaXN0ZW5lcnNcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NfX2FkZC10YXNrLWJ0bicpO1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlOZXdUYXNrKTtcblxuZXhwb3J0IHsgdXBkYXRlVGFza3MgfTtcbiIsIi8qKlxuICogUmVwcmVzZW50cyBhIHByb2plY3Qgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IHQgVGl0bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBkIERlc2NyaXB0aW9uXG4gKiBAcmV0dXJucyBPYmplY3QgY29udGFpbmluZyBwdWJsaWMgZnVuY3Rpb25zXG4gKi9cbmNvbnN0IFByb2plY3QgPSAodCwgZCkgPT4ge1xuICBsZXQgdGl0bGUgPSB0eXBlb2YgdCA9PT0gJ3N0cmluZycgPyB0IDogJ0RlZmF1bHQnO1xuICBsZXQgZGVzY3JpcHRpb24gPSB0eXBlb2YgdCA9PT0gJ3N0cmluZycgPyBkIDogJ1RoaXMgaXMgdGhlIGRlZmF1bHQgcHJvamVjdC4nO1xuICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gIC8vIEdldHRlcnNcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiBbLi4udGFza3NdO1xuXG4gIC8vIFNldHRlcnNcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+ICh0aXRsZSA9IG5ld1RpdGxlKTtcbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IChkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uKTtcblxuICAvLyBBZGRzIGEgdGFzayBvYmplY3QgdG8gdGhlIGxpc3QuXG4gIGNvbnN0IGFkZFRhc2sgPSAodGFza0l0ZW0pID0+IHRhc2tzLnB1c2godGFza0l0ZW0pO1xuXG4gIC8vIFJlbW92ZXMgYSB0YXNrIG9iamVjdCBmcm9tIHRoZSBsaXN0LlxuICBjb25zdCByZW1vdmVUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICAvLyBSZXBsYWNlcyBhIHRhc2sgd2l0aCBhbm90aGVyLlxuICBjb25zdCByZXBsYWNlVGFzayA9IChpbmRleCwgdGFzaykgPT4ge1xuICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSwgdGFzayk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXRUYXNrcyxcbiAgICBzZXRUaXRsZSxcbiAgICBzZXREZXNjcmlwdGlvbixcbiAgICBhZGRUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gICAgcmVwbGFjZVRhc2ssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgdG9kbyBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gdCBUaXRsZVxuICogQHBhcmFtIHtzdHJpbmd9IGQgRGVzY3JpcHRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZCBEdWUgZGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHAgUHJpb3JpdHlcbiAqIEByZXR1cm5zIE9iamVjdCBjb250YWluaW5nIHB1YmxpYyBmdW5jdGlvbnNcbiAqL1xuY29uc3QgVGFzayA9ICh0LCBkLCBkZCwgcCkgPT4ge1xuICBsZXQgdGl0bGUgPSB0O1xuICBsZXQgZGVzY3JpcHRpb24gPSBkO1xuICBsZXQgZHVlRGF0ZSA9IGRkO1xuICBsZXQgcHJpb3JpdHkgPSBwO1xuXG4gIC8vIEdldHRlcnNcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG5cbiAgLy8gU2V0dGVyc1xuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4gKHRpdGxlID0gbmV3VGl0bGUpO1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4gKGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24pO1xuICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IChkdWVEYXRlID0gbmV3RHVlRGF0ZSk7XG4gIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiAocHJpb3JpdHkgPSBuZXdQcmlvcml0eSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIHNldFRpdGxlLFxuICAgIHNldERlc2NyaXB0aW9uLFxuICAgIHNldER1ZURhdGUsXG4gICAgc2V0UHJpb3JpdHksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vaW5kZXguaHRtbCc7XG5pbXBvcnQgJy4vcmVzZXQuY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9