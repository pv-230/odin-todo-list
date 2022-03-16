/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ \"./src/scripts/models.js\");\n\n\nconst todo = (0,_models__WEBPACK_IMPORTED_MODULE_0__.Todo)('Test', 'Test', '2022-03-25', 1);\nconsole.log(\n  `Title: ${todo.getTitle()}\\n` +\n    `Description: ${todo.getDescription()}\\n` +\n    `Due date: ${todo.getDueDate()}\\n` +\n    `Priority: ${todo.getPriorty()}\\n`\n);\n\nconst project = (0,_models__WEBPACK_IMPORTED_MODULE_0__.Project)();\nconsole.log(\n  `Title: ${project.getTitle()}\\n` +\n    `Description: ${project.getDescription()}\\n`\n);\n\nproject.addTodo(todo);\nproject.addTodo((0,_models__WEBPACK_IMPORTED_MODULE_0__.Todo)('2', '2', '2022-03-18', 2));\n\nproject.removeTodo(todo);\n\nproject.getTodos().forEach((td) => console.log(td.getTitle()));\n\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/models.js":
/*!*******************************!*\
  !*** ./src/scripts/models.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n/**\n * Represents a todo object.\n * @param {string} t\n * @param {string} d\n * @param {string} dd\n * @param {number} p\n * @returns Public API\n */\nconst Todo = (t, d, dd, p) => {\n  let title = t;\n  let description = d;\n  let dueDate = dd;\n  let priority = p;\n\n  const getTitle = () => title;\n  const getDescription = () => description;\n  const getDueDate = () => dueDate;\n  const getPriorty = () => priority;\n\n  const setTitle = (newTitle) => (title = newTitle);\n  const setDescription = (newDescription) => (description = newDescription);\n  const setDueDate = (newDueDate) => (dueDate = newDueDate);\n  const setPriority = (newPriority) => (priority = newPriority);\n\n  return {\n    getTitle,\n    getDescription,\n    getDueDate,\n    getPriorty,\n    setTitle,\n    setDescription,\n    setDueDate,\n    setPriority,\n  };\n};\n\n/**\n * Represents a project object.\n * @param {string} t\n * @param {string} d\n * @returns Public API\n */\nconst Project = (t, d) => {\n  let title = typeof t === 'string' ? t : 'Default';\n  let description = typeof t === 'string' ? d : 'This is the default project.';\n  const todos = [];\n\n  const getTitle = () => title;\n  const getDescription = () => description;\n  const getTodos = () => [...todos];\n\n  const setTitle = (newTitle) => (title = newTitle);\n  const setDescription = (newDescription) => (description = newDescription);\n\n  // Adds a todo object to the list.\n  const addTodo = (todoItem) => todos.push(todoItem);\n\n  // Removes a todo object from the list.\n  const removeTodo = (todoItem) => {\n    const tdIndex = todos.findIndex((td) => td === todoItem);\n\n    if (tdIndex >= 0) {\n      // Todo object was found in list\n      todos.splice(tdIndex, 1);\n    }\n  };\n\n  return {\n    getTitle,\n    getDescription,\n    getTodos,\n    setTitle,\n    setDescription,\n    addTodo,\n    removeTodo,\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/scripts/models.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;