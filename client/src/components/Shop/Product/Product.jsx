import React from 'react'
import Filter from '../Filter/Filter'
import PaginationRounded from './PaginationRounded'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, Box } from '@mui/material'
function Product() {
  return (
    <Box sx={{ flexGrow: 1, p:5, paddingTop: '0'}}>
      <Grid container>
        <Grid xs={2} md={2}>
          <Box>
            <Filter/>
          </Box>
        </Grid>
        <Grid xs={10} md={10}>
          <Box sx={{marginLeft: '50px'}}>
            <Box>
              <Grid container spacing={4}>
                <Grid item xs={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      borderRadius: 5,
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      border: '1px solid rgba(149, 157, 165, 0.2)'
                    }} >
                    <CardActionArea sx={{padding: '10px'}}>
                      <CardMedia
                        component="img"
                        image="https://product.hstatic.net/1000061481/product/5c6cdc7f169f4773a69524e28bce0509_0d15d98f52fe45f487f3a41f398cc009_1024x1024.jpeg"
                        alt="green iguana"
                      />
                      <CardContent sx={{ textAlign:'center' }}>
                        <Typography gutterBottom variant="h5" component="div" >
                          Áo Manchester
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Manchester United adidas Away Shirt 2023-24
                        </Typography>
                        <Typography variant="h6" color="text.primary" mt={'10px'}>
                          100.000.000 VNĐ
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      borderRadius: 5,
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      border: '1px solid rgba(149, 157, 165, 0.2)'
                    }} >
                    <CardActionArea sx={{padding: '10px'}}>
                      <CardMedia
                        component="img"
                        image="https://product.hstatic.net/1000061481/product/5c6cdc7f169f4773a69524e28bce0509_0d15d98f52fe45f487f3a41f398cc009_1024x1024.jpeg"
                        alt="green iguana"
                      />
                      <CardContent sx={{ textAlign:'center' }}>
                        <Typography gutterBottom variant="h5" component="div" >
                          Áo Manchester
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Manchester United adidas Away Shirt 2023-24
                        </Typography>
                        <Typography variant="h6" color="text.primary" mt={'10px'}>
                          100.000.000 VNĐ
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      borderRadius: 5,
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      border: '1px solid rgba(149, 157, 165, 0.2)'
                    }} >
                    <CardActionArea sx={{padding: '10px'}}>
                      <CardMedia
                        component="img"
                        image="https://product.hstatic.net/1000061481/product/5c6cdc7f169f4773a69524e28bce0509_0d15d98f52fe45f487f3a41f398cc009_1024x1024.jpeg"
                        alt="green iguana"
                      />
                      <CardContent sx={{ textAlign:'center' }}>
                        <Typography gutterBottom variant="h5" component="div" >
                          Áo Manchester
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Manchester United adidas Away Shirt 2023-24
                        </Typography>
                        <Typography variant="h6" color="text.primary" mt={'10px'}>
                          100.000.000 VNĐ
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      borderRadius: 5,
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      border: '1px solid rgba(149, 157, 165, 0.2)'
                    }} >
                    <CardActionArea sx={{padding: '10px'}}>
                      <CardMedia
                        component="img"
                        image="https://product.hstatic.net/1000061481/product/5c6cdc7f169f4773a69524e28bce0509_0d15d98f52fe45f487f3a41f398cc009_1024x1024.jpeg"
                        alt="green iguana"
                      />
                      <CardContent sx={{ textAlign:'center' }}>
                        <Typography gutterBottom variant="h5" component="div" >
                          Áo Manchester
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Manchester United adidas Away Shirt 2023-24
                        </Typography>
                        <Typography variant="h6" color="text.primary" mt={'10px'}>
                          100.000.000 VNĐ
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      borderRadius: 5,
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      border: '1px solid rgba(149, 157, 165, 0.2)'
                    }} >
                    <CardActionArea sx={{padding: '10px'}}>
                      <CardMedia
                        component="img"
                        image="https://product.hstatic.net/1000061481/product/5c6cdc7f169f4773a69524e28bce0509_0d15d98f52fe45f487f3a41f398cc009_1024x1024.jpeg"
                        alt="green iguana"
                      />
                      <CardContent sx={{ textAlign:'center' }}>
                        <Typography gutterBottom variant="h5" component="div" >
                          Áo Manchester
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Manchester United adidas Away Shirt 2023-24
                        </Typography>
                        <Typography variant="h6" color="text.primary" mt={'10px'}>
                          100.000.000 VNĐ
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      borderRadius: 5,
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      border: '1px solid rgba(149, 157, 165, 0.2)'
                    }} >
                    <CardActionArea sx={{padding: '10px'}}>
                      <CardMedia
                        component="img"
                        image="https://product.hstatic.net/1000061481/product/5c6cdc7f169f4773a69524e28bce0509_0d15d98f52fe45f487f3a41f398cc009_1024x1024.jpeg"
                        alt="green iguana"
                      />
                      <CardContent sx={{ textAlign:'center' }}>
                        <Typography gutterBottom variant="h5" component="div" >
                          Áo Manchester
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Manchester United adidas Away Shirt 2023-24
                        </Typography>
                        <Typography variant="h6" color="text.primary" mt={'10px'}>
                          100.000.000 VNĐ
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      borderRadius: 5,
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      border: '1px solid rgba(149, 157, 165, 0.2)'
                    }} >
                    <CardActionArea sx={{padding: '10px'}}>
                      <CardMedia
                        component="img"
                        image="https://product.hstatic.net/1000061481/product/5c6cdc7f169f4773a69524e28bce0509_0d15d98f52fe45f487f3a41f398cc009_1024x1024.jpeg"
                        alt="green iguana"
                      />
                      <CardContent sx={{ textAlign:'center' }}>
                        <Typography gutterBottom variant="h5" component="div" >
                          Áo Manchester
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Manchester United adidas Away Shirt 2023-24
                        </Typography>
                        <Typography variant="h6" color="text.primary" mt={'10px'}>
                          100.000.000 VNĐ
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      borderRadius: 5,
                      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                      border: '1px solid rgba(149, 157, 165, 0.2)'
                    }} >
                    <CardActionArea sx={{padding: '10px'}}>
                      <CardMedia
                        component="img"
                        image="https://product.hstatic.net/1000061481/product/5c6cdc7f169f4773a69524e28bce0509_0d15d98f52fe45f487f3a41f398cc009_1024x1024.jpeg"
                        alt="green iguana"
                      />
                      <CardContent sx={{ textAlign:'center' }}>
                        <Typography gutterBottom variant="h5" component="div" >
                          Áo Manchester
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Manchester United adidas Away Shirt 2023-24
                        </Typography>
                        <Typography variant="h6" color="text.primary" mt={'10px'}>
                          100.000.000 VNĐ
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{marginTop: '30px'}}><PaginationRounded/></Box>
          </Box>
        </Grid>
      </Grid>
      
    </Box>
  )
}

export default Product