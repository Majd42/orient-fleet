import React from 'react'
import { Typography } from '@mui/material'
import './styles.css'
import FSM1 from '../../assets/Services/FSM 1.jpg'
import FSM2 from '../../assets/Services/FSM 2.jpg'
import Crew1 from '../../assets/Services/Crew 1.jpg'
import Crew2 from '../../assets/Services/Crew 2.jpg'
import Tech1 from '../../assets/Services/Technical 1.jpg'
import Tech2 from '../../assets/Services/Technical 2.jpg'
import ISM1 from '../../assets/Services/ISM 1.jpg'
import ISM2 from '../../assets/Services/ISM 2.jpg'
import Pre from '../../assets/Services/Pre Purchase Inspection.jpeg'
import Cargo from '../../assets/Services/Cargo.jpg'
import { useTranslation } from 'react-i18next';

const Services = ({lang}) => {

  const styles ={
    fontFamily: lang ==='ar'? 'myFont': '',
    direction:lang==='ar'?'rtl' :'ltr',
    
    
  

  }
  const [t, i18next]= useTranslation();
  const titleDynamicSpacing= lang==='en'? 10 : 0
  const textDynamicSpacing = lang ==='en'?2: 0
  return (
    <div className='services-container'>
      <div className="services-hero">
        <div className="services-hero-content" style={{marginLeft: lang==='ar'?'0':''}}>
          <Typography style={styles} sx={{color:'white',fontSize:lang==='ar'?'4rem':'2rem', }}  letterSpacing={titleDynamicSpacing}>{t('servicesTitle')}</Typography>
          <Typography sx={{color:'white'}} variant='body2' letterSpacing={textDynamicSpacing} >{t('servicesText')}
          </Typography>
        </div>
      </div>


      {/* Services */}
      <div className="services-grid">
        
            {/* {services.map(service => (
              <div key={service} className="service">
                <Typography>{service}</Typography>
              </div>
            ))} */}

            <a href='#techSupport' style={{textDecoration: 'none'}}>
              <div className="service order1">
                <Typography style={styles} sx={{color:'white', textAlign:'center'}} variant='h4'>{t('technicalSupport')} </Typography>
              </div>
            </a>

            <a href='#shipManagement' style={{textDecoration:'none'}}>

              <div className="service order2">
                <Typography style={styles} sx={{color:'white', textAlign:'center'}} variant='h4'>{t('shipManagement')}</Typography>
              </div>
            </a>

            <a href='#crewManagement' style={{textDecoration:'none'}}>

              <div className="service order3">
                <Typography style={styles} sx={{color:'white', textAlign:'center'}} variant='h4'>{t('crewManagement')}</Typography>
              </div>
            </a>

            <a href='#auditing' style={{textDecoration:'none'}}>

              <div className="service order4">
                <Typography style={styles} sx={{color:'white', textAlign:'center'}} variant='h4'>{t('ISM')}</Typography>
              </div>
            </a>
            
            <a href='#inspection' style={{textDecoration:'none'}}>

              <div className="service order5">
                <Typography style={styles} sx={{color:'white', textAlign:'center'}} variant='h4'>{t('prePurchase')}</Typography>
              </div>
            </a>

            <a href='#cargoRoutine' style={{textDecoration:'none'}}>

              <div className="service order6">
                <Typography style={styles} sx={{color:'white', textAlign:'center'}} variant='h4'>{t('cargoRoutine')}</Typography>
              </div>
            </a>
          
       
      </div>

      {/* ship Management */}

      <div id='shipManagement'  className="ship-management">
        <Typography style={styles}  textAlign='center' letterSpacing={titleDynamicSpacing} color='#5595D1' variant='h4'>{t('shipManagement')}</Typography>
        <div className="management-one">
            <img src={FSM1} alt="alt" className='fsm-img' />
            <ul>
              <li>
                <Typography gutterBottom  style={styles} fontWeight={600} variant='body2'>
                  {t('fsmHeader')}
                </Typography>
              </li>
              <li>
                <Typography gutterBottom  style={styles}  fontWeight={600} variant='body2'>
                  {t('fsmService1')}
                </Typography>
              </li>
              <li>
                <Typography gutterBottom  style={styles} fontWeight={600} variant='body2'>
                {t('fsmService2')}
                </Typography>
              </li>
              <li>
                <Typography gutterBottom  style={styles} fontWeight={600} variant='body2'>
                {t('fsmService3')}
                </Typography>
              </li>
              <li>
                <Typography gutterBottom  style={styles} fontWeight={600} variant='body2'>
                {t('fsmService4')}
                </Typography>
              </li>
            </ul>
        </div>
        <div className="management-two">
            <ul>
              <li>
                <Typography gutterBottom  style={styles} fontWeight={600} variant='body2'>
                {t('fsmService5')}
                </Typography>
              </li>
              <li>
                <Typography gutterBottom  style={styles} fontWeight={600} variant='body2'>
                {t('fsmService6')}
                </Typography>
              </li>
              <li>
                <Typography style={styles} fontWeight={600} variant='body2'>
                {t('fsmService7')}
                </Typography>
              </li>
            </ul>
            <img src={FSM2} alt="alt" className='fsm-img' />
        </div>
      </div>


      {/* crew Management */}
      <div id='crewManagement' className="crew-management">
        <Typography style={styles} padding={4} letterSpacing={titleDynamicSpacing} variant='h4' >{t('crewManagement')}</Typography>
        <div className="crew-management-container">
          <img src={Crew1} alt="alt" className='crew1-img' />
          <div className="crew-management-content">
            <Typography style={styles} letterSpacing={textDynamicSpacing} color='white' >
              {t('managementHeader')}
            </Typography  >
            <ul style={styles} >
              <li>
                <Typography style={styles} letterSpacing={textDynamicSpacing} color='white' >{t('managementService1')}</Typography>
              </li>
              <li>
                <Typography style={styles} letterSpacing={textDynamicSpacing} color='white' >{t('managementService2')}</Typography>
              </li>
              <li>
                <Typography style={styles} letterSpacing={textDynamicSpacing} color='white' >
                {t('managementService3')}
                </Typography>
              </li>
              <li>
                <Typography style={styles} letterSpacing={textDynamicSpacing} color='white' >{t('managementService4')}</Typography>
              </li>
              <li>
                <Typography style={styles} letterSpacing={textDynamicSpacing} color='white' >{t('managementService5')}</Typography>
              </li>
              <li>
                <Typography style={styles} letterSpacing={textDynamicSpacing} color='white' >{t('managementService6')}</Typography>
              </li>
              
            </ul>
            <img src={Crew2} alt="alt" className='crew-li-img' />
          </div>
        </div>
      </div>



      {/* tech and operational support */}

      <div id='techSupport' className="tech-support">
        <Typography letterSpacing={titleDynamicSpacing} variant='h4' textAlign='center' color='#5595D1' padding={4} >{t('technicalSupport')} </Typography>
        <div className="tech-support-container">
          <img src={Tech1} className='tech1-img' alt="alt" />
          <div className="tech-support-content">
            <div className="tech-support-content-left">
              <Typography style={styles} letterSpacing={textDynamicSpacing} >{t('technicalHeader')}</Typography>
              <ul style={styles}>
                <li>
                  <Typography style={styles}  letterSpacing={textDynamicSpacing} >{t('technicalService1')}</Typography>
                </li>
                <li>
                  <Typography style={styles}  letterSpacing={textDynamicSpacing} >
                  {t('technicalService2')}
                  </Typography>
                </li>
                <li>
                  <Typography style={styles}  letterSpacing={textDynamicSpacing} >
                  {t('technicalService3')}
                  </Typography>
                </li>
                <li>
                  <Typography style={styles}  letterSpacing={textDynamicSpacing}  >
                  {t('technicalService4')}
                  </Typography>
                </li>
                <li>
                  <Typography style={styles}  letterSpacing={textDynamicSpacing} >
                  {t('technicalService5')}
                  </Typography>
                </li>
                <li>
                  <Typography style={styles}  letterSpacing={textDynamicSpacing} > 
                  {t('technicalService6')}
                  </Typography>
                </li>
              </ul>
            </div>
            <img src={Tech2} alt="alt" className='tech2-img' /> 
            
          </div>

        </div>
      </div>



      {/* ISM/ISPS/MLC Auditing */}

      <div id='auditing' className="auditing">
        <Typography style={styles} padding={4} color='white' variant='h4' letterSpacing={titleDynamicSpacing} textAlign='center'>{t('ISM')}</Typography>
        <div className="auditing-container">
          <div className="auditing-content">
              <img src={ISM2} alt="" className='ism1-img' />
              <Typography style={styles} letterSpacing={textDynamicSpacing} color='white'>{t('ismText')} </Typography>
          </div>
          <img src={ISM1} alt="" className='ism2-img' />
        </div>
      </div>

      {/* pre purchase inspection */}
      <div id='inspection' className="pre-purchase">
        <Typography style={styles} variant='h4' letterSpacing={titleDynamicSpacing} textAlign='center' padding={4}>{t('prePurchase')}</Typography>
        <div className="pre-purchase-container">
            <img src={Pre} alt="" className='pre-img' />
            <div className="pre-purchase-content">
                <Typography style={styles} letterSpacing={textDynamicSpacing}>
                  {t('preParagraph')}

                </Typography>
               
            </div>
        </div>
      </div>


      {/* Cargo Routine Inspection */}
      <div id='#cargoRoutine' className="cargo-routine">
        <Typography style={styles} color='#5595D1' variant='h4' textAlign='center' padding={4} letterSpacing={titleDynamicSpacing}>{t('cargoRoutine')}</Typography>
        <div className="cargo-routine-content">
          <img src={Cargo} alt="" />
          <Typography style={styles} variant='body1' letterSpacing={textDynamicSpacing}>
            {t('cargoParagraph')}
            
          </Typography>
          <Typography style={styles}  variant='h5' textAlign='center' padding={2} letterSpacing={textDynamicSpacing}>{t('shipSurveys')}</Typography>
          <ol>
            <li> 
              <Typography style={styles} variant='body1' letterSpacing={textDynamicSpacing} >

                {t('survey1')}  
              </Typography>
              

            </li>
            <li> 
              <Typography style={styles} variant='body1' letterSpacing={textDynamicSpacing} >
                
                {t('survey2')}  
              </Typography>
               

            </li>
            <li> 
              <Typography style={styles} variant='body1' letterSpacing={textDynamicSpacing} >
                
                {t('survey3')}
              </Typography>
               

            </li>
          </ol>
          
        </div>
      </div>
    </div>
  )
}

export default Services