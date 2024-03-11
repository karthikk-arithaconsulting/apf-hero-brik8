
/* eslint-disable react/prop-types */
import {Title,Text,Button} from "@apf/core";
import React from "react";
import "./HeroBrikEight.css";
import "@apf/core/dist/style.css";




function HeroBrikEight(props){
    const BackgroundImage = props?.data?.data?.find(item => item?.content?.type === "img" && item?.content?.for ==="background");
    // const imageTwoObject = props.data.data.find(item => item.content.type === "image" && item.content.for ==="subImage");
    const titleObject = props.data.data.find(item => item.content.type === "title" && item.content.for === "mainTitle");
    const textObject = props.data.data.find(item => item.content.type === "subtext" && item.content.for ==="subText");
    // const textTwoObject = props.data.data.find(item => item.content.type === "text" && item.content.for ==="mainText");
    const buttonObject = props.data.data.find(item => item.content.type === "button");

    const imageTopLeft = props?.data?.data?.find(item => item?.content?.type === "img" && item?.content?.for === "imageTopLeft");
    const imageTopRight = props?.data?.data?.find(item => item?.content?.type === "img" && item?.content?.for === "imageTopRight");
    const imageBottomLeft = props?.data?.data?.find(item => item?.content?.type === "img" && item?.content?.for === "imageBottomLeft");
    const imageBottomRight = props?.data?.data?.find(item => item?.content?.type === "img" && item?.content?.for === "imageBottomRight");
    return(
        <div className="Hero-Parent-Container">
            <div className="Background-Image">
                <img src={BackgroundImage?.content?.src} className="Background-Image-Tag"></img>
            </div>  
            <div className="Hero-child-Image">
                <img src={imageTopLeft?.content?.src} className="Hero-child-ImageOne"></img>
                <img src={imageTopRight?.content?.src} className="Hero-child-ImageTwo"></img>
                <img src={imageBottomLeft?.content?.src} className="Hero-child-ImageThree"></img>
                <img src={imageBottomRight?.content?.src} className="Hero-child-ImageFour"></img>
            </div>
            <div className="Hero-Parent-content">
                <div className="Hero-Title-div">
                    <Title c={titleObject.style.font.color} fz={titleObject.style.font.size} fw={titleObject.style.font.weight} style={{ fontFamily: titleObject.style.font.family }} fs={titleObject.style.font.style} className="Hero-Title-Tag">{titleObject.content.value}</Title> 
                </div>
                <div className="Hero-subText-div">
                    <Text c={textObject.style.font.color} fz={textObject.style.font.size} style={{ fontFamily: textObject.style.font.family }} fs={textObject.style.font.style} fw={textObject.style.font.weight} className="Hero-Text-Tag">{textObject.content.value}</Text>
                </div>
                <div className="Hero-Button-div">
                    <Button style={{ color: buttonObject.style.font.color, backgroundColor: buttonObject.style.backgroundColor ,fontFamily: buttonObject.style.font.family}}  size={buttonObject.style.font.size} variant="filled" radius={buttonObject.style.radius}  className="Hero-Button-Tag">{buttonObject.content.value}<span>&rarr;</span></Button>
                </div>
            </div>
           
        </div>
    );
}
export default HeroBrikEight;
.GroupTwo-Hero-Content{
    height:90%;
    width: 90%;
    /* border: 2px solid black; */
    position: absolute; 
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin: auto;
}

.GroupTwo-subTitle-Tag{
    width: 80%;
    display: flex;
    align-items: end;
    margin-top: 7%;
    text-align: justify;
}


.GroupTwo-mainTitle-Tag{
    width: 80%;
    display: flex;
    align-items: end;
    margin-top: 1%;
    text-align:start;
}


.GroupTwo-mainText-Tag{
    width: 80%;
    display: flex;
    align-items: end;
    margin-top: 1%;
    text-align: justify;
}

.GroupTwo-Button-Tag{
    display: flex;
    margin-top:2%;
}

/*  */

.GroupThree-Hero-Content{
    height:90%;
    width: 90%;
    /* border: 2px solid black; */
    position: absolute; 
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin: auto;
}

.GroupThree-subTitle-Tag{
    width: 80%;
    display: flex;
    align-items: end;
    margin-top: 7%;
    text-align: justify;
}


.GroupThree-mainTitle-Tag{
    width: 80%;
    display: flex;
    align-items: end;
    margin-top: 1%;
    text-align:start;
}


.GroupThree-mainText-Tag{
    width: 80%;
    display: flex;
    align-items: end;
    margin-top: 1%;
    text-align: justify;
}

.GroupThree-Button-Tag{
    display: flex;
    margin-top:2%;
}



/*  */

.GroupThree-subTitle-Tag{
    animation: slideInDown 3s ease forwards;
}

.GroupThree-mainTitle-Tag{
    animation: slideInRight 3s ease forwards;
}
.GroupThree-mainText-Tag, .GroupThree-Button-Tag{
    animation: slideInUp 3s ease forwards;
}

.GroupThree-Hero-Content{
    animation: disappear 14s ease forwards;
    animation-delay: 6s;
}


/*  */

.GroupTwo-subTitle-Tag{
    animation: slideInDown 3s ease forwards;
}

.GroupTwo-mainTitle-Tag{
    animation: slideInRight 3s ease forwards;
}
.GroupTwo-mainText-Tag, .GroupTwo-Button-Tag{
    animation: slideInUp 3s ease forwards;
}

.GroupTwo-Hero-Content{
    animation: disappear 7s ease forwards; 
    animation-delay: 6s; 
}