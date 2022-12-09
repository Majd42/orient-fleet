import { Typography } from '@mui/material'
import React from 'react'
import './styles.css'
import Syria from '../../assets/Contact us/Syrian Flag.jpg'

const HeadOffice = () => {
  return (
    <div style={{paddingBottom: '2rem'}}>
        <Typography textAlign='center' padding={3} variant='h4' color='#5595D1' letterSpacing={9}>Head Office</Typography>
        <div className="office-content">
            <div className="office-info">
                <Typography variant='h4' color='#5595D1'>Syria</Typography>
                <Typography variant='body1'>P.o.Box- 0000 Baghdad Street, Next to Latin Church LATAKIA - SYRIA</Typography>
                <Typography variant='body1'>
                  Email:<a href="mailto:info@orientfleet.me"> info@orientfleet.me</a>
                </Typography>
                <Typography variant='body1'>Mob: +963 930 770 666</Typography>
                <Typography variant='body1'>Tel: +963 041 9994</Typography>
                <Typography variant='body1'> Tel: +963 041 2553312</Typography>
                <Typography variant='body1'>Fax: +963 041 2553312</Typography>
            </div>
            <img src={Syria} alt="alt" className='syria-flag' />
        </div>
    </div>
  )
}

export default HeadOffice