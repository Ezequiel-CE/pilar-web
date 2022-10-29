const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const DELETE_TODO = 'DELETE_TODO';

const initialState = {
  todo: [],
};

export const appSelector = {
  todo: (state) => state.todo,
};

export const appReducer = (state = initialState, action) => {
  //add

  if (action.type === ADD_TODO) {
    return {
      ...state,
      todo: [
        ...state.todo,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ],
    };
  }

  //complete

  if (action.type === COMPLETE_TODO) {
    return {
      ...state,
      todo: state.todo.map((t) => {
        if (t.id === action.payload.id) {
          return {
            ...t,
            completed: action.payload.completed,
          };
        }
        return t;
      }),
    };
  }

  //delete

  if (action.type === DELETE_TODO) {
    return {
      ...state,
      todo: state.todo.filter((t) => t.id !== action.id),
    };
  }

  return state;
};

//ACTIONS

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const completedTodo = (payload) => ({
  type: COMPLETE_TODO,
  payload,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});