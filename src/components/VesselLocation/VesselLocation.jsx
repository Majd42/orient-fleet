import React from 'react'
import { Typography } from '@mui/material'
import './styles.css'
import Location from '../../assets/location.png'

const VesselLocation = () => {
  return (
    <div className='vessel-location'>
        <Typography textAlign='center' variant ='h4' letterSpacing={9} color='white'>Vessel Location</Typography>
        <img src={Location} alt="" />
    </div>
  )
}   

export default VesselLocation