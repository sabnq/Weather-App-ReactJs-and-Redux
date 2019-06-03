import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationListContainer from './containers/locationListContainer';
import ForecastExtendedContainer from './containers/forecastExtendedContainer';

import './App.css';

const cities = [
  'Bogotá, co',
  'Buenos Aires, ar',
  'Paris, fr',
  'Washington, us',
  'Madrid, es'
];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography color='inherit'>
                  Weather APP
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
            <LocationListContainer cities={cities}></LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className='details'>
                  <ForecastExtendedContainer/>
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;