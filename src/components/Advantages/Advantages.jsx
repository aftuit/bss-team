import React from "react"
import Title from "../Title/Title";
import {connect} from "react-redux";
import "./style.scss";

const Advantages = () => {
    return (
        <div className="advantages-content">
            <Title title={"Преимущества"} clr={"blue"}/>
                <div className="advantage">

                </div>
         </div>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, null)(Advantages);