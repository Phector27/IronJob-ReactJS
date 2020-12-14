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
import AllOffers from './pages/Student-profile/All-offers/All-offers'
import AcademyLogin from './pages/Academy-login/Academy-login'
import UsersList from './pages/Users-list/Users-list'
import AcademyOffers from './pages/Academy-offers/Academy-offers'
import ApplyOffer from './pages/Student-profile/Student-apply-offer'



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
            <Route path="/signup" render={props => <Signup storeUser={this.setTheUser} {...props} />} /> {/*Cogemos las props de react-router-dom para poder redirigir*/}
            <Route path="/company/login" exact render={props => <CompanyLogin storeUser={this.setTheUser} {...props} />} /> {/*Cogemos las props de react-router-dom para poder redirigir*/}
            <Route path="/company/offers" exact render={() => this.state.loggedInUser && this.state.loggedInUser.role === 'BUSINESS-RECRUITER' ? <OfferList loggedUser={this.state.loggedInUser}/> : <Redirect to="/" />} />
            <Route path="/student/login" exact render={props => <StudentLogin storeUser={this.setTheUser} {...props} />} /> {/*Cogemos las props de react-router-dom para poder redirigir*/}
            <Route path="/student/profile" exact render={() => this.state.loggedInUser && this.state.loggedInUser.role === 'Student' ? <StudentProfile loggedUser={this.state.loggedInUser} storeUser={this.setTheUser} /> : <Redirect to="/" />} />
            <Route path="/student/all-offers" exact render={() => this.state.loggedInUser && this.state.loggedInUser.role === 'Student' ? <AllOffers loggedUser={this.state.loggedInUser}/> : <Redirect to="/" />} />
            <Route path="/student/apply" exact render={() => this.state.loggedInUser && this.state.loggedInUser.role === 'Student' ? <ApplyOffer loggedUser={this.state.loggedInUser}/> : <Redirect to="/" />} />
            <Route path="/academy/login" exact render={props => <AcademyLogin storeUser={this.setTheUser} {...props} />} /> {/*Cogemos las props de react-router-dom para poder redirigir*/}
            <Route path="/academy/control" exact render={() => this.state.loggedInUser && this.state.loggedInUser.role === 'IRONHACK-RECRUITER' ? <UsersList /> : <Redirect to="/" />} />
            <Route path="/academy/offers" exact render={() => this.state.loggedInUser && this.state.loggedInUser.role === 'IRONHACK-RECRUITER' ? <AcademyOffers /> : <Redirect to="/" />} />
            <Route path="/academy/edit" exact render={() => this.state.loggedInUser && this.state.loggedInUser.role === 'IRONHACK-RECRUITER' ? <StudentProfile loggedUser={this.state.loggedInUser} storeUser={this.setTheUser} /> : <Redirect to="/" />} />
            <Route path="/logout" render={() => <Redirect to="/" />} />
          </Switch>
        </main>
      </>
    )
  }
}

export default App;