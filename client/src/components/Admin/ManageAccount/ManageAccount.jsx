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

// Popup component
const DeleteConfirmationPopup = ({ open, handleClose, handleConfirmDelete }) => (
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Confirm Delete</DialogTitle>
    <DialogContent>
      <DialogContentText color='red'>
        Are you sure you want to delete this user?
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

const EditPopup = ({ open, handleClose, selectedUser, handleSaveEdit }) => {
  const [updatedUser, setUpdatedUser] = useState(selectedUser);

  if (!selectedUser) return null; // Thêm điều kiện kiểm tra selectedUser không phải null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Cập nhật state updatedUser với giá trị mới
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Thêm điều kiện kiểm tra selectedUser không phải null trước khi truy cập các thuộc tính của nó
  const { firstname, lastname, birthday, email, phone, address, age, avatar } = selectedUser || {};

  const handleSave = () => {
    // Gọi hàm handleSaveEdit và truyền vào updatedUser để lưu các thay đổi vào cơ sở dữ liệu
    handleSaveEdit(updatedUser);
    // Sau khi lưu thành công, đóng popup
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ height: '80vh', width: '500px', p: 2 }}>
          <Box>
          <label> Firstname <Input name="firstname" fullWidth value={firstname} onChange={handleInputChange} /></label><br /><br />
            <label> Lastname <Input name="lastname" fullWidth value={lastname} onChange={handleInputChange} /></label><br /><br />
            <label> Birthday <Input name="birthday" fullWidth value={birthday} onChange={handleInputChange} /></label><br /><br />
            <label> Email <Input name="email" fullWidth value={email} onChange={handleInputChange} /></label><br /><br />
            <label> Phone <Input name="phone" fullWidth value={phone} onChange={handleInputChange} /></label><br /><br />
            <label> Address <Input name="address" fullWidth value={address} onChange={handleInputChange} /></label><br /><br />
            <label> Age <Input name="age" fullWidth value={age} onChange={handleInputChange} /></label><br /><br />
            <label> Avatar <Input name="avatar" fullWidth value={avatar} onChange={handleInputChange} /></label>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSave} color="primary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

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

export default function ManageAccount() {
  const [deletePopupOpen, setDeletePopupOpen] = useState(false); // State cho việc hiển thị popup
  const [editPopupOpen, setEditPopupOpen] = useState(false); // State cho việc hiển thị popup
  const [selectedRow, setSelectedRow] = useState(null); // State để lưu thông tin của hàng được chọn

  const [selectedUserId, setSelectedUserId] = useState(null);
  const handleDeleteIconClick = (userId) => {
    setSelectedUserId(userId); // Lưu ID của người dùng được chọn vào state
    setDeletePopupOpen(true); // Hiển thị popup
  };

  const handleOpenEdit = (row) => {
    setSelectedRow(row);
    setEditPopupOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      // Gọi API để xóa người dùng
      const response = await fetch(`http://localhost:3000/users/${selectedUserId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      // Nếu xóa thành công, cập nhật lại danh sách người dùng
      fetchUserData();
      // Đóng popup
      setDeletePopupOpen(false);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  const handleSaveEdit = async (updatedUserData) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${updatedUserData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUserData),
      });
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      // If update successful, close edit popup and fetch updated user data
      setEditPopupOpen(false);
      fetchUserData();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  const [open, setOpen] = React.useState(true);
  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        headers: {
          'Authorization': `Bearer ${token}`, // Gửi token ở header nếu cần
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch accounts');
      }
      const data = await response.json();

      const newData = data.map((item, index) => ({ ...item, id: index + 1 }));

      setRows(newData);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: '_id', headerName: 'ID Mongo', width: 70 },
    { field: 'username', headerName: 'User Name', width: 100 },
    { field: 'firstname', headerName: 'First Name', width: 90 },
    { field: 'lastname', headerName: 'Last Name', width: 90 },
    { field: 'role', headerName: 'Role', width: 90 },
    { field: 'phone', headerName: 'Phone Number', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'age', headerName: 'Age', width: 50 },
    { field: 'birthday', headerName: 'Birthday', width: 100 },
    { field: 'avatar', headerName: 'Avatar', width: 100 },
    {
      field: 'deleteAction',
      headerName: 'Delete',
      width: 120,
      renderCell: (params) => (
        <IconButton
          color='primary'
          aria-label='delete account'
          component='span'
          onClick={() => handleDeleteIconClick(params.row._id)}
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
          onClick={() => handleOpenEdit(params.row)}
        >
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  const [rows, setRows] = useState([]);
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch('http://localhost:3000/users', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch accounts');
        }
        const data = await response.json();

        const newData = data.map((item, index) => ({ ...item, id: index + 1 }));

        setRows(newData);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    fetchAccounts();
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
              Manage Account
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
      <>
        {/* Popup component */}
        <DeleteConfirmationPopup
          open={deletePopupOpen}
          handleClose={() => setDeletePopupOpen(false)}
          handleConfirmDelete={handleConfirmDelete}
        />
        <EditPopup
          open={editPopupOpen}
          handleClose={() => setEditPopupOpen(false)}
          selectedUser={selectedRow}
          handleSaveEdit={handleSaveEdit}
        />
      </>
    </ThemeProvider>
  );
}
