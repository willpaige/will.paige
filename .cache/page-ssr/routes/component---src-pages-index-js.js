exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/components/code/code.module.scss":
/*!**********************************************!*\
  !*** ./src/components/code/code.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "codeBlock": () => (/* binding */ codeBlock),
/* harmony export */   "codeNoMarginLeft": () => (/* binding */ codeNoMarginLeft),
/* harmony export */   "codeTag": () => (/* binding */ codeTag)
/* harmony export */ });
// Exports
var codeTag = "code-module--codeTag--c6419";
var codeNoMarginLeft = "code-module--codeNoMarginLeft--1c3e9";
var codeBlock = "code-module--codeBlock--92254";


/***/ }),

/***/ "./src/components/content/content.module.scss":
/*!****************************************************!*\
  !*** ./src/components/content/content.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cambridgeBlue": () => (/* binding */ cambridgeBlue),
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "laurelGreen": () => (/* binding */ laurelGreen),
/* harmony export */   "noMargin": () => (/* binding */ noMargin),
/* harmony export */   "oldLavender": () => (/* binding */ oldLavender),
/* harmony export */   "taupeGray": () => (/* binding */ taupeGray),
/* harmony export */   "teaGreen": () => (/* binding */ teaGreen)
/* harmony export */ });
// Exports
var content = "content-module--content--8fbad";
var noMargin = "content-module--noMargin--924e7";
var teaGreen = "content-module--tea-green--81d98";
var laurelGreen = "content-module--laurel-green--78702";
var cambridgeBlue = "content-module--cambridge-blue--e18d3";
var taupeGray = "content-module--taupe-gray--25c2a";
var oldLavender = "content-module--old-lavender--d1fd9";


/***/ }),

/***/ "./src/components/footer/footer.module.scss":
/*!**************************************************!*\
  !*** ./src/components/footer/footer.module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "company": () => (/* binding */ company),
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "footerRow": () => (/* binding */ footerRow),
/* harmony export */   "jobDescription": () => (/* binding */ jobDescription),
/* harmony export */   "jobStart": () => (/* binding */ jobStart),
/* harmony export */   "jobTitle": () => (/* binding */ jobTitle),
/* harmony export */   "logoCol": () => (/* binding */ logoCol),
/* harmony export */   "roosterLogo": () => (/* binding */ roosterLogo)
/* harmony export */ });
// Exports
var footerRow = "footer-module--footerRow--b1baa";
var content = "footer-module--content--90752";
var roosterLogo = "footer-module--roosterLogo--39078";
var logoCol = "footer-module--logoCol--9cb14";
var company = "footer-module--company--95b97";
var jobTitle = "footer-module--jobTitle--91a34";
var jobStart = "footer-module--jobStart--d5d97";
var jobDescription = "footer-module--jobDescription--ebcdf";


/***/ }),

/***/ "./src/components/grid/col/col.module.scss":
/*!*************************************************!*\
  !*** ./src/components/grid/col/col.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "col": () => (/* binding */ col),
/* harmony export */   "extraLarge": () => (/* binding */ extraLarge),
/* harmony export */   "extraSmall": () => (/* binding */ extraSmall),
/* harmony export */   "large": () => (/* binding */ large),
/* harmony export */   "medium": () => (/* binding */ medium),
/* harmony export */   "small": () => (/* binding */ small)
/* harmony export */ });
// Exports
var col = "col-module--col--5ef10";
var extraSmall = "col-module--extra-small--4e10b";
var small = "col-module--small--a9b64";
var medium = "col-module--medium--27874";
var large = "col-module--large--70615";
var extraLarge = "col-module--extra-large--e84d5";


/***/ }),

/***/ "./src/components/grid/row/row.module.scss":
/*!*************************************************!*\
  !*** ./src/components/grid/row/row.module.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extraLarge": () => (/* binding */ extraLarge),
/* harmony export */   "extraSmall": () => (/* binding */ extraSmall),
/* harmony export */   "large": () => (/* binding */ large),
/* harmony export */   "medium": () => (/* binding */ medium),
/* harmony export */   "row": () => (/* binding */ row),
/* harmony export */   "small": () => (/* binding */ small)
/* harmony export */ });
// Exports
var row = "row-module--row--e59f0";
var extraSmall = "row-module--extra-small--a1700";
var small = "row-module--small--129b5";
var medium = "row-module--medium--51d1a";
var large = "row-module--large--31b7a";
var extraLarge = "row-module--extra-large--a8b05";


/***/ }),

/***/ "./src/components/hero/hero.module.scss":
/*!**********************************************!*\
  !*** ./src/components/hero/hero.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hero": () => (/* binding */ hero)
/* harmony export */ });
// Exports
var hero = "hero-module--hero--e83f2";


/***/ }),

/***/ "./src/components/hero/heroIndex/heroIndex.module.scss":
/*!*************************************************************!*\
  !*** ./src/components/hero/heroIndex/heroIndex.module.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animate": () => (/* binding */ animate),
/* harmony export */   "cambridgeBlue": () => (/* binding */ cambridgeBlue),
/* harmony export */   "heroDot": () => (/* binding */ heroDot),
/* harmony export */   "heroHello": () => (/* binding */ heroHello),
/* harmony export */   "heroImage": () => (/* binding */ heroImage),
/* harmony export */   "heroName": () => (/* binding */ heroName),
/* harmony export */   "heroSubText": () => (/* binding */ heroSubText),
/* harmony export */   "heroTitle": () => (/* binding */ heroTitle),
/* harmony export */   "laurelGreen": () => (/* binding */ laurelGreen),
/* harmony export */   "oldLavender": () => (/* binding */ oldLavender),
/* harmony export */   "taupeGray": () => (/* binding */ taupeGray),
/* harmony export */   "teaGreen": () => (/* binding */ teaGreen)
/* harmony export */ });
// Exports
var heroImage = "heroIndex-module--heroImage--3b5eb";
var heroTitle = "heroIndex-module--heroTitle--ef9cd";
var heroHello = "heroIndex-module--heroHello--e5ece";
var heroDot = "heroIndex-module--heroDot--eead8";
var heroName = "heroIndex-module--heroName--af404";
var heroSubText = "heroIndex-module--heroSubText--d5ddc";
var animate = "heroIndex-module--animate--bc7dc";
var teaGreen = "heroIndex-module--tea-green--98d0c";
var laurelGreen = "heroIndex-module--laurel-green--0cfb5";
var cambridgeBlue = "heroIndex-module--cambridge-blue--f720d";
var taupeGray = "heroIndex-module--taupe-gray--a0c26";
var oldLavender = "heroIndex-module--old-lavender--931f6";


/***/ }),

/***/ "./src/components/katie/katie.module.scss":
/*!************************************************!*\
  !*** ./src/components/katie/katie.module.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "avatar": () => (/* binding */ avatar),
/* harmony export */   "katieTitle": () => (/* binding */ katieTitle),
/* harmony export */   "katieUx": () => (/* binding */ katieUx)
/* harmony export */ });
// Exports
var katieUx = "katie-module--katieUx--b3de3";
var katieTitle = "katie-module--katieTitle--52647";
var avatar = "katie-module--avatar--a7040";


