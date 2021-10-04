import React, {useState, useEffect, createRef} from 'react';
import Popup from 'reactjs-popup';
import TextField from '@mui/material/TextField';
import TimeDate from './TimeDate'
import { Button } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterMoment from '@mui/lab/AdapterMoment';
import moment from 'moment'
import  MobileDateTimePicker  from '@mui/lab/MobileDateTimePicker';
import { minHeight } from '@mui/lab/node_modules/@mui/system';
import emailjs from 'emailjs-com';
import swal from 'sweetalert'
import { styled } from '@mui/material/styles'

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




const contentStyle = { 
 //   background: 'rgba(251, 254, 255, 0.95)',
    opacity:'1',
    
    

};

const ResPop = ( ) => {

   const [booking, setBooking] = useState({
       firstName:'',
       surname:'',
       email:'',
       date:new Date(),
       formatDate:'',
       numPeople:1
   })
   const [day, setDay] = useState(moment(booking.date).format('LLLL').match(/^(\S+)\s(.*)/).slice(1))
   const [hour,setHour] = useState(moment(booking.date).format('HH'))

   const popRef = createRef()

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tpi0c4p', 'template_b5lrc09', popRef.current, 'user_n86fpl3orOt08NUIctcXc')
      .then((result) => {
          swal("Booking Confirmed!", "Thank you  " + " " + booking.firstName + " Your Booking has been confirmed for " + booking.formatDate , "success");
      }, (error) => {
         swal("Something Went Wrong...", "Sorry Something Went Wrong While Booking Please Call Us On xxxxx-xxxxxxx", "error");
      });
  };

   useEffect(() => {
       const newDay = moment(booking.date).format('LLLL').match(/^(\S+)\s(.*)/).slice(1)
       const finalDay = newDay[0].slice(0,-1)
       const time = moment(booking.date).format('HH')
        const parsedTime = parseInt(time, 10)
       setHour(parsedTime)
       setDay(finalDay)
      
   },[booking.date])

   useEffect(() => {
  console.log(hour, "", day)
   },[day])


   const handleChange = (e, type) => {
       switch(type){
           case 'first':
       setBooking({...booking, firstName:e.target.value})
       break;
            case 'surname':
        setBooking({...booking, surname:e.target.value})
        break;
            case 'email':
        setBooking({...booking, email:e.target.value})
        break;
            case 'num':
        setBooking({...booking, numPeople:e.target.value})
        
   }
   }

    const handleDate = (datetime) => {
        const parsedDate = moment(datetime).format('MMMM Do YYYY, h:mm:ss a')
        
        setBooking({...booking, date:datetime, formatDate:parsedDate})
     
    } 
return (
  <Popup
    trigger={<SButton size="large"  variant="outlined" className="button"> Book </SButton>}
    modal
    nested
    {...{contentStyle}}
  > 
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button> 
        <div className="header"> Bookings </div>
        <div className="content">
          {' '}
            <form ref={popRef} className="booking_form">
                <div className="booking_form-group">
                    <div className="booking_form-name-first">
                        
                        <TextField name="user_name" value={booking.firstName} onChange={(e) => handleChange(e,'first')}  sx={{padding:'.5rem'}}  label="First Name" variant="outlined"/>
                    </div>
                    <div className="booking_form-name-sur">
                        <TextField value={booking.surname} onChange={(e) => handleChange(e,'surname')} fullWidth sx={{padding:'.5rem', marginLeft:'.5rem'}}  label="Surname" variant="outlined"/>
                    </div>
                </div>
                 <div className="booking_form-email">
                    <TextField type="email" name="user_email" value={booking.email} onChange={(e) => handleChange(e,'email')}  fullWidth sx={{padding:'.5rem'}}  label="Email Address" variant="outlined"/>
                </div>
                
                
            
            <div className="booking_form-group">
            <div  style={{padding:'.5rem'}}  className="booking_form-date">
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                     <MobileDateTimePicker 
                            renderInput={(props) => <TextField {...props} />}
                            label="DateTimePicker"
                            value={booking.date}
                            onChange={handleDate}
                           
                        />
                     </LocalizationProvider>

                </div>
               
                </div>
                 <div style={{padding:'.5rem', marginLeft:'.5rem'}} className="booking_form-people">
                    <InputLabel  id="">Number of people</InputLabel>
                        <Select
                        
                        labelId=""
                        id=""
                        value={booking.numPeople}
                        label="Age"
                        onChange={(e) => handleChange(e,'num')}
                        >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        </Select>
                </div>
                <div className="booking_form-submit">
                     {  (booking.numPeople >= 7) ? <>
                     <p style={{color:'red'}} > Due to covid restrictions we are currently not accepting bookings above 6 people</p>
                     <Button variant="contained" color="success"disabled >Submit</Button> 
                     </> :
                    ( (day === 'Sunday' && hour < 11 || day === 'Sunday' && hour > 13 || day !== 'Sunday' && hour < 10 || day !== 'Sunday' && hour > 21 )   ) ?
                    <> 
                     <p style={{color:'red'}}> Our Opening Hours are between 10am and 10pm Monday - Saturday and 11am and 5pm Sunday</p>
                    <Button variant="contained" color="success" disabled  >Submit</Button> 
                   
                       </> :<> 
                        <p style={{visibility:'hidden'}}> Our Opening Hours are between 10am and 10pm Monday - Saturday and 11am and 5pm Sunday</p>
                       <Button type="submit" value="Send" variant="contained" color="success" onClick={sendEmail} >Submit</Button>
                     </>
                       }
                </div>
        </form>

       </div>
      </div>
    )}
  </Popup>
)
    }

    export default ResPop