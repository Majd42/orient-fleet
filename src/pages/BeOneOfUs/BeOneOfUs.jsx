import { Button, Typography, } from '@mui/material'
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
                    <input className='contact-input' type='text' name='fname' placeholder='FirstName' required/>
                </div>
                <div className="form-control">
                    <label>Last Name</label>
                    <input className='contact-input' type='text' name='lname'  required/>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input className='contact-input' type='email' name='email'  required/>
                </div>
                <div className="form-control">
                    <label>Mobile</label>
                    <input className='contact-input' type='text' name='mobile'  />
                </div>
            </div>
            <div className="employment-details">
                <Typography letterSpacing={2} variant='h5'>Employment Details</Typography>
                <div className="employment-info">
                    <div className="form-control">
                        <label>Availability</label>
                        <input className='contact-input' type='text' name='availability'  required/>
                    </div>
                    <div className="atachment-info">
                        <Typography letterSpacing={2} gutterBottom variant='h5' color='white'>Atachment Information</Typography>
                        <input className='upload' type='file' required />
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