import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,imageurl,newsurl,author ,date,source}=this.props;
    let d=new Date(date).toUTCString();


    return (
       < div className="my-3 mx-2">
        
        <div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}>
    {source}
    
  </span>
  <img src={!imageurl?"https://www.hindustantimes.com/ht-img/img/2023/09/18/1600x900/Darkweb--darknet-and-hacking-concept--Hacker-with-_1690898999499_1695036729169.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    
    <h5 className="card-title">{title}
    
    </h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unkown":author} on {d} </small></p>

    <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-primary btn-sm ">Read More</a>
  </div>
</div>
</div>
    )
  }
}

export default NewsItem