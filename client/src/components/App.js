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
import Footer from './layout/Footer/Footer'
import SliderSomos from './shared/Slider/Slider-somos'
import Cookies from './pages/Cookies/Cookies'
import Faqs from './pages/Faqs/Faqs'
import Blog from './pages/Blog/Blog'
import Foro from './pages/Foro/Foro'
import Welcome from './pages/Welcome/Welcome'

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

  setTheUser = user => this.setState({ loggedInUser: user })

  render() {
    return (
      <>
        <NavbarPage storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />
        <main>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/somos" render={() => <SliderSomos />} />
            <Route path="/cookies" render={() => <Cookies />} />
            <Route path="/faqs" render={() => <Faqs />} />
            <Route path="/foro" render={() => this.state.loggedInUser && this.state.loggedInUser.role != 'BUSINESS-RECRUITER' ? <Foro loggedUser={this.state.loggedInUser} /> : <Redirect to="/" />} />
            <Route path="/blog" render={() => <Blog />} />
            <Route path="/welcome" render={() => <Welcome />} />
            <Route path="/signup" exact render={props => <Signup storeUser={this.setTheUser} {...props} />} />
            <Route path="/company/login" exact render={props => <CompanyLogin storeUser={this.setTheUser} {...props} />} />
            <Route path="/company/offers" render={() => this.state.loggedInUser && this.state.loggedInUser.role === 'BUSINESS-RECRUITER' ? <OfferList loggedUser={this.state.loggedInUser} /> : <Redirect to="/" />} />
            <Route path="/student/login" exact render={props => <StudentLogin storeUser={this.setTheUser} {...props} />} />
            <Route path="/student/profile" render={() => this.state.loggedInUser && this.state.loggedInUser.role === 'Student' ? <StudentProfile loggedUser={this.state.loggedInUser} storeUser={this.setTheUser} /> : <Redirect to="/" />} />
            <Route path="/student/all-offers" render={() => this.state.loggedInUser && this.state.loggedInUser.role === 'Student' ? <AllOffers loggedUser={this.state.loggedInUser} /> : <Redirect to="/" />} />
            <Route path="/student/apply" render={() => this.state.loggedInUser && this.state.loggedInUser.role === 'Student' ? <ApplyOffer loggedUser={this.state.loggedInUser} /> : <Redirect to="/" />} />
            <Route path="/academy/login" exact render={props => <AcademyLogin storeUser={this.setTheUser} {...props} />} />
            <Route path="/academy/control" render={() => this.state.loggedInUser && this.state.loggedInUser.role === 'IRONHACK-RECRUITER' ? <UsersList loggedUser={this.state.loggedInUser} /> : <Redirect to="/" />} />
            <Route path="/academy/offers" render={() => this.state.loggedInUser && this.state.loggedInUser.role === 'IRONHACK-RECRUITER' ? <AcademyOffers /> : <Redirect to="/" />} />
            <Route path="/academy/edit" render={() => this.state.loggedInUser && this.state.loggedInUser.role === 'IRONHACK-RECRUITER' ? <StudentProfile loggedUser={this.state.loggedInUser} storeUser={this.setTheUser} /> : <Redirect to="/" />} />
            <Route path="/logout" exact render={() => <Redirect to="/" />} />
          </Switch>
        </main>
        <Footer loggedUser={this.state.loggedInUser} />
        <h6 style={{ textAlign: 'center' }}>Copyrigth 2020 © - Todos los derechos reservados.</h6>
        <p style={{ textAlign: 'center' }}>IronJob, S.L.U.</p>
      </>
    )
  }
}

export default App;