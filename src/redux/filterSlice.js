import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter: {
      reduser(state, action) {
        return (state = action.payload);
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
