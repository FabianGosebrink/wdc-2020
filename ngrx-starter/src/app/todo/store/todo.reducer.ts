import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Todo } from '../../models/todo';
import * as todoActions from './todo.actions';

export const featureName = 'todo';
export const getTodoState = createFeatureSelector(featureName);

const initialValues: Todo[] = [
  {
    id: 'b1b46e83-f5d7-47e9-a8ea-601142219614',
    value: 'fromstore',
    done: false,
    created: new Date('2019-07-16T14:55:09.0287501+00:00'),
  },
  {
    id: 'a7659545-2f0b-4da8-8c3d-41ab388e459a',
    value: 'fromstore2',
    done: false,
    created: new Date('2019-07-16T14:56:09.5735011+00:00'),
  },
];

export interface ReducerTodoState {
  items: Todo[];
  selectedItem: Todo;
  loading: boolean;
}

export const initialState: ReducerTodoState = {
  items: [],
  selectedItem: null,
  loading: false,
};

const todoReducerInternal = createReducer(
  initialState,

  on(
    todoActions.loadAllTodos,
    todoActions.addTodo,
    todoActions.setAsDone,
    todoActions.loadSingleTodo,
    (state) => {
      return {
        ...state,
        loading: false,
      };
    }
  ),

  on(todoActions.loadAllTodosFinished, (state, { payload }) => {
    return {
      ...state,
      loading: false,
      items: [...payload],
    };
  }),

  on(todoActions.addTodoFinished, (state, { payload }) => {
    return {
      ...state,
      loading: false,
      items: [...state.items, payload],
    };
  }),

  on(todoActions.setAsDoneFinished, (state, { payload }) => {
    const index = state.items.findIndex((x) => x.id === payload.id);
    const itemsClone = [...state.items];
    itemsClone[index] = payload;
    return {
      ...state,
      items: itemsClone,
    };
  }),

  on(todoActions.loadSingleTodoFinished, (state, { payload }) => ({
    ...state,
    loading: false,
    selectedItem: payload,
  }))
);

export function todoReducer(
  state: ReducerTodoState | undefined,
  action: Action
): ReducerTodoState {
  return todoReducerInternal(state, action);
}
