import React from 'react'
import './styles.css'
import eye from '../../assets/eye.png'
import bullseye from '../../assets/bullseye.png'
import hand from '../../assets/hand.png'
import { Typography } from '@mui/material'
import right from '../../assets/right.png'
import { useTranslation } from 'react-i18next';

const About = ({lang}) => {

  const [t, i18next]= useTranslation();


  const styles = {
    fontFamily: lang ==='ar'? 'myFont': '',
    direction:lang==='ar'?'rtl' :'ltr',
  }

  const dynamicSpacing = lang === 'ar' ? 1 : 15
  const wordSpacing = lang === 'ar' ? 0 : 6

  return (
    <div className="about-container">
      <div className='about-header'>
        {/* <img src={orientLogo} alt='alt' className='orient-logo-img'/>
        <img src={orientContent} alt='alt' className='orient-content-img'/> */}
        <Typography style={styles} fontSize={55} letterSpacing={dynamicSpacing} className='orient-logo-img' fontFamily='monospace'>{t('aboutOrientHeader')}</Typography>
        <div className="orient-letters" style={{left: lang ==='ar'?'20%':''}} >
          <Typography style={styles}   gutterBottom letterSpacing={wordSpacing} fontSize={30} color='#5595D1'><span className='first-letter'>{t('firstLetter')}</span>{t('firstWord')}</Typography>
          <Typography style={styles} gutterBottom letterSpacing={wordSpacing} fontSize={30} color='#5595D1'><span className='first-letter'>{t('secondLetter')}</span>{t('secondWord')}</Typography>
          <Typography style={styles} gutterBottom letterSpacing={wordSpacing} fontSize={30} color='#5595D1'><span className='first-letter'>{t('thirdLetter')}</span>{t('thirdWord')}</Typography>
          <Typography style={styles} gutterBottom letterSpacing={wordSpacing} fontSize={30} color='#5595D1'><span className='first-letter'>{t('fourthLetter')}</span>{t('fourthWord')}</Typography>
          <Typography style={styles} gutterBottom letterSpacing={wordSpacing} fontSize={30} color='#5595D1'><span className='first-letter'>{t('fifthLetter')}</span>{t('fifthWord')}</Typography>
          <Typography style={styles} gutterBottom letterSpacing={wordSpacing} fontSize={30} color='#5595D1'><span className='first-letter'>{t('sixLetter')}</span>{t('sixWord')}</Typography>
        </div>

      </div>

      {/* vision section  */}
      <div className="vision">
        {/* <img src={right} alt="alt" className="vision-right" />
        <img src={right} alt="alt" className="vision-right2" /> */}
        <div className="vision-content">
          <Typography  style={styles}   variant='h5' fontWeight={600} sx={{color:'#5595D1'}}>{t('visionTitle')}</Typography>
          <Typography  style={styles}  variant='body2' fontSize={18} >
            {t('visionText')}
          </Typography>
        </div>
        <img src={eye} alt="alt" className="vision-img" />
      </div>

      {/* missoin section */}
      <div className="mission">
        <img src={bullseye} alt="alt" className="misson-img" />
        <div className="mission-content">
          <Typography  style={styles}  variant='h5' fontWeight={600} sx={{color:'white'}}>{t('missionTitle')}</Typography>
          <Typography  style={styles}  sx={{color:'white'}} variant='body2' fontSize={18} >
          {t('missionText')}
          </Typography>
        </div>
      </div>


      {/* values section */}
      <div className="values">
        <div className="values-content">
          <Typography  style={styles}  variant='h5' fontWeight={600} sx={{color:'#5595D1'}}>{t('valuesTitle')}</Typography>
          <Typography  style={styles}  variant='body2' fontSize={18} >
          {t('valuesText')}
          </Typography>
        </div>

        <img src={hand} alt="alt" className="values-img" />
      </div>
    </div>
  )
}

export default About