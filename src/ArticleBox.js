import React from "react";
import "./ArticleBox.css";



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