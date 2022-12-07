import React from 'react'
import weather from '../../assets/weather.png'
import './styles.css'
import { Typography } from '@mui/material'

const Weather = () => {
  return (
    <div className='weather'>
        <Typography textAlign='center' variant ='h4' letterSpacing={9} color='#5595D1' >Weather Report</Typography>
        <img src={weather} alt="" />
    </div>
  )
}

export default Weather