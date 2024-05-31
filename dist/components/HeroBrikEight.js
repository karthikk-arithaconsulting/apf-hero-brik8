/* eslint-disable react/prop-types */
import { Title, Text } from "@apf/core";
import React from "react";
import "./HeroBrikEight.css";
import "@apf/core/dist/style.css";
function HeroBrikEight(props) {
    const backgroundImage = props?.data?.data?.find(item => item?.content?.type === "img" && item?.content?.for === "background Image");
    const brikImg = props?.data?.data?.find(item => item?.content?.type === "img" && item?.content?.for === "brikImg");
    const mainTitle = props?.data?.data?.find(item => item?.content?.type === "title" && item?.content?.for === "main title");
    const subTextOne = props?.data?.data?.find(item => item?.content?.type === "subtext" && item?.content?.for === "sub textOne");
    const subTextTwo = props?.data?.data?.find(item => item?.content?.type === "subtext" && item?.content?.for === "sub textTwo");
    return (React.createElement("div", { className: "brik-Container", style: { backgroundColor: props?.data?.style?.backgroundColor, height: props?.data?.style?.height } },
        React.createElement("div", { className: "backgroundImage" }, backgroundImage &&
            backgroundImage?.content?.src &&
            backgroundImage?.display === "block" && (React.createElement("img", { src: backgroundImage?.content?.src, className: "backgroundImageTag" }))),
        React.createElement("div", { className: "brik-body" },
            React.createElement("div", { className: "section-1" },
                mainTitle && mainTitle?.display === "block" && (React.createElement("div", { className: "title-div" },
                    React.createElement(Title, { c: mainTitle?.style?.font?.color, fz: mainTitle?.style?.font?.size, style: { fontFamily: mainTitle?.style?.font?.family }, fw: mainTitle?.style?.font?.weight, className: "titleTag" }, mainTitle?.content?.value))),
                subTextOne && subTextOne?.display === "block" && (React.createElement("div", { className: "subtext-1-div" },
                    React.createElement(Text, { c: subTextOne?.style?.font.color, fz: subTextOne?.style?.font?.size, style: { fontFamily: subTextOne?.style?.font?.family }, fs: subTextOne?.style?.font?.style, fw: subTextOne?.style?.font?.weight, className: "sub-1-Text-div" }, subTextOne?.content?.value))),
                subTextTwo && subTextTwo?.display === "block" && (React.createElement("div", { className: "subtext-2-div" },
                    React.createElement(Text, { c: subTextTwo?.style?.font.color, fz: subTextTwo?.style?.font?.size, style: { fontFamily: subTextTwo?.style?.font?.family }, fs: subTextTwo?.style?.font?.style, fw: subTextTwo?.style?.font?.weight, className: "sub-2-Text-div" }, subTextTwo?.content?.value)))),
            React.createElement("div", { className: "section-2" }, brikImg && brikImg?.display === "block" && React.createElement("div", { className: "Brik-image-container" },
                React.createElement("img", { src: brikImg?.content?.src, className: "BrikImageDiv" }))))));
}
export default HeroBrikEight;
