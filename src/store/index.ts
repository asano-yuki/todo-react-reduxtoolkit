import { configureStore } from '@reduxjs/toolkit'
import taskReducer, { Tasks } from '../features/taskSlice'

export interface Store {
  tasks: Tasks
}

export default configureStore<Store>({
  reducer: {
    tasks: taskReducer,
  },
})
