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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MusicAndVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Music__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Music */ \"./components/Music/index.js\");\n/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Video */ \"./components/Video/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var get_youtube_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! get-youtube-id */ \"./node_modules/get-youtube-id/index.js\");\n/* harmony import */ var get_youtube_id__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(get_youtube_id__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// const components = {\n//   types: {\n//     youtube: ({node}) => {\n//     const {url} = node\n//     const id = getYouTubeId(url)\n//     {console.log(id)}\n//     return (<YouTube videoId={id}/>)\n//     }\n//   }\n// }\nfunction MusicAndVideo(videoPreLink) {\n    _s();\n    console.log(videoPreLink);\n    var getUrl = videoPreLink.videoPreLink.heroLink[0].url;\n    var id = get_youtube_id__WEBPACK_IMPORTED_MODULE_5___default()(getUrl);\n    var url = \"https://www.youtube.com/embed/\".concat(id);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var video = document.querySelector(\".vid\");\n        var playState = null;\n        var observer = new IntersectionObserver(function(entries) {\n            entries.forEach(function(entry) {\n                if (!entry.isIntersecting) {\n                    video.pause();\n                    playState = false;\n                } else {\n                    video.play();\n                    playState = true;\n                }\n            });\n        }, {});\n        observer.observe(video);\n        var onVisibilityChange = function() {\n            if (document.hidden || !playState) {\n                video.pause();\n            } else {\n                video.play();\n            }\n        };\n        document.addEventListener(\"visibilitychange\", onVisibilityChange);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                className: \"vid sticky top-0 w-screen h-screen\",\n                src: \"https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/smoke-transition-bg.mp4\",\n                muted: true\n            }, void 0, false, {\n                fileName: \"/Users/evanburton/Desktop/_WP/Projects/Stak_Site/Stak_app_folder/components/MusicAndVideo/MusicAndVideo.js\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"parallax-container flex flex-col items-center justify-center w-full h-full bg-green-200/0 z-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"z-50 flex justify-center mb-20 w-screen\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                            className: \"w-3/4 h-screen\",\n                            //  width='1032' \n                            //  height=\"630\" \n                            src: url,\n                            title: \"YouTube video player\",\n                            allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                            modestbranding: \"1\",\n                            frameBorder: \"0\",\n                            color: \"black\",\n                            rel: \"1\",\n                            theme: \"dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/evanburton/Desktop/_WP/Projects/Stak_Site/Stak_app_folder/components/MusicAndVideo/MusicAndVideo.js\",\n                            lineNumber: 66,\n                            columnNumber: 8\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/evanburton/Desktop/_WP/Projects/Stak_Site/Stak_app_folder/components/MusicAndVideo/MusicAndVideo.js\",\n                        lineNumber: 65,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-container px-12 mt-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3\",\n                        children: videoPreLink.videoPreLink.vidLink.map(function(video) {\n                            var getVid = video.url;\n                            var id2 = get_youtube_id__WEBPACK_IMPORTED_MODULE_5___default()(getVid);\n                            var url2 = \"https://www.youtube.com/embed/\".concat(id2);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" z-50\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    className: \"\",\n                                    src: url2,\n                                    // width={500}\n                                    // height={500}\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/evanburton/Desktop/_WP/Projects/Stak_Site/Stak_app_folder/components/MusicAndVideo/MusicAndVideo.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/evanburton/Desktop/_WP/Projects/Stak_Site/Stak_app_folder/components/MusicAndVideo/MusicAndVideo.js\",\n                                lineNumber: 88,\n                                columnNumber: 12\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/evanburton/Desktop/_WP/Projects/Stak_Site/Stak_app_folder/components/MusicAndVideo/MusicAndVideo.js\",\n                        lineNumber: 80,\n                        columnNumber: 8\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/evanburton/Desktop/_WP/Projects/Stak_Site/Stak_app_folder/components/MusicAndVideo/MusicAndVideo.js\",\n                lineNumber: 64,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true);\n} //encodeURIComponent\n // my goal is to use an array of music links like features is currently used\n // my goal is to use an array of YT links like features is currently used \n // my goal is to have a hero video centered \n_s(MusicAndVideo, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MusicAndVideo;\nvar _c;\n$RefreshReg$(_c, \"MusicAndVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL011c2ljQW5kVmlkZW8vTXVzaWNBbmRWaWRlby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDQTtBQUNFO0FBQ0c7QUFDUTtBQUNOO0FBQ2dCO0FBQ1Y7QUFFekMsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYiw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLG1DQUFtQztBQUNuQyx3QkFBd0I7QUFDeEIsdUNBQXVDO0FBRXZDLFFBQVE7QUFDUixNQUFNO0FBQ04sSUFBSTtBQUdXLFNBQVNRLGFBQWEsQ0FBQ0MsWUFBWSxFQUFFOztJQUNsREMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFlBQVksQ0FBQztJQUN6QixJQUFNRyxNQUFNLEdBQUdILFlBQVksQ0FBQ0EsWUFBWSxDQUFDSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLEdBQUc7SUFDeEQsSUFBTUMsRUFBRSxHQUFHWCxxREFBWSxDQUFDUSxNQUFNLENBQUM7SUFDL0IsSUFBTUUsR0FBRyxHQUFHLGdDQUErQixDQUFLLE9BQUhDLEVBQUUsQ0FBRTtJQUVqRFosZ0RBQVMsQ0FBQyxXQUFJO1FBRWhCLElBQU1hLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUlDLFNBQVMsR0FBRyxJQUFJO1FBRXBCLElBQU1DLFFBQVEsR0FBRyxJQUFJQyxvQkFBb0IsQ0FBQyxTQUFDQyxPQUFPLEVBQUs7WUFDckRBLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDLEtBQUssRUFBSztnQkFDekIsSUFBSSxDQUFDQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtvQkFDekJULEtBQUssQ0FBQ1UsS0FBSyxFQUFFLENBQUM7b0JBQ2RQLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLE9BQU87b0JBQ0xILEtBQUssQ0FBQ1csSUFBSSxFQUFFLENBQUM7b0JBQ2JSLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ25CLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFTkMsUUFBUSxDQUFDUSxPQUFPLENBQUNaLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQU1hLGtCQUFrQixHQUFHLFdBQU07WUFDL0IsSUFBSVosUUFBUSxDQUFDYSxNQUFNLElBQUksQ0FBQ1gsU0FBUyxFQUFFO2dCQUNqQ0gsS0FBSyxDQUFDVSxLQUFLLEVBQUUsQ0FBQztZQUNoQixPQUFPO2dCQUNMVixLQUFLLENBQUNXLElBQUksRUFBRSxDQUFDO1lBQ2YsQ0FBQztRQUNILENBQUM7UUFFRFYsUUFBUSxDQUFDYyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRUYsa0JBQWtCLENBQUMsQ0FBQztJQUM5RCxDQUFDLENBQUM7SUFFTixxQkFDSTs7MEJBRUEsOERBQUNiLE9BQUs7Z0JBQUNnQixTQUFTLEVBQUMsb0NBQW9DO2dCQUFDQyxHQUFHLEVBQUMsa0ZBQWtGO2dCQUFDQyxLQUFLOzs7OztvQkFBUzswQkFFeEosOERBQUNDLEtBQUc7Z0JBQUNILFNBQVMsRUFBQyxnR0FBZ0c7O2tDQUMvRyw4REFBQ0csS0FBRzt3QkFBQ0gsU0FBUyxFQUFDLHlDQUF5QztrQ0FDeEQsNEVBQUNJLFFBQU07NEJBQUNKLFNBQVMsRUFBQyxnQkFBZ0I7NEJBQ3ZDLGlCQUFpQjs0QkFDakIsaUJBQWlCOzRCQUNoQkMsR0FBRyxFQUFFbkIsR0FBRzs0QkFDUnVCLEtBQUssRUFBQyxzQkFBc0I7NEJBQzVCQyxLQUFLLEVBQUMsMEZBQTBGOzRCQUNoR0MsY0FBYyxFQUFDLEdBQUc7NEJBQ2xCQyxXQUFXLEVBQUMsR0FBRzs0QkFDZkMsS0FBSyxFQUFDLE9BQU87NEJBQ2JDLEdBQUcsRUFBQyxHQUFHOzRCQUNQQyxLQUFLLEVBQUMsTUFBTTs7Ozs7Z0NBQ1Y7Ozs7OzRCQUNPO2tDQUVMLDhEQUFDUixLQUFHO3dCQUFDSCxTQUFTLEVBQUMsc0dBQXNHO2tDQUVqSHZCLFlBQVksQ0FBQ0EsWUFBWSxDQUFDbUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUzdCLEtBQUssRUFBRTs0QkFDckQsSUFBTThCLE1BQU0sR0FBQzlCLEtBQUssQ0FBQ0YsR0FBRzs0QkFDdEIsSUFBTWlDLEdBQUcsR0FBRzNDLHFEQUFZLENBQUMwQyxNQUFNLENBQUM7NEJBQ2hDLElBQU1FLElBQUksR0FBRyxnQ0FBK0IsQ0FBTSxPQUFKRCxHQUFHLENBQUU7NEJBQ25ELHFCQUVELDhEQUFDWixLQUFHO2dDQUFDSCxTQUFTLEVBQUMsT0FBTzswQ0FFckIsNEVBQUNJLFFBQU07b0NBQUNKLFNBQVMsRUFBQyxFQUFFO29DQUNsQkMsR0FBRyxFQUFFZSxJQUFJO29DQUNULGNBQWM7b0NBQ2QsZUFBZTtvQ0FDZkMsR0FBRyxFQUFDLEVBQUU7Ozs7O3dDQUNOOzs7OztvQ0FDSSxDQUNMO3dCQUNILENBQUMsQ0FBQzs7Ozs7NEJBSUc7Ozs7OztvQkFDRDs7b0JBSVAsQ0FFRjtBQUNMLENBQUMsQ0FJRCxvQkFBb0I7Q0FFcEIsNEVBQTRFO0NBQzVFLDBFQUEwRTtDQUMxRSw0Q0FBNEM7R0EvRnBCekMsYUFBYTtBQUFiQSxLQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXVzaWNBbmRWaWRlby9NdXNpY0FuZFZpZGVvLmpzPzQ4NzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE11c2ljIGZyb20gJy4uL011c2ljJ1xuaW1wb3J0IFZpZGVvIGZyb20gJy4uL1ZpZGVvJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBnZXRZb3VUdWJlSUQgZnJvbSAnZ2V0LXlvdXR1YmUtaWQnXG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJ1xuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gIGZyb20gJ0Bwb3J0YWJsZXRleHQvcmVhY3QnXG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tICcuLi8uLi9saWIvY2xpZW50J1xuXG4vLyBjb25zdCBjb21wb25lbnRzID0ge1xuLy8gICB0eXBlczoge1xuLy8gICAgIHlvdXR1YmU6ICh7bm9kZX0pID0+IHtcbi8vICAgICBjb25zdCB7dXJsfSA9IG5vZGVcbi8vICAgICBjb25zdCBpZCA9IGdldFlvdVR1YmVJZCh1cmwpXG4vLyAgICAge2NvbnNvbGUubG9nKGlkKX1cbi8vICAgICByZXR1cm4gKDxZb3VUdWJlIHZpZGVvSWQ9e2lkfS8+KVxuXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXVzaWNBbmRWaWRlbyh2aWRlb1ByZUxpbmspIHtcbiAgY29uc29sZS5sb2codmlkZW9QcmVMaW5rKVxuICBjb25zdCBnZXRVcmwgPSB2aWRlb1ByZUxpbmsudmlkZW9QcmVMaW5rLmhlcm9MaW5rWzBdLnVybFxuICBjb25zdCBpZCA9IGdldFlvdVR1YmVJRChnZXRVcmwpXG4gIGNvbnN0IHVybCA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2lkfWBcbiAgXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgXG5jb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkXCIpO1xubGV0IHBsYXlTdGF0ZSA9IG51bGw7XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICBpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgcGxheVN0YXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgIHBsYXlTdGF0ZSA9IHRydWU7XG4gICAgfVxuICB9KTtcbn0sIHt9KTtcblxub2JzZXJ2ZXIub2JzZXJ2ZSh2aWRlbyk7XG5cbmNvbnN0IG9uVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcbiAgaWYgKGRvY3VtZW50LmhpZGRlbiB8fCAhcGxheVN0YXRlKSB7XG4gICAgdmlkZW8ucGF1c2UoKTtcbiAgfSBlbHNlIHtcbiAgICB2aWRlby5wbGF5KCk7XG4gIH1cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIG9uVmlzaWJpbGl0eUNoYW5nZSk7XG4gICAgfSlcbiBcbnJldHVybiAoXG4gICAgPD5cbiAgIFxuICAgIDx2aWRlbyBjbGFzc05hbWU9XCJ2aWQgc3RpY2t5IHRvcC0wIHctc2NyZWVuIGgtc2NyZWVuXCIgc3JjPVwiaHR0cHM6Ly9pay5pbWFnZWtpdC5pby9hOWx0YnR5ZG8vc3Rhay1pbWFnZXMvc3Rhay9pbWFnZXMvc21va2UtdHJhbnNpdGlvbi1iZy5tcDRcIiBtdXRlZD48L3ZpZGVvPlxuICAgIFxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWxsYXgtY29udGFpbmVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWZ1bGwgYmctZ3JlZW4tMjAwLzAgei0yIFwiPiBcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgZmxleCBqdXN0aWZ5LWNlbnRlciBtYi0yMCB3LXNjcmVlblwiPlxuICAgICAgIDxpZnJhbWUgY2xhc3NOYW1lPVwidy0zLzQgaC1zY3JlZW5cIlxuICAvLyAgd2lkdGg9JzEwMzInIFxuICAvLyAgaGVpZ2h0PVwiNjMwXCIgXG4gICBzcmM9e3VybH0gXG4gICB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgIFxuICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgXG4gICBtb2Rlc3RicmFuZGluZz1cIjFcIlxuICAgZnJhbWVCb3JkZXI9JzAnXG4gICBjb2xvcj1cImJsYWNrXCJcbiAgIHJlbD1cIjFcIlxuICAgdGhlbWU9XCJkYXJrXCJcbiAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtY29udGFpbmVyIHB4LTEyIG10LTEyIHNtOmdyaWQgc206Z3JpZC1jb2xzLTIgc206Z2FwLXgtNiBzbTpnYXAteS0xMiBzbTpzcGFjZS15LTAgbGc6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgXG4gICAgICAgICAge3ZpZGVvUHJlTGluay52aWRlb1ByZUxpbmsudmlkTGluay5tYXAoZnVuY3Rpb24odmlkZW8pIHtcbiAgICAgICAgICAgIGNvbnN0IGdldFZpZD12aWRlby51cmxcbiAgICAgICAgICAgIGNvbnN0IGlkMiA9IGdldFlvdVR1YmVJRChnZXRWaWQpXG4gICAgICAgICAgICBjb25zdCB1cmwyID0gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7aWQyfWBcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgIFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB6LTUwXCI+XG4gICAgICAgICAgIFxuICAgICAgICAgICAgPGlmcmFtZSBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICBzcmM9e3VybDJ9XG4gICAgICAgICAgICAgIC8vIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgIC8vIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgey8qIDxWaWRlby8+ICovfVxuICAgICAgICB7LyogPE11c2ljLz4gKi99XG4gICAgPC8+XG5cbiAgICApXG59XG5cblxuXG4vL2VuY29kZVVSSUNvbXBvbmVudFxuXG4vLyBteSBnb2FsIGlzIHRvIHVzZSBhbiBhcnJheSBvZiBtdXNpYyBsaW5rcyBsaWtlIGZlYXR1cmVzIGlzIGN1cnJlbnRseSB1c2VkXG4vLyBteSBnb2FsIGlzIHRvIHVzZSBhbiBhcnJheSBvZiBZVCBsaW5rcyBsaWtlIGZlYXR1cmVzIGlzIGN1cnJlbnRseSB1c2VkIFxuLy8gbXkgZ29hbCBpcyB0byBoYXZlIGEgaGVybyB2aWRlbyBjZW50ZXJlZCAiXSwibmFtZXMiOlsiTXVzaWMiLCJWaWRlbyIsIkltYWdlIiwidXNlRWZmZWN0IiwiZ2V0WW91VHViZUlEIiwiWW91VHViZSIsIlBvcnRhYmxlVGV4dCIsInVybEZvciIsIk11c2ljQW5kVmlkZW8iLCJ2aWRlb1ByZUxpbmsiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXJsIiwiaGVyb0xpbmsiLCJ1cmwiLCJpZCIsInZpZGVvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheVN0YXRlIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInBhdXNlIiwicGxheSIsIm9ic2VydmUiLCJvblZpc2liaWxpdHlDaGFuZ2UiLCJoaWRkZW4iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lIiwic3JjIiwibXV0ZWQiLCJkaXYiLCJpZnJhbWUiLCJ0aXRsZSIsImFsbG93IiwibW9kZXN0YnJhbmRpbmciLCJmcmFtZUJvcmRlciIsImNvbG9yIiwicmVsIiwidGhlbWUiLCJ2aWRMaW5rIiwibWFwIiwiZ2V0VmlkIiwiaWQyIiwidXJsMiIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MusicAndVideo/MusicAndVideo.js\n"));

/***/ })

});