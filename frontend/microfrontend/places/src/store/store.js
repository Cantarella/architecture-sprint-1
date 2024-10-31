import { configureStore } from '@reduxjs/toolkit'
import Places from './places'


export default configureStore({
  reducer: {
    Places: Places
  }
})
