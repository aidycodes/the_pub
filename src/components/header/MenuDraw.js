import React from 'react'
import { Drawer, ListItem } from '@mui/material';

export const MenuDraw = ({ isOpen, openDraw }) => {

        const menuArray = [{
           link:'featured',
           name:'Featured'
        },
        {
           link:'food',
           name:'Food'
        },
          {
           link:'food',
           name:'Events'
        },
          {
           link:'food',
           name:'Location'
        },
          {
           link:'food',
           name:'Contact'
        },
      
    ]
 
const links = (obj, i) => {
    return(
    <ListItem className="listItem" onClick={() => alert(obj.link)} key={i}>{obj.name}</ListItem>
    )
}


    return (
        <Drawer anchor="right" open={isOpen} onClose={openDraw} className="draw" >
            <div className="listDiv">
            {menuArray.map((x,i) =>  links(x,i) )}
        
            </div>
            
        </Drawer>
    )
}
