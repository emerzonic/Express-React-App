import React from 'react';
import {
    Component
} from 'react';
import Nav from "../Home/Nav";
import Header from "../Home/Header";
import SavedArticles from "./SavedArticles";
import Footer from "../Home/Footer";
import API from "../../../API/request";
import './save.css';


class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }


        this.handleDelete = articleId => {
            API.deleteArticle(articleId)
                .then(() => {
                    this.getArticles()
                })
        }
    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles = () => {
        let userid = localStorage.getItem('id')
        API.getSavedArticles(userid)
            .then(res => {
                this.setState({
                    articles: res.data
                })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
            <Nav/>
            <div className="ui container save-container">
                <Header/>
                <SavedArticles 
                    articles={this.state.articles} 
                    handleDelete={this.handleDelete} 
                    info={this.state.articles.length > 0?
                        "Your Saved Articles.":
                        "You do not have any saved articles."
                    }/>
            </div>
            <div className='spacer'></div>
            <Footer/>
        </div>
        );
    }
}

export default Saved;