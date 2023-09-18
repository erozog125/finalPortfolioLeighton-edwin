import React from "react";
import "./Languages.css"
import iconHTML from "../images/html-5.png";
import iconCSS from "../images/css.png";
import iconJS from "../images/js.png";
import iconNode from "../images/nodejs.png";
import iconReact from "../images/reactjs_logo_icon_170805.png";
import iconJava from "../images/java_original_wordmark_logo_icon_146459.png";
import iconExpress from "../images/expressjs.png";

function Languages(){
    return(
        <>
            <section className="languages">
                <div className="iconLanguage">
                    <img src={iconHTML} alt="html" />
                    <img src={iconCSS} alt="css" />
                    <img src={iconJS} alt="js" />
                    <img src={iconNode} alt="nodejs" />
                    <img src={iconReact} alt="React" />
                    <img src={iconJava} alt="java" />
                    <img src={iconExpress} alt="express" />
                </div>
            </section>
        </>
    )
}

export default Languages;