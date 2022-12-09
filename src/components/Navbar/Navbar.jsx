import React, { useState } from 'react'
import {AppBar, Box, Toolbar, Container, Typography, Menu, MenuItem, IconButton, Avatar, Divider,InputLabel, Button} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LOGO from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './styles.css'
import UK from '../../assets/Contact us/Flag_of_the_United_Kingdom.svg.png'
import { useTranslation } from 'react-i18next';

const Navbar = ({loggedin, setOpenLogin, setLang}) => {

  // const pages = ['About', 'Services', 'Investments', 'Careers', 'Contact', 'Media',]
  
  const [anchor, setAnchor]= useState(null)
  
  const [t, i18next] = useTranslation()
  


  const pages = [t('page1'), t('page2'), t('page3'), t('page4'), t('page5'), t('page6')]
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
            {/* <img className='logo' src={LOGO} alt="logo" /> */}
            <Typography variant='h4'>Orient Fleet</Typography>
            
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
                  <Link to={page} style={{textDecoration:'none'}}>
                    <MenuItem onClick={handleCloseMenu} key={page}>
                      <Typography>{page}</Typography>
                    </MenuItem>
                  </Link>
                ))}
                <Divider />
                {!loggedin && <MenuItem onClick={handleOpenLogin} className='login-btn' >
                  <Typography >{t('pageLogin')}</Typography>
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
                {/* <Button hiddend sx={{ marginLeft:' 1rem'}}>
                <Box sx={{ minWidth: 50, }}>
                  <FormControl fullWidth>
                    
                    <NativeSelect
                      defaultValue={'en'}
                      sx={{ fontSize: '.75rem', }}
                      
                    >
                      <option  value={'en'}>EN</option>
                      <option value={'ar'}>AR</option>
                      
                    </NativeSelect>
                  </FormControl>
                </Box>
                </Button> */}
                {!loggedin && <button onClick={handleOpenLogin} className='nav-link login-btn'>
                {t('pageLogin')}
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
            
            <Button  sx={{ marginLeft:' 1rem'}}>
                <Box sx={{ minWidth: 50, }}>
                  <FormControl fullWidth>
                    
                    <NativeSelect
                      defaultValue={'en'}
                      sx={{ fontSize: '.75rem', }}
                      onChange={(e) => {
                        i18next.changeLanguage(e.target.value);
                        setLang(e.target.value)
                      }}
                      
                    >
                      <option   value={'en'}>EN</option>
                      <option  value={'ar'}>AR</option>
                      
                    </NativeSelect>
                  </FormControl>
                </Box>
                </Button>
            {loggedin && <Avatar sx={{backgroundColor:'#5595D0',marginLeft:'1rem' }}>M</Avatar>}

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar