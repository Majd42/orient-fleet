import React, { useState } from 'react'
import {AppBar, Box, Toolbar, Container, Typography, Menu, MenuItem, IconButton, Avatar, Divider,} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LOGO from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './styles.css'


const Navbar = ({loggedin, setOpenLogin}) => {

  const pages = ['About', 'Services', 'Investments', 'Careers', 'Contact', 'Media',]
  const [anchor, setAnchor]= useState(null)
  // const [language, setLanguage]= useState('English')
  


  const handleOpenMenu =(e) => {
    setAnchor(e.currentTarget)
  }
  
  const handleCloseMenu =(e) => {
    setAnchor(null)
  }

  // const handleChangeLang= (e) => {
  //   setLanguage(e.target.value)
  // }

  
  const handleOpenLogin = () => {
    setOpenLogin(true)
  }  

  return (
    <AppBar position='static' sx={{backgroundColor: 'white', fontFamily:'sans-serif'}}>
      <Container maxWidth='xl'>
        <Toolbar>
          <Box sx={{flexGrow: 1}} component={Link} to='/'>
            <img className='logo' src={LOGO} alt="logo" />
            
          </Box>
          <Box sx={{display: { xs: 'flex', md: 'none' }}}>
              <IconButton
                size='large'
                onClick={handleOpenMenu}
                sx={{cursor: 'pointer'}}
              >
                <MenuIcon />
              </IconButton>
              <Menu
               open={Boolean(anchor)}
               onClose={handleCloseMenu}
               anchorEl={anchor}
               >
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <Typography>{page}</Typography>
                  </MenuItem>
                ))}
                <Divider />
                {!loggedin && <MenuItem onClick={handleOpenLogin} className='login-btn' >
                  <Typography >Login</Typography>
                </MenuItem>}
              </Menu>
            </Box>
          <Box sx={{display: { xs: 'none', md: 'block' }}}>
              
              {pages.map(page => (
                <Link key={page} to={page} >
                  <button className='nav-link'>
                    {page}
                  </button>
                </Link>
              ))}
                {!loggedin && <button onClick={handleOpenLogin} className='nav-link login-btn'>
                  Login
                </button>}
            </Box>

            {/* <FormControl size='small' sx={{marginLeft:'.8rem'}} >
              <Select
               sx={{height:'34px', fontSize:'.8rem'}}
                value={language}
                onChange={handleChangeLang}
              >
                  <MenuItem value='Arabic'>Arabic</MenuItem>
                  <MenuItem value='English'>English</MenuItem>
              </Select>
            </FormControl> */}

            {loggedin && <Avatar sx={{backgroundColor:'#5595D0',marginLeft:'1rem' }}>M</Avatar>}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar