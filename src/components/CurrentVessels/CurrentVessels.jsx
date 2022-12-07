import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Vessel from '../../assets/Captain/Ship Investment.jpg'
import './styles.css'

const CurrentVessels = () => {
  return (
    <div>
        <Typography variant='h4' textAlign='center' color='#5595D1' padding={4} letterSpacing={9}  >Current Vessels</Typography>
        <div className="vessels-container">

            <Link to='/status' style={{textDecoration:'none', color:'black'}}>

                <div className="vessel">
                    <img src={Vessel} alt="" />
                    <div className="vessel-content">
                        <Typography letterSpacing={2} variant='h4' gutterBottom>Vessel Name</Typography>
                        <Typography letterSpacing={2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea dolore porro, atque perspiciatis obcaecati molestias itaque inventore debitis impedit tempore perferendis, molestiae nesciunt possimus praesentium reprehenderit vel ratione voluptates quidem dolores quasi aperiam? Omnis, labore! Natus, reprehenderit! Consequatur, veritatis?

                        </Typography>
                    </div>

                </div>
            </Link>

            <Link to='/status' style={{textDecoration:'none', color:'black'}}>

                <div className="vessel">
                    <img src={Vessel} alt="" />
                    <div className="vessel-content">
                        <Typography letterSpacing={2} variant='h4' gutterBottom>Vessel Name</Typography>
                        <Typography letterSpacing={2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea dolore porro, atque perspiciatis obcaecati molestias itaque inventore debitis impedit tempore perferendis, molestiae nesciunt possimus praesentium reprehenderit vel ratione voluptates quidem dolores quasi aperiam? Omnis, labore! Natus, reprehenderit! Consequatur, veritatis?

                        </Typography>
                    </div>

                </div>
            </Link>



            <Link to='/status' style={{textDecoration:'none', color:'black'}}>
                
                <div className="vessel">
                    <img src={Vessel} alt="" />
                    <div className="vessel-content">
                        <Typography letterSpacing={2} variant='h4' gutterBottom>Vessel Name</Typography>
                        <Typography letterSpacing={2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea dolore porro, atque perspiciatis obcaecati molestias itaque inventore debitis impedit tempore perferendis, molestiae nesciunt possimus praesentium reprehenderit vel ratione voluptates quidem dolores quasi aperiam? Omnis, labore! Natus, reprehenderit! Consequatur, veritatis?

                        </Typography>
                    </div>

                </div>
            </Link>

            <Link to='/status' style={{textDecoration:'none', color:'black'}}>


                <div className="vessel">
                    <img src={Vessel} alt="" />
                    <div className="vessel-content">
                        <Typography letterSpacing={2} variant='h4' gutterBottom>Vessel Name</Typography>
                        <Typography letterSpacing={2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea dolore porro, atque perspiciatis obcaecati molestias itaque inventore debitis impedit tempore perferendis, molestiae nesciunt possimus praesentium reprehenderit vel ratione voluptates quidem dolores quasi aperiam? Omnis, labore! Natus, reprehenderit! Consequatur, veritatis?

                        </Typography>
                    </div>

                </div>
            </Link>

            <Link to='/status' style={{textDecoration:'none', color:'black'}}>

                <div className="vessel">
                    <img src={Vessel} alt="" />
                    <div className="vessel-content">
                        <Typography letterSpacing={2} variant='h4' gutterBottom>Vessel Name</Typography>
                        <Typography letterSpacing={2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ea dolore porro, atque perspiciatis obcaecati molestias itaque inventore debitis impedit tempore perferendis, molestiae nesciunt possimus praesentium reprehenderit vel ratione voluptates quidem dolores quasi aperiam? Omnis, labore! Natus, reprehenderit! Consequatur, veritatis?

                        </Typography>
                    </div>

                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default CurrentVessels