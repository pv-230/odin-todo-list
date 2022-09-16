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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'RobotoRegular';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\n:root {\n  /* Colors */\n  --sidebar-bg: #eeeeee;\n  --sidebar-selected: #b1b1b1;\n  --sidebar-menu-hover: #dddddd;\n  --sidebar-add-hover: #90ff6e;\n  --sidebar-delete-hover: #ff6464;\n\n  /* Sizes */\n  --sidebar-width: 300px;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  width: var(--sidebar-width);\n  min-width: var(--sidebar-width);\n  box-shadow: 2px 0px 8px #bbbbbb;\n  font-family: 'RobotoRegular';\n  background-color: var(--sidebar-bg);\n  z-index: 1;\n}\n\n.projects_closed {\n  width: fit-content;\n  min-width: fit-content;\n  position: absolute;\n  background-color: transparent;\n  box-shadow: none;\n}\n\n/* Sidebar menu top */\n\n.projects__title-group {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid var(--sidebar-selected);\n}\n\n.projects__title-group_closed {\n  border-bottom: none;\n}\n\n.projects__menu-title {\n  font-size: 48px;\n}\n\n.projects__menu-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 48px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.projects__menu-btn:hover {\n  background-color: var(--sidebar-menu-hover);\n  cursor: pointer;\n}\n\n.projects__menu-btn_open:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n}\n\n.projects__menu-btn_closed:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: cover;\n  background-color: transparent;\n}\n\n.projects__menu-icon {\n  width: 48px;\n  height: 48px;\n}\n\n/* Sidebar items */\n\n.projects__item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 20px;\n  font-family: RobotoRegular;\n  height: 58px;\n}\n\n.projects__item:hover:not(.projects__item_selected) {\n  background-color: #d8d8d8;\n}\n\n.projects__item_selected {\n  background-color: var(--sidebar-selected);\n}\n\n.projects__item-title {\n  font-size: 32px;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.projects__delete-btn {\n  width: 48px;\n  height: 48px;\n  border-radius: 5px;\n}\n\n.projects__item:hover .projects__delete-btn {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: cover;\n}\n\n.projects__delete-btn:hover {\n  background-color: var(--sidebar-delete-hover);\n  cursor: pointer;\n}\n\n/* Sidebar new item input */\n\n.projects__new-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 20px;\n  font-family: RobotoRegular;\n}\n\n.projects__new-item-input {\n  border: none;\n  background-color: #dddddd;\n  width: 200px;\n  height: 32px;\n  border-radius: 5px;\n  font-size: 18px;\n  padding: 0 5px;\n}\n\n.projects__add-btn {\n  width: 48px;\n  height: 48px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.projects__add-btn:hover {\n  background-color: var(--sidebar-add-hover);\n  cursor: pointer;\n}\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/components/projects/projects.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,+DAAoE;AACtE;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,2BAA2B;EAC3B,6BAA6B;EAC7B,4BAA4B;EAC5B,+BAA+B;;EAE/B,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,+BAA+B;EAC/B,+BAA+B;EAC/B,4BAA4B;EAC5B,mCAAmC;EACnC,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,qBAAqB;;AAErB;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,gDAAgD;AAClD;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,yDAA6D;EAC7D,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,2CAA2C;EAC3C,eAAe;AACjB;;AAEA;EACE,yDAAyD;EACzD,sBAAsB;AACxB;;AAEA;EACE,yDAA4D;EAC5D,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,kBAAkB;;AAElB;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,yDAA6D;EAC7D,sBAAsB;AACxB;;AAEA;EACE,6CAA6C;EAC7C,eAAe;AACjB;;AAEA,2BAA2B;;AAE3B;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yDAAmD;EACnD,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;EAC1C,eAAe;AACjB;;AAEA;EACE,aAAa;AACf","sourcesContent":["@font-face {\n  font-family: 'RobotoRegular';\n  src: url('../../assets/fonts/Roboto-Regular.ttf') format('truetype');\n}\n\n:root {\n  /* Colors */\n  --sidebar-bg: #eeeeee;\n  --sidebar-selected: #b1b1b1;\n  --sidebar-menu-hover: #dddddd;\n  --sidebar-add-hover: #90ff6e;\n  --sidebar-delete-hover: #ff6464;\n\n  /* Sizes */\n  --sidebar-width: 300px;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  width: var(--sidebar-width);\n  min-width: var(--sidebar-width);\n  box-shadow: 2px 0px 8px #bbbbbb;\n  font-family: 'RobotoRegular';\n  background-color: var(--sidebar-bg);\n  z-index: 1;\n}\n\n.projects_closed {\n  width: fit-content;\n  min-width: fit-content;\n  position: absolute;\n  background-color: transparent;\n  box-shadow: none;\n}\n\n/* Sidebar menu top */\n\n.projects__title-group {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid var(--sidebar-selected);\n}\n\n.projects__title-group_closed {\n  border-bottom: none;\n}\n\n.projects__menu-title {\n  font-size: 48px;\n}\n\n.projects__menu-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 48px;\n  height: 48px;\n  background-image: url(../../assets/images/hamburger-icon.svg);\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.projects__menu-btn:hover {\n  background-color: var(--sidebar-menu-hover);\n  cursor: pointer;\n}\n\n.projects__menu-btn_open:hover {\n  background-image: url(../../assets/images/backburger.svg);\n  background-size: cover;\n}\n\n.projects__menu-btn_closed:hover {\n  background-image: url(../../assets/images/forwardburger.svg);\n  background-size: cover;\n  background-color: transparent;\n}\n\n.projects__menu-icon {\n  width: 48px;\n  height: 48px;\n}\n\n/* Sidebar items */\n\n.projects__item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 20px;\n  font-family: RobotoRegular;\n  height: 58px;\n}\n\n.projects__item:hover:not(.projects__item_selected) {\n  background-color: #d8d8d8;\n}\n\n.projects__item_selected {\n  background-color: var(--sidebar-selected);\n}\n\n.projects__item-title {\n  font-size: 32px;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.projects__delete-btn {\n  width: 48px;\n  height: 48px;\n  border-radius: 5px;\n}\n\n.projects__item:hover .projects__delete-btn {\n  background-image: url(../../assets/images/delete-outline.svg);\n  background-size: cover;\n}\n\n.projects__delete-btn:hover {\n  background-color: var(--sidebar-delete-hover);\n  cursor: pointer;\n}\n\n/* Sidebar new item input */\n\n.projects__new-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 20px;\n  font-family: RobotoRegular;\n}\n\n.projects__new-item-input {\n  border: none;\n  background-color: #dddddd;\n  width: 200px;\n  height: 32px;\n  border-radius: 5px;\n  font-size: 18px;\n  padding: 0 5px;\n}\n\n.projects__add-btn {\n  width: 48px;\n  height: 48px;\n  background-image: url(../../assets/images/plus.svg);\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.projects__add-btn:hover {\n  background-color: var(--sidebar-add-hover);\n  cursor: pointer;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/images/close.svg */ "./src/assets/images/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'RobotoRegular';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\n:root {\n  --project-info-bg: #b7b0ff;\n  --tasks-bg: #d9d9d9;\n  --task-item-bg: #eeeeee;\n  --add-task-btn: #91ec36;\n  --add-task-btn-hover: #85da31;\n  --cancel-btn: rgb(223, 60, 60);\n  --cancel-btn-hover: rgb(206, 54, 54);\n  --border-gray: #acacac;\n\n  --info-bar-height: 150px;\n}\n\n/* Parent container for tasks and current project info */\n\n.tasks {\n  width: 100%;\n  background-color: var(--tasks-bg);\n  font-family: RobotoRegular;\n}\n\n/* Project info */\n\n.tasks__project-info {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  height: var(--info-bar-height);\n  background-color: var(--project-info-bg);\n  border-bottom: 1px solid gray;\n}\n\n.tasks__project-title {\n  font-size: 48px;\n}\n\n/* Parent container for task operations */\n\n.tasks__view {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  padding: 20px;\n  height: calc(100vh - var(--info-bar-height));\n  overflow: auto;\n}\n\n/* Add task button */\n\n.tasks__add-task-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  background-color: var(--add-task-btn);\n  width: fit-content;\n  height: 48px;\n  padding: 0;\n  padding-right: 10px;\n}\n\n.tasks__add-task-btn:hover {\n  background-color: var(--add-task-btn-hover);\n}\n\n.tasks__add-task-icon {\n  height: 80%;\n}\n\n.tasks__add-task-text {\n  font-size: 18px;\n}\n\n/* Task list and items */\n\n.tasks__list {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n}\n\n.tasks__item {\n  display: grid;\n  grid-template-columns: 20px 1fr auto auto;\n  border-radius: 5px;\n  background-color: var(--task-item-bg);\n  width: min(100%, 800px);\n  box-shadow: 5px 5px 5px #c2c2c2;\n}\n\n.tasks__item:hover {\n  outline: 2px solid rgb(147, 147, 255);\n  cursor: pointer;\n}\n\n.tasks__no-task {\n  text-align: center;\n  border-radius: 5px;\n  padding: 10px;\n  background-color: var(--task-item-bg);\n  width: fit-content;\n}\n\n/* Item card styling */\n\n.item__title {\n  display: flex;\n  align-items: center;\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  font-size: 20px;\n  padding: 5px;\n  max-width: 40ch;\n}\n\n.item__date {\n  display: flex;\n  align-items: center;\n  grid-column: 3 / 4;\n  grid-row: 1 / 2;\n  font-size: 20px;\n  padding: 5px;\n}\n\n.item__description {\n  display: flex;\n  align-items: center;\n  grid-column: 2 / 4;\n  grid-row: 2 / 3;\n  color: rgb(54, 54, 54);\n  padding: 5px;\n  max-width: 80%;\n  hyphens: auto;\n  word-break: break-word;\n}\n\n.item__close-btn {\n  grid-column: 4 / 5;\n  grid-row: 1 / 2;\n  width: 32px;\n  height: 32px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.item__close-btn:hover {\n  background-color: #dbdbdb;\n}\n\n.item__tab {\n  grid-column: 1 / 2;\n  grid-row: 1 / 3;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.item__tab_red {\n  background-color: rgb(255, 75, 75);\n}\n\n.item__tab_yellow {\n  background-color: rgb(251, 255, 44);\n}\n\n.item__tab_green {\n  background-color: rgb(86, 255, 44);\n}\n\n/* New task inputs */\n\n.new-task__inputs {\n  display: grid;\n  width: fit-content;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap: 5px;\n  min-width: max-content;\n}\n\n.new-task__title {\n  padding: 5px;\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.new-task__title_invalid {\n  outline: 2px solid red;\n}\n\n.new-task__description {\n  padding: 5px;\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.new-task__date {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  height: 100%;\n}\n\n.new-task__priority {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  height: 100%;\n}\n\n.new-task__accept-btn {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  background-color: var(--add-task-btn);\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n  height: 100%;\n}\n\n.new-task__accept-btn:hover {\n  background-color: var(--add-task-btn-hover);\n}\n\n.new-task__cancel-btn {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  background-color: var(--cancel-btn);\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  height: 100%;\n}\n\n.new-task__cancel-btn:hover {\n  background-color: var(--cancel-btn-hover);\n}\n\n/* Used to hide elements */\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/components/tasks/tasks.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'RobotoRegular';\n  src: url('../../assets/fonts/Roboto-Regular.ttf') format('truetype');\n}\n\n:root {\n  --project-info-bg: #b7b0ff;\n  --tasks-bg: #d9d9d9;\n  --task-item-bg: #eeeeee;\n  --add-task-btn: #91ec36;\n  --add-task-btn-hover: #85da31;\n  --cancel-btn: rgb(223, 60, 60);\n  --cancel-btn-hover: rgb(206, 54, 54);\n  --border-gray: #acacac;\n\n  --info-bar-height: 150px;\n}\n\n/* Parent container for tasks and current project info */\n\n.tasks {\n  width: 100%;\n  background-color: var(--tasks-bg);\n  font-family: RobotoRegular;\n}\n\n/* Project info */\n\n.tasks__project-info {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  height: var(--info-bar-height);\n  background-color: var(--project-info-bg);\n  border-bottom: 1px solid gray;\n}\n\n.tasks__project-title {\n  font-size: 48px;\n}\n\n/* Parent container for task operations */\n\n.tasks__view {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  padding: 20px;\n  height: calc(100vh - var(--info-bar-height));\n  overflow: auto;\n}\n\n/* Add task button */\n\n.tasks__add-task-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  background-color: var(--add-task-btn);\n  width: fit-content;\n  height: 48px;\n  padding: 0;\n  padding-right: 10px;\n}\n\n.tasks__add-task-btn:hover {\n  background-color: var(--add-task-btn-hover);\n}\n\n.tasks__add-task-icon {\n  height: 80%;\n}\n\n.tasks__add-task-text {\n  font-size: 18px;\n}\n\n/* Task list and items */\n\n.tasks__list {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n}\n\n.tasks__item {\n  display: grid;\n  grid-template-columns: 20px 1fr auto auto;\n  border-radius: 5px;\n  background-color: var(--task-item-bg);\n  width: min(100%, 800px);\n  box-shadow: 5px 5px 5px #c2c2c2;\n}\n\n.tasks__item:hover {\n  outline: 2px solid rgb(147, 147, 255);\n  cursor: pointer;\n}\n\n.tasks__no-task {\n  text-align: center;\n  border-radius: 5px;\n  padding: 10px;\n  background-color: var(--task-item-bg);\n  width: fit-content;\n}\n\n/* Item card styling */\n\n.item__title {\n  display: flex;\n  align-items: center;\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  font-size: 20px;\n  padding: 5px;\n  max-width: 40ch;\n}\n\n.item__date {\n  display: flex;\n  align-items: center;\n  grid-column: 3 / 4;\n  grid-row: 1 / 2;\n  font-size: 20px;\n  padding: 5px;\n}\n\n.item__description {\n  display: flex;\n  align-items: center;\n  grid-column: 2 / 4;\n  grid-row: 2 / 3;\n  color: rgb(54, 54, 54);\n  padding: 5px;\n  max-width: 80%;\n  hyphens: auto;\n  word-break: break-word;\n}\n\n.item__close-btn {\n  grid-column: 4 / 5;\n  grid-row: 1 / 2;\n  width: 32px;\n  height: 32px;\n  background-image: url(../../assets/images/close.svg);\n  background-size: cover;\n  border-radius: 5px;\n}\n\n.item__close-btn:hover {\n  background-color: #dbdbdb;\n}\n\n.item__tab {\n  grid-column: 1 / 2;\n  grid-row: 1 / 3;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.item__tab_red {\n  background-color: rgb(255, 75, 75);\n}\n\n.item__tab_yellow {\n  background-color: rgb(251, 255, 44);\n}\n\n.item__tab_green {\n  background-color: rgb(86, 255, 44);\n}\n\n/* New task inputs */\n\n.new-task__inputs {\n  display: grid;\n  width: fit-content;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  gap: 5px;\n  min-width: max-content;\n}\n\n.new-task__title {\n  padding: 5px;\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.new-task__title_invalid {\n  outline: 2px solid red;\n}\n\n.new-task__description {\n  padding: 5px;\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.new-task__date {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  height: 100%;\n}\n\n.new-task__priority {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  height: 100%;\n}\n\n.new-task__accept-btn {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  background-color: var(--add-task-btn);\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n  height: 100%;\n}\n\n.new-task__accept-btn:hover {\n  background-color: var(--add-task-btn-hover);\n}\n\n.new-task__cancel-btn {\n  border: 1px solid var(--border-gray);\n  border-radius: 5px;\n  background-color: var(--cancel-btn);\n  grid-column: 2 / 3;\n  grid-row: 3 / 4;\n  height: 100%;\n}\n\n.new-task__cancel-btn:hover {\n  background-color: var(--cancel-btn-hover);\n}\n\n/* Used to hide elements */\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Todo App</title>\n  </head>\n  <body>\n    <div class=\"projects\">\n      <div class=\"projects__title-group\">\n        <span class=\"projects__menu-title\">Projects</span>\n        <div class=\"projects__menu-btn projects__menu-btn_open\"></div>\n      </div>\n      <div class=\"projects__new-item\">\n        <input\n          class=\"projects__new-item-input\"\n          type=\"text\"\n          placeholder=\"New Project\"\n          maxlength=\"30\"\n          autocomplete=\"off\"\n        />\n        <div class=\"projects__add-btn\"></div>\n      </div>\n      <ul class=\"projects__list\"></ul>\n    </div>\n    <div class=\"tasks\">\n      <div class=\"tasks__project-info\">\n        <span class=\"tasks__project-title\"></span>\n        <p class=\"tasks__project-descrip\"></p>\n      </div>\n      <div class=\"tasks__view\">\n        <button class=\"tasks__add-task-btn\" type=\"button\">\n          <img class=\"tasks__add-task-icon\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\n          <span class=\"tasks__add-task-text\">New Task</span>\n        </button>\n        <div class=\"tasks__list\"></div>\n      </div>\n    </div>\n  </body>\n</html>\n";
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

// Common elements
const menuBtn = document.querySelector('.projects__menu-btn');
const projects = document.querySelector('.projects');
const menuGroup = document.querySelector('.projects__title-group');
const menuTitle = document.querySelector('.projects__menu-title');
const projectsInput = document.querySelector('.projects__new-item');
const projectsList = document.querySelector('.projects__list');
const projectInfo = document.querySelector('.tasks__project-info');
const addProjectBtn = document.querySelector('.projects__add-btn');

// Temp for testing
state.projArr[state.currentProj].addTask(
  (0,_models_Task__WEBPACK_IMPORTED_MODULE_3__["default"])('Test Title', 'Test Description', '2022-09-22', 1)
);

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
      const dataIndex = Number(e.currentTarget.getAttribute('data-index'));
      state.currentProj = dataIndex;
      displayProjList();
      _tasks_tasks__WEBPACK_IMPORTED_MODULE_1__.updateTasks(state);
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

  if (newProjectTitle) {
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
  projectTitle.textContent = currentProject.getTitle();

  const projectDescrip = document.querySelector('.tasks__project-descrip');
  projectDescrip.textContent = currentProject.getDescription();
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
        const i = e.currentTarget.getAttribute('data-index');
        state.projArr[state.currentProj].removeTask(i);
        displayTaskList();
      });

      // Displays description when a task is clicked
      item.addEventListener('click', (e) => {
        let taskDescription = e.currentTarget.querySelector(
          '.item__description'
        );
        if (taskDescription) {
          taskDescription.remove();
        } else {
          taskDescription = document.createElement('span');
          taskDescription.classList.add('item__description');
          taskDescription.textContent = task.getDescription();
          e.currentTarget.appendChild(taskDescription);
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
 * Shows a card where the user can enter information about a new task.
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

  return {
    getTitle,
    getDescription,
    getTasks,
    setTitle,
    setDescription,
    addTask,
    removeTask,
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
  const getInfo = () =>
    `Title: ${title}\n` +
    `Description: ${description}\n` +
    `Due date: ${dueDate}\n` +
    `Priority: ${priority}\n`;

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
    getInfo,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEs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QUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQnNCO0FBQ0Q7QUFDQTtBQUNtQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy90YXNrcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jc3M/OTY3NCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrcy90YXNrcy5jc3M/NDFhMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc2V0LmNzcz9lZGUwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza3MvdGFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Qcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvVGFzay5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hhbWJ1cmdlci1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2J1cmdlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ZvcndhcmRidXJnZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9kZWxldGUtb3V0bGluZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3BsdXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcic7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAvKiBDb2xvcnMgKi9cXG4gIC0tc2lkZWJhci1iZzogI2VlZWVlZTtcXG4gIC0tc2lkZWJhci1zZWxlY3RlZDogI2IxYjFiMTtcXG4gIC0tc2lkZWJhci1tZW51LWhvdmVyOiAjZGRkZGRkO1xcbiAgLS1zaWRlYmFyLWFkZC1ob3ZlcjogIzkwZmY2ZTtcXG4gIC0tc2lkZWJhci1kZWxldGUtaG92ZXI6ICNmZjY0NjQ7XFxuXFxuICAvKiBTaXplcyAqL1xcbiAgLS1zaWRlYmFyLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgbWluLXdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXG4gIGJveC1zaGFkb3c6IDJweCAwcHggOHB4ICNiYmJiYmI7XFxuICBmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iZyk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ucHJvamVjdHNfY2xvc2VkIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qIFNpZGViYXIgbWVudSB0b3AgKi9cXG5cXG4ucHJvamVjdHNfX3RpdGxlLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zaWRlYmFyLXNlbGVjdGVkKTtcXG59XFxuXFxuLnByb2plY3RzX190aXRsZS1ncm91cF9jbG9zZWQge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLnByb2plY3RzX19tZW51LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLnByb2plY3RzX19tZW51LWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3RzX19tZW51LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLW1lbnUtaG92ZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHNfX21lbnUtYnRuX29wZW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5wcm9qZWN0c19fbWVudS1idG5fY2xvc2VkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wcm9qZWN0c19fbWVudS1pY29uIHtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbn1cXG5cXG4vKiBTaWRlYmFyIGl0ZW1zICovXFxuXFxuLnByb2plY3RzX19pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxuICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcXG4gIGhlaWdodDogNThweDtcXG59XFxuXFxuLnByb2plY3RzX19pdGVtOmhvdmVyOm5vdCgucHJvamVjdHNfX2l0ZW1fc2VsZWN0ZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XFxufVxcblxcbi5wcm9qZWN0c19faXRlbV9zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLXNlbGVjdGVkKTtcXG59XFxuXFxuLnByb2plY3RzX19pdGVtLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5wcm9qZWN0c19fZGVsZXRlLWJ0biB7XFxuICB3aWR0aDogNDhweDtcXG4gIGhlaWdodDogNDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3RzX19pdGVtOmhvdmVyIC5wcm9qZWN0c19fZGVsZXRlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnByb2plY3RzX19kZWxldGUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItZGVsZXRlLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogU2lkZWJhciBuZXcgaXRlbSBpbnB1dCAqL1xcblxcbi5wcm9qZWN0c19fbmV3LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyO1xcbn1cXG5cXG4ucHJvamVjdHNfX25ldy1pdGVtLWlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLnByb2plY3RzX19hZGQtYnRuIHtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0c19fYWRkLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWFkZC1ob3Zlcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLCtEQUFvRTtBQUN0RTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsK0JBQStCOztFQUUvQixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsbUNBQW1DO0VBQ25DLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWix5REFBNkQ7RUFDN0Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseURBQXlEO0VBQ3pELHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlEQUE0RDtFQUM1RCxzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxrQkFBa0I7O0FBRWxCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlEQUE2RDtFQUM3RCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0MsZUFBZTtBQUNqQjs7QUFFQSwyQkFBMkI7O0FBRTNCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUFtRDtFQUNuRCxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90b1JlZ3VsYXInO1xcbiAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbjpyb290IHtcXG4gIC8qIENvbG9ycyAqL1xcbiAgLS1zaWRlYmFyLWJnOiAjZWVlZWVlO1xcbiAgLS1zaWRlYmFyLXNlbGVjdGVkOiAjYjFiMWIxO1xcbiAgLS1zaWRlYmFyLW1lbnUtaG92ZXI6ICNkZGRkZGQ7XFxuICAtLXNpZGViYXItYWRkLWhvdmVyOiAjOTBmZjZlO1xcbiAgLS1zaWRlYmFyLWRlbGV0ZS1ob3ZlcjogI2ZmNjQ2NDtcXG5cXG4gIC8qIFNpemVzICovXFxuICAtLXNpZGViYXItd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICBtaW4td2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgYm94LXNoYWRvdzogMnB4IDBweCA4cHggI2JiYmJiYjtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcic7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJnKTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5wcm9qZWN0c19jbG9zZWQge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyogU2lkZWJhciBtZW51IHRvcCAqL1xcblxcbi5wcm9qZWN0c19fdGl0bGUtZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNpZGViYXItc2VsZWN0ZWQpO1xcbn1cXG5cXG4ucHJvamVjdHNfX3RpdGxlLWdyb3VwX2Nsb3NlZCB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdHNfX21lbnUtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4ucHJvamVjdHNfX21lbnUtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNDhweDtcXG4gIGhlaWdodDogNDhweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2hhbWJ1cmdlci1pY29uLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdHNfX21lbnUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItbWVudS1ob3Zlcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0c19fbWVudS1idG5fb3Blbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrYnVyZ2VyLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ucHJvamVjdHNfX21lbnUtYnRuX2Nsb3NlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9mb3J3YXJkYnVyZ2VyLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wcm9qZWN0c19fbWVudS1pY29uIHtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbn1cXG5cXG4vKiBTaWRlYmFyIGl0ZW1zICovXFxuXFxuLnByb2plY3RzX19pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxuICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcXG4gIGhlaWdodDogNThweDtcXG59XFxuXFxuLnByb2plY3RzX19pdGVtOmhvdmVyOm5vdCgucHJvamVjdHNfX2l0ZW1fc2VsZWN0ZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XFxufVxcblxcbi5wcm9qZWN0c19faXRlbV9zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLXNlbGVjdGVkKTtcXG59XFxuXFxuLnByb2plY3RzX19pdGVtLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5wcm9qZWN0c19fZGVsZXRlLWJ0biB7XFxuICB3aWR0aDogNDhweDtcXG4gIGhlaWdodDogNDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3RzX19pdGVtOmhvdmVyIC5wcm9qZWN0c19fZGVsZXRlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9kZWxldGUtb3V0bGluZS5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnByb2plY3RzX19kZWxldGUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItZGVsZXRlLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogU2lkZWJhciBuZXcgaXRlbSBpbnB1dCAqL1xcblxcbi5wcm9qZWN0c19fbmV3LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG9SZWd1bGFyO1xcbn1cXG5cXG4ucHJvamVjdHNfX25ldy1pdGVtLWlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLnByb2plY3RzX19hZGQtYnRuIHtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvcGx1cy5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3RzX19hZGQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYWRkLWhvdmVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2Nsb3NlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvUmVndWxhcic7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXByb2plY3QtaW5mby1iZzogI2I3YjBmZjtcXG4gIC0tdGFza3MtYmc6ICNkOWQ5ZDk7XFxuICAtLXRhc2staXRlbS1iZzogI2VlZWVlZTtcXG4gIC0tYWRkLXRhc2stYnRuOiAjOTFlYzM2O1xcbiAgLS1hZGQtdGFzay1idG4taG92ZXI6ICM4NWRhMzE7XFxuICAtLWNhbmNlbC1idG46IHJnYigyMjMsIDYwLCA2MCk7XFxuICAtLWNhbmNlbC1idG4taG92ZXI6IHJnYigyMDYsIDU0LCA1NCk7XFxuICAtLWJvcmRlci1ncmF5OiAjYWNhY2FjO1xcblxcbiAgLS1pbmZvLWJhci1oZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4vKiBQYXJlbnQgY29udGFpbmVyIGZvciB0YXNrcyBhbmQgY3VycmVudCBwcm9qZWN0IGluZm8gKi9cXG5cXG4udGFza3Mge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrcy1iZyk7XFxuICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcXG59XFxuXFxuLyogUHJvamVjdCBpbmZvICovXFxuXFxuLnRhc2tzX19wcm9qZWN0LWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiB2YXIoLS1pbmZvLWJhci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1pbmZvLWJnKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4udGFza3NfX3Byb2plY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4vKiBQYXJlbnQgY29udGFpbmVyIGZvciB0YXNrIG9wZXJhdGlvbnMgKi9cXG5cXG4udGFza3NfX3ZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWluZm8tYmFyLWhlaWdodCkpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qIEFkZCB0YXNrIGJ1dHRvbiAqL1xcblxcbi50YXNrc19fYWRkLXRhc2stYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtdGFzay1idG4pO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50YXNrc19fYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC10YXNrLWJ0bi1ob3Zlcik7XFxufVxcblxcbi50YXNrc19fYWRkLXRhc2staWNvbiB7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLnRhc2tzX19hZGQtdGFzay10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLyogVGFzayBsaXN0IGFuZCBpdGVtcyAqL1xcblxcbi50YXNrc19fbGlzdCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrc19faXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmciBhdXRvIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWl0ZW0tYmcpO1xcbiAgd2lkdGg6IG1pbigxMDAlLCA4MDBweCk7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAjYzJjMmMyO1xcbn1cXG5cXG4udGFza3NfX2l0ZW06aG92ZXIge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigxNDcsIDE0NywgMjU1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tzX19uby10YXNrIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWl0ZW0tYmcpO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4vKiBJdGVtIGNhcmQgc3R5bGluZyAqL1xcblxcbi5pdGVtX190aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1heC13aWR0aDogNDBjaDtcXG59XFxuXFxuLml0ZW1fX2RhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5pdGVtX19kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGNvbG9yOiByZ2IoNTQsIDU0LCA1NCk7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIGh5cGhlbnM6IGF1dG87XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG5cXG4uaXRlbV9fY2xvc2UtYnRuIHtcXG4gIGdyaWQtY29sdW1uOiA0IC8gNTtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5pdGVtX19jbG9zZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG59XFxuXFxuLml0ZW1fX3RhYiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDM7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5pdGVtX190YWJfcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc1LCA3NSk7XFxufVxcblxcbi5pdGVtX190YWJfeWVsbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI1NSwgNDQpO1xcbn1cXG5cXG4uaXRlbV9fdGFiX2dyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NiwgMjU1LCA0NCk7XFxufVxcblxcbi8qIE5ldyB0YXNrIGlucHV0cyAqL1xcblxcbi5uZXctdGFza19faW5wdXRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgZ2FwOiA1cHg7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4ubmV3LXRhc2tfX3RpdGxlIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLm5ldy10YXNrX190aXRsZV9pbnZhbGlkIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi5uZXctdGFza19fZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ubmV3LXRhc2tfX2RhdGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubmV3LXRhc2tfX3ByaW9yaXR5IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5ldy10YXNrX19hY2NlcHQtYnRuIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC10YXNrLWJ0bik7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uZXctdGFza19fYWNjZXB0LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtdGFzay1idG4taG92ZXIpO1xcbn1cXG5cXG4ubmV3LXRhc2tfX2NhbmNlbC1idG4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWJ0bik7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uZXctdGFza19fY2FuY2VsLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW5jZWwtYnRuLWhvdmVyKTtcXG59XFxuXFxuLyogVXNlZCB0byBoaWRlIGVsZW1lbnRzICovXFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90YXNrcy90YXNrcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsK0RBQW9FO0FBQ3RFOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsb0NBQW9DO0VBQ3BDLHNCQUFzQjs7RUFFdEIsd0JBQXdCO0FBQzFCOztBQUVBLHdEQUF3RDs7QUFFeEQ7RUFDRSxXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLDBCQUEwQjtBQUM1Qjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix3Q0FBd0M7RUFDeEMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSx5Q0FBeUM7O0FBRXpDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYiw0Q0FBNEM7RUFDNUMsY0FBYztBQUNoQjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSx3QkFBd0I7O0FBRXhCO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtCQUFrQjtBQUNwQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQW9EO0VBQ3BELHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixRQUFRO0VBQ1Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQSwwQkFBMEI7O0FBRTFCO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG9SZWd1bGFyJztcXG4gIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXByb2plY3QtaW5mby1iZzogI2I3YjBmZjtcXG4gIC0tdGFza3MtYmc6ICNkOWQ5ZDk7XFxuICAtLXRhc2staXRlbS1iZzogI2VlZWVlZTtcXG4gIC0tYWRkLXRhc2stYnRuOiAjOTFlYzM2O1xcbiAgLS1hZGQtdGFzay1idG4taG92ZXI6ICM4NWRhMzE7XFxuICAtLWNhbmNlbC1idG46IHJnYigyMjMsIDYwLCA2MCk7XFxuICAtLWNhbmNlbC1idG4taG92ZXI6IHJnYigyMDYsIDU0LCA1NCk7XFxuICAtLWJvcmRlci1ncmF5OiAjYWNhY2FjO1xcblxcbiAgLS1pbmZvLWJhci1oZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4vKiBQYXJlbnQgY29udGFpbmVyIGZvciB0YXNrcyBhbmQgY3VycmVudCBwcm9qZWN0IGluZm8gKi9cXG5cXG4udGFza3Mge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrcy1iZyk7XFxuICBmb250LWZhbWlseTogUm9ib3RvUmVndWxhcjtcXG59XFxuXFxuLyogUHJvamVjdCBpbmZvICovXFxuXFxuLnRhc2tzX19wcm9qZWN0LWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiB2YXIoLS1pbmZvLWJhci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1pbmZvLWJnKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4udGFza3NfX3Byb2plY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG4vKiBQYXJlbnQgY29udGFpbmVyIGZvciB0YXNrIG9wZXJhdGlvbnMgKi9cXG5cXG4udGFza3NfX3ZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLWluZm8tYmFyLWhlaWdodCkpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qIEFkZCB0YXNrIGJ1dHRvbiAqL1xcblxcbi50YXNrc19fYWRkLXRhc2stYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtdGFzay1idG4pO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi50YXNrc19fYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC10YXNrLWJ0bi1ob3Zlcik7XFxufVxcblxcbi50YXNrc19fYWRkLXRhc2staWNvbiB7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLnRhc2tzX19hZGQtdGFzay10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLyogVGFzayBsaXN0IGFuZCBpdGVtcyAqL1xcblxcbi50YXNrc19fbGlzdCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrc19faXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDFmciBhdXRvIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWl0ZW0tYmcpO1xcbiAgd2lkdGg6IG1pbigxMDAlLCA4MDBweCk7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAjYzJjMmMyO1xcbn1cXG5cXG4udGFza3NfX2l0ZW06aG92ZXIge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigxNDcsIDE0NywgMjU1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tzX19uby10YXNrIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLWl0ZW0tYmcpO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4vKiBJdGVtIGNhcmQgc3R5bGluZyAqL1xcblxcbi5pdGVtX190aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1heC13aWR0aDogNDBjaDtcXG59XFxuXFxuLml0ZW1fX2RhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5pdGVtX19kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGNvbG9yOiByZ2IoNTQsIDU0LCA1NCk7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIGh5cGhlbnM6IGF1dG87XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG5cXG4uaXRlbV9fY2xvc2UtYnRuIHtcXG4gIGdyaWQtY29sdW1uOiA0IC8gNTtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvY2xvc2Uuc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5pdGVtX19jbG9zZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG59XFxuXFxuLml0ZW1fX3RhYiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDM7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5pdGVtX190YWJfcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc1LCA3NSk7XFxufVxcblxcbi5pdGVtX190YWJfeWVsbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDI1NSwgNDQpO1xcbn1cXG5cXG4uaXRlbV9fdGFiX2dyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NiwgMjU1LCA0NCk7XFxufVxcblxcbi8qIE5ldyB0YXNrIGlucHV0cyAqL1xcblxcbi5uZXctdGFza19faW5wdXRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgZ2FwOiA1cHg7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4ubmV3LXRhc2tfX3RpdGxlIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLm5ldy10YXNrX190aXRsZV9pbnZhbGlkIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbi5uZXctdGFza19fZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ubmV3LXRhc2tfX2RhdGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubmV3LXRhc2tfX3ByaW9yaXR5IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5ldy10YXNrX19hY2NlcHQtYnRuIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC10YXNrLWJ0bik7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uZXctdGFza19fYWNjZXB0LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtdGFzay1idG4taG92ZXIpO1xcbn1cXG5cXG4ubmV3LXRhc2tfX2NhbmNlbC1idG4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWJ0bik7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uZXctdGFza19fY2FuY2VsLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW5jZWwtYnRuLWhvdmVyKTtcXG59XFxuXFxuLyogVXNlZCB0byBoaWRlIGVsZW1lbnRzICovXFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9wbHVzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCIgLz5cXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxuICAgIDx0aXRsZT5Ub2RvIEFwcDwvdGl0bGU+XFxuICA8L2hlYWQ+XFxuICA8Ym9keT5cXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdHNcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3RzX190aXRsZS1ncm91cFxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwicHJvamVjdHNfX21lbnUtdGl0bGVcXFwiPlByb2plY3RzPC9zcGFuPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdHNfX21lbnUtYnRuIHByb2plY3RzX19tZW51LWJ0bl9vcGVuXFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0c19fbmV3LWl0ZW1cXFwiPlxcbiAgICAgICAgPGlucHV0XFxuICAgICAgICAgIGNsYXNzPVxcXCJwcm9qZWN0c19fbmV3LWl0ZW0taW5wdXRcXFwiXFxuICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJOZXcgUHJvamVjdFxcXCJcXG4gICAgICAgICAgbWF4bGVuZ3RoPVxcXCIzMFxcXCJcXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiXFxuICAgICAgICAvPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdHNfX2FkZC1idG5cXFwiPjwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDx1bCBjbGFzcz1cXFwicHJvamVjdHNfX2xpc3RcXFwiPjwvdWw+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YXNrc1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGFza3NfX3Byb2plY3QtaW5mb1xcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFza3NfX3Byb2plY3QtdGl0bGVcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJ0YXNrc19fcHJvamVjdC1kZXNjcmlwXFxcIj48L3A+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGFza3NfX3ZpZXdcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwidGFza3NfX2FkZC10YXNrLWJ0blxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cXG4gICAgICAgICAgPGltZyBjbGFzcz1cXFwidGFza3NfX2FkZC10YXNrLWljb25cXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIC8+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0YXNrc19fYWRkLXRhc2stdGV4dFxcXCI+TmV3IFRhc2s8L3NwYW4+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhc2tzX19saXN0XFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2JvZHk+XFxuPC9odG1sPlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0cy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza3MuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3Byb2plY3RzLmNzcyc7XG5pbXBvcnQgKiBhcyB0YXNrcyBmcm9tICcuLi90YXNrcy90YXNrcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi8uLi9tb2RlbHMvUHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuLi8uLi9tb2RlbHMvVGFzayc7XG5cbmNvbnN0IHN0YXRlID0ge1xuICBwcm9qQXJyOiBbUHJvamVjdCgpXSwgLy8gU3RvcmVzIGFsbCBwcm9qZWN0cyBzdGFydGluZyB3aXRoIHRoZSBkZWZhdWx0XG4gIGN1cnJlbnRQcm9qOiAwLCAvLyBDdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdCBieSBpbmRleFxufTtcblxuLy8gQ29tbW9uIGVsZW1lbnRzXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzX19tZW51LWJ0bicpO1xuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbmNvbnN0IG1lbnVHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fdGl0bGUtZ3JvdXAnKTtcbmNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fbWVudS10aXRsZScpO1xuY29uc3QgcHJvamVjdHNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fbmV3LWl0ZW0nKTtcbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fbGlzdCcpO1xuY29uc3QgcHJvamVjdEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NfX3Byb2plY3QtaW5mbycpO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fYWRkLWJ0bicpO1xuXG4vLyBUZW1wIGZvciB0ZXN0aW5nXG5zdGF0ZS5wcm9qQXJyW3N0YXRlLmN1cnJlbnRQcm9qXS5hZGRUYXNrKFxuICBUYXNrKCdUZXN0IFRpdGxlJywgJ1Rlc3QgRGVzY3JpcHRpb24nLCAnMjAyMi0wOS0yMicsIDEpXG4pO1xuXG4vKipcbiAqIERpc3BsYXlzIGFsbCBleGlzdGluZyBwcm9qZWN0cyBpbiB0aGUgc2lkZWJhci5cbiAqL1xuY29uc3QgZGlzcGxheVByb2pMaXN0ID0gKCkgPT4ge1xuICB3aGlsZSAocHJvamVjdHNMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICBwcm9qZWN0c0xpc3QucmVtb3ZlQ2hpbGQocHJvamVjdHNMaXN0Lmxhc3RDaGlsZCk7XG4gIH1cblxuICAvLyBBZGRzIGFsbCBleGlzdGluZyBwcm9qZWN0cyB0byB0aGUgc2lkZWJhclxuICBzdGF0ZS5wcm9qQXJyLmZvckVhY2goKHAsIGkpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdHNfX2l0ZW0nKTtcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpKTtcblxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBzZWxlY3Rpb25zXG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgZGF0YUluZGV4ID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XG4gICAgICBzdGF0ZS5jdXJyZW50UHJvaiA9IGRhdGFJbmRleDtcbiAgICAgIGRpc3BsYXlQcm9qTGlzdCgpO1xuICAgICAgdGFza3MudXBkYXRlVGFza3Moc3RhdGUpO1xuICAgIH0pO1xuXG4gICAgLy8gSGlnaGxpZ2h0IHNlbGVjdGVkIHByb2plY3RcbiAgICBpZiAoc3RhdGUuY3VycmVudFByb2ogPT09IGkpIHtcbiAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzX19pdGVtX3NlbGVjdGVkJyk7XG4gICAgfVxuXG4gICAgLy8gU2V0cyBwcm9qZWN0IHRpdGxlXG4gICAgY29uc3QgbGlzdEl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBsaXN0SXRlbVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzX19pdGVtLXRpdGxlJyk7XG4gICAgbGlzdEl0ZW1UaXRsZS50ZXh0Q29udGVudCA9IHAuZ2V0VGl0bGUoKTtcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0SXRlbVRpdGxlKTtcblxuICAgIC8vIFNob3dzIHByb2plY3QgZGVsZXRlIGJ1dHRvbiBpZiBtb3JlIHRoYW4gb25lIHByb2plY3RcbiAgICBpZiAoc3RhdGUucHJvakFyci5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c19fZGVsZXRlLWJ0bicpO1xuICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgZGF0YUluZGV4ID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XG4gICAgICAgIHN0YXRlLnByb2pBcnIuc3BsaWNlKGRhdGFJbmRleCwgMSk7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRQcm9qID0gMDtcbiAgICAgICAgZGlzcGxheVByb2pMaXN0KCk7XG4gICAgICAgIHRhc2tzLnVwZGF0ZVRhc2tzKHN0YXRlKTtcbiAgICAgIH0pO1xuICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcbn07XG5cbi8qKlxuICogRXZlbnQgbGlzdGVuZXIgZm9yIGFkZGluZyBuZXcgcHJvamVjdHMuXG4gKi9cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5wcm9qZWN0c19fbmV3LWl0ZW0taW5wdXQnXG4gICkudmFsdWU7XG5cbiAgaWYgKG5ld1Byb2plY3RUaXRsZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c19fbmV3LWl0ZW0taW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSwgJ05vIGRlc2NyaXB0aW9uLicpO1xuICAgIHN0YXRlLnByb2pBcnIucHVzaChuZXdQcm9qZWN0KTtcbiAgICBzdGF0ZS5jdXJyZW50UHJvaiA9IHN0YXRlLnByb2pBcnIubGVuZ3RoIC0gMTtcbiAgICBkaXNwbGF5UHJvakxpc3QoKTtcbiAgICB0YXNrcy51cGRhdGVUYXNrcyhzdGF0ZSk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIEV2ZW50IGxpc3RlbmVyIGZvciB0aGUgbWVudSBidXR0b24gKHNob3cvaGlkZSBwcm9qZWN0cykuXG4gKi9cbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChtZW51QnRuLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdHNfX21lbnUtYnRuX29wZW4nKSkge1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlcGxhY2UoXG4gICAgICAncHJvamVjdHNfX21lbnUtYnRuX29wZW4nLFxuICAgICAgJ3Byb2plY3RzX19tZW51LWJ0bl9jbG9zZWQnXG4gICAgKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c19jbG9zZWQnKTtcbiAgICBwcm9qZWN0SW5mby5zdHlsZS5wYWRkaW5nID0gJzIwcHggMjBweCAyMHB4IDg1cHgnO1xuICAgIG1lbnVHcm91cC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c19fdGl0bGUtZ3JvdXBfY2xvc2VkJyk7XG4gICAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHByb2plY3RzSW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9IGVsc2Uge1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlcGxhY2UoXG4gICAgICAncHJvamVjdHNfX21lbnUtYnRuX2Nsb3NlZCcsXG4gICAgICAncHJvamVjdHNfX21lbnUtYnRuX29wZW4nXG4gICAgKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0c19jbG9zZWQnKTtcbiAgICBwcm9qZWN0SW5mby5zdHlsZS5wYWRkaW5nID0gJzIwcHgnO1xuICAgIG1lbnVHcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdwcm9qZWN0c19fdGl0bGUtZ3JvdXBfY2xvc2VkJyk7XG4gICAgbWVudVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHByb2plY3RzSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9XG59KTtcblxuLy8gSW5pdGlhbGl6ZSB2aWV3c1xuZGlzcGxheVByb2pMaXN0KCk7XG50YXNrcy51cGRhdGVUYXNrcyhzdGF0ZSk7XG4iLCJpbXBvcnQgJy4vdGFza3MuY3NzJztcbmltcG9ydCBUYXNrIGZyb20gJy4uLy4uL21vZGVscy9UYXNrJztcblxubGV0IHN0YXRlID0gbnVsbDtcblxuLyoqXG4gKiBEaXNwbGF5cyBwcm9qZWN0IGluZm8gZm9yIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgcHJvamVjdC5cbiAqL1xuY29uc3QgZGlzcGxheVByb2plY3RJbmZvID0gKCkgPT4ge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHN0YXRlLnByb2pBcnJbc3RhdGUuY3VycmVudFByb2pdO1xuXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fcHJvamVjdC10aXRsZScpO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC5nZXRUaXRsZSgpO1xuXG4gIGNvbnN0IHByb2plY3REZXNjcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX19wcm9qZWN0LWRlc2NyaXAnKTtcbiAgcHJvamVjdERlc2NyaXAudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC5nZXREZXNjcmlwdGlvbigpO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5cyBhbGwgdGFza3MgZm9yIGEgcHJvamVjdCBhbmQgc2hvdyBwcm9qZWN0IGluZm8uXG4gKi9cbmNvbnN0IGRpc3BsYXlUYXNrTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBzdGF0ZS5wcm9qQXJyW3N0YXRlLmN1cnJlbnRQcm9qXTtcblxuICAvLyBDbGVhcnMgYWxsIHRhc2tzIGZyb20gdGhlIGRpc3BsYXlcbiAgY29uc3QgdGFza3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX19saXN0Jyk7XG4gIHdoaWxlICh0YXNrc0xpc3QuZmlyc3RDaGlsZCkge1xuICAgIHRhc2tzTGlzdC5yZW1vdmVDaGlsZCh0YXNrc0xpc3QubGFzdENoaWxkKTtcbiAgfVxuXG4gIC8vIFJlcG9wdWxhdGVzIHRoZSB0YXNrIGxpc3RcbiAgbGV0IGl0ZW07XG4gIGlmIChjdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmxlbmd0aCA9PT0gMCkge1xuICAgIGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzX19uby10YXNrJyk7XG4gICAgaXRlbS50ZXh0Q29udGVudCA9ICdZb3UgaGF2ZSBubyB0YXNrcy4nO1xuICAgIHRhc2tzTGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50UHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzX19pdGVtJyk7XG5cbiAgICAgIC8vIFNldHMgcHJpb3JpdHkgY29sb3JcbiAgICAgIGNvbnN0IHRhc2tQcmlvcml0eVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza1ByaW9yaXR5VGFiLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX3RhYicpO1xuICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gTnVtYmVyKHRhc2suZ2V0UHJpb3JpdHkoKSk7XG4gICAgICBpZiAodGFza1ByaW9yaXR5ID09PSAxKSB7XG4gICAgICAgIHRhc2tQcmlvcml0eVRhYi5jbGFzc0xpc3QuYWRkKCdpdGVtX190YWJfcmVkJyk7XG4gICAgICB9IGVsc2UgaWYgKHRhc2tQcmlvcml0eSA9PT0gMikge1xuICAgICAgICB0YXNrUHJpb3JpdHlUYWIuY2xhc3NMaXN0LmFkZCgnaXRlbV9fdGFiX3llbGxvdycpO1xuICAgICAgfSBlbHNlIGlmICh0YXNrUHJpb3JpdHkgPT09IDMpIHtcbiAgICAgICAgdGFza1ByaW9yaXR5VGFiLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX3RhYl9ncmVlbicpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXRzIHRpdGxlXG4gICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbV9fdGl0bGUnKTtcbiAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0VGl0bGUoKTtcblxuICAgICAgLy8gU2V0cyBkdWUgZGF0ZVxuICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCdpdGVtX19kYXRlJyk7XG4gICAgICBjb25zdCBkdWVEYXRlID0gdGFzay5nZXREdWVEYXRlKCk7XG4gICAgICBpZiAoZHVlRGF0ZSkge1xuICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7ZHVlRGF0ZX1gO1xuICAgICAgfVxuXG4gICAgICAvLyBUYXNrIGRlbGV0ZSBidXR0b25cbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX2Nsb3NlLWJ0bicpO1xuICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcbiAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGkgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgIHN0YXRlLnByb2pBcnJbc3RhdGUuY3VycmVudFByb2pdLnJlbW92ZVRhc2soaSk7XG4gICAgICAgIGRpc3BsYXlUYXNrTGlzdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIERpc3BsYXlzIGRlc2NyaXB0aW9uIHdoZW4gYSB0YXNrIGlzIGNsaWNrZWRcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJy5pdGVtX19kZXNjcmlwdGlvbidcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRhc2tEZXNjcmlwdGlvbikge1xuICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2l0ZW1fX2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICAgIGUuY3VycmVudFRhcmdldC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaXRlbS5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlUYWIpO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICB0YXNrc0xpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgdGhlIHRhc2sgdmlldy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzIEFwcCBzdGF0ZS5cbiAqL1xuY29uc3QgdXBkYXRlVGFza3MgPSAocykgPT4ge1xuICBzdGF0ZSA9IHM7XG4gIGRpc3BsYXlQcm9qZWN0SW5mbygpO1xuICBkaXNwbGF5VGFza0xpc3QoKTtcbn07XG5cbi8qKlxuICogQ2xvc2VzIHRoZSBpbnB1dCBmb3JtIGZvciBuZXcgdGFza3MuXG4gKi9cbmNvbnN0IGNsb3NlTmV3VGFzayA9ICgpID0+IHtcbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fYWRkLXRhc2stYnRuJyk7XG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgY29uc3QgbmV3VGFza0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFza19faW5wdXRzJyk7XG4gIG5ld1Rhc2tJbnB1dHMucmVtb3ZlKCk7XG59O1xuXG4vKipcbiAqIEFkZHMgdGhlIG5ldyB0YXNrIHRvIHRoZSBjdXJyZW50IHByb2plY3QuXG4gKi9cbmNvbnN0IGFkZE5ld1Rhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrX190aXRsZScpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrX19kZXNjcmlwdGlvbicpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrX19kYXRlJykudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrX19wcmlvcml0eScpLnZhbHVlO1xuXG4gIGlmICghdGl0bGUpIHtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrX190aXRsZScpO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2tfX3RpdGxlX2ludmFsaWQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5wcm9qQXJyW3N0YXRlLmN1cnJlbnRQcm9qXS5hZGRUYXNrKFxuICAgIFRhc2sodGl0bGUsIGRlc2NyaXAsIGRhdGUsIHByaW9yaXR5KVxuICApO1xuICBjbG9zZU5ld1Rhc2soKTtcbiAgZGlzcGxheVRhc2tMaXN0KCk7XG59O1xuXG4vKipcbiAqIFNob3dzIGEgY2FyZCB3aGVyZSB0aGUgdXNlciBjYW4gZW50ZXIgaW5mb3JtYXRpb24gYWJvdXQgYSBuZXcgdGFzay5cbiAqL1xuY29uc3QgZGlzcGxheU5ld1Rhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NfX2FkZC10YXNrLWJ0bicpO1xuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gIC8vIFBhcmVudCBhbmQgcmVmZXJlbmNlIG5vZGVzXG4gIGNvbnN0IHRhc2tWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX192aWV3Jyk7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzX19saXN0Jyk7XG5cbiAgLy8gUGFyZW50IGNvbnRhaW5lciBmb3IgdGhlIHRhc2sgb3B0aW9uc1xuICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2tfX2lucHV0cycpO1xuXG4gIC8vIFRpdGxlIGlucHV0XG4gIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5ld1Rhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCduZXctdGFza19fdGl0bGUnKTtcbiAgbmV3VGFza1RpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIG5ld1Rhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIHRpdGxlJyk7XG4gIG5ld1Rhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICczMCcpO1xuXG4gIC8vIERlc2NyaXB0aW9uIGlucHV0XG4gIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5ld1Rhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCduZXctdGFza19fZGVzY3JpcHRpb24nKTtcbiAgbmV3VGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIG5ld1Rhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIGRlc2NyaXB0aW9uJyk7XG4gIG5ld1Rhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcxMDAnKTtcblxuICAvLyBEdWUgZGF0ZSBpbnB1dFxuICBjb25zdCBuZXdUYXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5ld1Rhc2tEYXRlLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrX19kYXRlJyk7XG4gIG5ld1Rhc2tEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG5cbiAgLy8gUHJpb3JpdHkgaW5wdXRcbiAgY29uc3QgbmV3VGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIG5ld1Rhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCduZXctdGFza19fcHJpb3JpdHknKTtcbiAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24udGV4dENvbnRlbnQgPSAnU2VsZWN0IGEgcHJpb3JpdHkgbGV2ZWwnO1xuICBvcHRpb24udmFsdWUgPSAwO1xuICBuZXdUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSArPSAxKSB7XG4gICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gYCR7aX1gO1xuICAgIG9wdGlvbi52YWx1ZSA9IGk7XG4gICAgbmV3VGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH1cblxuICAvLyBDb25maXJtYXRpb24gYnV0dG9uXG4gIGNvbnN0IGFjY2VwdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhY2NlcHRCdG4uY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2tfX2FjY2VwdC1idG4nKTtcbiAgYWNjZXB0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgYWNjZXB0QnRuLnRleHRDb250ZW50ID0gJ0FjY2VwdCc7XG4gIGFjY2VwdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld1Rhc2spO1xuXG4gIC8vIENhbmNlbCBidXR0b25cbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCduZXctdGFza19fY2FuY2VsLWJ0bicpO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VOZXdUYXNrKTtcblxuICBuZXdUYXNrLmFwcGVuZENoaWxkKG5ld1Rhc2tUaXRsZSk7XG4gIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGFza0Rlc2NyaXB0aW9uKTtcbiAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrRGF0ZSk7XG4gIG5ld1Rhc2suYXBwZW5kQ2hpbGQobmV3VGFza1ByaW9yaXR5KTtcbiAgbmV3VGFzay5hcHBlbmRDaGlsZChhY2NlcHRCdG4pO1xuICBuZXdUYXNrLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgdGFza1ZpZXcuaW5zZXJ0QmVmb3JlKG5ld1Rhc2ssIHRhc2tMaXN0KTtcbn07XG5cbi8vIEV2ZW50IGxpc3RlbmVyc1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc19fYWRkLXRhc2stYnRuJyk7XG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU5ld1Rhc2spO1xuXG5leHBvcnQgeyB1cGRhdGVUYXNrcyB9O1xuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgcHJvamVjdCBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gdCBUaXRsZVxuICogQHBhcmFtIHtzdHJpbmd9IGQgRGVzY3JpcHRpb25cbiAqIEByZXR1cm5zIE9iamVjdCBjb250YWluaW5nIHB1YmxpYyBmdW5jdGlvbnNcbiAqL1xuY29uc3QgUHJvamVjdCA9ICh0LCBkKSA9PiB7XG4gIGxldCB0aXRsZSA9IHR5cGVvZiB0ID09PSAnc3RyaW5nJyA/IHQgOiAnRGVmYXVsdCc7XG4gIGxldCBkZXNjcmlwdGlvbiA9IHR5cGVvZiB0ID09PSAnc3RyaW5nJyA/IGQgOiAnVGhpcyBpcyB0aGUgZGVmYXVsdCBwcm9qZWN0Lic7XG4gIGNvbnN0IHRhc2tzID0gW107XG5cbiAgLy8gR2V0dGVyc1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IFsuLi50YXNrc107XG5cbiAgLy8gU2V0dGVyc1xuICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4gKHRpdGxlID0gbmV3VGl0bGUpO1xuICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4gKGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24pO1xuXG4gIC8vIEFkZHMgYSB0YXNrIG9iamVjdCB0byB0aGUgbGlzdC5cbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrSXRlbSkgPT4gdGFza3MucHVzaCh0YXNrSXRlbSk7XG5cbiAgLy8gUmVtb3ZlcyBhIHRhc2sgb2JqZWN0IGZyb20gdGhlIGxpc3QuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0VGFza3MsXG4gICAgc2V0VGl0bGUsXG4gICAgc2V0RGVzY3JpcHRpb24sXG4gICAgYWRkVGFzayxcbiAgICByZW1vdmVUYXNrLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsIi8qKlxuICogUmVwcmVzZW50cyBhIHRvZG8gb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IHQgVGl0bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBkIERlc2NyaXB0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gZGQgRHVlIGRhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBwIFByaW9yaXR5XG4gKiBAcmV0dXJucyBPYmplY3QgY29udGFpbmluZyBwdWJsaWMgZnVuY3Rpb25zXG4gKi9cbmNvbnN0IFRhc2sgPSAodCwgZCwgZGQsIHApID0+IHtcbiAgbGV0IHRpdGxlID0gdDtcbiAgbGV0IGRlc2NyaXB0aW9uID0gZDtcbiAgbGV0IGR1ZURhdGUgPSBkZDtcbiAgbGV0IHByaW9yaXR5ID0gcDtcblxuICAvLyBHZXR0ZXJzXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuICBjb25zdCBnZXRJbmZvID0gKCkgPT5cbiAgICBgVGl0bGU6ICR7dGl0bGV9XFxuYCArXG4gICAgYERlc2NyaXB0aW9uOiAke2Rlc2NyaXB0aW9ufVxcbmAgK1xuICAgIGBEdWUgZGF0ZTogJHtkdWVEYXRlfVxcbmAgK1xuICAgIGBQcmlvcml0eTogJHtwcmlvcml0eX1cXG5gO1xuXG4gIC8vIFNldHRlcnNcbiAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+ICh0aXRsZSA9IG5ld1RpdGxlKTtcbiAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IChkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uKTtcbiAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEdWVEYXRlKSA9PiAoZHVlRGF0ZSA9IG5ld0R1ZURhdGUpO1xuICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4gKHByaW9yaXR5ID0gbmV3UHJpb3JpdHkpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0RHVlRGF0ZSxcbiAgICBnZXRQcmlvcml0eSxcbiAgICBnZXRJbmZvLFxuICAgIHNldFRpdGxlLFxuICAgIHNldERlc2NyaXB0aW9uLFxuICAgIHNldER1ZURhdGUsXG4gICAgc2V0UHJpb3JpdHksXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vaW5kZXguaHRtbCc7XG5pbXBvcnQgJy4vcmVzZXQuY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9