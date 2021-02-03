import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import {F_Contact} from './components/ResumeData';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact}/>
      </Switch>
    </Router>
    <footer class="footer_container">
        <h3>Contact Me</h3>
        {F_Contact.map((item, index) => {
                        return (
                            <a class="sns_item" href={item.addr}>
                                <img src= {item.contact} className="sns_list_link" />
                                </a>
                    );
                 })}
    </footer>
    </>
  );
}

export default App;