/***/ }),

/***/ "./src/components/navigation/navigation.module.scss":
/*!**********************************************************!*\
  !*** ./src/components/navigation/navigation.module.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "link": () => (/* binding */ link),
/* harmony export */   "linkIsActive": () => (/* binding */ linkIsActive),
/* harmony export */   "navigation": () => (/* binding */ navigation)
/* harmony export */ });
// Exports
var navigation = "navigation-module--navigation--a9ba7";
var link = "navigation-module--link--a23a7";
var linkIsActive = "navigation-module--linkIsActive--573d4";


/***/ }),

/***/ "./src/components/themeSwitch/themeSwitch.module.scss":
/*!************************************************************!*\
  !*** ./src/components/themeSwitch/themeSwitch.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "button": () => (/* binding */ button),
/* harmony export */   "cambridgeBlue": () => (/* binding */ cambridgeBlue),
/* harmony export */   "isActive": () => (/* binding */ isActive),
/* harmony export */   "laurelGreen": () => (/* binding */ laurelGreen),
/* harmony export */   "oldLavender": () => (/* binding */ oldLavender),
/* harmony export */   "taupeGray": () => (/* binding */ taupeGray),
/* harmony export */   "teaGreen": () => (/* binding */ teaGreen),
/* harmony export */   "themeSwitch": () => (/* binding */ themeSwitch)
/* harmony export */ });
// Exports
var themeSwitch = "themeSwitch-module--themeSwitch--5ade6";
var button = "themeSwitch-module--button--8ea01";
var isActive = "themeSwitch-module--isActive--53a1b";
var teaGreen = "themeSwitch-module--tea-green--fecc2";
var laurelGreen = "themeSwitch-module--laurel-green--4f44c";
var cambridgeBlue = "themeSwitch-module--cambridge-blue--afcb9";
var taupeGray = "themeSwitch-module--taupe-gray--f4777";
var oldLavender = "themeSwitch-module--old-lavender--af5b3";


/***/ }),

/***/ "./src/components/title/title.module.scss":
/*!************************************************!*\
  !*** ./src/components/title/title.module.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h1": () => (/* binding */ h1),
/* harmony export */   "h2": () => (/* binding */ h2),
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
// Exports
var title = "title-module--title--afad2";
var h1 = "title-module--h1--86d0c";
var h2 = "title-module--h2--d8413";


/***/ }),

/***/ "./src/components/wrapper/wrapper.module.scss":
/*!****************************************************!*\
  !*** ./src/components/wrapper/wrapper.module.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": () => (/* binding */ wrapper)
/* harmony export */ });
// Exports
var wrapper = "wrapper-module--wrapper--ac435";


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ B),
/* harmony export */   "MainImage": () => (/* binding */ z),
/* harmony export */   "Placeholder": () => (/* binding */ T),
/* harmony export */   "StaticImage": () => (/* binding */ V),
/* harmony export */   "generateImageData": () => (/* binding */ f),
/* harmony export */   "getImage": () => (/* binding */ M),
/* harmony export */   "getImageData": () => (/* binding */ x),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ m),
/* harmony export */   "getSrc": () => (/* binding */ S),
/* harmony export */   "getSrcSet": () => (/* binding */ N),
/* harmony export */   "withArtDirection": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = function (e) {
    return console.warn(e);
  },
  c = function (e, t) {
    return e - t;
  },
  h = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function g(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function p(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    d = e.formats,
    c = void 0 === d ? ["auto", "webp"] : d;
  return c = c.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: c,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || 1.3333333333333333))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / 1.3333333333333333) : 800), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: c
  }));
}
function m(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = p(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function f(e) {
  var t,
    a = (e = p(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    c = e.options,
    m = e.width,
    f = e.height,
    b = e.filename,
    k = e.reporter,
    E = void 0 === k ? {
      warn: d
    } : k,
    M = e.backgroundColor,
    S = e.placeholderURL;
  if (a || E.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = g(b)) : i = {
    width: m,
    height: f,
    format: (null == (t = i) ? void 0 : t.format) || g(b) || "auto"
  };
  var N = new Set(e.formats);
  (0 === N.size || N.has("auto") || N.has("")) && (N.delete("auto"), N.delete(""), N.add(i.format)), N.has("jpg") && N.has("png") && (E.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), N.delete("jpg" === i.format ? "png" : "jpg"));
  var x = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: d
        } : o,
        c = e.breakpoints,
        h = void 0 === c ? l : c,
        g = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (g.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + g.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          c = void 0 === u ? {
            warn: d
          } : u,
          h = a.width / a.height,
          g = v(void 0 === l ? s : l);
        if (i && r) {
          var p = y(a, {
            width: i,
            height: r,
            fit: o
          });
          i = p.width, r = p.height, h = p.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : 800;
        var m = i;
        if (a.width < i || a.height < r) {
          var f = a.width < i ? "width" : "height";
          c.warn("\nThe requested " + f + ' "' + ("width" === f ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + f + " of " + a[f] + "px. If possible, replace the current image with a larger one."), "width" === f ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: g.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: m,
          presentationHeight: Math.round(m / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? w(e) : "fullWidth" === i ? w(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    I = {
      sources: []
    },
    W = e.sizes;
  W || (W = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  }(x.presentationWidth, o)), N.forEach(function (e) {
    var t = x.sizes.map(function (t) {
      var i = r(b, t, Math.round(t / x.aspectRatio), e, u, c);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      E.warn("[" + a + "] The resolver for image " + b + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === x.unscaledWidth;
      }) || t[0];
      i && (I.fallback = {
        src: i.src,
        srcSet: h(t),
        sizes: W
      });
    } else {
      var n;
      null == (n = I.sources) || n.push({
        srcSet: h(t),
        sizes: W,
        type: "image/" + e
      });
    }
  });
  var j = {
    images: I,
    layout: o,
    backgroundColor: M
  };
  switch (S && (j.placeholder = {
    fallback: S
  }), o) {
    case "fixed":
      j.width = x.presentationWidth, j.height = x.presentationHeight;
      break;
    case "fullWidth":
      j.width = 1, j.height = 1 / x.aspectRatio;
      break;
    case "constrained":
      j.width = e.width || x.presentationWidth || 1, j.height = (j.width || 1) / x.aspectRatio;
  }
  return j;
}
var v = function (e) {
  return Array.from(new Set([1].concat(e))).sort(c);
};
function w(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    d = e.layout,
    h = a.width / a.height,
    g = v(void 0 === l ? s : l);
  if (i && r) {
    var p = y(a, {
      width: i,
      height: r,
      fit: o
    });
    i = p.width, r = p.height, h = p.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / h), i || (i = r * h);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== d || t.includes(i) || t.push(i), {
    sizes: t = t.sort(c),
    aspectRatio: h,
    presentationWidth: m,
    presentationHeight: Math.round(m / h),
    unscaledWidth: i
  };
}
function y(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var b = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  k = ["images", "placeholder"];
function E() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var M = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  S = function (e) {
    var t, a, i;
    return null == (t = M(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  N = function (e) {
    var t, a, i;
    return null == (t = M(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function x(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, b);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), f(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function I(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, k), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var W,
  j = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  R = ["fallback", "sources", "shouldLoad"],
  _ = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, j);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  A = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, R),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
_.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, A.displayName = "Picture", A.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var O = ["fallback"],
  T = function (t) {
    var a = t.fallback,
      i = o(t, O);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
T.displayName = "Placeholder", T.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (W = A.propTypes) ? void 0 : W.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var z = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, t, {
    shouldLoad: !0
  }))));
};
z.displayName = "MainImage", z.propTypes = A.propTypes;
var L = ["children"],
  q = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  C = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + i + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  D = function (a) {
    var i = a.children,
      r = o(a, L);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q, null));
  },
  P = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  H = ["style", "className"],
  F = function (e) {
    return e.replace(/\n/g, "");
  },
  B = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, P);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      M = u.placeholder,
      S = u.backgroundColor,
      N = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return E() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (E() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      x = N.style,
      I = N.className,
      W = o(N, H),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? F(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: F(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, x, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(T, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return E() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(M, 0, b, w, y, S, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), E() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  G = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  V = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, G);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(B),
  U = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  X = new Set(["fixed", "fullWidth", "constrained"]),
  Y = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: U,
    height: U,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !X.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
V.displayName = "StaticImage", V.propTypes = Y;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/node_modules/camelcase/index.js ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";


const preserveCamelCase = string => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;
  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
      string = string.slice(0, i) + '-' + string.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
      string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
    }
  }
  return string;
};
const camelCase = (input, options) => {
  if (!(typeof input === 'string' || Array.isArray(input))) {
    throw new TypeError('Expected the input to be `string | string[]`');
  }
  options = Object.assign({
    pascalCase: false
  }, options);
  const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;
  if (Array.isArray(input)) {
    input = input.map(x => x.trim()).filter(x => x.length).join('-');
  } else {
    input = input.trim();
  }
  if (input.length === 0) {
    return '';
  }
  if (input.length === 1) {
    return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
  }
  const hasUpperCase = input !== input.toLowerCase();
  if (hasUpperCase) {
    input = preserveCamelCase(input);
  }
  input = input.replace(/^[_.\- ]+/, '').toLowerCase().replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase()).replace(/\d+(\w|$)/g, m => m.toUpperCase());
  return postProcess(input);
};
module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;

/***/ }),

/***/ "./src/components/app/app.js":
/*!***********************************!*\
  !*** ./src/components/app/app.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.scss */ "./src/components/app/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/theme */ "./src/components/theme/theme.js");
/* harmony import */ var _wrapper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wrapper/wrapper */ "./src/components/wrapper/wrapper.js");
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation/navigation */ "./src/components/navigation/navigation.js");
/* harmony import */ var _themeSwitch_themeSwitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../themeSwitch/themeSwitch */ "./src/components/themeSwitch/themeSwitch.js");
/* harmony import */ var _constants_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/theme */ "./src/constants/theme.js");








