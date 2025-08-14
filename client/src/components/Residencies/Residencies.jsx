import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from '../../utils/slider.json';
import { sliderSettings } from '../../utils/common';
import API from '../../api';

const Residencies = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await API.get('/api/listings');
        const allListings = [...data, ...res.data];
        setListings(allListings);
      } catch (err) {
        console.error("Error fetching listings:", err);
        setListings(data);
      }
    };
    fetchListings();
  }, []);

  return (
    <section id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNavButtons />
          {listings.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                <img src={card.image || "/placeholder.jpg"} alt="home" />
                <p className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price || "N/A"}</span>
                </p>
                <p className="primaryText">{card.name || card.title || "Untitled"}</p>
                <span className="secondaryText">{card.detail || card.description || "No details available"}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SlideNavButtons = () => {
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
