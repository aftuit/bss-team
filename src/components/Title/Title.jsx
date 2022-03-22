import React from 'react'
import { Fade } from 'react-reveal';

import "./style.scss";

const Title = ({ title, clr }) => {
  return (
    <Fade bottom>
      <div className='title-wrap' data-aos="fade-up">
        <h1 className={` f-medium`}>{title}</h1>
        <div className={`line-vr ${clr}`}></div>
      </div>
    </Fade>
  )
}

export default Title