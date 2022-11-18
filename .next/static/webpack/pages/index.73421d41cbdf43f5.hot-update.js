"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MusicAndVideo/MusicAndVideo.js":
/*!***************************************************!*\
  !*** ./components/MusicAndVideo/MusicAndVideo.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MusicAndVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Music__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Music */ \"./components/Music/index.js\");\n/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Video */ \"./components/Video/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var get_youtube_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! get-youtube-id */ \"./node_modules/get-youtube-id/index.js\");\n/* harmony import */ var get_youtube_id__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(get_youtube_id__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// const components = {\n//   types: {\n//     youtube: ({node}) => {\n//     const {url} = node\n//     const id = getYouTubeId(url)\n//     {console.log(id)}\n//     return (<YouTube videoId={id}/>)\n//     }\n//   }\n// }\nfunction MusicAndVideo(videoPreLink) {\n    _s();\n    console.log(videoPreLink);\n    var getUrl = videoPreLink.videoPreLink.heroLink[0].url;\n    var id = get_youtube_id__WEBPACK_IMPORTED_MODULE_5___default()(getUrl);\n    var url = \"https://www.youtube.com/embed/\".concat(id);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var video = document.querySelector(\".vid\");\n        var playState = null;\n        var observer = new IntersectionObserver(function(entries) {\n            entries.forEach(function(entry) {\n                if (!entry.isIntersecting) {\n                    video.pause();\n                    playState = false;\n                } else {\n                    video.play();\n                    playState = true;\n                }\n            });\n        }, {});\n        observer.observe(video);\n        var onVisibilityChange = function() {\n            if (document.hidden || !playState) {\n                video.pause();\n            } else {\n                video.play();\n            }\n        };\n        document.addEventListener(\"visibilitychange\", onVisibilityChange);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                className: \"vid sticky top-0 w-screen h-screen\",\n                src: \"https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/smoke-transition-bg.mp4\",\n                muted: true\n            }, void 0, false, {\n                fileName: \"/Users/evanburton/Desktop/_WP/Projects/Stak_Site/Stak_app_folder/components/MusicAndVideo/MusicAndVideo.js\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"parallax-container flex flex-col items-center justify-center w-full h-full bg-green-200/0 z-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"z-50 flex justify-center mb-20 w-screen\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                            className: \"w-3/4 h-screen\",\n                            //  width='1032' \n                            //  height=\"630\" \n                            src: url,\n                            title: \"YouTube video player\",\n                            allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                            modestbranding: \"1\",\n                            frameBorder: \"0\",\n                            color: \"black\",\n                            rel: \"1\",\n                            theme: \"dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/evanburton/Desktop/_WP/Projects/Stak_Site/Stak_app_folder/components/MusicAndVideo/MusicAndVideo.js\",\n                            lineNumber: 66,\n                            columnNumber: 8\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/evanburton/Desktop/_WP/Projects/Stak_Site/Stak_app_folder/components/MusicAndVideo/MusicAndVideo.js\",\n                        lineNumber: 65,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-container px-12 mt-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-5\",\n                        children: videoPreLink.videoPreLink.vidLink.map(function(video) {\n                            var getVid = video.url;\n                            var id2 = get_youtube_id__WEBPACK_IMPORTED_MODULE_5___default()(getVid);\n                            var url2 = \"https://www.youtube.com/embed/\".concat(id2);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                className: \"z-50\",\n                                src: url2,\n                                width: 500,\n                                height: 500,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/evanburton/Desktop/_WP/Projects/Stak_Site/Stak_app_folder/components/MusicAndVideo/MusicAndVideo.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/evanburton/Desktop/_WP/Projects/Stak_Site/Stak_app_folder/components/MusicAndVideo/MusicAndVideo.js\",\n                        lineNumber: 80,\n                        columnNumber: 8\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/evanburton/Desktop/_WP/Projects/Stak_Site/Stak_app_folder/components/MusicAndVideo/MusicAndVideo.js\",\n                lineNumber: 64,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true);\n} //encodeURIComponent\n // my goal is to use an array of music links like features is currently used\n // my goal is to use an array of YT links like features is currently used \n // my goal is to have a hero video centered \n_s(MusicAndVideo, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MusicAndVideo;\nvar _c;\n$RefreshReg$(_c, \"MusicAndVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL011c2ljQW5kVmlkZW8vTXVzaWNBbmRWaWRlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDQTtBQUNFO0FBQ0c7QUFDUTtBQUNOO0FBQ2dCO0FBQ1Y7QUFFekMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYiw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLG1DQUFtQztBQUNuQyx3QkFBd0I7QUFDeEIsdUNBQXVDO0FBRXZDLFFBQVE7QUFDUixNQUFNO0FBQ04sSUFBSTtBQUdXLFNBQVNRLGFBQWEsQ0FBQ0MsWUFBWSxFQUFFOztJQUNsREMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFlBQVksQ0FBQztJQUN6QixJQUFNRyxNQUFNLEdBQUdILFlBQVksQ0FBQ0EsWUFBWSxDQUFDSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUc7SUFDeEQsSUFBTUMsRUFBRSxHQUFHWCxxREFBWSxDQUFDUSxNQUFNLENBQUM7SUFDL0IsSUFBTUUsR0FBRyxHQUFHLGdDQUErQixDQUFLLE9BQUhDLEVBQUUsQ0FBRTtJQUVqRFosZ0RBQVMsQ0FBQyxXQUFJO1FBRWhCLElBQU1hLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUlDLFNBQVMsR0FBRyxJQUFJO1FBRXBCLElBQU1DLFFBQVEsR0FBRyxJQUFJQyxvQkFBb0IsQ0FBQyxTQUFDQyxPQUFPLEVBQUs7WUFDckRBLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDLEtBQUssRUFBSztnQkFDekIsSUFBSSxDQUFDQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtvQkFDekJULEtBQUssQ0FBQ1UsS0FBSyxFQUFFLENBQUM7b0JBQ2RQLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLE9BQU87b0JBQ0xILEtBQUssQ0FBQ1csSUFBSSxFQUFFLENBQUM7b0JBQ2JSLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ25CLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFTkMsUUFBUSxDQUFDUSxPQUFPLENBQUNaLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQU1hLGtCQUFrQixHQUFHLFdBQU07WUFDL0IsSUFBSVosUUFBUSxDQUFDYSxNQUFNLElBQUksQ0FBQ1gsU0FBUyxFQUFFO2dCQUNqQ0gsS0FBSyxDQUFDVSxLQUFLLEVBQUUsQ0FBQztZQUNoQixPQUFPO2dCQUNMVixLQUFLLENBQUNXLElBQUksRUFBRSxDQUFDO1lBQ2YsQ0FBQztRQUNILENBQUM7UUFFRFYsUUFBUSxDQUFDYyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRUYsa0JBQWtCLENBQUMsQ0FBQztJQUM5RCxDQUFDLENBQUM7SUFFTixxQkFDSTs7MEJBRUEsOERBQUNiLE9BQUs7Z0JBQUNnQixTQUFTLEVBQUMsb0NBQW9DO2dCQUFDQyxHQUFHLEVBQUMsa0ZBQWtGO2dCQUFDQyxLQUFLOzs7OztvQkFBUzswQkFFeEosOERBQUNDLEtBQUc7Z0JBQUNILFNBQVMsRUFBQyxnR0FBZ0c7O2tDQUMvRyw4REFBQ0csS0FBRzt3QkFBQ0gsU0FBUyxFQUFDLHlDQUF5QztrQ0FDeEQsNEVBQUNJLFFBQU07NEJBQUNKLFNBQVMsRUFBQyxnQkFBZ0I7NEJBQ3ZDLGlCQUFpQjs0QkFDakIsaUJBQWlCOzRCQUNoQkMsR0FBRyxFQUFFbkIsR0FBRzs0QkFDUnVCLEtBQUssRUFBQyxzQkFBc0I7NEJBQzVCQyxLQUFLLEVBQUMsMEZBQTBGOzRCQUNoR0MsY0FBYyxFQUFDLEdBQUc7NEJBQ2xCQyxXQUFXLEVBQUMsR0FBRzs0QkFDZkMsS0FBSyxFQUFDLE9BQU87NEJBQ2JDLEdBQUcsRUFBQyxHQUFHOzRCQUNQQyxLQUFLLEVBQUMsTUFBTTs7Ozs7Z0NBQ1Y7Ozs7OzRCQUNPO2tDQUVMLDhEQUFDUixLQUFHO3dCQUFDSCxTQUFTLEVBQUMsc0dBQXNHO2tDQUVqSHZCLFlBQVksQ0FBQ0EsWUFBWSxDQUFDbUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUzdCLEtBQUssRUFBRTs0QkFDckQsSUFBTThCLE1BQU0sR0FBQzlCLEtBQUssQ0FBQ0YsR0FBRzs0QkFDdEIsSUFBTWlDLEdBQUcsR0FBRzNDLHFEQUFZLENBQUMwQyxNQUFNLENBQUM7NEJBQ2hDLElBQU1FLElBQUksR0FBRyxnQ0FBK0IsQ0FBTSxPQUFKRCxHQUFHLENBQUU7NEJBQ25ELHFCQUVBLDhEQUFDWCxRQUFNO2dDQUFDSixTQUFTLEVBQUMsTUFBTTtnQ0FDdEJDLEdBQUcsRUFBRWUsSUFBSTtnQ0FDVEMsS0FBSyxFQUFFLEdBQUc7Z0NBQ1ZDLE1BQU0sRUFBRSxHQUFHO2dDQUNYQyxHQUFHLEVBQUMsRUFBRTs7Ozs7b0NBQ04sQ0FFRDt3QkFDSCxDQUFDLENBQUM7Ozs7OzRCQUlHOzs7Ozs7b0JBQ0Q7O29CQUlQLENBRUY7QUFDTCxDQUFDLENBSUQsb0JBQW9CO0NBRXBCLDRFQUE0RTtDQUM1RSwwRUFBMEU7Q0FDMUUsNENBQTRDO0dBN0ZwQjNDLGFBQWE7QUFBYkEsS0FBQUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL011c2ljQW5kVmlkZW8vTXVzaWNBbmRWaWRlby5qcz80ODc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNdXNpYyBmcm9tICcuLi9NdXNpYydcbmltcG9ydCBWaWRlbyBmcm9tICcuLi9WaWRlbydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZ2V0WW91VHViZUlEIGZyb20gJ2dldC15b3V0dWJlLWlkJ1xuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSdcbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9ICBmcm9tICdAcG9ydGFibGV0ZXh0L3JlYWN0J1xuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSAnLi4vLi4vbGliL2NsaWVudCdcblxuLy8gY29uc3QgY29tcG9uZW50cyA9IHtcbi8vICAgdHlwZXM6IHtcbi8vICAgICB5b3V0dWJlOiAoe25vZGV9KSA9PiB7XG4vLyAgICAgY29uc3Qge3VybH0gPSBub2RlXG4vLyAgICAgY29uc3QgaWQgPSBnZXRZb3VUdWJlSWQodXJsKVxuLy8gICAgIHtjb25zb2xlLmxvZyhpZCl9XG4vLyAgICAgcmV0dXJuICg8WW91VHViZSB2aWRlb0lkPXtpZH0vPilcblxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE11c2ljQW5kVmlkZW8odmlkZW9QcmVMaW5rKSB7XG4gIGNvbnNvbGUubG9nKHZpZGVvUHJlTGluaylcbiAgY29uc3QgZ2V0VXJsID0gdmlkZW9QcmVMaW5rLnZpZGVvUHJlTGluay5oZXJvTGlua1swXS51cmxcbiAgY29uc3QgaWQgPSBnZXRZb3VUdWJlSUQoZ2V0VXJsKVxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtpZH1gXG4gIFxuICB1c2VFZmZlY3QoKCk9PntcbiAgIFxuY29uc3QgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZFwiKTtcbmxldCBwbGF5U3RhdGUgPSBudWxsO1xuXG5jb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgaWYgKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgdmlkZW8ucGF1c2UoKTtcbiAgICAgIHBsYXlTdGF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWRlby5wbGF5KCk7XG4gICAgICBwbGF5U3RhdGUgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG59LCB7fSk7XG5cbm9ic2VydmVyLm9ic2VydmUodmlkZW8pO1xuXG5jb25zdCBvblZpc2liaWxpdHlDaGFuZ2UgPSAoKSA9PiB7XG4gIGlmIChkb2N1bWVudC5oaWRkZW4gfHwgIXBsYXlTdGF0ZSkge1xuICAgIHZpZGVvLnBhdXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgdmlkZW8ucGxheSgpO1xuICB9XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBvblZpc2liaWxpdHlDaGFuZ2UpO1xuICAgIH0pXG4gXG5yZXR1cm4gKFxuICAgIDw+XG4gICBcbiAgICA8dmlkZW8gY2xhc3NOYW1lPVwidmlkIHN0aWNreSB0b3AtMCB3LXNjcmVlbiBoLXNjcmVlblwiIHNyYz1cImh0dHBzOi8vaWsuaW1hZ2VraXQuaW8vYTlsdGJ0eWRvL3N0YWstaW1hZ2VzL3N0YWsvaW1hZ2VzL3Ntb2tlLXRyYW5zaXRpb24tYmcubXA0XCIgbXV0ZWQ+PC92aWRlbz5cbiAgICBcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmFsbGF4LWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1mdWxsIGJnLWdyZWVuLTIwMC8wIHotMiBcIj4gXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIGZsZXgganVzdGlmeS1jZW50ZXIgbWItMjAgdy1zY3JlZW5cIj5cbiAgICAgICA8aWZyYW1lIGNsYXNzTmFtZT1cInctMy80IGgtc2NyZWVuXCJcbiAgLy8gIHdpZHRoPScxMDMyJyBcbiAgLy8gIGhlaWdodD1cIjYzMFwiIFxuICAgc3JjPXt1cmx9IFxuICAgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiICBcbiAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIFxuICAgbW9kZXN0YnJhbmRpbmc9XCIxXCJcbiAgIGZyYW1lQm9yZGVyPScwJ1xuICAgY29sb3I9XCJibGFja1wiXG4gICByZWw9XCIxXCJcbiAgIHRoZW1lPVwiZGFya1wiXG4gICAvPlxuICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRhaW5lciBweC0xMiBtdC0xMiBzbTpncmlkIHNtOmdyaWQtY29scy0yIHNtOmdhcC14LTYgc206Z2FwLXktMTIgc206c3BhY2UteS0wIGxnOmdyaWQtY29scy01XCI+XG4gICAgICAgIFxuICAgICAgICAgIHt2aWRlb1ByZUxpbmsudmlkZW9QcmVMaW5rLnZpZExpbmsubWFwKGZ1bmN0aW9uKHZpZGVvKSB7XG4gICAgICAgICAgICBjb25zdCBnZXRWaWQ9dmlkZW8udXJsXG4gICAgICAgICAgICBjb25zdCBpZDIgPSBnZXRZb3VUdWJlSUQoZ2V0VmlkKVxuICAgICAgICAgICAgY29uc3QgdXJsMiA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2lkMn1gXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICBcbiAgICAgICAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPVwiei01MFwiXG4gICAgICAgICAgICAgIHNyYz17dXJsMn1cbiAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgey8qIDxWaWRlby8+ICovfVxuICAgICAgICB7LyogPE11c2ljLz4gKi99XG4gICAgPC8+XG5cbiAgICApXG59XG5cblxuXG4vL2VuY29kZVVSSUNvbXBvbmVudFxuXG4vLyBteSBnb2FsIGlzIHRvIHVzZSBhbiBhcnJheSBvZiBtdXNpYyBsaW5rcyBsaWtlIGZlYXR1cmVzIGlzIGN1cnJlbnRseSB1c2VkXG4vLyBteSBnb2FsIGlzIHRvIHVzZSBhbiBhcnJheSBvZiBZVCBsaW5rcyBsaWtlIGZlYXR1cmVzIGlzIGN1cnJlbnRseSB1c2VkIFxuLy8gbXkgZ29hbCBpcyB0byBoYXZlIGEgaGVybyB2aWRlbyBjZW50ZXJlZCAiXSwibmFtZXMiOlsiTXVzaWMiLCJWaWRlbyIsIkltYWdlIiwidXNlRWZmZWN0IiwiZ2V0WW91VHViZUlEIiwiWW91VHViZSIsIlBvcnRhYmxlVGV4dCIsInVybEZvciIsIk11c2ljQW5kVmlkZW8iLCJ2aWRlb1ByZUxpbmsiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXJsIiwiaGVyb0xpbmsiLCJ1cmwiLCJpZCIsInZpZGVvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheVN0YXRlIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInBhdXNlIiwicGxheSIsIm9ic2VydmUiLCJvblZpc2liaWxpdHlDaGFuZ2UiLCJoaWRkZW4iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lIiwic3JjIiwibXV0ZWQiLCJkaXYiLCJpZnJhbWUiLCJ0aXRsZSIsImFsbG93IiwibW9kZXN0YnJhbmRpbmciLCJmcmFtZUJvcmRlciIsImNvbG9yIiwicmVsIiwidGhlbWUiLCJ2aWRMaW5rIiwibWFwIiwiZ2V0VmlkIiwiaWQyIiwidXJsMiIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MusicAndVideo/MusicAndVideo.js\n"));

/***/ })

});