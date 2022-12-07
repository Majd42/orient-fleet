import { Typography } from '@mui/material'
import React from 'react'
import CareersMain from '../../components/CareersMain/CareersMain'

const Careers = () => {
  return (
    <div>
      <CareersMain />
      <div className='careers-paragraph'>
        <Typography maxWidth='60%' letterSpacing={2} variant='body2'>
          <strong>ORIENT FLEET</strong> company has established its position as a vessel manager at a local and regional level and a provider of marine services.
          building this confidence is fundamental to what we do by always providing the best, exceeding customer expectations and sharing their values, as we have developed all our strategies to fit with Ethical values social responsibility, innovation and investment of manpowe through a sitinguished staff, to be a leading company in the marine industry.
        </Typography>

      </div>
      <div className='careers-img-div'>
        <div className="careers-img-div">
          <div className="careers-img-content">
            <Typography gutterBottom variant='h3' letterSpacing={2} color='white' >Together we achieve More</Typography>
            <Typography letterSpacing={2} color='white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero doloremque error sapiente ad perferendis at nihil eaque aliquid veritatis a.</Typography>
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