import { Typography } from '@mui/material'
import React from 'react'
import ShipReport from '../../components/ShipReport/ShipReport'
import VesselLocation from '../../components/VesselLocation/VesselLocation'
import Weather from '../../components/Weather/Weather'

const Status = () => {
  return (
    <div>
        <ShipReport />
        <VesselLocation />
        <Weather />
    </div>
  )
}

export default Status