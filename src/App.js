import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router} from '@reach/router';
import Mainpage from './components/Mainpage';
import Resume from './components/Resume';

function App() {


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <a className="navbar-brand text-light m-2 lead" href="/final-portfolio3#top">Makenna Martin</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <div className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-light lead" href="/final-portfolio3#projects">Projects</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light lead" to="/final-portfolio3/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light lead active" href="https://www.linkedin.com/in/makennamartin97/">LinkedIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light lead active" href="https://github.com/makennamartin97">Github</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light lead" href="/final-portfolio3#contact">Contact</a>
            </li>

          </div>
        </div>
      </nav>
      <Router>
        <Mainpage path="/final-portfolio3"/>
        <Resume path="/final-portfolio3/resume"/>


      </Router>
      

  
      
    </div>
  );
}

export default App;
