import React from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { appSelector } from '../../redux/appRedux';
import TodoList from '../../components/todo/TodoList';
import TodoForm from '../../components/todo/TodoForm';

const Todo = () => {
  const todos = useSelector(appSelector.todo);

  return (
    <Grid container spacing={3}>
      <TodoForm />
      {todos.length > 0 && <TodoList todos={todos} />}
    </Grid>
  );
};
export default Todo;
