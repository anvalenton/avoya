import React from "react";
import "./CommentBox.css";




const CommentBox = ({response}) => {


    return (

        <>
        <div className="comment-boxcontainer">
            <h2>What Others Are Saying</h2>

            <div className='comment-container'>
            {response.slice(0,5).map((elem, idx) => {
               
               let highlightClass = idx % 2 === 0? 'no-highlight': 'highlight';
               return (
               <div key={idx} className={`comment-subcontainer ${highlightClass}`}>
                   <div className="comment-div">{`"${elem.comment}"`}</div>
                   <div className='name-date-container'>
                       <span className='namespan'>- {`${elem.name.match(/^[\w]+/g)[0]}`}</span>
                       <time className='datespan'>{new Date(elem.timestamp * 1e3).toLocaleDateString()}</time>
                   </div>
               </div>)
                

           })}

            </div>
      
        </div>
        </>
    )
}

export default CommentBox