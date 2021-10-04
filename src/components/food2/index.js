import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

import Popup from 'reactjs-popup';
import ResPop from './ResPop'
import Menu from './Menu'
import Carry from './Carry'

import './food.css'

const SButton = styled(Button)`

padding:1rem 2rem;  
margin-left:1rem;  
color:#a9927d;
border:1px solid #a9927d;
&:hover{
  color: #C0C0C0;
  border:1px solid #C0C0C0;
}

            
                
        


`
const obj = {
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    backgroundColor:'#49111c'
}

    
const Food = () => {

const [openMenu, setOpenMenu] = useState(false)

const toggleMenu = () =>{
    setOpenMenu(!openMenu)
}


    return (
        <section className="food">
           <Card sx={{...obj}} className="food_card" >
                <div className="food_img"> </div> 
                <Carry/>
      <CardContent className="food_bk">
           
        <div className="food_main-2">
                <div className="food_main-column1-2">

                    <div className="food_main-column1-row1-2">           Our team in the kitchen has created a menu using fresh produce, where quality is our number one priority.

We offer a great of choice of modern Burgers as well as the traditional ‘Pub Classics’ but with a difference……this is not your average pub grub, we source the freshest ingredients to ensure every dish leaves you feeling satisfied and wanting more!!</div>
          
                        <div className="food_main-column1-row2-2"> 
                        <div className="food_main-text">
                        Our amazing Sunday Lunch is served from 12 – 4pm.  A truly mouthwatering Roast Dinner you don’t want to miss!  Booking is strongly advised!  Our sample Sunday Lunch, the starters and desserts change regularly.
                        </div>
                                  <div className="food_buttons-2">
                        <SButton size="large"  variant="outlined" onClick={toggleMenu}>Menu</SButton>
                        {openMenu &&<> <Menu handleClose={toggleMenu}/>  <ResPop/> </>    }
                        {!openMenu &&
                        <ResPop/>    
}                
                        </div>
                        </div>
                        
         </div></div>
    
      </CardContent>
  
    </Card>
       </section>
    )
}

export default Food


/*
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
      
        */