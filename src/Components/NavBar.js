import React from 'react';
import { Link } from 'react-router-dom';

import { 
    AppBar, 
    Box, 
    Divider, 
    Drawer, 
    IconButton, 
    List, 
    ListItem, 
    ListItemButton,
    ListItemText, 
    Toolbar, 
    Typography, 
    Button, 
    Menu, 
    MenuItem, 
    Fade, 
    useMediaQuery,
    useTheme 
  } from '@mui/material';

  import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar(props) {

    const drawerWidth = 240;

    const navItems = ['About', 'Technology', 'Partnerships', 'Contact'];
    const linkItems = ['/about', '/technology', '/partnerships', '/contact'];
    const indexes = [0, 1, 2, 3];

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    //To detect size of screen
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };


      const drawer = (
        <Box sx={{ textAlign: 'center' }}>

          <Typography sx={{ my: 3, fontSize: 26 }} onClick={handleDrawerToggle}>
            Retna Bio
          </Typography>
          <Divider />

          <List id="drawer_list">
            {indexes.map((index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText style={{ textAlign: 'center' }}>
                    <Link
                      to={linkItems[index]}
                      onClick={handleDrawerToggle}
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                        textTransform: 'none',
                        fontSize: 20,
                        fontWeight: 300,
                      }}
                    >
                      {navItems[index]}
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
    
          </List>
        </Box>
      );

      const container =
      window !== undefined ? () => window().document.body : undefined;

  return (
<>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'black',
          alignItems: { xs: 'left', sm: 'center' },
        }}
        id="top_menu_bar"
      >
        <Toolbar>
          {/* show only in mobile format */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{ display: { xs: 'none', sm: 'block' } }}
            style={{ alignItems: 'center' }}
          >
            {/* Home and Database sections */}

            {indexes.map((index) => (
              <Button
                key={index}
                sx={{ color: '#fff', marginLeft: 5, marginRight: 5 }}
              >
                <Link
                  to={linkItems[index]}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    textTransform: 'none',
                    fontSize: 20,
                    fontWeight: 300,
                  }}
                >
                  {navItems[index]}
                </Link>
              </Button>
            ))}

          </Box>
        </Toolbar>
      </AppBar>

      {isSmallScreen ? (
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      ) : null}
    </>
  );
}