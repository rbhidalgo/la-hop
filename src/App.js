import React, {Component }           from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { PacmanLoader }              from 'react-spinners'

import NavBar       from './components/Nav'
import MapContainer from './components/MapContainer'
import LearnMore    from './components/LearnMore'
import Form         from './components/Form'
import DatePicker   from './components/DatePicker'
import Tags from './components/Tags'

import * as routes  from './constants/routes'
import './App.css'
import 'react-tag-buttons/lib/css/styles.css'


class App extends Component {

  state = {
    loading: true
  }

  render(){
    const { loading } = this.state

    return(

      <div className="grid-container">

        <div className="grid-header">
          <h1>Hello World</h1>
          <PacmanLoader color={'gold'} size={10} />
        </div>

        <div className="grid-nav">
          <NavBar loading={loading}/>
        </div>

        <div className="grid-main">
        <Switch>
          <Route exact path={routes.INFO} render={() =>
            <LearnMore />
          }/>
          <Route exact path={routes.REQUEST} render={() => <>
            <MapContainer />
            <DatePicker />
            <Form />
            <Tags />
          </> }/>
          <Route exact path={routes.ROOT} render={() => <></> }/>
        </Switch>
        </div>

        <div className="grid-footer"></div>

      </div>

    )
  }
}

export default App;
