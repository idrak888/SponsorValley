webpackHotUpdate("static\\development\\pages\\dashboard.js",{

/***/ "./components/SponsorDash.js":
/*!***********************************!*\
  !*** ./components/SponsorDash.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SponsorModule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SponsorModule */ "./components/SponsorModule.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "C:\\Users\\hp\\Desktop\\Idrak\\SponsorValley\\final-app\\components\\SponsorDash.js";



 // import AddNew from './AddNew';

var SponsorDash =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SponsorDash, _Component);

  function SponsorDash() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SponsorDash);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SponsorDash)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      logoUrl: '',
      sponsors: [],
      partners: [{
        name: 'TierZoo',
        status: 'Unfinished'
      }, {
        name: 'Samonella Academy',
        status: 'Completed'
      }, {
        name: 'Playbox8G',
        status: 'Cancelled'
      }],
      notifications: ['New request from Playbox8G', 'TierZoo: "Please send me your website link..."', 'New request from The Inforgraphics Show', 'Sponsorship with TierZoo was confirmed', 'Payment was completed successfully']
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showPopup", function () {
      document.querySelector('.select-logo').style.display = 'block';
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closePopup", function () {
      document.querySelector('.select-logo').style.display = 'none';
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "uploadLogo", function (e) {
      e.preventDefault();
      var uploadBtn = document.querySelector('.upload-btn');
      var loader = document.querySelector('.loader');
      var storageRef = firebase__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref();
      uploadBtn.disabled = true;
      loader.style.display = 'inline-block'; // File or Blob named mountains.jpg

      var file = document.querySelector('#file').files; // Create the file metadata

      var metadata = {
        contentType: 'image/jpeg'
      }; // Upload file and metadata to the object 'images/mountains.jpg'

      var uploadTask = storageRef.child(_this.props.companyName + '/image').put(file[0], metadata); // Listen for state changes, errors, and completion of the upload.

      uploadTask.on(firebase__WEBPACK_IMPORTED_MODULE_9__["storage"].TaskEvent.STATE_CHANGED, // or 'state_changed'
      function (snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        console.log('Upload is ' + progress + '% done');

        switch (snapshot.state) {
          case firebase__WEBPACK_IMPORTED_MODULE_9__["storage"].TaskState.PAUSED:
            // or 'paused'
            console.log('Upload is paused');
            break;

          case firebase__WEBPACK_IMPORTED_MODULE_9__["storage"].TaskState.RUNNING:
            // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function (error) {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

          case 'storage/canceled':
            // User canceled the upload
            break;

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      }, function () {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          uploadBtn.disabled = false;
          window.location.reload();
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showAddNew", function () {// document.querySelector('.AddNew').style.display = 'block';
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderSponsors", function () {
      if (_this.state.sponsors.length == 0) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: "text-secondary no-sponsors",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, "No sponsorships yet. Start by adding");
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showLogo", function () {
      if (_this.state.logoUrl == '') {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "enter-logo",
          onClick: _this.showPopup,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, "Display your logo here!"));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: _this.state.logoUrl,
          onClick: _this.showPopup,
          className: "companyLogo img-fluid",
          width: "100",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SponsorDash, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.body.scrollTop = 0; // For Safari

      document.documentElement.scrollTop = 0;
      console.log(this.props.id);
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://desolate-cove-35133.herokuapp.com/sponsors/" + localStorage.getItem('userId')).then(function (doc) {
        _this2.setState({
          sponsors: doc.data
        });
      });
      setTimeout(function () {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_9__["storage"]().ref(_this2.props.companyName + '/' + 'image');
        storageRef.getDownloadURL().then(function (url) {
          _this2.setState({
            logoUrl: url
          });
        }).catch(function (error) {});
      }, 10);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "SponsorDash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "select-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "cross",
        onClick: this.closePopup,
        src: "/static/widgets/cross.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Upload new logo"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        id: "file",
        type: "file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "loader",
        width: "40",
        src: "https://www.unlimitedvacationclub.com/assets/images/loading.gif",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-success upload-btn",
        onClick: this.uploadLogo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Upload"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "msg text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "Top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Dashboard")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box responsive box1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, this.showLogo(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, this.props.companyName), this.props.companyType, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), "Email: ", this.props.email), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Notifications"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "notifications",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, this.state.notifications.map(function (n) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "notification",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "text-secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, n));
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row desktop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box box1 side",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Open Sponsorships"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Quick find"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "search",
        placeholder: "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }), this.renderSponsors(), this.state.sponsors.map(function (i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SponsorModule__WEBPACK_IMPORTED_MODULE_8__["default"], {
          companyName: i.by,
          min: i.priceRange.minprice,
          max: i.priceRange.maxprice,
          description: i.description,
          date: i.dateCreated,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "box box1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, this.showLogo(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, this.props.companyName), this.props.companyType, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), "Email: ", this.props.email), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Notifications"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "notifications",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, this.state.notifications.map(function (n) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "notification",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "text-secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, n));
      }))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "Your partnerships"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "slide-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, this.state.partners.map(function (p) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "box box2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
          className: "text-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, p.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }), "Status: ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: "text-secondary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, p.status));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "sponsor-module-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Open sponsorships by ", this.props.companyName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", {
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "/dashboard/addnew",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, "Add new +"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), this.renderSponsors(), this.state.sponsors.map(function (i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SponsorModule__WEBPACK_IMPORTED_MODULE_8__["default"], {
          companyName: i.by,
          min: i.priceRange.minprice,
          max: i.priceRange.maxprice,
          description: i.description,
          date: i.dateCreated,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          __self: this
        });
      })));
    }
  }]);

  return SponsorDash;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SponsorDash);

/***/ })

})
//# sourceMappingURL=dashboard.js.bd943842aa04cd86444d.hot-update.js.map