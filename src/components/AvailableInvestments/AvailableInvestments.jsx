import { CardMedia, Typography, Card, CardContent, CardActions, Button } from '@mui/material'
import React, { useState } from 'react'
import Investment from '../../assets/Investments/Ship Investment.jpg'
import InvestmentMore from '../InvesmentMore/InvestmentMore'
import './styles.css'
import { useTranslation } from 'react-i18next';

const AvailableInvestments = ({lang}) => {
    const [openMoreInfo, setOpenMoreInfo]= useState(false)
    const styles ={
        fontFamily: lang ==='ar'? 'myFont': '',
        direction:lang==='ar'?'rtl' :'ltr',
        
        
    
      }
      const [t, i18next] = useTranslation()
      const dynamicSpacing = lang === 'ar' ? 1 : 15
      const TextDynamicSpacing = lang === 'ar' ? 0 : 2

    const handleOpenMore = () => {
        setOpenMoreInfo(true)
    }

    const handleCloseMoreInfo = () => {
        setOpenMoreInfo(false)
    }


    const investments = [
        {
            id: 1,
            name: 'Investment Name',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eaque omnis facilis accusantium, eum officia vero quos ad rem! Sit, maxime sunt provident autem cum mollitia? Praesentium autem quod accusantium!'
        },
        {
            id: 2,
            name: 'Investment Name',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eaque omnis facilis accusantium, eum officia vero quos ad rem! Sit, maxime sunt provident autem cum mollitia? Praesentium autem quod accusantium!'
        },
        {
            id: 3,
            name: 'Investment Name',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eaque omnis facilis accusantium, eum officia vero quos ad rem! Sit, maxime sunt provident autem cum mollitia? Praesentium autem quod accusantium!'
        },
    ]
    
  return (
    <div className='available-invesmtents'>
        <Typography letterSpacing={2} padding={4} variant='h4' color='#5595D1' textAlign='center'>{t('availableInvs')}</Typography>
        <div className="investments-content">
            {investments.map(investment=> (
                <Card sx={{maxWidth: 385}}>
                <CardMedia 
                    component='img'
                    height={190}
                    image={Investment}
                    alt='alt'
                    />
                <CardContent>
                    <Typography letterSpacing={2} gutterBottom component='div' variant='h5'>{investment.name}</Typography>
                    <Typography letterSpacing={2}>{investment.content}</Typography>
                </CardContent>

                <CardActions sx={{display:'flex', justifyContent:'center'}}>
                    <Button style={styles} onClick={handleOpenMore} variant='contained'>{t('learnMoreText')}</Button>
                </CardActions>
            </Card>
            ))}
            
        </div>
        {openMoreInfo && <InvestmentMore handleCloseMoreInfo={handleCloseMoreInfo} />}
    </div>
  )
}

export default AvailableInvestments