import { CardMedia, Typography, Card, CardContent, CardActions, Button } from '@mui/material'
import React, { useState } from 'react'
import Investment from '../../assets/Investments/Ship Investment.jpg'
import InvestmentMore from '../InvesmentMore/InvestmentMore'
import './styles.css'
const AvailableInvestments = () => {
    const [openMoreInfo, setOpenMoreInfo]= useState(false)

    const handleOpenMore = () => {
        setOpenMoreInfo(true)
    }

    const handleCloseMoreInfo = () => {
        setOpenMoreInfo(false)
    }
    
  return (
    <div className='available-invesmtents'>
        <Typography letterSpacing={2} padding={4} variant='h4' color='#5595D1' textAlign='center'>Available Investments</Typography>
        <div className="investments-content">
            <Card sx={{maxWidth: 385}}>
                <CardMedia 
                    component='img'
                    height={190}
                    image={Investment}
                    alt='alt'
                    />
                <CardContent>
                    <Typography letterSpacing={2} gutterBottom component='div' variant='h5'>Investment Name</Typography>
                    <Typography letterSpacing={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eaque omnis facilis accusantium, eum officia vero quos ad rem! Sit, maxime sunt provident autem cum mollitia? Praesentium autem quod accusantium!</Typography>
                </CardContent>
                
                <CardActions sx={{display:'flex', justifyContent:'center'}}>
                    <Button onClick={handleOpenMore} variant='contained'>Learn More</Button>
                </CardActions>
            </Card>
            <Card sx={{maxWidth: 385}}>
                <CardMedia 
                    component='img'
                    height={190}
                    image={Investment}
                    alt='alt'
                    />
                <CardContent>
                    <Typography letterSpacing={2} gutterBottom component='div' variant='h5'>Investment Name</Typography>
                    <Typography letterSpacing={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eaque omnis facilis accusantium, eum officia vero quos ad rem! Sit, maxime sunt provident autem cum mollitia? Praesentium autem quod accusantium!</Typography>
                </CardContent>

                <CardActions sx={{display:'flex', justifyContent:'center'}}>
                    <Button onClick={handleOpenMore} variant='contained'>Learn More</Button>
                </CardActions>
            </Card>
            <Card sx={{maxWidth: 385}}>
                <CardMedia 
                    component='img'
                    height={190}
                    image={Investment}
                    alt='alt'
                    />
                <CardContent>
                    <Typography letterSpacing={2} gutterBottom component='div' variant='h5'>Investment Name</Typography>
                    <Typography letterSpacing={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eaque omnis facilis accusantium, eum officia vero quos ad rem! Sit, maxime sunt provident autem cum mollitia? Praesentium autem quod accusantium!</Typography>
                </CardContent>

                <CardActions sx={{display:'flex', justifyContent:'center'}}>
                    <Button onClick={handleOpenMore}  variant='contained'>Learn More</Button>
                </CardActions>
            </Card>
        </div>
        {openMoreInfo && <InvestmentMore handleCloseMoreInfo={handleCloseMoreInfo} />}
    </div>
  )
}

export default AvailableInvestments