import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SlideNextButton/>
                     {data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="r-card">
                                    <img src={card.image} alt="home" />

                                    <p className="secondaryText r-price">
                                        <span style={{ color: "orange" }}>$</span>
                                        <span>{card.price}</span>
                                    </p>

                                    <p className='primaryText'>{card.name}</p>
                                    <span className='seconadryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
 </section>
    )
}

export default Residencies

const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
      <div className="flexCenter r-buttons">
        <button onClick={() => swiper.slidePrev()} className="r-prevButton">
          &lt;
        </button>
        <button onClick={() => swiper.slideNext()} className="r-nextButton">
          &gt;
        </button>
      </div>
    );
  };