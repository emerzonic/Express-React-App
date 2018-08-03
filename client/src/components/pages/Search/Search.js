import React from 'react';
import { Component } from 'react';
import Nav from "../Home/Nav";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Form from "./Form";
import Articles from "./Articles";
import API from "../../../API/request";
import './search.css';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles : []
        }

    this.handleSubmit = (data)=>{
      API.getArticles(data).then(res => {
        this.setState({
            articles : res.data.response.docs
        });
      })
    }
    this.handleSave = article=>{
        API.saveArticle(article);
        }
    }

    render() { 
        return (
            <div>
            <Nav/>
            <div className="ui container">
                <Header/>
                <Form handleSubmit={this.handleSubmit}/>
                <Articles articles={this.state.articles} handleSave={this.handleSave} info={this.state.articles.length > 0?"Your Search Results ":"Search an article to get started!"}/>
            </div>
            <Footer/>
        </div>);
    }
}
 
 
export default Search;