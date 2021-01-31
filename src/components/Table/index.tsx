import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import MaterialTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { Tasks } from 'features/taskSlice'
import { Store } from 'store'
import { deleteTask } from 'features/taskSlice'

const Table: React.FC = () => {
  const tasks = useSelector<Store, Tasks>((state) =>
    state.tasks.filter((task) => !task.deleted)
  )

  const dispatch = useDispatch()

  return (
    <Paper>
      <TableContainer>
        <MaterialTable>
          <TableHead>
            <TableRow>
              <TableCell width={50}></TableCell>
              <TableCell width={50} align="left">
                No.
              </TableCell>
              <TableCell width={120} align="left">
                ステータス
              </TableCell>
              <TableCell align="left">Todo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, i) => (
              <TableRow key={task.id}>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      dispatch(deleteTask({ id: task.id }))
                    }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
                <TableCell align="left">{i + 1}</TableCell>
                <TableCell align="left">{task.status}</TableCell>
                <TableCell align="left">{task.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MaterialTable>
      </TableContainer>
    </Paper>
  )
}

export default Table
