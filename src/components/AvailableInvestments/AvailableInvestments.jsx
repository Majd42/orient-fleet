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
      const textDynamicSpacing = lang === 'ar' ? 0 : 2

    const handleOpenMore = () => {
        setOpenMoreInfo(true)
    }

    const handleCloseMoreInfo = () => {
        setOpenMoreInfo(false)
    }


    const investments = [
        {
            id: 1,
            name: lang ==='en'? 'Investment Name':'اسم الاستثمار',
            content:lang ==='en'? 'Coming Soon ...':'قريبا',
            
        },
        {
            id: 2,
            name: lang ==='en'? 'Investment Name':'اسم الاستثمار',
            content:lang ==='en'? 'Coming Soon ...':'قريبا',
            
        },
        {
            id: 3,
            name: lang ==='en'? 'Investment Name':'اسم الاستثمار',
            content:lang ==='en'? 'Coming Soon ...':'قريبا',
            
        },
    ]
    
  return (
    <div className='available-invesmtents'>
        <Typography style={styles} letterSpacing={dynamicSpacing} padding={4} variant='h4' color='#5595D1' textAlign='center'>{t('availableInvs')}</Typography>
        <div className="investments-content">
            {investments.map(investment=> (
                <Card sx={{width: 385}}>
                <CardMedia 
                    component='img'
                    height={190}
                    image={Investment}
                    alt='alt'
                    />
                <CardContent>
                    <Typography style={styles} letterSpacing={textDynamicSpacing} gutterBottom component='div' variant='h5'>{investment.name}</Typography>
                    <Typography style={styles} letterSpacing={textDynamicSpacing}>{investment.content}</Typography>
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