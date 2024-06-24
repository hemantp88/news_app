
import './App.css';
import LoadingBar from 'react-top-loading-bar'
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
  pageSize=10;
  // apiKey=process.env.REACT_APP_NEWS_API;
    apiKey = "11eaac8fa362428e8d79e00287f17cf1";

  state={
    progress:0 
  }
 setProgress=(progress)=>{
    this.setState({progress:progress  })
  }

  render() {
    return (
      <div>
         <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={5}
        progress={this.state.progress}
        
      />

        <Routes>
          {/* <Route path="/about" element={<News setProgress={this.setProgress} apiKey={this.apiKey}pagesize={this.pageSize} country="us" category="sports"/></Route> */}
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "general" pagesize={this.pageSize} country="us" category="general"/>}/>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "business" pagesize={this.pageSize} country="us" category="business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "entertainment" pagesize={this.pageSize} country="us" category="entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "general" pagesize={this.pageSize} country="us" category="general"/>}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "health" pagesize={this.pageSize} country="us" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "science" pagesize={this.pageSize} country="us" category="science"/>}/>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "sports" pagesize={this.pageSize} country="us" category="sports"/>}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key= "technology" pagesize={this.pageSize} country="us" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
