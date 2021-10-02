import React from 'react'
import  { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const StyledButton = styled(Button)`
color:#b6a692;
font-size:1.2em;
padding:10px 50px;
border-color: #5e503f;
 &:hover {
     border-color:#5e503f;
 }
  @media (max-width: 800px) {
    padding:5px 20px;
  }
    @media (max-width: 500px) {
        margin-top:2rem;
    padding:3px 15px;
    font-size:1rem;
  }


`
 
const MainButton = ( { text, type } ) => {
    return (
    <StyledButton  variant="outlined"> {text}</StyledButton>
    )
}


export default MainButton;

