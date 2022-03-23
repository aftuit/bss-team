import React from 'react';
import Title from "../Title/Title";
import { Button} from "@mui/material";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import {connect} from "react-redux";
import Slider from "react-slick";
import "./style.scss"
const Apartments = (props) => {

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    var settings = {
        dots: false,
        draggable: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
        return (
            <div className={"apartments"}>
                    <Title title={"ПЛАНИРОВКА КВАРТИР"}/>

                    <div className="row wrap">
                        <div className="col col-md-5">
                            <div className="select-group">
                                <select name="" className={"room"}>
                                    <option value="1">1-комнатные</option>
                                    <option value="2">2-х комнатные</option>
                                    <option value="3">3-х комнатные</option>
                                    <option value="4">4-х комнатные</option>
                                </select>
                                <select name="" className={"block"}>
                                    <option value="1">Блок №1</option>
                                    <option value="2">Блок №2</option>
                                    <option value="3">Блок №3</option>
                                    <option value="3">Блок №4</option>
                                    <option value="3">Блок №5</option>
                                </select>
                            </div>

                            <div className="apart-card mt-3">
                                <div className="apart-card-header">
                                    <h2 className={"font-medium"}>О квартире</h2>
                                </div>
                                <div className="apart-card-body">
                                    <div className="row price-row">
                                        <div className="col-6 text-center">
                                            <p>Стоимость
                                                от <b>585 452 000</b> сум</p>
                                        </div>
                                        <div className="col-6 text-center">
                                            Площадь
                                            от <b>31,94 м²</b>
                                        </div>
                                    </div>
                                    <div className="informs">
                                        <div className="informs_body d-flex justify-content-between p-2 border-bottom">
                                            <p>Балкон</p>
                                            <p>0,77 м²</p>
                                        </div>
                                        <div className="informs_body d-flex justify-content-between p-2 border-bottom">
                                            <p>Спальня</p>
                                            <p>0,77 м²</p>
                                        </div>
                                        <div className="informs_body d-flex justify-content-between p-2 border-bottom">
                                            <p>Санузел</p>
                                            <p>0,77 м²</p>
                                        </div>
                                        <div className="informs_body d-flex justify-content-between p-2 border-bottom">
                                            <p>Прихожая</p>
                                            <p>0,77 м²</p>
                                        </div>
                                        <div className="informs_body d-flex justify-content-between p-2 border-bottom">
                                            <p>Кухня</p>
                                            <p>0,77 м²</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="apart-card-footer d-flex justify-content-between align-items-center">
                                    <Button className={"w-100 p-3"} variant={"contained"} type={"button"}>Забронировать</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-7">
                            <LightGallery
                                onInit={onInit}
                                speed={500}
                                plugins={[lgThumbnail, lgZoom]}
                                elementClassNames={"items"}
                            >
                                <a href="/assets/img/sxema1.jpg">
                                    <img alt="sxema" src="/assets/img/sxema3.jpg" />
                                </a>
                            </LightGallery>
                        </div>
                    </div>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        apartments: state.scene.apartments
    }
}

export default connect(mapStateToProps, null)(Apartments);