import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Container,
  Divider,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SideMenu from '../../components/layout/SideMenu';
import PopMenu from '../../components/layout/PopMenu';
import { appSelector } from '../../redux/appRedux';
import { useSelector } from 'react-redux';

const DashboardLayout = () => {
  const pageName = useSelector(appSelector.pageName);

  const [open, setOpen] = useState(false);

  const subpage = pageName === '' ? '' : ` ${pageName}`;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="absolute">
        <Toolbar
          sx={{
            pr: '24px',
          }}
        >
          <Box px={2}>
            <MenuIcon sx={{ cursor: 'pointer' }} onClick={() => setOpen(true)} />
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Stack
              direction="row"
              sx={{ display: 'flex', justifyContent: 'flex-end' }}
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Typography component="h1" variant="h6" color="inherit" noWrap>
                Pilar Tecno Web
              </Typography>
              <Typography component="h1" variant="h6" color="inherit" noWrap>
                {subpage}
              </Typography>
            </Stack>
          </Box>
          <PopMenu />
        </Toolbar>
      </AppBar>
      <SideMenu open={open} onClose={() => setOpen(false)} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
