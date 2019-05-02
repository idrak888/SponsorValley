webpackHotUpdate("static\\development\\pages\\seek\\signup.js",{

/***/ "./pages/seek/signup/index.js":
/*!************************************!*\
  !*** ./pages/seek/signup/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../layouts/main */ "./layouts/main.js");








var _jsxFileName = "C:\\Users\\hp\\Desktop\\Idrak\\SponsorValley\\final-app\\pages\\seek\\signup\\index.js";




var SeekerSignUp =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SeekerSignUp, _Component);

  function SeekerSignUp() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SeekerSignUp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SeekerSignUp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "signUpUser", function () {
      var loader = document.querySelector('.loader');
      var policy = document.querySelector('.policy');
      var err = document.querySelector('.err');
      var companyName = document.getElementById('compName').value;
      var name = document.getElementById('name').value;
      var email1 = document.getElementById('email1').value;
      var productType = document.getElementById('productType').value;
      var compSize = document.getElementById('compSize').value;
      var compTargets = document.getElementById('compTargets').value;
      var password = document.getElementById('password').value;
      var userObj = {
        name: name,
        companyName: companyName,
        email1: email1,
        productType: productType,
        compSize: compSize,
        compTargets: compTargets
      };
      console.log(userObj);
      firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().createUserWithEmailAndPassword(email1, password).then(function () {
        var user = firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser;
        var uid = user.uid;
        var providerData = user.providerData;
        policy.innerHTML = 'Creating account...';
        var db = firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"]();
        db.collection("users").add({
          type: 'sponsor account',
          name: userObj.name,
          companyName: userObj.companyName,
          email1: userObj.email1,
          productType: userObj.productType,
          compSize: userObj.compSize,
          compTargets: userObj.compTargets
        }).then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
          localStorage.setItem('user', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(userObj));
          localStorage.setItem('userId', docRef.id);
          setTimeout(function () {
            policy.style.innerHTML = 'By clicking, I accept the Terms of Service Your privacy is protected.';
            window.location = '/#/dashboard/' + docRef.id;
          }, 2000);
        }).catch(function (error) {
          console.error("Error adding document: ", error);
          err.innerHTML = error.message;
        });
      }).catch(function (error) {
        // Handle Errors here.
        var errorMessage = error.message;
        err.innerHTML = error;
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "ShowPage1", function () {
      var page1 = document.querySelector('.page1');
      var page2 = document.querySelector('.page2');
      page1.style.display = 'block';
      page2.style.display = 'none';
      document.body.scrollTop = 0; // For Safari

      document.documentElement.scrollTop = 0;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "ShowPage2", function () {
      var page1 = document.querySelector('.page1');
      var page2 = document.querySelector('.page2');
      var err = document.querySelector('.msg');
      var inputs = document.querySelectorAll('.page1 input');
      var empty = false;

      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
          console.log('Empty');
          err.innerHTML = 'Please fill up all the blanks.';
          empty = true;
          setTimeout(function () {
            err.innerHTML = '';
          }, 1400);
          break;
        }
      }

      if (empty == false) {
        page2.style.display = 'block';
        page1.style.display = 'none';
        document.body.scrollTop = 0; // For Safari

        document.documentElement.scrollTop = 0;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "platformChange", function (e) {
      console.log(e.target.value);
      var input = document.querySelector('.platformOther');

      if (e.target.value == 'other') {
        input.style.display = 'block';
        input.classList.add('input');
      } else {
        input.style.display = 'none';
        input.classList.remove('input');
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "categoryChange", function (e) {
      var input = document.querySelector('.categoryOther');

      if (e.target.value == 'other') {
        input.style.display = 'block';
        input.classList.add('input');
      } else {
        input.style.display = 'none';
        input.classList.remove('input');
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SeekerSignUp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.querySelector('.page2').style.display = 'none';
      document.body.scrollTop = 0; // For Safari

      document.documentElement.scrollTop = 0;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "SponsorSignUp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_layouts_main__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "Banner no-height",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Start finding sponsors"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Want to be a sponsor instead? Open a ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        onClick: this.toSignUp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "sponsor"), " profile..."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "page1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Basic information"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "input",
        id: "name",
        type: "text",
        placeholder: "Your Name/Your Brand Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "input",
        id: "email",
        type: "text",
        name: "name",
        placeholder: "Your Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("textarea", {
        className: "input",
        id: "who",
        rows: "6",
        cols: "20",
        placeholder: "What do you do briefly? (min. words: 15)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xs-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Main platform: ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xs-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
        id: "platform",
        onChange: this.platformChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "youtube",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Youtube"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Blog"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "streamer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Streamer"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Event promoter"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "other",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Other (please mention below)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "platformOther",
        className: "platformOther",
        type: "text",
        placeholder: "Your main platform",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xs-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "Category: ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xs-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
        id: "category",
        onChange: this.categoryChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "tech",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "Tech"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "humour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "Humor"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "gaming",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "Gaming"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "finance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "Finance"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "food",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Food"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "fashionandlife",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "Fashion and Lifestyle"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "automobiles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Automobiles"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "science",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Science"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "other",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Other (please mention below)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        id: "categoryOther",
        className: "categoryOther",
        type: "text",
        placeholder: "Your category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), "Business link: ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "input",
        id: "businessLink",
        type: "text",
        placeholder: "Link to your platform's profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.ShowPage2,
        className: "btn btn-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "continue"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "text-danger msg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "err text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "page2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "Login and bank information"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        onClick: this.ShowPage1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "input",
        id: "password",
        type: "password",
        name: "password",
        placeholder: "Create a password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "Paypal account"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://cdn-images-1.medium.com/max/1200/1*Dw4-tOJ_9myFUywLd3qzjA.png",
        width: "120",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "input",
        type: "text",
        placeholder: "paypal info...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "input",
        type: "password",
        placeholder: "paypal info...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "align-left policy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "By clicking, I accept the Terms of Service Your privacy is protected."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        className: "loader",
        width: "70",
        src: "https://www.unlimitedvacationclub.com/assets/images/loading.gif",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn btn-success",
        onClick: this.signUpUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "Create account"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "err2 text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      })));
    }
  }]);

  return SeekerSignUp;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SeekerSignUp);

/***/ })

})
//# sourceMappingURL=signup.js.6e515f8050ebbad47f4d.hot-update.js.map