import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Divider from '@mui/material/Divider'


export default function News() {
  return (
    <Box sx={{ flexGrow: 1, p:5 }}>
      <Divider sx={{
        width: '100px',
        height: '4px',
        backgroundColor: 'red'
      }}
      />
      <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} pt={'10px'}>Tin tức hôm nay</Typography>
      <Grid container spacing={5} columns={24}>
        <Grid item xs={8}>
          <Card sx={{ maxWidth: 500, borderRadius:5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image="https://thanhnien.mediacdn.vn/Uploaded/gianglao/2022_07_04/cristiano-ronaldo-3776.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card sx={{ maxWidth: 500,borderRadius:5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image="https://thanhnien.mediacdn.vn/Uploaded/gianglao/2022_07_04/cristiano-ronaldo-3776.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card sx={{ maxWidth: 500,borderRadius:5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image="https://thanhnien.mediacdn.vn/Uploaded/gianglao/2022_07_04/cristiano-ronaldo-3776.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}