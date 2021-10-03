import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles'


const StyledCard = styled(Card)`
position:relative;
background-image: linear-gradient(45deg, rgb(196, 219, 226, 0.884) 50%,
      rgba(94, 80, 63, 0.1) 50%
    ),
    url(https://static.designmynight.com/uploads/2013/10/Brel-optimised.jpg);
      background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow:hidden;

  @media only screen and (max-width: 1200px) {
    background-image:linear-gradient(40deg, rgb(196, 219, 226, 0.884) 50%,
      rgba(94, 80, 63, 0.1) 50%
    ),
    url(https://static.designmynight.com/uploads/2013/10/Brel-optimised.jpg);
   
}
 @media only screen and (max-width: 1000px) {
    background-image:linear-gradient(45deg, rgb(196, 219, 226, 0.884) 50%,
      rgba(94, 80, 63, 0.1) 50%
    ),
    url(https://static.designmynight.com/uploads/2013/10/Brel-optimised.jpg);
   
}
 @media only screen and (max-width: 900px) {
    background-image:linear-gradient(50deg, rgb(196, 219, 226, 0.884) 50%,
      rgba(94, 80, 63, 0.1) 50%
    ),
    url(https://static.designmynight.com/uploads/2013/10/Brel-optimised.jpg);
   
}
 @media only screen and (max-width: 700px) {
    background-image:linear-gradient(55deg, rgb(196, 219, 226, 0.884) 50%,
      rgba(94, 80, 63, 0.1) 50%
    ),
    url(https://static.designmynight.com/uploads/2013/10/Brel-optimised.jpg);
   
}
 @media only screen and (max-width: 600px) {
    background-image:linear-gradient(70deg, rgb(196, 219, 226, 0.884) 50%,
      rgba(94, 80, 63, 0.1) 50%
    ),
    url(https://static.designmynight.com/uploads/2013/10/Brel-optimised.jpg);
   
}
 @media only screen and (max-width: 400px) {
    background-image:linear-gradient(90deg, rgb(196, 219, 226, 0.884) 55%,
      rgba(94, 80, 63, 0.1) 55%
    ),
    url(https://static.designmynight.com/uploads/2013/10/Brel-optimised.jpg);
    height:60vh;
    
   
}

  
  
`

const Triangle = styled("div")`
  height: 30rem;
  width: 60%;
  background-color: transparent;
  float: right;
  shape-outside: polygon(90% 100%, 100% 0%, 0 0%);

   @media only screen and (max-width: 900px) {
shape-outside: polygon(80% 100%, 100% 0%, 0 0%);
   
}
 @media only screen and (max-width: 700px) {
shape-outside: polygon(70% 100%, 100% 0%, 0 0%);
   
}
 @media only screen and (max-width: 600px) {
shape-outside: polygon(40% 100%, 90% 0%, 0 0%);
   
}
 @media only screen and (max-width: 400px) {
   shape-outside: polygon(20% 100%, 100% 0%, 20% 2%);
   height:60rem;

   
}
`

const Beergarden  = () => {
    return (
        <section className="beer_wrapper">

            <div className="beer_card">
                 <StyledCard >
      <CardContent>
        <p className="beer-title" >
            <span className="beer-title-invs">BEER</span> 
        </p>
        <p className="beer-title-white"> Garden</p>
        <div>
           <Triangle className="beer_ghost-shape2"></Triangle>
        <div className="beer_text" variant="h5" component="div">
          Just off the beaten track, our Beer Garden provides the ideal spot for some post work drinks to unwind after a busy day at the office.

If the weathers dreary we have outdoor heaters and a stretch tent covered area ready for Britains will-it-won’t-it weather.

On draught, we offer Thatchers, Strongbow Fruit, Our own lager, Amstel, Cubic, Nor’Hop and HopHouse13. We also hold a wide range of spirits, wines and Cocktails.
          
        </div>
         
        </div>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <ul className="beer_list">
            <li>WIFI Accessable</li>
            <li>Sports Screens</li>
            <li>Heaters at each Table</li>
            <li>Covered Seating</li>
          </ul>
        </Typography>
    
       
      </CardContent>
      <CardActions>
      </CardActions>
    </StyledCard>

            </div>
        </section>
    )
}

export default Beergarden
