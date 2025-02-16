'use client';

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Menu,
  Dashboard as DashboardIcon,
  AccountBalance as AccountsIcon,
  People as UsersIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useThemeContext } from '../context/ThemeContext';
import { useState } from 'react';

const drawerWidth = 240;
const collapsedDrawerWidth = 64;

export default function Layout({ children }: { children: React.ReactNode }) {
  const { toggleTheme, isDark } = useThemeContext();
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar
        sx={{
          minHeight: '64px !important',
          justifyContent: drawerOpen ? 'flex-start' : 'center',
          px: drawerOpen ? 2 : 0,
        }}
      >
        <IconButton
          onClick={() => setDrawerOpen(!drawerOpen)}
          sx={{ color: theme.palette.text.primary }}
        >
          <Menu />
        </IconButton>
        {drawerOpen && (
          <Typography
            variant="h6"
            sx={{
              ml: 1,
              color: theme.palette.text.primary,
              transition: 'opacity 0.3s',
              opacity: drawerOpen ? 1 : 0,
            }}
          >
            Menu
          </Typography>
        )}
      </Toolbar>
      <Divider />
      <List>
        {[
          { text: 'Dashboard', icon: <DashboardIcon /> },
          { text: 'Accounts', icon: <AccountsIcon /> },
          { text: 'Users', icon: <UsersIcon /> },
          { text: 'Settings', icon: <SettingsIcon /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ px: 2 }}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: drawerOpen ? 2 : 'auto',
                  color: theme.palette.text.secondary,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  opacity: drawerOpen ? 1 : 0,
                  transition: 'opacity 0.2s',
                  whiteSpace: 'nowrap',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${collapsedDrawerWidth}px)` },
          ml: { sm: `${collapsedDrawerWidth}px` },
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: 'none',
          borderBottom: `1px solid ${theme.palette.divider}`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(drawerOpen && {
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            marginLeft: { sm: `${drawerWidth}px` },
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
            <IconButton onClick={toggleTheme} color="inherit">
                {isDark ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
        </Toolbar>
      </AppBar>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerOpen ? drawerWidth : collapsedDrawerWidth,
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            backgroundColor: theme.palette.background.paper,
            borderRight: `1px solid ${theme.palette.divider}`,
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${collapsedDrawerWidth}px)` },
          ml: { sm: `${collapsedDrawerWidth}px` },
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(drawerOpen && {
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            marginLeft: { sm: `${drawerWidth}px` },
          }),
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
