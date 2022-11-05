import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { IMG_URL } from '../../services/api';

const getPokemonImgId = (id) => {
  switch (id.length) {
    case 1:
      return `00${id}`;
    case 2:
      return `0${id}`;
    default:
      return id;
  }
};

const Item = ({ data }) => {
  const path = data.url.split('/');
  const imgID = getPokemonImgId(path[6]);
  return (
    <Card
      p={2}
      sx={{
        display: 'flex',
        height: 100,
        cursor: 'pointer',
        '&:hover': { backgroundColor: '#5acdbd', color: 'white' },
      }}
    >
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          N° {imgID}
        </Typography>
        <Typography component="div" variant="h5">
          {data.name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        src={`${IMG_URL}${imgID}.png`}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default Item;
