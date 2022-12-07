import React from 'react'
import './styles.css'
import Ship from '../../assets/Captain/Ship Investment.jpg'
import { Typography } from '@mui/material'

const ShipReport = () => {
  return (
    <div className='ship-report'>
        <Typography gutterBottom letterSpacing={9} variant='h4' color='#5595D1' textAlign='center'>Ship Report</Typography>
        <Typography gutterBottom letterSpacing={9} variant='h4'  color='#5595D1' textAlign='center'>Ship Name:</Typography>
        <img src={Ship} alt="" className='ship-img' />
        <div className="report-info">
            <div className="reports">
               <span>Ship SOA Report</span> <a href="#" download>Download</a>
               <span>Ship Status Report</span> <a href="#" download>Download</a>
            </div>
            <div className="revenue">   
                <Typography  textAlign='center' fontWeight='600' variant='h4' color='#5595D1' >Total Quarterly Revenu</Typography>
                <Typography textAlign='center' fontWeight='600' variant='h4'  >0.00$</Typography>
            </div>
        </div>
    </div>
  )
}

export default ShipReport