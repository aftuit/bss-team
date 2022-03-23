import React from "react"
import HeadingCarousel from "../../components/HeadingCarousel/HeadingCarousel";
import InfoSlide from "../../components/InfoSlide/InfoSlide";
import Advantages from "../../components/Advantages/Advantages";
import { connect } from "react-redux";
import { updateNewsState } from "../../redux/actions/newsAction";
import { Container } from "@mui/material";
import ReactPlayer from "react-player";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Title from "../../components/Title/Title"
import Apartments from "../../components/Apartments/Apartment";
import SelectBlock from "../../components/SelectBlock/SelectBlock"
import "./style.scss";
const Home = (props) => {

    const [play, setPlay] = React.useState(false);

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


                    <InfoSlide/>
                </Container>
                    <SelectBlock/>
                <Container className="container-wrap">
                    <Apartments/>

                    <div className="video-wrapper">
                        <Title title="Видеопрезентация" clr={'blue'} mt={true}/>
                        <div className={`video-control ${play && 'play'}`}>
                        <ReactPlayer
                            config = {{
                                dailymotion: {
                                    params: {
                                        startTime: 15,
                                        loop: true,
                                        mute: true,
                                            }}
                                            }}
                                    playing={play}
                                    url={"/assets/vid/video_.mp4"}
                                    className={"video-controller"}
                                    pip={true}
                            onEnded={()=>setPlay(false)}
                                    controls={play}
                                    onClick={()=>setPlay(false)}
                                />


                            {!play ? <>
                                    <div className="play-icon"></div>
                                    <PlayArrowIcon onClick={()=>setPlay(!play)}/>
                                    </>:""
                            }
                        </div>
                    </div>


                </Container>
                <Advantages/>
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