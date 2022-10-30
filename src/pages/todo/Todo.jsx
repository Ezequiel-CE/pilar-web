import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { appSelector } from '../../redux/appRedux';
import TodoList from '../../components/todo/TodoList';
import TodoForm from '../../components/todo/TodoForm';
import { changePageName } from '../../redux/appRedux';

const Todo = () => {
  const todos = useSelector(appSelector.todo);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(changePageName('Todo'));
  }, [dispatcher]);

  return (
    <Grid container spacing={3}>
      <TodoForm />
      {todos.length > 0 && <TodoList todos={todos} />}
    </Grid>
  );
};
export default Todo;
