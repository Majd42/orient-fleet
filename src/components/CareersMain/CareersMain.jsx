import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import IMG1 from '../../assets/Careers/1.jpg'
import IMG2 from '../../assets/Careers/2.jpg'
import IMG3 from '../../assets/Careers/3.jpg'
import { Link } from 'react-router-dom'
import './styles.css'
import { useTranslation } from 'react-i18next';
const CareersMain = ({lang}) => {

    const styles ={
        fontFamily: lang ==='ar'? 'myFont': '',
        direction:lang==='ar'?'rtl' :'ltr',
        
        
    
      }
      const [t, i18next] = useTranslation()
      const dynamicSpacing = lang === 'ar' ? 1 : 15
      const TextDynamicSpacing = lang === 'ar' ? 0 : 2
  return (
    <div className='careers-main'>
        <div className="careers-main-content">
            <Link to='/beoneofus' style={{textDecoration:'none'}}>

                <Card sx={{maxWidth: 345}} className='career-card'>
                    <CardMedia 
                        component='img'
                        height={290}
                        image={IMG1}
                        className='cmain-img'
                    />
                    <CardContent>
                        <Typography style={styles} textAlign='center' variant='h5' >{t('onOfUsTitle')}</Typography>
                    </CardContent>
                </Card>
            </Link>

            <Link to='/guidvessels' style={{textDecoration:'none'}}>

                <Card sx={{maxWidth: 345}} className='career-card'>
                    <CardMedia 
                        component='img'
                        height={290}
                        image={IMG2}
                        className='cmain-img'
                    />
                    <CardContent>
                        <Typography style={styles} textAlign='center' variant='h5' > {t('guideVesselsTitle')} </Typography>
                    </CardContent>
                </Card>
            </Link>

            <Link to='/joinourfleet' style={{textDecoration:'none'}}>

                <Card sx={{maxWidth: 345}} className='career-card'>
                    <CardMedia 
                        component='img'
                        height={290}
                        image={IMG3}
                        className='cmain-img'
                    />
                    <CardContent>
                        <Typography style={styles} textAlign='center' variant='h5' >{t('joinFleetTitle')}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </div>
    </div>
  )
}

export default CareersMain