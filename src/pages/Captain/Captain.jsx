import { Typography } from '@mui/material'
import React from 'react'
import CurrentVessels from '../../components/CurrentVessels/CurrentVessels'
import './styles.css'

const Captain = () => {
  return (
    <div>
        <div className="captain-img-container">
            <div className="captain-img-content">
                <Typography gutterBottom color='white' variant='h3' >Welcome Aboard Captain</Typography>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eveniet officia repellat, et possimus corporis quidem iure autem quod, cum dicta quo perspiciatis pariatur. Deserunt adipisci at eaque excepturi consequuntur?

                </Typography>

            </div>
        </div>
        <CurrentVessels />
    </div>
  )
}

export default Captain