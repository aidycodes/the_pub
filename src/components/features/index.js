import React from 'react'
import MediaCard from './Card'
import { Zoom } from 'react-awesome-reveal'

const Card = () => {
    return (
        <Zoom delay={500} cascade={true} triggerOnce >
        <div className="card_wrapper">
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
        </div>
        </Zoom>
    )
}

export default Card