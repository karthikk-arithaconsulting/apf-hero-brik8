/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Title, Text } from "@apf/core";
// import React from "react";
import "./HeroBrikEight.css";
import "@apf/core/dist/style.css";

function HeroBrikEight(props) {
  const backgroundImage = props?.data?.data?.find(
    (item) =>
      item?.content?.type === "img" &&
      item?.content?.for === "background Image",
  );
  const brikImg = props?.data?.data?.find(
    (item) => item?.content?.type === "img" && item?.content?.for === "brikImg",
  );
  const mainTitle = props?.data?.data?.find(
    (item) =>
      item?.content?.type === "title" && item?.content?.for === "main title",
  );
  const subTextOne = props?.data?.data?.find(
    (item) =>
      item?.content?.type === "subtext" && item?.content?.for === "sub textOne",
  );
  const subTextTwo = props?.data?.data?.find(
    (item) =>
      item?.content?.type === "subtext" && item?.content?.for === "sub textTwo",
  );

  return (
    <div
      className="brik-Container"
      style={{
        backgroundColor: props?.data?.style?.backgroundColor,
        height: props?.data?.style?.height,
      }}
    >
      <div className="backgroundImage">
        {backgroundImage &&
          backgroundImage?.content?.src &&
          backgroundImage?.display === "block" && (
            <img
              src={backgroundImage?.content?.src}
              alt=""
              className="backgroundImageTag"
            ></img>
          )}
      </div>
      <div className="brik-body">
        <div className="section-1">
          {mainTitle && mainTitle?.display === "block" && (
            <div className="title-div">
              <Title
                c={mainTitle?.style?.font?.color}
                fz={mainTitle?.style?.font?.size}
                style={{ fontFamily: mainTitle?.style?.font?.family }}
                fw={mainTitle?.style?.font?.weight}
                className="titleTag"
              >
                {mainTitle?.content?.value}
              </Title>
            </div>
          )}
          {subTextOne && subTextOne?.display === "block" && (
            <div className="subtext-1-div">
              <Text
                c={subTextOne?.style?.font.color}
                fz={subTextOne?.style?.font?.size}
                style={{ fontFamily: subTextOne?.style?.font?.family }}
                fs={subTextOne?.style?.font?.style}
                fw={subTextOne?.style?.font?.weight}
                className="sub-1-Text-div"
              >
                {subTextOne?.content?.value}
              </Text>
            </div>
          )}
          {subTextTwo && subTextTwo?.display === "block" && (
            <div className="subtext-2-div">
              <Text
                c={subTextTwo?.style?.font.color}
                fz={subTextTwo?.style?.font?.size}
                style={{ fontFamily: subTextTwo?.style?.font?.family }}
                fs={subTextTwo?.style?.font?.style}
                fw={subTextTwo?.style?.font?.weight}
                className="sub-2-Text-div"
              >
                {subTextTwo?.content?.value}
              </Text>
            </div>
          )}
        </div>
        <div className="section-2">
          {brikImg && brikImg?.display === "block" && (
            <div className="Brik-image-container">
              <img
                src={brikImg?.content?.src}
                alt=""
                className="BrikImageDiv"
              ></img>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default HeroBrikEight;
