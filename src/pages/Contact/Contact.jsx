import { Typography } from '@mui/material'
import React from 'react'
import HeadOffice from '../../components/HeadOffice/HeadOffice'
import WeAreIn from '../../components/WeAreIn/WeAreIn'
import './styles.css'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useTranslation } from 'react-i18next';

const Contact = ({lang}) => {

  const styles ={
    fontFamily: lang ==='ar'? 'myFont': '',
    direction:lang==='ar'?'rtl' :'ltr',
    
    
  

  }
  const [t]= useTranslation();
  const titleDynamicSpacing= lang==='en'? 10 : 0
  const textDynamicSpacing = lang ==='en'?2: 0
  return (
    <div id='contact'>
      <div className="contact-img-container">
        <div className="contact-img-content">
          <Typography style={styles} gutterBottom letterSpacing={titleDynamicSpacing} variant='h4' >{t('contactTitle')}</Typography>
          <Typography style={styles} variant='body1' letterSpacing={textDynamicSpacing}>{t('contactBelow')}</Typography>
        </div>
      </div>
      <HeadOffice lang={lang} />
      <WeAreIn lang={lang}/>
      <div className="scroll-top">
      <Typography sx={{color:'black', maxWidth:'60%'}} variant='h6'>
          {t('beforeScorllText')}
          </Typography>
          <a href='#contact' className='back-to-top'>
            <KeyboardDoubleArrowUpIcon sx={{fontSize:50}} />
          </a>
        </div>
    </div>
  )
}

export default Contact