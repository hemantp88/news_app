
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
   pageSize=20;
  render() {
    return (
      <div>
         <Router>
        <Navbar/>
        

        <Routes>
          {/* <Route path="/about" element={<News pagesize={this.pageSize} country="us" category="sports"/></Route> */}
          <Route exact path="/" element={<News  key= "general" pagesize={this.pageSize} country="us" category="general"/>}/>
          <Route exact path="/business" element={<News  key= "business" pagesize={this.pageSize} country="us" category="business"/>}/>
          <Route exact path="/entertainment" element={<News  key= "entertainment" pagesize={this.pageSize} country="us" category="entertainment"/>}/>
          <Route exact path="/general" element={<News  key= "general" pagesize={this.pageSize} country="us" category="general"/>}/>
          <Route exact path="/health" element={<News  key= "health" pagesize={this.pageSize} country="us" category="health"/>}/>
          <Route exact path="/science" element={<News  key= "science" pagesize={this.pageSize} country="us" category="science"/>}/>
          <Route exact path="/sports" element={<News  key= "sports" pagesize={this.pageSize} country="us" category="sports"/>}/>
          <Route exact path="/technology" element={<News  key= "technology" pagesize={this.pageSize} country="us" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
