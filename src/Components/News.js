import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 6,
    category: "general",
  };
  static propTypes = {
    country: propTypes.string,
    pagesize: propTypes.number,
    category: propTypes.string,
    
  };
  capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirst(this.props.category)} - News`;
  }

  async componentDidMount() {
    this.UpdateNews();
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20d14143701948c9815db87797446b6b&page=1&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json()

    // this.setState({
    //     articles:parsedData.articles
    //     ,totalResults:parsedData.totalResults,
    //     loading:false
    // })
  }
  async UpdateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20d14143701948c9815db87797446b6b&page=1&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.UpdateNews();
    // console.log("Next");
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)))
    // {

    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20d14143701948c9815db87797446b6b&page=${  this.state.page+1}&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({
    //     page:this.state.page+1,
    //     articles:parsedData.articles,
    //     loading:false
    // })
  };

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.UpdateNews();
    // console.log("Prev")

    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20d14143701948c9815db87797446b6b&page=${  this.state.page-1}&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({
    //     page:this.state.page-1,
    //     articles:parsedData.articles,
    //     loading:false
    // })
  };
  fetchMoreData = async() => {
      this.setState({page:this.state.page+1})
      // this.UpdateNews();
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20d14143701948c9815db87797446b6b&page=1&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        

        <h2 className="text-center">
          News : Top headlines from {this.capitalizeFirst(this.props.category)}
        </h2>
        { this.state.loading&&<Spinner/>}
       
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}

          loader={<Spinner />}

>
          <div className="row">
            {/* {!this.state.loading &&this.state.articles.map((element)=>{ */}
            {this.state.articles.map((element) => {
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
        {/* <div className="d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next&rarr;{" "}
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
