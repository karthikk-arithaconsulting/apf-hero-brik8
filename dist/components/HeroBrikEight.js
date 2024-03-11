/* eslint-disable react/prop-types */
import { Title, Text } from "@apf/core";
import React from "react";
import "./HeroBrikEight.css";
import "@apf/core/dist/style.css";
function HeroBrikEight(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
    var backgroundImage = props.data.data.find(function (item) { var _a, _b; return ((_a = item === null || item === void 0 ? void 0 : item.content) === null || _a === void 0 ? void 0 : _a.type) === "img" && ((_b = item === null || item === void 0 ? void 0 : item.content) === null || _b === void 0 ? void 0 : _b.for) === "background Image"; });
    var brikImg = props.data.data.find(function (item) { var _a, _b; return ((_a = item === null || item === void 0 ? void 0 : item.content) === null || _a === void 0 ? void 0 : _a.type) === "img" && ((_b = item === null || item === void 0 ? void 0 : item.content) === null || _b === void 0 ? void 0 : _b.for) === "brikImg"; });
    var mainTitle = props.data.data.find(function (item) { var _a, _b; return ((_a = item === null || item === void 0 ? void 0 : item.content) === null || _a === void 0 ? void 0 : _a.type) === "title" && ((_b = item === null || item === void 0 ? void 0 : item.content) === null || _b === void 0 ? void 0 : _b.for) === "main title"; });
    var subTextOne = props.data.data.find(function (item) { var _a, _b; return ((_a = item === null || item === void 0 ? void 0 : item.content) === null || _a === void 0 ? void 0 : _a.type) === "subtext" && ((_b = item === null || item === void 0 ? void 0 : item.content) === null || _b === void 0 ? void 0 : _b.for) === "sub textOne"; });
    var subTextTwo = props.data.data.find(function (item) { var _a, _b; return ((_a = item === null || item === void 0 ? void 0 : item.content) === null || _a === void 0 ? void 0 : _a.type) === "subtext" && ((_b = item === null || item === void 0 ? void 0 : item.content) === null || _b === void 0 ? void 0 : _b.for) === "sub textTwo"; });
    return (React.createElement("div", { className: "brik-Container" },
        React.createElement("div", { className: "backgroundImage" }, backgroundImage &&
            backgroundImage.content.src &&
            (backgroundImage === null || backgroundImage === void 0 ? void 0 : backgroundImage.display) === "block" && (React.createElement("img", { src: backgroundImage.content.src, className: "backgroundImageTag" }))),
        React.createElement("div", { className: "brik-body" },
            React.createElement("div", { className: "section-1" },
                mainTitle && (mainTitle === null || mainTitle === void 0 ? void 0 : mainTitle.display) === "block" && (React.createElement("div", { className: "title-div" },
                    React.createElement(Title, { c: (_b = (_a = mainTitle === null || mainTitle === void 0 ? void 0 : mainTitle.style) === null || _a === void 0 ? void 0 : _a.font) === null || _b === void 0 ? void 0 : _b.color, fz: (_d = (_c = mainTitle === null || mainTitle === void 0 ? void 0 : mainTitle.style) === null || _c === void 0 ? void 0 : _c.font) === null || _d === void 0 ? void 0 : _d.size, style: { fontFamily: (_f = (_e = mainTitle === null || mainTitle === void 0 ? void 0 : mainTitle.style) === null || _e === void 0 ? void 0 : _e.font) === null || _f === void 0 ? void 0 : _f.family }, fw: (_h = (_g = mainTitle === null || mainTitle === void 0 ? void 0 : mainTitle.style) === null || _g === void 0 ? void 0 : _g.font) === null || _h === void 0 ? void 0 : _h.weight, className: "titleTag" }, (_j = mainTitle === null || mainTitle === void 0 ? void 0 : mainTitle.content) === null || _j === void 0 ? void 0 : _j.value))),
                subTextOne && (subTextOne === null || subTextOne === void 0 ? void 0 : subTextOne.display) === "block" && (React.createElement("div", { className: "subtext-1-div" },
                    React.createElement(Text, { c: (_k = subTextOne === null || subTextOne === void 0 ? void 0 : subTextOne.style) === null || _k === void 0 ? void 0 : _k.font.color, fz: (_m = (_l = subTextOne === null || subTextOne === void 0 ? void 0 : subTextOne.style) === null || _l === void 0 ? void 0 : _l.font) === null || _m === void 0 ? void 0 : _m.size, style: { fontFamily: (_p = (_o = subTextOne === null || subTextOne === void 0 ? void 0 : subTextOne.style) === null || _o === void 0 ? void 0 : _o.font) === null || _p === void 0 ? void 0 : _p.family }, fs: (_r = (_q = subTextOne === null || subTextOne === void 0 ? void 0 : subTextOne.style) === null || _q === void 0 ? void 0 : _q.font) === null || _r === void 0 ? void 0 : _r.style, fw: (_t = (_s = subTextOne === null || subTextOne === void 0 ? void 0 : subTextOne.style) === null || _s === void 0 ? void 0 : _s.font) === null || _t === void 0 ? void 0 : _t.weight, className: "sub-1-Text-div" }, (_u = subTextOne === null || subTextOne === void 0 ? void 0 : subTextOne.content) === null || _u === void 0 ? void 0 : _u.value))),
                subTextTwo && (subTextTwo === null || subTextTwo === void 0 ? void 0 : subTextTwo.display) === "block" && (React.createElement("div", { className: "subtext-2-div" },
                    React.createElement(Text, { c: (_v = subTextTwo === null || subTextTwo === void 0 ? void 0 : subTextTwo.style) === null || _v === void 0 ? void 0 : _v.font.color, fz: (_x = (_w = subTextTwo === null || subTextTwo === void 0 ? void 0 : subTextTwo.style) === null || _w === void 0 ? void 0 : _w.font) === null || _x === void 0 ? void 0 : _x.size, style: { fontFamily: (_z = (_y = subTextTwo === null || subTextTwo === void 0 ? void 0 : subTextTwo.style) === null || _y === void 0 ? void 0 : _y.font) === null || _z === void 0 ? void 0 : _z.family }, fs: (_1 = (_0 = subTextTwo === null || subTextTwo === void 0 ? void 0 : subTextTwo.style) === null || _0 === void 0 ? void 0 : _0.font) === null || _1 === void 0 ? void 0 : _1.style, fw: (_3 = (_2 = subTextTwo === null || subTextTwo === void 0 ? void 0 : subTextTwo.style) === null || _2 === void 0 ? void 0 : _2.font) === null || _3 === void 0 ? void 0 : _3.weight, className: "sub-2-Text-div" }, (_4 = subTextTwo === null || subTextTwo === void 0 ? void 0 : subTextTwo.content) === null || _4 === void 0 ? void 0 : _4.value)))),
            React.createElement("div", { className: "section-2" }, brikImg && (brikImg === null || brikImg === void 0 ? void 0 : brikImg.display) === "block" && React.createElement("div", { className: "Brik-image-container" },
                React.createElement("img", { src: (_5 = brikImg === null || brikImg === void 0 ? void 0 : brikImg.content) === null || _5 === void 0 ? void 0 : _5.src, className: "BrikImageDiv" }))))));
}
export default HeroBrikEight;
