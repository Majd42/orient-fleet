import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import IMG1 from '../../assets/Careers/1.jpg'
import IMG2 from '../../assets/Careers/2.jpg'
import IMG3 from '../../assets/Careers/3.jpg'
import { Link } from 'react-router-dom'
import './styles.css'

const CareersMain = () => {
  return (
    <div className='careers-main'>
        <div className="careers-main-content">
            <Link to='/beoneofus' style={{textDecoration:'none'}}>

                <Card sx={{maxWidth: 345}}>
                    <CardMedia 
                        component='img'
                        height={290}
                        image={IMG1}
                        className='cmain-img'
                    />
                    <CardContent>
                        <Typography textAlign='center' variant='h4' >Be one of us</Typography>
                    </CardContent>
                </Card>
            </Link>

            <Link to='/referabusiness' style={{textDecoration:'none'}}>

                <Card sx={{maxWidth: 345}}>
                    <CardMedia 
                        component='img'
                        height={290}
                        image={IMG2}
                        className='cmain-img'
                    />
                    <CardContent>
                        <Typography textAlign='center' variant='h4' >Refer A business</Typography>
                    </CardContent>
                </Card>
            </Link>

            <Link to='/joinourfleet' style={{textDecoration:'none'}}>

                <Card sx={{maxWidth: 345}}>
                    <CardMedia 
                        component='img'
                        height={290}
                        image={IMG3}
                        className='cmain-img'
                    />
                    <CardContent>
                        <Typography textAlign='center' variant='h4' >Join our Fleet</Typography>
                    </CardContent>
                </Card>
            </Link>
        </div>
    </div>
  )
}

export default CareersMain