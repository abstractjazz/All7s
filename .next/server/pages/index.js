"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@heroicons/react/20/solid"
var solid_ = __webpack_require__(9476);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@portabletext/react"
var react_ = __webpack_require__(1254);
;// CONCATENATED MODULE: ./sanity_staksite/schemas/about.js
/* harmony default export */ const about = ({
    name: "about",
    title: "About - (Note: Styling is fixed. Editor controls will not work here)",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "body",
            title: "Body",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ],
    preview: {
        select: {
            title: "title"
        }
    }
});

;// CONCATENATED MODULE: ./doc.json
const doc_namespaceObject = {};
;// CONCATENATED MODULE: ./components/About/About.js






function About({ sectionCopy  }) {
    // {console.log(sectionCopy)}
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute w-screen h-screen z-20 text-[6rem]",
                id: "about",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full h-full flex content-center justify-center align-middle items-center font-bold px-24 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-pink-600 to-purple-600 mt-24",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: sectionCopy[0].body[0].children[0].text
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                alt: "huge block letters 'S T A K' with an image of the rapper STAK inside of them",
                src: "https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/Stak-about-page.png",
                layout: "responsive",
                width: 1440,
                height: 900
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/About/index.js



/***/ }),

/***/ 8721:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Contact/Contact.js
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/ 
function Contact() {
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Image, {
                alt: "huge block letters 'S T A K' with an image of the rapper STAK inside of them",
                src: "https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/Stak-music-&-video-2.png",
                layout: "responsive",
                width: 1440,
                height: 900
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "bg-gray-800",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "lg:w-0 lg:flex-1",
                            children: [
                                /*#__PURE__*/ _jsx("h2", {
                                    className: "text-3xl font-bold tracking-tight text-white sm:text-4xl",
                                    id: "newsletter-headline",
                                    children: "Sign up for our newsletter"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    className: "mt-3 max-w-3xl text-lg leading-6 text-gray-300",
                                    children: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat."
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "mt-8 lg:mt-0 lg:ml-8",
                            children: [
                                /*#__PURE__*/ _jsxs("form", {
                                    className: "sm:flex",
                                    children: [
                                        /*#__PURE__*/ _jsx("label", {
                                            htmlFor: "email-address",
                                            className: "sr-only",
                                            children: "Email address"
                                        }),
                                        /*#__PURE__*/ _jsx("input", {
                                            id: "email-address",
                                            name: "email-address",
                                            type: "email",
                                            autoComplete: "email",
                                            required: true,
                                            className: "w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs",
                                            placeholder: "Enter your email"
                                        }),
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0",
                                            children: /*#__PURE__*/ _jsx("button", {
                                                type: "submit",
                                                className: "flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800",
                                                children: "Notify me!"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("p", {
                                    className: "mt-3 text-sm text-gray-300",
                                    children: [
                                        "We care about the protection of your data. Read our",
                                        " ",
                                        /*#__PURE__*/ _jsx("a", {
                                            href: "#",
                                            className: "font-medium text-white underline",
                                            children: "Privacy Policy."
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Contact/index.js



/***/ }),

/***/ 7665:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@heroicons/react/24/outline"
var outline_ = __webpack_require__(2135);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/Featured/Featured.js
/* This example requires Tailwind CSS v2.0+ */ 


const features = [
    {
        name: "One",
        description: "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
        image: "/background.jpg"
    },
    {
        name: "Two",
        description: "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
        image: "/background.jpg"
    },
    {
        name: "Three",
        description: "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
        image: "/background.jpg"
    },
    {
        name: "Four",
        description: "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
        image: "/background.jpg"
    },
    {
        name: "Five",
        description: "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
        image: "/background.jpg"
    },
    {
        name: "Six",
        description: "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
        image: "/background.jpg"
    },
    {
        name: "Seven",
        description: "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
        image: "/background.jpg"
    },
    {
        name: "Eight",
        description: "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
        image: "/background.jpg"
    },
    {
        name: "Nine",
        description: "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
        image: "/background.jpg"
    },
    {
        name: "Ten",
        description: "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
        image: "/background.jpg"
    },
    {
        name: "Eleven",
        description: "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
        image: "/background.jpg"
    },
    {
        name: "Twelve",
        description: "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
        image: "/background.jpg"
    }
];
const css = {
    maxWidth: "100%",
    height: "auto"
};
function Featured() {
    return /*#__PURE__*/ _jsx("div", {
        className: "bg-black",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "mx-auto max-w-3xl text-center",
                    children: [
                        /*#__PURE__*/ _jsx("h2", {
                            className: "text-3xl font-bold tracking-tight text-white",
                            children: "All 7s Highights"
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            className: "mt-4 text-lg text-purple-700 font-bold text-3xl",
                            children: "@Roderick, I was thinking this could be less like a portfolio & more like a playground with 3-5 highlights on it from each section of the site. Like on song, one music video, one piece of merch, one blog post or headline. Plus it feels like a good place for a simple interaction someone could play with. What you think?"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8",
                    children: features.map((feature)=>/*#__PURE__*/ _jsx("div", {
                            className: "relative border-solid border-white border",
                            children: /*#__PURE__*/ _jsx(Image, {
                                src: feature.image,
                                width: 1000,
                                height: 500,
                                alt: ""
                            })
                        }, feature.name))
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Featured/index.js



/***/ }),

/***/ 7422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ MusicAndVideo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@heroicons/react/24/outline"
var outline_ = __webpack_require__(2135);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/Music/Music.js
/* This example requires Tailwind CSS v2.0+ */ 


const features = [
    {
        name: "One",
        description: "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
        image: "/background.jpg"
    },
    {
        name: "Two",
        description: "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
        image: "/background.jpg"
    },
    {
        name: "Three",
        description: "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
        image: "/background.jpg"
    },
    {
        name: "Four",
        description: "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
        image: "/background.jpg"
    },
    {
        name: "Five",
        description: "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
        image: "/background.jpg"
    },
    {
        name: "Six",
        description: "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
        image: "/background.jpg"
    },
    {
        name: "Seven",
        description: "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
        image: "/background.jpg"
    },
    {
        name: "Eight",
        description: "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
        image: "/background.jpg"
    },
    {
        name: "Nine",
        description: "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
        image: "/background.jpg"
    },
    {
        name: "Ten",
        description: "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
        image: "/background.jpg"
    },
    {
        name: "Eleven",
        description: "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
        image: "/background.jpg"
    },
    {
        name: "Twelve",
        description: "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
        image: "/background.jpg"
    }
];
const css = {
    maxWidth: "100%",
    height: "auto"
};
function Music() {
    return /*#__PURE__*/ _jsx("div", {
        className: "bg-black/0",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "mx-auto max-w-3xl text-center",
                    children: /*#__PURE__*/ _jsx("h2", {
                        className: "text-3xl font-bold tracking-tight text-white",
                        children: "Latest Music"
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8 ",
                    children: features.map((feature)=>/*#__PURE__*/ _jsx("div", {
                            className: "relative border-solid border-white border",
                            children: /*#__PURE__*/ _jsx(Image, {
                                src: feature.image,
                                width: 1000,
                                height: 500,
                                alt: ""
                            })
                        }, feature.name))
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Music/index.js


;// CONCATENATED MODULE: ./components/Video/Video.js
/* This example requires Tailwind CSS v2.0+ */ 


const Video_features = [
    {
        name: "One",
        description: "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
        image: "/background_2.png"
    },
    {
        name: "Two",
        description: "Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.",
        image: "/background_2.png"
    },
    {
        name: "Three",
        description: "Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.",
        image: "/background_2.png"
    }, 
];
const Video_css = {
    maxWidth: "100%",
    height: "auto"
};
function Video() {
    return /*#__PURE__*/ _jsx("div", {
        className: "bg-black",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "mx-auto max-w-3xl text-center",
                    children: /*#__PURE__*/ _jsx("h2", {
                        className: "text-3xl font-bold tracking-tight text-white",
                        children: "Latest Videos"
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "mt-12 space-y-10 sm:grid sm:grid-cols- sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8",
                    children: Video_features.map((feature)=>/*#__PURE__*/ _jsx("div", {
                            className: "relative border-solid border-white border",
                            children: /*#__PURE__*/ _jsx(Image, {
                                src: feature.image,
                                width: 1000,
                                height: 500,
                                alt: ""
                            })
                        }, feature.name))
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Video/index.js


;// CONCATENATED MODULE: ./components/Album/Album.js

function Album({ content , isClicked  }) {
    return /*#__PURE__*/ _jsxs("div", {
        className: "flex flex-col items-center justify-center",
        onClick: (genericFunction)=>{
            genericFunction;
        },
        children: [
            /*#__PURE__*/ _jsx("p", {
                className: "bg-black/50 rounded-lg text-2xl font-bold w-1/2 mb-3 bg-gradient-to-r from-blue-300/50 via-pink-600/50 to-purple-600/50",
                children: content.description
            }),
            /*#__PURE__*/ _jsx("img", {
                className: "mb-8 w-1/2 h-auto",
                src: urlFor(content.image)
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Album/index.js


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "get-youtube-id"
const external_get_youtube_id_namespaceObject = require("get-youtube-id");
var external_get_youtube_id_default = /*#__PURE__*/__webpack_require__.n(external_get_youtube_id_namespaceObject);
;// CONCATENATED MODULE: external "react-youtube"
const external_react_youtube_namespaceObject = require("react-youtube");
// EXTERNAL MODULE: external "@portabletext/react"
var react_ = __webpack_require__(1254);
// EXTERNAL MODULE: ./lib/client.js + 1 modules
var client = __webpack_require__(961);
;// CONCATENATED MODULE: external "next-sanity-image"
const external_next_sanity_image_namespaceObject = require("next-sanity-image");
// EXTERNAL MODULE: external "animejs"
var external_animejs_ = __webpack_require__(7152);
;// CONCATENATED MODULE: ./components/MusicAndVideo/MusicAndVideo.js














// const components = {
//   types: {
//     youtube: ({node}) => {
//     const {url} = node
//     const id = getYouTubeId(url)
//     {console.log(id)}
//     return (<YouTube videoId={id}/>)
//     }
//   }
// }
// const builder = imageUrlBuilder(client)
function MusicAndVideo(videoPreLink) {
    const soundCloudMusic = videoPreLink.videoPreLink.musicLink;
    const albumRef = soundCloudMusic.map(function(album) {
        console.log(album);
    });
    const { 0: play , 1: setPlay  } = (0,external_react_.useState)(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text-9xl flex flex-col justify-center items-center",
        children: soundCloudMusic.map(function(album) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "album-div flex flex-col items-center justify-center",
                onClick: ()=>{
                    handleClick;
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "bg-black/50 rounded-lg text-2xl font-bold w-1/2 mb-3 bg-gradient-to-r from-blue-300/50 via-pink-600/50 to-purple-600/50",
                        children: album.description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center drop-shadow-2xl",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "transition-all ease-linear w-1/4 absolute z-10 mt-28 -translate-y-30 animate-bounce",
                                src: "./whiteRabbit.png"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "bg-black/20 z-30 mb-8 w-1/2 h-auto transition-all hover:border-red-400/50 hover:skew-x-12 hover:skew-y-12 hover:translate-x-60 border-black/50 border-8 rounded-lg ease-linear duration-500",
                                src: (0,client/* urlFor */.u)(album.image)
                            })
                        ]
                    })
                ]
            });
        })
    }));
    let elementClicked = "true";
    // useEffect(()=>{if (elementClicked.current=true) {
    //   anime({
    //     targets: '.album-div',
    //     translateX:-20,
    //     duration: 4000,
    //     easing: 'easeOutQuad'
    // })
    // } else {
    // }},[])
    const handleClick = ()=>{
        setPlay(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex items-center justify-center flex-wrap gap-x-12",
            children: soundCloudMusic.map(function(album) {
                if (elementClicked = "true") {
                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "album div w-96 mb-12",
                        dangerouslySetInnerHTML: {
                            __html: album.body[0].children[0].text
                        }
                    });
                } else {
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center justify-center",
                        onClick: ()=>{
                            handleClick;
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "bg-black/50 rounded-lg text-2xl font-bold w-1/2 mb-3 bg-gradient-to-r from-blue-300/50 via-pink-600/50 to-purple-600/50",
                                children: album.description
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "mb-8 w-1/2 h-auto",
                                src: (0,client/* urlFor */.u)(album.image)
                            })
                        ]
                    });
                }
            })
        }));
    };
    console.log(soundCloudMusic) // map this and drill down into each object to get the iframe 
    ;
    const getUrl = videoPreLink.videoPreLink.heroLink[0].url;
    const id = external_get_youtube_id_default()(getUrl);
    const url = `https://www.youtube.com/embed/${id}`;
    (0,external_react_.useEffect)(()=>{
        const video = document.querySelector(".vid");
        let playState = null;
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (!entry.isIntersecting) {
                    video.pause();
                    playState = false;
                } else {
                    video.play();
                    playState = true;
                }
            });
        }, {});
        observer.observe(video);
        const onVisibilityChange = ()=>{
            if (document.hidden || !playState) {
                video.pause();
            } else {
                video.play();
            }
        };
        document.addEventListener("visibilitychange", onVisibilityChange);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("video", {
                className: "vid sticky top-0 w-screen h-screen",
                src: "https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/smoke-transition-bg.mp4",
                muted: true
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "parallax-container flex flex-col items-center justify-center w-full h-full bg-green-200/0 z-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "z-30 flex flex-col items-center justify-center mb-20 w-screen",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bg-black/50 mb-12 rounded-lg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-7xl font-Headline text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-pink-600 to-purple-600 font-bold",
                                    children: "Watch"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                className: "w-3/4 h-screen border-8 border-black/50",
                                //  width='1032' 
                                //  height="630" 
                                src: url,
                                title: "YouTube video player",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                modestbranding: "1",
                                frameBorder: "0",
                                color: "black",
                                rel: "1",
                                theme: "dark"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-screen grid-container px-12 mt-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2",
                        children: videoPreLink.videoPreLink.vidLink.map(function(video) {
                            const getVid = video.url;
                            const id2 = external_get_youtube_id_default()(getVid);
                            const url2 = `https://www.youtube.com/embed/${id2}`;
                            return /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                className: "w-full z-30 border-8 border-black/50 rounded-lg",
                                src: url2,
                                width: 500,
                                height: 500,
                                alt: "",
                                allow: "fullscreen"
                            });
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-3/4 flex mt-12 gap-y-12 flex-col items-center z-30",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bg-black/50 mb-12 rounded-lg flex items-center justify-center w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-7xl font-Headline text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-pink-600 to-purple-600 font-bold",
                                    id: "listen",
                                    children: "Listen"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "",
                                onClick: handleClick,
                                children: play
                            })
                        ]
                    })
                ]
            })
        ]
    });
} //encodeURIComponent

;// CONCATENATED MODULE: ./components/MusicAndVideo/index.js



/***/ }),

/***/ 1505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Splash)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9476);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7152);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2994);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Splash() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.scrollTo(95, 95);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        animejs__WEBPACK_IMPORTED_MODULE_5___default()({
            targets: "#focus-mask",
            opacity: 0,
            translateY: -120,
            // translateX:-20,
            duration: 1500,
            easing: "easeOutQuad"
        });
    });
    // const styles = {
    //   width:  500,
    //   height: 500
    // }
    // style={{display:'flex', flexDirection:'column', alignItems: 'center', alignContent:'center'}}
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full h-auto scroll-smooth",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                alt: "huge block letters 'S T A K' with an image of the rapper STAK inside of them",
                src: "https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/Stak-main-feature-(25x16).png",
                layout: "responsive",
                width: 2560,
                height: 1600,
                objectFit: "cover"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-black absolute top-5 w-screen h-screen opacity-40",
                id: "focus-mask",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                    alt: "huge block letters 'S T A K' with an image of the rapper STAK inside of them",
                    src: "https://ik.imagekit.io/a9ltbtydo/stak-images/stak/images/Stak-main-feature-(25x16).png",
                    layout: "responsive",
                    width: 2560,
                    height: 1600,
                    objectFit: "cover"
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7837:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Splash__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Splash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1505);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Splash__WEBPACK_IMPORTED_MODULE_0__]);
_Splash__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    container: [].join(" "),
    nav: [].join(" ")
});


