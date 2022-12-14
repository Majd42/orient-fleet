import React, { useState } from 'react'
import {AppBar, Box, Toolbar, Container, Typography, Menu, MenuItem, IconButton, Avatar, Divider,InputLabel, Button} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LOGO from '../../assets/header.svg'
import { Link } from 'react-router-dom'
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './styles.css'
import LOGOAR from '../../assets/logo-ar.svg'
import { useTranslation } from 'react-i18next';

const Navbar = ({loggedin, setOpenLogin, setLang ,lang}) => {

  // const pages = ['About', 'Services', 'Investments', 'Careers', 'Contact', 'Media',]
  
  const [anchor, setAnchor]= useState(null)
  const [userAnchor, setUserAnchor] = useState(null)
  const [t, i18next] = useTranslation()
  const styles ={
    fontFamily: lang ==='ar'? 'myFont': '',
    direction:lang==='ar'?'rtl' :'ltr',
    
    

  }


  const pages = [
    {
      pageRoute: '/about',
      pageTitle:lang ==='en'?'about':'من نحن'
    },
    {
      pageRoute: '/services',
      pageTitle:lang ==='en'?'Services':'الخدمات'
    },
    
    {
      pageRoute: '/investments',
      pageTitle:lang ==='en'?'Investments':'الاستثمارات'
    },
    {
      pageRoute: '/careers',
      pageTitle:lang ==='en'?'Careers':' المسارات المهنية'
    },
    {
      pageRoute: '/contact',
      pageTitle:lang ==='en'?'Contact':' تواصل معنا'
    },
    {
      pageRoute: '/media',
      pageTitle:lang ==='en'?'Media':'الوسائط'
    },

  ]


  const handleOpenMenu =(e) => {
    setAnchor(e.currentTarget)
  }
  
  const handleCloseMenu =(e) => {
    setAnchor(null)
  }

  const handleOpenUserMenu = (e)=> {
    setUserAnchor(e.currentTarget)
  }

  const handleCloseUserMenu =(e) => {
    setUserAnchor(null)
  }


  
  const handleOpenLogin = () => {
    setOpenLogin(true)
  }  

  return (
    
    <AppBar position='static' sx={{backgroundColor: 'white', fontFamily:'sans-serif'}}>
      <Container maxWidth='xl'>
          
        <Toolbar>
          <Box sx={{flexGrow: 1}} component={Link} to='/'>
            <img className='logo' style={{width: lang==='ar'? '294px' :'244px'}} src={lang==='ar'? LOGOAR : LOGO} alt="logo" />
            
            
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
                  <Link to={page.pageRoute} style={{textDecoration:'none'}}>
                    <MenuItem onClick={handleCloseMenu} >
                      <Typography style={styles} >{page.pageTitle}</Typography>
                    </MenuItem>
                  </Link>
                ))}
                <Divider />
                {!loggedin && <MenuItem onClick={handleOpenLogin} className='login-btn' >
                  <Typography style={styles} >{t('pageLogin')}</Typography>
                </MenuItem>}
              </Menu>
            </Box>
            
          <Box sx={{display: { xs: 'none', md: 'block' }}}>
              
              {pages.map(page => (
                <Link to={page.pageRoute} >
                  {page.pageRoute !== '/services'? <button style={styles} className='nav-link'>
                      {page.pageTitle}
                    </button>: <button style={styles} className='nav-link services-link'>
                      {page.pageTitle}
                    </button>}
                    
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
            {loggedin && 
              <Box sx={{flexGrow: 0,   }}>
                <IconButton sx={{ p: 0, width: '40px', justifySelf:'center'  }} onClick={handleOpenUserMenu}  >
                  <Avatar sx={{backgroundColor:'#5595D0',marginLeft:'1rem' }}>M</Avatar>
                </IconButton>
                <Menu
                  sx={{ mt: '45px',  }}
                  id="menu-appbar"
                  anchorEl={userAnchor}
                  
                  keepMounted
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(userAnchor)}
                  onClose={handleCloseUserMenu}
                  
                  transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                  }}
                >
              
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography  style={styles} textAlign="center">Sign out</Typography>
                </MenuItem>
             
              </Menu>
            </Box>}

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar