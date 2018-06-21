import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'babel-polyfill'

import HomeContainer from './HomeContainer'
import TaxContainer from './TaxContainer'
import MasterContainer from './MasterContainer'
import AsideContainer from './AsideContainer'
import PostContainer from './PostContainer'
import { Context } from './Provider'

import Header from '../components/molecules/Header'

class App extends Component {
  render() {
    return (
      <Context.Consumer>
        {({ state }) => {
          return (
            <Router>
              <MasterContainer {...state}>
                <AsideContainer {...state} />
                <section>
                  <Header {...state} char="+" />
                  <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/:postSlug" component={PostContainer} />
                    <Route path="/tag/:slug" component={TaxContainer} />
                    <Route path="/category/:slug" component={TaxContainer} />
                    <Route component={HomeContainer} />
                  </Switch>
                </section>
              </MasterContainer>
            </Router>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default App
