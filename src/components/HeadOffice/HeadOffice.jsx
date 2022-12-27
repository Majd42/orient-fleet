import { Typography } from '@mui/material'
import React from 'react'
import './styles.css'
import Syria from '../../assets/Contact us/Syrian Flag.jpg'
import { useTranslation } from 'react-i18next';

const HeadOffice = ({lang}) => {

  const styles ={
    fontFamily: lang ==='ar'? 'myFont': '',
    direction:lang==='ar'?'rtl' :'ltr',
    
    

  }
  const [t, i18next] = useTranslation()
  const dynamicSpacing = lang === 'ar' ? 1 : 15
  const TextDynamicSpacing = lang === 'ar' ? 0 : 2
  return (
    <div style={{paddingBottom: '2rem'}}>
        <Typography style={styles} textAlign='center' padding={3} variant='h4' color='#5595D1' letterSpacing={dynamicSpacing}>{t('headOfficeTitle')}</Typography>
        <div className="office-content">
            <div className="office-info">
                <Typography style={styles} variant='h4' color='#5595D1'>{t('syria')}</Typography>
                <Typography style={styles} fontWeight={'700'} variant='body1'>{t('address')}: {t('location')}</Typography>
                <Typography style={styles} fontWeight={'700'} variant='body1'>
                  {t('email')}:<a style={{color:'black',}} className='email-link' href="mailto:info@orientfleet.me"> info@orientfleet.me</a>
                </Typography>
                <Typography style={styles} fontWeight={'700'} variant='body1'>{t('mobile')}: +963 930 770 666</Typography>
                <Typography style={styles} fontWeight={'700'} variant='body1'>{t('telegram')}: +963 041 9994</Typography>
                <Typography style={styles} fontWeight={'700'} variant='body1'> {t('telephone')}: +963 041 2553312</Typography>
                <Typography style={styles} fontWeight={'700'} variant='body1'>{t('fax')}: +963 041 2553312</Typography>
            </div>
            <img src={Syria} alt="alt" className='syria-flag' />
        </div>
    </div>
  )
}

export default HeadOffice
