import React from "react";
import "./ArticleBox.css";
//would import separate css file if styling was more complex



const ArticleBox = ({header, img, text}) =>  {


    return(

        <>
        <div className='articlebox'>
            <h2>{header}</h2>
            <img className='article-img' src={img} alt='some description'></img>
            <section className="article-text">{text}</section>
        </div>
        </>
    )
}


export default ArticleBox;