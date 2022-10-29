import { Grid, Stack, Divider, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { appSelector } from '../../redux/appRedux';

const TareasCounter = () => {
  const todos = useSelector(appSelector.todo);

  const tareas = {
    pendientes: 0,
    completadas: 0,
    totales: todos.length,
  };

  todos.forEach((todo) => {
    if (todo.completed) {
      tareas.completadas++;
    } else {
      tareas.pendientes++;
    }
  });

  return (
    <Grid item xs={12}>
      <Stack
        direction="row"
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Paper sx={{ p: 1 }}>
          Tareas completadas: {tareas.completadas}/{tareas.totales}
        </Paper>
        <Paper sx={{ p: 1 }}>
          Tareas Pendientes: {tareas.pendientes}/{tareas.totales}
        </Paper>
      </Stack>
    </Grid>
  );
};

export default TareasCounter;
