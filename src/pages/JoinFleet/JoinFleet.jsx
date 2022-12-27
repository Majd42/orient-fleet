import { Button, Typography, } from '@mui/material'
import React from 'react'
import './styles.css'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useTranslation } from 'react-i18next';


const BeOneOfUs = ({lang}) => {

    const styles ={
        fontFamily: lang ==='ar'? 'myFont': '',
        
        
        
    
      }
      const [t] = useTranslation()
      const dynamicSpacing = lang === 'ar' ? 1 : 15
      const TextDynamicSpacing = lang === 'ar' ? 0 : 2
  return (
    <div id='joinFleet'>
        <div className="join-img-container">
            <div className="join-img-content">

                <Typography style={styles} color='white' variant='h3' letterSpacing={2}>{t('joinFleetTitle')}</Typography>
                <Typography style={styles} 
                varinat='body1' color='white' letterSpacing={2}>{t('joinFleetText')}
                </Typography>
            </div>
        </div>
        <Typography padding={2} variant='h5' textAlign='center'>Please Provide Your Information Below ...</Typography>
        <form className='contact-form' action="">
            <div className="contact-info">
                <Typography  style={styles} letterSpacing={TextDynamicSpacing} variant='h5'>{t('contactInfo')}</Typography>
                <div className="form-control">
                    <label>{t('fname')}</label>
                    <input className='contact-input' type='text' name='fname'required/>
                </div>
                <div className="form-control">
                    <label>{t('lname')}</label>
                    <input className='contact-input' type='text' name='lname'  required/>
                </div>
                <div className="form-control">
                    <label>{t('mail')}</label>
                    <input className='contact-input' type='email' name='email'  required/>
                </div>
                <div className="form-control">
                    <label>{t('Mobile')}</label>
                    <input className='contact-input' type='text' name='mobile'  />
                </div>
            </div>
            <div className="employment-details">
                <Typography style={styles} letterSpacing={TextDynamicSpacing } variant='h5'>{t('empDetails')}</Typography>
                <div className="employment-info">
                    <div className="form-control">
                        <label style={{ fontSize:"1.4rem"}}>{t('availability')}</label>
                        <input className='contact-input' type='text' name='availability'  required/>
                    </div>
                    <div className="atachment-info">
                        <Typography style={styles} letterSpacing={TextDynamicSpacing} gutterBottom variant='h5' color='white'>{t('atachInfo')}</Typography>
                        <label className='file-upload'>
                            {t('browse')}
                            <input type='file' />
                        </label>
                    </div>
                </div>

                <button className='submit-btn' type='submit'>{t('submit')}</button>
            </div>

            
        </form>

        <div className="scroll-top">
          <Typography sx={{color:'black', maxWidth:'60%'}} variant='h6'>
          {t('beforeScorllText')}
          </Typography>
          <a href='#joinFleet' className='back-to-top'>
            <KeyboardDoubleArrowUpIcon sx={{fontSize:50}} />
          </a>
        </div>
    </div>
  )
}

export default BeOneOfUs