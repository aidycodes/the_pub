import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carry = () => {
    const settings = {
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500,
    }
    return (
     <div className="carrousel_wrapper">
            <Slider {...settings}>
                <div>
                    <div className="carrousel_image-1">
                
                    <span className="carr_text">Breakfasts</span>
                    </div>
                    
                </div>
                <div>
                    <div className="carrousel_image-2"
                    >  <span className="carr_text-2">Sunday <br/> Lunch</span>
                    </div>
                    
                </div>
                <div>
                    <div className="carrousel_image-3"> <span className="carr_text">Burgers</span>
                    </div>
                    
                </div>
            </Slider>
            
        </div>
    )
}
  
export default Carry 