function App(props) {
  const {
    children,
    theme,
    activePage
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_theme_theme__WEBPACK_IMPORTED_MODULE_2__["default"], {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wrapper_wrapper__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_themeSwitch_themeSwitch__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activePage: activePage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, children)));
}
App.defaultProps = {
  theme: _constants_theme__WEBPACK_IMPORTED_MODULE_6__.themeMap.TEA_GREEN
};
App.propTypes = {
  theme: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node.isRequired),
  activePage: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/content/content.js":
/*!*******************************************!*\
  !*** ./src/components/content/content.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _content_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.module.scss */ "./src/components/content/content.module.scss");
/* harmony import */ var _constants_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/theme */ "./src/constants/theme.js");
/* harmony import */ var _state_ui_ui_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/ui/ui-selectors */ "./src/state/ui/ui-selectors.js");







const contentThemes = {
  [_constants_theme__WEBPACK_IMPORTED_MODULE_4__.themeMap.TEA_GREEN]: _content_module_scss__WEBPACK_IMPORTED_MODULE_3__.teaGreen,
  [_constants_theme__WEBPACK_IMPORTED_MODULE_4__.themeMap.LAUREL_GREEN]: _content_module_scss__WEBPACK_IMPORTED_MODULE_3__.laurelGreen,
  [_constants_theme__WEBPACK_IMPORTED_MODULE_4__.themeMap.CAMBRIDGE_BLUE]: _content_module_scss__WEBPACK_IMPORTED_MODULE_3__.cambridgeBlue,
  [_constants_theme__WEBPACK_IMPORTED_MODULE_4__.themeMap.TAUPE_GRAY]: _content_module_scss__WEBPACK_IMPORTED_MODULE_3__.taupeGray,
  [_constants_theme__WEBPACK_IMPORTED_MODULE_4__.themeMap.OLD_LAVENDER]: _content_module_scss__WEBPACK_IMPORTED_MODULE_3__.oldLavender
};
function Content(props) {
  const {
    className,
    activeTheme,
    children,
    noHero
  } = props;
  const contentClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_content_module_scss__WEBPACK_IMPORTED_MODULE_3__.content, className, contentThemes[activeTheme], {
    [_content_module_scss__WEBPACK_IMPORTED_MODULE_3__.noMargin]: noHero
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: contentClassName
  }, children);
}
Content.defaultProps = {
  noHero: false,
  className: ''
};
Content.propTypes = {
  activeTheme: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  noHero: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(state => {
  return {
    activeTheme: (0,_state_ui_ui_selectors__WEBPACK_IMPORTED_MODULE_5__.getActiveTheme)(state)
  };
}, null)(Content));

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid_row_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grid/row/row */ "./src/components/grid/row/row.js");
/* harmony import */ var _grid_col_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid/col/col */ "./src/components/grid/col/col.js");
/* harmony import */ var _title_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../title/title */ "./src/components/title/title.js");
/* harmony import */ var _constants_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/grid */ "./src/constants/grid.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _code_code_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../code/code.module.scss */ "./src/components/code/code.module.scss");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer.module.scss */ "./src/components/footer/footer.module.scss");
/* harmony import */ var _katie_katie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../katie/katie */ "./src/components/katie/katie.js");










