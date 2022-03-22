import React from "react"
import HeadingCarousel from "../../components/HeadingCarousel/HeadingCarousel";
import AboutComplex from "../../components/AboutComplex/AboutComplex";
import InfoSlide from "../../components/InfoSlide/InfoSlide";
import { connect } from "react-redux";
import { updateNewsState } from "../../redux/actions/newsAction";
import { Container } from "@mui/material";
import Title from "../../components/Title/Title"
import "./style.scss";
const Home = (props) => {

    const list = [
        {id: 1, src: "/assets/img/img1.jpg", info: "lorem dsa dsad sa das das d asd as dsa d asd as das dsada d asd as d sad as das dasdas dsad sad asd  dsa d as d sa d asd as d asd   dasdasd  das dsad d asd sad"},
        {id: 2, src: "/assets/img/img1.jpg", info: "lorem dsa dsad sa das das d asd as dsa d asd as das dsada d asd as d sad as das dasdas dsad sad asd  dsa d as d sa d asd as d asd   dasdasd  das dsad d asd sad"},
        {id: 3, src: "/assets/img/img1.jpg", info: "lorem dsa dsad sa das das d asd as dsa d asd as das dsada d asd as d sad as das dasdas dsad sad asd  dsa d as d sa d asd as d asd   dasdasd  das dsad d asd sad"},
        {id: 4, src: "/assets/img/img1.jpg", info: "lorem dsa dsad sa das das d asd as dsa d asd as das dsada d asd as d sad as das dasdas dsad sad asd  dsa d as d sa d asd as d asd   dasdasd  das dsad d asd sad"},
    ]


    return (
        <div className="home-wrap">
            <div className="head-content-part">
                <HeadingCarousel />
                <Container className="container-wrap">
                    <AboutComplex />


                    <InfoSlide/>

                    <Title title=""/>


                </Container>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        value: state.news.value
    }
}

export default connect(mapStateToProps, { updateNewsState })(Home);