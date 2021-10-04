import logo from './logo.svg';
import React, { Component } from 'react';  
import './App.css';
import Home from './link01/Home.js';
import sub1 from './link01/sub1.js';
import sub2 from './link01/sub2.js';
import sub3 from './link01/sub3.js';
import sub4 from './link01/sub4.js';
import { BrowserRouter, Link, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="header">
      <ul className="main_nav">
       <li><Link to='/Home'>Home</Link></li>
       <li><Link to='/sub1'>sub1</Link></li>
       <li><Link to='/sub2'>sub2</Link></li>
       <li><Link to='/sub3'>sub3</Link></li>
       <li><Link to='/sub4'>sub4</Link></li>
      </ul>
      </div>

       <Route exact path="/" component={Home}/>
       <Route path="/sub1" component={sub1}/>
       <Route path="/sub2" component={sub2}/>
       <Route path="/sub3" component={sub3}/>
       <Route path="/sub4" component={sub4}/>
     </div>
    </BrowserRouter>
  );
}

export default App;
