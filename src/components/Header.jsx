import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Suspense } from "react";
import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import userImg from '../images/user.jpg';

import SignInModal from '../components/SignInModal';

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseMOdal = () => setIsModalOpen(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    return (
        <>
            <AppBar position="fixed">
                <Container maxWidth="xl">
                  <Toolbar disableGutters>
                    <NewspaperIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/test-AlterEgo/"
                      sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                    >
                      News Maker
                    </Typography>
                  
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                      >
                        <MenuIcon />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                          display: { xs: 'block', md: 'none' },
                        }}
                      >
                        <MenuItem onClick={handleCloseNavMenu}>
                            <MenuNavLink to="/">Main</MenuNavLink>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <MenuNavLink to="/news">News</MenuNavLink>
                        </MenuItem>
                        
                      </Menu>
                    </Box>
                    <NewspaperIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                      variant="h5"
                      noWrap
                      component="a"
                      href=""
                      sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                    >
                      News Maker
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                                <NavLinkStyled to="/">Main</NavLinkStyled>
                        </Button>
                            
                        <Button
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <NavLinkStyled to="/news">News</NavLinkStyled>
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button sx={{fontWeight: 700}} color="inherit" onClick={handleOpenModal}>Sign in</Button>
                        <Tooltip title="Open settings">
                          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="User" src={userImg} />
                          </IconButton>
                        </Tooltip>
                        <Menu
                          sx={{ mt: '45px' }}
                          id="menu-appbar"
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={Boolean(anchorElUser)}
                          onClose={handleCloseUserMenu}
                        >
                          <MenuItem sx={{justifyContent: 'center'}} onClick={handleCloseUserMenu}>
                              <MenuNavLink to='/profile'>Profile</MenuNavLink>
                          </MenuItem>
                                  {/* тут потрібно обнулити юзера в стейті і локал сторедж */}
                          <MenuItem onClick={handleCloseUserMenu}>
                              <Typography textAlign="center" sx={{fontWeight: 700}}>Sign out</Typography>
                          </MenuItem>

                        </Menu>
                    </Box>
                  </Toolbar>
                </Container>
            </AppBar>
            <SignInModal open={isModalOpen} handleClose={handleCloseMOdal} />

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>

    )
}

export default Header;

const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    font-weight: 700;

    &.active {
        color: black;
    };
`

const MenuNavLink = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    font-weight: 700;

    &.active {
        color: #1976d2;
    };
`