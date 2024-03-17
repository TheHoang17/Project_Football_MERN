import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DashBoardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
function handleLogout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
export const mainListItems = (
  <React.Fragment>


    <Link to="/admin">
      <ListItemButton>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItemButton>
    </Link>

    <Link to="/manageAccount">
      <ListItemButton>
        <ListItemIcon>
          <KeyIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Account" />
      </ListItemButton>
    </Link>

    <Link to="/manageFields">
      <ListItemButton>
        <ListItemIcon>
          <SportsSoccerIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Fields" />
      </ListItemButton>
    </Link>

    <Link to="/manageAccessory">
      <ListItemButton>
        <ListItemIcon>
          <ShoppingBagIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Accessory" />
      </ListItemButton>
    </Link>

    <Link to="/dashboard">
      <ListItemButton>
        <ListItemIcon>
          <DashBoardIcon />
        </ListItemIcon>
        <ListItemText primary="Dash Board" />
      </ListItemButton>
    </Link>


  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>

    <Link to="/login" onClick={handleLogout}>
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
