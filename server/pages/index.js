(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 513:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "axios"
var external_axios_namespaceObject = require("axios");;
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.js




function Home({
  joke
}) {
  const {
    0: name,
    1: setName
  } = (0,external_react_.useState)("");
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)([]);
  const {
    0: status,
    1: setStatus
  } = (0,external_react_.useState)("IDLE");

  const handleClick = async () => {
    try {
      var _resp$data$country, _resp$data;

      setData([]);
      setStatus("PENDING");
      /** Data fetched from our endpint */

      const resp = await external_axios_default().get(`/api/${name}`);
      console.log(resp);
      setData((_resp$data$country = resp === null || resp === void 0 ? void 0 : (_resp$data = resp.data) === null || _resp$data === void 0 ? void 0 : _resp$data.country) !== null && _resp$data$country !== void 0 ? _resp$data$country : []);
      setStatus("IDLE");
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("main", {
    className: "app",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: "app-wrapper",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "Predict the nationality of your name \uD83D\uDDFA"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "name",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            htmlFor: "name-age",
            children: "Enter your name:"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            id: "name-age",
            value: name,
            onChange: e => setName(e.target.value)
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          disabled: name === "",
          onClick: handleClick,
          children: "Check!"
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Probabilities are:"
        }), status === "PENDING" && /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Loading \u231B"
        }), status === "ERROR" && /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "An error occurred \uD83D\uDE31"
        }), status === "IDLE" && /*#__PURE__*/jsx_runtime_.jsx("ul", {
          children: data.length > 0 ? data.map((c, i) => {
            var _data$i, _data$i2;

            return /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: `${Math.floor(((_data$i = data[i]) === null || _data$i === void 0 ? void 0 : _data$i.probability) * 100)}% ➡ ${(_data$i2 = data[i]) === null || _data$i2 === void 0 ? void 0 : _data$i2.country_id}`
            }, i);
          }) : "No data 🤷‍♂️"
        })]
      }), joke ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: "Bonus SSR joke:"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: joke.setup
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: joke.punchline
        })]
      }) : "No jokes 😢"]
    })
  });
} // Make this page SSR and get some data.

async function getServerSideProps() {
  try {
    const resp = await external_axios_default().get(`https://official-joke-api.appspot.com/random_joke`);
    return {
      props: {
        joke: resp.data
      }
    };
  } catch {
    return {
      props: {
        joke: null
      }
    };
  }
}

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(513));
module.exports = __webpack_exports__;

})();