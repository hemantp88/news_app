
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  // Switch,,
  Routes,
  Route,
  // Link
} from "react-router-dom";


export default class App extends Component {

  render() {
    return (
      <div>
         <Router>
        <Navbar/>
        

        <Routes>
          {/* <Route path="/about" element={<News pagesize={9} country="us" category="sports"/></Route> */}
          <Route exact path="/" element={<News  key= "general" pagesize={9} country="us" category="general"/>}/>
          <Route exact path="/business" element={<News  key= "business" pagesize={9} country="us" category="business"/>}/>
          <Route exact path="/entertainment" element={<News  key= "entertainment" pagesize={9} country="us" category="entertainment"/>}/>
          <Route exact path="/general" element={<News  key= "general" pagesize={9} country="us" category="general"/>}/>
          <Route exact path="/health" element={<News  key= "health" pagesize={9} country="us" category="health"/>}/>
          <Route exact path="/science" element={<News  key= "science" pagesize={9} country="us" category="science"/>}/>
          <Route exact path="/sports" element={<News  key= "sports" pagesize={9} country="us" category="sports"/>}/>
          <Route exact path="/technology" element={<News  key= "technology" pagesize={9} country="us" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
