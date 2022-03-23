import React from "react";
import "./style.scss";
function Information ({title, info, mt}) {
    return (
        <div className={`information-content ${mt && "m-top"}`}>
             <h2>{title}</h2>
            <p>{info}</p>
        </div>
    )
}

export default Information;