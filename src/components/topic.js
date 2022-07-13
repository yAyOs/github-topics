import React from "react";
import star from "../images/star.png";

const Topic = ({name, stargazerCount, onClick}) => {
    return (
        <div className="singleTopic" onClick={() => onClick(name)}>
                <h2>#</h2>
                <h3>{name}</h3>
                <div className="starz">
                    <p>{stargazerCount}</p>
                    <img src={star} alt="stars" />
                </div>
         </div>
    )
}
export default Topic;