import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Stack,
  TextField,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/appRedux';
import { v4 as uuid } from 'uuid';

const TodoForm = () => {
  const dispatcher = useDispatch();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTask = () => {
    if (text.trim() === '') return;
    dispatcher(addTodo({ text: text, id: uuid() }));
    setText('');
  };
  return (
    <Grid item xs={12} md={12}>
      <Card>
        <CardHeader title="Agrega una tarea" sx={{ textAlign: 'center' }} />
        <CardContent>
          <Stack sx={{ justifyContent: 'center', gap: '20px' }} direction="row">
            <TextField
              value={text}
              label="tarea"
              variant="outlined"
              onChange={handleChange}
            />

            <Button variant="contained" onClick={addTask}>
              Agregar
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TodoForm;
