import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import POKE_IMG from '../../assets/image/poke_next.png';

const NextItem = ({ loadMore }) => {
  return (
    <Grid item xs={4}>
      <Card
        p={2}
        sx={{
          display: 'flex',
          height: 100,
          cursor: 'pointer',
          backgroundColor: '#317b52',
          '&:hover': { backgroundColor: '#5acdbd' },
        }}
        onClick={loadMore}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{ color: 'white' }}>
            Cargar Más
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 100, p: 2 }}
          image={POKE_IMG}
          alt="Live from space album cover"
        />
      </Card>
    </Grid>
  );
};

export default NextItem;
