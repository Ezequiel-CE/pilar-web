import React, { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changePageName } from '../../redux/appRedux';
import api from '../../services/api';
import { appSelector } from '../../redux/appRedux';
import Item from './Item';
import POKE_IMG from '../../assets/image/poke_next.png';

const FetchList = () => {
  const dispatcher = useDispatch();
  const [pokemons, setPokemons] = useState(null);
  const [next, setNext] = useState(null);

  const getPokemons = async () => {
    try {
      // dispatcher(appActions.loading(true));
      const result = await api.GET(api.pokemons);
      if (result) {
        console.log('poke: ', result);
        setPokemons(result.results);
        setNext(result.next);
      }
    } catch (error) {
      console.log(error);
    } finally {
      // dispatcher(appActions.loading(false));
    }
  };

  const loadMore = async () => {
    try {
      // dispatch(appActions.loading(true));
      const result = await api.GET(next);
      if (result) {
        console.log('poke: ', result.results);
        setPokemons((prev) => [...prev, ...result.results]);
        setNext(result.next);
      }
    } catch (error) {
      console.log(error);
    } finally {
      // dispatch(appActions.loading(false));
    }
  };

  useEffect(() => {
    dispatcher(changePageName('Fetch'));
    getPokemons();
  }, [dispatcher]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography component="div" variant="h5">
          Mi Pokedex
        </Typography>
      </Grid>
      {pokemons &&
        pokemons.map((p, index) => {
          return (
            <Grid item xs={4} key={index}>
              <Item data={p} />
            </Grid>
          );
        })}
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
    </Grid>
  );
};
export default FetchList;
