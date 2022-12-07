import { Typography } from '@mui/material'
import React from 'react'
import HeadOffice from '../../components/HeadOffice/HeadOffice'
import WeAreIn from '../../components/WeAreIn/WeAreIn'
import './styles.css'

const Contact = () => {
  return (
    <div>
      <div className="contact-img-container">
        <div className="contact-img-content">
          <Typography gutterBottom letterSpacing={3} variant='h4' >Contact us</Typography>
          <Typography variant='body2' letterSpacing={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, debitis natus.c.careers-main-content.careers-main-content quo, reprehenderit sint mollitia non dolorum illum maiores doloribus excepturi explicabo tenetur quidem?</Typography>
        </div>
      </div>
      <HeadOffice />
      <WeAreIn />
      <div className='contact-paragraph'>
        <Typography maxWidth='60%' letterSpacing={2} variant='body2'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, reprehenderit! Cum aliquam distinctio adipisci reiciendis iure modi possimus voluptate incidunt!
          
        </Typography>

      </div>
    </div>
  )
}

export default Contact