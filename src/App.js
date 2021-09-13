import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import Body from './components/Body'
import Form from './components/Form'
import React, { useState } from 'react'

const App = () => {
  const [selection, setSelection] = useState({})
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: '100vh' }}
    >
      <Switch>
        {/* Rota do Form */}
        <Route path='/pizza'>
          <Form />
        </Route>
        <Body />
        {/* Rota da Home */}
        <Route exact path='/'></Route>
      </Switch>
    </Grid>
  )
}
export default App
