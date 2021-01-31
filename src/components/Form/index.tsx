import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { addTask, addTaskAsync } from 'features/taskSlice'

const Form: React.FC = () => {
  const [state, setState] = useState({
    title: '',
    status: '未対応',
  })

  const dispatch = useDispatch()

  return (
    <form noValidate autoComplete="off">
      <TextField
        label="Todo"
        value={state.title}
        style={{ width: 200, marginRight: 30 }}
        onChange={(e) => {
          const title = e?.target.value || ''
          setState({ ...state, title })
        }}
      />
      <TextField
        select
        label="ステータス"
        value={state.status}
        style={{ width: 100, marginRight: 30 }}
        onChange={(e) => {
          const status = e?.target.value || ''
          setState({ ...state, status })
        }}
      >
        {['未対応', '処理中', '完了'].map((item, i) => (
          <MenuItem key={i} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: 15 }}
        onClick={() => dispatch(addTask(state.title, state.status))}
      >
        同期登録
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(addTaskAsync(state.title, state.status))}
      >
        非同期登録
      </Button>
    </form>
  )
}

export default Form
