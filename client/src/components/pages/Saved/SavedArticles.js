import React from 'react';
import { Component } from 'react';
import './save.css';

class SavedArticles extends Component {
  constructor(props) {
      super(props);   
      this.handleSubmit = e =>{
        e.preventDefault();
        let articleId = e.target.id.value;
      this.props.handleDelete(articleId);
      }
      
    }
      render() { 
        return ( 
            <div className="ui segment">
                <h3>{this.props.info}</h3>
                <div className="ui divided items">
                {this.props.articles.length > 0 ? this.props.articles.map(article =>
                <div className="item" key={article._id}>
                    <div className="image">
                        <img src={article.img} alt="article"/>
                    </div>
                    <div className="content">
                    <a href={article.web_url} className="header" target="_blank" rel="noopener">{article.headline}</a>
                        <div className="meta">
                        <span className="cinema">Published {article.date}</span>
                        </div>
                    <div className="description">
                        <p>{article.body}</p>
                    </div>
                    <div className="extra">
                        <form  onSubmit={this.handleSubmit}>
                            <input type="hidden" name="id" value={article._id} />
                        <button type="submit" className="ui inverted right floated red button">Delete</button>
                        <a href={article.link} className="ui inverted right floated primary button" target="_blank" rel="noopener">Link</a>
                        </form>
                        </div>
                    </div>
                    </div>
                ):""}
                </div>  
                </div>  
            )
        }
}

export default SavedArticles;