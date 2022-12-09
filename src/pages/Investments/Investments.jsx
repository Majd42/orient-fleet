import { Typography, Box } from '@mui/material'
import React from 'react'
import './styles.css'
import AvailableInvestments from '../../components/AvailableInvestments/AvailableInvestments'
import InvestmentOpportunities from '../../components/InvestmentOpportunities/InvestmentOpportunities'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


const Investments = () => {
  return (
    <div className='investments-container' id='InvFirstSection'>
      <AvailableInvestments id='InvFirstSection'/>
      <Box  sx={{display:'flex', justifyContent:'center'}}>
        <Typography padding={4} textAlign='center' width='70%' variant='h5' letterSpacing={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium id impedit libero dolore. Minus fugit eum nobis rem modi!</Typography>
        
      </Box>
      <InvestmentOpportunities />
      <div className="scroll-top">
          <Typography sx={{color:'black', maxWidth:'60%'}} variant='h6'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, aut nam corrupti dolorem quia eligendi.
          </Typography>
          <a href='#InvFirstSection' className='back-to-top'>
            <ArrowCircleUpIcon sx={{fontSize:40}} />
          </a>
        </div>
    </div>
  )
}

export default Investments