function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_7__.footerRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_row_row__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: _constants_grid__WEBPACK_IMPORTED_MODULE_4__.GridSize.SMALL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_col_col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: _constants_grid__WEBPACK_IMPORTED_MODULE_4__.GridSize.SMALL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_7__.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_title_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "h2"
  }, "Languages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Some, but not all, of the languages and associated technologies that I work with:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_row_row__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: _constants_grid__WEBPACK_IMPORTED_MODULE_4__.GridSize.EXTRA_SMALL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_col_col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: _constants_grid__WEBPACK_IMPORTED_MODULE_4__.GridSize.EXTRA_SMALL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _code_code_module_scss__WEBPACK_IMPORTED_MODULE_6__.codeBlock
  }, "javaScript = [", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xA0 react,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xA0 redux,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xA0 gatsbyJs,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xA0 webpack,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xA0 expressJs,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xA0 nodeJs,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xA0 backbone,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "];")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_col_col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: _constants_grid__WEBPACK_IMPORTED_MODULE_4__.GridSize.EXTRA_SMALL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _code_code_module_scss__WEBPACK_IMPORTED_MODULE_6__.codeBlock
  }, "php => array(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xA0 wordPress,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xA0 smarty", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), ");", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_col_col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: _constants_grid__WEBPACK_IMPORTED_MODULE_4__.GridSize.EXTRA_SMALL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _code_code_module_scss__WEBPACK_IMPORTED_MODULE_6__.codeBlock
  }, "css = [", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xA0 sass,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xA0 less,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xA0 css3,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "];", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_col_col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: _constants_grid__WEBPACK_IMPORTED_MODULE_4__.GridSize.EXTRA_SMALL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _code_code_module_scss__WEBPACK_IMPORTED_MODULE_6__.codeBlock
  }, "html = [", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xA0 html5,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\xA0 handlebars", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "];", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_row_row__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_7__.footerRow,
    size: _constants_grid__WEBPACK_IMPORTED_MODULE_4__.GridSize.SMALL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_col_col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: _constants_grid__WEBPACK_IMPORTED_MODULE_4__.GridSize.SMALL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_7__.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_title_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "h2"
  }, "This Website"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This website is built using the blazing fast", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    className: _code_code_module_scss__WEBPACK_IMPORTED_MODULE_6__.codeTag
  }, "GatsbyJs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_code_code_module_scss__WEBPACK_IMPORTED_MODULE_6__.codeTag, _code_code_module_scss__WEBPACK_IMPORTED_MODULE_6__.codeNoMarginLeft)
  }, "GatsbyJs"), ' ', "is an open source framework with performance, scalability and security built in. You'll notice that when navigating this site, pages will load instantaneously. Just how it should be."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "As well as GatsbyJs this website uses", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    className: _code_code_module_scss__WEBPACK_IMPORTED_MODULE_6__.codeTag
  }, "React"), ' ', "for building its interface and", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", {
    className: _code_code_module_scss__WEBPACK_IMPORTED_MODULE_6__.codeTag
  }, "Redux"), ' ', "for its state management."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_col_col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: _constants_grid__WEBPACK_IMPORTED_MODULE_4__.GridSize.SMALL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_7__.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_title_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "h2"
  }, "Current Employment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_row_row__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: _constants_grid__WEBPACK_IMPORTED_MODULE_4__.GridSize.EXTRA_SMALL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_col_col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_7__.logoCol,
    size: _constants_grid__WEBPACK_IMPORTED_MODULE_4__.GridSize.EXTRA_SMALL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_9__.StaticImage, {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_7__.roosterLogo,
    src: "../../images/natwest_rooster_money.png",
    alt: "NatWest Rooster Money",
    placeholder: "blurred",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/253970047.json */ "./.cache/caches/gatsby-plugin-image/253970047.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_col_col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: _constants_grid__WEBPACK_IMPORTED_MODULE_4__.GridSize.EXTRA_SMALL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_title_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_7__.company,
    type: "h3"
  }, "NatWest Rooster Money"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_7__.jobTitle
  }, "Senior Software Engineer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_7__.jobStart
  }, "November 2018 - Present"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _footer_module_scss__WEBPACK_IMPORTED_MODULE_7__.jobDescription
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Roostermoney is a fast-paced, fast-growing ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "fintech"), " that aims to teach kids the value of money. Aimed at 4 to 14-year-olds, Roostermoney helps graduate children through all the key milestones in learning about money. From using a star in the younger years teaching reward systems to introducing a payment card when they're older to teach responsible spending."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_katie_katie__WEBPACK_IMPORTED_MODULE_8__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/grid/col/col.js":
/*!****************************************!*\
  !*** ./src/components/grid/col/col.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/grid */ "./src/constants/grid.js");
/* harmony import */ var _col_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./col.module.scss */ "./src/components/grid/col/col.module.scss");





const gridMap = {
  [_constants_grid__WEBPACK_IMPORTED_MODULE_2__.GridSize.MEDIUM]: _col_module_scss__WEBPACK_IMPORTED_MODULE_3__.medium,
  [_constants_grid__WEBPACK_IMPORTED_MODULE_2__.GridSize.LARGE]: _col_module_scss__WEBPACK_IMPORTED_MODULE_3__.large,
  [_constants_grid__WEBPACK_IMPORTED_MODULE_2__.GridSize.EXTRA_LARGE]: _col_module_scss__WEBPACK_IMPORTED_MODULE_3__.extraLarge,
  [_constants_grid__WEBPACK_IMPORTED_MODULE_2__.GridSize.EXTRA_SMALL]: _col_module_scss__WEBPACK_IMPORTED_MODULE_3__.extraSmall,
  [_constants_grid__WEBPACK_IMPORTED_MODULE_2__.GridSize.SMALL]: _col_module_scss__WEBPACK_IMPORTED_MODULE_3__.small
};
function Col(props) {
  const {
    className,
    children,
    size
  } = props;
  const colClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, _col_module_scss__WEBPACK_IMPORTED_MODULE_3__.col, gridMap[size]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: colClass
  }, children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Col);
Col.defaultProps = {
  size: _constants_grid__WEBPACK_IMPORTED_MODULE_2__.GridSize.MEDIUM,
  className: ''
};
Col.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4__.node.isRequired
};

/***/ }),

/***/ "./src/components/grid/row/row.js":
/*!****************************************!*\
  !*** ./src/components/grid/row/row.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/grid */ "./src/constants/grid.js");
/* harmony import */ var _row_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./row.module.scss */ "./src/components/grid/row/row.module.scss");





const gridMap = {
  [_constants_grid__WEBPACK_IMPORTED_MODULE_2__.GridSize.MEDIUM]: _row_module_scss__WEBPACK_IMPORTED_MODULE_3__.medium,
  [_constants_grid__WEBPACK_IMPORTED_MODULE_2__.GridSize.LARGE]: _row_module_scss__WEBPACK_IMPORTED_MODULE_3__.large,
  [_constants_grid__WEBPACK_IMPORTED_MODULE_2__.GridSize.EXTRA_LARGE]: _row_module_scss__WEBPACK_IMPORTED_MODULE_3__.extraLarge,
  [_constants_grid__WEBPACK_IMPORTED_MODULE_2__.GridSize.EXTRA_SMALL]: _row_module_scss__WEBPACK_IMPORTED_MODULE_3__.extraSmall,
  [_constants_grid__WEBPACK_IMPORTED_MODULE_2__.GridSize.SMALL]: _row_module_scss__WEBPACK_IMPORTED_MODULE_3__.small
};
function Row(props) {
  const {
    className,
    children,
    size
  } = props;
  const rowClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, _row_module_scss__WEBPACK_IMPORTED_MODULE_3__.row, gridMap[size]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: rowClass
  }, children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);
Row.defaultProps = {
  size: _constants_grid__WEBPACK_IMPORTED_MODULE_2__.GridSize.MEDIUM,
  className: ''
};
Row.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_4__.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4__.node.isRequired
};

/***/ }),

/***/ "./src/components/hero/heroIndex/heroIndex.js":
/*!****************************************************!*\
  !*** ./src/components/hero/heroIndex/heroIndex.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _title_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../title/title */ "./src/components/title/title.js");
