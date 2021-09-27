import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles'
import { lineHeight } from '@mui/system';



const FeatureCard = styled(Card)`
padding:2em;
margin:1em;
color:#49111c;

box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
position:relative;
  background-image: 
   linear-gradient(
      rgba(242,244,243, 0.842),
      rgba(242,244,243, 0.842)
    ),
    url(https://media.istockphoto.com/photos/chef-preparing-vegan-tacos-picture-id1241878649?k=20&m=1241878649&s=612x612&w=0&h=T0Iuh5OnRj7p0hdYpoVnRmsR09thoJNoW8lbUoQAlcg=);

`
const obj = {
  position:'absolute',
 top:'0.125em',
 left:'.1em',
  fontFamily:'newfont',
  fontSize:'6em',
  backgroundColor:'rgba(255,255,255,0.75)',
  paddingBottom:'0',
  lineHeight:'70%'
    
  
}

const obj2 = {
  MuiCardMediaImg:{
  position:'absolute'
  }
}
export default function MediaCard() {


  return (
     <FeatureCard sx={{ maxWidth: 345 }}>
         <Typography sx={{...obj}} gutterBottom variant="h5" component="div">
          Food
        </Typography>
      <CardMedia className="cardimg" sx={{...obj2 }}
        component="img"
        alt="food"
        height="140px"
        image='https://media.istockphoto.com/photos/chef-preparing-vegan-tacos-picture-id1241878649?k=20&m=1241878649&s=612x612&w=0&h=T0Iuh5OnRj7p0hdYpoVnRmsR09thoJNoW8lbUoQAlcg='
      />
      <CardContent>
      
        <Typography variant="body2" color="#49111c">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quibusdam doloremque tempore nihil velit. Possimus architecto consequatur vel, omnis consequuntur iure minima dignissimos suscipit laborum quisquam incidunt eveniet, doloremque obcaecati?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </FeatureCard>
  );
}