import React, {useState} from 'react'
import  MobileDateTimePicker  from '@mui/lab/MobileDateTimePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterMoment from '@mui/lab/AdapterMoment';
import moment from 'moment'


const TimeDate = () => {

    const [value, setValue] = useState(new Date())
    const [date, setDate] = useState('')

    const handleChange = (datetime) => {
        const parsedDate = moment(datetime).format('MMMM Do YYYY, h:mm:ss a')
        setValue(datetime)
        setDate(parsedDate)
      
    } 

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
              <MobileDateTimePicker 
    renderInput={(props) => <TextField {...props} />}
    label="DateTimePicker"
    value={value}
    onChange={handleChange}
  />
        </LocalizationProvider>
    )
}

export default TimeDate