import {
  EDIT_TODO,
  ADD_TODO,
  COMPLET_TODO,
  DELETE_TODO,
} from "../Type/actionType";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const edit = (id,value) => {
  return { type: EDIT_TODO, payload:{id,value} };
};

export const complet = (payload) => {
  return { type: COMPLET_TODO, payload };
};

export const delt = (payload) => {
  return { type: DELETE_TODO, payload };
};