/* harmony import */ var _state_ui_ui_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../state/ui/ui-selectors */ "./src/state/ui/ui-selectors.js");
/* harmony import */ var _constants_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/theme */ "./src/constants/theme.js");
/* harmony import */ var _state_ui_ui_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../state/ui/ui-action */ "./src/state/ui/ui-action.js");
/* harmony import */ var _hero_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hero.module.scss */ "./src/components/hero/hero.module.scss");
/* harmony import */ var _heroIndex_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./heroIndex.module.scss */ "./src/components/hero/heroIndex/heroIndex.module.scss");











const contentThemes = {
  [_constants_theme__WEBPACK_IMPORTED_MODULE_5__.themeMap.TEA_GREEN]: _heroIndex_module_scss__WEBPACK_IMPORTED_MODULE_8__.teaGreen,
  [_constants_theme__WEBPACK_IMPORTED_MODULE_5__.themeMap.LAUREL_GREEN]: _heroIndex_module_scss__WEBPACK_IMPORTED_MODULE_8__.laurelGreen,
  [_constants_theme__WEBPACK_IMPORTED_MODULE_5__.themeMap.CAMBRIDGE_BLUE]: _heroIndex_module_scss__WEBPACK_IMPORTED_MODULE_8__.cambridgeBlue,
  [_constants_theme__WEBPACK_IMPORTED_MODULE_5__.themeMap.TAUPE_GRAY]: _heroIndex_module_scss__WEBPACK_IMPORTED_MODULE_8__.taupeGray,
  [_constants_theme__WEBPACK_IMPORTED_MODULE_5__.themeMap.OLD_LAVENDER]: _heroIndex_module_scss__WEBPACK_IMPORTED_MODULE_8__.oldLavender
};
function HeroIndex({
  activeTheme,
  dispatch
}) {
  const {
    0: disco,
    1: setDisco
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const activeThemeClass = contentThemes[activeTheme];
  const dotClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_heroIndex_module_scss__WEBPACK_IMPORTED_MODULE_8__.heroHello, _heroIndex_module_scss__WEBPACK_IMPORTED_MODULE_8__.heroDot, _heroIndex_module_scss__WEBPACK_IMPORTED_MODULE_8__.animate, activeThemeClass);
  const party = () => {
    let count = 0;
    setDisco(setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 11);
      count = (count + randomNumber) % Object.entries(_constants_theme__WEBPACK_IMPORTED_MODULE_5__.themeMap).length;
      const [newColour] = Object.entries(_constants_theme__WEBPACK_IMPORTED_MODULE_5__.themeMap)[count];
      dispatch((0,_state_ui_ui_action__WEBPACK_IMPORTED_MODULE_6__.setTheme)(_constants_theme__WEBPACK_IMPORTED_MODULE_5__.themeMap[newColour]));
    }, 115));
  };
  const endParty = () => {
    clearInterval(disco);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _hero_module_scss__WEBPACK_IMPORTED_MODULE_7__.hero
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_title_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _heroIndex_module_scss__WEBPACK_IMPORTED_MODULE_8__.heroTitle,
    type: "h1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _heroIndex_module_scss__WEBPACK_IMPORTED_MODULE_8__.heroHello
  }, "Hello"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: dotClass,
    onMouseEnter: () => party(),
    onMouseLeave: () => endParty()
  }, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _heroIndex_module_scss__WEBPACK_IMPORTED_MODULE_8__.heroName
  }, "I'm Will"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: _heroIndex_module_scss__WEBPACK_IMPORTED_MODULE_8__.heroSubText
  }, "A senior", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", {
    className: activeThemeClass
  }, " software engineer."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_9__.StaticImage, {
    className: _heroIndex_module_scss__WEBPACK_IMPORTED_MODULE_8__.heroImage,
    src: "../../../images/will_paige_software_engineer.png",
    alt: "Will Paige Software Engineer",
    placeholder: "blurred",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3446588561.json */ "./.cache/caches/gatsby-plugin-image/3446588561.json")
  }));
}
HeroIndex.propTypes = {
  activeTheme: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired),
  dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(state => {
  return {
    activeTheme: (0,_state_ui_ui_selectors__WEBPACK_IMPORTED_MODULE_4__.getActiveTheme)(state)
  };
}, null)(HeroIndex));

/***/ }),

/***/ "./src/components/katie/katie.js":
/*!***************************************!*\
  !*** ./src/components/katie/katie.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _katie_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./katie.module.scss */ "./src/components/katie/katie.module.scss");
/* harmony import */ var _title_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../title/title */ "./src/components/title/title.js");




function Katie() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _katie_module_scss__WEBPACK_IMPORTED_MODULE_1__.katieUx
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_title_title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _katie_module_scss__WEBPACK_IMPORTED_MODULE_1__.katieTitle,
    type: "h5"
  }, "Looking for an awesome UX designer?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Checkout", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://katie.paige.me.uk"
  }, "Katie Paige")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://katie.paige.me.uk"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.StaticImage, {
    className: _katie_module_scss__WEBPACK_IMPORTED_MODULE_1__.avatar,
    src: "../../images/katie_paige_ux_designer.png",
    alt: "Katie Paige UX",
    placeholder: "blurred",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1947747140.json */ "./.cache/caches/gatsby-plugin-image/1947747140.json")
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Katie);

/***/ }),

/***/ "./src/components/navigation/navigation.js":
/*!*************************************************!*\
  !*** ./src/components/navigation/navigation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _navigation_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.module.scss */ "./src/components/navigation/navigation.module.scss");
/* harmony import */ var _constants_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/theme */ "./src/constants/theme.js");
/* harmony import */ var _constants_pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/pages */ "./src/constants/pages.js");







const links = {
  [_constants_pages__WEBPACK_IMPORTED_MODULE_5__.PAGES.HOME]: {
    title: 'Home',
    url: '/'
  },
  [_constants_pages__WEBPACK_IMPORTED_MODULE_5__.PAGES.ABOUT]: {
    title: 'About',
    url: '/about/'
  },
  [_constants_pages__WEBPACK_IMPORTED_MODULE_5__.PAGES.WORK]: {
    title: 'Work',
    url: '/work/'
  },
  [_constants_pages__WEBPACK_IMPORTED_MODULE_5__.PAGES.EDUCATION]: {
    title: 'Education',
    url: '/education/'
  },
  [_constants_pages__WEBPACK_IMPORTED_MODULE_5__.PAGES.SERVICES]: {
    title: 'Services',
    url: '/services/'
  },
  [_constants_pages__WEBPACK_IMPORTED_MODULE_5__.PAGES.CONTACT]: {
    title: 'Contact',
    url: '/contact/'
  }
};
function Navigation(props) {
  const {
    activePage
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_3__.navigation
  }, Object.keys(links).map(key => {
    const content = links[key];
    const isActive = activePage === key;
    const linkClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_navigation_module_scss__WEBPACK_IMPORTED_MODULE_3__.link, isActive ? _navigation_module_scss__WEBPACK_IMPORTED_MODULE_3__.linkIsActive : '');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: linkClass,
      title: content.title,
      to: content.url,
      key: content.url
    }, content.title);
  }));
}
Navigation.propTypes = {
  activePage: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./src/components/theme/theme.js":
/*!***************************************!*\
  !*** ./src/components/theme/theme.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_ui_ui_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/ui/ui-action */ "./src/state/ui/ui-action.js");



