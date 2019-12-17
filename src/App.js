import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Movies from "./Containers/Movies/Movies";
import About from "./Containers/About/About";
import Contacts from "./Containers/Contacts/Contacts";

const App = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Movies}/>
        <Route path="/about" component={About}/>
        <Route path="/contacts" component={Contacts}/>
      </Switch>
    </BrowserRouter>
  );

export default App;
