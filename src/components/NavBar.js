import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';


import LinkedInSVG from '../svgs/linkedin_svg.svg';
import DropdownArrow from '../svgs/dropdown_arrow.svg';
import Resume from '../svgs/resume.svg';

import { Grid, Menu, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';



export default function NavBar() {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const location = useLocation();


    return (
    <div style={{backgroundColor: '#121212'}}>
        
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                <MenuItem sx={{fontSize: '1.33em'}} onClick={handleClose}>Home</MenuItem>
            </Link>
            <Link to="/experience" style={{ textDecoration: 'none', color: '#fff' }}>
                <MenuItem sx={{fontSize: '1.33em'}} onClick={handleClose}>Experience</MenuItem>
            </Link>
            <Link to="/projects" style={{ textDecoration: 'none', color: '#fff' }}>
                <MenuItem sx={{fontSize: '1.33em'}} onClick={handleClose}>Projects</MenuItem>
            </Link>
            <Link to="/blog" style={{ textDecoration: 'none', color: '#fff' }}>
                <MenuItem sx={{fontSize: '1.33em'}} onClick={handleClose}>Blog</MenuItem>
            </Link>        
        </Menu>


        <Box sx={{ flexGrow: 1, backgroundImage: "linear-gradient(to right, #121212, rgba(0,0,0,0))" }}>
            <AppBar position="fixed" 
            elevation={0}
            sx={{
            }}>
            <Toolbar>
                <Grid container 
                direction="row" 
                alignItems="center" 
                wrap="nowrap"
                justifyContent="space-between">
                    
                    <Grid item onClick={handleClick} sx={{cursor: 'pointer'}}>
                        <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                            <Grid item>
                                <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
                                    Sam Kirby
                                </Typography>
                            </Grid>
                            <Grid item sx={{p: 1, flexGrow: 1}}>
                                <Icon>
                                    <img src={DropdownArrow}/>
                                </Icon>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                            <Grid item className="butt">
                                <IconButton disableRipple href="/Resume_SamKirby.pdf">
                                    <Icon sx={{width: 20, height: 25}}>
                                        <img src={Resume}/>
                                    </Icon>
                                </IconButton>
                            </Grid>

                            <Grid item sx={{p: 1}} className="butt">
                                <IconButton disableRipple href="https://linkedin.com/in/samuelokirby" target="_blank">
                                    <Icon>
                                        <img style={{fill: "red"}} src={LinkedInSVG}/>
                                    </Icon>
                                </IconButton>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
            </AppBar>
        </Box>
    </div>
  );
}