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
    <Box sx={{ flexGrow: 1, p: 5 }}>
      <Divider sx={{
        width: '100px',
        height: '4px',
        backgroundColor: 'red'
      }}
      />
      <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'} pt={'10px'}>Tin tức hôm nay</Typography>
      <Grid container spacing={5} columns={24}>
        <Grid item xs={8}>
          <Card sx={{ maxWidth: 500, borderRadius: 5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image="https://thanhnien.mediacdn.vn/Uploaded/gianglao/2022_07_04/cristiano-ronaldo-3776.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cristiano Ronaldo
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
          <Card sx={{ maxWidth: 500, borderRadius: 5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image="https://media.bongda.com.vn/files/hai.phan/2023/11/14/goal_-_blank_web_-_facebook_-_2023-11-09t110659353-1525.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Alejandro Garnacho
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
          <Card sx={{ maxWidth: 500, borderRadius: 5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="440"
                image="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt0c700b4cbd066bd2/60dc5ee2fd14d30f3eb0a71d/343de1e0a900d04322e62f98a3e5cb882225ab63.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  David Beckham
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