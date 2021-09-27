import React from 'react'
import  Mainbar from './Mainbar'

const Header = ( {toggle}) => {
    return (
        <div>
            <Mainbar toggle={toggle}/>
        </div>
    )
}

export default Header