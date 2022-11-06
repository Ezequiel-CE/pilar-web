import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changePageName } from '../../redux/appRedux';
import api from '../../services/api';
import Item from '../../components/fetchList/Item';
import Modal from '../../components/fetchList/Modal';
import NextItem from '../../components/fetchList/NextItem';

const FetchList = () => {
  const dispatcher = useDispatch();
  const [pokemons, setPokemons] = useState(null);
  const [next, setNext] = useState(null);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  const handleClickOpen = async (url) => {
    try {
      const result = await api.GET(url);
      if (result) {
        setData(result);
        setOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPokemons = async () => {
    try {
      const result = await api.GET(api.pokemons);
      if (result) {
        setPokemons(result.results);
        setNext(result.next);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    try {
      const result = await api.GET(next);
      if (result) {
        setPokemons((prev) => [...prev, ...result.results]);
        setNext(result.next);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatcher(changePageName('Fetch'));
    getPokemons();
  }, [dispatcher]);

  return (
    <>
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
                <Item data={p} openModal={handleClickOpen} />
              </Grid>
            );
          })}
        {!loading && <NextItem loadMore={loadMore} />}
      </Grid>
      <Modal data={data} handleClose={handleClose} open={open} />
    </>
  );
};
export default FetchList;
