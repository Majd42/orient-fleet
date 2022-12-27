import { Typography } from '@mui/material'
import React from 'react'
import './styles.css'
import { useTranslation } from 'react-i18next';

const InvestmentOpportunities = ({lang}) => {
  const styles ={
    fontFamily: lang ==='ar'? 'myFont': '',
    direction:lang==='ar'?'rtl' :'ltr',
    
    

  }
  const [t] = useTranslation()
  const dynamicSpacing = lang === 'ar' ? 1 : 15
  
  return (
    <div className='oppertunities-container'>
        <div className="oppertunities-content">
            <Typography style={styles} letterSpacing={dynamicSpacing} variant='h2'>{t('invOppertunities')}</Typography>
            
        </div>
    </div>
  )
}

export default InvestmentOpportunities