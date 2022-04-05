(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_pages_domain_Domain_jsx"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/components/breadcrumbs/BreadCrumbs.jsx":
/*!****************************************************!*\
  !*** ./src/components/breadcrumbs/BreadCrumbs.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/ChevronRightIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var BreadCrumbs = function BreadCrumbs(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("nav", {
    className: " rounded-md w-full mb-2",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ol", {
      className: "list-reset flex",
      children: data.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [index === data.length - 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
              to: item.to,
              className: "text-gray-800 hover:text-gray-900 ",
              children: item.title
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
              to: item.to,
              className: "text-slate-500 hover:text-gray-700 hover:underline ",
              children: item.title
            })
          }), index < data.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "w-[1.1rem] h-[1.1rem] text-gray-500 mx-1 self-center"
          }) // <li><span className="text-gray-500 mx-2">{">"}</span></li>
          ]
        }, index);
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadCrumbs);

/***/ }),

/***/ "./src/constants/global.js":
/*!*********************************!*\
  !*** ./src/constants/global.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGES": () => (/* binding */ PAGES),
/* harmony export */   "RANGER_DATE_CALENDAR": () => (/* binding */ RANGER_DATE_CALENDAR)
/* harmony export */ });
var RANGER_DATE_CALENDAR = "1900:2100";
var PAGES = [5, 10, 20, 50, 100];

/***/ }),

/***/ "./src/pages/domain/Domain.jsx":
/*!*************************************!*\
  !*** ./src/pages/domain/Domain.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column/column.esm.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable/datatable.esm.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/EyeIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/PencilIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/TrashIcon.js");
/* harmony import */ var primereact_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/paginator */ "./node_modules/primereact/paginator/paginator.esm.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _constants_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/global */ "./src/constants/global.js");
/* harmony import */ var _constants_routerMain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/routerMain */ "./src/constants/routerMain.js");
/* harmony import */ var _components_breadcrumbs_BreadCrumbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/breadcrumbs/BreadCrumbs */ "./src/components/breadcrumbs/BreadCrumbs.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var Domain = function Domain() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var data = [{
    name: 'CyberSign',
    domain: '10.30.1.15',
    type: 1,
    time_start: '2022-22-02',
    time_end: '2022-22-03'
  }, {
    name: 'CyberDev',
    domain: '10.30.1.200',
    type: 1,
    time_start: '2022-22-02',
    time_end: '2022-22-03'
  }, {
    name: 'CyberDev',
    domain: '10.30.1.200',
    type: 1,
    time_start: '2022-22-02',
    time_end: '2022-22-03'
  }, {
    name: 'CyberDev',
    domain: '10.30.1.200',
    type: 1,
    time_start: '2022-22-02',
    time_end: '2022-22-03'
  }, {
    name: 'CyberDev',
    domain: '10.30.1.200',
    type: 1,
    time_start: '2022-22-02',
    time_end: '2022-22-03'
  }, {
    name: 'CyberDev',
    domain: '10.30.1.200',
    type: 1,
    time_start: '2022-22-02',
    time_end: '2022-22-03'
  }, {
    name: 'CyberDev',
    domain: '10.30.1.200',
    type: 1,
    time_start: '2022-22-02',
    time_end: '2022-22-03'
  }, {
    name: 'CyberDev',
    domain: '10.30.1.200',
    type: 1,
    time_start: '2022-22-02',
    time_end: '2022-22-03'
  }, {
    name: 'CyberDev',
    domain: '10.30.1.200',
    type: 1,
    time_start: '2022-22-02',
    time_end: '2022-22-03'
  }];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedDatas = _useState2[0],
      setSelectedDatas = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    from: 0,
    to: 0,
    row: 10,
    total: 0,
    page: 1
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      pagination = _useState4[0],
      setPagination = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    text_search: ""
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      dataSearch = _useState6[0],
      setDataSearch = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    page: 1,
    row: 10,
    text_search: "",
    date: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      filters = _useState8[0],
      setFilters = _useState8[1];

  var renderRowIndex = function renderRowIndex(rowData, column) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: column.rowIndex + pagination.from
    });
  };

  var _onPageChange = function onPageChange(event) {
    setFilters(_objectSpread(_objectSpread({}, filters), {}, {
      row: event.rows,
      page: event.page + 1
    }));
  };

  var onSearchClick = function onSearchClick(e) {
    e.preventDefault();
    setFilters(_objectSpread(_objectSpread(_objectSpread({}, filters), dataSearch), {}, {
      page: 1
    }));
  }; // tìm kiếm


  var onChangeDataSearch = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var name, value;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = e.target.name;
              value = e.target.value;
              setDataSearch(_objectSpread(_objectSpread({}, dataSearch), {}, _defineProperty({}, name, value)));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onChangeDataSearch(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var actionBodyTemplate = function actionBodyTemplate(rowData) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "w-5 h-5 text-blue-500 mr-2 cursor-pointer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_11__["default"], {
          className: "w-5 h-5 text-green-500 mr-2 cursor-pointer"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: "w-5 h-5 text-red-500 cursor-pointer"
        })]
      })
    });
  };

  var dataBread = [{
    title: 'Home',
    to: _constants_routerMain__WEBPACK_IMPORTED_MODULE_6__["default"].HOME
  }, {
    title: 'Domain',
    to: _constants_routerMain__WEBPACK_IMPORTED_MODULE_6__["default"].DOMAIN
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_breadcrumbs_BreadCrumbs__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: dataBread
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "w-full py-6 px-6 rounded-md bg-white shadow-md dark:bg-gray-800",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h1", {
        className: "text-lg font-medium mb-3",
        children: "Domain"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(primereact_datatable__WEBPACK_IMPORTED_MODULE_3__.DataTable, {
        showGridlines: true,
        responsiveLayout: "scroll",
        selectionMode: "checkbox",
        rowHover: true,
        value: data,
        selection: selectedDatas // loading={loading}
        ,
        className: " table-word-break",
        emptyMessage: "Kh\xF4ng c\xF3 b\u1EA3n ghi",
        onSelectionChange: function onSelectionChange(e) {
          return setSelectedDatas(e.value);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(primereact_column__WEBPACK_IMPORTED_MODULE_2__.Column, {
          selectionMode: "multiple",
          className: "stt-table",
          bodyClassName: "p-text-center"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(primereact_column__WEBPACK_IMPORTED_MODULE_2__.Column, {
          body: renderRowIndex,
          header: "#",
          className: "stt-table",
          bodyClassName: "p-text-center"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(primereact_column__WEBPACK_IMPORTED_MODULE_2__.Column, {
          field: "name",
          header: "Name",
          sortable: true,
          className: "min-wr--10 wr--10"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(primereact_column__WEBPACK_IMPORTED_MODULE_2__.Column, {
          field: "domain",
          header: "Domain",
          sortable: true,
          className: "min-wr--12 wr--12 "
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(primereact_column__WEBPACK_IMPORTED_MODULE_2__.Column, {
          field: "type",
          header: "Type",
          sortable: true,
          className: "min-wr--9 wr--9 min-wr-xl-10 wr-xl-10"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(primereact_column__WEBPACK_IMPORTED_MODULE_2__.Column, {
          field: "time_start",
          header: "Th\u1EDDi h\u1EA1n",
          sortable: true,
          className: "min-wr--9 wr--9 min-wr-xl-10 wr-xl-10"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(primereact_column__WEBPACK_IMPORTED_MODULE_2__.Column, {
          header: "Action",
          body: actionBodyTemplate,
          className: "header-center min-wr--12 wr--12",
          bodyClassName: "p-text-center"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex flex-wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "text-normal mt-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
            children: [intl.formatMessage({
              id: "SHOW_FROM"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: pagination.from
            }), " ", intl.formatMessage({
              id: "TO"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: pagination.to
            }), " / ", intl.formatMessage({
              id: "SUM"
            }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
              children: pagination.total
            }), " ", intl.formatMessage({
              id: "RECORD"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "ml-auto mt-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(primereact_paginator__WEBPACK_IMPORTED_MODULE_4__.Paginator, {
            first: pagination.from - 1,
            rows: +pagination.row,
            totalRecords: pagination.total,
            rowsPerPageOptions: _constants_global__WEBPACK_IMPORTED_MODULE_5__.PAGES,
            onPageChange: function onPageChange(event) {
              return _onPageChange(event);
            },
            template: " RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink" // pageLinkSize={pageLimit}

          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Domain);

/***/ }),

/***/ "./node_modules/primereact/button/button.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/primereact/button/button.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "ButtonComponent": () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/tooltip */ "./node_modules/primereact/tooltip/tooltip.esm.js");
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");





function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ButtonComponent = /*#__PURE__*/function (_Component) {
  _inherits(ButtonComponent, _Component);

  var _super = _createSuper(ButtonComponent);

  function ButtonComponent(props) {
    var _this;

    _classCallCheck(this, ButtonComponent);

    _this = _super.call(this, props);
    _this.elementRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(_this.props.forwardRef);
    return _this;
  }

  _createClass(ButtonComponent, [{
    key: "updateForwardRef",
    value: function updateForwardRef() {
      var ref = this.props.forwardRef;

      if (ref) {
        if (typeof ref === 'function') {
          ref(this.elementRef.current);
        } else {
          ref.current = this.elementRef.current;
        }
      }
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      return this.props.disabled || this.props.loading;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateForwardRef();

      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
        if (this.tooltip) this.tooltip.update(_objectSpread({
          content: this.props.tooltip
        }, this.props.tooltipOptions || {}));else this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = (0,primereact_tooltip__WEBPACK_IMPORTED_MODULE_2__.tip)({
        target: this.elementRef.current,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var icon = this.props.loading ? this.props.loadingIcon : this.props.icon;
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-button-icon p-c', {
        'p-button-loading-icon': this.props.loading,
        'p-button-icon-left': this.props.iconPos === 'left' && this.props.label,
        'p-button-icon-right': this.props.iconPos === 'right' && this.props.label,
        'p-button-icon-top': this.props.iconPos === 'top' && this.props.label,
        'p-button-icon-bottom': this.props.iconPos === 'bottom' && this.props.label
      });
      return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.IconUtils.getJSXIcon(icon, {
        className: className
      }, {
        props: this.props
      });
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      if (this.props.label) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "p-button-label p-c"
        }, this.props.label);
      }

      return !this.props.children && !this.props.label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "p-button-label p-c",
        dangerouslySetInnerHTML: {
          __html: "&nbsp;"
        }
      });
    }
  }, {
    key: "renderBadge",
    value: function renderBadge() {
      if (this.props.badge) {
        var badgeClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-badge', this.props.badgeClassName);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: badgeClassName
        }, this.props.badge);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var disabled = this.isDisabled();
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-button p-component', this.props.className, _defineProperty({
        'p-button-icon-only': (this.props.icon || this.props.loading && this.props.loadingIcon) && !this.props.label,
        'p-button-vertical': (this.props.iconPos === 'top' || this.props.iconPos === 'bottom') && this.props.label,
        'p-disabled': disabled,
        'p-button-loading': this.props.loading,
        'p-button-loading-label-only': this.props.loading && !this.props.icon && this.props.label
      }, "p-button-loading-".concat(this.props.iconPos), this.props.loading && this.props.loadingIcon && this.props.label));
      var icon = this.renderIcon();
      var label = this.renderLabel();
      var badge = this.renderBadge();
      var buttonProps = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findDiffKeys(this.props, ButtonComponent.defaultProps);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", _extends({
        ref: this.elementRef
      }, buttonProps, {
        className: className,
        disabled: disabled
      }), icon, label, this.props.children, badge, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, null));
    }
  }]);

  return ButtonComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(ButtonComponent, "defaultProps", {
  label: null,
  icon: null,
  iconPos: 'left',
  badge: null,
  badgeClassName: null,
  tooltip: null,
  tooltipOptions: null,
  forwardRef: null,
  disabled: false,
  loading: false,
  loadingIcon: 'pi pi-spinner pi-spin'
});

var Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonComponent, _extends({
    forwardRef: ref
  }, props));
});




/***/ }),

/***/ "./node_modules/primereact/column/column.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/primereact/column/column.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Column": () => (/* binding */ Column)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Column = /*#__PURE__*/function (_Component) {
  _inherits(Column, _Component);

  var _super = _createSuper(Column);

  function Column() {
    _classCallCheck(this, Column);

    return _super.apply(this, arguments);
  }

  return _createClass(Column);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Column, "defaultProps", {
  columnKey: null,
  field: null,
  sortField: null,
  filterField: null,
  exportField: null,
  header: null,
  body: null,
  footer: null,
  sortable: false,
  sortableDisabled: false,
  sortFunction: null,
  dataType: 'text',
  filter: false,
  filterMatchMode: null,
  filterPlaceholder: null,
  filterType: 'text',
  filterMaxLength: null,
  filterElement: null,
  filterFunction: null,
  filterHeaderStyle: null,
  filterHeaderClassName: null,
  showFilterMenu: true,
  showFilterOperator: true,
  showClearButton: true,
  showApplyButton: true,
  showFilterMatchModes: true,
  showFilterMenuOptions: true,
  showAddButton: true,
  filterMatchModeOptions: null,
  maxConstraints: 2,
  filterMenuClassName: null,
  filterMenuStyle: null,
  align: null,
  alignHeader: null,
  alignFrozen: 'left',
  hidden: false,
  onFilterClear: null,
  onFilterApplyClick: null,
  onFilterMatchModeChange: null,
  onFilterOperatorChange: null,
  onFilterConstraintAdd: null,
  onFilterConstraintRemove: null,
  filterClear: null,
  filterApply: null,
  filterHeader: null,
  filterFooter: null,
  style: null,
  className: null,
  headerStyle: null,
  headerClassName: null,
  bodyStyle: null,
  bodyClassName: null,
  footerStyle: null,
  footerClassName: null,
  expander: false,
  frozen: false,
  selectionMode: null,
  colSpan: null,
  rowSpan: null,
  editor: null,
  cellEditValidator: null,
  cellEditValidatorEvent: 'click',
  onBeforeCellEditHide: null,
  onBeforeCellEditShow: null,
  onCellEditInit: null,
  onCellEditComplete: null,
  onCellEditCancel: null,
  excludeGlobalFilter: false,
  rowReorder: false,
  rowReorderIcon: 'pi pi-bars',
  rowEditor: false,
  exportable: true,
  reorderable: true
});




/***/ }),

/***/ "./node_modules/primereact/datatable/datatable.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/primereact/datatable/datatable.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTable": () => (/* binding */ DataTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var primereact_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/paginator */ "./node_modules/primereact/paginator/paginator.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");
/* harmony import */ var primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/overlayservice */ "./node_modules/primereact/overlayservice/overlayservice.esm.js");
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");
/* harmony import */ var primereact_csstransition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/csstransition */ "./node_modules/primereact/csstransition/csstransition.esm.js");
/* harmony import */ var primereact_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/portal */ "./node_modules/primereact/portal/portal.esm.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext/inputtext.esm.js");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown/dropdown.esm.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button/button.esm.js");
/* harmony import */ var primereact_virtualscroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primereact/virtualscroller */ "./node_modules/primereact/virtualscroller/virtualscroller.esm.js");













function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RowRadioButton = /*#__PURE__*/function (_Component) {
  _inherits(RowRadioButton, _Component);

  var _super = _createSuper$c(RowRadioButton);

  function RowRadioButton(props) {
    var _this;

    _classCallCheck(this, RowRadioButton);

    _this = _super.call(this, props);
    _this.state = {
      focused: false
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RowRadioButton, [{
    key: "onClick",
    value: function onClick(event) {
      if (!this.props.disabled) {
        this.props.onChange(event);
        this.input.focus();
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      this.onClick(event);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.code === 'Space') {
        this.onClick(event);
        event.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-radiobutton p-component', {
        'p-radiobutton-focused': this.state.focused
      });
      var boxClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-radiobutton-box p-component', {
        'p-highlight': this.props.checked,
        'p-focus': this.state.focused,
        'p-disabled': this.props.disabled
      });
      var name = "".concat(this.props.tableSelector, "_dt_radio");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: className
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-hidden-accessible"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        name: name,
        ref: function ref(el) {
          return _this2.input = el;
        },
        type: "radio",
        checked: this.props.checked,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: boxClassName,
        onClick: this.onClick,
        role: "radio",
        "aria-checked": this.props.checked
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-radiobutton-icon"
      })));
    }
  }]);

  return RowRadioButton;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RowCheckbox = /*#__PURE__*/function (_Component) {
  _inherits(RowCheckbox, _Component);

  var _super = _createSuper$b(RowCheckbox);

  function RowCheckbox(props) {
    var _this;

    _classCallCheck(this, RowCheckbox);

    _this = _super.call(this, props);
    _this.state = {
      focused: false
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RowCheckbox, [{
    key: "onClick",
    value: function onClick(event) {
      if (!this.props.disabled) {
        this.setState({
          focused: true
        });
        this.props.onChange(event);
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.code === 'Space') {
        this.onClick(event);
        event.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-checkbox p-component', {
        'p-checkbox-focused': this.state.focused
      });
      var boxClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-checkbox-box p-component', {
        'p-highlight': this.props.checked,
        'p-disabled': this.props.disabled,
        'p-focus': this.state.focused
      });
      var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-checkbox-icon', {
        'pi pi-check': this.props.checked
      });
      var tabIndex = this.props.disabled ? null : '0';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: className,
        onClick: this.onClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: boxClassName,
        role: "checkbox",
        "aria-checked": this.props.checked,
        tabIndex: tabIndex,
        onKeyDown: this.onKeyDown,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: iconClassName
      })));
    }
  }]);

  return RowCheckbox;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$7(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var BodyCell = /*#__PURE__*/function (_Component) {
  _inherits(BodyCell, _Component);

  var _super = _createSuper$a(BodyCell);

  function BodyCell(props) {
    var _this;

    _classCallCheck(this, BodyCell);

    _this = _super.call(this, props);
    _this.state = {
      editing: props.editing,
      editingRowData: props.rowData,
      styleObject: {}
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onEditorFocus = _this.onEditorFocus.bind(_assertThisInitialized(_this));
    _this.onRowToggle = _this.onRowToggle.bind(_assertThisInitialized(_this));
    _this.onRadioChange = _this.onRadioChange.bind(_assertThisInitialized(_this));
    _this.onCheckboxChange = _this.onCheckboxChange.bind(_assertThisInitialized(_this));
    _this.onRowEditSave = _this.onRowEditSave.bind(_assertThisInitialized(_this));
    _this.onRowEditCancel = _this.onRowEditCancel.bind(_assertThisInitialized(_this));
    _this.onRowEditInit = _this.onRowEditInit.bind(_assertThisInitialized(_this));
    _this.editorCallback = _this.editorCallback.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BodyCell, [{
    key: "field",
    get: function get() {
      return this.getColumnProp('field') || "field_".concat(this.props.index);
    }
  }, {
    key: "isEditable",
    value: function isEditable() {
      return this.getColumnProp('editor');
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.props.selection ? this.props.selection instanceof Array ? this.findIndex(this.props.selection) > -1 : this.equals(this.props.selection) : false;
    }
  }, {
    key: "equalsData",
    value: function equalsData(data) {
      return this.props.compareSelectionBy === 'equals' ? data === this.props.rowData : primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(data, this.props.rowData, this.props.dataKey);
    }
  }, {
    key: "equals",
    value: function equals(selectedCell) {
      return (selectedCell.rowIndex === this.props.rowIndex || this.equalsData(selectedCell.rowData)) && (selectedCell.field === this.field || selectedCell.cellIndex === this.props.index);
    }
  }, {
    key: "isOutsideClicked",
    value: function isOutsideClicked(target) {
      return this.el && !(this.el.isSameNode(target) || this.el.contains(target));
    }
  }, {
    key: "getColumnProp",
    value: function getColumnProp(prop) {
      return this.props.column ? this.props.column.props[prop] : null;
    }
  }, {
    key: "getVirtualScrollerOption",
    value: function getVirtualScrollerOption(option) {
      return this.props.virtualScrollerOptions ? this.props.virtualScrollerOptions[option] : null;
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var bodyStyle = this.getColumnProp('bodyStyle');
      var columnStyle = this.getColumnProp('style');
      return this.getColumnProp('frozen') ? Object.assign({}, columnStyle, bodyStyle, this.state.styleObject) : Object.assign({}, columnStyle, bodyStyle);
    }
  }, {
    key: "getCellParams",
    value: function getCellParams() {
      return {
        value: this.resolveFieldData(),
        field: this.field,
        rowData: this.props.rowData,
        rowIndex: this.props.rowIndex,
        cellIndex: this.props.index,
        selected: this.isSelected(),
        column: this.props.column,
        props: this.props
      };
    }
  }, {
    key: "getCellCallbackParams",
    value: function getCellCallbackParams(event) {
      var params = this.getCellParams();
      return _objectSpread$7({
        originalEvent: event
      }, params);
    }
  }, {
    key: "resolveFieldData",
    value: function resolveFieldData(data) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data || this.props.rowData, this.field);
    }
  }, {
    key: "getEditingRowData",
    value: function getEditingRowData() {
      return this.props.editingMeta && this.props.editingMeta[this.props.rowIndex] ? this.props.editingMeta[this.props.rowIndex].data : this.props.rowData;
    }
  }, {
    key: "getTabIndex",
    value: function getTabIndex(cellSelected) {
      return this.props.allowCellSelection ? cellSelected ? 0 : this.props.rowIndex === 0 && this.props.index === 0 ? this.props.tabIndex : -1 : null;
    }
  }, {
    key: "findIndex",
    value: function findIndex(collection) {
      var _this2 = this;

      return (collection || []).findIndex(function (data) {
        return _this2.equals(data);
      });
    }
  }, {
    key: "closeCell",
    value: function closeCell(event) {
      var _this3 = this;

      var params = this.getCellCallbackParams(event);
      var onBeforeCellEditHide = this.getColumnProp('onBeforeCellEditHide');

      if (onBeforeCellEditHide) {
        onBeforeCellEditHide(params);
      }
      /* When using the 'tab' key, the focus event of the next cell is not called in IE. */


      setTimeout(function () {
        _this3.setState({
          editing: false
        }, function () {
          _this3.unbindDocumentEditListener();

          primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__.OverlayService.off('overlay-click', _this3.overlayEventListener);
          _this3.overlayEventListener = null;
        });
      }, 1);
    }
  }, {
    key: "switchCellToViewMode",
    value: function switchCellToViewMode(event, submit) {
      var callbackParams = this.getCellCallbackParams(event);
      var newRowData = this.state.editingRowData;
      var newValue = this.resolveFieldData(newRowData);

      var params = _objectSpread$7(_objectSpread$7({}, callbackParams), {}, {
        newRowData: newRowData,
        newValue: newValue
      });

      var onCellEditCancel = this.getColumnProp('onCellEditCancel');
      var cellEditValidator = this.getColumnProp('cellEditValidator');
      var onCellEditComplete = this.getColumnProp('onCellEditComplete');

      if (!submit && onCellEditCancel) {
        onCellEditCancel(params);
      }

      var valid = true;

      if (cellEditValidator) {
        valid = cellEditValidator(params);
      }

      if (valid) {
        if (submit && onCellEditComplete) {
          onCellEditComplete(params);
        }

        this.closeCell(event);
      } else {
        event.preventDefault();
      }
    }
  }, {
    key: "findNextSelectableCell",
    value: function findNextSelectableCell(cell) {
      var nextCell = cell.nextElementSibling;
      return nextCell ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(nextCell, 'p-selectable-cell') ? nextCell : this.findNextSelectableCell(nextCell) : null;
    }
  }, {
    key: "findPrevSelectableCell",
    value: function findPrevSelectableCell(cell) {
      var prevCell = cell.previousElementSibling;
      return prevCell ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(prevCell, 'p-selectable-cell') ? prevCell : this.findPrevSelectableCell(prevCell) : null;
    }
  }, {
    key: "findDownSelectableCell",
    value: function findDownSelectableCell(cell) {
      var downRow = cell.parentElement.nextElementSibling;
      var downCell = downRow ? downRow.children[this.props.index] : null;
      return downRow && downCell ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(downRow, 'p-selectable-row') && primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(downCell, 'p-selectable-cell') ? downCell : this.findDownSelectableCell(downCell) : null;
    }
  }, {
    key: "findUpSelectableCell",
    value: function findUpSelectableCell(cell) {
      var upRow = cell.parentElement.previousElementSibling;
      var upCell = upRow ? upRow.children[this.props.index] : null;
      return upRow && upCell ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(upRow, 'p-selectable-row') && primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(upCell, 'p-selectable-cell') ? upCell : this.findUpSelectableCell(upCell) : null;
    }
  }, {
    key: "changeTabIndex",
    value: function changeTabIndex(currentCell, nextCell) {
      if (currentCell && nextCell) {
        currentCell.tabIndex = -1;
        nextCell.tabIndex = this.props.tabIndex;
      }
    }
  }, {
    key: "focusOnElement",
    value: function focusOnElement() {
      var _this4 = this;

      clearTimeout(this.tabindexTimeout);
      this.tabindexTimeout = setTimeout(function () {
        if (_this4.state.editing) {
          var focusableEl = _this4.props.editMode === 'cell' ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getFirstFocusableElement(_this4.el, ':not(.p-cell-editor-key-helper)') : primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(_this4.el, '.p-row-editor-save');
          focusableEl && focusableEl.focus();
        }

        _this4.keyHelper && (_this4.keyHelper.tabIndex = _this4.state.editing ? -1 : 0);
      }, 1);
    }
  }, {
    key: "focusOnInit",
    value: function focusOnInit() {
      var _this5 = this;

      clearTimeout(this.initFocusTimeout);
      this.initFocusTimeout = setTimeout(function () {
        var focusableEl = _this5.props.editMode === 'row' ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(_this5.el, '.p-row-editor-init') : null;
        focusableEl && focusableEl.focus();
      }, 1);
    }
  }, {
    key: "updateStickyPosition",
    value: function updateStickyPosition() {
      if (this.getColumnProp('frozen')) {
        var styleObject = _objectSpread$7({}, this.state.styleObject);

        var align = this.getColumnProp('alignFrozen');

        if (align === 'right') {
          var right = 0;
          var next = this.el.nextElementSibling;

          if (next) {
            right = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
          }

          styleObject['right'] = right + 'px';
        } else {
          var left = 0;
          var prev = this.el.previousElementSibling;

          if (prev) {
            left = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
          }

          styleObject['left'] = left + 'px';
        }

        var isSameStyle = this.state.styleObject['left'] === styleObject['left'] && this.state.styleObject['right'] === styleObject['right'];
        !isSameStyle && this.setState({
          styleObject: styleObject
        });
      }
    }
  }, {
    key: "editorCallback",
    value: function editorCallback(val) {
      var editingRowData = _objectSpread$7({}, this.state.editingRowData);

      editingRowData[this.field] = val;
      this.setState({
        editingRowData: editingRowData
      }); // update editing meta for complete methods on row mode

      this.props.editingMeta[this.props.rowIndex].data[this.field] = val;
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      var _this6 = this;

      var params = this.getCellCallbackParams(event);

      if (this.props.editMode !== 'row' && this.isEditable() && !this.state.editing && (this.props.selectOnEdit || !this.props.selectOnEdit && this.props.selected)) {
        this.selfClick = true;
        var onBeforeCellEditShow = this.getColumnProp('onBeforeCellEditShow');
        var onCellEditInit = this.getColumnProp('onCellEditInit');
        var cellEditValidatorEvent = this.getColumnProp('cellEditValidatorEvent');

        if (onBeforeCellEditShow) {
          onBeforeCellEditShow(params);
        } // If the data is sorted using sort icon, it has been added to wait for the sort operation when any cell is wanted to be opened.


        setTimeout(function () {
          _this6.setState({
            editing: true
          }, function () {
            if (onCellEditInit) {
              onCellEditInit(params);
            }

            if (cellEditValidatorEvent === 'click') {
              _this6.bindDocumentEditListener();

              _this6.overlayEventListener = function (e) {
                if (!_this6.isOutsideClicked(e.target)) {
                  _this6.selfClick = true;
                }
              };

              primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__.OverlayService.on('overlay-click', _this6.overlayEventListener);
            }
          });
        }, 1);
      }

      if (this.props.allowCellSelection && this.props.onClick) {
        this.props.onClick(params);
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      var params = this.getCellCallbackParams(event);

      if (this.props.onMouseDown) {
        this.props.onMouseDown(params);
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      var params = this.getCellCallbackParams(event);

      if (this.props.onMouseUp) {
        this.props.onMouseUp(params);
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (this.props.editMode !== 'row') {
        if (event.which === 13 || event.which === 9) {
          // tab || enter
          this.switchCellToViewMode(event, true);
        }

        if (event.which === 27) {
          // escape
          this.switchCellToViewMode(event, false);
        }
      }

      if (this.props.allowCellSelection) {
        var target = event.target,
            cell = event.currentTarget;

        switch (event.which) {
          //left arrow
          case 37:
            var prevCell = this.findPrevSelectableCell(cell);

            if (prevCell) {
              this.changeTabIndex(cell, prevCell);
              prevCell.focus();
            }

            event.preventDefault();
            break;
          //right arrow

          case 39:
            var nextCell = this.findNextSelectableCell(cell);

            if (nextCell) {
              this.changeTabIndex(cell, nextCell);
              nextCell.focus();
            }

            event.preventDefault();
            break;
          //up arrow

          case 38:
            var upCell = this.findUpSelectableCell(cell);

            if (upCell) {
              this.changeTabIndex(cell, upCell);
              upCell.focus();
            }

            event.preventDefault();
            break;
          //down arrow

          case 40:
            var downCell = this.findDownSelectableCell(cell);

            if (downCell) {
              this.changeTabIndex(cell, downCell);
              downCell.focus();
            }

            event.preventDefault();
            break;
          //enter

          case 13:
            // @deprecated
            if (!primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isClickable(target)) {
              this.onClick(event);
              event.preventDefault();
            }

            break;
          //space

          case 32:
            if (!primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isClickable(target) && !target.readOnly) {
              this.onClick(event);
              event.preventDefault();
            }

            break;
        }
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      this.selfClick = false;

      if (this.props.editMode !== 'row' && this.state.editing && this.getColumnProp('cellEditValidatorEvent') === 'blur') {
        this.switchCellToViewMode(event, true);
      }
    }
  }, {
    key: "onEditorFocus",
    value: function onEditorFocus(event) {
      this.onClick(event);
    }
  }, {
    key: "onRadioChange",
    value: function onRadioChange(event) {
      this.props.onRadioChange({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.rowIndex
      });
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(event) {
      this.props.onCheckboxChange({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.rowIndex
      });
    }
  }, {
    key: "onRowToggle",
    value: function onRowToggle(event) {
      this.props.onRowToggle({
        originalEvent: event,
        data: this.props.rowData
      });
      event.preventDefault();
    }
  }, {
    key: "onRowEditInit",
    value: function onRowEditInit(event) {
      this.props.onRowEditInit({
        originalEvent: event,
        data: this.props.rowData,
        newData: this.getEditingRowData(),
        field: this.field,
        index: this.props.rowIndex
      });
    }
  }, {
    key: "onRowEditSave",
    value: function onRowEditSave(event) {
      this.props.onRowEditSave({
        originalEvent: event,
        data: this.props.rowData,
        newData: this.getEditingRowData(),
        field: this.field,
        index: this.props.rowIndex
      });
      this.focusOnInit();
    }
  }, {
    key: "onRowEditCancel",
    value: function onRowEditCancel(event) {
      this.props.onRowEditCancel({
        originalEvent: event,
        data: this.props.rowData,
        newData: this.getEditingRowData(),
        field: this.field,
        index: this.props.rowIndex
      });
      this.focusOnInit();
    }
  }, {
    key: "bindDocumentEditListener",
    value: function bindDocumentEditListener() {
      var _this7 = this;

      if (!this.documentEditListener) {
        this.documentEditListener = function (e) {
          if (!_this7.selfClick && _this7.isOutsideClicked(e.target)) {
            _this7.switchCellToViewMode(e, true);
          }

          _this7.selfClick = false;
        };

        document.addEventListener('click', this.documentEditListener, true);
      }
    }
  }, {
    key: "unbindDocumentEditListener",
    value: function unbindDocumentEditListener() {
      if (this.documentEditListener) {
        document.removeEventListener('click', this.documentEditListener, true);
        this.documentEditListener = null;
        this.selfClick = false;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.getColumnProp('frozen')) {
        this.updateStickyPosition();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.getColumnProp('frozen')) {
        this.updateStickyPosition();
      }

      if (this.props.editMode === 'cell' || this.props.editMode === 'row') {
        this.focusOnElement();

        if (prevProps.editingMeta !== this.props.editingMeta) {
          this.setState({
            editingRowData: this.getEditingRowData()
          });
        }

        if (prevState.editing !== this.state.editing) {
          var callbackParams = this.getCellCallbackParams();

          var params = _objectSpread$7(_objectSpread$7({}, callbackParams), {}, {
            editing: this.state.editing
          });

          this.props.onEditingMetaChange(params);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindDocumentEditListener();

      if (this.overlayEventListener) {
        primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__.OverlayService.off('overlay-click', this.overlayEventListener);
        this.overlayEventListener = null;
      }
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      var options = this.getVirtualScrollerOption('getLoaderOptions')(this.props.rowIndex, {
        cellIndex: this.props.index,
        cellFirst: this.props.index === 0,
        cellLast: this.props.index === this.getVirtualScrollerOption('columns').length - 1,
        cellEven: this.props.index % 2 === 0,
        cellOdd: this.props.index % 2 !== 0,
        column: this.props.column,
        field: this.field
      });
      var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(this.getVirtualScrollerOption('loadingTemplate'), options);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, content);
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var _this8 = this;

      var content, editorKeyHelper;
      var cellSelected = this.props.allowCellSelection && this.isSelected();
      var isRowEditor = this.props.editMode === 'row';
      var tabIndex = this.getTabIndex(cellSelected);
      var selectionMode = this.getColumnProp('selectionMode');
      var rowReorder = this.getColumnProp('rowReorder');
      var expander = this.getColumnProp('expander');
      var rowEditor = this.getColumnProp('rowEditor');
      var header = this.getColumnProp('header');
      var body = this.getColumnProp('body');
      var editor = this.getColumnProp('editor');
      var frozen = this.getColumnProp('frozen');
      var align = this.getColumnProp('align');
      var value = this.resolveFieldData();
      var cellClassName = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getPropValue(this.props.cellClassName, value, {
        props: this.props.tableProps,
        rowData: this.props.rowData,
        column: this.props.column
      });
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)(this.getColumnProp('bodyClassName'), this.getColumnProp('className'), cellClassName, _defineProperty({
        'p-selection-column': selectionMode !== null,
        'p-editable-column': editor,
        'p-cell-editing': editor && this.state.editing,
        'p-frozen-column': frozen,
        'p-selectable-cell': this.props.allowCellSelection && this.props.isSelectable({
          data: this.getCellParams(),
          index: this.props.rowIndex
        }),
        'p-highlight': cellSelected
      }, "p-align-".concat(align), !!align));
      var style = this.getStyle();
      var title = this.props.responsiveLayout === 'stack' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "p-column-title"
      }, primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(header, {
        props: this.props.tableProps
      }));

      if (selectionMode) {
        var showSelection = this.props.showSelectionElement ? this.props.showSelectionElement(this.props.rowData, {
          rowIndex: this.props.rowIndex,
          props: this.props.tableProps
        }) : true;
        content = showSelection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, selectionMode === 'single' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RowRadioButton, {
          checked: this.props.selected,
          onChange: this.onRadioChange,
          tabIndex: this.props.tabIndex,
          tableSelector: this.props.tableSelector
        }), selectionMode === 'multiple' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RowCheckbox, {
          checked: this.props.selected,
          onChange: this.onCheckboxChange,
          tabIndex: this.props.tabIndex
        }));
      } else if (rowReorder) {
        var showReorder = this.props.showRowReorderElement ? this.props.showRowReorderElement(this.props.rowData, {
          rowIndex: this.props.rowIndex,
          props: this.props.tableProps
        }) : true;
        content = showReorder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-datatable-reorderablerow-handle', this.getColumnProp('rowReorderIcon'))
        });
      } else if (expander) {
        var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-row-toggler-icon', this.props.expanded ? this.props.expandedRowIcon : this.props.collapsedRowIcon);
        var ariaControls = "".concat(this.props.tableSelector, "_content_").concat(this.props.rowIndex, "_expanded");
        var expanderProps = {
          onClick: this.onRowToggle,
          className: 'p-row-toggler p-link',
          iconClassName: iconClassName
        };
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          className: expanderProps.className,
          onClick: expanderProps.onClick,
          type: "button",
          "aria-expanded": this.props.expanded,
          "aria-controls": ariaControls,
          tabIndex: this.props.tabIndex
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: expanderProps.iconClassName
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, null));

        if (body) {
          expanderProps['element'] = content;
          content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(body, this.props.rowData, {
            column: this.props.column,
            field: this.field,
            rowIndex: this.props.rowIndex,
            frozenRow: this.props.frozenRow,
            props: this.props.tableProps,
            expander: expanderProps
          });
        }
      } else if (isRowEditor && rowEditor) {
        var rowEditorProps = {};

        if (this.state.editing) {
          rowEditorProps = {
            editing: true,
            onSaveClick: this.onRowEditSave,
            saveClassName: 'p-row-editor-save p-link',
            saveIconClassName: 'p-row-editor-save-icon pi pi-fw pi-check',
            onCancelClick: this.onRowEditCancel,
            cancelClassName: 'p-row-editor-cancel p-link',
            cancelIconClassName: 'p-row-editor-cancel-icon pi pi-fw pi-times'
          };
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
            type: "button",
            onClick: rowEditorProps.onSaveClick,
            className: rowEditorProps.saveClassName,
            tabIndex: this.props.tabIndex
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: rowEditorProps.saveIconClassName
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
            type: "button",
            onClick: rowEditorProps.onCancelClick,
            className: rowEditorProps.cancelClassName,
            tabIndex: this.props.tabIndex
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: rowEditorProps.cancelIconClassName
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, null)));
        } else {
          rowEditorProps = {
            editing: false,
            onInitClick: this.onRowEditInit,
            initClassName: 'p-row-editor-init p-link',
            initIconClassName: 'p-row-editor-init-icon pi pi-fw pi-pencil'
          };
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
            type: "button",
            onClick: rowEditorProps.onInitClick,
            className: rowEditorProps.initClassName,
            tabIndex: this.props.tabIndex
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: rowEditorProps.initIconClassName
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, null));
        }

        if (body) {
          rowEditorProps['element'] = content;
          content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(body, this.props.rowData, {
            column: this.props.column,
            field: this.field,
            rowIndex: this.props.rowIndex,
            frozenRow: this.props.frozenRow,
            props: this.props.tableProps,
            rowEditor: rowEditorProps
          });
        }
      } else if (body && !this.state.editing) {
        content = body ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(body, this.props.rowData, {
          column: this.props.column,
          field: this.field,
          rowIndex: this.props.rowIndex,
          frozenRow: this.props.frozenRow,
          props: this.props.tableProps
        }) : value;
      } else if (editor && this.state.editing) {
        content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(editor, {
          rowData: this.state.editingRowData,
          value: this.resolveFieldData(this.state.editingRowData),
          column: this.props.column,
          field: this.field,
          rowIndex: this.props.rowIndex,
          frozenRow: this.props.frozenRow,
          props: this.props.tableProps,
          editorCallback: this.editorCallback
        });
      } else {
        content = value;
      }

      if (!isRowEditor && editor) {
        /* eslint-disable */
        editorKeyHelper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
          tabIndex: "0",
          ref: function ref(el) {
            return _this8.keyHelper = el;
          },
          className: "p-cell-editor-key-helper p-hidden-accessible",
          onFocus: this.onEditorFocus
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null));
        /* eslint-enable */
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        ref: function ref(el) {
          return _this8.el = el;
        },
        style: style,
        className: className,
        rowSpan: this.props.rowSpan,
        tabIndex: tabIndex,
        role: "cell",
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        onBlur: this.onBlur,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp
      }, editorKeyHelper, title, content);
    }
  }, {
    key: "render",
    value: function render() {
      return this.getVirtualScrollerOption('loading') ? this.renderLoading() : this.renderElement();
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.editMode === 'row' && nextProps.editing !== prevState.editing) {
        return {
          editing: nextProps.editing
        };
      }

      return null;
    }
  }]);

  return BodyCell;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var BodyRow = /*#__PURE__*/function (_Component) {
  _inherits(BodyRow, _Component);

  var _super = _createSuper$9(BodyRow);

  function BodyRow(props) {
    var _this;

    _classCallCheck(this, BodyRow);

    _this = _super.call(this, props);

    if (!_this.props.onRowEditChange) {
      _this.state = {
        editing: false
      };
    }

    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onDoubleClick = _this.onDoubleClick.bind(_assertThisInitialized(_this));
    _this.onRightClick = _this.onRightClick.bind(_assertThisInitialized(_this));
    _this.onTouchEnd = _this.onTouchEnd.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
    _this.onDragStart = _this.onDragStart.bind(_assertThisInitialized(_this));
    _this.onDragEnd = _this.onDragEnd.bind(_assertThisInitialized(_this));
    _this.onDragOver = _this.onDragOver.bind(_assertThisInitialized(_this));
    _this.onDragLeave = _this.onDragLeave.bind(_assertThisInitialized(_this));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_this));
    _this.onEditInit = _this.onEditInit.bind(_assertThisInitialized(_this));
    _this.onEditSave = _this.onEditSave.bind(_assertThisInitialized(_this));
    _this.onEditCancel = _this.onEditCancel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BodyRow, [{
    key: "isFocusable",
    value: function isFocusable() {
      return this.props.selectionMode && this.props.selectionModeInColumn !== 'single' && this.props.selectionModeInColumn !== 'multiple';
    }
  }, {
    key: "isGrouped",
    value: function isGrouped(column) {
      if (this.props.groupRowsBy && this.getColumnProp(column, 'field')) {
        if (Array.isArray(this.props.groupRowsBy)) return this.props.groupRowsBy.indexOf(column.props.field) > -1;else return this.props.groupRowsBy === column.props.field;
      }

      return false;
    }
  }, {
    key: "equals",
    value: function equals(data1, data2) {
      return this.props.compareSelectionBy === 'equals' ? data1 === data2 : primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(data1, data2, this.props.dataKey);
    }
  }, {
    key: "getColumnProp",
    value: function getColumnProp(col, prop) {
      return col ? col.props[prop] : null;
    }
  }, {
    key: "getEditing",
    value: function getEditing() {
      return this.props.onRowEditChange ? this.props.editing : this.state.editing;
    }
  }, {
    key: "getTabIndex",
    value: function getTabIndex() {
      return this.isFocusable() && !this.props.allowCellSelection ? this.props.index === 0 ? this.props.tabIndex : -1 : null;
    }
  }, {
    key: "findIndex",
    value: function findIndex(collection, rowData) {
      var _this2 = this;

      return (collection || []).findIndex(function (data) {
        return _this2.equals(rowData, data);
      });
    }
  }, {
    key: "changeTabIndex",
    value: function changeTabIndex(currentRow, nextRow) {
      if (currentRow && nextRow) {
        currentRow.tabIndex = -1;
        nextRow.tabIndex = this.props.tabIndex;
      }
    }
  }, {
    key: "findNextSelectableRow",
    value: function findNextSelectableRow(row) {
      var nextRow = row.nextElementSibling;
      return nextRow ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(nextRow, 'p-selectable-row') ? nextRow : this.findNextSelectableRow(nextRow) : null;
    }
  }, {
    key: "findPrevSelectableRow",
    value: function findPrevSelectableRow(row) {
      var prevRow = row.previousElementSibling;
      return prevRow ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(prevRow, 'p-selectable-row') ? prevRow : this.findPrevSelectableRow(prevRow) : null;
    }
  }, {
    key: "shouldRenderBodyCell",
    value: function shouldRenderBodyCell(value, column, i) {
      if (this.getColumnProp(column, 'hidden')) {
        return false;
      } else if (this.props.rowGroupMode && this.props.rowGroupMode === 'rowspan' && this.isGrouped(column)) {
        var prevRowData = value[i - 1];

        if (prevRowData) {
          var currentRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(value[i], this.getColumnProp(column, 'field'));
          var previousRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(prevRowData, this.getColumnProp(column, 'field'));
          return currentRowFieldData !== previousRowFieldData;
        }
      }

      return true;
    }
  }, {
    key: "calculateRowGroupSize",
    value: function calculateRowGroupSize(value, column, index) {
      if (this.isGrouped(column)) {
        var currentRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(value[index], this.getColumnProp(column, 'field'));
        var nextRowFieldData = currentRowFieldData;
        var groupRowSpan = 0;

        while (currentRowFieldData === nextRowFieldData) {
          groupRowSpan++;
          var nextRowData = value[++index];

          if (nextRowData) {
            nextRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(nextRowData, this.getColumnProp(column, 'field'));
          } else {
            break;
          }
        }

        return groupRowSpan === 1 ? null : groupRowSpan;
      } else {
        return null;
      }
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      this.props.onRowClick({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onDoubleClick",
    value: function onDoubleClick(event) {
      this.props.onRowDoubleClick({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onRightClick",
    value: function onRightClick(event) {
      this.props.onRowRightClick({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(event) {
      this.props.onRowTouchEnd(event);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (this.isFocusable() && !this.props.allowCellSelection) {
        var target = event.target,
            row = event.currentTarget;

        switch (event.which) {
          //down arrow
          case 40:
            var nextRow = this.findNextSelectableRow(row);

            if (nextRow) {
              this.changeTabIndex(row, nextRow);
              nextRow.focus();
            }

            event.preventDefault();
            break;
          //up arrow

          case 38:
            var prevRow = this.findPrevSelectableRow(row);

            if (prevRow) {
              this.changeTabIndex(row, prevRow);
              prevRow.focus();
            }

            event.preventDefault();
            break;
          //enter

          case 13:
            // @deprecated
            if (!primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isClickable(target)) {
              this.onClick(event);
              event.preventDefault();
            }

            break;
          //space

          case 32:
            if (!primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isClickable(target) && !target.readOnly) {
              this.onClick(event);
              event.preventDefault();
            }

            break;
        }
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      this.props.onRowMouseDown({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      this.props.onRowMouseUp({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(event) {
      this.props.onRowDragStart({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      this.props.onRowDragOver({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(event) {
      this.props.onRowDragLeave({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd(event) {
      this.props.onRowDragEnd({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      this.props.onRowDrop({
        originalEvent: event,
        data: this.props.rowData,
        index: this.props.index
      });
    }
  }, {
    key: "onEditChange",
    value: function onEditChange(e, editing) {
      if (this.props.onRowEditChange) {
        var editingRows;
        var dataKey = this.props.dataKey;
        var originalEvent = e.originalEvent,
            data = e.data,
            index = e.index;

        if (dataKey) {
          var dataKeyValue = String(primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data, dataKey));
          editingRows = this.props.editingRows ? _objectSpread$6({}, this.props.editingRows) : {};
          if (editingRows[dataKeyValue] != null) delete editingRows[dataKeyValue];else editingRows[dataKeyValue] = true;
        } else {
          var editingRowIndex = this.findIndex(this.props.editingRows, data);
          editingRows = this.props.editingRows ? _toConsumableArray(this.props.editingRows) : [];
          if (editingRowIndex !== -1) editingRows = editingRows.filter(function (val, i) {
            return i !== editingRowIndex;
          });else editingRows.push(data);
        }

        this.props.onRowEditChange({
          originalEvent: originalEvent,
          data: editingRows,
          index: index
        });
      } else {
        this.setState({
          editing: editing
        });
      }
    }
  }, {
    key: "onEditInit",
    value: function onEditInit(e) {
      var event = e.originalEvent;

      if (this.props.onRowEditInit) {
        this.props.onRowEditInit({
          originalEvent: event,
          data: this.props.rowData,
          index: this.props.index
        });
      }

      this.onEditChange(e, true);
      event.preventDefault();
    }
  }, {
    key: "onEditSave",
    value: function onEditSave(e) {
      var event = e.originalEvent;
      var valid = this.props.rowEditValidator ? this.props.rowEditValidator(this.props.rowData, {
        props: this.props.tableProps
      }) : true;

      if (this.props.onRowEditSave) {
        this.props.onRowEditSave({
          originalEvent: event,
          data: this.props.rowData,
          index: this.props.index,
          valid: valid
        });
      }

      if (valid) {
        if (this.props.onRowEditComplete) {
          this.props.onRowEditComplete(e);
        }

        this.onEditChange(e, false);
      }

      event.preventDefault();
    }
  }, {
    key: "onEditCancel",
    value: function onEditCancel(e) {
      var event = e.originalEvent;

      if (this.props.onRowEditCancel) {
        this.props.onRowEditCancel({
          originalEvent: event,
          data: this.props.rowData,
          index: this.props.index
        });
      }

      this.onEditChange(e, false);
      event.preventDefault();
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this3 = this;

      return this.props.columns.map(function (col, i) {
        if (_this3.shouldRenderBodyCell(_this3.props.value, col, _this3.props.index)) {
          var key = "".concat(_this3.getColumnProp(col, 'columnKey') || _this3.getColumnProp(col, 'field'), "_").concat(i);
          var rowSpan = _this3.props.rowGroupMode === 'rowspan' ? _this3.calculateRowGroupSize(_this3.props.value, col, _this3.props.index) : null;

          var editing = _this3.getEditing();

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BodyCell, {
            key: key,
            value: _this3.props.value,
            tableProps: _this3.props.tableProps,
            tableSelector: _this3.props.tableSelector,
            column: col,
            rowData: _this3.props.rowData,
            rowIndex: _this3.props.index,
            index: i,
            rowSpan: rowSpan,
            dataKey: _this3.props.dataKey,
            editing: editing,
            editingMeta: _this3.props.editingMeta,
            editMode: _this3.props.editMode,
            onRowEditInit: _this3.onEditInit,
            onRowEditSave: _this3.onEditSave,
            onRowEditCancel: _this3.onEditCancel,
            onEditingMetaChange: _this3.props.onEditingMetaChange,
            onRowToggle: _this3.props.onRowToggle,
            selection: _this3.props.selection,
            allowCellSelection: _this3.props.allowCellSelection,
            compareSelectionBy: _this3.props.compareSelectionBy,
            selectOnEdit: _this3.props.selectOnEdit,
            selected: _this3.props.selected,
            onClick: _this3.props.onCellClick,
            onMouseDown: _this3.props.onCellMouseDown,
            onMouseUp: _this3.props.onCellMouseUp,
            tabIndex: _this3.props.tabIndex,
            cellClassName: _this3.props.cellClassName,
            responsiveLayout: _this3.props.responsiveLayout,
            frozenRow: _this3.props.frozenRow,
            isSelectable: _this3.props.isSelectable,
            showSelectionElement: _this3.props.showSelectionElement,
            showRowReorderElement: _this3.props.showRowReorderElement,
            onRadioChange: _this3.props.onRadioChange,
            onCheckboxChange: _this3.props.onCheckboxChange,
            expanded: _this3.props.expanded,
            expandedRowIcon: _this3.props.expandedRowIcon,
            collapsedRowIcon: _this3.props.collapsedRowIcon,
            virtualScrollerOptions: _this3.props.virtualScrollerOptions
          });
        }

        return null;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var rowClassName = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getPropValue(this.props.rowClassName, this.props.rowData, {
        props: this.props.tableProps
      });
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)(rowClassName, {
        'p-highlight': !this.props.allowCellSelection && this.props.selected,
        'p-highlight-contextmenu': this.props.contextMenuSelected,
        'p-selectable-row': this.props.allowRowSelection && this.props.isSelectable({
          data: this.props.rowData,
          index: this.props.index
        }),
        'p-row-odd': this.props.index % 2 !== 0
      });
      var content = this.renderContent();
      var tabIndex = this.getTabIndex();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        ref: function ref(el) {
          return _this4.el = el;
        },
        role: "row",
        tabIndex: tabIndex,
        className: className,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onClick: this.onClick,
        onDoubleClick: this.onDoubleClick,
        onContextMenu: this.onRightClick,
        onTouchEnd: this.onTouchEnd,
        onKeyDown: this.onKeyDown,
        onDragStart: this.onDragStart,
        onDragOver: this.onDragOver,
        onDragLeave: this.onDragLeave,
        onDragEnd: this.onDragEnd,
        onDrop: this.onDrop
      }, content);
    }
  }]);

  return BodyRow;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RowTogglerButton = /*#__PURE__*/function (_Component) {
  _inherits(RowTogglerButton, _Component);

  var _super = _createSuper$8(RowTogglerButton);

  function RowTogglerButton(props) {
    var _this;

    _classCallCheck(this, RowTogglerButton);

    _this = _super.call(this, props);
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RowTogglerButton, [{
    key: "onClick",
    value: function onClick(event) {
      this.props.onClick({
        originalEvent: event,
        data: this.props.rowData
      });
    }
  }, {
    key: "render",
    value: function render() {
      var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-row-toggler-icon', this.props.expanded ? this.props.expandedRowIcon : this.props.collapsedRowIcon);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        onClick: this.onClick,
        className: "p-row-toggler p-link",
        tabIndex: this.props.tabIndex
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, null));
    }
  }]);

  return RowTogglerButton;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var _excluded = ["originalEvent"];

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var TableBody = /*#__PURE__*/function (_Component) {
  _inherits(TableBody, _Component);

  var _super = _createSuper$7(TableBody);

  function TableBody(props) {
    var _this;

    _classCallCheck(this, TableBody);

    _this = _super.call(this, props);
    _this.state = {
      rowGroupHeaderStyleObject: {}
    }; // row

    _this.onRowClick = _this.onRowClick.bind(_assertThisInitialized(_this));
    _this.onRowDoubleClick = _this.onRowDoubleClick.bind(_assertThisInitialized(_this));
    _this.onRowRightClick = _this.onRowRightClick.bind(_assertThisInitialized(_this));
    _this.onRowTouchEnd = _this.onRowTouchEnd.bind(_assertThisInitialized(_this));
    _this.onRowMouseDown = _this.onRowMouseDown.bind(_assertThisInitialized(_this));
    _this.onRowMouseUp = _this.onRowMouseUp.bind(_assertThisInitialized(_this));
    _this.onRowToggle = _this.onRowToggle.bind(_assertThisInitialized(_this)); // drag

    _this.onRowDragStart = _this.onRowDragStart.bind(_assertThisInitialized(_this));
    _this.onRowDragOver = _this.onRowDragOver.bind(_assertThisInitialized(_this));
    _this.onRowDragLeave = _this.onRowDragLeave.bind(_assertThisInitialized(_this));
    _this.onRowDragEnd = _this.onRowDragEnd.bind(_assertThisInitialized(_this));
    _this.onRowDrop = _this.onRowDrop.bind(_assertThisInitialized(_this)); // selection

    _this.onRadioChange = _this.onRadioChange.bind(_assertThisInitialized(_this));
    _this.onCheckboxChange = _this.onCheckboxChange.bind(_assertThisInitialized(_this));
    _this.onDragSelectionMouseMove = _this.onDragSelectionMouseMove.bind(_assertThisInitialized(_this));
    _this.onDragSelectionMouseUp = _this.onDragSelectionMouseUp.bind(_assertThisInitialized(_this));
    _this.isSelectable = _this.isSelectable.bind(_assertThisInitialized(_this)); // cell

    _this.onCellClick = _this.onCellClick.bind(_assertThisInitialized(_this));
    _this.onCellMouseDown = _this.onCellMouseDown.bind(_assertThisInitialized(_this));
    _this.onCellMouseUp = _this.onCellMouseUp.bind(_assertThisInitialized(_this));
    _this.ref = _this.ref.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TableBody, [{
    key: "ref",
    value: function ref(el) {
      this.el = el;
      this.props.virtualScrollerContentRef && this.props.virtualScrollerContentRef(el);
    }
  }, {
    key: "equals",
    value: function equals(data1, data2) {
      if (this.allowCellSelection()) return (data1.rowIndex === data2.rowIndex || data1.rowData === data2.rowData) && (data1.field === data2.field || data1.cellIndex === data2.cellIndex);else return this.props.compareSelectionBy === 'equals' ? data1 === data2 : primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(data1, data2, this.props.dataKey);
    }
  }, {
    key: "isSubheaderGrouping",
    value: function isSubheaderGrouping() {
      return this.props.rowGroupMode && this.props.rowGroupMode === 'subheader';
    }
  }, {
    key: "isSelectionEnabled",
    value: function isSelectionEnabled() {
      return this.props.selectionMode || this.props.selectionModeInColumn !== null || this.props.columns && this.props.columns.some(function (col) {
        return col && !!col.props.selectionMode;
      });
    }
  }, {
    key: "isRadioSelectionMode",
    value: function isRadioSelectionMode() {
      return this.props.selectionMode === 'radiobutton';
    }
  }, {
    key: "isCheckboxSelectionMode",
    value: function isCheckboxSelectionMode() {
      return this.props.selectionMode === 'checkbox';
    }
  }, {
    key: "isRadioSelectionModeInColumn",
    value: function isRadioSelectionModeInColumn() {
      return this.props.selectionModeInColumn === 'single';
    }
  }, {
    key: "isCheckboxSelectionModeInColumn",
    value: function isCheckboxSelectionModeInColumn() {
      return this.props.selectionModeInColumn === 'multiple';
    }
  }, {
    key: "isSingleSelection",
    value: function isSingleSelection() {
      return this.props.selectionMode === 'single' && !this.isCheckboxSelectionModeInColumn() || !this.isRadioSelectionMode() && this.isRadioSelectionModeInColumn();
    }
  }, {
    key: "isMultipleSelection",
    value: function isMultipleSelection() {
      return this.props.selectionMode === 'multiple' && !this.isRadioSelectionModeInColumn() || this.isCheckboxSelectionModeInColumn();
    }
  }, {
    key: "isRadioOnlySelection",
    value: function isRadioOnlySelection() {
      return this.isRadioSelectionMode() && this.isRadioSelectionModeInColumn();
    }
  }, {
    key: "isCheckboxOnlySelection",
    value: function isCheckboxOnlySelection() {
      return this.isCheckboxSelectionMode() && this.isCheckboxSelectionModeInColumn();
    }
  }, {
    key: "isSelected",
    value: function isSelected(rowData) {
      if (rowData && this.props.selection) {
        return this.props.selection instanceof Array ? this.findIndex(this.props.selection, rowData) > -1 : this.equals(rowData, this.props.selection);
      }

      return false;
    }
  }, {
    key: "isContextMenuSelected",
    value: function isContextMenuSelected(rowData) {
      if (rowData && this.props.contextMenuSelection) {
        return this.equals(rowData, this.props.contextMenuSelection);
      }

      return false;
    }
  }, {
    key: "isSelectable",
    value: function isSelectable(options) {
      return this.props.isDataSelectable ? this.props.isDataSelectable(options) : true;
    }
  }, {
    key: "isRowExpanded",
    value: function isRowExpanded(rowData) {
      if (rowData && this.props.expandedRows) {
        if (this.isSubheaderGrouping() && this.props.expandableRowGroups) {
          return this.isRowGroupExpanded(rowData);
        } else {
          if (this.props.dataKey) return this.props.expandedRows ? this.props.expandedRows[primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.props.dataKey)] !== undefined : false;else return this.findIndex(this.props.expandedRows, rowData) !== -1;
        }
      }

      return false;
    }
  }, {
    key: "isRowGroupExpanded",
    value: function isRowGroupExpanded(rowData) {
      var _this2 = this;

      if (this.props.dataKey === this.props.groupRowsBy) return Object.keys(this.props.expandedRows).some(function (data) {
        return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(data, primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, _this2.props.dataKey));
      });else return this.props.expandedRows.some(function (data) {
        return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(data, rowData, _this2.props.groupRowsBy);
      });
    }
  }, {
    key: "isRowEditing",
    value: function isRowEditing(rowData) {
      if (this.props.editMode === 'row' && rowData && this.props.editingRows) {
        if (this.props.dataKey) return this.props.editingRows ? this.props.editingRows[primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.props.dataKey)] !== undefined : false;else return this.findIndex(this.props.editingRows, rowData) !== -1;
      }

      return false;
    }
  }, {
    key: "allowDrag",
    value: function allowDrag(event) {
      return this.props.dragSelection && this.isMultipleSelection() && !event.originalEvent.shiftKey;
    }
  }, {
    key: "allowRowDrag",
    value: function allowRowDrag(event) {
      return !this.allowCellSelection() && this.allowDrag(event);
    }
  }, {
    key: "allowCellDrag",
    value: function allowCellDrag(event) {
      return this.allowCellSelection() && this.allowDrag(event);
    }
  }, {
    key: "allowSelection",
    value: function allowSelection(event) {
      return !primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isClickable(event.originalEvent.target);
    }
  }, {
    key: "allowMetaKeySelection",
    value: function allowMetaKeySelection(event) {
      return !this.rowTouched && (!this.props.metaKeySelection || this.props.metaKeySelection && (event.originalEvent.metaKey || event.originalEvent.ctrlKey));
    }
  }, {
    key: "allowRangeSelection",
    value: function allowRangeSelection(event) {
      return this.isMultipleSelection() && event.originalEvent.shiftKey && this.anchorRowIndex !== null;
    }
  }, {
    key: "allowRowSelection",
    value: function allowRowSelection() {
      return (this.props.selectionMode || this.props.selectionModeInColumn) && !this.isRadioOnlySelection() && !this.isCheckboxOnlySelection();
    }
  }, {
    key: "allowCellSelection",
    value: function allowCellSelection() {
      return this.props.cellSelection && !this.isRadioSelectionModeInColumn() && !this.isCheckboxSelectionModeInColumn();
    }
  }, {
    key: "getColumnsLength",
    value: function getColumnsLength() {
      return this.props.columns ? this.props.columns.length : 0;
    }
  }, {
    key: "getVirtualScrollerOption",
    value: function getVirtualScrollerOption(option, options) {
      options = options || this.props.virtualScrollerOptions;
      return options ? options[option] : null;
    }
  }, {
    key: "findIndex",
    value: function findIndex(collection, rowData) {
      var _this3 = this;

      return (collection || []).findIndex(function (data) {
        return _this3.equals(rowData, data);
      });
    }
  }, {
    key: "rowGroupHeaderStyle",
    value: function rowGroupHeaderStyle() {
      if (this.props.scrollable) {
        return {
          top: this.state.rowGroupHeaderStyleObject['top']
        };
      }

      return null;
    }
  }, {
    key: "getRowKey",
    value: function getRowKey(rowData, index) {
      return this.props.dataKey ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.props.dataKey) + '_' + index : index;
    }
  }, {
    key: "shouldRenderRowGroupHeader",
    value: function shouldRenderRowGroupHeader(value, rowData, i) {
      var currentRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.props.groupRowsBy);
      var prevRowData = value[i - 1];

      if (prevRowData) {
        var previousRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(prevRowData, this.props.groupRowsBy);
        return currentRowFieldData !== previousRowFieldData;
      } else {
        return true;
      }
    }
  }, {
    key: "shouldRenderRowGroupFooter",
    value: function shouldRenderRowGroupFooter(value, rowData, i, expanded) {
      if (this.props.expandableRowGroups && !expanded) {
        return false;
      } else {
        var currentRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, this.props.groupRowsBy);
        var nextRowData = value[i + 1];

        if (nextRowData) {
          var nextRowFieldData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(nextRowData, this.props.groupRowsBy);
          return currentRowFieldData !== nextRowFieldData;
        } else {
          return true;
        }
      }
    }
  }, {
    key: "updateFrozenRowStickyPosition",
    value: function updateFrozenRowStickyPosition() {
      this.el.style.top = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.el.previousElementSibling) + 'px';
    }
  }, {
    key: "updateFrozenRowGroupHeaderStickyPosition",
    value: function updateFrozenRowGroupHeaderStickyPosition() {
      var tableHeaderHeight = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.el.previousElementSibling);
      var top = tableHeaderHeight + 'px';

      if (this.state.rowGroupHeaderStyleObject && this.state.rowGroupHeaderStyleObject.top !== top) {
        this.setState({
          rowGroupHeaderStyleObject: {
            top: top
          }
        });
      }
    }
  }, {
    key: "updateVirtualScrollerPosition",
    value: function updateVirtualScrollerPosition() {
      var tableHeaderHeight = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.el.previousElementSibling);
      this.el.style.top = (this.el.style.top || 0) + tableHeaderHeight + 'px';
    }
  }, {
    key: "onSingleSelection",
    value: function onSingleSelection(_ref) {
      var originalEvent = _ref.originalEvent,
          data = _ref.data,
          index = _ref.index,
          toggleable = _ref.toggleable,
          type = _ref.type;

      if (!this.isSelectable({
        data: data,
        index: index
      })) {
        return;
      }

      var selected = this.isSelected(data);
      var selection = this.props.selection;

      if (selected) {
        if (toggleable) {
          selection = null;
          this.onUnselect({
            originalEvent: originalEvent,
            data: data,
            type: type
          });
        }
      } else {
        selection = data;
        this.onSelect({
          originalEvent: originalEvent,
          data: data,
          type: type
        });
      }

      this.focusOnElement(originalEvent, true);

      if (this.props.onSelectionChange && selection !== this.props.selection) {
        this.props.onSelectionChange({
          originalEvent: originalEvent,
          value: selection,
          type: type
        });
      }
    }
  }, {
    key: "onMultipleSelection",
    value: function onMultipleSelection(_ref2) {
      var _this4 = this;

      var originalEvent = _ref2.originalEvent,
          data = _ref2.data,
          index = _ref2.index,
          toggleable = _ref2.toggleable,
          type = _ref2.type;

      if (!this.isSelectable({
        data: data,
        index: index
      })) {
        return;
      }

      var selected = this.isSelected(data);
      var selection = this.props.selection || [];

      if (selected) {
        if (toggleable) {
          var selectionIndex = this.findIndex(selection, data);
          selection = this.props.selection.filter(function (val, i) {
            return i !== selectionIndex;
          });
          this.onUnselect({
            originalEvent: originalEvent,
            data: data,
            type: type
          });
        } else if (selection.length) {
          this.props.selection.forEach(function (d) {
            return _this4.onUnselect({
              originalEvent: originalEvent,
              data: d,
              type: type
            });
          });
          selection = [data];
          this.onSelect({
            originalEvent: originalEvent,
            data: data,
            type: type
          });
        }
      } else {
        selection = toggleable && this.isMultipleSelection() ? [].concat(_toConsumableArray(selection), [data]) : [data];
        this.onSelect({
          originalEvent: originalEvent,
          data: data,
          type: type
        });
      }

      this.focusOnElement(originalEvent, true);

      if (this.props.onSelectionChange && selection !== this.props.selection) {
        this.props.onSelectionChange({
          originalEvent: originalEvent,
          value: selection,
          type: type
        });
      }
    }
  }, {
    key: "onRangeSelection",
    value: function onRangeSelection(event, type) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.clearSelection();
      this.rangeRowIndex = this.allowCellSelection() ? event.rowIndex : event.index;
      var selectionInRange = this.selectRange(event);
      var selection = this.isMultipleSelection() ? _toConsumableArray(new Set([].concat(_toConsumableArray(this.props.selection || []), _toConsumableArray(selectionInRange)))) : selectionInRange;

      if (this.props.onSelectionChange && selection !== this.props.selection) {
        this.props.onSelectionChange({
          originalEvent: event.originalEvent,
          value: selection,
          type: type
        });
      }

      this.anchorRowIndex = this.rangeRowIndex;
      this.anchorCellIndex = event.cellIndex;
      this.focusOnElement(event.originalEvent, false);
    }
  }, {
    key: "selectRange",
    value: function selectRange(event) {
      var rangeStart, rangeEnd;

      if (this.rangeRowIndex > this.anchorRowIndex) {
        rangeStart = this.anchorRowIndex;
        rangeEnd = this.rangeRowIndex;
      } else if (this.rangeRowIndex < this.anchorRowIndex) {
        rangeStart = this.rangeRowIndex;
        rangeEnd = this.anchorRowIndex;
      } else {
        rangeStart = rangeEnd = this.rangeRowIndex;
      }

      if (this.props.paginator) {
        rangeStart = Math.max(rangeStart - this.props.first, 0);
        rangeEnd -= this.props.first;
      }

      return this.allowCellSelection() ? this.selectRangeOnCell(event, rangeStart, rangeEnd) : this.selectRangeOnRow(event, rangeStart, rangeEnd);
    }
  }, {
    key: "selectRangeOnRow",
    value: function selectRangeOnRow(event, rowRangeStart, rowRangeEnd) {
      var value = this.props.value;
      var selection = [];

      for (var i = rowRangeStart; i <= rowRangeEnd; i++) {
        var rangeRowData = value[i];

        if (!this.isSelectable({
          data: rangeRowData,
          index: i
        })) {
          continue;
        }

        selection.push(rangeRowData);
        this.onSelect({
          originalEvent: event.originalEvent,
          data: rangeRowData,
          type: 'row'
        });
      }

      return selection;
    }
  }, {
    key: "selectRangeOnCell",
    value: function selectRangeOnCell(event, rowRangeStart, rowRangeEnd) {
      var cellRangeStart,
          cellRangeEnd,
          cellIndex = event.cellIndex;

      if (cellIndex > this.anchorCellIndex) {
        cellRangeStart = this.anchorCellIndex;
        cellRangeEnd = cellIndex;
      } else if (cellIndex < this.anchorCellIndex) {
        cellRangeStart = cellIndex;
        cellRangeEnd = this.anchorCellIndex;
      } else {
        cellRangeStart = cellRangeEnd = cellIndex;
      }

      var value = this.props.value;
      var selection = [];

      for (var i = rowRangeStart; i <= rowRangeEnd; i++) {
        var rowData = value[i];
        var columns = this.props.columns;

        for (var j = cellRangeStart; j <= cellRangeEnd; j++) {
          var field = columns[j].props.field;

          var _value = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, field);

          var rangeRowData = {
            value: _value,
            field: field,
            rowData: rowData,
            rowIndex: i,
            cellIndex: j,
            selected: true
          };

          if (!this.isSelectable({
            data: rangeRowData,
            index: i
          })) {
            continue;
          }

          selection.push(rangeRowData);
          this.onSelect({
            originalEvent: event.originalEvent,
            data: rangeRowData,
            type: 'cell'
          });
        }
      }

      return selection;
    }
  }, {
    key: "onSelect",
    value: function onSelect(event) {
      if (this.allowCellSelection()) this.props.onCellSelect && this.props.onCellSelect(_objectSpread$5(_objectSpread$5({
        originalEvent: event.originalEvent
      }, event.data), {}, {
        type: event.type
      }));else this.props.onRowSelect && this.props.onRowSelect(event);
    }
  }, {
    key: "onUnselect",
    value: function onUnselect(event) {
      if (this.allowCellSelection()) this.props.onCellUnselect && this.props.onCellUnselect(_objectSpread$5(_objectSpread$5({
        originalEvent: event.originalEvent
      }, event.data), {}, {
        type: event.type
      }));else this.props.onRowUnselect && this.props.onRowUnselect(event);
    }
  }, {
    key: "enableDragSelection",
    value: function enableDragSelection(event) {
      if (this.props.dragSelection && !this.dragSelectionHelper) {
        this.dragSelectionHelper = document.createElement('div');
        primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(this.dragSelectionHelper, 'p-datatable-drag-selection-helper');
        this.initialDragPosition = {
          x: event.clientX,
          y: event.clientY
        };
        this.dragSelectionHelper.style.top = "".concat(event.pageY, "px");
        this.dragSelectionHelper.style.left = "".concat(event.pageX, "px");
        this.bindDragSelectionEvents();
      }
    }
  }, {
    key: "focusOnElement",
    value: function focusOnElement(event, isFocused) {
      var target = event.currentTarget;

      if (!this.allowCellSelection() && this.props.selectionAutoFocus) {
        if (this.isCheckboxSelectionModeInColumn()) {
          var checkbox = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(target, 'td.p-selection-column .p-checkbox-box');
          checkbox && checkbox.focus();
        } else if (this.isRadioSelectionModeInColumn()) {
          var radio = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(target, 'td.p-selection-column input[type="radio"]');
          radio && radio.focus();
        }
      }

      !isFocused && target && target.focus();
    }
  }, {
    key: "changeTabIndex",
    value: function changeTabIndex(event, type) {
      var target = event.currentTarget;
      var isSelectable = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(target, type === 'cell' ? 'p-selectable-cell' : 'p-selectable-row');

      if (isSelectable) {
        var selector = type === 'cell' ? 'tr > td' : 'tr';
        var tabbableEl = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(this.el, "".concat(selector, "[tabindex=\"").concat(this.props.tabIndex, "\"]"));

        if (tabbableEl && target) {
          tabbableEl.tabIndex = -1;
          target.tabIndex = this.props.tabIndex;
        }
      }
    }
  }, {
    key: "onRowClick",
    value: function onRowClick(event) {
      if (this.allowCellSelection() || !this.allowSelection(event)) {
        return;
      }

      this.props.onRowClick && this.props.onRowClick(event);

      if (this.allowRowSelection()) {
        if (this.allowRangeSelection(event)) {
          this.onRangeSelection(event, 'row');
        } else {
          var toggleable = this.isRadioSelectionModeInColumn() || this.isCheckboxSelectionModeInColumn() || this.allowMetaKeySelection(event);
          this.anchorRowIndex = event.index;
          this.rangeRowIndex = event.index;
          this.anchorRowFirst = this.props.first;

          if (this.isSingleSelection()) {
            this.onSingleSelection(_objectSpread$5(_objectSpread$5({}, event), {}, {
              toggleable: toggleable,
              type: 'row'
            }));
          } else {
            this.onMultipleSelection(_objectSpread$5(_objectSpread$5({}, event), {}, {
              toggleable: toggleable,
              type: 'row'
            }));
          }
        }

        this.changeTabIndex(event.originalEvent, 'row');
      } else {
        this.focusOnElement(event.originalEvent);
      }

      this.rowTouched = false;
    }
  }, {
    key: "onRowDoubleClick",
    value: function onRowDoubleClick(e) {
      var event = e.originalEvent;

      if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isClickable(event.target)) {
        return;
      }

      if (this.props.onRowDoubleClick) {
        this.props.onRowDoubleClick(e);
      }
    }
  }, {
    key: "onRowRightClick",
    value: function onRowRightClick(event) {
      if (this.props.onContextMenu || this.props.onContextMenuSelectionChange) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.clearSelection();

        if (this.props.onContextMenuSelectionChange) {
          this.props.onContextMenuSelectionChange({
            originalEvent: event.originalEvent,
            value: event.data
          });
        }

        if (this.props.onContextMenu) {
          this.props.onContextMenu({
            originalEvent: event.originalEvent,
            data: event.data
          });
        }

        event.originalEvent.preventDefault();
      }
    }
  }, {
    key: "onRowTouchEnd",
    value: function onRowTouchEnd() {
      this.rowTouched = true;
    }
  }, {
    key: "onRowMouseDown",
    value: function onRowMouseDown(e) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.clearSelection();
      var event = e.originalEvent;
      if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(event.target, 'p-datatable-reorderablerow-handle')) event.currentTarget.draggable = true;else event.currentTarget.draggable = false;

      if (this.allowRowDrag(e)) {
        this.enableDragSelection(event, 'row');
        this.anchorRowIndex = e.index;
        this.rangeRowIndex = e.index;
        this.anchorRowFirst = this.props.first;
      }
    }
  }, {
    key: "onRowMouseUp",
    value: function onRowMouseUp(event) {
      var isSameRow = event.index === this.anchorRowIndex;

      if (this.allowRowDrag(event) && !isSameRow) {
        this.onRangeSelection(event, 'row');
      }
    }
  }, {
    key: "onRowToggle",
    value: function onRowToggle(event) {
      var expandedRows;
      var dataKey = this.props.dataKey;
      var hasDataKey = this.props.groupRowsBy ? dataKey === this.props.groupRowsBy : !!dataKey;

      if (hasDataKey) {
        var dataKeyValue = String(primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(event.data, dataKey));
        expandedRows = this.props.expandedRows ? _objectSpread$5({}, this.props.expandedRows) : {};

        if (expandedRows[dataKeyValue] != null) {
          delete expandedRows[dataKeyValue];

          if (this.props.onRowCollapse) {
            this.props.onRowCollapse({
              originalEvent: event,
              data: event.data
            });
          }
        } else {
          expandedRows[dataKeyValue] = true;

          if (this.props.onRowExpand) {
            this.props.onRowExpand({
              originalEvent: event,
              data: event.data
            });
          }
        }
      } else {
        var expandedRowIndex = this.findIndex(this.props.expandedRows, event.data);
        expandedRows = this.props.expandedRows ? _toConsumableArray(this.props.expandedRows) : [];

        if (expandedRowIndex !== -1) {
          expandedRows = expandedRows.filter(function (val, i) {
            return i !== expandedRowIndex;
          });

          if (this.props.onRowCollapse) {
            this.props.onRowCollapse({
              originalEvent: event,
              data: event.data
            });
          }
        } else {
          expandedRows.push(event.data);

          if (this.props.onRowExpand) {
            this.props.onRowExpand({
              originalEvent: event,
              data: event.data
            });
          }
        }
      }

      if (this.props.onRowToggle) {
        this.props.onRowToggle({
          data: expandedRows
        });
      }
    }
  }, {
    key: "onRowDragStart",
    value: function onRowDragStart(e) {
      var event = e.originalEvent,
          index = e.index;
      this.rowDragging = true;
      this.draggedRowIndex = index;
      event.dataTransfer.setData('text', 'b'); // For firefox
    }
  }, {
    key: "onRowDragOver",
    value: function onRowDragOver(e) {
      var event = e.originalEvent,
          index = e.index;

      if (this.rowDragging && this.draggedRowIndex !== index) {
        var rowElement = event.currentTarget;
        var rowY = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOffset(rowElement).top + primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getWindowScrollTop();
        var pageY = event.pageY;
        var rowMidY = rowY + primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(rowElement) / 2;
        var prevRowElement = rowElement.previousElementSibling;

        if (pageY < rowMidY) {
          primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
          this.droppedRowIndex = index;
          if (prevRowElement) primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(prevRowElement, 'p-datatable-dragpoint-bottom');else primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
        } else {
          if (prevRowElement) primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');else primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-top');
          this.droppedRowIndex = index + 1;
          primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(rowElement, 'p-datatable-dragpoint-bottom');
        }
      }

      event.preventDefault();
    }
  }, {
    key: "onRowDragLeave",
    value: function onRowDragLeave(e) {
      var event = e.originalEvent;
      var rowElement = event.currentTarget;
      var prevRowElement = rowElement.previousElementSibling;

      if (prevRowElement) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(prevRowElement, 'p-datatable-dragpoint-bottom');
      }

      primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-bottom');
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(rowElement, 'p-datatable-dragpoint-top');
    }
  }, {
    key: "onRowDragEnd",
    value: function onRowDragEnd(e) {
      var event = e.originalEvent;
      this.rowDragging = false;
      this.draggedRowIndex = null;
      this.droppedRowIndex = null;
      event.currentTarget.draggable = false;
    }
  }, {
    key: "onRowDrop",
    value: function onRowDrop(e) {
      var event = e.originalEvent;

      if (this.droppedRowIndex != null) {
        var dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;

        var val = _toConsumableArray(this.props.value);

        primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.reorderArray(val, this.draggedRowIndex, dropIndex);

        if (this.props.onRowReorder) {
          this.props.onRowReorder({
            originalEvent: event,
            value: val,
            dragIndex: this.draggedRowIndex,
            dropIndex: this.droppedRowIndex
          });
        }
      } //cleanup


      this.onRowDragLeave(e);
      this.onRowDragEnd(e);
      event.preventDefault();
    }
  }, {
    key: "onRadioChange",
    value: function onRadioChange(event) {
      this.onSingleSelection(_objectSpread$5(_objectSpread$5({}, event), {}, {
        toggleable: true,
        type: 'radio'
      }));
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(event) {
      this.onMultipleSelection(_objectSpread$5(_objectSpread$5({}, event), {}, {
        toggleable: true,
        type: 'checkbox'
      }));
    }
  }, {
    key: "onDragSelectionMouseMove",
    value: function onDragSelectionMouseMove(event) {
      var _this$initialDragPosi = this.initialDragPosition,
          x = _this$initialDragPosi.x,
          y = _this$initialDragPosi.y;
      var dx = event.clientX - x;
      var dy = event.clientY - y;
      if (dy < 0) this.dragSelectionHelper.style.top = "".concat(event.pageY + 5, "px");
      if (dx < 0) this.dragSelectionHelper.style.left = "".concat(event.pageX + 5, "px");
      this.dragSelectionHelper.style.height = "".concat(Math.abs(dy), "px");
      this.dragSelectionHelper.style.width = "".concat(Math.abs(dx), "px");
      event.preventDefault();
    }
  }, {
    key: "onDragSelectionMouseUp",
    value: function onDragSelectionMouseUp() {
      if (this.dragSelectionHelper) {
        this.dragSelectionHelper.remove();
        this.dragSelectionHelper = null;
      }

      document.removeEventListener('mousemove', this.onDragSelectionMouseMove);
      document.removeEventListener('mouseup', this.onDragSelectionMouseUp);
    }
  }, {
    key: "onCellClick",
    value: function onCellClick(event) {
      if (!this.allowSelection(event)) {
        return;
      }

      this.props.onCellClick && this.props.onCellClick(event);

      if (this.allowCellSelection()) {
        if (this.allowRangeSelection(event)) {
          this.onRangeSelection(event, 'cell');
        } else {
          var toggleable = this.allowMetaKeySelection(event);

          var originalEvent = event.originalEvent,
              data = _objectWithoutProperties(event, _excluded);

          this.anchorRowIndex = event.rowIndex;
          this.rangeRowIndex = event.rowIndex;
          this.anchorRowFirst = this.props.first;
          this.anchorCellIndex = event.cellIndex;

          if (this.isSingleSelection()) {
            this.onSingleSelection({
              originalEvent: originalEvent,
              data: data,
              index: event.rowIndex,
              toggleable: toggleable,
              type: 'cell'
            });
          } else {
            this.onMultipleSelection({
              originalEvent: originalEvent,
              data: data,
              index: event.rowIndex,
              toggleable: toggleable,
              type: 'cell'
            });
          }
        }

        this.changeTabIndex(event.originalEvent, 'cell');
      }

      this.rowTouched = false;
    }
  }, {
    key: "onCellMouseDown",
    value: function onCellMouseDown(event) {
      if (this.allowCellDrag(event)) {
        this.enableDragSelection(event.originalEvent);
        this.anchorRowIndex = event.rowIndex;
        this.rangeRowIndex = event.rowIndex;
        this.anchorRowFirst = this.props.first;
        this.anchorCellIndex = event.cellIndex;
      }
    }
  }, {
    key: "onCellMouseUp",
    value: function onCellMouseUp(event) {
      var isSameCell = event.rowIndex === this.anchorRowIndex && event.cellIndex === this.anchorCellIndex;

      if (this.allowCellDrag(event) && !isSameCell) {
        this.onRangeSelection(event, 'cell');
      }
    }
  }, {
    key: "bindDragSelectionEvents",
    value: function bindDragSelectionEvents() {
      document.addEventListener('mousemove', this.onDragSelectionMouseMove);
      document.addEventListener('mouseup', this.onDragSelectionMouseUp);
      document.body.appendChild(this.dragSelectionHelper);
    }
  }, {
    key: "unbindDragSelectionEvents",
    value: function unbindDragSelectionEvents() {
      this.onDragSelectionMouseUp();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.frozenRow) {
        this.updateFrozenRowStickyPosition();
      }

      if (this.props.scrollable && this.props.rowGroupMode === 'subheader') {
        this.updateFrozenRowGroupHeaderStickyPosition();
      }

      if (!this.props.isVirtualScrollerDisabled && this.getVirtualScrollerOption('vertical')) {
        this.updateVirtualScrollerPosition();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.frozenRow) {
        this.updateFrozenRowStickyPosition();
      }

      if (this.props.scrollable && this.props.rowGroupMode === 'subheader') {
        this.updateFrozenRowGroupHeaderStickyPosition();
      }

      if (!this.props.isVirtualScrollerDisabled && this.getVirtualScrollerOption('vertical') && this.getVirtualScrollerOption('itemSize', prevProps.virtualScrollerOptions) !== this.getVirtualScrollerOption('itemSize')) {
        this.updateVirtualScrollerPosition();
      }

      if (this.props.paginator && this.isMultipleSelection() && this.props.first !== prevProps.first) {
        this.anchorRowIndex = null;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.dragSelection) {
        this.unbindDragSelectionEvents();
      }
    }
  }, {
    key: "renderEmptyContent",
    value: function renderEmptyContent() {
      if (!this.props.loading) {
        var colSpan = this.getColumnsLength();
        var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(this.props.emptyMessage, {
          props: this.props,
          frozen: this.props.frozenRow
        }) || (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.localeOption)('emptyMessage');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
          className: "p-datatable-emptymessage",
          role: "row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          colSpan: colSpan,
          role: "cell"
        }, content));
      }

      return null;
    }
  }, {
    key: "renderGroupHeader",
    value: function renderGroupHeader(rowData, index, expanded, isSubheaderGrouping, colSpan) {
      if (isSubheaderGrouping && this.shouldRenderRowGroupHeader(this.props.value, rowData, index - this.props.first)) {
        var style = this.rowGroupHeaderStyle();
        var toggler = this.props.expandableRowGroups && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RowTogglerButton, {
          onClick: this.onRowToggle,
          rowData: rowData,
          expanded: expanded,
          expandedRowIcon: this.props.expandedRowIcon,
          collapsedRowIcon: this.props.collapsedRowIcon
        });
        var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(this.props.rowGroupHeaderTemplate, rowData, {
          index: index,
          props: this.props.tableProps
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
          className: "p-rowgroup-header",
          style: style,
          role: "row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          colSpan: colSpan
        }, toggler, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "p-rowgroup-header-name"
        }, content)));
      }

      return null;
    }
  }, {
    key: "renderRow",
    value: function renderRow(rowData, index, expanded) {
      if (!this.props.expandableRowGroups || expanded) {
        var selected = this.isSelectionEnabled() ? this.isSelected(rowData) : false;
        var contextMenuSelected = this.isContextMenuSelected(rowData);
        var allowRowSelection = this.allowRowSelection();
        var allowCellSelection = this.allowCellSelection();
        var editing = this.isRowEditing(rowData);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BodyRow, {
          tableProps: this.props.tableProps,
          tableSelector: this.props.tableSelector,
          value: this.props.value,
          columns: this.props.columns,
          rowData: rowData,
          index: index,
          selected: selected,
          contextMenuSelected: contextMenuSelected,
          onRowClick: this.onRowClick,
          onRowDoubleClick: this.onRowDoubleClick,
          onRowRightClick: this.onRowRightClick,
          tabIndex: this.props.tabIndex,
          isSelectable: this.isSelectable,
          onRowTouchEnd: this.onRowTouchEnd,
          onRowMouseDown: this.onRowMouseDown,
          onRowMouseUp: this.onRowMouseUp,
          onRowToggle: this.onRowToggle,
          onRowDragStart: this.onRowDragStart,
          onRowDragOver: this.onRowDragOver,
          onRowDragLeave: this.onRowDragLeave,
          onRowDragEnd: this.onRowDragEnd,
          onRowDrop: this.onRowDrop,
          onRadioChange: this.onRadioChange,
          onCheckboxChange: this.onCheckboxChange,
          onCellClick: this.onCellClick,
          onCellMouseDown: this.onCellMouseDown,
          onCellMouseUp: this.onCellMouseUp,
          editing: editing,
          editingRows: this.props.editingRows,
          editingMeta: this.props.editingMeta,
          editMode: this.props.editMode,
          onRowEditChange: this.props.onRowEditChange,
          onEditingMetaChange: this.props.onEditingMetaChange,
          groupRowsBy: this.props.groupRowsBy,
          compareSelectionBy: this.props.compareSelectionBy,
          dataKey: this.props.dataKey,
          rowGroupMode: this.props.rowGroupMode,
          onRowEditInit: this.props.onRowEditInit,
          rowEditValidator: this.props.rowEditValidator,
          onRowEditSave: this.props.onRowEditSave,
          onRowEditComplete: this.props.onRowEditComplete,
          onRowEditCancel: this.props.onRowEditCancel,
          selection: this.props.selection,
          allowRowSelection: allowRowSelection,
          allowCellSelection: allowCellSelection,
          selectOnEdit: this.props.selectOnEdit,
          selectionMode: this.props.selectionMode,
          selectionModeInColumn: this.props.selectionModeInColumn,
          cellClassName: this.props.cellClassName,
          responsiveLayout: this.props.responsiveLayout,
          frozenRow: this.props.frozenRow,
          showSelectionElement: this.props.showSelectionElement,
          showRowReorderElement: this.props.showRowReorderElement,
          expanded: expanded,
          expandedRowIcon: this.props.expandedRowIcon,
          collapsedRowIcon: this.props.collapsedRowIcon,
          rowClassName: this.props.rowClassName,
          virtualScrollerOptions: this.props.virtualScrollerOptions
        });
      }
    }
  }, {
    key: "renderExpansion",
    value: function renderExpansion(rowData, index, expanded, isSubheaderGrouping, colSpan) {
      if (expanded && !(isSubheaderGrouping && this.props.expandableRowGroups)) {
        var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(this.props.rowExpansionTemplate, rowData, {
          index: index
        });
        var id = "".concat(this.props.tableSelector, "_content_").concat(index, "_expanded");
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
          id: id,
          className: "p-datatable-row-expansion",
          role: "row"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
          role: "cell",
          colSpan: colSpan
        }, content));
      }

      return null;
    }
  }, {
    key: "renderGroupFooter",
    value: function renderGroupFooter(rowData, index, expanded, isSubheaderGrouping, colSpan) {
      if (isSubheaderGrouping && this.shouldRenderRowGroupFooter(this.props.value, rowData, index - this.props.first, expanded)) {
        var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(this.props.rowGroupFooterTemplate, rowData, {
          index: index,
          colSpan: colSpan,
          props: this.props.tableProps
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
          className: "p-rowgroup-footer",
          role: "row"
        }, content);
      }

      return null;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this5 = this;

      return this.props.value.map(function (rowData, i) {
        var index = _this5.getVirtualScrollerOption('getItemOptions') ? _this5.getVirtualScrollerOption('getItemOptions')(i).index : _this5.props.first + i;

        var key = _this5.getRowKey(rowData, index);

        var expanded = _this5.isRowExpanded(rowData);

        var isSubheaderGrouping = _this5.isSubheaderGrouping();

        var colSpan = _this5.getColumnsLength();

        var groupHeader = _this5.renderGroupHeader(rowData, index, expanded, isSubheaderGrouping, colSpan);

        var row = _this5.renderRow(rowData, index, expanded);

        var expansion = _this5.renderExpansion(rowData, index, expanded, isSubheaderGrouping, colSpan);

        var groupFooter = _this5.renderGroupFooter(rowData, index, expanded, isSubheaderGrouping, colSpan);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: key
        }, groupHeader, row, expansion, groupFooter);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-datatable-tbody', this.props.className);
      var content = this.props.empty ? this.renderEmptyContent() : this.renderContent();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", {
        ref: this.ref,
        className: className
      }, content);
    }
  }]);

  return TableBody;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var FooterCell = /*#__PURE__*/function (_Component) {
  _inherits(FooterCell, _Component);

  var _super = _createSuper$6(FooterCell);

  function FooterCell(props) {
    var _this;

    _classCallCheck(this, FooterCell);

    _this = _super.call(this, props);
    _this.state = {
      styleObject: {}
    };
    return _this;
  }

  _createClass(FooterCell, [{
    key: "getColumnProp",
    value: function getColumnProp(prop) {
      return this.props.column.props[prop];
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var footerStyle = this.getColumnProp('footerStyle');
      var columnStyle = this.getColumnProp('style');
      return this.getColumnProp('frozen') ? Object.assign({}, columnStyle, footerStyle, this.state.styleObject) : Object.assign({}, columnStyle, footerStyle);
    }
  }, {
    key: "updateStickyPosition",
    value: function updateStickyPosition() {
      if (this.getColumnProp('frozen')) {
        var styleObject = _objectSpread$4({}, this.state.styleObject);

        var align = this.getColumnProp('alignFrozen');

        if (align === 'right') {
          var right = 0;
          var next = this.el.nextElementSibling;

          if (next) {
            right = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
          }

          styleObject['right'] = right + 'px';
        } else {
          var left = 0;
          var prev = this.el.previousElementSibling;

          if (prev) {
            left = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
          }

          styleObject['left'] = left + 'px';
        }

        this.setState({
          styleObject: styleObject
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.getColumnProp('frozen')) {
        this.updateStickyPosition();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.getColumnProp('frozen')) {
        this.updateStickyPosition();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = this.getStyle();
      var align = this.getColumnProp('align');
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)(this.getColumnProp('footerClassName'), this.getColumnProp('className'), _defineProperty({
        'p-frozen-column': this.getColumnProp('frozen')
      }, "p-align-".concat(align), !!align));
      var colSpan = this.getColumnProp('colSpan');
      var rowSpan = this.getColumnProp('rowSpan');
      var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(this.getColumnProp('footer'), {
        props: this.props.tableProps
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
        ref: function ref(el) {
          return _this2.el = el;
        },
        style: style,
        className: className,
        role: "cell",
        colSpan: colSpan,
        rowSpan: rowSpan
      }, content);
    }
  }]);

  return FooterCell;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var TableFooter = /*#__PURE__*/function (_Component) {
  _inherits(TableFooter, _Component);

  var _super = _createSuper$5(TableFooter);

  function TableFooter() {
    _classCallCheck(this, TableFooter);

    return _super.apply(this, arguments);
  }

  _createClass(TableFooter, [{
    key: "hasFooter",
    value: function hasFooter() {
      return this.props.footerColumnGroup ? true : this.props.columns ? this.props.columns.some(function (col) {
        return col && col.props.footer;
      }) : false;
    }
  }, {
    key: "renderGroupFooterCells",
    value: function renderGroupFooterCells(row) {
      var columns = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(row.props.children);
      return this.renderFooterCells(columns);
    }
  }, {
    key: "renderFooterCells",
    value: function renderFooterCells(columns) {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(columns, function (col, i) {
        var isVisible = col ? !col.props.hidden : true;
        var key = col ? col.props.columnKey || col.props.field || i : i;
        return isVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterCell, {
          key: key,
          tableProps: _this.props.tableProps,
          column: col
        });
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      if (this.props.footerColumnGroup) {
        var rows = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(this.props.footerColumnGroup.props.children);
        return rows.map(function (row, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
            key: i,
            role: "row"
          }, _this2.renderGroupFooterCells(row));
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
        role: "row"
      }, this.renderFooterCells(this.props.columns));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.hasFooter()) {
        var content = this.renderContent();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tfoot", {
          className: "p-datatable-tfoot"
        }, content);
      }

      return null;
    }
  }]);

  return TableFooter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var HeaderCheckbox = /*#__PURE__*/function (_Component) {
  _inherits(HeaderCheckbox, _Component);

  var _super = _createSuper$4(HeaderCheckbox);

  function HeaderCheckbox(props) {
    var _this;

    _classCallCheck(this, HeaderCheckbox);

    _this = _super.call(this, props);
    _this.state = {
      focused: false
    };
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HeaderCheckbox, [{
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      if (!this.props.disabled) {
        this.setState({
          focused: true
        });
        this.props.onChange({
          originalEvent: event,
          checked: !this.props.checked
        });
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.code === 'Space') {
        this.onClick(event);
        event.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var boxClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-checkbox-box p-component', {
        'p-highlight': this.props.checked,
        'p-disabled': this.props.disabled,
        'p-focus': this.state.focused
      });
      var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-checkbox-icon', {
        'pi pi-check': this.props.checked
      });
      var tabIndex = this.props.disabled ? null : 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-checkbox p-component",
        onClick: this.onClick
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: boxClassName,
        role: "checkbox",
        "aria-checked": this.props.checked,
        tabIndex: tabIndex,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: iconClassName
      })));
    }
  }]);

  return HeaderCheckbox;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ColumnFilter = /*#__PURE__*/function (_Component) {
  _inherits(ColumnFilter, _Component);

  var _super = _createSuper$3(ColumnFilter);

  function ColumnFilter(props) {
    var _this;

    _classCallCheck(this, ColumnFilter);

    _this = _super.call(this, props);
    _this.state = {
      overlayVisible: false
    };
    _this.overlayRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    _this.filterCallback = _this.filterCallback.bind(_assertThisInitialized(_this));
    _this.filterApplyCallback = _this.filterApplyCallback.bind(_assertThisInitialized(_this));
    _this.onOperatorChange = _this.onOperatorChange.bind(_assertThisInitialized(_this));
    _this.addConstraint = _this.addConstraint.bind(_assertThisInitialized(_this));
    _this.clearFilter = _this.clearFilter.bind(_assertThisInitialized(_this));
    _this.applyFilter = _this.applyFilter.bind(_assertThisInitialized(_this));
    _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
    _this.toggleMenu = _this.toggleMenu.bind(_assertThisInitialized(_this));
    _this.onOverlayEnter = _this.onOverlayEnter.bind(_assertThisInitialized(_this));
    _this.onOverlayExit = _this.onOverlayExit.bind(_assertThisInitialized(_this));
    _this.onOverlayExited = _this.onOverlayExited.bind(_assertThisInitialized(_this));
    _this.onContentKeyDown = _this.onContentKeyDown.bind(_assertThisInitialized(_this));
    _this.onContentClick = _this.onContentClick.bind(_assertThisInitialized(_this));
    _this.onContentMouseDown = _this.onContentMouseDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ColumnFilter, [{
    key: "field",
    get: function get() {
      return this.getColumnProp('filterField') || this.getColumnProp('field');
    }
  }, {
    key: "overlay",
    get: function get() {
      return this.overlayRef ? this.overlayRef.current : null;
    }
  }, {
    key: "filterModel",
    get: function get() {
      return this.props.filters[this.field];
    }
  }, {
    key: "filterStoreModel",
    get: function get() {
      return this.props.filtersStore[this.field];
    }
  }, {
    key: "hasFilter",
    value: function hasFilter() {
      if (this.props.filtersStore) {
        var fieldFilter = this.props.filtersStore[this.field];
        return fieldFilter && (fieldFilter.operator ? !this.isFilterBlank(fieldFilter.constraints[0].value) : !this.isFilterBlank(fieldFilter.value));
      }

      return false;
    }
  }, {
    key: "hasRowFilter",
    value: function hasRowFilter() {
      return this.filterModel && !this.isFilterBlank(this.filterModel.value);
    }
  }, {
    key: "isFilterBlank",
    value: function isFilterBlank(filter) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isEmpty(filter);
    }
  }, {
    key: "isRowMatchModeSelected",
    value: function isRowMatchModeSelected(matchMode) {
      return this.filterModel && this.filterModel.matchMode === matchMode;
    }
  }, {
    key: "showMenuButton",
    value: function showMenuButton() {
      return this.getColumnProp('showFilterMenu') && (this.props.display === 'row' ? this.getColumnProp('dataType') !== 'boolean' : true);
    }
  }, {
    key: "matchModes",
    value: function matchModes() {
      return this.getColumnProp('filterMatchModeOptions') || primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].filterMatchModeOptions[this.findDataType()].map(function (key) {
        return {
          label: (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.localeOption)(key),
          value: key
        };
      });
    }
  }, {
    key: "isShowMatchModes",
    value: function isShowMatchModes() {
      return this.getColumnProp('dataType') !== 'boolean' && this.getColumnProp('showFilterMatchModes') && this.matchModes() && this.getColumnProp('showFilterMenuOptions');
    }
  }, {
    key: "isShowOperator",
    value: function isShowOperator() {
      return this.getColumnProp('showFilterOperator') && this.filterModel && this.filterModel.operator && this.getColumnProp('showFilterMenuOptions');
    }
  }, {
    key: "showRemoveIcon",
    value: function showRemoveIcon() {
      return this.fieldConstraints().length > 1;
    }
  }, {
    key: "isShowAddConstraint",
    value: function isShowAddConstraint() {
      return this.getColumnProp('showAddButton') && this.filterModel && this.filterModel.operator && this.fieldConstraints() && this.fieldConstraints().length < this.getColumnProp('maxConstraints') && this.getColumnProp('showFilterMenuOptions');
    }
  }, {
    key: "isOutsideClicked",
    value: function isOutsideClicked(target) {
      return !this.isTargetClicked(target) && this.overlayRef && this.overlayRef.current && !(this.overlayRef.current.isSameNode(target) || this.overlayRef.current.contains(target));
    }
  }, {
    key: "isTargetClicked",
    value: function isTargetClicked(target) {
      return this.icon && (this.icon.isSameNode(target) || this.icon.contains(target));
    }
  }, {
    key: "getColumnProp",
    value: function getColumnProp(prop) {
      return this.props.column.props[prop];
    }
  }, {
    key: "getDefaultConstraint",
    value: function getDefaultConstraint() {
      if (this.props.filtersStore && this.filterStoreModel) {
        if (this.filterStoreModel.operator) {
          return {
            matchMode: this.filterStoreModel.constraints[0].matchMode,
            operator: this.filterStoreModel.operator
          };
        } else {
          return {
            matchMode: this.filterStoreModel.matchMode
          };
        }
      }
    }
  }, {
    key: "findDataType",
    value: function findDataType() {
      var dataType = this.getColumnProp('dataType');
      var matchMode = this.getColumnProp('filterMatchMode');

      var hasMatchMode = function hasMatchMode(key) {
        return primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].filterMatchModeOptions[key].some(function (mode) {
          return mode === matchMode;
        });
      };

      if (matchMode === 'custom' && !hasMatchMode(dataType)) {
        primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].filterMatchModeOptions[dataType].push(primereact_api__WEBPACK_IMPORTED_MODULE_3__.FilterMatchMode.CUSTOM);
        return dataType;
      } else if (matchMode) {
        return Object.keys(primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].filterMatchModeOptions).find(function (key) {
          return hasMatchMode(key);
        }) || dataType;
      }

      return dataType;
    }
  }, {
    key: "clearFilter",
    value: function clearFilter() {
      var field = this.field;
      var filterClearCallback = this.getColumnProp('onFilterClear');
      var defaultConstraint = this.getDefaultConstraint();

      var filters = _objectSpread$3({}, this.props.filters);

      if (filters[field].operator) {
        filters[field].constraints.splice(1);
        filters[field].operator = defaultConstraint.operator;
        filters[field].constraints[0] = {
          value: null,
          matchMode: defaultConstraint.matchMode
        };
      } else {
        filters[field].value = null;
        filters[field].matchMode = defaultConstraint.matchMode;
      }

      filterClearCallback && filterClearCallback();
      this.props.onFilterChange(filters);
      this.props.onFilterApply();
      this.hide();
    }
  }, {
    key: "applyFilter",
    value: function applyFilter() {
      var filterApplyClickCallback = this.getColumnProp('onFilterApplyClick');
      filterApplyClickCallback && filterApplyClickCallback({
        field: this.field,
        constraints: this.filterModel
      });
      this.props.onFilterApply();
      this.hide();
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      this.setState(function (prevState) {
        return {
          overlayVisible: !prevState.overlayVisible
        };
      });
    }
  }, {
    key: "onToggleButtonKeyDown",
    value: function onToggleButtonKeyDown(event) {
      switch (event.key) {
        case 'Escape':
        case 'Tab':
          this.hide();
          break;

        case 'ArrowDown':
          if (this.state.overlayVisible) {
            var focusable = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getFirstFocusableElement(this.overlay);
            focusable && focusable.focus();
            event.preventDefault();
          } else if (event.altKey) {
            this.setState({
              overlayVisible: true
            });
            event.preventDefault();
          }

          break;
      }
    }
  }, {
    key: "onContentKeyDown",
    value: function onContentKeyDown(event) {
      if (event.key === 'Escape') {
        this.hide();
        this.icon && this.icon.focus();
      }
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(event, index) {
      var filters = _objectSpread$3({}, this.props.filters);

      var value = event.target.value;

      if (this.props.display === 'menu') {
        filters[this.field].constraints[index].value = value;
      } else {
        filters[this.field].value = value;
      }

      this.props.onFilterChange(filters);

      if (!this.getColumnProp('showApplyButton') || this.props.display === 'row') {
        this.props.onFilterApply();
      }
    }
  }, {
    key: "onRowMatchModeChange",
    value: function onRowMatchModeChange(matchMode) {
      var filterMatchModeChangeCallback = this.getColumnProp('onFilterMatchModeChange');

      var filters = _objectSpread$3({}, this.props.filters);

      filters[this.field].matchMode = matchMode;
      filterMatchModeChangeCallback && filterMatchModeChangeCallback({
        field: this.field,
        matchMode: matchMode
      });
      this.props.onFilterChange(filters);
      this.props.onFilterApply();
      this.hide();
    }
  }, {
    key: "onRowMatchModeKeyDown",
    value: function onRowMatchModeKeyDown(event, matchMode, clear) {
      var item = event.target;

      switch (event.key) {
        case 'ArrowDown':
          var nextItem = this.findNextItem(item);

          if (nextItem) {
            item.removeAttribute('tabindex');
            nextItem.tabIndex = 0;
            nextItem.focus();
          }

          event.preventDefault();
          break;

        case 'ArrowUp':
          var prevItem = this.findPrevItem(item);

          if (prevItem) {
            item.removeAttribute('tabindex');
            prevItem.tabIndex = 0;
            prevItem.focus();
          }

          event.preventDefault();
          break;

        case 'Enter':
          clear ? this.clearFilter() : this.onRowMatchModeChange(matchMode.value);
          event.preventDefault();
          break;
      }
    }
  }, {
    key: "onOperatorChange",
    value: function onOperatorChange(e) {
      var filterOperationChangeCallback = this.getColumnProp('onFilterOperatorChange');
      var value = e.value;

      var filters = _objectSpread$3({}, this.props.filters);

      filters[this.field].operator = value;
      this.props.onFilterChange(filters);
      filterOperationChangeCallback && filterOperationChangeCallback({
        field: this.field,
        operator: value
      });

      if (!this.getColumnProp('showApplyButton')) {
        this.props.onFilterApply();
      }
    }
  }, {
    key: "onMenuMatchModeChange",
    value: function onMenuMatchModeChange(value, index) {
      var filterMatchModeChangeCallback = this.getColumnProp('onFilterMatchModeChange');

      var filters = _objectSpread$3({}, this.props.filters);

      filters[this.field].constraints[index].matchMode = value;
      this.props.onFilterChange(filters);
      filterMatchModeChangeCallback && filterMatchModeChangeCallback({
        field: this.field,
        matchMode: value,
        index: index
      });

      if (!this.getColumnProp('showApplyButton')) {
        this.props.onFilterApply();
      }
    }
  }, {
    key: "addConstraint",
    value: function addConstraint() {
      var filterConstraintAddCallback = this.getColumnProp('onFilterConstraintAdd');
      var defaultConstraint = this.getDefaultConstraint();

      var filters = _objectSpread$3({}, this.props.filters);

      var newConstraint = {
        value: null,
        matchMode: defaultConstraint.matchMode
      };
      filters[this.field].constraints.push(newConstraint);
      filterConstraintAddCallback && filterConstraintAddCallback({
        field: this.field,
        constraint: newConstraint
      });
      this.props.onFilterChange(filters);

      if (!this.getColumnProp('showApplyButton')) {
        this.props.onFilterApply();
      }
    }
  }, {
    key: "removeConstraint",
    value: function removeConstraint(index) {
      var filterConstraintRemoveCallback = this.getColumnProp('onFilterConstraintRemove');

      var filters = _objectSpread$3({}, this.props.filters);

      var removedConstraint = filters[this.field].constraints.splice(index, 1);
      filterConstraintRemoveCallback && filterConstraintRemoveCallback({
        field: this.field,
        constraint: removedConstraint
      });
      this.props.onFilterChange(filters);

      if (!this.getColumnProp('showApplyButton')) {
        this.props.onFilterApply();
      }
    }
  }, {
    key: "findNextItem",
    value: function findNextItem(item) {
      var nextItem = item.nextElementSibling;
      if (nextItem) return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(nextItem, 'p-column-filter-separator') ? this.findNextItem(nextItem) : nextItem;else return item.parentElement.firstElementChild;
    }
  }, {
    key: "findPrevItem",
    value: function findPrevItem(item) {
      var prevItem = item.previousElementSibling;
      if (prevItem) return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(prevItem, 'p-column-filter-separator') ? this.findPrevItem(prevItem) : prevItem;else return item.parentElement.lastElementChild;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.setState({
        overlayVisible: false
      });
    }
  }, {
    key: "onContentClick",
    value: function onContentClick(event) {
      this.selfClick = true;
      primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__.OverlayService.emit('overlay-click', {
        originalEvent: event,
        target: this.overlay
      });
    }
  }, {
    key: "onContentMouseDown",
    value: function onContentMouseDown() {
      this.selfClick = true;
    }
  }, {
    key: "onOverlayEnter",
    value: function onOverlayEnter() {
      var _this2 = this;

      primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('overlay', this.overlay, primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].autoZIndex, primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].zIndex.overlay);
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.alignOverlay(this.overlay, this.icon, primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].appendTo, false);
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();

      this.overlayEventListener = function (e) {
        if (!_this2.isOutsideClicked(e.target)) {
          _this2.selfClick = true;
        }
      };

      primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__.OverlayService.on('overlay-click', this.overlayEventListener);
    }
  }, {
    key: "onOverlayExit",
    value: function onOverlayExit() {
      this.onOverlayHide();
    }
  }, {
    key: "onOverlayExited",
    value: function onOverlayExited() {
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.overlay);
    }
  }, {
    key: "onOverlayHide",
    value: function onOverlayHide() {
      this.unbindOutsideClickListener();
      this.unbindResizeListener();
      this.unbindScrollListener();
      primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__.OverlayService.off('overlay-click', this.overlayEventListener);
      this.overlayEventListener = null;
    }
  }, {
    key: "bindOutsideClickListener",
    value: function bindOutsideClickListener() {
      var _this3 = this;

      if (!this.outsideClickListener) {
        this.outsideClickListener = function (event) {
          if (!_this3.selfClick && _this3.isOutsideClicked(event.target)) {
            _this3.hide();
          }

          _this3.selfClick = false;
        };

        document.addEventListener('click', this.outsideClickListener);
      }
    }
  }, {
    key: "unbindOutsideClickListener",
    value: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener);
        this.outsideClickListener = null;
        this.selfClick = false;
      }
    }
  }, {
    key: "bindScrollListener",
    value: function bindScrollListener() {
      var _this4 = this;

      if (!this.scrollHandler) {
        this.scrollHandler = new primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ConnectedOverlayScrollHandler(this.icon, function () {
          if (_this4.state.overlayVisible) {
            _this4.hide();
          }
        });
      }

      this.scrollHandler.bindScrollListener();
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
  }, {
    key: "bindResizeListener",
    value: function bindResizeListener() {
      var _this5 = this;

      if (!this.resizeListener) {
        this.resizeListener = function () {
          if (_this5.state.overlayVisible && !primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isTouchDevice()) {
            _this5.hide();
          }
        };

        window.addEventListener('resize', this.resizeListener);
      }
    }
  }, {
    key: "unbindResizeListener",
    value: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    }
  }, {
    key: "fieldConstraints",
    value: function fieldConstraints() {
      return this.filterModel ? this.filterModel.constraints || [this.filterModel] : [];
    }
  }, {
    key: "operator",
    value: function operator() {
      return this.filterModel.operator;
    }
  }, {
    key: "operatorOptions",
    value: function operatorOptions() {
      return [{
        label: (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.localeOption)('matchAll'),
        value: primereact_api__WEBPACK_IMPORTED_MODULE_3__.FilterOperator.AND
      }, {
        label: (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.localeOption)('matchAny'),
        value: primereact_api__WEBPACK_IMPORTED_MODULE_3__.FilterOperator.OR
      }];
    }
  }, {
    key: "noFilterLabel",
    value: function noFilterLabel() {
      return (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.localeOption)('noFilter');
    }
  }, {
    key: "removeRuleButtonLabel",
    value: function removeRuleButtonLabel() {
      return (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.localeOption)('removeRule');
    }
  }, {
    key: "addRuleButtonLabel",
    value: function addRuleButtonLabel() {
      return (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.localeOption)('addRule');
    }
  }, {
    key: "clearButtonLabel",
    value: function clearButtonLabel() {
      return (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.localeOption)('clear');
    }
  }, {
    key: "applyButtonLabel",
    value: function applyButtonLabel() {
      return (0,primereact_api__WEBPACK_IMPORTED_MODULE_3__.localeOption)('apply');
    }
  }, {
    key: "filterCallback",
    value: function filterCallback(value) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var filters = _objectSpread$3({}, this.props.filters);

      var meta = filters[this.field];
      this.props.display === 'menu' && meta && meta.operator ? filters[this.field].constraints[index].value = value : filters[this.field].value = value;
      this.props.onFilterChange(filters);
    }
  }, {
    key: "filterApplyCallback",
    value: function filterApplyCallback() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      args && this.filterCallback(args[0], args[1]);
      this.props.onFilterApply();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.display === 'menu' && this.state.overlayVisible) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.alignOverlay(this.overlay, this.icon, primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].appendTo, false);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.overlayEventListener) {
        primereact_overlayservice__WEBPACK_IMPORTED_MODULE_4__.OverlayService.off('overlay-click', this.overlayEventListener);
        this.overlayEventListener = null;
      }

      if (this.overlay) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.overlay);
        this.onOverlayHide();
      }
    }
  }, {
    key: "renderFilterElement",
    value: function renderFilterElement(model, index) {
      var _this6 = this;

      var value = model ? model.value : null;
      return this.getColumnProp('filterElement') ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(this.getColumnProp('filterElement'), {
        field: this.field,
        index: index,
        filterModel: model,
        value: value,
        filterApplyCallback: this.filterApplyCallback,
        filterCallback: this.filterCallback
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, {
        type: this.getColumnProp('filterType'),
        value: value || '',
        onChange: function onChange(e) {
          return _this6.onInputChange(e, index);
        },
        className: "p-column-filter",
        placeholder: this.getColumnProp('filterPlaceholder'),
        maxLength: this.getColumnProp('filterMaxLength')
      });
    }
  }, {
    key: "renderRowFilterElement",
    value: function renderRowFilterElement() {
      if (this.props.display === 'row') {
        var content = this.renderFilterElement(this.filterModel, 0);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "p-fluid p-column-filter-element"
        }, content);
      }

      return null;
    }
  }, {
    key: "renderMenuFilterElement",
    value: function renderMenuFilterElement(fieldConstraint, index) {
      if (this.props.display === 'menu') {
        return this.renderFilterElement(fieldConstraint, index);
      }

      return null;
    }
  }, {
    key: "renderMenuButton",
    value: function renderMenuButton() {
      var _this7 = this;

      if (this.showMenuButton()) {
        var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-column-filter-menu-button p-link', {
          'p-column-filter-menu-button-open': this.state.overlayVisible,
          'p-column-filter-menu-button-active': this.hasFilter()
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          ref: function ref(el) {
            return _this7.icon = el;
          },
          type: "button",
          className: className,
          "aria-haspopup": true,
          "aria-expanded": this.state.overlayVisible,
          onClick: this.toggleMenu,
          onKeyDown: this.onToggleButtonKeyDown
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "pi pi-filter-icon pi-filter"
        }));
      }

      return null;
    }
  }, {
    key: "renderClearButton",
    value: function renderClearButton() {
      if (this.getColumnProp('showClearButton') && this.props.display === 'row') {
        var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-column-filter-clear-button p-link', {
          'p-hidden-space': !this.hasRowFilter()
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          className: className,
          type: "button",
          onClick: this.clearFilter
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "pi pi-filter-slash"
        }));
      }

      return null;
    }
  }, {
    key: "renderRowItems",
    value: function renderRowItems() {
      var _this8 = this;

      if (this.isShowMatchModes()) {
        var matchModes = this.matchModes();
        var noFilterLabel = this.noFilterLabel();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
          className: "p-column-filter-row-items"
        }, matchModes.map(function (matchMode, i) {
          var value = matchMode.value,
              label = matchMode.label;
          var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-column-filter-row-item', {
            'p-highlight': _this8.isRowMatchModeSelected(value)
          });
          var tabIndex = i === 0 ? 0 : null;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
            className: className,
            key: label,
            onClick: function onClick() {
              return _this8.onRowMatchModeChange(value);
            },
            onKeyDown: function onKeyDown(e) {
              return _this8.onRowMatchModeKeyDown(e, matchMode);
            },
            tabIndex: tabIndex
          }, label);
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: "p-column-filter-separator"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: "p-column-filter-row-item",
          onClick: this.clearFilter,
          onKeyDown: function onKeyDown(e) {
            return _this8.onRowMatchModeKeyDown(e, null, true);
          }
        }, noFilterLabel));
      }

      return null;
    }
  }, {
    key: "renderOperator",
    value: function renderOperator() {
      if (this.isShowOperator()) {
        var options = this.operatorOptions();
        var value = this.operator();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "p-column-filter-operator"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, {
          options: options,
          value: value,
          onChange: this.onOperatorChange,
          className: "p-column-filter-operator-dropdown"
        }));
      }

      return null;
    }
  }, {
    key: "renderMatchModeDropdown",
    value: function renderMatchModeDropdown(constraint, index) {
      var _this9 = this;

      if (this.isShowMatchModes()) {
        var options = this.matchModes();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, {
          options: options,
          value: constraint.matchMode,
          onChange: function onChange(e) {
            return _this9.onMenuMatchModeChange(e.value, index);
          },
          className: "p-column-filter-matchmode-dropdown"
        });
      }

      return null;
    }
  }, {
    key: "renderRemoveButton",
    value: function renderRemoveButton(index) {
      var _this10 = this;

      if (this.showRemoveIcon()) {
        var removeRuleLabel = this.removeRuleButtonLabel();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_10__.Button, {
          type: "button",
          icon: "pi pi-trash",
          className: "p-column-filter-remove-button p-button-text p-button-danger p-button-sm",
          onClick: function onClick() {
            return _this10.removeConstraint(index);
          },
          label: removeRuleLabel
        });
      }

      return null;
    }
  }, {
    key: "renderConstraints",
    value: function renderConstraints() {
      var _this11 = this;

      var fieldConstraints = this.fieldConstraints();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-column-filter-constraints"
      }, fieldConstraints.map(function (fieldConstraint, i) {
        var matchModeDropdown = _this11.renderMatchModeDropdown(fieldConstraint, i);

        var menuFilterElement = _this11.renderMenuFilterElement(fieldConstraint, i);

        var removeButton = _this11.renderRemoveButton(i);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          key: i,
          className: "p-column-filter-constraint"
        }, matchModeDropdown, menuFilterElement, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, removeButton));
      }));
    }
  }, {
    key: "renderAddRule",
    value: function renderAddRule() {
      if (this.isShowAddConstraint()) {
        var addRuleLabel = this.addRuleButtonLabel();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "p-column-filter-add-rule"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_10__.Button, {
          type: "button",
          label: addRuleLabel,
          icon: "pi pi-plus",
          className: "p-column-filter-add-button p-button-text p-button-sm",
          onClick: this.addConstraint
        }));
      }

      return null;
    }
  }, {
    key: "renderFilterClearButton",
    value: function renderFilterClearButton() {
      if (this.getColumnProp('showClearButton')) {
        if (!this.getColumnProp('filterClear')) {
          var clearLabel = this.clearButtonLabel();
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_10__.Button, {
            type: "button",
            className: "p-button-outlined p-button-sm",
            onClick: this.clearFilter,
            label: clearLabel
          });
        }

        return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(this.getColumnProp('filterClear'), {
          field: this.field,
          filterModel: this.filterModel,
          filterClearCallback: this.clearFilter
        });
      }

      return null;
    }
  }, {
    key: "renderFilterApplyButton",
    value: function renderFilterApplyButton() {
      if (this.getColumnProp('showApplyButton')) {
        if (!this.getColumnProp('filterApply')) {
          var applyLabel = this.applyButtonLabel();
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_10__.Button, {
            type: "button",
            className: "p-button-sm",
            onClick: this.applyFilter,
            label: applyLabel
          });
        }

        return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(this.getColumnProp('filterApply'), {
          field: this.field,
          filterModel: this.filterModel,
          filterApplyCallback: this.applyFilter
        });
      }

      return null;
    }
  }, {
    key: "renderButtonBar",
    value: function renderButtonBar() {
      var clearButton = this.renderFilterClearButton();
      var applyButton = this.renderFilterApplyButton();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-column-filter-buttonbar"
      }, clearButton, applyButton);
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var operator = this.renderOperator();
      var constraints = this.renderConstraints();
      var addRule = this.renderAddRule();
      var buttonBar = this.renderButtonBar();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, operator, constraints, addRule, buttonBar);
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay() {
      var style = this.getColumnProp('filterMenuStyle');
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-column-filter-overlay p-component p-fluid', this.getColumnProp('filterMenuClassName'), {
        'p-column-filter-overlay-menu': this.props.display === 'menu',
        'p-input-filled': primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].inputStyle === 'filled',
        'p-ripple-disabled': primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].ripple === false
      });
      var filterHeader = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(this.getColumnProp('filterHeader'), {
        field: this.field,
        filterModel: this.filterModel,
        filterApplyCallback: this.filterApplyCallback
      });
      var filterFooter = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(this.getColumnProp('filterFooter'), {
        field: this.field,
        filterModel: this.filterModel,
        filterApplyCallback: this.filterApplyCallback
      });
      var items = this.props.display === 'row' ? this.renderRowItems() : this.renderItems();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_portal__WEBPACK_IMPORTED_MODULE_7__.Portal, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_csstransition__WEBPACK_IMPORTED_MODULE_6__.CSSTransition, {
        nodeRef: this.overlayRef,
        classNames: "p-connected-overlay",
        "in": this.state.overlayVisible,
        timeout: {
          enter: 120,
          exit: 100
        },
        unmountOnExit: true,
        onEnter: this.onOverlayEnter,
        onExit: this.onOverlayExit,
        onExited: this.onOverlayExited
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        ref: this.overlayRef,
        style: style,
        className: className,
        onKeyDown: this.onContentKeyDown,
        onClick: this.onContentClick,
        onMouseDown: this.onContentMouseDown
      }, filterHeader, items, filterFooter)));
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-column-filter p-fluid', {
        'p-column-filter-row': this.props.display === 'row',
        'p-column-filter-menu': this.props.display === 'menu'
      });
      var rowFilterElement = this.renderRowFilterElement();
      var menuButton = this.renderMenuButton();
      var clearButton = this.renderClearButton();
      var overlay = this.renderOverlay();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: className
      }, rowFilterElement, menuButton, clearButton, overlay);
    }
  }]);

  return ColumnFilter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var HeaderCell = /*#__PURE__*/function (_Component) {
  _inherits(HeaderCell, _Component);

  var _super = _createSuper$2(HeaderCell);

  function HeaderCell(props) {
    var _this;

    _classCallCheck(this, HeaderCell);

    _this = _super.call(this, props);
    _this.state = {
      styleObject: {}
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this)); // drag

    _this.onDragStart = _this.onDragStart.bind(_assertThisInitialized(_this));
    _this.onDragOver = _this.onDragOver.bind(_assertThisInitialized(_this));
    _this.onDragLeave = _this.onDragLeave.bind(_assertThisInitialized(_this));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_this)); // resize

    _this.onResizerMouseDown = _this.onResizerMouseDown.bind(_assertThisInitialized(_this));
    _this.onResizerClick = _this.onResizerClick.bind(_assertThisInitialized(_this));
    _this.onResizerDoubleClick = _this.onResizerDoubleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HeaderCell, [{
    key: "isBadgeVisible",
    value: function isBadgeVisible() {
      return this.props.multiSortMeta && this.props.multiSortMeta.length > 1;
    }
  }, {
    key: "isSortableDisabled",
    value: function isSortableDisabled() {
      return !this.getColumnProp('sortable') || this.getColumnProp('sortable') && (this.props.allSortableDisabled || this.getColumnProp('sortableDisabled'));
    }
  }, {
    key: "getColumnProp",
    value: function getColumnProp() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.props.column ? typeof args[0] === 'string' ? this.props.column.props[args[0]] : (args[0] || this.props.column).props[args[1]] : null;
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var headerStyle = this.getColumnProp('headerStyle');
      var columnStyle = this.getColumnProp('style');
      return this.getColumnProp('frozen') ? Object.assign({}, columnStyle, headerStyle, this.state.styleObject) : Object.assign({}, columnStyle, headerStyle);
    }
  }, {
    key: "getMultiSortMetaIndex",
    value: function getMultiSortMetaIndex() {
      var _this2 = this;

      return this.props.multiSortMeta.findIndex(function (meta) {
        return meta.field === _this2.getColumnProp('field') || meta.field === _this2.getColumnProp('sortField');
      });
    }
  }, {
    key: "getSortMeta",
    value: function getSortMeta() {
      var sorted = false;
      var sortOrder = 0;
      var metaIndex = -1;

      if (this.props.sortMode === 'single') {
        sorted = this.props.sortField && (this.props.sortField === this.getColumnProp('field') || this.props.sortField === this.getColumnProp('sortField'));
        sortOrder = sorted ? this.props.sortOrder : 0;
      } else if (this.props.sortMode === 'multiple') {
        metaIndex = this.getMultiSortMetaIndex();

        if (metaIndex > -1) {
          sorted = true;
          sortOrder = this.props.multiSortMeta[metaIndex].order;
        }
      }

      return {
        sorted: sorted,
        sortOrder: sortOrder,
        metaIndex: metaIndex
      };
    }
  }, {
    key: "getAriaSort",
    value: function getAriaSort(_ref) {
      var sorted = _ref.sorted,
          sortOrder = _ref.sortOrder;

      if (this.getColumnProp('sortable')) {
        var sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-amount-down' : 'pi-sort-amount-up-alt' : 'pi-sort-alt';
        if (sortIcon === 'pi-sort-amount-down') return 'descending';else if (sortIcon === 'pi-sort-amount-up-alt') return 'ascending';else return 'none';
      }

      return null;
    }
  }, {
    key: "updateStickyPosition",
    value: function updateStickyPosition() {
      if (this.getColumnProp('frozen')) {
        var styleObject = _objectSpread$2({}, this.state.styleObject);

        var align = this.getColumnProp('alignFrozen');

        if (align === 'right') {
          var right = 0;
          var next = this.el.nextElementSibling;

          if (next) {
            right = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(next) + parseFloat(next.style.right || 0);
          }

          styleObject['right'] = right + 'px';
        } else {
          var left = 0;
          var prev = this.el.previousElementSibling;

          if (prev) {
            left = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(prev) + parseFloat(prev.style.left || 0);
          }

          styleObject['left'] = left + 'px';
        }

        var filterRow = this.el.parentElement.nextElementSibling;

        if (filterRow) {
          var index = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.index(this.el);
          filterRow.children[index].style.left = styleObject['left'];
          filterRow.children[index].style.right = styleObject['right'];
        }

        var isSameStyle = this.state.styleObject['left'] === styleObject['left'] && this.state.styleObject['right'] === styleObject['right'];
        !isSameStyle && this.setState({
          styleObject: styleObject
        });
      }
    }
  }, {
    key: "updateSortableDisabled",
    value: function updateSortableDisabled(prevColumn) {
      if (this.getColumnProp(prevColumn, 'sortableDisabled') !== this.getColumnProp('sortableDisabled') || this.getColumnProp(prevColumn, 'sortable') !== this.getColumnProp('sortable')) {
        this.props.onSortableChange();
      }
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      if (!this.isSortableDisabled()) {
        var targetNode = event.target;

        if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(targetNode, 'p-sortable-column') || primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(targetNode, 'p-column-title') || primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(targetNode, 'p-column-header-content') || primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(targetNode, 'p-sortable-column-icon') || primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(targetNode.parentElement, 'p-sortable-column-icon')) {
          primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.clearSelection();
          this.props.onSortChange({
            originalEvent: event,
            column: this.props.column,
            sortableDisabledFields: this.props.sortableDisabledFields
          });
        }
      }
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      this.props.onColumnMouseDown({
        originalEvent: event,
        column: this.props.column
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.key === 'Enter' && event.currentTarget === this.el && primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(event.currentTarget, 'p-sortable-column')) {
        this.onClick(event);
        event.preventDefault();
      }
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(event) {
      this.props.onColumnDragStart({
        originalEvent: event,
        column: this.props.column
      });
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      this.props.onColumnDragOver({
        originalEvent: event,
        column: this.props.column
      });
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(event) {
      this.props.onColumnDragLeave({
        originalEvent: event,
        column: this.props.column
      });
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      this.props.onColumnDrop({
        originalEvent: event,
        column: this.props.column
      });
    }
  }, {
    key: "onResizerMouseDown",
    value: function onResizerMouseDown(event) {
      this.props.onColumnResizeStart({
        originalEvent: event,
        column: this.props.column
      });
    }
  }, {
    key: "onResizerClick",
    value: function onResizerClick(event) {
      if (this.props.onColumnResizerClick) {
        this.props.onColumnResizerClick({
          originalEvent: event,
          element: event.currentTarget.parentElement,
          column: this.props.column
        });
        event.preventDefault();
      }
    }
  }, {
    key: "onResizerDoubleClick",
    value: function onResizerDoubleClick(event) {
      if (this.props.onColumnResizerDoubleClick) {
        this.props.onColumnResizerDoubleClick({
          originalEvent: event,
          element: event.currentTarget.parentElement,
          column: this.props.column
        });
        event.preventDefault();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.getColumnProp('frozen')) {
        this.updateStickyPosition();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.getColumnProp('frozen')) {
        this.updateStickyPosition();
      }

      this.updateSortableDisabled(prevProps.column);
    }
  }, {
    key: "renderResizer",
    value: function renderResizer() {
      if (this.props.resizableColumns && !this.getColumnProp('frozen')) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "p-column-resizer",
          onMouseDown: this.onResizerMouseDown,
          onClick: this.onResizerClick,
          onDoubleClick: this.onResizerDoubleClick
        });
      }

      return null;
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var title = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(this.getColumnProp('header'), {
        props: this.props.tableProps
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "p-column-title"
      }, title);
    }
  }, {
    key: "renderSortIcon",
    value: function renderSortIcon(_ref2) {
      var sorted = _ref2.sorted,
          sortOrder = _ref2.sortOrder;

      if (this.getColumnProp('sortable')) {
        var sortIcon = sorted ? sortOrder < 0 ? 'pi-sort-amount-down' : 'pi-sort-amount-up-alt' : 'pi-sort-alt';
        var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-sortable-column-icon pi pi-fw', sortIcon);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: className
        });
      }

      return null;
    }
  }, {
    key: "renderBadge",
    value: function renderBadge(_ref3) {
      var metaIndex = _ref3.metaIndex;

      if (metaIndex !== -1 && this.isBadgeVisible()) {
        var value = this.props.groupRowsBy && this.props.groupRowsBy === this.props.groupRowSortField ? metaIndex : metaIndex + 1;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "p-sortable-column-badge"
        }, value);
      }

      return null;
    }
  }, {
    key: "renderCheckbox",
    value: function renderCheckbox() {
      if (this.props.showSelectAll && this.getColumnProp('selectionMode') === 'multiple' && this.props.filterDisplay !== 'row') {
        var allRowsSelected = this.props.allRowsSelected(this.props.value);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderCheckbox, {
          checked: allRowsSelected,
          onChange: this.props.onColumnCheckboxChange,
          disabled: this.props.empty
        });
      }

      return null;
    }
  }, {
    key: "renderFilter",
    value: function renderFilter() {
      if (this.props.filterDisplay === 'menu' && this.getColumnProp('filter')) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColumnFilter, {
          display: "menu",
          column: this.props.column,
          filters: this.props.filters,
          onFilterChange: this.props.onFilterChange,
          onFilterApply: this.props.onFilterApply,
          filtersStore: this.props.filtersStore
        });
      }

      return null;
    }
  }, {
    key: "renderHeader",
    value: function renderHeader(sortMeta) {
      var title = this.renderTitle();
      var sortIcon = this.renderSortIcon(sortMeta);
      var badge = this.renderBadge(sortMeta);
      var checkbox = this.renderCheckbox();
      var filter = this.renderFilter();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-column-header-content"
      }, title, sortIcon, badge, checkbox, filter);
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var _this3 = this;

      var isSortableDisabled = this.isSortableDisabled();
      var sortMeta = this.getSortMeta();
      var style = this.getStyle();
      var align = this.getColumnProp('alignHeader') || this.getColumnProp('align');
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)(this.getColumnProp('headerClassName'), this.getColumnProp('className'), _defineProperty({
        'p-sortable-column': this.getColumnProp('sortable'),
        'p-resizable-column': this.props.resizableColumns,
        'p-highlight': sortMeta.sorted,
        'p-frozen-column': this.getColumnProp('frozen'),
        'p-selection-column': this.getColumnProp('selectionMode'),
        'p-sortable-disabled': this.getColumnProp('sortable') && isSortableDisabled,
        'p-reorderable-column': this.props.reorderableColumns && this.getColumnProp('reorderable')
      }, "p-align-".concat(align), !!align));
      var tabIndex = this.getColumnProp('sortable') && !isSortableDisabled ? this.props.tabIndex : null;
      var colSpan = this.getColumnProp('colSpan');
      var rowSpan = this.getColumnProp('rowSpan');
      var ariaSort = this.getAriaSort(sortMeta);
      var resizer = this.renderResizer();
      var header = this.renderHeader(sortMeta);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
        ref: function ref(el) {
          return _this3.el = el;
        },
        style: style,
        className: className,
        tabIndex: tabIndex,
        role: "columnheader",
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        onMouseDown: this.onMouseDown,
        onDragStart: this.onDragStart,
        onDragOver: this.onDragOver,
        onDragLeave: this.onDragLeave,
        onDrop: this.onDrop,
        colSpan: colSpan,
        rowSpan: rowSpan,
        "aria-sort": ariaSort
      }, resizer, header);
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderElement();
    }
  }]);

  return HeaderCell;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var TableHeader = /*#__PURE__*/function (_Component) {
  _inherits(TableHeader, _Component);

  var _super = _createSuper$1(TableHeader);

  function TableHeader(props) {
    var _this;

    _classCallCheck(this, TableHeader);

    _this = _super.call(this, props);
    _this.state = {
      sortableDisabledFields: [],
      allSortableDisabled: false,
      styleObject: {}
    };
    _this.onSortableChange = _this.onSortableChange.bind(_assertThisInitialized(_this));
    _this.onCheckboxChange = _this.onCheckboxChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TableHeader, [{
    key: "isSingleSort",
    value: function isSingleSort() {
      return this.props.sortMode === 'single';
    }
  }, {
    key: "isMultipleSort",
    value: function isMultipleSort() {
      return this.props.sortMode === 'multiple';
    }
  }, {
    key: "isAllSortableDisabled",
    value: function isAllSortableDisabled() {
      return this.isSingleSort() && this.state.allSortableDisabled;
    }
  }, {
    key: "isColumnSorted",
    value: function isColumnSorted(column) {
      return this.props.sortField !== null ? column.props.field === this.props.sortField || column.props.sortField === this.props.sortField : false;
    }
  }, {
    key: "updateSortableDisabled",
    value: function updateSortableDisabled() {
      var _this2 = this;

      if (this.isSingleSort() || this.isMultipleSort() && this.props.onSortChange) {
        var sortableDisabledFields = [];
        var allSortableDisabled = false;
        this.props.columns.forEach(function (column) {
          if (column.props.sortableDisabled) {
            sortableDisabledFields.push(column.props.sortField || column.props.field);

            if (!allSortableDisabled && _this2.isColumnSorted(column)) {
              allSortableDisabled = true;
            }
          }
        });
        this.setState({
          sortableDisabledFields: sortableDisabledFields,
          allSortableDisabled: allSortableDisabled
        });
      }
    }
  }, {
    key: "onSortableChange",
    value: function onSortableChange() {
      this.updateSortableDisabled();
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(e) {
      this.props.onColumnCheckboxChange(e, this.props.value);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSortableDisabled();
    }
  }, {
    key: "renderGroupHeaderCells",
    value: function renderGroupHeaderCells(row) {
      var columns = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(row.props.children);
      return this.renderHeaderCells(columns);
    }
  }, {
    key: "renderHeaderCells",
    value: function renderHeaderCells(columns) {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(columns, function (col, i) {
        var isVisible = col ? !col.props.hidden : true;
        var key = col ? col.props.columnKey || col.props.field || i : i;
        return isVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderCell, {
          key: key,
          value: _this3.props.value,
          tableProps: _this3.props.tableProps,
          column: col,
          tabIndex: _this3.props.tabIndex,
          empty: _this3.props.empty,
          resizableColumns: _this3.props.resizableColumns,
          groupRowsBy: _this3.props.groupRowsBy,
          groupRowSortField: _this3.props.groupRowSortField,
          sortMode: _this3.props.sortMode,
          sortField: _this3.props.sortField,
          sortOrder: _this3.props.sortOrder,
          multiSortMeta: _this3.props.multiSortMeta,
          allSortableDisabled: _this3.isAllSortableDisabled(),
          onSortableChange: _this3.onSortableChange,
          sortableDisabledFields: _this3.state.sortableDisabledFields,
          filterDisplay: _this3.props.filterDisplay,
          filters: _this3.props.filters,
          filtersStore: _this3.props.filtersStore,
          onFilterChange: _this3.props.onFilterChange,
          onFilterApply: _this3.props.onFilterApply,
          onColumnMouseDown: _this3.props.onColumnMouseDown,
          onColumnDragStart: _this3.props.onColumnDragStart,
          onColumnDragOver: _this3.props.onColumnDragOver,
          onColumnDragLeave: _this3.props.onColumnDragLeave,
          onColumnDrop: _this3.props.onColumnDrop,
          onColumnResizeStart: _this3.props.onColumnResizeStart,
          onColumnResizerClick: _this3.props.onColumnResizerClick,
          onColumnResizerDoubleClick: _this3.props.onColumnResizerDoubleClick,
          showSelectAll: _this3.props.showSelectAll,
          allRowsSelected: _this3.props.allRowsSelected,
          onColumnCheckboxChange: _this3.onCheckboxChange,
          reorderableColumns: _this3.props.reorderableColumns,
          onSortChange: _this3.props.onSortChange
        });
      });
    }
  }, {
    key: "renderCheckbox",
    value: function renderCheckbox(selectionMode) {
      if (this.props.showSelectAll && selectionMode === 'multiple') {
        var allRowsSelected = this.props.allRowsSelected(this.props.value);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderCheckbox, {
          checked: allRowsSelected,
          onChange: this.onCheckboxChange,
          disabled: this.props.empty
        });
      }

      return null;
    }
  }, {
    key: "renderFilter",
    value: function renderFilter(column, filter) {
      if (filter) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColumnFilter, {
          display: "row",
          column: column,
          filters: this.props.filters,
          filtersStore: this.props.filtersStore,
          onFilterChange: this.props.onFilterChange,
          onFilterApply: this.props.onFilterApply
        });
      }

      return null;
    }
  }, {
    key: "renderFilterCells",
    value: function renderFilterCells() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(this.props.columns, function (col, i) {
        var isVisible = !col.props.hidden;

        if (isVisible) {
          var _col$props = col.props,
              filterHeaderStyle = _col$props.filterHeaderStyle,
              style = _col$props.style,
              filterHeaderClassName = _col$props.filterHeaderClassName,
              className = _col$props.className,
              frozen = _col$props.frozen,
              columnKey = _col$props.columnKey,
              field = _col$props.field,
              selectionMode = _col$props.selectionMode,
              filter = _col$props.filter;

          var colStyle = _objectSpread$1(_objectSpread$1({}, filterHeaderStyle || {}), style || {});

          var colClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-filter-column', filterHeaderClassName, className, {
            'p-frozen-column': frozen
          });
          var colKey = columnKey || field || i;

          var checkbox = _this4.renderCheckbox(selectionMode);

          var filterRow = _this4.renderFilter(col, filter);

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
            key: colKey,
            style: colStyle,
            className: colClassName
          }, checkbox, filterRow);
        }

        return null;
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this5 = this;

      if (this.props.headerColumnGroup) {
        var rows = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(this.props.headerColumnGroup.props.children);
        return rows.map(function (row, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
            key: i,
            role: "row"
          }, _this5.renderGroupHeaderCells(row));
        });
      } else {
        var headerRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
          role: "row"
        }, this.renderHeaderCells(this.props.columns));
        var filterRow = this.props.filterDisplay === 'row' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
          role: "row"
        }, this.renderFilterCells());
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, headerRow, filterRow);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.renderContent();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", {
        className: "p-datatable-thead"
      }, content);
    }
  }]);

  return TableHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var DataTable = /*#__PURE__*/function (_Component) {
  _inherits(DataTable, _Component);

  var _super = _createSuper(DataTable);

  function DataTable(props) {
    var _this;

    _classCallCheck(this, DataTable);

    _this = _super.call(this, props);
    _this.state = {
      d_rows: props.rows,
      columnOrder: [],
      groupRowsSortMeta: null,
      editingMeta: {},
      attributeSelector: null
    };

    if (!_this.props.onPage) {
      _this.state.first = props.first;
      _this.state.rows = props.rows;
    }

    if (!_this.props.onSort) {
      _this.state.sortField = props.sortField;
      _this.state.sortOrder = props.sortOrder;
      _this.state.multiSortMeta = props.multiSortMeta;
    }

    _this.state.d_filters = _this.cloneFilters(props.filters);

    if (!_this.props.onFilter) {
      _this.state.filters = props.filters;
    } // header


    _this.onSortChange = _this.onSortChange.bind(_assertThisInitialized(_this));
    _this.onFilterChange = _this.onFilterChange.bind(_assertThisInitialized(_this));
    _this.onFilterApply = _this.onFilterApply.bind(_assertThisInitialized(_this));
    _this.onColumnHeaderMouseDown = _this.onColumnHeaderMouseDown.bind(_assertThisInitialized(_this));
    _this.onColumnHeaderDragStart = _this.onColumnHeaderDragStart.bind(_assertThisInitialized(_this));
    _this.onColumnHeaderDragOver = _this.onColumnHeaderDragOver.bind(_assertThisInitialized(_this));
    _this.onColumnHeaderDragLeave = _this.onColumnHeaderDragLeave.bind(_assertThisInitialized(_this));
    _this.onColumnHeaderDrop = _this.onColumnHeaderDrop.bind(_assertThisInitialized(_this));
    _this.onColumnResizeStart = _this.onColumnResizeStart.bind(_assertThisInitialized(_this));
    _this.onColumnHeaderCheckboxChange = _this.onColumnHeaderCheckboxChange.bind(_assertThisInitialized(_this));
    _this.allRowsSelected = _this.allRowsSelected.bind(_assertThisInitialized(_this)); // body

    _this.onEditingMetaChange = _this.onEditingMetaChange.bind(_assertThisInitialized(_this)); //paginator

    _this.onPageChange = _this.onPageChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DataTable, [{
    key: "isCustomStateStorage",
    value: function isCustomStateStorage() {
      return this.props.stateStorage === 'custom';
    }
  }, {
    key: "isStateful",
    value: function isStateful() {
      return this.props.stateKey != null || this.isCustomStateStorage();
    }
  }, {
    key: "isVirtualScrollerDisabled",
    value: function isVirtualScrollerDisabled() {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isEmpty(this.props.virtualScrollerOptions) || !this.props.scrollable;
    }
  }, {
    key: "isEquals",
    value: function isEquals(data1, data2) {
      return this.props.compareSelectionBy === 'equals' ? data1 === data2 : primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(data1, data2, this.props.dataKey);
    }
  }, {
    key: "hasFilter",
    value: function hasFilter() {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.getFilters()) || this.props.globalFilter;
    }
  }, {
    key: "getFirst",
    value: function getFirst() {
      return this.props.onPage ? this.props.first : this.state.first;
    }
  }, {
    key: "getRows",
    value: function getRows() {
      return this.props.onPage ? this.props.rows : this.state.rows;
    }
  }, {
    key: "getSortField",
    value: function getSortField() {
      return this.props.onSort ? this.props.sortField : this.state.sortField;
    }
  }, {
    key: "getSortOrder",
    value: function getSortOrder() {
      return this.props.onSort ? this.props.sortOrder : this.state.sortOrder;
    }
  }, {
    key: "getMultiSortMeta",
    value: function getMultiSortMeta() {
      return (this.props.onSort ? this.props.multiSortMeta : this.state.multiSortMeta) || [];
    }
  }, {
    key: "getFilters",
    value: function getFilters() {
      return this.props.onFilter ? this.props.filters : this.state.filters;
    }
  }, {
    key: "getColumnProp",
    value: function getColumnProp(col, prop) {
      return col.props[prop];
    }
  }, {
    key: "getColumns",
    value: function getColumns(ignoreReorderable) {
      var _this2 = this;

      var columns = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(this.props.children);

      if (!columns) {
        return null;
      }

      if (!ignoreReorderable && this.props.reorderableColumns && this.state.columnOrder) {
        var orderedColumns = this.state.columnOrder.reduce(function (arr, columnKey) {
          var column = _this2.findColumnByKey(columns, columnKey);

          column && arr.push(column);
          return arr;
        }, []);
        return [].concat(_toConsumableArray(orderedColumns), _toConsumableArray(columns.filter(function (col) {
          return orderedColumns.indexOf(col) < 0;
        })));
      }

      return columns;
    }
  }, {
    key: "getStorage",
    value: function getStorage() {
      switch (this.props.stateStorage) {
        case 'local':
          return window.localStorage;

        case 'session':
          return window.sessionStorage;

        case 'custom':
          return null;

        default:
          throw new Error(this.props.stateStorage + ' is not a valid value for the state storage, supported values are "local", "session" and "custom".');
      }
    }
  }, {
    key: "saveState",
    value: function saveState() {
      var state = {};

      if (this.props.paginator) {
        state.first = this.getFirst();
        state.rows = this.getRows();
      }

      var sortField = this.getSortField();

      if (sortField) {
        state.sortField = sortField;
        state.sortOrder = this.getSortOrder();
      }

      var multiSortMeta = this.getMultiSortMeta();

      if (multiSortMeta) {
        state.multiSortMeta = multiSortMeta;
      }

      if (this.hasFilter()) {
        state.filters = this.getFilters();
      }

      if (this.props.resizableColumns) {
        this.saveColumnWidths(state);
      }

      if (this.props.reorderableColumns) {
        state.columnOrder = this.state.columnOrder;
      }

      if (this.props.expandedRows) {
        state.expandedRows = this.props.expandedRows;
      }

      if (this.props.selection && this.props.onSelectionChange) {
        state.selection = this.props.selection;
      }

      if (this.isCustomStateStorage()) {
        if (this.props.customSaveState) {
          this.props.customSaveState(state);
        }
      } else {
        var storage = this.getStorage();

        if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(state)) {
          storage.setItem(this.props.stateKey, JSON.stringify(state));
        }
      }

      if (this.props.onStateSave) {
        this.props.onStateSave(state);
      }
    }
  }, {
    key: "clearState",
    value: function clearState() {
      var storage = this.getStorage();

      if (storage && this.props.stateKey) {
        storage.removeItem(this.props.stateKey);
      }
    }
  }, {
    key: "restoreState",
    value: function restoreState(state) {
      var restoredState = {};

      if (this.isCustomStateStorage()) {
        if (this.props.customRestoreState) {
          restoredState = this.props.customRestoreState();
        }
      } else {
        var storage = this.getStorage();
        var stateString = storage.getItem(this.props.stateKey);
        var dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;

        var reviver = function reviver(key, value) {
          return typeof value === "string" && dateFormat.test(value) ? new Date(value) : value;
        };

        if (stateString) {
          restoredState = JSON.parse(stateString, reviver);
        }
      }

      this._restoreState(restoredState, state);
    }
  }, {
    key: "restoreTableState",
    value: function restoreTableState(restoredState) {
      var state = this._restoreState(restoredState);

      if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(state)) {
        this.setState(state);
      }
    }
  }, {
    key: "_restoreState",
    value: function _restoreState(restoredState) {
      var _this3 = this;

      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(restoredState)) {
        if (this.props.paginator) {
          if (this.props.onPage) {
            var getOnPageParams = function getOnPageParams(first, rows) {
              var totalRecords = _this3.getTotalRecords(_this3.processedData());

              var pageCount = Math.ceil(totalRecords / rows) || 1;
              var page = Math.floor(first / rows);
              return {
                first: first,
                rows: rows,
                page: page,
                pageCount: pageCount
              };
            };

            this.props.onPage(this.createEvent(getOnPageParams(restoredState.first, restoredState.rows)));
          } else {
            state.first = restoredState.first;
            state.rows = restoredState.rows;
          }
        }

        if (restoredState.sortField) {
          if (this.props.onSort) {
            this.props.onSort(this.createEvent({
              sortField: restoredState.sortField,
              sortOrder: restoredState.sortOrder
            }));
          } else {
            state.sortField = restoredState.sortField;
            state.sortOrder = restoredState.sortOrder;
          }
        }

        if (restoredState.multiSortMeta) {
          if (this.props.onSort) {
            this.props.onSort(this.createEvent({
              multiSortMeta: restoredState.multiSortMeta
            }));
          } else {
            state.multiSortMeta = restoredState.multiSortMeta;
          }
        }

        if (restoredState.filters) {
          state.d_filters = this.cloneFilters(restoredState.filters);

          if (this.props.onFilter) {
            this.props.onFilter(this.createEvent({
              filters: restoredState.filters
            }));
          } else {
            state.filters = this.cloneFilters(restoredState.filters);
          }
        }

        if (this.props.resizableColumns) {
          this.columnWidthsState = restoredState.columnWidths;
          this.tableWidthState = restoredState.tableWidth;
        }

        if (this.props.reorderableColumns) {
          state.columnOrder = restoredState.columnOrder;
        }

        if (restoredState.expandedRows && this.props.onRowToggle) {
          this.props.onRowToggle({
            data: restoredState.expandedRows
          });
        }

        if (restoredState.selection && this.props.onSelectionChange) {
          this.props.onSelectionChange({
            value: restoredState.selection
          });
        }

        if (this.props.onStateRestore) {
          this.props.onStateRestore(restoredState);
        }
      }

      return state;
    }
  }, {
    key: "saveColumnWidths",
    value: function saveColumnWidths(state) {
      var widths = [];
      var headers = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.find(this.el, '.p-datatable-thead > tr > th');
      headers.forEach(function (header) {
        return widths.push(primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(header));
      });
      state.columnWidths = widths.join(',');

      if (this.props.columnResizeMode === 'expand') {
        state.tableWidth = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.table) + 'px';
      }
    }
  }, {
    key: "restoreColumnWidths",
    value: function restoreColumnWidths() {
      var _this4 = this;

      if (this.columnWidthsState) {
        var widths = this.columnWidthsState.split(',');

        if (this.props.columnResizeMode === 'expand' && this.tableWidthState) {
          this.table.style.width = this.tableWidthState;
          this.table.style.minWidth = this.tableWidthState;
          this.el.style.width = this.tableWidthState;
        }

        if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(widths)) {
          this.createStyleElement();
          var innerHTML = '';
          widths.forEach(function (width, index) {
            var style = _this4.props.scrollable ? "flex: 1 1 ".concat(width, "px !important") : "width: ".concat(width, "px !important");
            innerHTML += "\n                        .p-datatable[".concat(_this4.state.attributeSelector, "] .p-datatable-thead > tr > th:nth-child(").concat(index + 1, "),\n                        .p-datatable[").concat(_this4.state.attributeSelector, "] .p-datatable-tbody > tr > td:nth-child(").concat(index + 1, "),\n                        .p-datatable[").concat(_this4.state.attributeSelector, "] .p-datatable-tfoot > tr > td:nth-child(").concat(index + 1, ") {\n                            ").concat(style, "\n                        }\n                    ");
          });
          this.styleElement.innerHTML = innerHTML;
        }
      }
    }
  }, {
    key: "findParentHeader",
    value: function findParentHeader(element) {
      if (element.nodeName === 'TH') {
        return element;
      } else {
        var parent = element.parentElement;

        while (parent.nodeName !== 'TH') {
          parent = parent.parentElement;
          if (!parent) break;
        }

        return parent;
      }
    }
  }, {
    key: "getGroupRowSortField",
    value: function getGroupRowSortField() {
      return this.props.sortMode === 'single' ? this.props.sortField : this.state.groupRowsSortMeta ? this.state.groupRowsSortMeta.field : null;
    }
  }, {
    key: "getSelectableData",
    value: function getSelectableData(val) {
      var _this5 = this;

      if (this.props.showSelectionElement || this.props.isDataSelectable) {
        return val.filter(function (data, index) {
          var isSelectable = true;
          if (_this5.props.showSelectionElement) isSelectable = _this5.props.showSelectionElement({
            rowIndex: index,
            props: _this5.props
          });
          if (_this5.props.isDataSelectable && isSelectable) isSelectable = _this5.props.isDataSelectable({
            data: data,
            index: index
          });
          return isSelectable;
        });
      }

      return val;
    }
  }, {
    key: "allRowsSelected",
    value: function allRowsSelected(processedData) {
      var _this6 = this;

      if (this.props.onSelectAllChange) {
        return this.props.selectAll;
      } else {
        var data = this.props.selectionPageOnly ? this.dataToRender(processedData) : processedData;
        var val = this.props.frozenValue ? [].concat(_toConsumableArray(this.props.frozenValue), _toConsumableArray(data)) : data;
        var selectableVal = this.getSelectableData(val);
        return selectableVal && this.props.selection && selectableVal.every(function (sv) {
          return _this6.props.selection.some(function (s) {
            return _this6.isEquals(s, sv);
          });
        });
      }
    }
  }, {
    key: "getSelectionModeInColumn",
    value: function getSelectionModeInColumn(columns) {
      if (columns) {
        var col = columns.find(function (c) {
          return !!c.props.selectionMode;
        });
        return col ? col.props.selectionMode : null;
      }

      return null;
    }
  }, {
    key: "findColumnByKey",
    value: function findColumnByKey(columns, key) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(columns) ? columns.find(function (col) {
        return col.props.columnKey === key || col.props.field === key;
      }) : null;
    }
  }, {
    key: "getTotalRecords",
    value: function getTotalRecords(data) {
      return this.props.lazy ? this.props.totalRecords : data ? data.length : 0;
    }
  }, {
    key: "onEditingMetaChange",
    value: function onEditingMetaChange(e) {
      var rowData = e.rowData,
          field = e.field,
          rowIndex = e.rowIndex,
          editing = e.editing;

      var editingMeta = _objectSpread({}, this.state.editingMeta);

      var meta = editingMeta[rowIndex];

      if (editing) {
        !meta && (meta = editingMeta[rowIndex] = {
          data: _objectSpread({}, rowData),
          fields: []
        });
        meta['fields'].push(field);
      } else if (meta) {
        var fields = meta['fields'].filter(function (f) {
          return f !== field;
        });
        !fields.length ? delete editingMeta[rowIndex] : meta['fields'] = fields;
      }

      this.setState({
        editingMeta: editingMeta
      });
    }
  }, {
    key: "clearEditingMetaData",
    value: function clearEditingMetaData() {
      if (this.props.editMode && primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.state.editingMeta)) {
        this.setState({
          editingMeta: {}
        });
      }
    }
  }, {
    key: "onColumnResizeStart",
    value: function onColumnResizeStart(e) {
      var event = e.originalEvent,
          column = e.column;
      var containerLeft = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOffset(this.el).left;
      this.resizeColumn = column;
      this.resizeColumnElement = event.currentTarget.parentElement;
      this.columnResizing = true;
      this.lastResizeHelperX = event.pageX - containerLeft + this.el.scrollLeft;
      this.bindColumnResizeEvents();
    }
  }, {
    key: "onColumnResize",
    value: function onColumnResize(event) {
      var containerLeft = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOffset(this.el).left;
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(this.el, 'p-unselectable-text');
      this.resizeHelper.style.height = this.el.offsetHeight + 'px';
      this.resizeHelper.style.top = 0 + 'px';
      this.resizeHelper.style.left = event.pageX - containerLeft + this.el.scrollLeft + 'px';
      this.resizeHelper.style.display = 'block';
    }
  }, {
    key: "onColumnResizeEnd",
    value: function onColumnResizeEnd() {
      var delta = this.resizeHelper.offsetLeft - this.lastResizeHelperX;
      var columnWidth = this.resizeColumnElement.offsetWidth;
      var newColumnWidth = columnWidth + delta;
      var minWidth = this.resizeColumnElement.style.minWidth || 15;

      if (columnWidth + delta > parseInt(minWidth, 10)) {
        if (this.props.columnResizeMode === 'fit') {
          var nextColumn = this.resizeColumnElement.nextElementSibling;
          var nextColumnWidth = nextColumn.offsetWidth - delta;

          if (newColumnWidth > 15 && nextColumnWidth > 15) {
            this.resizeTableCells(newColumnWidth, nextColumnWidth);
          }
        } else if (this.props.columnResizeMode === 'expand') {
          var tableWidth = this.table.offsetWidth + delta + 'px';
          this.table.style.width = tableWidth;
          this.table.style.minWidth = tableWidth;
          this.resizeTableCells(newColumnWidth);
        }

        if (this.props.onColumnResizeEnd) {
          this.props.onColumnResizeEnd({
            element: this.resizeColumnElement,
            column: this.resizeColumn,
            delta: delta
          });
        }

        if (this.isStateful()) {
          this.saveState();
        }
      }

      this.resizeHelper.style.display = 'none';
      this.resizeColumn = null;
      this.resizeColumnElement = null;
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(this.el, 'p-unselectable-text');
      this.unbindColumnResizeEvents();
    }
  }, {
    key: "resizeTableCells",
    value: function resizeTableCells(newColumnWidth, nextColumnWidth) {
      var _this7 = this;

      var widths = [];
      var colIndex = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.index(this.resizeColumnElement);
      var headers = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.find(this.table, '.p-datatable-thead > tr > th');
      headers.forEach(function (header) {
        return widths.push(primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(header));
      });
      this.destroyStyleElement();
      this.createStyleElement();
      var innerHTML = '';
      widths.forEach(function (width, index) {
        var colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
        var style = _this7.props.scrollable ? "flex: 1 1 ".concat(colWidth, "px !important") : "width: ".concat(colWidth, "px !important");
        innerHTML += "\n                .p-datatable[".concat(_this7.state.attributeSelector, "] .p-datatable-thead > tr > th:nth-child(").concat(index + 1, "),\n                .p-datatable[").concat(_this7.state.attributeSelector, "] .p-datatable-tbody > tr > td:nth-child(").concat(index + 1, "),\n                .p-datatable[").concat(_this7.state.attributeSelector, "] .p-datatable-tfoot > tr > td:nth-child(").concat(index + 1, ") {\n                    ").concat(style, "\n                }\n            ");
      });
      this.styleElement.innerHTML = innerHTML;
    }
  }, {
    key: "bindColumnResizeEvents",
    value: function bindColumnResizeEvents() {
      var _this8 = this;

      if (!this.documentColumnResizeListener) {
        this.documentColumnResizeListener = document.addEventListener('mousemove', function (event) {
          if (_this8.columnResizing) {
            _this8.onColumnResize(event);
          }
        });
      }

      if (!this.documentColumnResizeEndListener) {
        this.documentColumnResizeEndListener = document.addEventListener('mouseup', function () {
          if (_this8.columnResizing) {
            _this8.columnResizing = false;

            _this8.onColumnResizeEnd();
          }
        });
      }
    }
  }, {
    key: "unbindColumnResizeEvents",
    value: function unbindColumnResizeEvents() {
      if (this.documentColumnResizeListener) {
        document.removeEventListener('document', this.documentColumnResizeListener);
        this.documentColumnResizeListener = null;
      }

      if (this.documentColumnResizeEndListener) {
        document.removeEventListener('document', this.documentColumnResizeEndListener);
        this.documentColumnResizeEndListener = null;
      }
    }
  }, {
    key: "onColumnHeaderMouseDown",
    value: function onColumnHeaderMouseDown(e) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.clearSelection();
      var event = e.originalEvent,
          column = e.column;

      if (this.props.reorderableColumns && this.getColumnProp(column, 'reorderable') !== false) {
        if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.hasClass(event.target, 'p-column-resizer')) event.currentTarget.draggable = false;else event.currentTarget.draggable = true;
      }
    }
  }, {
    key: "onColumnHeaderCheckboxChange",
    value: function onColumnHeaderCheckboxChange(e, processedData) {
      var _this9 = this;

      if (this.props.onSelectAllChange) {
        this.props.onSelectAllChange(e);
      } else {
        var originalEvent = e.originalEvent,
            checked = e.checked;
        var data = this.props.selectionPageOnly ? this.dataToRender(processedData) : processedData;
        var selection = this.props.selectionPageOnly && this.props.selection ? this.props.selection.filter(function (s) {
          return !data.some(function (d) {
            return _this9.isEquals(s, d);
          });
        }) : [];

        if (checked) {
          selection = this.props.frozenValue ? [].concat(_toConsumableArray(selection), _toConsumableArray(this.props.frozenValue), _toConsumableArray(data)) : [].concat(_toConsumableArray(selection), _toConsumableArray(data));
          selection = this.getSelectableData(selection);
          this.props.onAllRowsSelect && this.props.onAllRowsSelect({
            originalEvent: originalEvent,
            data: selection,
            type: 'all'
          });
        } else {
          this.props.onAllRowsUnselect && this.props.onAllRowsUnselect({
            originalEvent: originalEvent,
            data: selection,
            type: 'all'
          });
        }

        if (this.props.onSelectionChange) {
          this.props.onSelectionChange({
            originalEvent: originalEvent,
            value: selection,
            type: 'all'
          });
        }
      }
    }
  }, {
    key: "onColumnHeaderDragStart",
    value: function onColumnHeaderDragStart(e) {
      var event = e.originalEvent,
          column = e.column;

      if (this.columnResizing) {
        event.preventDefault();
        return;
      }

      this.colReorderIconWidth = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUp);
      this.colReorderIconHeight = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorUp);
      this.draggedColumn = column;
      this.draggedColumnElement = this.findParentHeader(event.currentTarget);
      event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
    }
  }, {
    key: "onColumnHeaderDragOver",
    value: function onColumnHeaderDragOver(e) {
      var event = e.originalEvent;
      var dropHeader = this.findParentHeader(event.currentTarget);

      if (this.props.reorderableColumns && this.draggedColumnElement && dropHeader) {
        event.preventDefault();

        if (this.draggedColumnElement !== dropHeader) {
          var containerOffset = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOffset(this.el);
          var dropHeaderOffset = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOffset(dropHeader);
          var targetLeft = dropHeaderOffset.left - containerOffset.left;
          var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
          this.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (this.colReorderIconHeight - 1) + 'px';
          this.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

          if (event.pageX > columnCenter) {
            this.reorderIndicatorUp.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2) + 'px';
            this.reorderIndicatorDown.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2) + 'px';
            this.dropPosition = 1;
          } else {
            this.reorderIndicatorUp.style.left = targetLeft - Math.ceil(this.colReorderIconWidth / 2) + 'px';
            this.reorderIndicatorDown.style.left = targetLeft - Math.ceil(this.colReorderIconWidth / 2) + 'px';
            this.dropPosition = -1;
          }

          this.reorderIndicatorUp.style.display = 'block';
          this.reorderIndicatorDown.style.display = 'block';
        }
      }
    }
  }, {
    key: "onColumnHeaderDragLeave",
    value: function onColumnHeaderDragLeave(e) {
      var event = e.originalEvent;

      if (this.props.reorderableColumns && this.draggedColumnElement) {
        event.preventDefault();
        this.reorderIndicatorUp.style.display = 'none';
        this.reorderIndicatorDown.style.display = 'none';
      }
    }
  }, {
    key: "onColumnHeaderDrop",
    value: function onColumnHeaderDrop(e) {
      var _this10 = this;

      var event = e.originalEvent,
          column = e.column;
      event.preventDefault();

      if (this.draggedColumnElement) {
        var dragIndex = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.index(this.draggedColumnElement);
        var dropIndex = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.index(this.findParentHeader(event.currentTarget));
        var allowDrop = dragIndex !== dropIndex;

        if (allowDrop && (dropIndex - dragIndex === 1 && this.dropPosition === -1 || dragIndex - dropIndex === 1 && this.dropPosition === 1)) {
          allowDrop = false;
        }

        if (allowDrop) {
          var columns = this.getColumns();

          var isSameColumn = function isSameColumn(col1, col2) {
            return col1.props.columnKey || col2.props.columnKey ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(col1.props, col2.props, 'columnKey') : primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(col1.props, col2.props, 'field');
          };

          var dragColIndex = columns.findIndex(function (child) {
            return isSameColumn(child, _this10.draggedColumn);
          });
          var dropColIndex = columns.findIndex(function (child) {
            return isSameColumn(child, column);
          });

          if (dropColIndex < dragColIndex && this.dropPosition === 1) {
            dropColIndex++;
          }

          if (dropColIndex > dragColIndex && this.dropPosition === -1) {
            dropColIndex--;
          }

          primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.reorderArray(columns, dragColIndex, dropColIndex);
          var columnOrder = columns.reduce(function (orders, col) {
            orders.push(col.props.columnKey || col.props.field);
            return orders;
          }, []);
          this.setState({
            columnOrder: columnOrder
          });

          if (this.props.onColReorder) {
            this.props.onColReorder({
              originalEvent: event,
              dragIndex: dragColIndex,
              dropIndex: dropColIndex,
              columns: columns
            });
          }
        }

        this.reorderIndicatorUp.style.display = 'none';
        this.reorderIndicatorDown.style.display = 'none';
        this.draggedColumnElement.draggable = false;
        this.draggedColumnElement = null;
        this.draggedColumn = null;
        this.dropPosition = null;
      }
    }
  }, {
    key: "createStyleElement",
    value: function createStyleElement() {
      this.styleElement = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.createInlineStyle(primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].nonce);
    }
  }, {
    key: "createResponsiveStyle",
    value: function createResponsiveStyle() {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.createInlineStyle(primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].nonce);
        var innerHTML = "\n@media screen and (max-width: ".concat(this.props.breakpoint, ") {\n    .p-datatable[").concat(this.state.attributeSelector, "] .p-datatable-thead > tr > th,\n    .p-datatable[").concat(this.state.attributeSelector, "] .p-datatable-tfoot > tr > td {\n        display: none !important;\n    }\n\n    .p-datatable[").concat(this.state.attributeSelector, "] .p-datatable-tbody > tr > td {\n        display: flex;\n        width: 100% !important;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .p-datatable[").concat(this.state.attributeSelector, "] .p-datatable-tbody > tr > td:not(:last-child) {\n        border: 0 none;\n    }\n\n    .p-datatable[").concat(this.state.attributeSelector, "].p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {\n        border-top: 0;\n        border-right: 0;\n        border-left: 0;\n    }\n\n    .p-datatable[").concat(this.state.attributeSelector, "] .p-datatable-tbody > tr > td > .p-column-title {\n        display: block;\n    }\n}\n");
        this.responsiveStyleElement.innerHTML = innerHTML;
      }
    }
  }, {
    key: "destroyResponsiveStyle",
    value: function destroyResponsiveStyle() {
      this.responsiveStyleElement = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeInlineStyle(this.responsiveStyleElement);
    }
  }, {
    key: "destroyStyleElement",
    value: function destroyStyleElement() {
      this.styleElement = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeInlineStyle(this.styleElement);
    }
  }, {
    key: "onPageChange",
    value: function onPageChange(e) {
      this.clearEditingMetaData();
      if (this.props.onPage) this.props.onPage(this.createEvent(e));else this.setState({
        first: e.first,
        rows: e.rows
      });

      if (this.props.onValueChange) {
        this.props.onValueChange(this.processedData());
      }
    }
  }, {
    key: "onSortChange",
    value: function onSortChange(e) {
      this.clearEditingMetaData();
      var event = e.originalEvent,
          column = e.column,
          sortableDisabledFields = e.sortableDisabledFields;
      var sortField = column.props.sortField || column.props.field;
      var sortOrder = this.props.defaultSortOrder;
      var multiSortMeta;
      var eventMeta;
      this.columnSortable = column.props.sortable;
      this.columnSortFunction = column.props.sortFunction;
      this.columnField = column.props.sortField;

      if (this.props.sortMode === 'multiple') {
        var metaKey = event.metaKey || event.ctrlKey;
        multiSortMeta = _toConsumableArray(this.getMultiSortMeta());
        var sortMeta = multiSortMeta.find(function (sortMeta) {
          return sortMeta.field === sortField;
        });
        sortOrder = sortMeta ? this.getCalculatedSortOrder(sortMeta.order) : sortOrder;
        var newMetaData = {
          field: sortField,
          order: sortOrder
        };

        if (sortOrder) {
          multiSortMeta = metaKey ? multiSortMeta : multiSortMeta.filter(function (meta) {
            return sortableDisabledFields.some(function (field) {
              return field === meta.field;
            });
          });
          this.addSortMeta(newMetaData, multiSortMeta);
        } else if (this.props.removableSort) {
          this.removeSortMeta(newMetaData, multiSortMeta);
        }

        eventMeta = {
          multiSortMeta: multiSortMeta
        };
      } else {
        sortOrder = this.getSortField() === sortField ? this.getCalculatedSortOrder(this.getSortOrder()) : sortOrder;

        if (this.props.removableSort) {
          sortField = sortOrder ? sortField : null;
        }

        eventMeta = {
          sortField: sortField,
          sortOrder: sortOrder
        };
      }

      if (this.props.onSort) {
        this.props.onSort(this.createEvent(eventMeta));
      } else {
        eventMeta.first = 0;
        this.setState(eventMeta);
      }

      if (this.props.onValueChange) {
        this.props.onValueChange(this.processedData({
          sortField: sortField,
          sortOrder: sortOrder,
          multiSortMeta: multiSortMeta
        }));
      }
    }
  }, {
    key: "getCalculatedSortOrder",
    value: function getCalculatedSortOrder(currentOrder) {
      return this.props.removableSort ? this.props.defaultSortOrder === currentOrder ? currentOrder * -1 : 0 : currentOrder * -1;
    }
  }, {
    key: "compareValuesOnSort",
    value: function compareValuesOnSort(value1, value2) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.sort(value1, value2, 1, primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].locale);
    }
  }, {
    key: "addSortMeta",
    value: function addSortMeta(meta, multiSortMeta) {
      var index = multiSortMeta.findIndex(function (sortMeta) {
        return sortMeta.field === meta.field;
      });
      if (index >= 0) multiSortMeta[index] = meta;else multiSortMeta.push(meta);
    }
  }, {
    key: "removeSortMeta",
    value: function removeSortMeta(meta, multiSortMeta) {
      var index = multiSortMeta.findIndex(function (sortMeta) {
        return sortMeta.field === meta.field;
      });

      if (index >= 0) {
        multiSortMeta.splice(index, 1);
      }

      multiSortMeta = multiSortMeta.length > 0 ? multiSortMeta : null;
    }
  }, {
    key: "sortSingle",
    value: function sortSingle(data, field, order) {
      var _this11 = this;

      if (this.props.groupRowsBy && this.props.groupRowsBy === this.props.sortField) {
        var multiSortMeta = [{
          field: this.props.sortField,
          order: this.props.sortOrder || this.props.defaultSortOrder
        }];
        this.props.sortField !== field && multiSortMeta.push({
          field: field,
          order: order
        });
        return this.sortMultiple(data, multiSortMeta);
      }

      var value = _toConsumableArray(data);

      if (this.columnSortable && this.columnSortFunction) {
        value = this.columnSortFunction({
          field: field,
          order: order
        });
      } else {
        value.sort(function (data1, data2) {
          var value1 = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data1, field);
          var value2 = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data2, field);

          var result = _this11.compareValuesOnSort(value1, value2);

          return order * result;
        });
      }

      return value;
    }
  }, {
    key: "sortMultiple",
    value: function sortMultiple(data) {
      var _this12 = this;

      var multiSortMeta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (this.props.groupRowsBy && (this.groupRowsSortMeta || multiSortMeta.length && this.props.groupRowsBy === multiSortMeta[0].field)) {
        var firstSortMeta = multiSortMeta[0];
        !this.groupRowsSortMeta && (this.groupRowsSortMeta = firstSortMeta);

        if (firstSortMeta.field !== this.groupRowsSortMeta.field) {
          multiSortMeta = [this.groupRowsSortMeta].concat(_toConsumableArray(multiSortMeta));
        }
      }

      var value = _toConsumableArray(data);

      if (this.columnSortable && this.columnSortFunction) {
        var meta = multiSortMeta.find(function (meta) {
          return meta.field === _this12.columnField;
        });
        var field = this.columnField;
        var order = meta ? meta.order : this.defaultSortOrder;
        value = this.columnSortFunction({
          field: field,
          order: order
        });
      } else {
        value.sort(function (data1, data2) {
          return _this12.multisortField(data1, data2, multiSortMeta, 0);
        });
      }

      return value;
    }
  }, {
    key: "multisortField",
    value: function multisortField(data1, data2, multiSortMeta, index) {
      var value1 = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
      var value2 = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);

      if (value1 === value2) {
        return multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, multiSortMeta, index + 1) : 0;
      }

      var result = this.compareValuesOnSort(value1, value2);
      return multiSortMeta[index].order * result;
    }
  }, {
    key: "onFilterChange",
    value: function onFilterChange(filters) {
      this.clearEditingMetaData();
      this.setState({
        d_filters: filters
      });
    }
  }, {
    key: "onFilterApply",
    value: function onFilterApply() {
      var _this13 = this;

      clearTimeout(this.filterTimeout);
      this.filterTimeout = setTimeout(function () {
        var filters = _this13.cloneFilters(_this13.state.d_filters);

        if (_this13.props.onFilter) {
          _this13.props.onFilter(_this13.createEvent({
            filters: filters
          }));
        } else {
          _this13.setState({
            first: 0,
            filters: filters
          });
        }

        if (_this13.props.onValueChange) {
          _this13.props.onValueChange(_this13.processedData({
            filters: filters
          }));
        }
      }, this.props.filterDelay);
    }
  }, {
    key: "filterLocal",
    value: function filterLocal(data, filters) {
      if (!data) return;
      filters = filters || {};
      var columns = this.getColumns();
      var filteredValue = [];
      var isGlobalFilter = filters['global'] || this.props.globalFilter;
      var globalFilterFieldsArray;

      if (isGlobalFilter) {
        globalFilterFieldsArray = this.props.globalFilterFields || columns.filter(function (col) {
          return !col.props.excludeGlobalFilter;
        }).map(function (col) {
          return col.props.filterField || col.props.field;
        });
      }

      for (var i = 0; i < data.length; i++) {
        var localMatch = true;
        var globalMatch = false;
        var localFiltered = false;

        for (var prop in filters) {
          if (Object.prototype.hasOwnProperty.call(filters, prop) && prop !== 'global') {
            localFiltered = true;
            var filterField = prop;
            var filterMeta = filters[filterField];

            if (filterMeta.operator) {
              for (var j = 0; j < filterMeta.constraints.length; j++) {
                var filterConstraint = filterMeta.constraints[j];
                localMatch = this.executeLocalFilter(filterField, data[i], filterConstraint, j);

                if (filterMeta.operator === primereact_api__WEBPACK_IMPORTED_MODULE_3__.FilterOperator.OR && localMatch || filterMeta.operator === primereact_api__WEBPACK_IMPORTED_MODULE_3__.FilterOperator.AND && !localMatch) {
                  break;
                }
              }
            } else {
              localMatch = this.executeLocalFilter(filterField, data[i], filterMeta, 0);
            }

            if (!localMatch) {
              break;
            }
          }
        }

        if (isGlobalFilter && !globalMatch && globalFilterFieldsArray) {
          for (var _j = 0; _j < globalFilterFieldsArray.length; _j++) {
            var globalFilterField = globalFilterFieldsArray[_j];
            var matchMode = filters['global'] ? filters['global'].matchMode : primereact_api__WEBPACK_IMPORTED_MODULE_3__.FilterMatchMode.CONTAINS;
            var value = filters['global'] ? filters['global'].value : this.props.globalFilter;
            globalMatch = primereact_api__WEBPACK_IMPORTED_MODULE_3__.FilterService.filters[matchMode](primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(data[i], globalFilterField), value, this.props.filterLocale);

            if (globalMatch) {
              break;
            }
          }
        }

        var matches = void 0;

        if (isGlobalFilter) {
          matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
        } else {
          matches = localFiltered && localMatch;
        }

        if (matches) {
          filteredValue.push(data[i]);
        }
      }

      if (filteredValue.length === this.props.value.length) {
        filteredValue = data;
      }

      return filteredValue;
    }
  }, {
    key: "executeLocalFilter",
    value: function executeLocalFilter(field, rowData, filterMeta, index) {
      var filterValue = filterMeta.value;
      var filterMatchMode = filterMeta.matchMode === 'custom' ? "custom_".concat(field) : filterMeta.matchMode || primereact_api__WEBPACK_IMPORTED_MODULE_3__.FilterMatchMode.STARTS_WITH;
      var dataFieldValue = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowData, field);
      var filterConstraint = primereact_api__WEBPACK_IMPORTED_MODULE_3__.FilterService.filters[filterMatchMode];
      return filterConstraint(dataFieldValue, filterValue, this.props.filterLocale, index);
    }
  }, {
    key: "cloneFilters",
    value: function cloneFilters(filters) {
      var _this14 = this;

      filters = filters || this.props.filters;
      var cloned = {};

      if (filters) {
        Object.entries(filters).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              prop = _ref2[0],
              value = _ref2[1];

          cloned[prop] = value.operator ? {
            operator: value.operator,
            constraints: value.constraints.map(function (constraint) {
              return _objectSpread({}, constraint);
            })
          } : _objectSpread({}, value);
        });
      } else {
        var columns = this.getColumns();
        cloned = columns.reduce(function (_filters, col) {
          var field = col.props.filterField || col.props.field;
          var filterFunction = col.props.filterFunction;
          var dataType = col.props.dataType;
          var matchMode = col.props.filterMatchMode || (primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].filterMatchModeOptions[dataType] ? primereact_api__WEBPACK_IMPORTED_MODULE_3__["default"].filterMatchModeOptions[dataType][0] : primereact_api__WEBPACK_IMPORTED_MODULE_3__.FilterMatchMode.STARTS_WITH);
          var constraint = {
            value: null,
            matchMode: matchMode
          };

          if (filterFunction) {
            primereact_api__WEBPACK_IMPORTED_MODULE_3__.FilterService.register("custom_".concat(field), function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              return filterFunction.apply(void 0, args.concat([{
                column: col
              }]));
            });
          }

          _filters[field] = _this14.props.filterDisplay === 'menu' ? {
            operator: primereact_api__WEBPACK_IMPORTED_MODULE_3__.FilterOperator.AND,
            constraints: [constraint]
          } : constraint;
          return _filters;
        }, {});
      }

      return cloned;
    }
  }, {
    key: "filter",
    value: function filter(value, field, matchMode) {
      var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      var filters = _objectSpread({}, this.state.d_filters);

      var meta = filters[field];
      var constraint = meta && meta.operator ? meta.constraints[index] : meta;
      constraint = meta ? {
        value: value,
        matchMode: matchMode || constraint.matchMode
      } : {
        value: value,
        matchMode: matchMode
      };
      this.props.filterDisplay === 'menu' && meta && meta.operator ? filters[field].constraints[index] = constraint : filters[field] = constraint;
      this.setState({
        d_filters: filters
      }, this.onFilterApply);
    }
  }, {
    key: "reset",
    value: function reset() {
      var state = {
        d_rows: this.props.rows,
        d_filters: this.cloneFilters(this.props.filters),
        groupRowsSortMeta: null,
        editingMeta: {}
      };

      if (!this.props.onPage) {
        state.first = this.props.first;
        state.rows = this.props.rows;
      }

      if (!this.props.onSort) {
        state.sortField = this.props.sortField;
        state.sortOrder = this.props.sortOrder;
        state.multiSortMeta = this.props.multiSortMeta;
      }

      if (!this.props.onFilter) {
        state.filters = this.props.filters;
      }

      this.resetColumnOrder();
      this.setState(state);
    }
  }, {
    key: "resetScroll",
    value: function resetScroll() {
      if (this.wrapper) {
        var scrollableContainer = !this.isVirtualScrollerDisabled() ? primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(this.wrapper, '.p-virtualscroller') : this.wrapper;
        scrollableContainer.scrollTo(0, 0);
      }
    }
  }, {
    key: "resetColumnOrder",
    value: function resetColumnOrder() {
      var columns = this.getColumns(true);
      var columnOrder = [];

      if (columns) {
        columnOrder = columns.reduce(function (orders, col) {
          orders.push(col.props.columnKey || col.props.field);
          return orders;
        }, []);
      }

      this.setState({
        columnOrder: columnOrder
      });
    }
  }, {
    key: "exportCSV",
    value: function exportCSV(options) {
      var _this15 = this;

      var data;
      var csv = "\uFEFF";
      var columns = this.getColumns();

      if (options && options.selectionOnly) {
        data = this.props.selection || [];
      } else {
        data = [].concat(_toConsumableArray(this.props.frozenValue || []), _toConsumableArray(this.processedData() || []));
      } //headers


      columns.forEach(function (column, i) {
        var _column$props = column.props,
            field = _column$props.field,
            header = _column$props.header,
            exportable = _column$props.exportable;

        if (exportable && field) {
          csv += '"' + (header || field) + '"';

          if (i < columns.length - 1) {
            csv += _this15.props.csvSeparator;
          }
        }
      }); //body

      data.forEach(function (record) {
        csv += '\n';
        columns.forEach(function (column, i) {
          var _column$props2 = column.props,
              columnField = _column$props2.field,
              exportField = _column$props2.exportField,
              exportable = _column$props2.exportable;
          var field = exportField || columnField;

          if (exportable && field) {
            var cellData = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(record, field);

            if (cellData != null) {
              cellData = _this15.props.exportFunction ? _this15.props.exportFunction({
                data: cellData,
                field: field,
                rowData: record,
                column: column
              }) : String(cellData).replace(/"/g, '""');
            } else cellData = '';

            csv += '"' + cellData + '"';

            if (i < columns.length - 1) {
              csv += _this15.props.csvSeparator;
            }
          }
        });
      });
      primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.exportCSV(csv, this.props.exportFilename);
    }
  }, {
    key: "closeEditingCell",
    value: function closeEditingCell() {
      if (this.props.editMode !== "row") {
        document.body.click();
      }
    }
  }, {
    key: "createEvent",
    value: function createEvent(event) {
      return _objectSpread({
        first: this.getFirst(),
        rows: this.getRows(),
        sortField: this.getSortField(),
        sortOrder: this.getSortOrder(),
        multiSortMeta: this.getMultiSortMeta(),
        filters: this.getFilters()
      }, event);
    }
  }, {
    key: "processedData",
    value: function processedData(localState) {
      var data = this.props.value || [];

      if (!this.props.lazy) {
        if (data && data.length) {
          var filters = localState && localState.filters || this.getFilters();
          var sortField = localState && localState.sortField || this.getSortField();
          var sortOrder = localState && localState.sortOrder || this.getSortOrder();
          var multiSortMeta = localState && localState.multiSortMeta || this.getMultiSortMeta();

          if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(filters) || this.props.globalFilter) {
            data = this.filterLocal(data, filters);
          }

          if (sortField || primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(multiSortMeta)) {
            if (this.props.sortMode === 'single') data = this.sortSingle(data, sortField, sortOrder);else if (this.props.sortMode === 'multiple') data = this.sortMultiple(data, multiSortMeta);
          }
        }
      }

      return data;
    }
  }, {
    key: "dataToRender",
    value: function dataToRender(data) {
      if (data && this.props.paginator) {
        var first = this.props.lazy ? 0 : this.getFirst();
        return data.slice(first, first + this.getRows());
      }

      return data;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this16 = this;

      this.setState({
        attributeSelector: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)()
      }, function () {
        _this16.el.setAttribute(_this16.state.attributeSelector, '');

        if (_this16.props.responsiveLayout === 'stack' && !_this16.props.scrollable) {
          _this16.createResponsiveStyle();
        }
      });

      if (this.isStateful()) {
        this.setState(this.restoreState(this.state));

        if (this.props.resizableColumns) {
          this.restoreColumnWidths();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.isStateful()) {
        this.saveState();
      }

      if (prevProps.responsiveLayout !== this.props.responsiveLayout) {
        this.destroyResponsiveStyle();

        if (this.props.responsiveLayout === 'stack' && !this.props.scrollable) {
          this.createResponsiveStyle();
        }
      }

      if (prevProps.filters !== this.props.filters) {
        this.setState({
          filters: this.cloneFilters(this.props.filters),
          d_filters: this.cloneFilters(this.props.filters)
        });
      }

      if (prevProps.globalFilter !== this.props.globalFilter) {
        this.filter(this.props.globalFilter, 'global', 'contains');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindColumnResizeEvents();
      this.destroyStyleElement();
      this.destroyResponsiveStyle();
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      if (this.props.loading) {
        var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-datatable-loading-icon pi-spin', this.props.loadingIcon);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "p-datatable-loading-overlay p-component-overlay"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          className: iconClassName
        }));
      }

      return null;
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      if (this.props.header) {
        var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(this.props.header, {
          props: this.props
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "p-datatable-header"
        }, content);
      }

      return null;
    }
  }, {
    key: "renderTableHeader",
    value: function renderTableHeader(options, empty) {
      var sortField = this.getSortField();
      var sortOrder = this.getSortOrder();

      var multiSortMeta = _toConsumableArray(this.getMultiSortMeta());

      var groupRowSortField = this.getGroupRowSortField();
      var filters = this.state.d_filters;
      var filtersStore = this.getFilters();
      var processedData = options.items,
          columns = options.columns;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TableHeader, {
        value: processedData,
        tableProps: this.props,
        columns: columns,
        tabIndex: this.props.tabIndex,
        empty: empty,
        headerColumnGroup: this.props.headerColumnGroup,
        resizableColumns: this.props.resizableColumns,
        onColumnResizeStart: this.onColumnResizeStart,
        onColumnResizerClick: this.props.onColumnResizerClick,
        onColumnResizerDoubleClick: this.props.onColumnResizerDoubleClick,
        sortMode: this.props.sortMode,
        sortField: sortField,
        sortOrder: sortOrder,
        multiSortMeta: multiSortMeta,
        groupRowsBy: this.props.groupRowsBy,
        groupRowSortField: groupRowSortField,
        onSortChange: this.onSortChange,
        filterDisplay: this.props.filterDisplay,
        filters: filters,
        filtersStore: filtersStore,
        onFilterChange: this.onFilterChange,
        onFilterApply: this.onFilterApply,
        showSelectAll: this.props.showSelectAll,
        allRowsSelected: this.allRowsSelected,
        onColumnCheckboxChange: this.onColumnHeaderCheckboxChange,
        onColumnMouseDown: this.onColumnHeaderMouseDown,
        onColumnDragStart: this.onColumnHeaderDragStart,
        onColumnDragOver: this.onColumnHeaderDragOver,
        onColumnDragLeave: this.onColumnHeaderDragLeave,
        onColumnDrop: this.onColumnHeaderDrop,
        rowGroupMode: this.props.rowGroupMode,
        reorderableColumns: this.props.reorderableColumns
      });
    }
  }, {
    key: "renderTableBody",
    value: function renderTableBody(options, selectionModeInColumn, empty, isVirtualScrollerDisabled) {
      var tableSelector = this.state.attributeSelector;
      var first = this.getFirst();
      var editingMeta = this.state.editingMeta;
      var rows = options.rows,
          columns = options.columns,
          contentRef = options.contentRef,
          className = options.className;
      var frozenBody = this.props.frozenValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TableBody, {
        value: this.props.frozenValue,
        className: "p-datatable-frozen-tbody",
        frozenRow: true,
        tableProps: this.props,
        tableSelector: tableSelector,
        columns: columns,
        selectionModeInColumn: selectionModeInColumn,
        first: first,
        editingMeta: editingMeta,
        onEditingMetaChange: this.onEditingMetaChange,
        tabIndex: this.props.tabIndex,
        onRowClick: this.props.onRowClick,
        onRowDoubleClick: this.props.onRowDoubleClick,
        onCellClick: this.props.onCellClick,
        selection: this.props.selection,
        onSelectionChange: this.props.onSelectionChange,
        lazy: this.props.lazy,
        paginator: this.props.paginator,
        onCellSelect: this.props.onCellSelect,
        onCellUnselect: this.props.onCellUnselect,
        onRowSelect: this.props.onRowSelect,
        onRowUnselect: this.props.onRowUnselect,
        dragSelection: this.props.dragSelection,
        onContextMenu: this.props.onContextMenu,
        onContextMenuSelectionChange: this.props.onContextMenuSelectionChange,
        metaKeySelection: this.props.metaKeySelection,
        selectionMode: this.props.selectionMode,
        cellSelection: this.props.cellSelection,
        contextMenuSelection: this.props.contextMenuSelection,
        dataKey: this.props.dataKey,
        expandedRows: this.props.expandedRows,
        onRowCollapse: this.props.onRowCollapse,
        onRowExpand: this.props.onRowExpand,
        onRowToggle: this.props.onRowToggle,
        editMode: this.props.editMode,
        editingRows: this.props.editingRows,
        onRowReorder: this.props.onRowReorder,
        scrollable: this.props.scrollable,
        rowGroupMode: this.props.rowGroupMode,
        groupRowsBy: this.props.groupRowsBy,
        expandableRowGroups: this.props.expandableRowGroups,
        loading: this.props.loading,
        emptyMessage: this.props.emptyMessage,
        rowGroupHeaderTemplate: this.props.rowGroupHeaderTemplate,
        rowExpansionTemplate: this.props.rowExpansionTemplate,
        rowGroupFooterTemplate: this.props.rowGroupFooterTemplate,
        onRowEditChange: this.props.onRowEditChange,
        compareSelectionBy: this.props.compareSelectionBy,
        selectOnEdit: this.props.selectOnEdit,
        onRowEditInit: this.props.onRowEditInit,
        rowEditValidator: this.props.rowEditValidator,
        onRowEditSave: this.props.onRowEditSave,
        onRowEditComplete: this.props.onRowEditComplete,
        onRowEditCancel: this.props.onRowEditCancel,
        cellClassName: this.props.cellClassName,
        responsiveLayout: this.props.responsiveLayout,
        selectionAutoFocus: this.props.selectionAutoFocus,
        isDataSelectable: this.props.isDataSelectable,
        showSelectionElement: this.props.showSelectionElement,
        showRowReorderElement: this.props.showRowReorderElement,
        expandedRowIcon: this.props.expandedRowIcon,
        collapsedRowIcon: this.props.collapsedRowIcon,
        rowClassName: this.props.rowClassName,
        isVirtualScrollerDisabled: true
      });
      var body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TableBody, {
        value: this.dataToRender(rows),
        className: className,
        empty: empty,
        frozenRow: false,
        tableProps: this.props,
        tableSelector: tableSelector,
        columns: columns,
        selectionModeInColumn: selectionModeInColumn,
        first: first,
        editingMeta: editingMeta,
        onEditingMetaChange: this.onEditingMetaChange,
        tabIndex: this.props.tabIndex,
        onRowClick: this.props.onRowClick,
        onRowDoubleClick: this.props.onRowDoubleClick,
        onCellClick: this.props.onCellClick,
        selection: this.props.selection,
        onSelectionChange: this.props.onSelectionChange,
        lazy: this.props.lazy,
        paginator: this.props.paginator,
        onCellSelect: this.props.onCellSelect,
        onCellUnselect: this.props.onCellUnselect,
        onRowSelect: this.props.onRowSelect,
        onRowUnselect: this.props.onRowUnselect,
        dragSelection: this.props.dragSelection,
        onContextMenu: this.props.onContextMenu,
        onContextMenuSelectionChange: this.props.onContextMenuSelectionChange,
        metaKeySelection: this.props.metaKeySelection,
        selectionMode: this.props.selectionMode,
        cellSelection: this.props.cellSelection,
        contextMenuSelection: this.props.contextMenuSelection,
        dataKey: this.props.dataKey,
        expandedRows: this.props.expandedRows,
        onRowCollapse: this.props.onRowCollapse,
        onRowExpand: this.props.onRowExpand,
        onRowToggle: this.props.onRowToggle,
        editMode: this.props.editMode,
        editingRows: this.props.editingRows,
        onRowReorder: this.props.onRowReorder,
        scrollable: this.props.scrollable,
        rowGroupMode: this.props.rowGroupMode,
        groupRowsBy: this.props.groupRowsBy,
        expandableRowGroups: this.props.expandableRowGroups,
        loading: this.props.loading,
        emptyMessage: this.props.emptyMessage,
        rowGroupHeaderTemplate: this.props.rowGroupHeaderTemplate,
        rowExpansionTemplate: this.props.rowExpansionTemplate,
        rowGroupFooterTemplate: this.props.rowGroupFooterTemplate,
        onRowEditChange: this.props.onRowEditChange,
        compareSelectionBy: this.props.compareSelectionBy,
        selectOnEdit: this.props.selectOnEdit,
        onRowEditInit: this.props.onRowEditInit,
        rowEditValidator: this.props.rowEditValidator,
        onRowEditSave: this.props.onRowEditSave,
        onRowEditComplete: this.props.onRowEditComplete,
        onRowEditCancel: this.props.onRowEditCancel,
        cellClassName: this.props.cellClassName,
        responsiveLayout: this.props.responsiveLayout,
        selectionAutoFocus: this.props.selectionAutoFocus,
        isDataSelectable: this.props.isDataSelectable,
        showSelectionElement: this.props.showSelectionElement,
        showRowReorderElement: this.props.showRowReorderElement,
        expandedRowIcon: this.props.expandedRowIcon,
        collapsedRowIcon: this.props.collapsedRowIcon,
        rowClassName: this.props.rowClassName,
        virtualScrollerContentRef: contentRef,
        virtualScrollerOptions: options,
        isVirtualScrollerDisabled: isVirtualScrollerDisabled
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, frozenBody, body);
    }
  }, {
    key: "renderTableFooter",
    value: function renderTableFooter(options) {
      var columns = options.columns;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TableFooter, {
        tableProps: this.props,
        columns: columns,
        footerColumnGroup: this.props.footerColumnGroup
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent(processedData, columns, selectionModeInColumn, empty) {
      var _this17 = this;

      if (!columns) return;
      var isVirtualScrollerDisabled = this.isVirtualScrollerDisabled();
      var virtualScrollerOptions = this.props.virtualScrollerOptions || {};
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        ref: function ref(el) {
          return _this17.wrapper = el;
        },
        className: "p-datatable-wrapper",
        style: {
          maxHeight: isVirtualScrollerDisabled ? this.props.scrollHeight : null
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_virtualscroller__WEBPACK_IMPORTED_MODULE_11__.VirtualScroller, _extends({}, virtualScrollerOptions, {
        items: processedData,
        columns: columns,
        scrollHeight: this.props.scrollHeight,
        disabled: isVirtualScrollerDisabled,
        loaderDisabled: true,
        showSpacer: false,
        contentTemplate: function contentTemplate(options) {
          var ref = function ref(el) {
            _this17.table = el;
            options.spacerRef && options.spacerRef(el);
          };

          var tableClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-datatable-table', _this17.props.tableClassName);

          var tableHeader = _this17.renderTableHeader(options, empty);

          var tableBody = _this17.renderTableBody(options, selectionModeInColumn, empty, isVirtualScrollerDisabled);

          var tableFooter = _this17.renderTableFooter(options);

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
            ref: ref,
            style: _this17.props.tableStyle,
            className: tableClassName,
            role: "table"
          }, tableHeader, tableBody, tableFooter);
        }
      })));
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      if (this.props.footer) {
        var content = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getJSXElement(this.props.footer, {
          props: this.props
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "p-datatable-footer"
        }, content);
      }

      return null;
    }
  }, {
    key: "renderPaginator",
    value: function renderPaginator(position, totalRecords) {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-paginator-' + position, this.props.paginatorClassName);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_paginator__WEBPACK_IMPORTED_MODULE_1__.Paginator, {
        first: this.getFirst(),
        rows: this.getRows(),
        pageLinkSize: this.props.pageLinkSize,
        className: className,
        onPageChange: this.onPageChange,
        template: this.props.paginatorTemplate,
        totalRecords: totalRecords,
        rowsPerPageOptions: this.props.rowsPerPageOptions,
        currentPageReportTemplate: this.props.currentPageReportTemplate,
        leftContent: this.props.paginatorLeft,
        rightContent: this.props.paginatorRight,
        alwaysShow: this.props.alwaysShowPaginator,
        dropdownAppendTo: this.props.paginatorDropdownAppendTo
      });
    }
  }, {
    key: "renderPaginatorTop",
    value: function renderPaginatorTop(totalRecords) {
      if (this.props.paginator && this.props.paginatorPosition !== 'bottom') {
        return this.renderPaginator('top', totalRecords);
      }

      return null;
    }
  }, {
    key: "renderPaginatorBottom",
    value: function renderPaginatorBottom(totalRecords) {
      if (this.props.paginator && this.props.paginatorPosition !== 'top') {
        return this.renderPaginator('bottom', totalRecords);
      }

      return null;
    }
  }, {
    key: "renderResizeHelper",
    value: function renderResizeHelper() {
      var _this18 = this;

      if (this.props.resizableColumns) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          ref: function ref(el) {
            return _this18.resizeHelper = el;
          },
          className: "p-column-resizer-helper",
          style: {
            display: 'none'
          }
        });
      }

      return null;
    }
  }, {
    key: "renderReorderIndicators",
    value: function renderReorderIndicators() {
      var _this19 = this;

      if (this.props.reorderableColumns) {
        var style = {
          position: 'absolute',
          display: 'none'
        };
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          ref: function ref(el) {
            return _this19.reorderIndicatorUp = el;
          },
          className: "pi pi-arrow-down p-datatable-reorder-indicator-up",
          style: style
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          ref: function ref(el) {
            return _this19.reorderIndicatorDown = el;
          },
          className: "pi pi-arrow-up p-datatable-reorder-indicator-down",
          style: style
        }));
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this20 = this;

      var processedData = this.processedData();
      var columns = this.getColumns();
      var totalRecords = this.getTotalRecords(processedData);
      var empty = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isEmpty(processedData);
      var selectionModeInColumn = this.getSelectionModeInColumn(columns);
      var selectable = this.props.selectionMode || selectionModeInColumn;
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-datatable p-component', {
        'p-datatable-hoverable-rows': this.props.rowHover,
        'p-datatable-selectable': selectable && !this.props.cellSelection,
        'p-datatable-selectable-cell': selectable && this.props.cellSelection,
        'p-datatable-auto-layout': this.props.autoLayout,
        'p-datatable-resizable': this.props.resizableColumns,
        'p-datatable-resizable-fit': this.props.resizableColumns && this.props.columnResizeMode === 'fit',
        'p-datatable-scrollable': this.props.scrollable,
        'p-datatable-scrollable-vertical': this.props.scrollable && this.props.scrollDirection === 'vertical',
        'p-datatable-scrollable-horizontal': this.props.scrollable && this.props.scrollDirection === 'horizontal',
        'p-datatable-scrollable-both': this.props.scrollable && this.props.scrollDirection === 'both',
        'p-datatable-flex-scrollable': this.props.scrollable && this.props.scrollHeight === 'flex',
        'p-datatable-responsive-stack': this.props.responsiveLayout === 'stack',
        'p-datatable-responsive-scroll': this.props.responsiveLayout === 'scroll',
        'p-datatable-striped': this.props.stripedRows,
        'p-datatable-gridlines': this.props.showGridlines,
        'p-datatable-grouped-header': this.props.headerColumnGroup != null,
        'p-datatable-grouped-footer': this.props.footerColumnGroup != null,
        'p-datatable-sm': this.props.size === 'small',
        'p-datatable-lg': this.props.size === 'large'
      }, this.props.className);
      var loader = this.renderLoader();
      var header = this.renderHeader();
      var paginatorTop = this.renderPaginatorTop(totalRecords);
      var content = this.renderContent(processedData, columns, selectionModeInColumn, empty);
      var paginatorBottom = this.renderPaginatorBottom(totalRecords);
      var footer = this.renderFooter();
      var resizeHelper = this.renderResizeHelper();
      var reorderIndicators = this.renderReorderIndicators();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        ref: function ref(el) {
          return _this20.el = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style,
        "data-scrollselectors": ".p-datatable-wrapper"
      }, loader, header, paginatorTop, content, paginatorBottom, footer, resizeHelper, reorderIndicators);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.rows !== prevState.d_rows && !nextProps.onPage) {
        return {
          rows: nextProps.rows,
          d_rows: nextProps.rows
        };
      }

      return null;
    }
  }]);

  return DataTable;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(DataTable, "defaultProps", {
  id: null,
  value: null,
  header: null,
  footer: null,
  style: null,
  className: null,
  tableStyle: null,
  tableClassName: null,
  paginator: false,
  paginatorPosition: 'bottom',
  alwaysShowPaginator: true,
  paginatorClassName: null,
  paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
  paginatorLeft: null,
  paginatorRight: null,
  paginatorDropdownAppendTo: null,
  pageLinkSize: 5,
  rowsPerPageOptions: null,
  currentPageReportTemplate: '({currentPage} of {totalPages})',
  first: 0,
  rows: null,
  totalRecords: null,
  lazy: false,
  sortField: null,
  sortOrder: null,
  multiSortMeta: null,
  sortMode: 'single',
  defaultSortOrder: 1,
  removableSort: false,
  emptyMessage: null,
  selectionMode: null,
  dragSelection: false,
  cellSelection: false,
  selection: null,
  onSelectionChange: null,
  contextMenuSelection: null,
  onContextMenuSelectionChange: null,
  compareSelectionBy: 'deepEquals',
  dataKey: null,
  metaKeySelection: true,
  selectOnEdit: true,
  selectionPageOnly: false,
  selectionAutoFocus: true,
  showSelectAll: true,
  selectAll: false,
  onSelectAllChange: null,
  headerColumnGroup: null,
  footerColumnGroup: null,
  rowExpansionTemplate: null,
  expandedRows: null,
  onRowToggle: null,
  resizableColumns: false,
  columnResizeMode: 'fit',
  reorderableColumns: false,
  filters: null,
  globalFilter: null,
  filterDelay: 300,
  filterLocale: undefined,
  scrollable: false,
  scrollHeight: null,
  scrollDirection: 'vertical',
  virtualScrollerOptions: null,
  frozenWidth: null,
  frozenValue: null,
  csvSeparator: ',',
  exportFilename: 'download',
  rowGroupMode: null,
  autoLayout: false,
  rowClassName: null,
  cellClassName: null,
  rowGroupHeaderTemplate: null,
  rowGroupFooterTemplate: null,
  loading: false,
  loadingIcon: 'pi pi-spinner',
  tabIndex: 0,
  stateKey: null,
  stateStorage: 'session',
  groupRowsBy: null,
  editMode: 'cell',
  editingRows: null,
  expandableRowGroups: false,
  rowHover: false,
  showGridlines: false,
  stripedRows: false,
  size: 'normal',
  responsiveLayout: 'stack',
  breakpoint: '960px',
  filterDisplay: 'menu',
  expandedRowIcon: 'pi pi-chevron-down',
  collapsedRowIcon: 'pi pi-chevron-right',
  onRowEditComplete: null,
  globalFilterFields: null,
  showSelectionElement: null,
  showRowReorderElement: null,
  isDataSelectable: null,
  onColumnResizeEnd: null,
  onColumnResizerClick: null,
  onColumnResizerDoubleClick: null,
  onSort: null,
  onPage: null,
  onFilter: null,
  onAllRowsSelect: null,
  onAllRowsUnselect: null,
  onRowClick: null,
  onRowDoubleClick: null,
  onRowSelect: null,
  onRowUnselect: null,
  onRowExpand: null,
  onRowCollapse: null,
  onContextMenu: null,
  onColReorder: null,
  onCellClick: null,
  onCellSelect: null,
  onCellUnselect: null,
  onRowReorder: null,
  onValueChange: null,
  rowEditValidator: null,
  onRowEditInit: null,
  onRowEditSave: null,
  onRowEditCancel: null,
  onRowEditChange: null,
  exportFunction: null,
  customSaveState: null,
  customRestoreState: null,
  onStateSave: null,
  onStateRestore: null
});




/***/ }),

/***/ "./node_modules/primereact/dropdown/dropdown.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/primereact/dropdown/dropdown.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dropdown": () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");
/* harmony import */ var primereact_csstransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/csstransition */ "./node_modules/primereact/csstransition/csstransition.esm.js");
/* harmony import */ var primereact_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/portal */ "./node_modules/primereact/portal/portal.esm.js");
/* harmony import */ var primereact_virtualscroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/virtualscroller */ "./node_modules/primereact/virtualscroller/virtualscroller.esm.js");
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");
/* harmony import */ var primereact_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/tooltip */ "./node_modules/primereact/tooltip/tooltip.esm.js");
/* harmony import */ var primereact_overlayservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/overlayservice */ "./node_modules/primereact/overlayservice/overlayservice.esm.js");










function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var DropdownItem = /*#__PURE__*/function (_Component) {
  _inherits(DropdownItem, _Component);

  var _super = _createSuper$2(DropdownItem);

  function DropdownItem(props) {
    var _this;

    _classCallCheck(this, DropdownItem);

    _this = _super.call(this, props);
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DropdownItem, [{
    key: "onClick",
    value: function onClick(event) {
      if (this.props.onClick) {
        this.props.onClick({
          originalEvent: event,
          option: this.props.option
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-dropdown-item', {
        'p-highlight': this.props.selected,
        'p-disabled': this.props.disabled,
        'p-dropdown-item-empty': !this.props.label || this.props.label.length === 0
      }, this.props.option.className);
      var content = this.props.template ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.template, this.props.option) : this.props.label;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: className,
        onClick: this.onClick,
        "aria-label": this.props.label,
        key: this.props.label,
        role: "option",
        "aria-selected": this.props.selected
      }, content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_2__.Ripple, null));
    }
  }]);

  return DropdownItem;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(DropdownItem, "defaultProps", {
  option: null,
  label: null,
  template: null,
  selected: false,
  disabled: false,
  onClick: null
});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DropdownPanelComponent = /*#__PURE__*/function (_Component) {
  _inherits(DropdownPanelComponent, _Component);

  var _super = _createSuper$1(DropdownPanelComponent);

  function DropdownPanelComponent(props) {
    var _this;

    _classCallCheck(this, DropdownPanelComponent);

    _this = _super.call(this, props);
    _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
    _this.onEntered = _this.onEntered.bind(_assertThisInitialized(_this));
    _this.onFilterInputChange = _this.onFilterInputChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DropdownPanelComponent, [{
    key: "onEnter",
    value: function onEnter() {
      var _this2 = this;

      this.props.onEnter(function () {
        if (_this2.virtualScrollerRef) {
          var selectedIndex = _this2.props.getSelectedOptionIndex();

          if (selectedIndex !== -1) {
            _this2.virtualScrollerRef.scrollToIndex(selectedIndex);
          }
        }
      });
    }
  }, {
    key: "onEntered",
    value: function onEntered() {
      var _this3 = this;

      this.props.onEntered(function () {
        if (_this3.props.filter && _this3.props.filterInputAutoFocus) {
          _this3.filterInput.focus();
        }
      });
    }
  }, {
    key: "onFilterInputChange",
    value: function onFilterInputChange(event) {
      if (this.virtualScrollerRef) {
        this.virtualScrollerRef.scrollToIndex(0);
      }

      this.props.onFilterInputChange && this.props.onFilterInputChange(event);
    }
  }, {
    key: "isEmptyFilter",
    value: function isEmptyFilter() {
      return !(this.props.visibleOptions && this.props.visibleOptions.length) && this.props.hasFilter();
    }
  }, {
    key: "renderGroupChildren",
    value: function renderGroupChildren(optionGroup) {
      var _this4 = this;

      var groupChildren = this.props.getOptionGroupChildren(optionGroup);
      return groupChildren.map(function (option, j) {
        var optionLabel = _this4.props.getOptionLabel(option);

        var optionKey = j + '_' + _this4.props.getOptionRenderKey(option);

        var disabled = _this4.props.isOptionDisabled(option);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropdownItem, {
          key: optionKey,
          label: optionLabel,
          option: option,
          template: _this4.props.itemTemplate,
          selected: _this4.props.isSelected(option),
          disabled: disabled,
          onClick: _this4.props.onOptionClick
        });
      });
    }
  }, {
    key: "renderEmptyMessage",
    value: function renderEmptyMessage(emptyMessage, isFilter) {
      var message = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(emptyMessage, this.props) || (0,primereact_api__WEBPACK_IMPORTED_MODULE_6__.localeOption)(isFilter ? 'emptyFilterMessage' : 'emptyMessage');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: "p-dropdown-empty-message"
      }, message);
    }
  }, {
    key: "renderItem",
    value: function renderItem(option, index) {
      if (this.props.optionGroupLabel) {
        var groupContent = this.props.optionGroupTemplate ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.optionGroupTemplate, option, index) : this.props.getOptionGroupLabel(option);
        var groupChildrenContent = this.renderGroupChildren(option);
        var key = index + '_' + this.props.getOptionGroupRenderKey(option);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: key
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: "p-dropdown-item-group"
        }, groupContent), groupChildrenContent);
      } else {
        var optionLabel = this.props.getOptionLabel(option);
        var optionKey = index + '_' + this.props.getOptionRenderKey(option);
        var disabled = this.props.isOptionDisabled(option);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropdownItem, {
          key: optionKey,
          label: optionLabel,
          option: option,
          template: this.props.itemTemplate,
          selected: this.props.isSelected(option),
          disabled: disabled,
          onClick: this.props.onOptionClick
        });
      }
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this5 = this;

      if (this.props.visibleOptions && this.props.visibleOptions.length) {
        return this.props.visibleOptions.map(function (option, index) {
          return _this5.renderItem(option, index);
        });
      } else if (this.props.hasFilter()) {
        return this.renderEmptyMessage(this.props.emptyFilterMessage, true);
      }

      return this.renderEmptyMessage(this.props.emptyMessage);
    }
  }, {
    key: "renderFilterClearIcon",
    value: function renderFilterClearIcon() {
      var _this6 = this;

      if (this.props.showFilterClear && this.props.filterValue) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          className: "p-dropdown-filter-clear-icon pi pi-times",
          onClick: function onClick() {
            return _this6.props.onFilterClearIconClick(function () {
              return _this6.filterInput.focus();
            });
          }
        });
      }

      return null;
    }
  }, {
    key: "renderFilter",
    value: function renderFilter() {
      var _this7 = this;

      if (this.props.filter) {
        var clearIcon = this.renderFilterClearIcon();
        var containerClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-dropdown-filter-container', {
          'p-dropdown-clearable-filter': !!clearIcon
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "p-dropdown-header"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: containerClassName
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
          ref: function ref(el) {
            return _this7.filterInput = el;
          },
          type: "text",
          autoComplete: "off",
          className: "p-dropdown-filter p-inputtext p-component",
          placeholder: this.props.filterPlaceholder,
          onKeyDown: this.props.onFilterInputKeyDown,
          onChange: this.onFilterInputChange,
          value: this.props.filterValue
        }), clearIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          className: "p-dropdown-filter-icon pi pi-search"
        })));
      }

      return null;
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this8 = this;

      if (this.props.virtualScrollerOptions) {
        var virtualScrollerProps = _objectSpread$1(_objectSpread$1({}, this.props.virtualScrollerOptions), {
          style: _objectSpread$1(_objectSpread$1({}, this.props.virtualScrollerOptions.style), {
            height: this.props.scrollHeight
          }),
          className: (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-dropdown-items-wrapper', this.props.virtualScrollerOptions.className),
          items: this.props.visibleOptions,
          onLazyLoad: function onLazyLoad(event) {
            return _this8.props.virtualScrollerOptions.onLazyLoad(_objectSpread$1(_objectSpread$1({}, event), {
              filter: _this8.props.filterValue
            }));
          },
          itemTemplate: function itemTemplate(item, options) {
            return item && _this8.renderItem(item, options.index);
          },
          contentTemplate: function contentTemplate(options) {
            var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-dropdown-items', options.className);
            var content = _this8.isEmptyFilter() ? _this8.renderEmptyMessage() : options.children;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
              ref: options.contentRef,
              className: className,
              role: "listbox"
            }, content);
          }
        });

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_virtualscroller__WEBPACK_IMPORTED_MODULE_5__.VirtualScroller, _extends({
          ref: function ref(el) {
            return _this8.virtualScrollerRef = el;
          }
        }, virtualScrollerProps));
      } else {
        var items = this.renderItems();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "p-dropdown-items-wrapper",
          style: {
            maxHeight: this.props.scrollHeight || 'auto'
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
          className: "p-dropdown-items",
          role: "listbox"
        }, items));
      }
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-dropdown-panel p-component', this.props.panelClassName);
      var filter = this.renderFilter();
      var content = this.renderContent();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_csstransition__WEBPACK_IMPORTED_MODULE_3__.CSSTransition, {
        nodeRef: this.props.forwardRef,
        classNames: "p-connected-overlay",
        "in": this.props["in"],
        timeout: {
          enter: 120,
          exit: 100
        },
        options: this.props.transitionOptions,
        unmountOnExit: true,
        onEnter: this.onEnter,
        onEntering: this.props.onEntering,
        onEntered: this.onEntered,
        onExit: this.props.onExit,
        onExited: this.props.onExited
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        ref: this.props.forwardRef,
        className: className,
        style: this.props.panelStyle,
        onClick: this.props.onClick
      }, filter, content));
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.renderElement();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_portal__WEBPACK_IMPORTED_MODULE_4__.Portal, {
        element: element,
        appendTo: this.props.appendTo
      });
    }
  }]);

  return DropdownPanelComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var DropdownPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropdownPanelComponent, _extends({
    forwardRef: ref
  }, props));
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Dropdown = /*#__PURE__*/function (_Component) {
  _inherits(Dropdown, _Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);
    _this.state = {
      filter: '',
      focused: false,
      overlayVisible: false
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onInputFocus = _this.onInputFocus.bind(_assertThisInitialized(_this));
    _this.onInputBlur = _this.onInputBlur.bind(_assertThisInitialized(_this));
    _this.onInputKeyDown = _this.onInputKeyDown.bind(_assertThisInitialized(_this));
    _this.onEditableInputChange = _this.onEditableInputChange.bind(_assertThisInitialized(_this));
    _this.onEditableInputFocus = _this.onEditableInputFocus.bind(_assertThisInitialized(_this));
    _this.onOptionClick = _this.onOptionClick.bind(_assertThisInitialized(_this));
    _this.onFilterInputChange = _this.onFilterInputChange.bind(_assertThisInitialized(_this));
    _this.onFilterInputKeyDown = _this.onFilterInputKeyDown.bind(_assertThisInitialized(_this));
    _this.onFilterClearIconClick = _this.onFilterClearIconClick.bind(_assertThisInitialized(_this));
    _this.onPanelClick = _this.onPanelClick.bind(_assertThisInitialized(_this));
    _this.onOverlayEnter = _this.onOverlayEnter.bind(_assertThisInitialized(_this));
    _this.onOverlayEntered = _this.onOverlayEntered.bind(_assertThisInitialized(_this));
    _this.onOverlayExit = _this.onOverlayExit.bind(_assertThisInitialized(_this));
    _this.onOverlayExited = _this.onOverlayExited.bind(_assertThisInitialized(_this));
    _this.resetFilter = _this.resetFilter.bind(_assertThisInitialized(_this));
    _this.clear = _this.clear.bind(_assertThisInitialized(_this));
    _this.hasFilter = _this.hasFilter.bind(_assertThisInitialized(_this));
    _this.getOptionLabel = _this.getOptionLabel.bind(_assertThisInitialized(_this));
    _this.getOptionRenderKey = _this.getOptionRenderKey.bind(_assertThisInitialized(_this));
    _this.isOptionDisabled = _this.isOptionDisabled.bind(_assertThisInitialized(_this));
    _this.getOptionGroupChildren = _this.getOptionGroupChildren.bind(_assertThisInitialized(_this));
    _this.getOptionGroupLabel = _this.getOptionGroupLabel.bind(_assertThisInitialized(_this));
    _this.getOptionGroupRenderKey = _this.getOptionGroupRenderKey.bind(_assertThisInitialized(_this));
    _this.getSelectedOptionIndex = _this.getSelectedOptionIndex.bind(_assertThisInitialized(_this));
    _this.isSelected = _this.isSelected.bind(_assertThisInitialized(_this));
    _this.overlayRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this.inputRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(_this.props.inputRef);
    return _this;
  }

  _createClass(Dropdown, [{
    key: "onClick",
    value: function onClick(event) {
      if (this.props.disabled) {
        return;
      }

      if (primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') || event.target.tagName === 'INPUT') {
        return;
      } else if (!this.overlayRef.current || !(this.overlayRef.current && this.overlayRef.current.contains(event.target))) {
        this.focusInput.focus();

        if (this.state.overlayVisible) {
          this.hideOverlay();
        } else {
          this.showOverlay();
        }
      }
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(event) {
      var _this2 = this;

      event.persist();

      if (this.props.showOnFocus && !this.state.overlayVisible) {
        this.showOverlay();
      }

      this.setState({
        focused: true
      }, function () {
        if (_this2.props.onFocus) {
          _this2.props.onFocus(event);
        }
      });
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur(event) {
      var _this3 = this;

      event.persist();
      this.setState({
        focused: false
      }, function () {
        if (_this3.props.onBlur) {
          _this3.props.onBlur(event);
        }
      });
    }
  }, {
    key: "onPanelClick",
    value: function onPanelClick(event) {
      primereact_overlayservice__WEBPACK_IMPORTED_MODULE_8__.OverlayService.emit('overlay-click', {
        originalEvent: event,
        target: this.container
      });
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(event) {
      switch (event.which) {
        //down
        case 40:
          this.onDownKey(event);
          break;
        //up

        case 38:
          this.onUpKey(event);
          break;
        //space

        case 32:
          if (this.state.overlayVisible) this.hideOverlay();else this.showOverlay();
          event.preventDefault();
          break;
        //enter

        case 13:
          this.hideOverlay();
          event.preventDefault();
          break;
        //escape and tab

        case 27:
        case 9:
          this.hideOverlay();
          break;

        default:
          this.search(event);
          break;
      }
    }
  }, {
    key: "onFilterInputKeyDown",
    value: function onFilterInputKeyDown(event) {
      switch (event.which) {
        //down
        case 40:
          this.onDownKey(event);
          break;
        //up

        case 38:
          this.onUpKey(event);
          break;
        //enter and escape

        case 13:
        case 27:
          this.hideOverlay();
          event.preventDefault();
          break;
      }
    }
  }, {
    key: "onUpKey",
    value: function onUpKey(event) {
      var visibleOptions = this.getVisibleOptions();

      if (visibleOptions) {
        var prevOption = this.findPrevOption(this.getSelectedOptionIndex());

        if (prevOption) {
          this.selectItem({
            originalEvent: event,
            option: prevOption
          });
        }
      }

      event.preventDefault();
    }
  }, {
    key: "onDownKey",
    value: function onDownKey(event) {
      var visibleOptions = this.getVisibleOptions();

      if (visibleOptions) {
        if (!this.state.overlayVisible && event.altKey) {
          this.showOverlay();
        } else {
          var nextOption = this.findNextOption(this.getSelectedOptionIndex());

          if (nextOption) {
            this.selectItem({
              originalEvent: event,
              option: nextOption
            });
          }
        }
      }

      event.preventDefault();
    }
  }, {
    key: "findNextOption",
    value: function findNextOption(index) {
      var visibleOptions = this.getVisibleOptions();

      if (this.props.optionGroupLabel) {
        var groupIndex = index === -1 ? 0 : index.group;
        var optionIndex = index === -1 ? -1 : index.option;
        var option = this.findNextOptionInList(this.getOptionGroupChildren(visibleOptions[groupIndex]), optionIndex);
        if (option) return option;else if (groupIndex + 1 !== visibleOptions.length) return this.findNextOption({
          group: groupIndex + 1,
          option: -1
        });else return null;
      } else {
        return this.findNextOptionInList(visibleOptions, index);
      }
    }
  }, {
    key: "findNextOptionInList",
    value: function findNextOptionInList(list, index) {
      var i = index + 1;

      if (i === list.length) {
        return null;
      }

      var option = list[i];
      if (this.isOptionDisabled(option)) return this.findNextOptionInList(i);else return option;
    }
  }, {
    key: "findPrevOption",
    value: function findPrevOption(index) {
      if (index === -1) {
        return null;
      }

      var visibleOptions = this.getVisibleOptions();

      if (this.props.optionGroupLabel) {
        var groupIndex = index.group;
        var optionIndex = index.option;
        var option = this.findPrevOptionInList(this.getOptionGroupChildren(visibleOptions[groupIndex]), optionIndex);
        if (option) return option;else if (groupIndex > 0) return this.findPrevOption({
          group: groupIndex - 1,
          option: this.getOptionGroupChildren(visibleOptions[groupIndex - 1]).length
        });else return null;
      } else {
        return this.findPrevOptionInList(visibleOptions, index);
      }
    }
  }, {
    key: "findPrevOptionInList",
    value: function findPrevOptionInList(list, index) {
      var i = index - 1;

      if (i < 0) {
        return null;
      }

      var option = list[i];
      if (this.isOptionDisabled(option)) return this.findPrevOption(i);else return option;
    }
  }, {
    key: "search",
    value: function search(event) {
      var _this4 = this;

      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }

      var _char = event.key;
      this.previousSearchChar = this.currentSearchChar;
      this.currentSearchChar = _char;
      if (this.previousSearchChar === this.currentSearchChar) this.searchValue = this.currentSearchChar;else this.searchValue = this.searchValue ? this.searchValue + _char : _char;

      if (this.searchValue) {
        var searchIndex = this.getSelectedOptionIndex();
        var newOption = this.props.optionGroupLabel ? this.searchOptionInGroup(searchIndex) : this.searchOption(++searchIndex);

        if (newOption) {
          this.selectItem({
            originalEvent: event,
            option: newOption
          });
          this.selectedOptionUpdated = true;
        }
      }

      this.searchTimeout = setTimeout(function () {
        _this4.searchValue = null;
      }, 250);
    }
  }, {
    key: "searchOption",
    value: function searchOption(index) {
      var option;

      if (this.searchValue) {
        var visibleOptions = this.getVisibleOptions();
        option = this.searchOptionInRange(index, visibleOptions.length);

        if (!option) {
          option = this.searchOptionInRange(0, index);
        }
      }

      return option;
    }
  }, {
    key: "searchOptionInRange",
    value: function searchOptionInRange(start, end) {
      var visibleOptions = this.getVisibleOptions();

      for (var i = start; i < end; i++) {
        var opt = visibleOptions[i];

        if (this.matchesSearchValue(opt)) {
          return opt;
        }
      }

      return null;
    }
  }, {
    key: "searchOptionInGroup",
    value: function searchOptionInGroup(index) {
      var searchIndex = index === -1 ? {
        group: 0,
        option: -1
      } : index;
      var visibleOptions = this.getVisibleOptions();

      for (var i = searchIndex.group; i < visibleOptions.length; i++) {
        var groupOptions = this.getOptionGroupChildren(visibleOptions[i]);

        for (var j = searchIndex.group === i ? searchIndex.option + 1 : 0; j < groupOptions.length; j++) {
          if (this.matchesSearchValue(groupOptions[j])) {
            return groupOptions[j];
          }
        }
      }

      for (var _i = 0; _i <= searchIndex.group; _i++) {
        var _groupOptions = this.getOptionGroupChildren(visibleOptions[_i]);

        for (var _j = 0; _j < (searchIndex.group === _i ? searchIndex.option : _groupOptions.length); _j++) {
          if (this.matchesSearchValue(_groupOptions[_j])) {
            return _groupOptions[_j];
          }
        }
      }

      return null;
    }
  }, {
    key: "matchesSearchValue",
    value: function matchesSearchValue(option) {
      var label = this.getOptionLabel(option).toLocaleLowerCase(this.props.filterLocale);
      return label.startsWith(this.searchValue.toLocaleLowerCase(this.props.filterLocale));
    }
  }, {
    key: "onEditableInputChange",
    value: function onEditableInputChange(event) {
      if (this.props.onChange) {
        this.props.onChange({
          originalEvent: event.originalEvent,
          value: event.target.value,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: event.target.value
          }
        });
      }
    }
  }, {
    key: "onEditableInputFocus",
    value: function onEditableInputFocus(event) {
      var _this5 = this;

      event.persist();
      this.setState({
        focused: true
      }, function () {
        _this5.hideOverlay();

        if (_this5.props.onFocus) {
          _this5.props.onFocus(event);
        }
      });
    }
  }, {
    key: "onOptionClick",
    value: function onOptionClick(event) {
      var option = event.option;

      if (!option.disabled) {
        this.selectItem(event);
        this.focusInput.focus();
      }

      this.hideOverlay();
    }
  }, {
    key: "onFilterInputChange",
    value: function onFilterInputChange(event) {
      var _this6 = this;

      var filter = event.target.value;
      this.setState({
        filter: filter
      }, function () {
        if (_this6.props.onFilter) {
          _this6.props.onFilter({
            originalEvent: event,
            filter: filter
          });
        }
      });
    }
  }, {
    key: "onFilterClearIconClick",
    value: function onFilterClearIconClick(callback) {
      this.resetFilter(callback);
    }
  }, {
    key: "resetFilter",
    value: function resetFilter(callback) {
      var _this7 = this;

      var filter = '';
      this.setState({
        filter: filter
      }, function () {
        _this7.props.onFilter && _this7.props.onFilter({
          filter: filter
        });
        callback && callback();
      });
    }
  }, {
    key: "clear",
    value: function clear(event) {
      if (this.props.onChange) {
        this.props.onChange({
          originalEvent: event,
          value: undefined,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: undefined
          }
        });
      }

      this.updateEditableLabel();
    }
  }, {
    key: "selectItem",
    value: function selectItem(event) {
      var currentSelectedOption = this.getSelectedOption();

      if (currentSelectedOption !== event.option) {
        this.updateEditableLabel(event.option);
        var optionValue = this.getOptionValue(event.option);

        if (this.props.onChange) {
          this.props.onChange({
            originalEvent: event.originalEvent,
            value: optionValue,
            stopPropagation: function stopPropagation() {},
            preventDefault: function preventDefault() {},
            target: {
              name: this.props.name,
              id: this.props.id,
              value: optionValue
            }
          });
        }
      }
    }
  }, {
    key: "getSelectedOption",
    value: function getSelectedOption() {
      var index = this.getSelectedOptionIndex();
      var visibleOptions = this.getVisibleOptions();
      return index !== -1 ? this.props.optionGroupLabel ? this.getOptionGroupChildren(visibleOptions[index.group])[index.option] : visibleOptions[index] : null;
    }
  }, {
    key: "getSelectedOptionIndex",
    value: function getSelectedOptionIndex() {
      var visibleOptions = this.getVisibleOptions();

      if (this.props.value != null && visibleOptions) {
        if (this.props.optionGroupLabel) {
          for (var i = 0; i < visibleOptions.length; i++) {
            var selectedOptionIndex = this.findOptionIndexInList(this.props.value, this.getOptionGroupChildren(visibleOptions[i]));

            if (selectedOptionIndex !== -1) {
              return {
                group: i,
                option: selectedOptionIndex
              };
            }
          }
        } else {
          return this.findOptionIndexInList(this.props.value, visibleOptions);
        }
      }

      return -1;
    }
  }, {
    key: "findOptionIndexInList",
    value: function findOptionIndexInList(value, list) {
      var key = this.equalityKey();

      for (var i = 0; i < list.length; i++) {
        if (primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.equals(value, this.getOptionValue(list[i]), key)) {
          return i;
        }
      }

      return -1;
    }
  }, {
    key: "isSelected",
    value: function isSelected(option) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.equals(this.props.value, this.getOptionValue(option), this.equalityKey());
    }
  }, {
    key: "equalityKey",
    value: function equalityKey() {
      return this.props.optionValue ? null : this.props.dataKey;
    }
  }, {
    key: "showOverlay",
    value: function showOverlay() {
      this.setState({
        overlayVisible: true
      });
    }
  }, {
    key: "hideOverlay",
    value: function hideOverlay() {
      this.setState({
        overlayVisible: false
      });
    }
  }, {
    key: "onOverlayEnter",
    value: function onOverlayEnter(callback) {
      primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ZIndexUtils.set('overlay', this.overlayRef.current, primereact_api__WEBPACK_IMPORTED_MODULE_6__["default"].autoZIndex, primereact_api__WEBPACK_IMPORTED_MODULE_6__["default"].zIndex.overlay);
      this.alignOverlay();
      callback && callback();
    }
  }, {
    key: "onOverlayEntered",
    value: function onOverlayEntered(callback) {
      callback && callback();
      this.bindDocumentClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.props.onShow && this.props.onShow();
    }
  }, {
    key: "onOverlayExit",
    value: function onOverlayExit() {
      this.unbindDocumentClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
    }
  }, {
    key: "onOverlayExited",
    value: function onOverlayExited() {
      if (this.props.filter && this.props.resetFilterOnHide) {
        this.resetFilter();
      }

      primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ZIndexUtils.clear(this.overlayRef.current);
      this.props.onHide && this.props.onHide();
    }
  }, {
    key: "alignOverlay",
    value: function alignOverlay() {
      primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.alignOverlay(this.overlayRef.current, this.input.parentElement, this.props.appendTo || primereact_api__WEBPACK_IMPORTED_MODULE_6__["default"].appendTo);
    }
  }, {
    key: "scrollInView",
    value: function scrollInView() {
      var highlightItem = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.findSingle(this.overlayRef.current, 'li.p-highlight');

      if (highlightItem && highlightItem.scrollIntoView) {
        highlightItem.scrollIntoView({
          block: 'nearest',
          inline: 'start'
        });
      }
    }
  }, {
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      var _this8 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (_this8.state.overlayVisible && _this8.isOutsideClicked(event)) {
            _this8.hideOverlay();
          }
        };

        document.addEventListener('click', this.documentClickListener);
      }
    }
  }, {
    key: "unbindDocumentClickListener",
    value: function unbindDocumentClickListener() {
      if (this.documentClickListener) {
        document.removeEventListener('click', this.documentClickListener);
        this.documentClickListener = null;
      }
    }
  }, {
    key: "bindScrollListener",
    value: function bindScrollListener() {
      var _this9 = this;

      if (!this.scrollHandler) {
        this.scrollHandler = new primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ConnectedOverlayScrollHandler(this.container, function () {
          if (_this9.state.overlayVisible) {
            _this9.hideOverlay();
          }
        });
      }

      this.scrollHandler.bindScrollListener();
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
  }, {
    key: "bindResizeListener",
    value: function bindResizeListener() {
      var _this10 = this;

      if (!this.resizeListener) {
        this.resizeListener = function () {
          if (_this10.state.overlayVisible && !primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.isTouchDevice()) {
            _this10.hideOverlay();
          }
        };

        window.addEventListener('resize', this.resizeListener);
      }
    }
  }, {
    key: "unbindResizeListener",
    value: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    }
  }, {
    key: "isOutsideClicked",
    value: function isOutsideClicked(event) {
      return this.container && !(this.container.isSameNode(event.target) || this.isClearClicked(event) || this.container.contains(event.target) || this.overlayRef && this.overlayRef.current.contains(event.target));
    }
  }, {
    key: "isClearClicked",
    value: function isClearClicked(event) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') || primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(event.target, 'p-dropdown-filter-clear-icon');
    }
  }, {
    key: "updateEditableLabel",
    value: function updateEditableLabel(option) {
      if (this.input) {
        this.input.value = option ? this.getOptionLabel(option) : this.props.value || '';
      }
    }
  }, {
    key: "hasFilter",
    value: function hasFilter() {
      return this.state.filter && this.state.filter.trim().length > 0;
    }
  }, {
    key: "getOptionLabel",
    value: function getOptionLabel(option) {
      return this.props.optionLabel ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.resolveFieldData(option, this.props.optionLabel) : option && option['label'] !== undefined ? option['label'] : option;
    }
  }, {
    key: "getOptionValue",
    value: function getOptionValue(option) {
      return this.props.optionValue ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.resolveFieldData(option, this.props.optionValue) : option && option['value'] !== undefined ? option['value'] : option;
    }
  }, {
    key: "getOptionRenderKey",
    value: function getOptionRenderKey(option) {
      return this.props.dataKey ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.resolveFieldData(option, this.props.dataKey) : this.getOptionLabel(option);
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option) {
      if (this.props.optionDisabled) {
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isFunction(this.props.optionDisabled) ? this.props.optionDisabled(option) : primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.resolveFieldData(option, this.props.optionDisabled);
      }

      return option && option['disabled'] !== undefined ? option['disabled'] : false;
    }
  }, {
    key: "getOptionGroupRenderKey",
    value: function getOptionGroupRenderKey(optionGroup) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupLabel);
    }
  }, {
    key: "getOptionGroupLabel",
    value: function getOptionGroupLabel(optionGroup) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupLabel);
    }
  }, {
    key: "getOptionGroupChildren",
    value: function getOptionGroupChildren(optionGroup) {
      return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.resolveFieldData(optionGroup, this.props.optionGroupChildren);
    }
  }, {
    key: "checkValidity",
    value: function checkValidity() {
      if (this.inputRef.current) {
        return this.inputRef.current.checkValidity();
      }

      return false;
    }
  }, {
    key: "isLazy",
    value: function isLazy() {
      return this.props.virtualScrollerOptions && this.props.virtualScrollerOptions.lazy;
    }
  }, {
    key: "getVisibleOptions",
    value: function getVisibleOptions() {
      if (this.hasFilter() && !this.isLazy()) {
        var filterValue = this.state.filter.trim().toLocaleLowerCase(this.props.filterLocale);
        var searchFields = this.props.filterBy ? this.props.filterBy.split(',') : [this.props.optionLabel || 'label'];

        if (this.props.optionGroupLabel) {
          var filteredGroups = [];

          var _iterator = _createForOfIteratorHelper(this.props.options),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var optgroup = _step.value;
              var filteredSubOptions = primereact_api__WEBPACK_IMPORTED_MODULE_6__.FilterService.filter(this.getOptionGroupChildren(optgroup), searchFields, filterValue, this.props.filterMatchMode, this.props.filterLocale);

              if (filteredSubOptions && filteredSubOptions.length) {
                filteredGroups.push(_objectSpread(_objectSpread({}, optgroup), {
                  items: filteredSubOptions
                }));
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return filteredGroups;
        } else {
          return primereact_api__WEBPACK_IMPORTED_MODULE_6__.FilterService.filter(this.props.options, searchFields, filterValue, this.props.filterMatchMode, this.props.filterLocale);
        }
      } else {
        return this.props.options;
      }
    }
  }, {
    key: "updateInputField",
    value: function updateInputField() {
      if (this.props.editable && this.input) {
        var selectedOption = this.getSelectedOption();
        var label = selectedOption ? this.getOptionLabel(selectedOption) : null;
        var value = label || this.props.value || '';
        this.input.value = value;
      }
    }
  }, {
    key: "updateInputRef",
    value: function updateInputRef() {
      var ref = this.props.inputRef;

      if (ref) {
        if (typeof ref === 'function') {
          ref(this.inputRef.current);
        } else {
          ref.current = this.inputRef.current;
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateInputRef();

      if (this.props.autoFocus && this.focusInput) {
        this.focusInput.focus();
      }

      if (this.props.tooltip) {
        this.renderTooltip();
      }

      this.updateInputField();

      if (this.inputRef.current) {
        this.inputRef.current.selectedIndex = 1;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindDocumentClickListener();
      this.unbindResizeListener();

      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }

      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }

      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }

      primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ZIndexUtils.clear(this.overlayRef.current);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.state.overlayVisible) {
        if (this.props.filter) {
          this.alignOverlay();
        }

        if (prevProps.value !== this.props.value) {
          this.scrollInView();
        }
      }

      if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
        if (this.tooltip) this.tooltip.update(_objectSpread({
          content: this.props.tooltip
        }, this.props.tooltipOptions || {}));else this.renderTooltip();
      }

      if (this.state.filter && (!this.props.options || this.props.options.length === 0)) {
        this.setState({
          filter: ''
        });
      }

      this.updateInputField();

      if (this.inputRef.current) {
        this.inputRef.current.selectedIndex = 1;
      }
    }
  }, {
    key: "renderHiddenSelect",
    value: function renderHiddenSelect(selectedOption) {
      var placeHolderOption = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: ""
      }, this.props.placeholder);
      var option = selectedOption ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
        value: selectedOption.value
      }, this.getOptionLabel(selectedOption)) : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-hidden-accessible p-dropdown-hidden-select"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
        ref: this.inputRef,
        required: this.props.required,
        name: this.props.name,
        tabIndex: -1,
        "aria-hidden": "true"
      }, placeHolderOption, option));
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = (0,primereact_tooltip__WEBPACK_IMPORTED_MODULE_7__.tip)({
        target: this.container,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "renderKeyboardHelper",
    value: function renderKeyboardHelper() {
      var _this11 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-hidden-accessible"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        ref: function ref(el) {
          return _this11.focusInput = el;
        },
        id: this.props.inputId,
        type: "text",
        readOnly: true,
        "aria-haspopup": "listbox",
        onFocus: this.onInputFocus,
        onBlur: this.onInputBlur,
        onKeyDown: this.onInputKeyDown,
        disabled: this.props.disabled,
        tabIndex: this.props.tabIndex,
        "aria-label": this.props.ariaLabel,
        "aria-labelledby": this.props.ariaLabelledBy
      }));
    }
  }, {
    key: "renderLabel",
    value: function renderLabel(selectedOption) {
      var _this12 = this;

      var label = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(selectedOption) ? this.getOptionLabel(selectedOption) : null;

      if (this.props.editable) {
        var value = label || this.props.value || '';
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
          ref: function ref(el) {
            return _this12.input = el;
          },
          type: "text",
          defaultValue: value,
          className: "p-dropdown-label p-inputtext",
          disabled: this.props.disabled,
          placeholder: this.props.placeholder,
          maxLength: this.props.maxLength,
          onInput: this.onEditableInputChange,
          onFocus: this.onEditableInputFocus,
          onBlur: this.onInputBlur,
          "aria-label": this.props.ariaLabel,
          "aria-labelledby": this.props.ariaLabelledBy,
          "aria-haspopup": "listbox"
        });
      } else {
        var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-dropdown-label p-inputtext', {
          'p-placeholder': label === null && this.props.placeholder,
          'p-dropdown-label-empty': label === null && !this.props.placeholder
        });
        var content = this.props.valueTemplate ? primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.valueTemplate, selectedOption, this.props) : label || this.props.placeholder || 'empty';
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          ref: function ref(el) {
            return _this12.input = el;
          },
          className: className
        }, content);
      }
    }
  }, {
    key: "renderClearIcon",
    value: function renderClearIcon() {
      if (this.props.value != null && this.props.showClear && !this.props.disabled) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          className: "p-dropdown-clear-icon pi pi-times",
          onClick: this.clear
        });
      }

      return null;
    }
  }, {
    key: "renderDropdownIcon",
    value: function renderDropdownIcon() {
      var _this13 = this;

      var iconClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-dropdown-trigger-icon p-clickable', this.props.dropdownIcon);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        ref: function ref(el) {
          return _this13.trigger = el;
        },
        className: "p-dropdown-trigger",
        role: "button",
        "aria-haspopup": "listbox",
        "aria-expanded": this.state.overlayVisible
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: iconClassName
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this14 = this;

      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-dropdown p-component p-inputwrapper', this.props.className, {
        'p-disabled': this.props.disabled,
        'p-focus': this.state.focused,
        'p-dropdown-clearable': this.props.showClear && !this.props.disabled,
        'p-inputwrapper-filled': this.props.value,
        'p-inputwrapper-focus': this.state.focused || this.state.overlayVisible
      });
      var visibleOptions = this.getVisibleOptions();
      var selectedOption = this.getSelectedOption();
      var appendTo = this.props.appendTo || primereact_api__WEBPACK_IMPORTED_MODULE_6__["default"].appendTo;
      var hiddenSelect = this.renderHiddenSelect(selectedOption);
      var keyboardHelper = this.renderKeyboardHelper();
      var labelElement = this.renderLabel(selectedOption);
      var dropdownIcon = this.renderDropdownIcon();
      var clearIcon = this.renderClearIcon();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: this.props.id,
        ref: function ref(el) {
          return _this14.container = el;
        },
        className: className,
        style: this.props.style,
        onClick: this.onClick,
        onMouseDown: this.props.onMouseDown,
        onContextMenu: this.props.onContextMenu
      }, keyboardHelper, hiddenSelect, labelElement, clearIcon, dropdownIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DropdownPanel, _extends({
        ref: this.overlayRef,
        visibleOptions: visibleOptions
      }, this.props, {
        appendTo: appendTo,
        onClick: this.onPanelClick,
        onOptionClick: this.onOptionClick,
        filterValue: this.state.filter,
        hasFilter: this.hasFilter,
        onFilterClearIconClick: this.onFilterClearIconClick,
        onFilterInputKeyDown: this.onFilterInputKeyDown,
        onFilterInputChange: this.onFilterInputChange,
        getOptionLabel: this.getOptionLabel,
        getOptionRenderKey: this.getOptionRenderKey,
        isOptionDisabled: this.isOptionDisabled,
        getOptionGroupChildren: this.getOptionGroupChildren,
        getOptionGroupLabel: this.getOptionGroupLabel,
        getOptionGroupRenderKey: this.getOptionGroupRenderKey,
        isSelected: this.isSelected,
        getSelectedOptionIndex: this.getSelectedOptionIndex,
        "in": this.state.overlayVisible,
        onEnter: this.onOverlayEnter,
        onEntered: this.onOverlayEntered,
        onExit: this.onOverlayExit,
        onExited: this.onOverlayExited
      })));
    }
  }]);

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Dropdown, "defaultProps", {
  id: null,
  inputRef: null,
  name: null,
  value: null,
  options: null,
  optionLabel: null,
  optionValue: null,
  optionDisabled: null,
  optionGroupLabel: null,
  optionGroupChildren: null,
  optionGroupTemplate: null,
  valueTemplate: null,
  itemTemplate: null,
  style: null,
  className: null,
  virtualScrollerOptions: null,
  scrollHeight: '200px',
  filter: false,
  filterBy: null,
  filterMatchMode: 'contains',
  filterPlaceholder: null,
  filterLocale: undefined,
  emptyMessage: null,
  emptyFilterMessage: null,
  editable: false,
  placeholder: null,
  required: false,
  disabled: false,
  appendTo: null,
  tabIndex: null,
  autoFocus: false,
  filterInputAutoFocus: true,
  resetFilterOnHide: false,
  showFilterClear: false,
  panelClassName: null,
  panelStyle: null,
  dataKey: null,
  inputId: null,
  showClear: false,
  maxLength: null,
  tooltip: null,
  tooltipOptions: null,
  ariaLabel: null,
  ariaLabelledBy: null,
  transitionOptions: null,
  dropdownIcon: 'pi pi-chevron-down',
  showOnFocus: false,
  onChange: null,
  onFocus: null,
  onBlur: null,
  onMouseDown: null,
  onContextMenu: null,
  onShow: null,
  onHide: null,
  onFilter: null
});




/***/ }),

/***/ "./node_modules/primereact/inputnumber/inputnumber.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/primereact/inputnumber/inputnumber.esm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputNumber": () => (/* binding */ InputNumber)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext/inputtext.esm.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/tooltip */ "./node_modules/primereact/tooltip/tooltip.esm.js");
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");






function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var InputNumber = /*#__PURE__*/function (_Component) {
  _inherits(InputNumber, _Component);

  var _super = _createSuper(InputNumber);

  function InputNumber(props) {
    var _this;

    _classCallCheck(this, InputNumber);

    _this = _super.call(this, props);
    _this.state = {
      focused: false
    };

    _this.constructParser();

    _this.onInput = _this.onInput.bind(_assertThisInitialized(_this));
    _this.onInputKeyDown = _this.onInputKeyDown.bind(_assertThisInitialized(_this));
    _this.onInputKeyPress = _this.onInputKeyPress.bind(_assertThisInitialized(_this));
    _this.onInputClick = _this.onInputClick.bind(_assertThisInitialized(_this));
    _this.onInputBlur = _this.onInputBlur.bind(_assertThisInitialized(_this));
    _this.onInputFocus = _this.onInputFocus.bind(_assertThisInitialized(_this));
    _this.onPaste = _this.onPaste.bind(_assertThisInitialized(_this));
    _this.onUpButtonMouseLeave = _this.onUpButtonMouseLeave.bind(_assertThisInitialized(_this));
    _this.onUpButtonMouseDown = _this.onUpButtonMouseDown.bind(_assertThisInitialized(_this));
    _this.onUpButtonMouseUp = _this.onUpButtonMouseUp.bind(_assertThisInitialized(_this));
    _this.onUpButtonKeyDown = _this.onUpButtonKeyDown.bind(_assertThisInitialized(_this));
    _this.onUpButtonKeyUp = _this.onUpButtonKeyUp.bind(_assertThisInitialized(_this));
    _this.onDownButtonMouseLeave = _this.onDownButtonMouseLeave.bind(_assertThisInitialized(_this));
    _this.onDownButtonMouseDown = _this.onDownButtonMouseDown.bind(_assertThisInitialized(_this));
    _this.onDownButtonMouseUp = _this.onDownButtonMouseUp.bind(_assertThisInitialized(_this));
    _this.onDownButtonKeyDown = _this.onDownButtonKeyDown.bind(_assertThisInitialized(_this));
    _this.onDownButtonKeyUp = _this.onDownButtonKeyUp.bind(_assertThisInitialized(_this));
    _this.inputRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(_this.props.inputRef);
    return _this;
  }

  _createClass(InputNumber, [{
    key: "getOptions",
    value: function getOptions() {
      return {
        localeMatcher: this.props.localeMatcher,
        style: this.props.mode,
        currency: this.props.currency,
        currencyDisplay: this.props.currencyDisplay,
        useGrouping: this.props.useGrouping,
        minimumFractionDigits: this.props.minFractionDigits,
        maximumFractionDigits: this.props.maxFractionDigits
      };
    }
  }, {
    key: "constructParser",
    value: function constructParser() {
      this.numberFormat = new Intl.NumberFormat(this.props.locale, this.getOptions());

      var numerals = _toConsumableArray(new Intl.NumberFormat(this.props.locale, {
        useGrouping: false
      }).format(9876543210)).reverse();

      var index = new Map(numerals.map(function (d, i) {
        return [d, i];
      }));
      this._numeral = new RegExp("[".concat(numerals.join(''), "]"), 'g');
      this._group = this.getGroupingExpression();
      this._minusSign = this.getMinusSignExpression();
      this._currency = this.getCurrencyExpression();
      this._decimal = this.getDecimalExpression();
      this._suffix = this.getSuffixExpression();
      this._prefix = this.getPrefixExpression();

      this._index = function (d) {
        return index.get(d);
      };
    }
  }, {
    key: "escapeRegExp",
    value: function escapeRegExp(text) {
      return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
  }, {
    key: "getDecimalExpression",
    value: function getDecimalExpression() {
      var formatter = new Intl.NumberFormat(this.props.locale, _objectSpread(_objectSpread({}, this.getOptions()), {}, {
        useGrouping: false
      }));
      return new RegExp("[".concat(formatter.format(1.1).replace(this._currency, '').trim().replace(this._numeral, ''), "]"), 'g');
    }
  }, {
    key: "getGroupingExpression",
    value: function getGroupingExpression() {
      var formatter = new Intl.NumberFormat(this.props.locale, {
        useGrouping: true
      });
      this.groupChar = formatter.format(1000000).trim().replace(this._numeral, '').charAt(0);
      return new RegExp("[".concat(this.groupChar, "]"), 'g');
    }
  }, {
    key: "getMinusSignExpression",
    value: function getMinusSignExpression() {
      var formatter = new Intl.NumberFormat(this.props.locale, {
        useGrouping: false
      });
      return new RegExp("[".concat(formatter.format(-1).trim().replace(this._numeral, ''), "]"), 'g');
    }
  }, {
    key: "getCurrencyExpression",
    value: function getCurrencyExpression() {
      if (this.props.currency) {
        var formatter = new Intl.NumberFormat(this.props.locale, {
          style: 'currency',
          currency: this.props.currency,
          currencyDisplay: this.props.currencyDisplay,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        return new RegExp("[".concat(formatter.format(1).replace(/\s/g, '').replace(this._numeral, '').replace(this._group, ''), "]"), 'g');
      }

      return new RegExp("[]", 'g');
    }
  }, {
    key: "getPrefixExpression",
    value: function getPrefixExpression() {
      if (this.props.prefix) {
        this.prefixChar = this.props.prefix;
      } else {
        var formatter = new Intl.NumberFormat(this.props.locale, {
          style: this.props.mode,
          currency: this.props.currency,
          currencyDisplay: this.props.currencyDisplay
        });
        this.prefixChar = formatter.format(1).split('1')[0];
      }

      return new RegExp("".concat(this.escapeRegExp(this.prefixChar || '')), 'g');
    }
  }, {
    key: "getSuffixExpression",
    value: function getSuffixExpression() {
      if (this.props.suffix) {
        this.suffixChar = this.props.suffix;
      } else {
        var formatter = new Intl.NumberFormat(this.props.locale, {
          style: this.props.mode,
          currency: this.props.currency,
          currencyDisplay: this.props.currencyDisplay,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        this.suffixChar = formatter.format(1).split('1')[1];
      }

      return new RegExp("".concat(this.escapeRegExp(this.suffixChar || '')), 'g');
    }
  }, {
    key: "formatValue",
    value: function formatValue(value) {
      if (value != null) {
        if (value === '-') {
          // Minus sign
          return value;
        }

        if (this.props.format) {
          var formatter = new Intl.NumberFormat(this.props.locale, this.getOptions());
          var formattedValue = formatter.format(value);

          if (this.props.prefix) {
            formattedValue = this.props.prefix + formattedValue;
          }

          if (this.props.suffix) {
            formattedValue = formattedValue + this.props.suffix;
          }

          return formattedValue;
        }

        return value.toString();
      }

      return '';
    }
  }, {
    key: "parseValue",
    value: function parseValue(text) {
      var filteredText = text.replace(this._suffix, '').replace(this._prefix, '').trim().replace(/\s/g, '').replace(this._currency, '').replace(this._group, '').replace(this._minusSign, '-').replace(this._decimal, '.').replace(this._numeral, this._index);

      if (filteredText) {
        if (filteredText === '-') // Minus sign
          return filteredText;
        var parsedValue = +filteredText;
        return isNaN(parsedValue) ? null : parsedValue;
      }

      return null;
    }
  }, {
    key: "repeat",
    value: function repeat(event, interval, dir) {
      var _this2 = this;

      var i = interval || 500;
      this.clearTimer();
      this.timer = setTimeout(function () {
        _this2.repeat(event, 40, dir);
      }, i);
      this.spin(event, dir);
    }
  }, {
    key: "spin",
    value: function spin(event, dir) {
      if (this.inputRef && this.inputRef.current) {
        var step = this.props.step * dir;
        var currentValue = this.parseValue(this.inputRef.current.value) || 0;
        var newValue = this.validateValue(currentValue + step);
        this.updateInput(newValue, null, 'spin');
        this.updateModel(event, newValue);
        this.handleOnChange(event, currentValue, newValue);
      }
    }
  }, {
    key: "onUpButtonMouseDown",
    value: function onUpButtonMouseDown(event) {
      if (!this.props.disabled && !this.props.readOnly) {
        this.inputRef.current.focus();
        this.repeat(event, null, 1);
        event.preventDefault();
      }
    }
  }, {
    key: "onUpButtonMouseUp",
    value: function onUpButtonMouseUp() {
      if (!this.props.disabled && !this.props.readOnly) {
        this.clearTimer();
      }
    }
  }, {
    key: "onUpButtonMouseLeave",
    value: function onUpButtonMouseLeave() {
      if (!this.props.disabled && !this.props.readOnly) {
        this.clearTimer();
      }
    }
  }, {
    key: "onUpButtonKeyUp",
    value: function onUpButtonKeyUp() {
      if (!this.props.disabled && !this.props.readOnly) {
        this.clearTimer();
      }
    }
  }, {
    key: "onUpButtonKeyDown",
    value: function onUpButtonKeyDown(event) {
      if (!this.props.disabled && !this.props.readOnly && (event.keyCode === 32 || event.keyCode === 13)) {
        this.repeat(event, null, 1);
      }
    }
  }, {
    key: "onDownButtonMouseDown",
    value: function onDownButtonMouseDown(event) {
      if (!this.props.disabled && !this.props.readOnly) {
        this.inputRef.current.focus();
        this.repeat(event, null, -1);
        event.preventDefault();
      }
    }
  }, {
    key: "onDownButtonMouseUp",
    value: function onDownButtonMouseUp() {
      if (!this.props.disabled && !this.props.readOnly) {
        this.clearTimer();
      }
    }
  }, {
    key: "onDownButtonMouseLeave",
    value: function onDownButtonMouseLeave() {
      if (!this.props.disabled && !this.props.readOnly) {
        this.clearTimer();
      }
    }
  }, {
    key: "onDownButtonKeyUp",
    value: function onDownButtonKeyUp() {
      if (!this.props.disabled && !this.props.readOnly) {
        this.clearTimer();
      }
    }
  }, {
    key: "onDownButtonKeyDown",
    value: function onDownButtonKeyDown(event) {
      if (!this.props.disabled && !this.props.readOnly && (event.keyCode === 32 || event.keyCode === 13)) {
        this.repeat(event, null, -1);
      }
    }
  }, {
    key: "onInput",
    value: function onInput(event) {
      if (this.props.disabled || this.props.readOnly) {
        return;
      }

      if (this.isSpecialChar) {
        event.target.value = this.lastValue;
      }

      this.isSpecialChar = false;
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(event) {
      if (this.props.disabled || this.props.readOnly) {
        return;
      }

      this.lastValue = event.target.value;

      if (event.shiftKey || event.altKey) {
        this.isSpecialChar = true;
        return;
      }

      var selectionStart = event.target.selectionStart;
      var selectionEnd = event.target.selectionEnd;
      var inputValue = event.target.value;
      var newValueStr = null;

      if (event.altKey) {
        event.preventDefault();
      }

      switch (event.which) {
        //up
        case 38:
          this.spin(event, 1);
          event.preventDefault();
          break;
        //down

        case 40:
          this.spin(event, -1);
          event.preventDefault();
          break;
        //left

        case 37:
          if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {
            event.preventDefault();
          }

          break;
        //right

        case 39:
          if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {
            event.preventDefault();
          }

          break;
        //enter

        case 13:
          newValueStr = this.validateValue(this.parseValue(inputValue));
          this.inputRef.current.value = this.formatValue(newValueStr);
          this.inputRef.current.setAttribute('aria-valuenow', newValueStr);
          this.updateModel(event, newValueStr);
          break;
        //backspace

        case 8:
          event.preventDefault();

          if (selectionStart === selectionEnd) {
            var deleteChar = inputValue.charAt(selectionStart - 1);

            var _this$getDecimalCharI = this.getDecimalCharIndexes(inputValue),
                decimalCharIndex = _this$getDecimalCharI.decimalCharIndex,
                decimalCharIndexWithoutPrefix = _this$getDecimalCharI.decimalCharIndexWithoutPrefix;

            if (this.isNumeralChar(deleteChar)) {
              var decimalLength = this.getDecimalLength(inputValue);

              if (this._group.test(deleteChar)) {
                this._group.lastIndex = 0;
                newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
              } else if (this._decimal.test(deleteChar)) {
                this._decimal.lastIndex = 0;

                if (decimalLength) {
                  this.inputRef.current.setSelectionRange(selectionStart - 1, selectionStart - 1);
                } else {
                  newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                }
              } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                var insertedText = this.isDecimalMode() && (this.props.minFractionDigits || 0) < decimalLength ? '' : '0';
                newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
              } else if (decimalCharIndexWithoutPrefix === 1) {
                newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
              } else {
                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
              }
            }

            this.updateValue(event, newValueStr, null, 'delete-single');
          } else {
            newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, null, 'delete-range');
          }

          break;
        // del

        case 46:
          event.preventDefault();

          if (selectionStart === selectionEnd) {
            var _deleteChar = inputValue.charAt(selectionStart);

            var _this$getDecimalCharI2 = this.getDecimalCharIndexes(inputValue),
                _decimalCharIndex = _this$getDecimalCharI2.decimalCharIndex,
                _decimalCharIndexWithoutPrefix = _this$getDecimalCharI2.decimalCharIndexWithoutPrefix;

            if (this.isNumeralChar(_deleteChar)) {
              var _decimalLength = this.getDecimalLength(inputValue);

              if (this._group.test(_deleteChar)) {
                this._group.lastIndex = 0;
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
              } else if (this._decimal.test(_deleteChar)) {
                this._decimal.lastIndex = 0;

                if (_decimalLength) {
                  this.$refs.input.$el.setSelectionRange(selectionStart + 1, selectionStart + 1);
                } else {
                  newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                }
              } else if (_decimalCharIndex > 0 && selectionStart > _decimalCharIndex) {
                var _insertedText = this.isDecimalMode() && (this.props.minFractionDigits || 0) < _decimalLength ? '' : '0';

                newValueStr = inputValue.slice(0, selectionStart) + _insertedText + inputValue.slice(selectionStart + 1);
              } else if (_decimalCharIndexWithoutPrefix === 1) {
                newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
                newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : '';
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            }

            this.updateValue(event, newValueStr, null, 'delete-back-single');
          } else {
            newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, null, 'delete-range');
          }

          break;
      }

      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
      }
    }
  }, {
    key: "onInputKeyPress",
    value: function onInputKeyPress(event) {
      if (this.props.disabled || this.props.readOnly) {
        return;
      }

      var code = event.which || event.keyCode;

      if (code !== 13) {
        // to submit a form
        event.preventDefault();
      }

      var _char = String.fromCharCode(code);

      var isDecimalSign = this.isDecimalSign(_char);
      var isMinusSign = this.isMinusSign(_char);

      if (48 <= code && code <= 57 || isMinusSign || isDecimalSign) {
        this.insert(event, _char, {
          isDecimalSign: isDecimalSign,
          isMinusSign: isMinusSign
        });
      }
    }
  }, {
    key: "onPaste",
    value: function onPaste(event) {
      event.preventDefault();

      if (this.props.disabled || this.props.readOnly) {
        return;
      }

      var data = (event.clipboardData || window['clipboardData']).getData('Text');

      if (data) {
        var filteredData = this.parseValue(data);

        if (filteredData != null) {
          this.insert(event, filteredData.toString());
        }
      }
    }
  }, {
    key: "allowMinusSign",
    value: function allowMinusSign() {
      return this.props.min === null || this.props.min < 0;
    }
  }, {
    key: "isMinusSign",
    value: function isMinusSign(_char2) {
      if (this._minusSign.test(_char2) || _char2 === '-') {
        this._minusSign.lastIndex = 0;
        return true;
      }

      return false;
    }
  }, {
    key: "isDecimalSign",
    value: function isDecimalSign(_char3) {
      if (this._decimal.test(_char3)) {
        this._decimal.lastIndex = 0;
        return true;
      }

      return false;
    }
  }, {
    key: "isDecimalMode",
    value: function isDecimalMode() {
      return this.props.mode === 'decimal';
    }
  }, {
    key: "getDecimalCharIndexes",
    value: function getDecimalCharIndexes(val) {
      var decimalCharIndex = val.search(this._decimal);
      this._decimal.lastIndex = 0;
      var filteredVal = val.replace(this._prefix, '').trim().replace(/\s/g, '').replace(this._currency, '');
      var decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
      this._decimal.lastIndex = 0;
      return {
        decimalCharIndex: decimalCharIndex,
        decimalCharIndexWithoutPrefix: decimalCharIndexWithoutPrefix
      };
    }
  }, {
    key: "getCharIndexes",
    value: function getCharIndexes(val) {
      var decimalCharIndex = val.search(this._decimal);
      this._decimal.lastIndex = 0;
      var minusCharIndex = val.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      var suffixCharIndex = val.search(this._suffix);
      this._suffix.lastIndex = 0;
      var currencyCharIndex = val.search(this._currency);
      this._currency.lastIndex = 0;
      return {
        decimalCharIndex: decimalCharIndex,
        minusCharIndex: minusCharIndex,
        suffixCharIndex: suffixCharIndex,
        currencyCharIndex: currencyCharIndex
      };
    }
  }, {
    key: "insert",
    value: function insert(event, text) {
      var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        isDecimalSign: false,
        isMinusSign: false
      };
      var minusCharIndexOnText = text.search(this._minusSign);
      this._minusSign.lastIndex = 0;

      if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
        return;
      }

      var selectionStart = this.inputRef.current.selectionStart;
      var selectionEnd = this.inputRef.current.selectionEnd;
      var inputValue = this.inputRef.current.value.trim();

      var _this$getCharIndexes = this.getCharIndexes(inputValue),
          decimalCharIndex = _this$getCharIndexes.decimalCharIndex,
          minusCharIndex = _this$getCharIndexes.minusCharIndex,
          suffixCharIndex = _this$getCharIndexes.suffixCharIndex,
          currencyCharIndex = _this$getCharIndexes.currencyCharIndex;

      var newValueStr;

      if (sign.isMinusSign) {
        if (selectionStart === 0) {
          newValueStr = inputValue;

          if (minusCharIndex === -1 || selectionEnd !== 0) {
            newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
          }

          this.updateValue(event, newValueStr, text, 'insert');
        }
      } else if (sign.isDecimalSign) {
        if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
          this.updateValue(event, inputValue, text, 'insert');
        } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, 'insert');
        } else if (decimalCharIndex === -1 && this.props.maxFractionDigits) {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, 'insert');
        }
      } else {
        var maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
        var operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert';

        if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
          if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
            var charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
            newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
            this.updateValue(event, newValueStr, text, operation);
          }
        } else {
          newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text, operation);
        }
      }
    }
  }, {
    key: "insertText",
    value: function insertText(value, text, start, end) {
      var textSplit = text === '.' ? text : text.split('.');

      if (textSplit.length === 2) {
        var decimalCharIndex = value.slice(start, end).search(this._decimal);
        this._decimal.lastIndex = 0;
        return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : value || this.formatValue(text);
      } else if (end - start === value.length) {
        return this.formatValue(text);
      } else if (start === 0) {
        return text + value.slice(end);
      } else if (end === value.length) {
        return value.slice(0, start) + text;
      } else {
        return value.slice(0, start) + text + value.slice(end);
      }
    }
  }, {
    key: "deleteRange",
    value: function deleteRange(value, start, end) {
      var newValueStr;
      if (end - start === value.length) newValueStr = '';else if (start === 0) newValueStr = value.slice(end);else if (end === value.length) newValueStr = value.slice(0, start);else newValueStr = value.slice(0, start) + value.slice(end);
      return newValueStr;
    }
  }, {
    key: "initCursor",
    value: function initCursor() {
      var selectionStart = this.inputRef.current.selectionStart;
      var inputValue = this.inputRef.current.value;
      var valueLength = inputValue.length;
      var index = null; // remove prefix

      var prefixLength = (this.prefixChar || '').length;
      inputValue = inputValue.replace(this._prefix, '');
      selectionStart = selectionStart - prefixLength;

      var _char4 = inputValue.charAt(selectionStart);

      if (this.isNumeralChar(_char4)) {
        return selectionStart + prefixLength;
      } //left


      var i = selectionStart - 1;

      while (i >= 0) {
        _char4 = inputValue.charAt(i);

        if (this.isNumeralChar(_char4)) {
          index = i + prefixLength;
          break;
        } else {
          i--;
        }
      }

      if (index !== null) {
        this.inputRef.current.setSelectionRange(index + 1, index + 1);
      } else {
        i = selectionStart;

        while (i < valueLength) {
          _char4 = inputValue.charAt(i);

          if (this.isNumeralChar(_char4)) {
            index = i + prefixLength;
            break;
          } else {
            i++;
          }
        }

        if (index !== null) {
          this.inputRef.current.setSelectionRange(index, index);
        }
      }

      return index || 0;
    }
  }, {
    key: "onInputClick",
    value: function onInputClick() {
      this.initCursor();
    }
  }, {
    key: "isNumeralChar",
    value: function isNumeralChar(_char5) {
      if (_char5.length === 1 && (this._numeral.test(_char5) || this._decimal.test(_char5) || this._group.test(_char5) || this._minusSign.test(_char5))) {
        this.resetRegex();
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "resetRegex",
    value: function resetRegex() {
      this._numeral.lastIndex = 0;
      this._decimal.lastIndex = 0;
      this._group.lastIndex = 0;
      this._minusSign.lastIndex = 0;
    }
  }, {
    key: "updateValue",
    value: function updateValue(event, valueStr, insertedValueStr, operation) {
      var currentValue = this.inputRef.current.value;
      var newValue = null;

      if (valueStr != null) {
        newValue = this.parseValue(valueStr);
        newValue = this.evaluateEmpty(newValue);
        this.updateInput(newValue, insertedValueStr, operation, valueStr);
        this.handleOnChange(event, currentValue, newValue);
      }
    }
  }, {
    key: "evaluateEmpty",
    value: function evaluateEmpty(newValue) {
      return !newValue && !this.props.allowEmpty ? this.props.min || 0 : newValue;
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(event, currentValue, newValue) {
      if (this.props.onChange && this.isValueChanged(currentValue, newValue)) {
        this.props.onChange({
          originalEvent: event,
          value: newValue
        });
      }
    }
  }, {
    key: "isValueChanged",
    value: function isValueChanged(currentValue, newValue) {
      if (newValue === null && currentValue !== null) {
        return true;
      }

      if (newValue != null) {
        var parsedCurrentValue = typeof currentValue === 'string' ? this.parseValue(currentValue) : currentValue;
        return newValue !== parsedCurrentValue;
      }

      return false;
    }
  }, {
    key: "validateValue",
    value: function validateValue(value) {
      if (value === '-' || value == null) {
        return null;
      }

      if (this.props.min !== null && value < this.props.min) {
        return this.props.min;
      }

      if (this.props.max !== null && value > this.props.max) {
        return this.props.max;
      }

      return value;
    }
  }, {
    key: "updateInput",
    value: function updateInput(value, insertedValueStr, operation, valueStr) {
      insertedValueStr = insertedValueStr || '';
      var inputEl = this.inputRef.current;
      var inputValue = inputEl.value;
      var newValue = this.formatValue(value);
      var currentLength = inputValue.length;

      if (newValue !== valueStr) {
        newValue = this.concatValues(newValue, valueStr);
      }

      if (currentLength === 0) {
        inputEl.value = newValue;
        inputEl.setSelectionRange(0, 0);
        var index = this.initCursor();
        var selectionEnd = index + insertedValueStr.length;
        inputEl.setSelectionRange(selectionEnd, selectionEnd);
      } else {
        var selectionStart = inputEl.selectionStart;
        var _selectionEnd = inputEl.selectionEnd;
        inputEl.value = newValue;
        var newLength = newValue.length;

        if (operation === 'range-insert') {
          var startValue = this.parseValue((inputValue || '').slice(0, selectionStart));
          var startValueStr = startValue !== null ? startValue.toString() : '';
          var startExpr = startValueStr.split('').join("(".concat(this.groupChar, ")?"));
          var sRegex = new RegExp(startExpr, 'g');
          sRegex.test(newValue);
          var tExpr = insertedValueStr.split('').join("(".concat(this.groupChar, ")?"));
          var tRegex = new RegExp(tExpr, 'g');
          tRegex.test(newValue.slice(sRegex.lastIndex));
          _selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
          inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
        } else if (newLength === currentLength) {
          if (operation === 'insert' || operation === 'delete-back-single') inputEl.setSelectionRange(_selectionEnd + 1, _selectionEnd + 1);else if (operation === 'delete-single') inputEl.setSelectionRange(_selectionEnd - 1, _selectionEnd - 1);else if (operation === 'delete-range' || operation === 'spin') inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
        } else if (operation === 'delete-back-single') {
          var prevChar = inputValue.charAt(_selectionEnd - 1);
          var nextChar = inputValue.charAt(_selectionEnd);
          var diff = currentLength - newLength;

          var isGroupChar = this._group.test(nextChar);

          if (isGroupChar && diff === 1) {
            _selectionEnd += 1;
          } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
            _selectionEnd += -1 * diff + 1;
          }

          this._group.lastIndex = 0;
          inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
        } else if (inputValue === '-' && operation === 'insert') {
          inputEl.setSelectionRange(0, 0);

          var _index = this.initCursor();

          var _selectionEnd2 = _index + insertedValueStr.length + 1;

          inputEl.setSelectionRange(_selectionEnd2, _selectionEnd2);
        } else {
          _selectionEnd = _selectionEnd + (newLength - currentLength);
          inputEl.setSelectionRange(_selectionEnd, _selectionEnd);
        }
      }

      inputEl.setAttribute('aria-valuenow', value);
    }
  }, {
    key: "updateInputValue",
    value: function updateInputValue(newValue) {
      newValue = this.evaluateEmpty(newValue);
      var inputEl = this.inputRef.current;
      var value = inputEl.value;
      var formattedValue = this.formattedValue(newValue);

      if (value !== formattedValue) {
        inputEl.value = formattedValue;
        inputEl.setAttribute('aria-valuenow', newValue);
      }
    }
  }, {
    key: "formattedValue",
    value: function formattedValue(val) {
      var newValue = this.evaluateEmpty(val);
      return this.formatValue(newValue);
    }
  }, {
    key: "concatValues",
    value: function concatValues(val1, val2) {
      if (val1 && val2) {
        var decimalCharIndex = val2.search(this._decimal);
        this._decimal.lastIndex = 0;
        return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
      }

      return val1;
    }
  }, {
    key: "getDecimalLength",
    value: function getDecimalLength(value) {
      if (value) {
        var valueSplit = value.split(this._decimal);

        if (valueSplit.length === 2) {
          return valueSplit[1].replace(this._suffix, '').trim().replace(/\s/g, '').replace(this._currency, '').length;
        }
      }

      return 0;
    }
  }, {
    key: "updateModel",
    value: function updateModel(event, value) {
      if (this.props.onValueChange) {
        this.props.onValueChange({
          originalEvent: event,
          value: value,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: value
          }
        });
      }
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(event) {
      var _this3 = this;

      event.persist();
      this.setState({
        focused: true
      }, function () {
        if (_this3.props.onFocus) {
          _this3.props.onFocus(event);
        }
      });
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur(event) {
      var _this4 = this;

      event.persist();
      this.setState({
        focused: false
      }, function () {
        var currentValue = _this4.inputRef.current.value;

        if (_this4.isValueChanged(currentValue, _this4.props.value)) {
          var newValue = _this4.validateValue(_this4.parseValue(currentValue));

          _this4.updateInputValue(newValue);

          _this4.updateModel(event, newValue);
        }

        if (_this4.props.onBlur) {
          _this4.props.onBlur(event);
        }
      });
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }, {
    key: "isStacked",
    value: function isStacked() {
      return this.props.showButtons && this.props.buttonLayout === 'stacked';
    }
  }, {
    key: "isHorizontal",
    value: function isHorizontal() {
      return this.props.showButtons && this.props.buttonLayout === 'horizontal';
    }
  }, {
    key: "isVertical",
    value: function isVertical() {
      return this.props.showButtons && this.props.buttonLayout === 'vertical';
    }
  }, {
    key: "getInputMode",
    value: function getInputMode() {
      return this.props.inputMode || (this.props.mode === 'decimal' && !this.props.minFractionDigits ? 'numeric' : 'decimal');
    }
  }, {
    key: "getFormatter",
    value: function getFormatter() {
      return this.numberFormat;
    }
  }, {
    key: "updateInputRef",
    value: function updateInputRef() {
      var ref = this.props.inputRef;

      if (ref) {
        if (typeof ref === 'function') {
          ref(this.inputRef.current);
        } else {
          ref.current = this.inputRef.current;
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateInputRef();

      if (this.props.tooltip) {
        this.renderTooltip();
      }

      var newValue = this.validateValue(this.props.value);

      if (this.props.value !== null && this.props.value !== newValue) {
        this.updateModel(null, newValue);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
        if (this.tooltip) this.tooltip.update(_objectSpread({
          content: this.props.tooltip
        }, this.props.tooltipOptions || {}));else this.renderTooltip();
      }

      var isOptionChanged = this.isOptionChanged(prevProps);

      if (isOptionChanged) {
        this.constructParser();
      }

      if (prevProps.value !== this.props.value || isOptionChanged) {
        var newValue = this.validateValue(this.props.value);
        this.updateInputValue(newValue);

        if (this.props.value !== null && this.props.value !== newValue) {
          this.updateModel(null, newValue);
        }
      }
    }
  }, {
    key: "isOptionChanged",
    value: function isOptionChanged(prevProps) {
      var _this5 = this;

      var optionProps = ['locale', 'localeMatcher', 'mode', 'currency', 'currencyDisplay', 'useGrouping', 'minFractionDigits', 'maxFractionDigits', 'suffix', 'prefix'];
      return optionProps.some(function (option) {
        return prevProps[option] !== _this5.props[option];
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = (0,primereact_tooltip__WEBPACK_IMPORTED_MODULE_3__.tip)({
        target: this.element,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "renderInputElement",
    value: function renderInputElement() {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-inputnumber-input', this.props.inputClassName);
      var valueToRender = this.formattedValue(this.props.value);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_inputtext__WEBPACK_IMPORTED_MODULE_1__.InputText, {
        ref: this.inputRef,
        id: this.props.inputId,
        style: this.props.inputStyle,
        role: "spinbutton",
        className: className,
        defaultValue: valueToRender,
        type: this.props.type,
        size: this.props.size,
        tabIndex: this.props.tabIndex,
        inputMode: this.getInputMode(),
        maxLength: this.props.maxLength,
        disabled: this.props.disabled,
        required: this.props.required,
        pattern: this.props.pattern,
        placeholder: this.props.placeholder,
        readOnly: this.props.readOnly,
        name: this.props.name,
        autoFocus: this.props.autoFocus,
        onKeyDown: this.onInputKeyDown,
        onKeyPress: this.onInputKeyPress,
        onInput: this.onInput,
        onClick: this.onInputClick,
        onBlur: this.onInputBlur,
        onFocus: this.onInputFocus,
        onPaste: this.onPaste,
        min: this.props.min,
        max: this.props.max,
        "aria-valuemin": this.props.min,
        "aria-valuemax": this.props.max,
        "aria-valuenow": this.props.value,
        "aria-labelledby": this.props.ariaLabelledBy
      });
    }
  }, {
    key: "renderUpButton",
    value: function renderUpButton() {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-inputnumber-button p-inputnumber-button-up p-button p-button-icon-only p-component', {
        'p-disabled': this.props.disabled
      }, this.props.incrementButtonClassName);
      var icon = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-button-icon', this.props.incrementButtonIcon);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: className,
        onMouseLeave: this.onUpButtonMouseLeave,
        onMouseDown: this.onUpButtonMouseDown,
        onMouseUp: this.onUpButtonMouseUp,
        onKeyDown: this.onUpButtonKeyDown,
        onKeyUp: this.onUpButtonKeyUp,
        disabled: this.props.disabled,
        tabIndex: -1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: icon
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, null));
    }
  }, {
    key: "renderDownButton",
    value: function renderDownButton() {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-inputnumber-button p-inputnumber-button-down p-button p-button-icon-only p-component', {
        'p-disabled': this.props.disabled
      }, this.props.decrementButtonClassName);
      var icon = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-button-icon', this.props.decrementButtonIcon);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: className,
        onMouseLeave: this.onDownButtonMouseLeave,
        onMouseDown: this.onDownButtonMouseDown,
        onMouseUp: this.onDownButtonMouseUp,
        onKeyDown: this.onDownButtonKeyDown,
        onKeyUp: this.onDownButtonKeyUp,
        disabled: this.props.disabled,
        tabIndex: -1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: icon
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, null));
    }
  }, {
    key: "renderButtonGroup",
    value: function renderButtonGroup() {
      var upButton = this.props.showButtons && this.renderUpButton();
      var downButton = this.props.showButtons && this.renderDownButton();

      if (this.isStacked()) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "p-inputnumber-button-group"
        }, upButton, downButton);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, upButton, downButton);
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-inputnumber p-component p-inputwrapper', this.props.className, {
        'p-inputwrapper-filled': this.props.value != null && this.props.value.toString().length > 0,
        'p-inputwrapper-focus': this.state.focused,
        'p-inputnumber-buttons-stacked': this.isStacked(),
        'p-inputnumber-buttons-horizontal': this.isHorizontal(),
        'p-inputnumber-buttons-vertical': this.isVertical()
      });
      var inputElement = this.renderInputElement();
      var buttonGroup = this.renderButtonGroup();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        ref: function ref(el) {
          return _this6.element = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, inputElement, buttonGroup);
    }
  }]);

  return InputNumber;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(InputNumber, "defaultProps", {
  value: null,
  inputRef: null,
  format: true,
  showButtons: false,
  buttonLayout: 'stacked',
  incrementButtonClassName: null,
  decrementButtonClassName: null,
  incrementButtonIcon: 'pi pi-angle-up',
  decrementButtonIcon: 'pi pi-angle-down',
  locale: undefined,
  localeMatcher: undefined,
  mode: 'decimal',
  suffix: null,
  prefix: null,
  currency: undefined,
  currencyDisplay: undefined,
  useGrouping: true,
  minFractionDigits: undefined,
  maxFractionDigits: undefined,
  id: null,
  name: null,
  type: 'text',
  allowEmpty: true,
  step: 1,
  min: null,
  max: null,
  disabled: false,
  required: false,
  tabIndex: null,
  pattern: null,
  inputMode: null,
  placeholder: null,
  readOnly: false,
  size: null,
  style: null,
  className: null,
  inputId: null,
  autoFocus: false,
  inputStyle: null,
  inputClassName: null,
  tooltip: null,
  tooltipOptions: null,
  ariaLabelledBy: null,
  onValueChange: null,
  onChange: null,
  onBlur: null,
  onFocus: null,
  onKeyDown: null
});




/***/ }),

/***/ "./node_modules/primereact/inputtext/inputtext.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/primereact/inputtext/inputtext.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputText": () => (/* binding */ InputText)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_keyfilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/keyfilter */ "./node_modules/primereact/keyfilter/keyfilter.esm.js");
/* harmony import */ var primereact_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/tooltip */ "./node_modules/primereact/tooltip/tooltip.esm.js");





function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var InputTextComponent = /*#__PURE__*/function (_Component) {
  _inherits(InputTextComponent, _Component);

  var _super = _createSuper(InputTextComponent);

  function InputTextComponent(props) {
    var _this;

    _classCallCheck(this, InputTextComponent);

    _this = _super.call(this, props);
    _this.onInput = _this.onInput.bind(_assertThisInitialized(_this));
    _this.onKeyPress = _this.onKeyPress.bind(_assertThisInitialized(_this));
    _this.elementRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(_this.props.forwardRef);
    return _this;
  }

  _createClass(InputTextComponent, [{
    key: "isFilled",
    value: function isFilled() {
      return this.props.value != null && this.props.value.toString().length > 0 || this.props.defaultValue != null && this.props.defaultValue.toString().length > 0 || this.elementRef && this.elementRef.current && this.elementRef.current.value != null && this.elementRef.current.value.toString().length > 0;
    }
  }, {
    key: "onKeyPress",
    value: function onKeyPress(event) {
      if (this.props.onKeyPress) {
        this.props.onKeyPress(event);
      }

      if (this.props.keyfilter) {
        primereact_keyfilter__WEBPACK_IMPORTED_MODULE_2__.KeyFilter.onKeyPress(event, this.props.keyfilter, this.props.validateOnly);
      }
    }
  }, {
    key: "onInput",
    value: function onInput(event) {
      var validatePattern = true;

      if (this.props.keyfilter && this.props.validateOnly) {
        validatePattern = primereact_keyfilter__WEBPACK_IMPORTED_MODULE_2__.KeyFilter.validate(event, this.props.keyfilter);
      }

      if (this.props.onInput) {
        this.props.onInput(event, validatePattern);
      }

      if (!this.props.onChange) {
        if (event.target.value.length > 0) primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(event.target, 'p-filled');else primereact_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(event.target, 'p-filled');
      }
    }
  }, {
    key: "updateForwardRef",
    value: function updateForwardRef() {
      var ref = this.props.forwardRef;

      if (ref) {
        if (typeof ref === 'function') {
          ref(this.elementRef.current);
        } else {
          ref.current = this.elementRef.current;
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateForwardRef();

      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.tooltip !== this.props.tooltip || prevProps.tooltipOptions !== this.props.tooltipOptions) {
        if (this.tooltip) this.tooltip.update(_objectSpread({
          content: this.props.tooltip
        }, this.props.tooltipOptions || {}));else this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = (0,primereact_tooltip__WEBPACK_IMPORTED_MODULE_3__.tip)({
        target: this.elementRef.current,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-inputtext p-component', {
        'p-disabled': this.props.disabled,
        'p-filled': this.isFilled()
      }, this.props.className);
      var inputProps = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findDiffKeys(this.props, InputTextComponent.defaultProps);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", _extends({
        ref: this.elementRef
      }, inputProps, {
        className: className,
        onInput: this.onInput,
        onKeyPress: this.onKeyPress
      }));
    }
  }]);

  return InputTextComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(InputTextComponent, "defaultProps", {
  keyfilter: null,
  validateOnly: false,
  tooltip: null,
  tooltipOptions: null,
  onInput: null,
  onKeyPress: null,
  forwardRef: null
});

var InputText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(InputTextComponent, _extends({
    forwardRef: ref
  }, props));
});




/***/ }),

/***/ "./node_modules/primereact/keyfilter/keyfilter.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/primereact/keyfilter/keyfilter.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyFilter": () => (/* binding */ KeyFilter)
/* harmony export */ });
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var KeyFilter = /*#__PURE__*/function () {
  function KeyFilter() {
    _classCallCheck(this, KeyFilter);
  }

  _createClass(KeyFilter, null, [{
    key: "isNavKeyPress",
    value:
    /* eslint-disable */

    /* eslint-enable */
    function isNavKeyPress(e) {
      var k = e.keyCode;
      k = primereact_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getBrowser().safari ? KeyFilter.SAFARI_KEYS[k] || k : k;
      return k >= 33 && k <= 40 || k === KeyFilter.KEYS.RETURN || k === KeyFilter.KEYS.TAB || k === KeyFilter.KEYS.ESC;
    }
  }, {
    key: "isSpecialKey",
    value: function isSpecialKey(e) {
      var k = e.keyCode;
      return k === 9 || k === 13 || k === 27 || k === 16 || k === 17 || k >= 18 && k <= 20 || primereact_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getBrowser().opera && !e.shiftKey && (k === 8 || k >= 33 && k <= 35 || k >= 36 && k <= 39 || k >= 44 && k <= 45);
    }
  }, {
    key: "getKey",
    value: function getKey(e) {
      var k = e.keyCode || e.charCode;
      return primereact_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getBrowser().safari ? KeyFilter.SAFARI_KEYS[k] || k : k;
    }
  }, {
    key: "getCharCode",
    value: function getCharCode(e) {
      return e.charCode || e.keyCode || e.which;
    }
  }, {
    key: "onKeyPress",
    value: function onKeyPress(e, keyfilter, validateOnly) {
      if (validateOnly) {
        return;
      }

      var regex = KeyFilter.DEFAULT_MASKS[keyfilter] ? KeyFilter.DEFAULT_MASKS[keyfilter] : keyfilter;
      var browser = primereact_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.getBrowser();

      if (e.ctrlKey || e.altKey) {
        return;
      }

      var k = this.getKey(e);

      if (browser.mozilla && (this.isNavKeyPress(e) || k === KeyFilter.KEYS.BACKSPACE || k === KeyFilter.KEYS.DELETE && e.charCode === 0)) {
        return;
      }

      var c = this.getCharCode(e);
      var cc = String.fromCharCode(c);

      if (browser.mozilla && (this.isSpecialKey(e) || !cc)) {
        return;
      }

      if (!regex.test(cc)) {
        e.preventDefault();
      }
    }
  }, {
    key: "validate",
    value: function validate(e, keyfilter) {
      var value = e.target.value,
          validatePattern = true;

      if (value && !keyfilter.test(value)) {
        validatePattern = false;
      }

      return validatePattern;
    }
  }]);

  return KeyFilter;
}();

_defineProperty(KeyFilter, "DEFAULT_MASKS", {
  pint: /[\d]/,
  "int": /[\d\-]/,
  pnum: /[\d\.]/,
  money: /[\d\.\s,]/,
  num: /[\d\-\.]/,
  hex: /[0-9a-f]/i,
  email: /[a-z0-9_\.\-@]/i,
  alpha: /[a-z_]/i,
  alphanum: /[a-z0-9_]/i
});

_defineProperty(KeyFilter, "KEYS", {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  BACKSPACE: 8,
  DELETE: 46
});

_defineProperty(KeyFilter, "SAFARI_KEYS", {
  63234: 37,
  // left
  63235: 39,
  // right
  63232: 38,
  // up
  63233: 40,
  // down
  63276: 33,
  // page up
  63277: 34,
  // page down
  63272: 46,
  // delete
  63273: 36,
  // home
  63275: 35 // end

});




/***/ }),

/***/ "./node_modules/primereact/overlayservice/overlayservice.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/primereact/overlayservice/overlayservice.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlayService": () => (/* binding */ OverlayService)
/* harmony export */ });
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");


var OverlayService = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_0__.EventBus)();




/***/ }),

/***/ "./node_modules/primereact/paginator/paginator.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/primereact/paginator/paginator.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Paginator": () => (/* binding */ Paginator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/ripple */ "./node_modules/primereact/ripple/ripple.esm.js");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown/dropdown.esm.js");
/* harmony import */ var primereact_inputnumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/inputnumber */ "./node_modules/primereact/inputnumber/inputnumber.esm.js");






function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var FirstPageLink = /*#__PURE__*/function (_Component) {
  _inherits(FirstPageLink, _Component);

  var _super = _createSuper$8(FirstPageLink);

  function FirstPageLink() {
    _classCallCheck(this, FirstPageLink);

    return _super.apply(this, arguments);
  }

  _createClass(FirstPageLink, [{
    key: "render",
    value: function render() {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-paginator-first p-paginator-element p-link', {
        'p-disabled': this.props.disabled
      });
      var iconClassName = 'p-paginator-icon pi pi-angle-double-left';
      var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: className,
        onClick: this.props.onClick,
        disabled: this.props.disabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_2__.Ripple, null));

      if (this.props.template) {
        var defaultOptions = {
          onClick: this.props.onClick,
          className: className,
          iconClassName: iconClassName,
          disabled: this.props.disabled,
          element: element,
          props: this.props
        };
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.template, defaultOptions);
      }

      return element;
    }
  }]);

  return FirstPageLink;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(FirstPageLink, "defaultProps", {
  disabled: false,
  onClick: null,
  template: null
});

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var NextPageLink = /*#__PURE__*/function (_Component) {
  _inherits(NextPageLink, _Component);

  var _super = _createSuper$7(NextPageLink);

  function NextPageLink() {
    _classCallCheck(this, NextPageLink);

    return _super.apply(this, arguments);
  }

  _createClass(NextPageLink, [{
    key: "render",
    value: function render() {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-paginator-next p-paginator-element p-link', {
        'p-disabled': this.props.disabled
      });
      var iconClassName = 'p-paginator-icon pi pi-angle-right';
      var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: className,
        onClick: this.props.onClick,
        disabled: this.props.disabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_2__.Ripple, null));

      if (this.props.template) {
        var defaultOptions = {
          onClick: this.props.onClick,
          className: className,
          iconClassName: iconClassName,
          disabled: this.props.disabled,
          element: element,
          props: this.props
        };
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.template, defaultOptions);
      }

      return element;
    }
  }]);

  return NextPageLink;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(NextPageLink, "defaultProps", {
  disabled: false,
  onClick: null,
  template: null
});

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PrevPageLink = /*#__PURE__*/function (_Component) {
  _inherits(PrevPageLink, _Component);

  var _super = _createSuper$6(PrevPageLink);

  function PrevPageLink() {
    _classCallCheck(this, PrevPageLink);

    return _super.apply(this, arguments);
  }

  _createClass(PrevPageLink, [{
    key: "render",
    value: function render() {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-paginator-prev p-paginator-element p-link', {
        'p-disabled': this.props.disabled
      });
      var iconClassName = 'p-paginator-icon pi pi-angle-left';
      var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: className,
        onClick: this.props.onClick,
        disabled: this.props.disabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_2__.Ripple, null));

      if (this.props.template) {
        var defaultOptions = {
          onClick: this.props.onClick,
          className: className,
          iconClassName: iconClassName,
          disabled: this.props.disabled,
          element: element,
          props: this.props
        };
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.template, defaultOptions);
      }

      return element;
    }
  }]);

  return PrevPageLink;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(PrevPageLink, "defaultProps", {
  disabled: false,
  onClick: null,
  template: null
});

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var LastPageLink = /*#__PURE__*/function (_Component) {
  _inherits(LastPageLink, _Component);

  var _super = _createSuper$5(LastPageLink);

  function LastPageLink() {
    _classCallCheck(this, LastPageLink);

    return _super.apply(this, arguments);
  }

  _createClass(LastPageLink, [{
    key: "render",
    value: function render() {
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-paginator-last p-paginator-element p-link', {
        'p-disabled': this.props.disabled
      });
      var iconClassName = 'p-paginator-icon pi pi-angle-double-right';
      var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: className,
        onClick: this.props.onClick,
        disabled: this.props.disabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: iconClassName
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_2__.Ripple, null));

      if (this.props.template) {
        var defaultOptions = {
          onClick: this.props.onClick,
          className: className,
          iconClassName: iconClassName,
          disabled: this.props.disabled,
          element: element,
          props: this.props
        };
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.template, defaultOptions);
      }

      return element;
    }
  }]);

  return LastPageLink;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(LastPageLink, "defaultProps", {
  disabled: false,
  onClick: null,
  template: null
});

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PageLinks = /*#__PURE__*/function (_Component) {
  _inherits(PageLinks, _Component);

  var _super = _createSuper$4(PageLinks);

  function PageLinks() {
    _classCallCheck(this, PageLinks);

    return _super.apply(this, arguments);
  }

  _createClass(PageLinks, [{
    key: "onPageLinkClick",
    value: function onPageLinkClick(event, pageLink) {
      if (this.props.onClick) {
        this.props.onClick({
          originalEvent: event,
          value: pageLink
        });
      }

      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var elements;

      if (this.props.value) {
        var startPageInView = this.props.value[0];
        var endPageInView = this.props.value[this.props.value.length - 1];
        elements = this.props.value.map(function (pageLink, i) {
          var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-paginator-page p-paginator-element p-link', {
            'p-paginator-page-start': pageLink === startPageInView,
            'p-paginator-page-end': pageLink === endPageInView,
            'p-highlight': pageLink - 1 === _this.props.page
          });
          var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
            type: "button",
            className: className,
            onClick: function onClick(e) {
              return _this.onPageLinkClick(e, pageLink);
            }
          }, pageLink, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_ripple__WEBPACK_IMPORTED_MODULE_2__.Ripple, null));

          if (_this.props.template) {
            var defaultOptions = {
              onClick: function onClick(e) {
                return _this.onPageLinkClick(e, pageLink);
              },
              className: className,
              view: {
                startPage: startPageInView - 1,
                endPage: endPageInView - 1
              },
              page: pageLink - 1,
              currentPage: _this.props.page,
              totalPages: _this.props.pageCount,
              element: element,
              props: _this.props
            };
            element = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(_this.props.template, defaultOptions);
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: pageLink
          }, element);
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "p-paginator-pages"
      }, elements);
    }
  }]);

  return PageLinks;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(PageLinks, "defaultProps", {
  value: null,
  page: null,
  rows: null,
  pageCount: null,
  links: null,
  template: null
});

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var RowsPerPageDropdown = /*#__PURE__*/function (_Component) {
  _inherits(RowsPerPageDropdown, _Component);

  var _super = _createSuper$3(RowsPerPageDropdown);

  function RowsPerPageDropdown() {
    _classCallCheck(this, RowsPerPageDropdown);

    return _super.apply(this, arguments);
  }

  _createClass(RowsPerPageDropdown, [{
    key: "hasOptions",
    value: function hasOptions() {
      return this.props.options && this.props.options.length > 0;
    }
  }, {
    key: "render",
    value: function render() {
      var hasOptions = this.hasOptions();
      var options = hasOptions ? this.props.options.map(function (opt) {
        return {
          label: String(opt),
          value: opt
        };
      }) : [];
      var element = hasOptions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_dropdown__WEBPACK_IMPORTED_MODULE_3__.Dropdown, {
        value: this.props.value,
        options: options,
        onChange: this.props.onChange,
        appendTo: this.props.appendTo,
        disabled: this.props.disabled
      }) : null;

      if (this.props.template) {
        var defaultOptions = {
          value: this.props.value,
          options: options,
          onChange: this.props.onChange,
          appendTo: this.props.appendTo,
          currentPage: this.props.page,
          totalPages: this.props.pageCount,
          totalRecords: this.props.totalRecords,
          disabled: this.props.disabled,
          element: element,
          props: this.props
        };
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.template, defaultOptions);
      }

      return element;
    }
  }]);

  return RowsPerPageDropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(RowsPerPageDropdown, "defaultProps", {
  options: null,
  value: null,
  page: null,
  pageCount: null,
  totalRecords: 0,
  appendTo: null,
  onChange: null,
  template: null,
  disabled: false
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var CurrentPageReport = /*#__PURE__*/function (_Component) {
  _inherits(CurrentPageReport, _Component);

  var _super = _createSuper$2(CurrentPageReport);

  function CurrentPageReport() {
    _classCallCheck(this, CurrentPageReport);

    return _super.apply(this, arguments);
  }

  _createClass(CurrentPageReport, [{
    key: "render",
    value: function render() {
      var report = {
        currentPage: this.props.page + 1,
        totalPages: this.props.pageCount,
        first: Math.min(this.props.first + 1, this.props.totalRecords),
        last: Math.min(this.props.first + this.props.rows, this.props.totalRecords),
        rows: this.props.rows,
        totalRecords: this.props.totalRecords
      };
      var text = this.props.reportTemplate.replace("{currentPage}", report.currentPage).replace("{totalPages}", report.totalPages).replace("{first}", report.first).replace("{last}", report.last).replace("{rows}", report.rows).replace("{totalRecords}", report.totalRecords);
      var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "p-paginator-current"
      }, text);

      if (this.props.template) {
        var defaultOptions = _objectSpread(_objectSpread({}, report), {
          className: 'p-paginator-current',
          element: element,
          props: this.props
        });

        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.template, defaultOptions);
      }

      return element;
    }
  }]);

  return CurrentPageReport;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(CurrentPageReport, "defaultProps", {
  pageCount: null,
  page: null,
  first: null,
  rows: null,
  totalRecords: null,
  reportTemplate: '({currentPage} of {totalPages})',
  template: null
});

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var JumpToPageInput = /*#__PURE__*/function (_Component) {
  _inherits(JumpToPageInput, _Component);

  var _super = _createSuper$1(JumpToPageInput);

  function JumpToPageInput(props) {
    var _this;

    _classCallCheck(this, JumpToPageInput);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(JumpToPageInput, [{
    key: "onChange",
    value: function onChange(event) {
      if (this.props.onChange) {
        this.props.onChange(this.props.rows * (event.value - 1), this.props.rows);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.props.pageCount > 0 ? this.props.page + 1 : 0;
      var element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_inputnumber__WEBPACK_IMPORTED_MODULE_4__.InputNumber, {
        value: value,
        onChange: this.onChange,
        className: "p-paginator-page-input",
        disabled: this.props.disabled
      });

      if (this.props.template) {
        var defaultOptions = {
          value: value,
          onChange: this.onChange,
          disabled: this.props.disabled,
          className: 'p-paginator-page-input',
          element: element,
          props: this.props
        };
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.template, defaultOptions);
      }

      return element;
    }
  }]);

  return JumpToPageInput;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(JumpToPageInput, "defaultProps", {
  page: null,
  rows: null,
  pageCount: null,
  disabled: false,
  template: null,
  onChange: null
});

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Paginator = /*#__PURE__*/function (_Component) {
  _inherits(Paginator, _Component);

  var _super = _createSuper(Paginator);

  function Paginator(props) {
    var _this;

    _classCallCheck(this, Paginator);

    _this = _super.call(this, props);
    _this.changePageToFirst = _this.changePageToFirst.bind(_assertThisInitialized(_this));
    _this.changePageToPrev = _this.changePageToPrev.bind(_assertThisInitialized(_this));
    _this.changePageToNext = _this.changePageToNext.bind(_assertThisInitialized(_this));
    _this.changePageToLast = _this.changePageToLast.bind(_assertThisInitialized(_this));
    _this.onRowsChange = _this.onRowsChange.bind(_assertThisInitialized(_this));
    _this.changePage = _this.changePage.bind(_assertThisInitialized(_this));
    _this.onPageLinkClick = _this.onPageLinkClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Paginator, [{
    key: "isFirstPage",
    value: function isFirstPage() {
      return this.getPage() === 0;
    }
  }, {
    key: "isLastPage",
    value: function isLastPage() {
      return this.getPage() === this.getPageCount() - 1;
    }
  }, {
    key: "getPageCount",
    value: function getPageCount() {
      return Math.ceil(this.props.totalRecords / this.props.rows);
    }
  }, {
    key: "calculatePageLinkBoundaries",
    value: function calculatePageLinkBoundaries() {
      var numberOfPages = this.getPageCount();
      var visiblePages = Math.min(this.props.pageLinkSize, numberOfPages); //calculate range, keep current in middle if necessary

      var start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2));
      var end = Math.min(numberOfPages - 1, start + visiblePages - 1); //check when approaching to last page

      var delta = this.props.pageLinkSize - (end - start + 1);
      start = Math.max(0, start - delta);
      return [start, end];
    }
  }, {
    key: "updatePageLinks",
    value: function updatePageLinks() {
      var pageLinks = [];
      var boundaries = this.calculatePageLinkBoundaries();
      var start = boundaries[0];
      var end = boundaries[1];

      for (var i = start; i <= end; i++) {
        pageLinks.push(i + 1);
      }

      return pageLinks;
    }
  }, {
    key: "changePage",
    value: function changePage(first, rows) {
      var pc = this.getPageCount();
      var p = Math.floor(first / rows);

      if (p >= 0 && p < pc) {
        var newPageState = {
          first: first,
          rows: rows,
          page: p,
          pageCount: pc
        };

        if (this.props.onPageChange) {
          this.props.onPageChange(newPageState);
        }
      }
    }
  }, {
    key: "getPage",
    value: function getPage() {
      return Math.floor(this.props.first / this.props.rows);
    }
  }, {
    key: "empty",
    value: function empty() {
      var pageCount = this.getPageCount();
      return pageCount === 0;
    }
  }, {
    key: "changePageToFirst",
    value: function changePageToFirst(event) {
      this.changePage(0, this.props.rows);
      event.preventDefault();
    }
  }, {
    key: "changePageToPrev",
    value: function changePageToPrev(event) {
      this.changePage(this.props.first - this.props.rows, this.props.rows);
      event.preventDefault();
    }
  }, {
    key: "onPageLinkClick",
    value: function onPageLinkClick(event) {
      this.changePage((event.value - 1) * this.props.rows, this.props.rows);
    }
  }, {
    key: "changePageToNext",
    value: function changePageToNext(event) {
      this.changePage(this.props.first + this.props.rows, this.props.rows);
      event.preventDefault();
    }
  }, {
    key: "changePageToLast",
    value: function changePageToLast(event) {
      this.changePage((this.getPageCount() - 1) * this.props.rows, this.props.rows);
      event.preventDefault();
    }
  }, {
    key: "onRowsChange",
    value: function onRowsChange(event) {
      var rows = event.value;
      this.isRowChanged = rows !== this.props.rows;
      this.changePage(0, rows);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.rows !== prevProps.rows && !this.isRowChanged) {
        this.changePage(0, this.props.rows);
      } else if (this.getPage() > 0 && prevProps.totalRecords !== this.props.totalRecords && this.props.first >= this.props.totalRecords) {
        this.changePage((this.getPageCount() - 1) * this.props.rows, this.props.rows);
      }

      this.isRowChanged = false;
    }
  }, {
    key: "renderElement",
    value: function renderElement(key, template) {
      var element;

      switch (key) {
        case 'FirstPageLink':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FirstPageLink, {
            key: key,
            onClick: this.changePageToFirst,
            disabled: this.isFirstPage() || this.empty(),
            template: template
          });
          break;

        case 'PrevPageLink':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PrevPageLink, {
            key: key,
            onClick: this.changePageToPrev,
            disabled: this.isFirstPage() || this.empty(),
            template: template
          });
          break;

        case 'NextPageLink':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NextPageLink, {
            key: key,
            onClick: this.changePageToNext,
            disabled: this.isLastPage() || this.empty(),
            template: template
          });
          break;

        case 'LastPageLink':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LastPageLink, {
            key: key,
            onClick: this.changePageToLast,
            disabled: this.isLastPage() || this.empty(),
            template: template
          });
          break;

        case 'PageLinks':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PageLinks, {
            key: key,
            value: this.updatePageLinks(),
            page: this.getPage(),
            rows: this.props.rows,
            pageCount: this.getPageCount(),
            onClick: this.onPageLinkClick,
            template: template
          });
          break;

        case 'RowsPerPageDropdown':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RowsPerPageDropdown, {
            key: key,
            value: this.props.rows,
            page: this.getPage(),
            pageCount: this.getPageCount(),
            totalRecords: this.props.totalRecords,
            options: this.props.rowsPerPageOptions,
            onChange: this.onRowsChange,
            appendTo: this.props.dropdownAppendTo,
            template: template,
            disabled: this.empty()
          });
          break;

        case 'CurrentPageReport':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CurrentPageReport, {
            reportTemplate: this.props.currentPageReportTemplate,
            key: key,
            page: this.getPage(),
            pageCount: this.getPageCount(),
            first: this.props.first,
            rows: this.props.rows,
            totalRecords: this.props.totalRecords,
            template: template
          });
          break;

        case 'JumpToPageInput':
          element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(JumpToPageInput, {
            key: key,
            rows: this.props.rows,
            page: this.getPage(),
            pageCount: this.getPageCount(),
            onChange: this.changePage,
            disabled: this.empty(),
            template: template
          });
          break;

        default:
          element = null;
          break;
      }

      return element;
    }
  }, {
    key: "renderElements",
    value: function renderElements() {
      var _this2 = this;

      var template = this.props.template;

      if (template) {
        if (_typeof(template) === 'object') {
          return template.layout ? template.layout.split(' ').map(function (value) {
            var key = value.trim();
            return _this2.renderElement(key, template[key]);
          }) : Object.entries(template).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                _template = _ref2[1];

            return _this2.renderElement(key, _template);
          });
        }

        return template.split(' ').map(function (value) {
          return _this2.renderElement(value.trim());
        });
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.alwaysShow && this.getPageCount() === 1) {
        return null;
      } else {
        var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-paginator p-component', this.props.className);
        var leftContent = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.leftContent, this.props);
        var rightContent = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.rightContent, this.props);
        var elements = this.renderElements();
        var leftElement = leftContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "p-paginator-left-content"
        }, leftContent);
        var rightElement = rightContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "p-paginator-right-content"
        }, rightContent);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: className,
          style: this.props.style
        }, leftElement, elements, rightElement);
      }
    }
  }]);

  return Paginator;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Paginator, "defaultProps", {
  totalRecords: 0,
  rows: 0,
  first: 0,
  pageLinkSize: 5,
  rowsPerPageOptions: null,
  alwaysShow: true,
  style: null,
  className: null,
  template: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
  onPageChange: null,
  leftContent: null,
  rightContent: null,
  dropdownAppendTo: null,
  currentPageReportTemplate: '({currentPage} of {totalPages})'
});




/***/ }),

/***/ "./node_modules/primereact/tooltip/tooltip.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/primereact/tooltip/tooltip.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tooltip": () => (/* binding */ Tooltip),
/* harmony export */   "tip": () => (/* binding */ tip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");
/* harmony import */ var primereact_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/portal */ "./node_modules/primereact/portal/portal.esm.js");
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/api */ "./node_modules/primereact/api/api.esm.js");






function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function tip(props) {
  var appendTo = props.appendTo || document.body;
  var tooltipWrapper = document.createDocumentFragment();
  primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.appendChild(tooltipWrapper, appendTo);
  props = _objectSpread(_objectSpread({}, props), props.options);
  var tooltipEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tooltip, props);
  react_dom__WEBPACK_IMPORTED_MODULE_1__.render(tooltipEl, tooltipWrapper);

  var updateTooltip = function updateTooltip(newProps) {
    props = _objectSpread(_objectSpread({}, props), newProps);
    react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(tooltipEl, props), tooltipWrapper);
  };

  return {
    destroy: function destroy() {
      react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(tooltipWrapper);
    },
    updateContent: function updateContent(newContent) {
      console.warn("The 'updateContent' method has been deprecated on Tooltip. Use update(newProps) method.");
      updateTooltip({
        content: newContent
      });
    },
    update: function update(newProps) {
      updateTooltip(newProps);
    }
  };
}
var Tooltip = /*#__PURE__*/function (_Component) {
  _inherits(Tooltip, _Component);

  var _super = _createSuper(Tooltip);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _super.call(this, props);
    _this.state = {
      visible: false,
      position: _this.props.position
    };
    _this.show = _this.show.bind(_assertThisInitialized(_this));
    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
    _this.onMouseEnter = _this.onMouseEnter.bind(_assertThisInitialized(_this));
    _this.onMouseLeave = _this.onMouseLeave.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Tooltip, [{
    key: "isTargetContentEmpty",
    value: function isTargetContentEmpty(target) {
      return !(this.props.content || this.getTargetOption(target, 'tooltip'));
    }
  }, {
    key: "isContentEmpty",
    value: function isContentEmpty(target) {
      return !(this.props.content || this.getTargetOption(target, 'tooltip') || this.props.children);
    }
  }, {
    key: "isMouseTrack",
    value: function isMouseTrack(target) {
      return this.getTargetOption(target, 'mousetrack') || this.props.mouseTrack;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled(target) {
      return this.getTargetOption(target, 'disabled') === 'true' || this.hasTargetOption(target, 'disabled') || this.props.disabled;
    }
  }, {
    key: "isShowOnDisabled",
    value: function isShowOnDisabled(target) {
      return this.getTargetOption(target, 'showondisabled') || this.props.showOnDisabled;
    }
  }, {
    key: "isAutoHide",
    value: function isAutoHide() {
      return this.getTargetOption(this.currentTarget, 'autohide') || this.props.autoHide;
    }
  }, {
    key: "getTargetOption",
    value: function getTargetOption(target, option) {
      if (this.hasTargetOption(target, "data-pr-".concat(option))) {
        return target.getAttribute("data-pr-".concat(option));
      }

      return null;
    }
  }, {
    key: "hasTargetOption",
    value: function hasTargetOption(target, option) {
      return target && target.hasAttribute(option);
    }
  }, {
    key: "getEvents",
    value: function getEvents(target) {
      var showEvent = this.getTargetOption(target, 'showevent') || this.props.showEvent;
      var hideEvent = this.getTargetOption(target, 'hideevent') || this.props.hideEvent;

      if (this.isMouseTrack(target)) {
        showEvent = 'mousemove';
        hideEvent = 'mouseleave';
      } else {
        var event = this.getTargetOption(target, 'event') || this.props.event;

        if (event === 'focus') {
          showEvent = 'focus';
          hideEvent = 'blur';
        }
      }

      return {
        showEvent: showEvent,
        hideEvent: hideEvent
      };
    }
  }, {
    key: "getPosition",
    value: function getPosition(target) {
      return this.getTargetOption(target, 'position') || this.state.position;
    }
  }, {
    key: "getMouseTrackPosition",
    value: function getMouseTrackPosition(target) {
      var top = this.getTargetOption(target, 'mousetracktop') || this.props.mouseTrackTop;
      var left = this.getTargetOption(target, 'mousetrackleft') || this.props.mouseTrackLeft;
      return {
        top: top,
        left: left
      };
    }
  }, {
    key: "updateText",
    value: function updateText(target, callback) {
      if (this.tooltipTextEl) {
        var content = this.getTargetOption(target, 'tooltip') || this.props.content;

        if (content) {
          this.tooltipTextEl.innerHTML = ''; // remove children

          this.tooltipTextEl.appendChild(document.createTextNode(content));
          callback();
        } else if (this.props.children) {
          callback();
        }
      }
    }
  }, {
    key: "show",
    value: function show(e) {
      var _this2 = this;

      this.currentTarget = e.currentTarget;
      var disabled = this.isDisabled(this.currentTarget);
      var empty = this.isContentEmpty(this.isShowOnDisabled(this.currentTarget) && disabled ? this.currentTarget.firstChild : this.currentTarget);

      if (empty || disabled) {
        return;
      }

      var updateTooltipState = function updateTooltipState() {
        _this2.updateText(_this2.currentTarget, function () {
          if (_this2.props.autoZIndex && !primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.get(_this2.containerEl)) {
            primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('tooltip', _this2.containerEl, primereact_api__WEBPACK_IMPORTED_MODULE_4__["default"].autoZIndex, _this2.props.baseZIndex || primereact_api__WEBPACK_IMPORTED_MODULE_4__["default"].zIndex.tooltip);
          }

          _this2.containerEl.style.left = '';
          _this2.containerEl.style.top = '';

          if (_this2.isMouseTrack(_this2.currentTarget) && !_this2.containerSize) {
            _this2.containerSize = {
              width: primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(_this2.containerEl),
              height: primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(_this2.containerEl)
            };
          }

          _this2.align(_this2.currentTarget, {
            x: e.pageX,
            y: e.pageY
          });
        });
      };

      if (this.state.visible) {
        this.applyDelay('updateDelay', updateTooltipState);
      } else {
        this.sendCallback(this.props.onBeforeShow, {
          originalEvent: e,
          target: this.currentTarget
        });
        this.applyDelay('showDelay', function () {
          _this2.setState({
            visible: true,
            position: _this2.getPosition(_this2.currentTarget)
          }, function () {
            updateTooltipState();

            _this2.sendCallback(_this2.props.onShow, {
              originalEvent: e,
              target: _this2.currentTarget
            });
          });

          _this2.bindDocumentResizeListener();

          _this2.bindScrollListener();

          primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(_this2.currentTarget, _this2.getTargetOption(_this2.currentTarget, 'classname'));
        });
      }
    }
  }, {
    key: "hide",
    value: function hide(e) {
      var _this3 = this;

      this.clearTimeouts();

      if (this.state.visible) {
        primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(this.currentTarget, this.getTargetOption(this.currentTarget, 'classname'));
        this.sendCallback(this.props.onBeforeHide, {
          originalEvent: e,
          target: this.currentTarget
        });
        this.applyDelay('hideDelay', function () {
          primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(_this3.containerEl);
          primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeClass(_this3.containerEl, 'p-tooltip-active');

          if (!_this3.isAutoHide() && _this3.allowHide === false) {
            return;
          }

          _this3.setState({
            visible: false,
            position: _this3.props.position
          }, function () {
            if (_this3.tooltipTextEl) {
              react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(_this3.tooltipTextEl);
            }

            _this3.unbindDocumentResizeListener();

            _this3.unbindScrollListener();

            _this3.currentTarget = null;
            _this3.scrollHandler = null;
            _this3.containerSize = null;
            _this3.allowHide = true;

            _this3.sendCallback(_this3.props.onHide, {
              originalEvent: e,
              target: _this3.currentTarget
            });
          });
        });
      }
    }
  }, {
    key: "align",
    value: function align(target, coordinate) {
      var _this4 = this;

      var left = 0,
          top = 0;

      if (this.isMouseTrack(target) && coordinate) {
        var containerSize = {
          width: primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(this.containerEl),
          height: primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterHeight(this.containerEl)
        };
        left = coordinate.x;
        top = coordinate.y;

        var _this$getMouseTrackPo = this.getMouseTrackPosition(target),
            mouseTrackTop = _this$getMouseTrackPo.top,
            mouseTrackLeft = _this$getMouseTrackPo.left;

        switch (this.state.position) {
          case 'left':
            left -= containerSize.width + mouseTrackLeft;
            top -= containerSize.height / 2 - mouseTrackTop;
            break;

          case 'right':
            left += mouseTrackLeft;
            top -= containerSize.height / 2 - mouseTrackTop;
            break;

          case 'top':
            left -= containerSize.width / 2 - mouseTrackLeft;
            top -= containerSize.height + mouseTrackTop;
            break;

          case 'bottom':
            left -= containerSize.width / 2 - mouseTrackLeft;
            top += mouseTrackTop;
            break;
        }

        if (left <= 0 || this.containerSize.width > containerSize.width) {
          this.containerEl.style.left = '0px';
          this.containerEl.style.right = window.innerWidth - containerSize.width - left + 'px';
        } else {
          this.containerEl.style.right = '';
          this.containerEl.style.left = left + 'px';
        }

        this.containerEl.style.top = top + 'px';
        primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(this.containerEl, 'p-tooltip-active');
      } else {
        var pos = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findCollisionPosition(this.state.position);
        var my = this.getTargetOption(target, 'my') || this.props.my || pos.my;
        var at = this.getTargetOption(target, 'at') || this.props.at || pos.at;
        this.containerEl.style.padding = '0px';
        primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.flipfitCollision(this.containerEl, target, my, at, function (currentPosition) {
          var _currentPosition$at = currentPosition.at,
              atX = _currentPosition$at.x,
              atY = _currentPosition$at.y;
          var myX = currentPosition.my.x;
          var position = _this4.props.at ? atX !== 'center' && atX !== myX ? atX : atY : currentPosition.at["".concat(pos.axis)];
          _this4.containerEl.style.padding = '';

          _this4.setState({
            position: position
          }, function () {
            _this4.updateContainerPosition();

            primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.addClass(_this4.containerEl, 'p-tooltip-active');
          });
        });
      }
    }
  }, {
    key: "updateContainerPosition",
    value: function updateContainerPosition() {
      if (this.containerEl) {
        var style = getComputedStyle(this.containerEl);
        if (this.state.position === 'left') this.containerEl.style.left = parseFloat(style.left) - parseFloat(style.paddingLeft) * 2 + 'px';else if (this.state.position === 'top') this.containerEl.style.top = parseFloat(style.top) - parseFloat(style.paddingTop) * 2 + 'px';
      }
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter() {
      if (!this.isAutoHide()) {
        this.allowHide = false;
      }
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(e) {
      if (!this.isAutoHide()) {
        this.allowHide = true;
        this.hide(e);
      }
    }
  }, {
    key: "bindDocumentResizeListener",
    value: function bindDocumentResizeListener() {
      var _this5 = this;

      this.documentResizeListener = function (e) {
        if (!primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isTouchDevice()) {
          _this5.hide(e);
        }
      };

      window.addEventListener('resize', this.documentResizeListener);
    }
  }, {
    key: "unbindDocumentResizeListener",
    value: function unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        window.removeEventListener('resize', this.documentResizeListener);
        this.documentResizeListener = null;
      }
    }
  }, {
    key: "bindScrollListener",
    value: function bindScrollListener() {
      var _this6 = this;

      if (!this.scrollHandler) {
        this.scrollHandler = new primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ConnectedOverlayScrollHandler(this.currentTarget, function (e) {
          if (_this6.state.visible) {
            _this6.hide(e);
          }
        });
      }

      this.scrollHandler.bindScrollListener();
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
  }, {
    key: "bindTargetEvent",
    value: function bindTargetEvent(target) {
      if (target) {
        var _this$getEvents = this.getEvents(target),
            showEvent = _this$getEvents.showEvent,
            hideEvent = _this$getEvents.hideEvent;

        var currentTarget = this.getTarget(target);
        currentTarget.addEventListener(showEvent, this.show);
        currentTarget.addEventListener(hideEvent, this.hide);
      }
    }
  }, {
    key: "unbindTargetEvent",
    value: function unbindTargetEvent(target) {
      if (target) {
        var _this$getEvents2 = this.getEvents(target),
            showEvent = _this$getEvents2.showEvent,
            hideEvent = _this$getEvents2.hideEvent;

        var currentTarget = this.getTarget(target);
        currentTarget.removeEventListener(showEvent, this.show);
        currentTarget.removeEventListener(hideEvent, this.hide);
      }
    }
  }, {
    key: "applyDelay",
    value: function applyDelay(delayProp, callback) {
      this.clearTimeouts();
      var delay = this.getTargetOption(this.currentTarget, delayProp.toLowerCase()) || this.props[delayProp];

      if (!!delay) {
        this["".concat(delayProp, "Timeout")] = setTimeout(function () {
          return callback();
        }, delay);
      } else {
        callback();
      }
    }
  }, {
    key: "sendCallback",
    value: function sendCallback(callback) {
      if (callback) {
        for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          params[_key - 1] = arguments[_key];
        }

        callback.apply(void 0, params);
      }
    }
  }, {
    key: "clearTimeouts",
    value: function clearTimeouts() {
      clearTimeout(this.showDelayTimeout);
      clearTimeout(this.updateDelayTimeout);
      clearTimeout(this.hideDelayTimeout);
    }
  }, {
    key: "getTarget",
    value: function getTarget(target) {
      if (target) {
        if (this.isShowOnDisabled(target)) {
          var wrapper = document.createElement('span');
          target.parentNode.insertBefore(wrapper, target);
          wrapper.appendChild(target);
          return wrapper;
        }

        return target;
      }

      return null;
    }
  }, {
    key: "updateTargetEvents",
    value: function updateTargetEvents(target) {
      this.unloadTargetEvents(target);
      this.loadTargetEvents(target);
    }
  }, {
    key: "loadTargetEvents",
    value: function loadTargetEvents(target) {
      this.setTargetEventOperations(target || this.props.target, 'bindTargetEvent');
    }
  }, {
    key: "unloadTargetEvents",
    value: function unloadTargetEvents(target) {
      this.setTargetEventOperations(target || this.props.target, 'unbindTargetEvent');
    }
  }, {
    key: "setTargetEventOperations",
    value: function setTargetEventOperations(target, operation) {
      var _this7 = this;

      if (target) {
        if (primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isElement(target)) {
          this[operation](target);
        } else {
          var setEvent = function setEvent(target) {
            var element = primereact_utils__WEBPACK_IMPORTED_MODULE_2__.DomHandler.find(document, target);
            element.forEach(function (el) {
              _this7[operation](el);
            });
          };

          if (target instanceof Array) {
            target.forEach(function (t) {
              setEvent(t);
            });
          } else {
            setEvent(target);
          }
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.target) {
        this.loadTargetEvents();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this8 = this;

      if (prevProps.target !== this.props.target) {
        this.unloadTargetEvents(prevProps.target);
        this.loadTargetEvents();
      }

      if (this.state.visible) {
        if (prevProps.content !== this.props.content) {
          this.applyDelay('updateDelay', function () {
            _this8.updateText(_this8.currentTarget, function () {
              _this8.align(_this8.currentTarget);
            });
          });
        }

        if (this.currentTarget && this.isDisabled(this.currentTarget)) {
          this.hide();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearTimeouts();
      this.unbindDocumentResizeListener();
      this.unloadTargetEvents();

      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }

      primereact_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.containerEl);
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var _this9 = this;

      var tooltipClassName = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_2__.classNames)('p-tooltip p-component', _defineProperty({}, "p-tooltip-".concat(this.state.position), true), this.props.className);
      var isTargetContentEmpty = this.isTargetContentEmpty(this.currentTarget);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: this.props.id,
        ref: function ref(el) {
          return _this9.containerEl = el;
        },
        className: tooltipClassName,
        style: this.props.style,
        role: "tooltip",
        "aria-hidden": this.state.visible,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-tooltip-arrow"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        ref: function ref(el) {
          return _this9.tooltipTextEl = el;
        },
        className: "p-tooltip-text"
      }, isTargetContentEmpty && this.props.children));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.visible) {
        var element = this.renderElement();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(primereact_portal__WEBPACK_IMPORTED_MODULE_3__.Portal, {
          element: element,
          appendTo: this.props.appendTo,
          visible: true
        });
      }

      return null;
    }
  }]);

  return Tooltip;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(Tooltip, "defaultProps", {
  id: null,
  target: null,
  content: null,
  disabled: false,
  className: null,
  style: null,
  appendTo: null,
  position: 'right',
  my: null,
  at: null,
  event: null,
  showEvent: 'mouseenter',
  hideEvent: 'mouseleave',
  autoZIndex: true,
  baseZIndex: 0,
  mouseTrack: false,
  mouseTrackTop: 5,
  mouseTrackLeft: 5,
  showDelay: 0,
  updateDelay: 0,
  hideDelay: 0,
  autoHide: true,
  showOnDisabled: false,
  onBeforeShow: null,
  onBeforeHide: null,
  onShow: null,
  onHide: null
});




/***/ }),

/***/ "./node_modules/primereact/virtualscroller/virtualscroller.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/primereact/virtualscroller/virtualscroller.esm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualScroller": () => (/* binding */ VirtualScroller)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var primereact_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/utils */ "./node_modules/primereact/utils/utils.esm.js");



function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var VirtualScroller = /*#__PURE__*/function (_Component) {
  _inherits(VirtualScroller, _Component);

  var _super = _createSuper(VirtualScroller);

  function VirtualScroller(props) {
    var _this;

    _classCallCheck(this, VirtualScroller);

    _this = _super.call(this, props);

    var isBoth = _this.isBoth();

    _this.state = {
      first: isBoth ? {
        rows: 0,
        cols: 0
      } : 0,
      last: isBoth ? {
        rows: 0,
        cols: 0
      } : 0,
      numItemsInViewport: isBoth ? {
        rows: 0,
        cols: 0
      } : 0,
      numToleratedItems: props.numToleratedItems,
      loading: props.loading,
      loaderArr: []
    };
    _this.onScroll = _this.onScroll.bind(_assertThisInitialized(_this));
    _this.lastScrollPos = isBoth ? {
      top: 0,
      left: 0
    } : 0;
    return _this;
  }

  _createClass(VirtualScroller, [{
    key: "scrollTo",
    value: function scrollTo(options) {
      this.el && this.el.scrollTo(options);
    }
  }, {
    key: "scrollToIndex",
    value: function scrollToIndex(index) {
      var _this2 = this;

      var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
      var isBoth = this.isBoth();
      var isHorizontal = this.isHorizontal();
      var first = this.state.first;

      var _this$calculateNumIte = this.calculateNumItems(),
          numToleratedItems = _this$calculateNumIte.numToleratedItems;

      var itemSize = this.props.itemSize;
      var contentPos = this.getContentPosition();

      var calculateFirst = function calculateFirst() {
        var _index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        var _numT = arguments.length > 1 ? arguments[1] : undefined;

        return _index <= _numT ? 0 : _index;
      };

      var calculateCoord = function calculateCoord(_first, _size, _cpos) {
        return _first * _size + _cpos;
      };

      var scrollTo = function scrollTo() {
        var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return _this2.scrollTo({
          left: left,
          top: top,
          behavior: behavior
        });
      };

      if (isBoth) {
        var newFirst = {
          rows: calculateFirst(index[0], numToleratedItems[0]),
          cols: calculateFirst(index[1], numToleratedItems[1])
        };

        if (newFirst.rows !== first.rows || newFirst.cols !== first.cols) {
          scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPos.left), calculateCoord(newFirst.rows, itemSize[0], contentPos.top));
          this.setState({
            first: newFirst
          });
        }
      } else {
        var _newFirst = calculateFirst(index, numToleratedItems);

        if (_newFirst !== first) {
          isHorizontal ? scrollTo(calculateCoord(_newFirst, itemSize, contentPos.left), 0) : scrollTo(0, calculateCoord(_newFirst, itemSize, contentPos.top));
          this.setState({
            first: _newFirst
          });
        }
      }
    }
  }, {
    key: "scrollInView",
    value: function scrollInView(index, to) {
      var _this3 = this;

      var behavior = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'auto';

      if (to) {
        var isBoth = this.isBoth();
        var isHorizontal = this.isHorizontal();

        var _this$getRenderedRang = this.getRenderedRange(),
            first = _this$getRenderedRang.first,
            viewport = _this$getRenderedRang.viewport;

        var itemSize = this.props.itemSize;

        var scrollTo = function scrollTo() {
          var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return _this3.scrollTo({
            left: left,
            top: top,
            behavior: behavior
          });
        };

        var isToStart = to === 'to-start';
        var isToEnd = to === 'to-end';

        if (isToStart) {
          if (isBoth) {
            if (viewport.first.rows - first.rows > index[0]) {
              scrollTo(viewport.first.cols * itemSize, (viewport.first.rows - 1) * itemSize);
            } else if (viewport.first.cols - first.cols > index[1]) {
              scrollTo((viewport.first.cols - 1) * itemSize, viewport.first.rows * itemSize);
            }
          } else {
            if (viewport.first - first > index) {
              var pos = (viewport.first - 1) * itemSize;
              isHorizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
            }
          }
        } else if (isToEnd) {
          if (isBoth) {
            if (viewport.last.rows - first.rows <= index[0] + 1) {
              scrollTo(viewport.first.cols * itemSize, (viewport.first.rows + 1) * itemSize);
            } else if (viewport.last.cols - first.cols <= index[1] + 1) {
              scrollTo((viewport.first.cols + 1) * itemSize, viewport.first.rows * itemSize);
            }
          } else {
            if (viewport.last - first <= index + 1) {
              var _pos2 = (viewport.first + 1) * itemSize;

              isHorizontal ? scrollTo(_pos2, 0) : scrollTo(0, _pos2);
            }
          }
        }
      } else {
        this.scrollToIndex(index, behavior);
      }
    }
  }, {
    key: "getRows",
    value: function getRows() {
      return this.state.loading ? this.props.loaderDisabled ? this.state.loaderArr : [] : this.loadedItems();
    }
  }, {
    key: "getColumns",
    value: function getColumns() {
      if (this.props.columns) {
        var isBoth = this.isBoth();
        var isHorizontal = this.isHorizontal();

        if (isBoth || isHorizontal) {
          return this.state.loading && this.props.loaderDisabled ? isBoth ? this.state.loaderArr[0] : this.state.loaderArr : this.props.columns.slice(isBoth ? this.state.first.cols : this.state.first, isBoth ? this.state.last.cols : this.state.last);
        }
      }

      return this.props.columns;
    }
  }, {
    key: "getRenderedRange",
    value: function getRenderedRange() {
      var isBoth = this.isBoth();
      var isHorizontal = this.isHorizontal();
      var _this$state = this.state,
          first = _this$state.first,
          last = _this$state.last,
          numItemsInViewport = _this$state.numItemsInViewport;
      var itemSize = this.props.itemSize;

      var calculateFirstInViewport = function calculateFirstInViewport(_pos, _size) {
        return Math.floor(_pos / (_size || _pos));
      };

      var firstInViewport = first;
      var lastInViewport = 0;

      if (this.el) {
        var scrollTop = this.el.scrollTop;
        var scrollLeft = this.el.scrollLeft;

        if (isBoth) {
          firstInViewport = {
            rows: calculateFirstInViewport(scrollTop, itemSize[0]),
            cols: calculateFirstInViewport(scrollLeft, itemSize[1])
          };
          lastInViewport = {
            rows: firstInViewport.rows + numItemsInViewport.rows,
            cols: firstInViewport.cols + numItemsInViewport.cols
          };
        } else {
          var scrollPos = isHorizontal ? scrollLeft : scrollTop;
          firstInViewport = calculateFirstInViewport(scrollPos, itemSize);
          lastInViewport = firstInViewport + numItemsInViewport;
        }
      }

      return {
        first: first,
        last: last,
        viewport: {
          first: firstInViewport,
          last: lastInViewport
        }
      };
    }
  }, {
    key: "isVertical",
    value: function isVertical() {
      return this.props.orientation === 'vertical';
    }
  }, {
    key: "isHorizontal",
    value: function isHorizontal() {
      return this.props.orientation === 'horizontal';
    }
  }, {
    key: "isBoth",
    value: function isBoth() {
      return this.props.orientation === 'both';
    }
  }, {
    key: "calculateNumItems",
    value: function calculateNumItems() {
      var isBoth = this.isBoth();
      var isHorizontal = this.isHorizontal();
      var itemSize = this.props.itemSize;
      var contentPos = this.getContentPosition();
      var contentWidth = this.el ? this.el.offsetWidth - contentPos.left : 0;
      var contentHeight = this.el ? this.el.offsetHeight - contentPos.top : 0;

      var calculateNumItemsInViewport = function calculateNumItemsInViewport(_contentSize, _itemSize) {
        return Math.ceil(_contentSize / (_itemSize || _contentSize));
      };

      var calculateNumToleratedItems = function calculateNumToleratedItems(_numItems) {
        return Math.ceil(_numItems / 2);
      };

      var numItemsInViewport = isBoth ? {
        rows: calculateNumItemsInViewport(contentHeight, itemSize[0]),
        cols: calculateNumItemsInViewport(contentWidth, itemSize[1])
      } : calculateNumItemsInViewport(isHorizontal ? contentWidth : contentHeight, itemSize);
      var numToleratedItems = this.state.numToleratedItems || (isBoth ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
      return {
        numItemsInViewport: numItemsInViewport,
        numToleratedItems: numToleratedItems
      };
    }
  }, {
    key: "calculateOptions",
    value: function calculateOptions() {
      var _this4 = this;

      var isBoth = this.isBoth();
      var first = this.state.first;

      var _this$calculateNumIte2 = this.calculateNumItems(),
          numItemsInViewport = _this$calculateNumIte2.numItemsInViewport,
          numToleratedItems = _this$calculateNumIte2.numToleratedItems;

      var calculateLast = function calculateLast(_first, _num, _numT, _isCols) {
        return _this4.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
      };

      var last = isBoth ? {
        rows: calculateLast(first.rows, numItemsInViewport.rows, numToleratedItems[0]),
        cols: calculateLast(first.cols, numItemsInViewport.cols, numToleratedItems[1], true)
      } : calculateLast(first, numItemsInViewport, numToleratedItems);
      var state = {
        numItemsInViewport: numItemsInViewport,
        last: last,
        numToleratedItems: numToleratedItems
      };

      if (this.props.showLoader) {
        state['loaderArr'] = isBoth ? Array.from({
          length: numItemsInViewport.rows
        }).map(function () {
          return Array.from({
            length: numItemsInViewport.cols
          });
        }) : Array.from({
          length: numItemsInViewport
        });
      }

      this.setState(state, function () {
        if (_this4.props.lazy) {
          _this4.props.onLazyLoad && _this4.props.onLazyLoad({
            first: _this4.state.first,
            last: _this4.state.last
          });
        }
      });
    }
  }, {
    key: "getLast",
    value: function getLast() {
      var last = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var isCols = arguments.length > 1 ? arguments[1] : undefined;

      if (this.props.items) {
        return Math.min(isCols ? (this.props.columns || this.props.items[0]).length : this.props.items.length, last);
      }

      return 0;
    }
  }, {
    key: "getContentPosition",
    value: function getContentPosition() {
      if (this.content) {
        var style = getComputedStyle(this.content);
        var left = parseInt(style.paddingLeft, 10) + Math.max(parseInt(style.left, 10), 0);
        var right = parseInt(style.paddingRight, 10) + Math.max(parseInt(style.right, 10), 0);
        var top = parseInt(style.paddingTop, 10) + Math.max(parseInt(style.top, 10), 0);
        var bottom = parseInt(style.paddingBottom, 10) + Math.max(parseInt(style.bottom, 10), 0);
        return {
          left: left,
          right: right,
          top: top,
          bottom: bottom,
          x: left + right,
          y: top + bottom
        };
      }

      return {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        x: 0,
        y: 0
      };
    }
  }, {
    key: "setSize",
    value: function setSize() {
      var _this5 = this;

      if (this.el) {
        var isBoth = this.isBoth();
        var isHorizontal = this.isHorizontal();
        var parentElement = this.el.parentElement;
        var width = this.props.scrollWidth || "".concat(this.el.offsetWidth || parentElement.offsetWidth, "px");
        var height = this.props.scrollHeight || "".concat(this.el.offsetHeight || parentElement.offsetHeight, "px");

        var setProp = function setProp(_name, _value) {
          return _this5.el.style[_name] = _value;
        };

        if (isBoth || isHorizontal) {
          setProp('height', height);
          setProp('width', width);
        } else {
          setProp('height', height);
        }
      }
    }
  }, {
    key: "setSpacerSize",
    value: function setSpacerSize() {
      var _this6 = this;

      var items = this.props.items;

      if (this.spacer && items) {
        var isBoth = this.isBoth();
        var isHorizontal = this.isHorizontal();
        var itemSize = this.props.itemSize;
        var contentPos = this.getContentPosition();

        var setProp = function setProp(_name, _value, _size) {
          var _cpos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

          return _this6.spacer.style[_name] = (_value || []).length * _size + _cpos + 'px';
        };

        if (isBoth) {
          setProp('height', items, itemSize[0], contentPos.y);
          setProp('width', this.props.columns || items[1], itemSize[1], contentPos.x);
        } else {
          isHorizontal ? setProp('width', this.props.columns || items, itemSize, contentPos.x) : setProp('height', items, itemSize, contentPos.y);
        }
      }
    }
  }, {
    key: "setContentPosition",
    value: function setContentPosition(pos) {
      var _this7 = this;

      if (this.content) {
        var isBoth = this.isBoth();
        var isHorizontal = this.isHorizontal();
        var first = pos ? pos.first : this.state.first;
        var itemSize = this.props.itemSize;

        var calculateTranslateVal = function calculateTranslateVal(_first, _size) {
          return _first * _size;
        };

        var setTransform = function setTransform() {
          var _x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          var _y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          _this7.sticky && (_this7.sticky.style.top = "-".concat(_y, "px"));
          _this7.content.style.transform = "translate3d(".concat(_x, "px, ").concat(_y, "px, 0)");
        };

        if (isBoth) {
          setTransform(calculateTranslateVal(first.cols, itemSize[1]), calculateTranslateVal(first.rows, itemSize[0]));
        } else {
          var translateVal = calculateTranslateVal(first, itemSize);
          isHorizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
        }
      }
    }
  }, {
    key: "onScrollPositionChange",
    value: function onScrollPositionChange(event) {
      var _this8 = this;

      var target = event.target;
      var isBoth = this.isBoth();
      var isHorizontal = this.isHorizontal();
      var _this$state2 = this.state,
          first = _this$state2.first,
          last = _this$state2.last,
          numItemsInViewport = _this$state2.numItemsInViewport,
          numToleratedItems = _this$state2.numToleratedItems;
      var itemSize = this.props.itemSize;
      var contentPos = this.getContentPosition();

      var calculateScrollPos = function calculateScrollPos(_pos, _cpos) {
        return _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
      };

      var calculateCurrentIndex = function calculateCurrentIndex(_pos, _size) {
        return Math.floor(_pos / (_size || _pos));
      };

      var calculateTriggerIndex = function calculateTriggerIndex(_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
        return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
      };

      var calculateFirst = function calculateFirst(_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
        if (_currentIndex <= _numT) return 0;else return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
      };

      var calculateLast = function calculateLast(_currentIndex, _first, _last, _num, _numT, _isCols) {
        var lastValue = _first + _num + 2 * _numT;

        if (_currentIndex >= _numT) {
          lastValue += _numT + 1;
        }

        return _this8.getLast(lastValue, _isCols);
      };

      var scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
      var scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
      var newFirst = 0;
      var newLast = last;
      var isRangeChanged = false;

      if (isBoth) {
        var isScrollDown = this.lastScrollPos.top <= scrollTop;
        var isScrollRight = this.lastScrollPos.left <= scrollLeft;
        var currentIndex = {
          rows: calculateCurrentIndex(scrollTop, itemSize[0]),
          cols: calculateCurrentIndex(scrollLeft, itemSize[1])
        };
        var triggerIndex = {
          rows: calculateTriggerIndex(currentIndex.rows, first.rows, last.rows, numItemsInViewport.rows, numToleratedItems[0], isScrollDown),
          cols: calculateTriggerIndex(currentIndex.cols, first.cols, last.cols, numItemsInViewport.cols, numToleratedItems[1], isScrollRight)
        };
        newFirst = {
          rows: calculateFirst(currentIndex.rows, triggerIndex.rows, first.rows, last.rows, numItemsInViewport.rows, numToleratedItems[0], isScrollDown),
          cols: calculateFirst(currentIndex.cols, triggerIndex.cols, first.cols, last.cols, numItemsInViewport.cols, numToleratedItems[1], isScrollRight)
        };
        newLast = {
          rows: calculateLast(currentIndex.rows, newFirst.rows, last.rows, numItemsInViewport.rows, numToleratedItems[0]),
          cols: calculateLast(currentIndex.cols, newFirst.cols, last.cols, numItemsInViewport.cols, numToleratedItems[1], true)
        };
        isRangeChanged = newFirst.rows !== first.rows && newLast.rows !== last.rows || newFirst.cols !== first.cols && newLast.cols !== last.cols;
        this.lastScrollPos = {
          top: scrollTop,
          left: scrollLeft
        };
      } else {
        var scrollPos = isHorizontal ? scrollLeft : scrollTop;
        var isScrollDownOrRight = this.lastScrollPos <= scrollPos;

        var _currentIndex2 = calculateCurrentIndex(scrollPos, itemSize);

        var _triggerIndex2 = calculateTriggerIndex(_currentIndex2, first, last, numItemsInViewport, numToleratedItems, isScrollDownOrRight);

        newFirst = calculateFirst(_currentIndex2, _triggerIndex2, first, last, numItemsInViewport, numToleratedItems, isScrollDownOrRight);
        newLast = calculateLast(_currentIndex2, newFirst, last, numItemsInViewport, numToleratedItems);
        isRangeChanged = newFirst !== first && newLast !== last;
        this.lastScrollPos = scrollPos;
      }

      return {
        first: newFirst,
        last: newLast,
        isRangeChanged: isRangeChanged
      };
    }
  }, {
    key: "onScrollChange",
    value: function onScrollChange(event) {
      var _this9 = this;

      var _this$onScrollPositio = this.onScrollPositionChange(event),
          first = _this$onScrollPositio.first,
          last = _this$onScrollPositio.last,
          isRangeChanged = _this$onScrollPositio.isRangeChanged;

      if (isRangeChanged) {
        var newState = {
          first: first,
          last: last
        };
        this.setContentPosition(newState);
        this.setState(newState, function () {
          _this9.props.onScrollIndexChange && _this9.props.onScrollIndexChange(newState);

          if (_this9.props.lazy) {
            _this9.props.onLazyLoad && _this9.props.onLazyLoad(newState);
          }
        });
      }
    }
  }, {
    key: "onScroll",
    value: function onScroll(event) {
      var _this10 = this;

      this.props.onScroll && this.props.onScroll(event);

      if (this.props.delay) {
        if (this.scrollTimeout) {
          clearTimeout(this.scrollTimeout);
        }

        if (!this.state.loading && this.props.showLoader) {
          var _this$onScrollPositio2 = this.onScrollPositionChange(event),
              changed = _this$onScrollPositio2.isRangeChanged;

          changed && this.setState({
            loading: true
          });
        }

        this.scrollTimeout = setTimeout(function () {
          _this10.onScrollChange(event);

          if (_this10.state.loading && _this10.props.showLoader && !_this10.props.lazy) {
            _this10.setState({
              loading: false
            });
          }
        }, this.props.delay);
      } else {
        this.onScrollChange(event);
      }
    }
  }, {
    key: "getOptions",
    value: function getOptions(renderedIndex) {
      var first = this.state.first;
      var count = (this.props.items || []).length;
      var index = this.isBoth() ? first.rows + renderedIndex : first + renderedIndex;
      return {
        index: index,
        count: count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0,
        props: this.props
      };
    }
  }, {
    key: "loaderOptions",
    value: function loaderOptions(index, extOptions) {
      var count = this.state.loaderArr.length;
      return _objectSpread({
        index: index,
        count: count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0,
        props: this.props
      }, extOptions);
    }
  }, {
    key: "loadedItems",
    value: function loadedItems() {
      var _this11 = this;

      var items = this.props.items;

      if (items && !this.state.loading) {
        var isBoth = this.isBoth();
        var isHorizontal = this.isHorizontal();
        var _this$state3 = this.state,
            first = _this$state3.first,
            last = _this$state3.last;
        if (isBoth) return items.slice(first.rows, last.rows).map(function (item) {
          return _this11.props.columns ? item : item.slice(first.cols, last.cols);
        });else if (isHorizontal && this.props.columns) return items;else return items.slice(first, last);
      }

      return [];
    }
  }, {
    key: "isPropChanged",
    value: function isPropChanged(prevProps) {
      var _this12 = this;

      var props = ['itemSize', 'scrollHeight'];
      return props.some(function (p) {
        return !primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.equals(prevProps[p], _this12.props[p]);
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.setSize();
      this.calculateOptions();
      this.setSpacerSize();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevProps.items || prevProps.items.length !== (this.props.items || []).length || this.isPropChanged(prevProps)) {
        this.init();
      }

      if (this.props.lazy && prevProps.loading !== this.props.loading && this.state.loading !== this.props.loading) {
        this.setState({
          loading: this.props.loading
        });
      }

      if (prevProps.orientation !== this.props.orientation) {
        this.lastScrollPos = this.isBoth() ? {
          top: 0,
          left: 0
        } : 0;
      }
    }
  }, {
    key: "renderLoaderItem",
    value: function renderLoaderItem(index) {
      var extOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = this.loaderOptions(index, extOptions);
      var content = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.loadingTemplate, options);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: index
      }, content);
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      var _this13 = this;

      if (!this.props.loaderDisabled && this.props.showLoader && this.state.loading) {
        var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-virtualscroller-loader', {
          'p-component-overlay': !this.props.loadingTemplate
        });
        var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          className: "p-virtualscroller-loading-icon pi pi-spinner pi-spin"
        });

        if (this.props.loadingTemplate) {
          var isBoth = this.isBoth();
          var numItemsInViewport = this.state.numItemsInViewport;
          content = this.state.loaderArr.map(function (_, index) {
            return _this13.renderLoaderItem(index, isBoth && {
              numCols: numItemsInViewport.cols
            });
          });
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: className
        }, content);
      }

      return null;
    }
  }, {
    key: "renderSpacer",
    value: function renderSpacer() {
      var _this14 = this;

      if (this.props.showSpacer) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          ref: function ref(el) {
            return _this14.spacer = el;
          },
          className: "p-virtualscroller-spacer"
        });
      }

      return null;
    }
  }, {
    key: "renderItem",
    value: function renderItem(item, index) {
      var options = this.getOptions(index);
      var content = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.itemTemplate, item, options);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: options.index
      }, content);
    }
  }, {
    key: "renderItems",
    value: function renderItems(loadedItems) {
      var _this15 = this;

      return loadedItems.map(function (item, index) {
        return _this15.renderItem(item, index);
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this16 = this;

      var loadedItems = this.loadedItems();
      var items = this.renderItems(loadedItems);
      var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-virtualscroller-content', {
        'p-virtualscroller-loading': this.state.loading
      });
      var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: className,
        ref: function ref(el) {
          return _this16.content = el;
        }
      }, items);

      if (this.props.contentTemplate) {
        var defaultOptions = {
          className: className,
          contentRef: function contentRef(el) {
            return _this16.content = el;
          },
          spacerRef: function spacerRef(el) {
            return _this16.spacer = el;
          },
          stickyRef: function stickyRef(el) {
            return _this16.sticky = el;
          },
          items: loadedItems,
          getItemOptions: function getItemOptions(index) {
            return _this16.getOptions(index);
          },
          children: items,
          element: content,
          props: this.props,
          loading: this.state.loading,
          getLoaderOptions: function getLoaderOptions(index, ext) {
            return _this16.loaderOptions(index, ext);
          },
          loadingTemplate: this.props.loadingTemplate,
          itemSize: this.props.itemSize,
          rows: this.getRows(),
          columns: this.getColumns(),
          vertical: this.isVertical(),
          horizontal: this.isHorizontal(),
          both: this.isBoth()
        };
        return primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.contentTemplate, defaultOptions);
      }

      return content;
    }
  }, {
    key: "render",
    value: function render() {
      var _this17 = this;

      if (this.props.disabled) {
        var content = primereact_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getJSXElement(this.props.contentTemplate, {
          items: this.props.items,
          rows: this.props.items,
          columns: this.props.columns
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.props.children, content);
      } else {
        var isBoth = this.isBoth();
        var isHorizontal = this.isHorizontal();
        var className = (0,primereact_utils__WEBPACK_IMPORTED_MODULE_1__.classNames)('p-virtualscroller', {
          'p-both-scroll': isBoth,
          'p-horizontal-scroll': isHorizontal
        }, this.props.className);
        var loader = this.renderLoader();

        var _content = this.renderContent();

        var spacer = this.renderSpacer();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          ref: function ref(el) {
            return _this17.el = el;
          },
          className: className,
          tabIndex: 0,
          style: this.props.style,
          onScroll: this.onScroll
        }, _content, spacer, loader);
      }
    }
  }]);

  return VirtualScroller;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

_defineProperty(VirtualScroller, "defaultProps", {
  id: null,
  style: null,
  className: null,
  items: null,
  itemSize: 0,
  scrollHeight: null,
  scrollWidth: null,
  orientation: 'vertical',
  numToleratedItems: null,
  delay: 0,
  lazy: false,
  disabled: false,
  loaderDisabled: false,
  columns: null,
  loading: false,
  showSpacer: true,
  showLoader: false,
  loadingTemplate: null,
  itemTemplate: null,
  contentTemplate: null,
  onScroll: null,
  onScrollIndexChange: null,
  onLazyLoad: null
});




/***/ }),

/***/ "./node_modules/react-intl/lib/src/components/useIntl.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-intl/lib/src/components/useIntl.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useIntl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _injectIntl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injectIntl */ "./node_modules/react-intl/lib/src/components/injectIntl.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/react-intl/lib/src/utils.js");



function useIntl() {
    var intl = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_injectIntl__WEBPACK_IMPORTED_MODULE_1__.Context);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.invariantIntlContext)(intl);
    return intl;
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/ChevronRightIcon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/ChevronRightIcon.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ChevronRightIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 5l7 7-7 7"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronRightIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/EyeIcon.js":
/*!**************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/EyeIcon.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function EyeIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EyeIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/PencilIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/PencilIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function PencilIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PencilIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/TrashIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/TrashIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TrashIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(TrashIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);