import React from 'react';
import './App.css';

import HomePage from './Pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom';
import Shoppage from './Components/Shop_Data/Shop-page'
import SignInandSignup from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './header/header.component'
import {auth} from './firebase/firebase.utils'


// class App extends React.Component {
//   constructor() {
//     super();
 
//     this.state = {
//       currentUser: null
     
//     };
//   }
 
//   unsubscribeFromAuth = null;
 
//   componentDidMount() {
//     this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
//       this.setState({ currentUser: user });     
//     });
//   }
 
//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

  
//   render() {
//     return (
//       <div>
        
        
//         <Header currentUser={this.state.currentUser} />
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path='/Shop' component={Shoppage}/>
//            <Route path='/SignIn' component={SignInandSignup}/>
//         </Switch>
//       </div>
//     );
//   }
// }




//<Switch> returns only one first matching route.
class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user})
      console.log(this.state.currentUser);
      
    })    
  }

  componentWillUnmount(){
   // console.log(this.unsubscribeFromAuth());
    
    this.unsubscribeFromAuth();
  }

  render() {
    
      return (
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/Shop' component={Shoppage}/>
            <Route path='/SignIn' component={SignInandSignup}/>

          </Switch>
        </div>
        
      );


  }

}


export default App;
