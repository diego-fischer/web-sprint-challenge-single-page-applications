import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function Body(props) {
  return (
    <React.Fragment>
      <Typography variant='h1'>
        Your favorite food, delivered while coding
      </Typography>

      <Link to='/pizza' style={{ textDecoration: 'none' }}>
        <Button
          variant='contained'
          color='primary'
          id='order-pizza'
          size='large'
        >
          Order Pizza
        </Button>
      </Link>
    </React.Fragment>
  )
}
