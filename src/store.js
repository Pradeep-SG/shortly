import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  linkList: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    fetchData(state) {
      const linkListTemp = JSON.parse(localStorage.getItem('linkList'));
      if (linkListTemp) {
        state.linkList = linkListTemp;
      } else {
        state.linkList = [];
      }
    },
  },
});

const store = configureStore({
  reducer: listSlice.reducer,
});

export const listActions = listSlice.actions;

export default store;
