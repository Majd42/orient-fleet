import { Typography, Box } from '@mui/material'
import React from 'react'
import './styles.css'
import AvailableInvestments from '../../components/AvailableInvestments/AvailableInvestments'
import InvestmentOpportunities from '../../components/InvestmentOpportunities/InvestmentOpportunities'
const Investments = () => {
  return (
    <div className='investments-container'>
      <AvailableInvestments/>
      <Box sx={{display:'flex', justifyContent:'center'}}>
        <Typography padding={4} textAlign='center' width='70%' variant='h5' letterSpacing={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium id impedit libero dolore. Minus fugit eum nobis rem modi!</Typography>
      </Box>
      <InvestmentOpportunities />
    </div>
  )
}

export default Investments