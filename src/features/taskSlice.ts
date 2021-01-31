import { createSlice, nanoid, Dispatch, PayloadAction } from '@reduxjs/toolkit'

export interface Task {
  id: string
  title: string
  status: string
  deleted: boolean
}

export type Tasks = Task[]

export const taskSlice = createSlice({
  name: 'task',
  initialState: [
    {
      id: nanoid(),
      title: 'タスク名',
      status: '未対応',
      deleted: false  
    }    
  ],
  reducers: {
    addTask: {
      reducer: (state: Tasks, action: PayloadAction<Task>) => {
        state.push(action.payload)
      },
      prepare: (title: Task['title'], status: Task['status']) => {
        return {
          payload: {
            id: nanoid(),
            title,
            status,
            deleted: false,
          },
        }
      },
    },
    deleteTask: (state: Tasks, action: PayloadAction<{ id: Task['id'] }>) => {
      const id = action.payload.id
      const index = state.findIndex((data) => data.id === id)
      state[index].deleted = true
    },
  },
})

export const { addTask, deleteTask } = taskSlice.actions

export const addTaskAsync = (
  title: Task['title'], 
  status: Task['status']
) => (
  dispatch: Dispatch<PayloadAction<Task>>
) => {
  setTimeout(() => {
    dispatch(addTask(title, status))
  }, 2000)
}

export default taskSlice.reducer
