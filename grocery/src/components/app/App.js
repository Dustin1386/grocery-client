// import logo from './logo.svg';
import React from 'react'
import {Switch } from 'react-router-dom'

import LandingRoute from '../routes/landingRoute';
import ProductRoute from '../routes/productRoute'
import SearchRoute from '../routes/searchRoute'
import NavRoute from '../routes/navRoute'
import AboutRoute from '../about/about'

function App() {
  return (
    <main className="App">
      
      <Switch>
      <LandingRoute
      exact
      path={'/'}
      component={LandingRoute}
      />
      <SearchRoute
      exact
      path={'/search'}
      component={SearchRoute}
      />
      <ProductRoute
      exact
      path={'/product'}
      component={ProductRoute}
      />
      <NavRoute
      exact
      path={'/nav'}
      component={NavRoute}
      />
      <AboutRoute
      exact
      path={'/about'}
      component={AboutRoute}
      />
      </Switch>

    </main>
  )
}

export default App;
