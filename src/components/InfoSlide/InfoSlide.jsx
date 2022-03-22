import React from 'react';
import Slider from 'react-slick/lib/slider';
import Title from "../Title/Title";
import { Link } from 'react-router-dom';
import "./style.scss";

const InfoSlide = () => {

    const setting = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    const data = [
        { id: 1, img: "/assets/img/image.jpg", text: "По задумке архитекторов, вдохновлённых горными вершинами Узбекистана, комплекс олицетворяет плавность, свежесть и бесконечность. Высота зданий будет напоминать рельеф гор, вершины которых то возвышаются, то уменьшаются. Основной целью разработки этого проекта было создание жилых помещений высокого класса со всеми социально важными объектами внутри.", title: "Технология строительства" },
        { id: 2, img: "/assets/img/img2.jpg", text: "По задумке архитекторов, вдохновлённых горными вершинами Узбекистана, комплекс олицетворяет плавность, свежесть и бесконечность. Высота зданий будет напоминать рельеф гор, вершины которых то возвышаются, то уменьшаются. Основной целью разработки этого проекта было создание жилых помещений высокого класса со всеми социально важными объектами внутри.", title: "Технология строительства" },
        { id: 3, img: "/assets/img/yard.jpg", text: "По задумке архитекторов, вдохновлённых горными вершинами Узбекистана, комплекс олицетворяет плавность, свежесть и бесконечность. Высота зданий будет напоминать рельеф гор, вершины которых то возвышаются, то уменьшаются. Основной целью разработки этого проекта было создание жилых помещений высокого класса со всеми социально важными объектами внутри.", title: "Технология строительства" },
        { id: 4, img: "/assets/img/street.jpg", text: "По задумке архитекторов, вдохновлённых горными вершинами Узбекистана, комплекс олицетворяет плавность, свежесть и бесконечность. Высота зданий будет напоминать рельеф гор, вершины которых то возвышаются, то уменьшаются. Основной целью разработки этого проекта было создание жилых помещений высокого класса со всеми социально важными объектами внутри.", title: "Технология строительства" },
    ]

    return (
        <div className="InfoSlide-content">

            <Title title={"О комплексе"} clr={"blue"} />

            <Slider {...setting}>
                {
                    data.map(item => {
                        return (
                            <div className="container" key={item.id}>
                                <div className="row">
                                    <div className="col col-md-6">
                                        <Link to="/">
                                            <img className="w-100" src={item.img} alt="" />
                                        </Link>
                                    </div>
                                    <div className="col col-md-6 d-flex flex-column justify-content-around">
                                        <h2>{item.title}</h2>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default InfoSlide