import React from 'react';
import './App.css';

import HomePage from './Pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom';
import Shoppage from './Components/Shop_Data/Shop-page'
import Header from './header/header.component'





//<Switch> returns only one first matching route.
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/Shop' component={Shoppage}/>
      </Switch>
    </div>
    
  );
}


export default App;
