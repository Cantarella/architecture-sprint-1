import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './user'


export default configureStore({
  reducer: {
    User: UserReducer
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

