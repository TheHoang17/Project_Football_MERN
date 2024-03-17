import React, { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '../Drawer/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Input from '@mui/material/Input';

const DeleteConfirmationPopup = ({ open, handleClose, handleConfirmDelete }) => (
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Confirm Delete</DialogTitle>
    <DialogContent>
      <DialogContentText color='red'>
        Are you sure you want to delete this field?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Button onClick={handleConfirmDelete} color="primary" autoFocus>
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
);
const drawerWidth = 240;
const token = localStorage.getItem('token');
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),

  backgroundColor: theme.palette.mode === 'dark' ? '#2c3e50' : 'red', // Màu giống AppBar mới
}));

const defaultTheme = createTheme();

export default function ManageFields() {

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: '_id', headerName: 'ID Mongo', width: 70 },
    { field: 'name', headerName: 'Fields Name', width: 100 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 90 },
    { field: 'imageUrl', headerName: 'Images', width: 200, valueGetter: (params) => params.row.imageUrl.join(', ') },
    { field: 'price', headerName: 'Price', width: 90 },
    { field: 'description', headerName: 'Description', width: 130 },
    { field: 'fieldChild', headerName: 'Field Child', width: 200, valueGetter: (params) => {
      return params.row.fieldChild.map(child => child.name).join(', ');
    }},
    {
      field: 'deleteAction',
      headerName: 'Delete',
      width: 120,
      renderCell: (params) => (
        <IconButton
          color='primary'
          aria-label='delete account'
          component='span'

        >
          <DeleteIcon />
        </IconButton>
      ),
    },
    {
      field: 'editAction',
      headerName: 'Edit',
      width: 120,
      renderCell: (params) => (
        <IconButton
          color='primary'
          aria-label='edit account'
          component='span'
        >
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  const [rows, setRows] = useState([]);
  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await fetch('http://localhost:3000/fields/getAllFields', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch fields');
        }
        const data = await response.json();

        const newData = data.map((item, index) => ({ ...item, id: index + 1 }));

        setRows(newData);
      } catch (error) {
        console.error('Error fetching fields:', error);
      }
    };

    fetchFields();
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar position='absolute' open={open} backgroundColor>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Manage Fields
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={open} toggleDrawer={toggleDrawer} />
        <Box
          component='main'
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
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ mb: 2, textAlign: 'right' }}>
              <Button>Delete</Button>
            </Box>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
          </Container>
        </Box>
      </Box>

    </ThemeProvider>
  );
}
