import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NavbarPage from './layout/Navigation/Navigation'
import OfferList from './pages/Offers-list/Offers-list'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import CompanyLogin from './pages/Company-login/Company-login'
import AuthService from './../service/auth.service'
import StudentLogin from './pages/Student-login/Student-login'
import StudentProfile from './pages/Student-profile/Student-profile'



class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: undefined }
    this.authServices = new AuthService()
  }

  componentDidMount = () => {

      this.authServices
        .isLoggedIn()
        .then(response => this.setTheUser(response.data))
        .catch(err => this.setTheUser(undefined))
  }

  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El nuevo estado es:', this.state))

  render() {

    return (
      <>
        <NavbarPage storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />

        <main>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/company" render={() => this.state.loggedInUser ? <OfferList loggedUser={this.state.loggedInUser}/> : <Redirect to="/" />} />
            <Route path="/signup" render={props => <Signup storeUser={this.setTheUser} {...props} />} /> {/*Cogemos las props de react-router-dom para poder redirigir*/}
            <Route path="/student-login" render={props => <StudentLogin storeUser={this.setTheUser} {...props} />} /> {/*Cogemos las props de react-router-dom para poder redirigir*/}
            <Route path="/student-profile" render={() => this.state.loggedInUser ? <StudentProfile loggedUser={this.state.loggedInUser} /> : <Redirect to="/" />} />
            <Route path="/login" render={props => <CompanyLogin storeUser={this.setTheUser} {...props} />} /> {/*Cogemos las props de react-router-dom para poder redirigir*/}
            <Route path="/logout" render={() => <Redirect to="/" />} />


          </Switch>
        </main>
      </>
    )
  }
}

export default App;