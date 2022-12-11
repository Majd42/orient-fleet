import React from 'react'
import './styles.css'
import eye from '../../assets/eye.png'
import bullseye from '../../assets/bullseye.png'
import hand from '../../assets/hand.png'
import { Typography } from '@mui/material'
import right from '../../assets/right.png'
import { useTranslation } from 'react-i18next';

const About = () => {

  const [t, i18next]= useTranslation();
  return (
    <div className="about-container">
      <div className='about-header'>
        {/* <img src={orientLogo} alt='alt' className='orient-logo-img'/>
        <img src={orientContent} alt='alt' className='orient-content-img'/> */}
        <Typography fontSize={55} letterSpacing={25} className='orient-logo-img' fontFamily='monospace'>Orient</Typography>
        <div className="orient-letters">
          <Typography  gutterBottom letterSpacing={6} fontSize={30} color='#5595D1'><span className='first-letter'>O</span>pportunity</Typography>
          <Typography gutterBottom letterSpacing={6} fontSize={30} color='#5595D1'><span className='first-letter'>R</span>eality</Typography>
          <Typography gutterBottom letterSpacing={6} fontSize={30} color='#5595D1'><span className='first-letter'>I</span>mprovement</Typography>
          <Typography gutterBottom letterSpacing={6} fontSize={30} color='#5595D1'><span className='first-letter'>E</span>mpowerment</Typography>
          <Typography gutterBottom letterSpacing={6} fontSize={30} color='#5595D1'><span className='first-letter'>N</span>eoteric</Typography>
          <Typography gutterBottom letterSpacing={6} fontSize={30} color='#5595D1'><span className='first-letter'>T</span>transparency</Typography>
        </div>

      </div>

      {/* vision section  */}
      <div className="vision">
        {/* <img src={right} alt="alt" className="vision-right" />
        <img src={right} alt="alt" className="vision-right2" /> */}
        <div className="vision-content">
          <Typography  variant='h5' fontWeight={600} sx={{color:'#5595D1'}}>{t('visionTitle')}</Typography>
          <Typography variant='body2' fontSize={18} >
            {t('visionText')}
          </Typography>
        </div>
        <img src={eye} alt="alt" className="vision-img" />
      </div>

      {/* missoin section */}
      <div className="mission">
        <img src={bullseye} alt="alt" className="misson-img" />
        <div className="mission-content">
          <Typography variant='h5' fontWeight={600} sx={{color:'white'}}>{t('missionTitle')}</Typography>
          <Typography sx={{color:'white'}} variant='body2' fontSize={18} >
          {t('missionText')}
          </Typography>
        </div>
      </div>


      {/* values section */}
      <div className="values">
        <div className="values-content">
          <Typography variant='h5' fontWeight={600} sx={{color:'#5595D1'}}>{t('valuesTitle')}</Typography>
          <Typography variant='body2' fontSize={18} >
          {t('valuesText')}
          </Typography>
        </div>

        <img src={hand} alt="alt" className="values-img" />
      </div>
    </div>
  )
}

export default About