import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Stack,
  Button,
  Checkbox,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { completedTodo, deleteTodo } from '../../redux/appRedux';

const TodoList = ({ todos }) => {
  const dispatcher = useDispatch();

  const completeTask = (todoId) => {
    dispatcher(completedTodo({ id: todoId }));
  };

  const deleteTask = (todoId) => {
    dispatcher(deleteTodo(todoId));
  };

  return (
    <Grid item xs={12} md={12}>
      <Card>
        <CardHeader title="Tareas" />
        <CardContent>
          {todos.map((todo) => (
            <Stack key={todo.id} sx={{ justifyContent: 'space-between' }} direction="row">
              <Grid item md={1}>
                <Checkbox
                  onChange={() => completeTask(todo.id)}
                  checked={todo.completed}
                />
              </Grid>
              <Grid item md={9} sx={{ pt: 1 }}>
                <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
                  {todo.text}
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Button variant="contained" onClick={() => deleteTask(todo.id)}>
                  Eliminar
                </Button>
              </Grid>
            </Stack>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TodoList;
