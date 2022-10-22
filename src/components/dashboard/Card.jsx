import React from 'react';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Card as CardMui } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Card({ image, title, text, href }) {
  return (
    <Link to={href} style={{ textDecoration: 'none' }}>
      <CardMui sx={{ textDecoration: 'none' }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CardMui>
    </Link>
  );
}
