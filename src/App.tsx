import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Form from 'components/Form'
import Table from 'components/Table'

const App: React.FC = () => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <div style={{ margin: '20px auto', textAlign: 'center' }}>
      <Form />
    </div>
    <div style={{ width: 800, margin: '20px auto' }}>
      <Table />
    </div>
  </StylesProvider>
)

export default App
