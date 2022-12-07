import { Typography } from '@mui/material'

import Turkey from '../../assets/Contact us/Flag_of_Turkey.svg.png'
import Panama from '../../assets/Contact us/Flag_of_Panama.svg.png'
import Lebanon from '../../assets/Contact us/Flag_of_Lebanon.svg.png'
import UAE from '../../assets/Contact us/Flag_of_the_United_Arab_Emirates.svg.png'
import UK from '../../assets/Contact us/Flag_of_the_United_Kingdom.svg.png'
import './styles.css'

const WeAreIn =() => {

    

    return(
        <div style={{}}>
            <Typography textAlign='center' color='#5595D1' gutterBottom  variant='h4' letterSpacing={4}>
                We Are In
            </Typography>
            <div className="countries">
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
            </div>
        </div>
    )
}

export default WeAreIn