/***/ }),

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ client),
  "u": () => (/* binding */ urlFor)
});

;// CONCATENATED MODULE: external "@sanity/client"
const client_namespaceObject = require("@sanity/client");
var client_default = /*#__PURE__*/__webpack_require__.n(client_namespaceObject);
// EXTERNAL MODULE: external "@sanity/image-url"
var image_url_ = __webpack_require__(1791);
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_);
;// CONCATENATED MODULE: ./lib/client.js


const client = client_default()({
    projectId: "1gxdk71x",
    dataset: "production",
    apiVersion: "2022-10-29",
    useCdn: true,
    token: "skjwBEAt0Ezgmg8ZwqyMHrlyNtCVnbR516bK6u3kKL7dyldf3v5mJreOoC9a8uojFYKLbnawJlB4l2cBsp1mAW7RzOQNKz7ZEJplpbqCnB9HP1e5cXmDVCi4YcCMve2uGtAqRqZm4m0HW8KT54N23vXRFfYobyTY2OJ5bchsffdNlHzsnPz3"
});
const builder = image_url_default()(client);
const urlFor = (source)=>builder.image(source);


/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2994);
/* harmony import */ var _components_Splash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7837);
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6801);
/* harmony import */ var _components_Featured__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7665);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8721);
/* harmony import */ var _components_MusicAndVideo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7422);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(961);
/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1254);
/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_portabletext_react__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Splash__WEBPACK_IMPORTED_MODULE_4__]);
_components_Splash__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const Home = (clientFetch)=>{
    {
        console.log(clientFetch);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: _components_styles_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].container */ .Z.container,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Splash__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                sectionCopy: clientFetch.clientFetch
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MusicAndVideo__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                videoPreLink: clientFetch
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getServerSideProps = async ()=>{
    const query = "*[_type == 'about']" //is this the wrong query & why I am not getting the expected results? the return differs from a simple copy of the json 
    ;
    const clientFetch = await _lib_client__WEBPACK_IMPORTED_MODULE_9__/* .client.fetch */ .L.fetch(query);
    const query2 = "*[_type == 'videoLink']";
    const query3 = "*[_type == 'heroVideo']";
    const vidLink = await _lib_client__WEBPACK_IMPORTED_MODULE_9__/* .client.fetch */ .L.fetch(query2);
    const heroLink = await _lib_client__WEBPACK_IMPORTED_MODULE_9__/* .client.fetch */ .L.fetch(query3);
    const query4 = "*[_type == 'musicLink']";
    const musicLink = await _lib_client__WEBPACK_IMPORTED_MODULE_9__/* .client.fetch */ .L.fetch(query4);
    return {
        props: {
            clientFetch,
            vidLink,
            heroLink,
            musicLink
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9476:
/***/ ((module) => {

module.exports = require("@heroicons/react/20/solid");

/***/ }),

/***/ 2135:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ 1254:
/***/ ((module) => {

module.exports = require("@portabletext/react");

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 7152:
/***/ ((module) => {

module.exports = require("animejs");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();