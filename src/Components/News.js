import React, { useEffect,useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=>{

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page,setPage]=useState(1);
  const [totalResults, setTotalResults] = useState(0)


   const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };


  useEffect(() => {
    UpdateNews();
  },[])
 

  const  UpdateNews= async ()=> {

    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;

    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);


    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)


    props.setProgress(100);
  }

  const fetchMoreData = async() => {
      
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pagesize}`;
      setPage(page+1);
      setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);

  };

    return (
      <div className="container my-3">
        

        <h2 className="text-center">
          News : Top headlines from {capitalizeFirst(props.category)}
        </h2>
        { loading&&<Spinner/>}
       
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}

          loader={<Spinner />}

>
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>

      </div>
    );
  }

News.defaultProps = {
  country: "in",
  pagesize: 6,
  category: "general",
};
News.propTypes = {
  country: propTypes.string,
  pagesize: propTypes.number,
  category: propTypes.string,
  
};

export default News;
