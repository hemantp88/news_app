
import React from 'react'

// export class NewsItem extends Component {
const NewsItem=(props)=>{
  // render() {
    let {title,description,imageurl,newsurl,author ,date,source}=props;
    let d=new Date(date).toUTCString();


    return (
       < div className="my-3 mx-2">
      
        <div className="card" >
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}> 
        <span className="rounded-pill bg-danger"  >
    {source}
    
  </span>
  </div>
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
  // }
}

export default NewsItem