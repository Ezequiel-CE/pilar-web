import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Collapse,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerMenu = [
  {
    title: 'inicio',
    path: '/',
  },
  {
    title: 'pages',
    children: [
      {
        title: 'todo',
        path: '/todo',
      },
      {
        title: 'fetchList',
        path: '/fetch-list',
      },
    ],
  },
];

const MenuItem = ({ item }) => {
  const navigate = useNavigate();
  const { children, title, path } = item;
  const [open, setOpen] = useState(false);
  if (children) {
    return (
      <>
        <ListItem onClick={() => setOpen((status) => !status)}>
          <ListItemButton>
            <ListItemText sx={{ fontWeight: 400 }} primary={item.title} disableTypography />
          </ListItemButton>
          {open ? <ExpandMoreIcon /> : <ChevronRightIcon />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((child, index) => {
              return (
                <ListItem key={index} onClick={() => navigate(child.path)} disablePadding>
                  <ListItemButton
                    sx={{
                      height: 42,
                      fontWeight: '200',
                      padding: (th) => th.spacing(0, 2.5, 0, 3),
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        width: 26,
                        height: 26,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: (th) => th.spacing(0, 2, 0, 0),
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          width: 4,
                          height: 4,
                          display: 'flex',
                          borderRadius: '50%',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'text.disabled',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText sx={{ fontWeight: 400 }} primary={child.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }
  return (
    <>
      <ListItem onClick={() => navigate(path)}>
        <ListItemButton>
          <ListItemText sx={{ fontWeight: 400 }} primary={title} disableTypography />
        </ListItemButton>
      </ListItem>
    </>
  );
};

const Menu = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <MenuItem key={item.title} item={item} />
      ))}
    </List>
  );
};

const SideMenu = ({ open, onClose }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (open) {
      onClose();
    }
  }, [pathname]);
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        open={open}
        onClose={onClose}
        sx={{
          width: 280,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
          },
        }}
      >
        <Menu items={drawerMenu} />
      </Drawer>
    </Box>
  );
};

export default SideMenu;
