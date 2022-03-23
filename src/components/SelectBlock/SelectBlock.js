import React from "react"
import ImageMapper from "react-image-mapper";
import "./style.scss";
const SelectBlock = () =>{
    const MAP = {
        name: "my-map",
        areas: [
            { name: "1", shape: "poly", coords: [12,679,81], preFillColor: "RED", fillColor: "rgba(14, 30, 94, 0.55)"  },
            { name: "2", shape: "circle", coords: [407,353,134], preFillColor: "pink", fillColor: "red"  }
        ]
    }

    return(
        <div className={"select-block-content"}>
            <ImageMapper src={"/assets/img/select.jpg"} map={MAP}/>
        </div>
    )

}

export default SelectBlock;