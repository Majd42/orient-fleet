import { Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/logo-footer.png'
import { Link } from 'react-router-dom'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from 'react-i18next';
import './styles.css'



const Footer = () => {

  const [t, i18next] = useTranslation()


  return (
    <footer>

      <div className="footer-container">

          <div className="footer-links-container">
              <div className="footer-links">
                <Link to='/' style={{textDecoration: 'none'}}><img className='footer-logo' src={logo} alt="alt"  /></Link>
                <Link to={t('page1')} className='footer-link'>
                  <Typography>{t('page1')}</Typography>
                </Link> 
                <Link to={t('page2')} className='footer-link'>
                  <Typography>{t('page2')}</Typography>
                </Link>
                <Link to={t('page3')} className='footer-link'>
                  <Typography>{t('page3')}</Typography>
                </Link>
                <Link to={t('page4')} className='footer-link'>
                  <Typography>{t('page4')}</Typography>
                </Link>
                <Link to={t('page5')} className='footer-link'>
                  <Typography>{t('page5')}</Typography>
                </Link>
                <Link to={t('page6')} className='footer-link'>
                  <Typography>{t('page6')}</Typography>
                </Link>
              </div>
          </div>
          <div className="footer-contact-container">
            <div className="footer-contact">
              <div className="footer-contact-option">
                <PhoneAndroidIcon />
                <Typography variant='body2' sx={{color:'white'}}>+963 930 770 666</Typography>
              </div>
              <div className="footer-contact-option">
                <LocalPhoneIcon />
                <Typography variant='body2' sx={{color:'white'}}>+963 041 2553312\+963 041 9994</Typography>
              </div>
              <div className="footer-contact-option">
                <LocalPrintshopIcon />
                <Typography variant='body2' sx={{color:'white'}}>+963 041 255 3311</Typography>
              </div>
              <div className="footer-contact-option">
                <EmailIcon />
                <Typography variant='body2' sx={{color:'white'}}>info@oriantfleet.me</Typography>
              </div>
              <div className="footer-contact-option">
                <LocationOnIcon />
                <Typography variant='body2' sx={{color:'white'}}>P.O.Box- 667 - Baghdad Street. Next To Latin Church - Latakia -Syria</Typography>
              </div>
            </div>
          </div>
          <div className="footer-socials-container">
            <div className="footer-socials">
              <a className='footer-link ' href="#">
                <FacebookIcon sx={{fontSize: 40}} />
              </a>
              <a className='footer-link ' href="#">
                <LinkedInIcon sx={{fontSize: 40}} />
              </a>
              <a className='footer-link ' href="#">
                <InstagramIcon sx={{fontSize: 40}} />
              </a>
            </div>
          </div>
      </div>

      <Typography sx={{backgroundColor:'#5a97d0', color: 'white', textAlign:'center', paddingTop:'10px', paddingBottom:'.5rem'}} variant='subtitle2'>&#169; {t('rights')} </Typography>

    </footer>
  )
}

export default Footer