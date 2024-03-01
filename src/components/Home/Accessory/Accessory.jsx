import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'


export default function Accessory() {
  return (
    <Box sx={{
      flexGrow: 1,
      p: 5,
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\'https://media2.gody.vn/public/images/place/san-van-dong-old-trafford-old-trafford-stadium/6549e80a76393-1699342346.jpg\')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} pt={'10px'} color={'white'}>Phụ kiện cho thuê hôm nay</Typography>
      <Grid container spacing={1} columns={32}>
        <Grid item xs={8}>
          <Card
            sx={{
              maxWidth: 250,
              padding: '10px',
              borderRadius: 5
            }} >
            <CardActionArea>
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
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'center', p:3 }}>
              <Button variant="outlined" size="large" color="primary" sx={{ borderRadius: 5 }}>
                Shop Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card
            sx={{
              maxWidth: 250,
              padding: '10px',
              borderRadius: 5
            }} >
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://product.hstatic.net/1000061481/product/5c6cdc7f169f4773a69524e28bce0509_0d15d98f52fe45f487f3a41f398cc009_1024x1024.jpeg"
                alt="green iguana"
              />
              <CardContent sx={{ textAlign:'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Áo Manchester
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Manchester United adidas Away Shirt 2023-24
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'center', p:3 }}>
              <Button variant="outlined" size="large" color="primary" sx={{ borderRadius: 5 }}>
                Shop Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card
            sx={{
              maxWidth: 250,
              padding: '10px',
              borderRadius: 5
            }} >
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://product.hstatic.net/1000061481/product/5c6cdc7f169f4773a69524e28bce0509_0d15d98f52fe45f487f3a41f398cc009_1024x1024.jpeg"
                alt="green iguana"
              />
              <CardContent sx={{ textAlign:'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Áo Manchester
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Manchester United adidas Away Shirt 2023-24
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'center', p:3 }}>
              <Button variant="outlined" size="large" color="primary" sx={{ borderRadius: 5 }}>
                Shop Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card
            sx={{
              maxWidth: 250,
              padding: '10px',
              borderRadius: 5
            }} >
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://product.hstatic.net/1000061481/product/5c6cdc7f169f4773a69524e28bce0509_0d15d98f52fe45f487f3a41f398cc009_1024x1024.jpeg"
                alt="green iguana"
              />
              <CardContent sx={{ textAlign:'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Áo Manchester
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Manchester United adidas Away Shirt 2023-24
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'center', p:3 }}>
              <Button variant="outlined" size="large" color="primary" sx={{ borderRadius: 5 }}>
                Shop Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}