import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import Card from '../../components/dashboard/Card';
import todoImg from '../../assets/image/todo.jpg';
import fetchImg from '../../assets/image/fetch.jpg';
import TareasCounter from '../../components/dashboard/TareasCounter';
import { useDispatch } from 'react-redux';
import { changePageName } from '../../redux/appRedux';

const Dashboard = () => {
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(changePageName(''));
  }, [dispatcher]);

  return (
    <Grid container spacing={3}>
      <TareasCounter />
      <Grid item xs={12}>
        <Card
          image={todoImg}
          title={'Todo section'}
          text={'go to the todo page'}
          href={'/todo'}
        />
      </Grid>
      <Grid item xs={12}>
        <Card
          image={fetchImg}
          title={'Fetch List section'}
          text={'go to the fetch list page'}
          href={'/fetch-list'}
        />
      </Grid>
    </Grid>
  );
};
export default Dashboard;
