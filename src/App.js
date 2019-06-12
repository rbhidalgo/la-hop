import React, {Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'

import NavBar from './components/Nav'
import MapContainer from './components/MapContainer'
import LearnMore from './components/LearnMore'
import Form from './components/Form'


import * as routes from './constants/routes'
import './App.css';

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
              <p>A nice warm laptop for me to sit on get my claw stuck in the dog's ear skid on floor, crash into wall and stares at human while pushing stuff off a table jump off balcony, onto stranger's head or meow all night, for claw drapes. Hack up furballs spill litter box, scratch at owner, destroy all furniture, especially couch, yet please stop looking at your phone and pet me kitty scratches couch bad kitty claw at curtains stretch and yawn nibble on tuna ignore human bite human hand. Jump off balcony, onto stranger's head sleep everywhere, but not in my bed cat sit like bread yet my left donut is missing, as is my right. I'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense!. Go into a room to decide you didn't want to be in there anyway i bet my nine lives on you-oooo-ooo-hooo and leave fur on owners clothes, and terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry but purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table kick up litter or ignore the human until she needs to get up, then climb on her lap and sprawl. 
              </p>
            <Form />

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
