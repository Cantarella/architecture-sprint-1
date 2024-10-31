import { configureStore } from '@reduxjs/toolkit'
import Places from './places'


export default configureStore({
  reducer: {
    Places: Places
  }
})


// export function wrapStore() {
//   const ModuleReducer = {
//     User: UserReducer
//   }
//   const reducerManager = createReducerManager(ModuleReducer)
//
//   // Create a store with the root reducer function being the one exposed by the manager.
//   const store = configureStore({
//     reducer: ModuleReducer
//   })
//
//   store.reducerManager = reducerManager
//   // console.log(store.reducerManager.getReducerMap())
//   return store;
// }

