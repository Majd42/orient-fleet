import React from 'react'
import './styles.css'
import Ship from '../../assets/Captain/Ship Investment.jpg'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';

const ShipReport = (lang) => {

  const styles ={
    fontFamily: lang ==='ar'? 'myFont': '',
    direction:lang==='ar'?'rtl' :'ltr',
    
    
  

  }
  const [t]= useTranslation();
      const titleDynamicSpacing= lang==='en'? 10 : 0
      const textDynamicSpacing = lang ==='en'?2: 0
  return (
    <div className='ship-report'>
        <Typography style={styles} gutterBottom letterSpacing={titleDynamicSpacing} variant='h4' color='#5595D1' textAlign='center'>{t('shipReport')}</Typography>
        <Typography style={styles} gutterBottom letterSpacing={titleDynamicSpacing} variant='h4'  color='#5595D1' textAlign='center'>{t('shipName')}</Typography>
        <img src={Ship} alt="" className='ship-img' />
        <div className="report-info">
            <div className="reports">
               <span style={styles}>{t('SOA')}</span> <a href="#" download>{t('download')}</a>
               <span style={styles}> {t('statusReport')}</span> <a href="#" download>{t('download')}</a>
            </div>
            <div className="revenue">   
                <Typography style={styles}  textAlign='center' fontWeight='600' variant='h4' color='#5595D1' >{t('revenu')}</Typography>
                <Typography style={styles} textAlign='center' fontWeight='600' variant='h4'  >0.00$</Typography>
            </div>
        </div>
    </div>
  )
}

export default ShipReport