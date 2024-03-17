import React, { useState, useEffect } from 'react';
import Filter from '../Fillter/Fillter'
import PaginationRounded from './PaginationRounded'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, Box, Button, CardActions } from '@mui/material'


function Product() {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    fetchAccessoryData();
  }, []);

  const fetchAccessoryData = async () => {
    try {
      const response = await fetch('http://localhost:3000/accessories/getAllAccessory');
      const data = await response.json();
      console.log(data);
      setAccessories(data);
    } catch (error) {
      console.error('Error fetching accessory data:', error);
    }
  };
  return (
    <Box sx={{ flexGrow: 1, p: 5, paddingTop: '0' }}>
      <Grid container>
        <Grid xs={2} md={2}>
          <Box>
            <Filter />
          </Box>
        </Grid>
        <Grid xs={10} md={10}>
          <Box sx={{ marginLeft: '50px' }}>
            <Box>
              <Grid container spacing={4}>
                {accessories.map((accessory, index) => (
                  <Grid item xs={3} key={index}>
                    <Card
                      sx={{
                        maxWidth: 250,
                        borderRadius: 5,
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        border: '3px solid rgba(149, 157, 165, 0.2)',
                        minHeight: '450px'
                      }}>
                      <CardActionArea sx={{ padding: '10px', }}>
                        <CardMedia
                          component="img"
                          image={accessory.imageUrl[0]}
                          alt={accessory.name}
                          sx={{
                            borderRadius: 5,
                          }}
                        />
                        <CardContent sx={{ textAlign: 'center', height: '150px', overflow: 'hidden' }}>
                          <Typography gutterBottom variant="h5" component="div">
                            {accessory.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {accessory.description}
                          </Typography>
                          <Typography variant="h6" color="text.primary" mt={'10px'}>
                            {accessory.price} VNĐ
                          </Typography>
                        </CardContent>

                      </CardActionArea>
                      <CardActions >
                        <Button sx={{
                          borderRadius: 5
                        }} variant='contained' fullWidth >Thuê ngay</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box sx={{ marginTop: '30px' }}><PaginationRounded /></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Product