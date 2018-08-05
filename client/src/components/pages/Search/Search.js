import React from 'react';
import {
    Component
} from 'react';
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
            articles: []
        }

        //Fires when the search form is submitted
        this.handleSubmit = (data) => {
            //Takes the submitted data and pass it over to the API module
            API.searchArticles(data).then(res => {
                if(res.data.response.docs){
                // Set the state with the results from the search
                this.setState({
                    articles: res.data.response.docs
                })}
            })
        }

        //Fires when an article is saved to the database
        this.handleSave = savedArticle => {
            let userid = localStorage.getItem('id')
            //Takes the article and pass it over to the API module
            API.saveArticle(savedArticle, userid).then(() => {
                //Filter the current articles list and remove any article that matches the title of the saved article
                let remainingArticles = this.state.articles.filter(article => 
                    article.headline.print_headline !== savedArticle.headline);
                //Set the state to the remaining articles in the array
                this.setState({
                    articles: remainingArticles
                });
            })
        }
    }

    render() {
        return (
            <div>
                <Nav/>
                <div className="ui container searchContainer">
                    <Header/>
                    <Form handleSubmit={this.handleSubmit}/>
                    <Articles articles={this.state.articles} handleSave={this.handleSave} 
                        info={this.state.articles.length > 0?
                            "Your Search Results ":"Search an article to get started!"
                    }/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Search;