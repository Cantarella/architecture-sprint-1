import { createSlice } from '@reduxjs/toolkit'

export const User = createSlice({
  name: 'User',
  initialState: {
    email: '',
    id: '',
    name: ''
  },
  reducers: {
    save: (state, {payload}) => {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      })
    }
  }
})
export const { save} = User.actions

export default User.reducer