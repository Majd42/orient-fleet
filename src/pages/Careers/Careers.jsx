import { Typography } from '@mui/material'
import React from 'react'
import CareersMain from '../../components/CareersMain/CareersMain'
import './styles.css'
import { useTranslation } from 'react-i18next';
const Careers = ({lang}) => {


  const styles ={
    fontFamily: lang ==='ar'? 'myFont': '',
    direction:lang==='ar'?'rtl' :'ltr',
    
    

  }
  const [t, i18next] = useTranslation()
  const dynamicSpacing = lang === 'ar' ? 1 : 15
  const TextDynamicSpacing = lang === 'ar' ? 0 : 2
  return (
    <div>
      <CareersMain lang={lang} />
      <div className='careers-paragraph'>
        <Typography maxWidth='60%' letterSpacing={2} variant='body2'>
           {t('careersPar')}
        </Typography>

      </div>
      <div className='careers-img-div'>
        <div className="careers-img-div">
          <div  className="careers-img-content">
            <Typography style={styles}  gutterBottom variant='h3' letterSpacing={2} color='white' >{t('acheiveMore')}</Typography>
            
          </div>
        </div>
      </div>
      <div className='careers-paragraph'>
        <Typography maxWidth='60%' letterSpacing={2} variant='body2'>
          <strong>ORIENT FLEET</strong> company has established its position as a vessel manager at a local and regional level and a provider of marine services.
          
        </Typography>

      </div>
    </div>  
  )
}

export default Careers