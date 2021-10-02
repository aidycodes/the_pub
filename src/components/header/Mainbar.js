import React, {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuDraw } from './MenuDraw'
import { styled } from '@mui/material/styles';

  const StyledBar = styled(AppBar)`

  background-color:${props => props.toggle ? '#49111c' : 'transparent'};
  transition: all 1s ease-out;
    transform:${props => props.toggle ? 'translate(0px,0px)' : 'translate(0px,-100px)'} ;`


const Mainbar = () => {


  const [isOpen, setIsOpen] = useState(false) 
  const [toggle, setToggle] = useState(false)

  const openDraw = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  useEffect(() =>{
    window.addEventListener("scroll",handleScroll)
  },[])

  const handleScroll = () => {
    window.scrollY > 100 ? setToggle(true) : setToggle(true)
  }
 
  return (

      <StyledBar toggle={toggle}>
        <Toolbar>
          <Box className="nav_title" sx={{flexGrow:1}}>
            <h2 className="nav_title-text" sx={{textAlign:'left'}}>Royal Oak</h2>
          </Box>
         <IconButton onClick={() => openDraw()}>
           <MenuIcon/>
         </IconButton>
    
   
        </Toolbar>
        <MenuDraw isOpen={isOpen} openDraw={openDraw}/>
      </StyledBar>

  );
}

export default Mainbar