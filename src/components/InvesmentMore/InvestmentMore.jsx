import { Typography, Button, Paper, IconButton } from '@mui/material'
import React from 'react'
import './styles.css'
import Investment from '../../assets/Investments/Ship Investment.jpg'
import CloseIcon from '@mui/icons-material/Close'

const InvestmentMore = ({ handleCloseMoreInfo }) => {
  return (
    <>
        <div className='overlay'>

        </div>
        <div className="more-container">
            
            <Paper className='more-paper'>
                <IconButton onClick={handleCloseMoreInfo} sx={{position:'absolute', top:0, right: 0, zIndex: 5,}} className='more-close'>
                    <CloseIcon />
                </IconButton>
                <div className="more-content">
                    <img src={Investment} alt="" className='invest-more-img' />
                    <div className="more-info">
                        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corporis illo cumque itaque ad dolore cupiditate quidem alias, iusto officiis laboriosam quae non accusamus saepe suscipit error illum eius! Ad illum doloremque tempora veniam dolor, repellat dolores, consequuntur nulla cumque natus quaerat consequatur quis ut ipsam, sunt laborum officia corrupti. Autem quod accusamus explicabo voluptatum provident ullam quo ut.</Typography>
                        <ul>
                            <li>
                                <Typography>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident reiciendis, iste libero ipsum tenetur esse!
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident reiciendis, iste libero ipsum tenetur esse!
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident reiciendis, iste libero ipsum tenetur esse!
                                </Typography>
                            </li>
                        </ul>
                        <Button  variant='contained'>Begin Investing</Button>
                    </div>
                </div>
            </Paper>
        </div>
    </>
  )
}

export default InvestmentMore