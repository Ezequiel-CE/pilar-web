import React from 'react';
import { Grid, Paper, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { appSelector } from '../../redux/appRedux';

const Todo = () => {
  const state = useSelector(appSelector.todo);

  console.log(state);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Box>Todo</Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Todo;
