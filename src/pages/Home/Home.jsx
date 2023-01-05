import { Button, Typography, Box, IconButton } from '@mui/material'
import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { useTranslation } from 'react-i18next';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
const Home = ({lang}) => {


  const styles ={
    fontFamily: lang ==='ar'? 'myFont': '',
    direction:lang==='ar'?'rtl' :'ltr',
    
    

  }
  const [t] = useTranslation()
  const dynamicSpacing = lang === 'ar' ? 1 : 15
  const TextDynamicSpacing = lang === 'ar' ? 0 : 2
  return (
    <div >
      {/* First Section. ends before success counter */}
      <div  className='home-container'>
        <div id='firstSection' className='first-section'>
          <div className='first-content'>
            {/* <Typography>{t('title')}</Typography> */}
            <Typography textAlign={'center'} variant='h3' sx={{fontFamily: lang ==='ar' ? 'myFont':'', direction:lang==='ar'?'rtl' :'ltr'}} className='header' >{t('homeMainHeader')}</Typography>

            <Typography sx={{fontFamily: lang ==='ar' ? 'myFont':'', direction:lang==='ar'?'rtl' :'ltr'}}  letterSpacing={TextDynamicSpacing} textAlign='center' marginTop={4} variant='h6  '>{t('homeMainText')}</Typography>

            
            <Button style={{fontFamily: lang ==='ar' ? 'myFont':'', direction:lang==='ar'?'rtl' :'ltr'}} component={Link} to={'/about'} sx={{marginTop: '3rem', textAlign:'center', backgroundColor:'#5595D0', borderRadius:'1.2rem'}} variant='contained'>
              {t('learnMoreText')}
            </Button>
          </div>
        </div>

        {/* about, services and contact sections  */}
        <Link style={{textDecoration: 'none'}} to='/about'>
          <Box className="about-section">
            <div className='about-content'>
              <Typography style={styles}  variant='h2' letterSpacing={dynamicSpacing} fontSize={50} fontWeight={600} sx={{color: 'white'}}>{t('aboutTitle')}</Typography>
              {/* <Typography  lineHeight={1.8} variant='body2' letterSpacing={2} sx={{color:'white',}}>{t('aboutText')} </Typography> */}
            </div>
          </Box>
        </Link>

        <Link style={{textDecoration: 'none'}}  to='/services'>
          <Box className="services-section">
            <div className='services-content'>
              <Typography style={styles} variant='h2' letterSpacing={dynamicSpacing} fontSize={50} fontWeight={600} sx={{color: 'white'}}>{t('servicesTitle')}</Typography>
              {/* <Typography lineHeight={1.8} variant='body2' letterSpacing={2} sx={{color:'white',}}>{t('servicesText')} </Typography> */}
            </div>
          </Box>
        </Link>

        <Link style={{textDecoration: 'none'}}  to='/contact'>
          <Box className="contact-section">
            <div className='contact-content'>
              <Typography style={styles} variant='h2' letterSpacing={dynamicSpacing} fontSize={50} fontWeight={600} sx={{color: 'white'}}>{t('contactTitle')}</Typography>
              {/* <Typography lineHeight={1.8} variant='body2' letterSpacing={2} sx={{color:'white',}}>{t('contactText')}  </Typography> */}
            </div>
          </Box>
        </Link>


      </div>
      {/* end of first section  */}



        {/* success counter */}
        <div className='success-counter'>
          <Typography fontSize={40} fontWeight={600} letterSpacing={dynamicSpacing} sx={{color:'#5595D0'}} variant='h4' >{t('successCounterTitle')}</Typography>
        </div>
        <div className="success-counter-content">
          <div className="success-counter-stat">
            <Typography variant='h3' sx={{color:'white'}}>+42</Typography>
            <Typography style={styles} letterSpacing={1} variant='body1' sx={{color:'white'}} >{t('expText')}</Typography>
          </div>
          <div className="success-counter-stat">
            <Typography variant='h3' sx={{color:'white'}}><AllInclusiveIcon sx={{fontSize:'3.5rem'}} /></Typography>
            <Typography style={styles} letterSpacing={1} variant='body1' sx={{color:'white'}} >{t('countriesText')}</Typography>
          </div>
          <div className="success-counter-stat">
            <Typography variant='h3' sx={{color:'white'}}>+120</Typography>
            <Typography style={styles} letterSpacing={1} variant='body1' sx={{color:'white'}} >{t('seafarersText')}</Typography>
          </div>
          <div className="success-counter-stat">
            <Typography variant='h3' sx={{color:'white'}}>+5</Typography>
            <Typography style={styles} letterSpacing={1} variant='body1' sx={{color:'white'}} >{t('vesselsText')}</Typography>
          </div>
          <div className="success-counter-stat">
            <Typography variant='h3' sx={{color:'white'}}>+6</Typography>
            <Typography style={styles} letterSpacing={1} variant='body1' sx={{color:'white'}} >{t('globalOfficesText')}</Typography>
          </div>
        </div>

        {/* end of success counter */}


        {/* scroll to top section */}

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

export default Home