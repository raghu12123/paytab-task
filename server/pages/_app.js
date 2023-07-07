(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_localtionSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1818);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const SidebarModal = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/Custom/LoginModal.tsx -> " + "./SidebarModal"
        ]
    },
    ssr: false
});
const LoginModal = (props)=>{
    const [mobileNumber, setMobileNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [otp, setOtp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [showOtp, setShowOtp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const mobileNumberInputHandler = (e)=>{
        setMobileNumber(e.target.value.slice(0, 10));
    };
    const otpInputHandler = (e)=>{
        setOtp(e.target.value);
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const requestOtpFrom = async (event)=>{
        event.preventDefault();
        if (mobileNumber.trim().length === 0) {
            return react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Please enter a mobile number");
        }
        if (mobileNumber.length != 10) {
            return react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("invalid mobile number");
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                mobile: `+91${mobileNumber}`
            })
        });
        const data = await response.json();
        if (data.status) {
            setToken(data.token);
            setShowOtp(true);
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success("Verification Sent To +91 " + mobileNumber);
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(data.message);
        }
    };
    const verifyOtpForm = async (event)=>{
        event.preventDefault();
        if (otp.trim().length == 0) {
            return react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.warn("Please Enter OTP");
        }
        let check = {
            "status": 200
        };
        const data = {
            "status": 200
        };
        if (data.status) {
            props.toggleLoginSidebarModal();
            dispatch((0,_redux_localtionSlice__WEBPACK_IMPORTED_MODULE_5__/* .updateToken */ .jM)(token));
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success("Login Successfully");
            props.setToken(token);
            setShowOtp(false);
            setMobileNumber("");
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("invalid otp");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SidebarModal, {
            toggleSidebar: props.toggleLoginSidebarModal,
            sidebarOpen: props.openLoginSidebarModel,
            heading: "Login",
            children: [
                !showOtp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: "mt-4",
                        onSubmit: requestOtpFrom,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {
                                value: mobileNumber,
                                onChange: mobileNumberInputHandler,
                                name: "mobile_number"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "btn btn-primary",
                                children: "Request OTP"
                            })
                        ]
                    })
                }),
                showOtp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: verifyOtpForm,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-3",
                                children: [
                                    "Please enter the OTP sent to ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            fontWeight: 600
                                        },
                                        children: mobileNumber
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-primary ml-2",
                                        style: {
                                            cursor: "pointer",
                                            fontWeight: 600
                                        },
                                        onClick: ()=>setShowOtp(false),
                                        children: "Change"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {
                                value: otp,
                                onChange: otpInputHandler,
                                name: "otp",
                                type: "number"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "btn btn-primary",
                                children: "Verify"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-3",
                                children: [
                                    "Not received your code?",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: "text-primary",
                                        onClick: requestOtpFrom,
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: "Resend code"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
            className: "ec-footer section-space-mt",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "footer-container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "footer-bottom",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row align-items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col text-left footer-bottom-left",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "footer-bottom-social",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "social-text text-upper",
                                            children: "Follow us on:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "mb-0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "list-inline-item",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "hdr-facebook",
                                                        href: "#",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "ecicon eci-facebook"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "list-inline-item",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "hdr-twitter",
                                                        href: "#",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "ecicon eci-twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "list-inline-item",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "hdr-instagram",
                                                        href: "#",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "ecicon eci-instagram"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "list-inline-item",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "hdr-linkedin",
                                                        href: "#",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "ecicon eci-linkedin"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 7875:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactjs_popup_dist_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7311);
/* harmony import */ var reactjs_popup_dist_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactjs_popup_dist_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_localtionSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1818);
/* harmony import */ var _Custom_LoginModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5283);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3590);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Custom_LoginModal__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_8__]);
([_Custom_LoginModal__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Header = (props)=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [openLoginSidebarModel, setOpenLoginSidebarModel] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const toggleLoginSidebarModal = ()=>{
        setOpenLoginSidebarModel(!openLoginSidebarModel);
    };
    const branchId = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.location.branchId);
    const storedToken = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.location.token);
    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const cartItem = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.cart.items);
    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [searchProduct, setSearchProduct] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const res = {
        "data": [
            {
                "product_id": 6,
                "product_name": "Bed Sheet",
                "product_status": 1,
                "product_video_link": null,
                "product_image": "https://api.mypeppys.com/dashboard/Images/Product/6_0.jpg",
                "category_id": 3,
                "category_name": "Bed Sheets",
                "product_description": "Consectetur tempor dolore qui occaecat fugiat culpa labore elit ut sunt aute culpa irure laboris.\r\n\r\nOccaecat ad culpa sit irure ad exercitation ex incididunt qui nostrud incididunt irure aute qui. Dolor nulla dolor est laborum sint dolor aliqua eiusmod non incididunt exercitation in qui occaecat.\r\n\r\nAmet anim id fugiat nulla esse et nostrud mollit incididunt non enim velit sit do.\r\n\r\nAute fugiat eu sit eu consectetur minim culpa non est proident adipisicing quis nulla aliqua. Do ex cupidatat consectetur velit eiusmod pariatur non mollit non incididunt sint reprehenderit commodo cupidatat. Tempor voluptate aute excepteur tempor incididunt amet ea laborum Lorem aliquip deserunt id irure enim.",
                "product_price": [
                    {
                        "product_price_id": 44,
                        "product_variation": "1",
                        "product_unit": "Set",
                        "product_price": 1500,
                        "product_demo_amount": 2000,
                        "saved_amount": "",
                        "product_weight": null,
                        "product_piece_count": null,
                        "product_serves": "0",
                        "net_weight": null,
                        "gross_weight": null
                    },
                    {
                        "product_price_id": 45,
                        "product_variation": "2",
                        "product_unit": "Set",
                        "product_price": 3000,
                        "product_demo_amount": 4000,
                        "saved_amount": "",
                        "product_weight": null,
                        "product_piece_count": null,
                        "product_serves": "0",
                        "net_weight": null,
                        "gross_weight": null
                    }
                ],
                "product_recommended": 0,
                "product_seasonal": 1,
                "product_percentage": 0,
                "is_favourite": 0,
                "timeslot": "0",
                "product_offer": 0,
                "product_rating": "5.0"
            },
            {
                "product_id": 5,
                "product_name": "Complete Comforter Set",
                "product_status": 1,
                "product_video_link": null,
                "product_image": "https://api.mypeppys.com/dashboard/Images/Product/5_0.png",
                "category_id": 1,
                "category_name": "Mattress",
                "product_description": "Consectetur tempor dolore qui occaecat fugiat culpa labore elit ut sunt aute culpa irure laboris.\r\n\r\nOccaecat ad culpa sit irure ad exercitation ex incididunt qui nostrud incididunt irure aute qui. Dolor nulla dolor est laborum sint dolor aliqua eiusmod non incididunt exercitation in qui occaecat.\r\n\r\nAmet anim id fugiat nulla esse et nostrud mollit incididunt non enim velit sit do.\r\n\r\nAute fugiat eu sit eu consectetur minim culpa non est proident adipisicing quis nulla aliqua. Do ex cupidatat consectetur velit eiusmod pariatur non mollit non incididunt sint reprehenderit commodo cupidatat. Tempor voluptate aute excepteur tempor incididunt amet ea laborum Lorem aliquip deserunt id irure enim.",
                "product_price": [
                    {
                        "product_price_id": 46,
                        "product_variation": "1",
                        "product_unit": "Set",
                        "product_price": 3000,
                        "product_demo_amount": 3500,
                        "saved_amount": "",
                        "product_weight": null,
                        "product_piece_count": null,
                        "product_serves": "0",
                        "net_weight": null,
                        "gross_weight": null
                    },
                    {
                        "product_price_id": 47,
                        "product_variation": "2",
                        "product_unit": "Set",
                        "product_price": 6000,
                        "product_demo_amount": 7000,
                        "saved_amount": "",
                        "product_weight": null,
                        "product_piece_count": null,
                        "product_serves": "0",
                        "net_weight": null,
                        "gross_weight": null
                    }
                ],
                "product_recommended": 0,
                "product_seasonal": 0,
                "product_percentage": 0,
                "is_favourite": 0,
                "timeslot": "0",
                "product_offer": 0,
                "product_rating": "5.0"
            },
            {
                "product_id": 3,
                "product_name": "Dunlop Mattress",
                "product_status": 1,
                "product_video_link": null,
                "product_image": "https://api.mypeppys.com/dashboard/Images/Product/3_0.png",
                "category_id": 1,
                "category_name": "Mattress",
                "product_description": "Consectetur tempor dolore qui occaecat fugiat culpa labore elit ut sunt aute culpa irure laboris.\r\n\r\nOccaecat ad culpa sit irure ad exercitation ex incididunt qui nostrud incididunt irure aute qui. Dolor nulla dolor est laborum sint dolor aliqua eiusmod non incididunt exercitation in qui occaecat.\r\n\r\nAmet anim id fugiat nulla esse et nostrud mollit incididunt non enim velit sit do.\r\n\r\nAute fugiat eu sit eu consectetur minim culpa non est proident adipisicing quis nulla aliqua. Do ex cupidatat consectetur velit eiusmod pariatur non mollit non incididunt sint reprehenderit commodo cupidatat. Tempor voluptate aute excepteur tempor incididunt amet ea laborum Lorem aliquip deserunt id irure enim.",
                "product_price": [
                    {
                        "product_price_id": 38,
                        "product_variation": "1",
                        "product_unit": "Set",
                        "product_price": 9000,
                        "product_demo_amount": 9500,
                        "saved_amount": "",
                        "product_weight": null,
                        "product_piece_count": null,
                        "product_serves": "0",
                        "net_weight": null,
                        "gross_weight": null
                    }
                ],
                "product_recommended": 0,
                "product_seasonal": 1,
                "product_percentage": 0,
                "is_favourite": 0,
                "timeslot": "0",
                "product_offer": 0,
                "product_rating": 0
            },
            {
                "product_id": 2,
                "product_name": "Pillow",
                "product_status": 1,
                "product_video_link": "",
                "product_image": "https://api.mypeppys.com/dashboard/Images/Product/2_0.png",
                "category_id": 2,
                "category_name": "Pillow",
                "product_description": "Consectetur tempor dolore qui occaecat fugiat culpa labore elit ut sunt aute culpa irure laboris.\r\n\r\nOccaecat ad culpa sit irure ad exercitation ex incididunt qui nostrud incididunt irure aute qui. Dolor nulla dolor est laborum sint dolor aliqua eiusmod non incididunt exercitation in qui occaecat.\r\n\r\nAmet anim id fugiat nulla esse et nostrud mollit incididunt non enim velit sit do.\r\n\r\nAute fugiat eu sit eu consectetur minim culpa non est proident adipisicing quis nulla aliqua. Do ex cupidatat consectetur velit eiusmod pariatur non mollit non incididunt sint reprehenderit commodo cupidatat. Tempor voluptate aute excepteur tempor incididunt amet ea laborum Lorem aliquip deserunt id irure enim.",
                "product_price": [
                    {
                        "product_price_id": 39,
                        "product_variation": "1",
                        "product_unit": "Set",
                        "product_price": 119,
                        "product_demo_amount": 150,
                        "saved_amount": "You Saved 6",
                        "product_weight": null,
                        "product_piece_count": null,
                        "product_serves": "0",
                        "net_weight": null,
                        "gross_weight": null
                    },
                    {
                        "product_price_id": 40,
                        "product_variation": "2",
                        "product_unit": "Set",
                        "product_price": 238,
                        "product_demo_amount": 300,
                        "saved_amount": "You Saved 13",
                        "product_weight": null,
                        "product_piece_count": null,
                        "product_serves": "0",
                        "net_weight": null,
                        "gross_weight": null
                    }
                ],
                "product_recommended": 1,
                "product_seasonal": 1,
                "product_percentage": 5,
                "is_favourite": 0,
                "timeslot": "0",
                "product_offer": 1,
                "product_rating": 0
            },
            {
                "product_id": 1,
                "product_name": "Sleeping Pillow",
                "product_status": 1,
                "product_video_link": " ",
                "product_image": "https://api.mypeppys.com/dashboard/Images/Product/1_0.png",
                "category_id": 2,
                "category_name": "Pillow",
                "product_description": "Consectetur tempor dolore qui occaecat fugiat culpa labore elit ut sunt aute culpa irure laboris.\r\n\r\nOccaecat ad culpa sit irure ad exercitation ex incididunt qui nostrud incididunt irure aute qui. Dolor nulla dolor est laborum sint dolor aliqua eiusmod non incididunt exercitation in qui occaecat.\r\n\r\nAmet anim id fugiat nulla esse et nostrud mollit incididunt non enim velit sit do.\r\n\r\nAute fugiat eu sit eu consectetur minim culpa non est proident adipisicing quis nulla aliqua. Do ex cupidatat consectetur velit eiusmod pariatur non mollit non incididunt sint reprehenderit commodo cupidatat. Tempor voluptate aute excepteur tempor incididunt amet ea laborum Lorem aliquip deserunt id irure enim.",
                "product_price": [
                    {
                        "product_price_id": 41,
                        "product_variation": "2",
                        "product_unit": "Set",
                        "product_price": 315,
                        "product_demo_amount": 400,
                        "saved_amount": "You Saved 35",
                        "product_weight": null,
                        "product_piece_count": null,
                        "product_serves": "0",
                        "net_weight": null,
                        "gross_weight": null
                    },
                    {
                        "product_price_id": 42,
                        "product_variation": "4",
                        "product_unit": "Set",
                        "product_price": 630,
                        "product_demo_amount": 800,
                        "saved_amount": "You Saved 70",
                        "product_weight": null,
                        "product_piece_count": null,
                        "product_serves": "0",
                        "net_weight": null,
                        "gross_weight": null
                    }
                ],
                "product_recommended": 1,
                "product_seasonal": 0,
                "product_percentage": 10,
                "is_favourite": 0,
                "timeslot": "0",
                "product_offer": 1,
                "product_rating": 0
            },
            {
                "product_id": 4,
                "product_name": "Xtra Snooze Grid Mattress",
                "product_status": 1,
                "product_video_link": null,
                "product_image": "https://api.mypeppys.com/dashboard/Images/Product/4_0.png",
                "category_id": 1,
                "category_name": "Mattress",
                "product_description": "Consectetur tempor dolore qui occaecat fugiat culpa labore elit ut sunt aute culpa irure laboris.\r\n\r\nOccaecat ad culpa sit irure ad exercitation ex incididunt qui nostrud incididunt irure aute qui. Dolor nulla dolor est laborum sint dolor aliqua eiusmod non incididunt exercitation in qui occaecat.\r\n\r\nAmet anim id fugiat nulla esse et nostrud mollit incididunt non enim velit sit do.\r\n\r\nAute fugiat eu sit eu consectetur minim culpa non est proident adipisicing quis nulla aliqua. Do ex cupidatat consectetur velit eiusmod pariatur non mollit non incididunt sint reprehenderit commodo cupidatat. Tempor voluptate aute excepteur tempor incididunt amet ea laborum Lorem aliquip deserunt id irure enim.",
                "product_price": [
                    {
                        "product_price_id": 43,
                        "product_variation": "1",
                        "product_unit": "Set",
                        "product_price": 5500,
                        "product_demo_amount": 6000,
                        "saved_amount": "",
                        "product_weight": null,
                        "product_piece_count": null,
                        "product_serves": "0",
                        "net_weight": null,
                        "gross_weight": null
                    }
                ],
                "product_recommended": 0,
                "product_seasonal": 0,
                "product_percentage": 0,
                "is_favourite": 0,
                "timeslot": "0",
                "product_offer": 0,
                "product_rating": 0
            }
        ],
        "status": true
    };
    const searchProductHandle = (event)=>{
        setProduct(event.target.value);
    };
    const searchProductOff = ()=>{
        setProduct("");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setCartItems(cartItem);
        setToken(storedToken);
    }, [
        cartItem,
        token
    ]);
    const filteredProducts = searchProduct.filter((item)=>{
        return item.product_name.toLowerCase().includes(product.toLowerCase());
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setSearchProduct(res.data);
    }, [
        branchId,
        storedToken
    ]);
    const logoutHandler = async ()=>{
        dispatch((0,_redux_localtionSlice__WEBPACK_IMPORTED_MODULE_5__/* .removeToken */ .gy)());
        setToken("");
        if (router.pathname === "/cart" || router.pathname === "/product" || router.pathname === "/product/[productId]") {
            router.push("/");
        }
        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success("Logout SuccessFully");
    };
    const cartHandler = ()=>{
        if (token) {
            router.push("/cart");
        } else {
            toggleLoginSidebarModal();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Custom_LoginModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                openLoginSidebarModel: openLoginSidebarModel,
                toggleLoginSidebarModal: toggleLoginSidebarModal,
                setToken: setToken
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "ec-header",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "header-top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col d-lg-none ",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ec-header-bottons",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ec-header-user dropdown",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "dropdown-toggle",
                                                "data-bs-toggle": "dropdown",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fi-rr-user"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "dropdown-menu dropdown-menu-right",
                                                children: token ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "dropdown-item",
                                                        style: {
                                                            cursor: "pointer"
                                                        },
                                                        onClick: logoutHandler,
                                                        children: "Logout"
                                                    })
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: "dropdown-item",
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            onClick: toggleLoginSidebarModal,
                                                            children: "Login"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        onClick: cartHandler,
                                        className: "ec-header-btn ec-side-toggle",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "header-icon",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fi-rr-shopping-bag"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                style: {
                                                    zIndex: 0
                                                },
                                                className: "ec-header-count cart-count-lable",
                                                children: cartItems ? cartItems.length : 0
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "ec-header-btn ec-side-toggle d-lg-none"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ec-header-bottom d-none d-lg-block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container position-relative",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "ec-flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "align-self-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "header-logo",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Navbar.Brand, {
                                                    href: "/",
                                                    children: "Brand link"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "ec-header-bottom d-none d-lg-block",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "align-self-center ec-header-search",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "header-search",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                        className: "ec-search-group-form",
                                                        action: "#",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "form-control ec-search-bar",
                                                                onChange: searchProductHandle,
                                                                value: product,
                                                                type: "text",
                                                                name: "product-search",
                                                                id: "product-search",
                                                                placeholder: "Search Products"
                                                            }),
                                                            product.length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "dropdown search-dropdown-list",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                    className: "",
                                                                    children: filteredProducts.length !== 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: filteredProducts.map((item, index)=>{
                                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                className: "dropdown",
                                                                                onClick: searchProductOff,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                                    href: `/product/${item.product_id}`,
                                                                                    children: item.product_name
                                                                                })
                                                                            }, index);
                                                                        })
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            className: "dropdown",
                                                                            children: "No Product Found"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "align-self-center",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "ec-header-bottons",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "ec-header-user dropdown",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                className: "dropdown-toggle",
                                                                "data-bs-toggle": "dropdown",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-rr-user"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                className: "dropdown-menu dropdown-menu-right",
                                                                children: token ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "dropdown-item",
                                                                        style: {
                                                                            cursor: "pointer"
                                                                        },
                                                                        onClick: logoutHandler,
                                                                        children: "Logout"
                                                                    })
                                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            className: "dropdown-item",
                                                                            style: {
                                                                                cursor: "pointer"
                                                                            },
                                                                            onClick: toggleLoginSidebarModal,
                                                                            children: "Login"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        // href={"/cart"}
                                                        onClick: cartHandler,
                                                        className: "ec-header-btn position-relative",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "header-icon",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "fi-rr-shopping-bag"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    style: {
                                                                        position: "absolute",
                                                                        bottom: -4,
                                                                        right: -10
                                                                    },
                                                                    className: "badge rounded-pill bg-secondary",
                                                                    children: [
                                                                        " ",
                                                                        cartItems ? cartItems.length : 0
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ec-header-bottom d-lg-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container position-relative",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "header-logo",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Image, {
                                                        src: "/logo.png",
                                                        alt: "Site Logo",
                                                        style: {
                                                            width: "160px"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.Image, {
                                                        className: "dark-logo",
                                                        src: "assets/images/logo/dark-logo.png",
                                                        alt: "Site Logo",
                                                        style: {
                                                            display: "none"
                                                        }
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "header-search",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                className: "ec-search-group-form",
                                                action: "#",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        className: "form-control ec-search-bar",
                                                        onChange: searchProductHandle,
                                                        value: product,
                                                        type: "text",
                                                        name: "product-search",
                                                        id: "product-search",
                                                        placeholder: "Search Products"
                                                    }),
                                                    product.length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "dropdown search-dropdown-list",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                            className: "",
                                                            children: filteredProducts.length !== 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: filteredProducts.map((item, index)=>{
                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        className: "dropdown",
                                                                        onClick: searchProductOff,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                            href: `/product/${item.product_id}`,
                                                                            children: item.product_name
                                                                        })
                                                                    }, index);
                                                                })
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    className: "dropdown",
                                                                    children: "No Product Found"
                                                                })
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7675);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7875);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_2__]);
_Header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Layout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);





