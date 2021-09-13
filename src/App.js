import React from "react";
import {
		BrowserRouter as Router,
		Switch,
		Route,
		Link
	} from "react-router-dom";

import {Button, Grid, Typography} from '@material-ui/core'

import Form from './components/Form';

const App = () => {
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
				<Route path="/pizza-form">
					<Form/>
				</Route>

				<Route exact path="/">
					<Typography variant='h1'>
						Your favorite food, delivered while coding
					</Typography>

					<Link to="/pizza" style={{ textDecoration: 'none' }}>
							<Button variant="contained" color="primary" id="order-pizza" size='large'>
							Order Pizza
							</Button>
					</Link>

				</Route>
			</Switch>


		</Grid>
		
  )
}
export default App;
