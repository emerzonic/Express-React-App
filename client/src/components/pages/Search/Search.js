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
            articles: JSON.parse(localStorage.getItem('articles')) || [],
        }

        //Fires when the search form is submitted
        this.handleSubmit = (data) => {
            //Takes the submitted data and pass it over to the API module
            API.searchArticles(data).then(res => {
                if(res.data.response){
                //if we get valid response, clear storage and replace with new search
                localStorage.removeItem('articles')
                localStorage.setItem('articles', JSON.stringify(res.data.response.docs))
                // Set the state with the results from the new search
                this.setState({
                    articles: JSON.parse(localStorage.getItem('articles'))
                })
            }else{
                return;
                }
            })
        }

        //Fires when a user saves article to the database
        this.handleSave = savedArticle => {
            //Get the current user from local storage
            let userid = localStorage.getItem('id')
            //Takes the article and current user id and pass it over to the API module
            API.saveArticle(savedArticle, userid).then(() => {
                //After save is completed, filter the current articles list and leave out any article that matches the title of the saved article
                let remainingArticles = this.state.articles.filter(article => 
                    article.headline.main !== savedArticle.headline);
                //Set the state to the new list of articles
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
                    <Articles articles={this.state.articles} 
                              handleSave={this.handleSave} 
                              info={this.state.articles.length > 0?
                                "Your Search Results.":"Search an article to get started!"}
                    />
                </div>
                <div className='spacer'></div>
                <Footer/>
            </div>
        );
    }
}

export default Search;