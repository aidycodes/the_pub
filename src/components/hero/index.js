import React from 'react'
import { Fade } from 'react-awesome-reveal'
import  MainButton  from '../Utils/Button'

 const Hero = () => {
    return (
        <div className="hero_wrapper">
            <div className="hero_img">
        <Fade delay={100} duration={1000}>
                <div className="title_wrapper">
                <h2>The</h2>
                <h2>Royal Oak</h2>
                <div className="button-div">
                 <MainButton  text={'Find Out More'}  className="extra-space"/>
                 </div>
                </div>
</Fade>
            </div>
            
        </div>
    )
}
export default Hero