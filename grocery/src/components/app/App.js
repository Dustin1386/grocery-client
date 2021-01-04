// import logo from './logo.svg';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import LandingRoute from '../routes/landingRoute';
import ProductRoute from '../routes/productRoute'
import SearchRoute from '../routes/searchRoute'

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
      </Switch>

    </main>
  )
}

export default App;
