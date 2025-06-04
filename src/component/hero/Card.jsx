import React from "react";
import "./Card.css";

const Card = ({title,image,description})=>{
    const date = new Date().toLocaleString('en-US',{
        hour: '2-digit',
        minute: '2-digit',
         year: 'numeric',
        month: 'long', 
        day: 'numeric',
    });
    const handleShare = ()=>{
        alert(`Shared:${title}`);
    };
    return(
        <div className="card">
        <h2 className="card-heading text-center p-2" style={{ backgroundColor: '#8b5cf6',color:'white'}}>{title} </h2>
             <img src={image} alt={title} className="card-img" />
             <div className="card-body">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="card-footer">
                 
                <button className="share-btn" onClick={handleShare}>Share</button>
                <p className="card-datetime">{date}</p>
            </div>
        </div>
    );
}
export default Card;
