import React, { useState } from 'react'

import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

import Popup from 'reactjs-popup';
import ResPop from './ResPop'
import Menu from './Menu'

const SButton = styled(Button)`
    color:#491111;
    fontWeight: lighter;
    border:3px solid ;
    margin:4rem;   
    padding:.4rem 3.2rem;
    font-size:2rem;
    &:hover{   
        border-color:#5e503f;
        color: #5e503f;
  
            }  
            
              @media only screen and (max-width: 800px){
            border:2px solid ;
            margin:2rem;
         
              padding:.4rem .4rem;;
               
                
        }
        @media only screen and (max-width: 700px){
            border:2px solid ;
           
        
              padding:.4rem .4rem;;
               
                
        }
               @media only screen and (max-width: 500px){
           margin:1rem; 
            
            padding:.2rem .4rem;
            font-size:1.4rem;
            
                
        }


`


    
const Food = () => {

const [openMenu, setOpenMenu] = useState(false)

const toggleMenu = () =>{
    setOpenMenu(!openMenu)
}


    return (
        <div className="food_section">
            <div className="food_title">
                FoOD
            </div>
            <div className="food_main">
                <div className="food_main-column1">

                    <div className="food_main-column1-row1">           Our team in the kitchen has created a menu using fresh produce, where quality is our number one priority.

We offer a great of choice of modern Burgers as well as the traditional ‘Pub Classics’ but with a difference……this is not your average pub grub, we source the freshest ingredients to ensure every dish leaves you feeling satisfied and wanting more!!</div>
          
                        <div className="food_main-column1-row2"> 
                        <div className="food_main-text">
                        Our amazing Sunday Lunch is served from 12 – 4pm.  A truly mouthwatering Roast Dinner you don’t want to miss!  Booking is strongly advised!  Our sample Sunday Lunch, the starters and desserts change regularly.
                        </div>
                        </div>
                          <div className="food_main-column1-row3"> 
                        <div className="food_buttons">
                        <SButton  variant="outlined" onClick={toggleMenu}>Menu</SButton>
                        {openMenu && <Menu handleClose={toggleMenu}/> }
                        {!openMenu &&
                        <ResPop/>    
}                
                        </div>
                        
                        </div>
                </div>
                <div className="food_main-column2">
                
                
                </div>
            </div>
        </div>
      
    )
}

export default Food