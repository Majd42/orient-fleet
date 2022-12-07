import { Button, Typography, Box, IconButton } from '@mui/material'
import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const Home = () => {
  return (
    <>
      {/* First Section. ends before success counter */}
      <div className='home-container'>
        <div id='firstSection' className='first-section'>
          <div className='first-content'>
            <Typography fontWeight={500} letterSpacing={2} textAlign='center' variant='h3'>Partner of your secure future</Typography>

            <Typography letterSpacing={2} textAlign='center' marginTop={4} variant='body1'>Build a business mindset that opens up oppertunities in a large market with a lot of competitors, that is our first motivation in working</Typography>

            
            <Button component={Link} to='/services' sx={{marginTop: '3rem', textAlign:'center', backgroundColor:'#5595D0', borderRadius:'1.2rem'}} variant='contained'>
              Learn More
            </Button>
          </div>
        </div>

        {/* about, services and contact sections  */}
        <Link style={{textDecoration: 'none'}} to='/about'>
          <Box className="about-section">
            <div className='about-content'>
              <Typography variant='h2' letterSpacing={15} fontSize={50} fontWeight={600} sx={{color: 'white'}}>About</Typography>
              <Typography lineHeight={1.8} variant='body2' letterSpacing={2} sx={{color:'white',}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. tempore recusandae,Quibusdam quisquam sit officiis nisi obcaecati?  </Typography>
            </div>
          </Box>
        </Link>

        <Link style={{textDecoration: 'none'}}  to='/services'>
          <Box className="services-section">
            <div className='services-content'>
              <Typography variant='h2' letterSpacing={15} fontSize={50} fontWeight={600} sx={{color: 'white'}}>Services</Typography>
              <Typography lineHeight={1.8} variant='body2' letterSpacing={2} sx={{color:'white',}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. tempore recusandae,Quibusdam quisquam sit officiis nisi obcaecati?  </Typography>
            </div>
          </Box>
        </Link>

        <Link style={{textDecoration: 'none'}}  to='/contact'>
          <Box className="contact-section">
            <div className='contact-content'>
              <Typography variant='h2' letterSpacing={15} fontSize={50} fontWeight={600} sx={{color: 'white'}}>Contact</Typography>
              <Typography lineHeight={1.8} variant='body2' letterSpacing={2} sx={{color:'white',}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. tempore recusandae,Quibusdam quisquam sit officiis nisi obcaecati?  </Typography>
            </div>
          </Box>
        </Link>


      </div>
      {/* end of first section  */}



        {/* success counter */}
        <div className='success-counter'>
          <Typography fontSize={40} fontWeight={600} letterSpacing={15} sx={{color:'#5595D0'}} variant='h4' >Success Counter</Typography>
        </div>
        <div className="success-counter-content">
          <div className="success-counter-stat">
            <Typography variant='h3' sx={{color:'white'}}>+42</Typography>
            <Typography letterSpacing={4} variant='body1' sx={{color:'white'}} >Our Experience</Typography>
          </div>
          <div className="success-counter-stat">
            <Typography variant='h3' sx={{color:'white'}}><AllInclusiveIcon sx={{fontSize:'3.5rem'}} /></Typography>
            <Typography letterSpacing={4} variant='body1' sx={{color:'white'}} >Countries</Typography>
          </div>
          <div className="success-counter-stat">
            <Typography variant='h3' sx={{color:'white'}}>+120</Typography>
            <Typography letterSpacing={4} variant='body1' sx={{color:'white'}} >Seafareres Worldwide</Typography>
          </div>
          <div className="success-counter-stat">
            <Typography variant='h3' sx={{color:'white'}}>+5</Typography>
            <Typography letterSpacing={4} variant='body1' sx={{color:'white'}} >Vessels Managed By Us</Typography>
          </div>
          <div className="success-counter-stat">
            <Typography variant='h3' sx={{color:'white'}}>+6</Typography>
            <Typography letterSpacing={4} variant='body1' sx={{color:'white'}} >Global Offices</Typography>
          </div>
        </div>

        {/* end of success counter */}


        {/* scroll to top section */}

        <div className="scroll-top">
          <Typography sx={{color:'black', maxWidth:'60%'}} variant='h6'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, aut nam corrupti dolorem quia eligendi.
          </Typography>
          <a href='#firstSection' className='back-to-top'>
            <ArrowCircleUpIcon sx={{fontSize:40}} />
          </a>
        </div>
    </>
  )
}

export default Home