import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export default class News extends Component {
    articles = [

    ]
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props)
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)}- NewsMonkey`
    }
    
    async updateNews(pageNo) {
        this.props.progress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a09a71275057441fba16e3f5c2f0df58&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.progress(30)
        let parsedData = await data.json()
        this.props.progress(70)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.progress(100)
    }
    async componentDidMount() {
        console.log("cdm");
        this.updateNews();
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3d70ae7f1b7446f6b2db172aff984f05&page=1&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })

    }
    handleNextClick = async () => {
        console.log("Next");
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3d70ae7f1b7446f6b2db172aff984f05&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // { this.setState({ loading: true }) }
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page + 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })

    }
    handlePrevClick = async () => {
        console.log("Previous");
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3d70ae7f1b7446f6b2db172aff984f05&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // { this.setState({ loading: true }) }
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
    }
    render() {
        return (

            <div className='container my-3'>
                <h2 className="text-center" style={{ margin: '30px 0px' ,marginTop:"80px"}}>NewsMonkey - {this.props.category} Headlines</h2>
                {/* <Spinner/> */}
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((ele) => {
                        return <div className="col-md-4 my-2" key={ele.url}>
                            <Newsitem title={ele.title} description={ele.description} imageurl={ele.urlToImage} newurl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name} />
                        </div>
                    })}
                    {/* <div className="col-md-4">
                        <Newsitem title="mytitle" description="desc" imageurl= "https://i.ytimg.com/vi/7YRIzPkUk5I/maxresdefault.jpg"/>
                    </div>
                     */}
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
