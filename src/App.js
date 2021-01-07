import React from 'react';

import Container from 'react-bootstrap/Container';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import CanvasPage from './pages/CanvasPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

import AboutImg from './components/AboutImg';

class App extends React.Component {
  
  constructor(props){
      super(props);
      this.state = {
        title: 'website-project',
        headerLinks: [
          {title: 'Home', path: '/'},
          {title: 'Games', path: '/games'},
          {title: 'Canvas', path: '/canvas'},
          {title: 'About', path: '/about'},
          {title: 'Contact', path: '/contact'},
          {title: 'Login', path: '/login'}
        ],
        home: {
          title: 'Home Title',
          subtitle: 'Home subtitle from App.js',
          text: 'Text from home App.js'
        },
        games: {
          title: 'Games'
        },
        canvas: {
          title: 'Canvas'
        },
        about: {
          title: 'About'
        },
        contact: {
          title: 'Contact Me'
        },
        login: {
          title: 'Account'
        },
      }
    }
  

  render(){    
    return (
      <Router>
        <Container className="p-0"fluid={true}>
          <Navbar className="border-bottom" expand="lg">
            <Navbar.Brand>
              <h3 className="font-weight-bold px-3 py-2">FAMUQI</h3>
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toogle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/games">Games</Link>
                <Link className="nav-link" to="/canvas">Canvas</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/login">Account</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render=
          {() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} 
          />
          <Route path="/games" exact render=
          {() => <GamesPage title={this.state.games.title} />} 
          />
          <Route path="/canvas" exact render=
          {() => <CanvasPage title={this.state.canvas.title} />} 
          />
          <Route path="/about" exact render=
          {() => <AboutPage title={this.state.about.title} />} 
          />
          <Route path="/contact" exact render=
          {() => <ContactPage title={this.state.contact.title} />} 
          />
          <Route path="/login" exact render=
          {() => <LoginPage title={this.state.login.title} />} 
          />

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
