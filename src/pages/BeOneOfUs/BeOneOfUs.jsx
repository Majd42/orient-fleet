
import { Button, Input, MenuItem, Select, Typography, } from '@mui/material'
import React from 'react'
import './styles.css'


const BeOneOfUs = () => {
  return (
    <div>
        <div className="one-img-container">
            <div className="one-img-content">

                <Typography color='white' variant='h3' letterSpacing={2}>Be One Of Us</Typography>
                <Typography
                varinat='body1' color='white' letterSpacing={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit asperiores animi molestiae nisi voluptatum dolores? Voluptas, accusantium. Accusamus, illum voluptate.
                </Typography>
            </div>
        </div>
        <Typography padding={2} variant='h5' textAlign='center'>Please Provide Your Information Below ...</Typography>
        <form className='contact-form' action="">
            <div className="contact-info">
                <Typography letterSpacing={2} variant='h5'>Contact Info</Typography>
                <div className="form-control">
                    <label>First Name</label>
                    <Input sx={{backgroundColor:'white', width:'350px', height:'50px',borderRadius:'.3rem' }} className='contact-input' type='text' name='fname' required/>
                </div>
                <div className="form-control">
                    <label>Last Name</label>
                    <Input sx={{backgroundColor:'white', width:'350px', height:'50px',borderRadius:'.3rem' }} className='contact-input' type='text' name='lname'  required/>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <Input sx={{backgroundColor:'white', width:'350px', height:'50px',borderRadius:'.3rem' }} className='contact-input' type='email' name='email'  required/>
                </div>
                <div className="form-control">
                    <label>Mobile</label>
                    <Input sx={{backgroundColor:'white', width:'350px', height:'50px',borderRadius:'.3rem' }} className='contact-input' type='text' name='mobile'  />
                </div>
            </div>
            <div className="employment-details">
                <Typography letterSpacing={2} variant='h5'>Employment Details</Typography>
                <div className="employment-info">
                    <div style={{display:'flex', flexDirection:'column',gap: '.2rem'}} className="select-availability">

                        <label ><Typography fontSize={22} >Availability</Typography></label>
                        <Select sx={{backgroundColor:'white', borderRadius:'.3rem', height:'50px', width:'350px',}}  >
                            <MenuItem value={'one'} >option</MenuItem>
                            <MenuItem value={'two'} >option two</MenuItem>
                            <MenuItem value={'three'} > option three</MenuItem>
                        </Select>
                    </div>
                    <div className="atachment-info">
                        <Typography letterSpacing={2} gutterBottom variant='h5' color='white'>Atachment Information</Typography>
                        <label className='file-upload'>
                            Browse
                            <input type='file' />
                        </label>
                    </div>
                </div>

                <button className='submit-btn' type='submit'>Submit</button>
            </div>

            
        </form>

        <div className="paragraph">
            <Typography letterSpacing={2} variant='body1' textAlign='center' sx={{width:'50%'}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit at dolorem molestias hic quos voluptatem ipsum, vitae, a amet, officiis repudiandae? Fugiat, maxime rerum.

            </Typography>
        </div>
    </div>
  )
}

export default BeOneOfUs