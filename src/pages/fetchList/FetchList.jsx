import React, { useEffect } from 'react';
import { Grid, Paper, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changePageName } from '../../redux/appRedux';

const FetchList = () => {
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(changePageName('Fetch'));
  }, [dispatcher]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Box>FetchList</Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default FetchList;