const Theme = ({
  theme,
  dispatch,
  children
}) => {
  dispatch((0,_state_ui_ui_action__WEBPACK_IMPORTED_MODULE_2__.setTheme)(theme));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)()(Theme));

/***/ }),

/***/ "./src/components/themeSwitch/themeSwitch.js":
/*!***************************************************!*\
  !*** ./src/components/themeSwitch/themeSwitch.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/theme */ "./src/constants/theme.js");
/* harmony import */ var _themeSwitch_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themeSwitch.module.scss */ "./src/components/themeSwitch/themeSwitch.module.scss");
/* harmony import */ var _state_ui_ui_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/ui/ui-action */ "./src/state/ui/ui-action.js");
/* harmony import */ var _state_ui_ui_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state/ui/ui-selectors */ "./src/state/ui/ui-selectors.js");








const buttonThemes = {
  [_constants_theme__WEBPACK_IMPORTED_MODULE_3__.themeMap.TEA_GREEN]: _themeSwitch_module_scss__WEBPACK_IMPORTED_MODULE_4__.teaGreen,
  [_constants_theme__WEBPACK_IMPORTED_MODULE_3__.themeMap.LAUREL_GREEN]: _themeSwitch_module_scss__WEBPACK_IMPORTED_MODULE_4__.laurelGreen,
  [_constants_theme__WEBPACK_IMPORTED_MODULE_3__.themeMap.CAMBRIDGE_BLUE]: _themeSwitch_module_scss__WEBPACK_IMPORTED_MODULE_4__.cambridgeBlue,
  [_constants_theme__WEBPACK_IMPORTED_MODULE_3__.themeMap.TAUPE_GRAY]: _themeSwitch_module_scss__WEBPACK_IMPORTED_MODULE_4__.taupeGray,
  [_constants_theme__WEBPACK_IMPORTED_MODULE_3__.themeMap.OLD_LAVENDER]: _themeSwitch_module_scss__WEBPACK_IMPORTED_MODULE_4__.oldLavender
};
function ThemeSwitch({
  activeTheme,
  dispatch
}) {
  const setActiveTheme = theme => {
    dispatch((0,_state_ui_ui_action__WEBPACK_IMPORTED_MODULE_5__.setTheme)(theme));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _themeSwitch_module_scss__WEBPACK_IMPORTED_MODULE_4__.themeSwitch
  }, Object.keys(_constants_theme__WEBPACK_IMPORTED_MODULE_3__.themeMap).map(key => {
    const theme = _constants_theme__WEBPACK_IMPORTED_MODULE_3__.themeMap[key];
    const isActiveTheme = theme === activeTheme;
    const themeClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_themeSwitch_module_scss__WEBPACK_IMPORTED_MODULE_4__.button, buttonThemes[theme], isActiveTheme ? _themeSwitch_module_scss__WEBPACK_IMPORTED_MODULE_4__.isActive : null);
    return (
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/control-has-associated-label
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: themeClass,
        onClick: () => {
          return setActiveTheme(theme);
        },
        key: key
      })
    );
  }));
}
ThemeSwitch.propTypes = {
  activeTheme: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired),
  dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(state => {
  return {
    activeTheme: (0,_state_ui_ui_selectors__WEBPACK_IMPORTED_MODULE_6__.getActiveTheme)(state)
  };
}, null)(ThemeSwitch));

/***/ }),

/***/ "./src/components/title/title.js":
/*!***************************************!*\
  !*** ./src/components/title/title.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _title_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title.module.scss */ "./src/components/title/title.module.scss");




const titleStyles = {
  h1: _title_module_scss__WEBPACK_IMPORTED_MODULE_2__.h1,
  h2: _title_module_scss__WEBPACK_IMPORTED_MODULE_2__.h2,
  h3: _title_module_scss__WEBPACK_IMPORTED_MODULE_2__.h3,
  h4: _title_module_scss__WEBPACK_IMPORTED_MODULE_2__.h4,
  h5: _title_module_scss__WEBPACK_IMPORTED_MODULE_2__.h5,
  h6: _title_module_scss__WEBPACK_IMPORTED_MODULE_2__.h6
};
const getTitle = (type, titleClasses, children) => {
  let elem;
  switch (type) {
    case 'h1':
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
        className: titleClasses
      }, children);
      break;
    case 'h3':
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
        className: titleClasses
      }, children);
      break;
    case 'h4':
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
        className: titleClasses
      }, children);
      break;
    case 'h5':
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
        className: titleClasses
      }, children);
      break;
    case 'h6':
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
        className: titleClasses
      }, children);
      break;
    default:
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: titleClasses
      }, children);
      break;
  }
  return elem;
};
function Title(props) {
  const {
    type,
    className,
    children
  } = props;
  const titleClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, _title_module_scss__WEBPACK_IMPORTED_MODULE_2__.title, titleStyles[type]);
  return getTitle(type, titleClasses, children);
}
Title.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "./src/components/wrapper/wrapper.js":
/*!*******************************************!*\
  !*** ./src/components/wrapper/wrapper.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper.module.scss */ "./src/components/wrapper/wrapper.module.scss");


const Wrapper = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _wrapper_module_scss__WEBPACK_IMPORTED_MODULE_1__.wrapper
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

/***/ }),

/***/ "./src/constants/grid.js":
/*!*******************************!*\
  !*** ./src/constants/grid.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridSize": () => (/* binding */ GridSize)
/* harmony export */ });
const GridSize = {
  EXTRA_SMALL: 'extraSmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extraLarge'
};

/***/ }),

/***/ "./src/constants/pages.js":
/*!********************************!*\
  !*** ./src/constants/pages.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGES": () => (/* binding */ PAGES)
/* harmony export */ });
const PAGES = {
  HOME: 'home',
  ABOUT: 'about',
  WORK: 'work',
  EDUCATION: 'education',
  SERVICES: 'services',
  CONTACT: 'contact'
};

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_app_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/app/app */ "./src/components/app/app.js");
/* harmony import */ var _components_content_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/content/content */ "./src/components/content/content.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer/footer */ "./src/components/footer/footer.js");
/* harmony import */ var _components_hero_heroIndex_heroIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hero/heroIndex/heroIndex */ "./src/components/hero/heroIndex/heroIndex.js");
/* harmony import */ var _constants_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/theme */ "./src/constants/theme.js");
/* harmony import */ var _constants_pages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/pages */ "./src/constants/pages.js");







function IndexPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_app_app__WEBPACK_IMPORTED_MODULE_1__["default"], {
    theme: _constants_theme__WEBPACK_IMPORTED_MODULE_5__.themeMap.TEA_GREEN,
    activePage: _constants_pages__WEBPACK_IMPORTED_MODULE_6__.PAGES.HOME
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_hero_heroIndex_heroIndex__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_content_content__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "lead"
  }, "My name is ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "Will Paige"), " and I am a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "Senior Software Engineer"), " with over ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "ten years experience"), " in both startup and corporate organisations, in-house and remotely. I am a highly skilled and experienced developer with a specialist interest in frontend technologies, mobile-first design, architecture, web performance, usability and functionality."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "A couple of personal things about me:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "I'm", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, " UK based "), "and lucky enough to live and work from the picturesque", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "South Devon")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "I live with my wife", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://katie.paige.me.uk/"
  }, "Katie"), ' ', "\uD83D\uDC51, Son Seb \uD83D\uDC66, Dog Woody \uD83D\uDC15 and Cat Mia \uD83D\uDC08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "I'm an avid downhill mountain biker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "I'm a surfer, and I love the sea"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "I'm a snowboarder")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_footer_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
function Head() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Will Paige | Software Engineer");
}

/***/ }),

/***/ "./src/state/ui/ui-selectors.js":
/*!**************************************!*\
  !*** ./src/state/ui/ui-selectors.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getActiveTheme": () => (/* binding */ getActiveTheme)
/* harmony export */ });
// export const isTrayActive = state => state.ui.tray

const getActiveTheme = state => state.ui.theme;

/***/ }),

