import { Typography, Box } from '@mui/material'
import React from 'react'
import './styles.css'
import AvailableInvestments from '../../components/AvailableInvestments/AvailableInvestments'
import InvestmentOpportunities from '../../components/InvestmentOpportunities/InvestmentOpportunities'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useTranslation } from 'react-i18next';

const Investments = ({lang}) => {


  const styles ={
    fontFamily: lang ==='ar'? 'myFont': '',
    direction:lang==='ar'?'rtl' :'ltr',
    
    

  }
  const [t, i18next] = useTranslation()
  const dynamicSpacing = lang === 'ar' ? 1 : 15
  const TextDynamicSpacing = lang === 'ar' ? 0 : 2
  return (
    <div className='investments-container' id='InvFirstSection'>
      <AvailableInvestments lang={lang} id='InvFirstSection'/>
      <Box  sx={{display:'flex', justifyContent:'center'}}>
        <Typography padding={4} textAlign='center' width='70%' variant='h5' letterSpacing={2}> </Typography>
        
      </Box>
      <InvestmentOpportunities lang={lang} />
      <div className="scroll-top">
      <Typography sx={{color:'black', maxWidth:'60%'}} variant='h6'>
          {t('beforeScorllText')}
          </Typography>
          <a href='#firstSection' className='back-to-top'>
            <KeyboardDoubleArrowUpIcon sx={{fontSize:50}} />
          </a>
        </div>
    </div>
  )
}

export default Investments