const Navbar = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const getCategories = async ()=>{
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/get_category.php`);
        const data = await response.json();
        if (data.status) {
            setCategories(data.GTS);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getCategories();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "ec-main-menu-desk",
            className: "sticky-nav navbar-menu-responsive",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container position-relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-md-12 align-self-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "ec-main-menu",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: `${router.pathname === "/" ? "active" : ""}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: `dropdown ${router.pathname === "/product" || router.pathname === "/product/`[productId]`" ? "active" : ""}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/product",
                                            children: "Products"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 6505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_SidebarModal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1337);
/* harmony import */ var _styles_SidebarModal_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_SidebarModal_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9711);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1598);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3559);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5491);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4198);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__, react_toastify__WEBPACK_IMPORTED_MODULE_11__]);
([_components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__, react_toastify__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_9__.Provider, {
        store: _store_store__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_11__.ToastContainer, {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                newestOnTop: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: "light"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "gy": () => (/* binding */ removeToken),
/* harmony export */   "jM": () => (/* binding */ updateToken)
/* harmony export */ });
/* unused harmony export locationSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

let initialToken;
if (false) {}
const locationSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "location",
    initialState: {
        token: initialToken
    },
    reducers: {
        updateToken: (state, action)=>{
            state.token = action.payload;
            localStorage.setItem("token", action.payload);
        },
        removeToken: (state)=>{
            state.token = "";
            localStorage.removeItem("token");
        }
    }
});
const { updateToken , removeToken  } = locationSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locationSlice.reducer);


/***/ }),

/***/ 4198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ store)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./src/redux/localtionSlice.tsx
var localtionSlice = __webpack_require__(1818);
;// CONCATENATED MODULE: ./src/redux/CartSlice.tsx

const initialState = {
    items: [],
    totalPrice: 0
};
const cartSlice = (0,toolkit_.createSlice)({
    name: "cart",
    initialState: getInitialState(),
    reducers: {
        addItem: (state, action)=>{
            const existingItem = state.items.find((item)=>item.id == action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
                state.totalPrice += existingItem.price;
            } else {
                state.totalPrice += action.payload.price;
                state.items.push({
                    ...action.payload,
                    quantity: 1
                });
            }
            localStorage.setItem("cartItems", JSON.stringify({
                items: state.items,
                totalPrice: state.totalPrice
            }));
        },
        removeItem: (state, action)=>{
            const item = state.items.find((item)=>item.id == action.payload);
            if (item) {
                state.totalPrice -= item.price;
            }
            state.items = state.items.filter((item)=>item.id !== action.payload);
            localStorage.setItem("cartItems", JSON.stringify({
                items: state.items,
                totalPrice: state.totalPrice
            }));
        },
        increaseQty: (state, action)=>{
            const item = state.items.find((item)=>item.id == action.payload);
            if (item) {
                item.quantity += 1;
                state.totalPrice += item.price;
                localStorage.setItem("cartItems", JSON.stringify({
                    items: state.items,
                    totalPrice: state.totalPrice
                }));
            }
        },
        decreaseQty: (state, action)=>{
            const item = state.items.find((item)=>item.id == action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalPrice -= item.price;
                localStorage.setItem("cartItems", JSON.stringify({
                    items: state.items,
                    totalPrice: state.totalPrice
                }));
            }
        },
        emptyTheCart: (state)=>{
            state.items = [];
            state.totalPrice = 0;
            localStorage.setItem("cartItems", JSON.stringify({
                items: [],
                totalPrice: 0
            }));
        }
    }
});
function getInitialState() {
    const storedState =  false && 0;
    if (storedState) {
        const parsedState = JSON.parse(storedState);
        if (parsedState) {
            return {
                ...initialState,
                ...parsedState
            };
        }
    }
    return initialState;
}
const { addItem , removeItem , increaseQty , decreaseQty , emptyTheCart  } = cartSlice.actions;
/* harmony default export */ const CartSlice = (cartSlice.reducer);

;// CONCATENATED MODULE: ./src/store/store.ts



/* harmony default export */ const store = ((0,toolkit_.configureStore)({
    reducer: {
        location: localtionSlice/* default */.ZP,
        cart: CartSlice
    }
}));


/***/ }),

/***/ 9711:
/***/ (() => {



/***/ }),

/***/ 3559:
/***/ (() => {



/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 7311:
/***/ (() => {



/***/ }),

/***/ 1598:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 1337:
/***/ (() => {



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152,598,676,664], () => (__webpack_exec__(6505)));
module.exports = __webpack_exports__;

})();