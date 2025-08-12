import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from '../../utils/slider.json'; // <-- Re-import the static data
import { sliderSettings } from '../../utils/common';
import API from '../../api'; // <-- Import your API instance

const Residencies = () => {
    // State to hold the combined list of static and fetched properties
    const [listings, setListings] = useState([]); 

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const res = await API.get('/api/listings');
                // Combine the static data with the fetched data
                const allListings = [...data, ...res.data]; 
                setListings(allListings); // Set state with the combined list
            } catch (err) {
                console.error("Error fetching listings:", err);
                setListings(data); // Fallback to only static data on error
            }
        };
        fetchListings();
    }, []);

    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SlideNextButton/>
                     {listings.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="r-card">
                                    <img src={card.image} alt="home" />
                                    <p className="secondaryText r-price">
                                        <span style={{ color: "orange" }}>$</span>
                                        <span>{card.price}</span>
                                    </p>
                                    <p className='primaryText'>{card.name || card.title}</p>
                                    <span className='seconadryText'>{card.detail || card.description}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Residencies;

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