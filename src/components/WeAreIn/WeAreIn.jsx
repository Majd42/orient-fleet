import { Typography } from '@mui/material'

import Turkey from '../../assets/Contact us/Flag_of_Turkey.svg.png'
import Panama from '../../assets/Contact us/Flag_of_Panama.svg.png'
import Lebanon from '../../assets/Contact us/Flag_of_Lebanon.svg.png'
import UAE from '../../assets/Contact us/Flag_of_the_United_Arab_Emirates.svg.png'
import UK from '../../assets/Contact us/Flag_of_the_United_Kingdom.svg.png'
import './styles.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
const WeAreIn =({lang}) => {

    const styles ={
        fontFamily: lang ==='ar'? 'myFont': '',
        direction:lang==='ar'?'rtl' :'ltr',
        
        
      
    
      }
      const [t]= useTranslation();
      const titleDynamicSpacing= lang==='en'? 10 : 0
      const textDynamicSpacing = lang ==='en'?2: 0
      

    const  settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <div style={{}}>
            <Typography style={styles} textAlign='center' color='#5595D1' gutterBottom  variant='h4' letterSpacing={titleDynamicSpacing}>
                {t('weAreIn')}
            </Typography>
            {/* <div className="countries">
                <div className="country">
                    <img className='fix-flag' src={Turkey} alt=""/>
                    <Typography  color='white' variant='h5' letterSpacing={2} >Turkey</Typography>
                </div>
                <div className="country">
                    <img src={Panama} alt=""/>
                    <Typography color='white' variant='h5' letterSpacing={2} >Panama</Typography>
                </div>
                <div className="country">
                    <img className='fix-flag' src={UAE} alt=""/>
                    <Typography  color='white' variant='h5' letterSpacing={2} >UAE</Typography>
                </div>
                <div className="country">
                    <img src={UK} alt=""/>
                    <Typography color='white' variant='h5' letterSpacing={2} >United Kingdom</Typography>
                </div>
                <div className="country">
                    <img src={Lebanon} alt=""/>
                    <Typography color='white' variant='h5' letterSpacing={2} >Lebanon</Typography>
                </div>
            </div> */}

            <Slider {...settings} className='countries'  >
                <div className="country">
                    <img className='fix-flag' src={Turkey} alt=""/>
                    <Typography  style={styles}  color='white' variant='h5' letterSpacing={textDynamicSpacing} >{t('Turkey')}</Typography>
                </div>
                <div className="country">
                    <img src={Panama} alt=""/>
                    <Typography style={styles}  color='white' variant='h5' letterSpacing={textDynamicSpacing} >{t('Panama')}</Typography>
                </div>
                <div className="country">
                    <img className='fix-flag' src={UAE} alt=""/>
                    <Typography style={styles}  color='white' variant='h5' letterSpacing={textDynamicSpacing} > {t('UAE')} </Typography>
                </div>
                <div className="country">
                    <img src={UK} alt=""/>
                    <Typography   style={styles}   color='white' variant='h5' letterSpacing={textDynamicSpacing} > {t('UK')} </Typography>
                </div>
                <div className="country">
                    <img src={Lebanon} alt=""/>
                    <Typography style={styles} color='white' variant='h5' letterSpacing={textDynamicSpacing} > {t('Lebanon')} </Typography>
                </div> 
            </Slider>
            

        </div>
    )
}

export default WeAreIn