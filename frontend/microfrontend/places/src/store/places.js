import { createSlice } from '@reduxjs/toolkit'

export const User = createSlice({
  name: 'places',
  initialState: {
    CardsData: []
  },
  reducers: {
    save: (state, {payload}) => {
      state.CardsData = payload;
    }
  }
})
export const { save} = User.actions

export default User.reducer