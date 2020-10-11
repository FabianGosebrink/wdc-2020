import { createSelector } from '@ngrx/store';
import * as fromReducer from './todo.reducer';

export const getAllUndoneItems = createSelector(
  fromReducer.getTodoState,
  (state: fromReducer.ReducerTodoState) => state.items.filter((x) => !x.done)
);

export const getAllDoneItems = createSelector(
  fromReducer.getTodoState,
  (state: fromReducer.ReducerTodoState) => state.items.filter((x) => x.done)
);

export const getSelectedItem = createSelector(
  fromReducer.getTodoState,
  (state: fromReducer.ReducerTodoState) => state.selectedItem
);
