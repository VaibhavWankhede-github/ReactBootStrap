import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import Home from './ReactMenu/Home';
import About from './ReactMenu/About';
import Carrier from './ReactMenu/Carrier';
import Service from './ReactMenu/Service';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './ReactMenu/Navbar';


const App = () => {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/carrier" component={Carrier} />
        <Route exact path="/services" component={Service} />
        <Redirect to="/" />        


      </Switch>
    </>
  );
}

export default App;