/***/ "./src/components/app/app.scss":
/*!*************************************!*\
  !*** ./src/components/app/app.scss ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1947747140.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1947747140.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD30lEQVQ4y12SvU/yahiHG5dXREIJENCqSKEtJHydKlKKtDaogNDS9oHyjWIccHDQxMTEGF3ZNNHExI84qGjUaDAaFxNHBxeNcfCveSM9x+Fc+/X8fvd9P5DnP3w+XyAQCIfDo6OjPp+PpmmSJKPRqKIoxWKxVCpVOlSr1dnZ2Xq9vrCwADmdTrSD3W73er25XK5er/v9fp/P5/f7XS4XTdOKohQKhd8nVH9+fh6y2WxDQ0MIgthsNlmW7+/v397eNjY2aJqmKCoQCIRCIZ7n8x0KhYLq12q1ubk5CEGQ/v5+k8nk8/m2t7e/vr4+Pj4eHx8BAAzDUBRF03QikcjlcqpcKBTK5XK1Wv2R+/r6zB1isdjV1dX39/fn5+fLy8vi4qIgCDRNsywbj8dFUfz1i8WiGg5ZLBaDwWCz2bLZ7Orq6u3t7fv7+83NzfLycj6fj0QiHMclk0kAgKIo//Mhk8kEwzCGYY1G4+zs7PLy8vr6utlsKoqSTqcjkUg8Hp+enpYkqVQqZbPZXC6nlv+RjUajXq/HcXx9ff319bXdbu/t7Z2fnzcaDa/XS1GUKIoMw0iSVK1WAQDZbFZdfqlUggwGg06nc7lcS0tLz8/P7XZ7f3//6elpd3eXoqhoNAoAYFlWkqRarSaK4m94sViEYBjWarUOh0OW5VardXBwcHR0dHd3t7OzwzBMOBwGAExMTKRSqWq1yvO8LMvZbFadHNLpdBqNBsdxjuMODw8fHh6Oj49brdbm5iZJkm63O5FIcBzHsmy5XBYEQQ1Xm0NarVaj0WAYpiiKJEknJyenp6fNZnN2dhbHcYIgxsfH/+kAAJAkKZPJqJv/N7m7uxtBEFEUSZJsNBrtdvvi4mJlZSUUCnEcx/O82+1GEITn+UqlkslkfptDPT09Wq0WhuGRkRGPx8Oy7NbW1tra2tjYGMdx6XQ6n8/7/f7e3t6pqam5ublMJiNJktr8JxnuwPM8wzAajcZoNOp0uj9//mAYxjAMACCZTHZ1dZEkKcvyzMyMKIoAgFwu97Ntq9Vqs9lSqRTLskajEUXRwcFBGIYdDgdN0wCASqVisVgwDEun06lU6rc5ZDabURT1er0kSRIEMTw8jOM4iqJmszkYDAqCUC6Xi8Uiy7IIgkxOTqq/TZIkAACEYZjf7x8YGMAwDEVRgiCwDgiCOJ1Odc7R0VFRFPV6Pd1BlmVBEH7kdDrt8XgsFovD4cBxHMMwgiDUcKvVGgwG6/U6QRCxWMxqtZIkyTCMKouiCNVqNRRF1WSn06neFsdxl8tlt9sHBgYoivJ6vbFYzOFwkCSZSCQymYzQ4S+UgViMNa4y4wAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/eca636b20da96b4bab1800247eda34b2/82c11/katie_paige_ux_designer.png","srcSet":"/static/eca636b20da96b4bab1800247eda34b2/2fd20/katie_paige_ux_designer.png 125w,\\n/static/eca636b20da96b4bab1800247eda34b2/de391/katie_paige_ux_designer.png 250w,\\n/static/eca636b20da96b4bab1800247eda34b2/82c11/katie_paige_ux_designer.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/static/eca636b20da96b4bab1800247eda34b2/d66e1/katie_paige_ux_designer.webp 125w,\\n/static/eca636b20da96b4bab1800247eda34b2/e7160/katie_paige_ux_designer.webp 250w,\\n/static/eca636b20da96b4bab1800247eda34b2/5f169/katie_paige_ux_designer.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":500}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/253970047.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/253970047.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiElEQVQ4y43S70sTcRwH8P0j80fu5t1pRiaY07tZahSt/bjppXffu9ttalkWSVLp7tdGST0RH/k4HwkRgSA9iElu6qrZMvBRQYGBgv1yOrTa5r4xFaO5K+Hz6MvnBe/P5/M1MKh8+GJRGWASbVYcJrWz0m84JAOYzGJSm1lxmtSeqsHx5mtLHR7D4ZjsRlQKUfqO35k4e2UVCCkvuyWC/2MKUVvNir/mVsh2eY3n0z52XeB+iCBk6/kX7iiXGUS5e7I/6uhOekDKy64L4BvPbQjgM+CvVg3o43KZOSpNcZ5fPEj52ATPrfFcQuC+81zay46duu40qbq43SyLVYNfnrQs37Cv0nzSyyeEnN8SwXvay2G5XAadJUm0WQXH1I1QUypELAoXlmlm08uv8dxPkX1Qd9OFqACTDAcuKbGoTGFBFvGP1FCpZw0wRiYnGmNttnduOu1j5+yXWs0Ku9Ocjyk02IZq93FPDKleqCtOPyeyESt8RSTGT0ft5xcpqv/E7cK4A5VVtHMOr12pOLJkKnvbhKXDJJwlt6dJGCOSDxuHa7uoncDMQdyOKsMYE8NrPlUiK2UlH21oZpbMzuQqE7bCuOWpxriKA2xBzKCyCw3SqDaA9zwuPfOBrs6+ILORfU/CuGW8T3AYAwCXCmCA5l5pXDtXdG8UdMH5+kzYuou3I2QmQsJY/ajY7TAGuAqp8Kl43O8waqO+bhi37ONdn50lMnPEkKvXWRQojDlcshuDY70iXKhLT//BOR+2wmjD5lTjQEufzifBJUdR4FE/D9/k473lvWz4Otmsi53FgUmZgXFLOpyP9/JHCV1MlWhTQxfh679mzvOFMYtJ7lLtxYgbzuvi7Az5GxbdC/9CfNFQAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/0d14f67df77e0427f89cec08375bf41c/bd5e2/natwest_rooster_money.png","srcSet":"/static/0d14f67df77e0427f89cec08375bf41c/fcdb9/natwest_rooster_money.png 48w,\\n/static/0d14f67df77e0427f89cec08375bf41c/e3fe2/natwest_rooster_money.png 96w,\\n/static/0d14f67df77e0427f89cec08375bf41c/bd5e2/natwest_rooster_money.png 192w","sizes":"(min-width: 192px) 192px, 100vw"},"sources":[{"srcSet":"/static/0d14f67df77e0427f89cec08375bf41c/e78b1/natwest_rooster_money.webp 48w,\\n/static/0d14f67df77e0427f89cec08375bf41c/8ef24/natwest_rooster_money.webp 96w,\\n/static/0d14f67df77e0427f89cec08375bf41c/694c3/natwest_rooster_money.webp 192w","type":"image/webp","sizes":"(min-width: 192px) 192px, 100vw"}]},"width":192,"height":192}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3446588561.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3446588561.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGTElEQVQ4yz2V2VPT6xmAf/9I79q7dqZnOr3p9EzH0elMT3tmytiZo52jdTl6REblKG7siMhiIqKAQEiABAKBBJAAgQiE9ZCFAFmAEBKyEkJYlCWiqHk6pMvFM9/d8y7f976fcLNKT5thgZnldSbsQbyRt0w5gnjDO+y+P2Lj7Xu8a28Jx/bwRffZ//CZ3YNDtnY/Et6KM7uyiSv4jvDmAZ61XYQHUgPZTWOI1EbkbxwMmr2oxxaTcldwOxlgN37ETvwz3hUf49oBhnp0uBeX6ZqJUKhdQTe7xmpkj8nFGEJh6zSVPVbkejt90x4mbEGmnWEm7UG0U24mbAGcvi38gTVMahUtlVJamtT0tHXS0zNMTtcSD7tXqB8LcLHZiVDbP49UZ0NvXmXRt0ns7fskka0DXIFNFv0xQhvvCM6OM9rWRmdrFzqNls6GVhqevqSiScfZVg8pMjsnJTaEyHackdkAk/ZQUhQ/+sLBx/+wtXtIIBZnez3I8mgvOlU3PXIVBqWKCbkCWU4hmfeKOa9y89emRU5IHQjHTT8muLHH3uGnZNOPz2OOpdHtffxOK/axIfTaQSa7XqOvk9L//AWvC/LJzXxKisrHqcYlfl/vRLC6N4h//EL8KMH+4Wf2j6X/42OCvfgHttxW/CYDtskplsbH6JcqUIqqaXkiIqPewMm2ECfly5xUrCDUDjixr27xLn70/8yOZQdHsHd4xGbQR2xlgdDCHL1aPaJKJU9K6lCIKmnVjHFtYIdvO0KcUq7ydbMXQaJ3YVxcTz6Nw0+J/5b8mc2NKGHXAv45Cwtz8+gNRtQDRtRvrNwUtfHt1XxKdV4u6ff4c3uI3yq8/FLmRmgYcdNnDhDY2CO8Hefd4Rf29+MEZn5mdXaGZacD06wDTecgL+s6eCrr5kaRlK/PZ3K+ZpzvOkOc7grzVfMqv2pYQei3hhl1rDO1tIHZvYktuEckGGHJNJ3MbN48w+vBCVRNHbwsfEbG9ftk/JDOd2fS+GNKGukVr7nYu87vlH5+Lfci6OcjvNQtIx32MOKIshSJ45hdYMZgYNzsoGNgkmZVH201jahLRWhLSnmS+hN3zqXyhxNnSWs08VV7lF/IVvhN8yrC8TwO2taxeLbZ2T9iP/6BoeEpqiQdKLqHqVP2oWvvQllRS8WDR0gyc8m9dpvq+zlcv5hOq8FJiekdhWMxvulcQ5h3B/FHtth4G09exsGHTwx19VJdIKbyeSPl1a0Mtmkwtijpr6qjW1zB64ICJqoqKUy7R1FZPV8+HQ/BEVmGKILaMIN2Yp4pmwdPKMb+ERg7u5E9zKEor4KUGyXkFDzHVC9Bkyy5DPm9B2gKHnHqxBkupZcxMudPTDtDmH3xhKAZtaKdtKGbdjBsXmBj9wMukxn9yxfI8oooSs8k9cf71GQ/QpL7iF5RMfV37pL1wy1On0hhQCanpd/CG9NyYt67hdDUP0XbkCkptCz62d47xNqrY0zagCwrn+qr1yi8coML/0xDeu8h2ryHSDPucvqb8+SePoPq1lVM7e0J15SRmzfzEoLVFWB83p2UHS+D1fAmP6vUjNXUIst5xI8p5yi9cBVZYRnFt7PJvpDKmZRL/P1PKVSfO0v55SuJqhvpiVGRGOmzrIQQ2znA5Y+ysBrB6Vlj1hPGOqBnUiJBXfyU7+8U8LfLd5HnP8ZeVU7pTw+5/P0NGjPzyD37L1IvpZN94XpiqOgxFnl1QhieWcJgXUJvdDLt9GJYCWLs02GolTBS/YqyIjFnKxrJENcgz8+j6kEWHaViLHW1PHslJ7X4Fef/cgbRlbTEdOULBJvbx9JqEF84ypR3DcWcB31rBxN1EkZqalGWislv7UE8OE62ZpCbWSUoy8qxKOT0O92IFRru/+NcQp5xl7HSxwlhbtGLJxBhLriB2u5DYvXQ2KRiqqYGQ00N7aJySjp1KC0OuhxutHoD0y3NzE5OMuDyoZpZ4HbafdR3bjH8OBchuL6F2R+lw+GnweKi2rhAfpMG3YtKTDIZreLnFGv6aTTO0z3vwhyMYF7xYQuuY/aGsfijdGnfoM64RV/mbQRbKIZueY12ux+ZxYV42EhaXRvVRWLszQo6yl/wvHMQg93DzHII//oOwdhu8lv1hrZx+KJYvWEUrxpoun6VfwNpeN6yS2JmwgAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/e82ba2edd5e44daecaa38d9863a61b0e/e5c6f/will_paige_software_engineer.png","srcSet":"/static/e82ba2edd5e44daecaa38d9863a61b0e/4f770/will_paige_software_engineer.png 200w,\\n/static/e82ba2edd5e44daecaa38d9863a61b0e/5268b/will_paige_software_engineer.png 400w,\\n/static/e82ba2edd5e44daecaa38d9863a61b0e/e5c6f/will_paige_software_engineer.png 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/e82ba2edd5e44daecaa38d9863a61b0e/09442/will_paige_software_engineer.webp 200w,\\n/static/e82ba2edd5e44daecaa38d9863a61b0e/de244/will_paige_software_engineer.webp 400w,\\n/static/e82ba2edd5e44daecaa38d9863a61b0e/b04eb/will_paige_software_engineer.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":945}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map