import React from 'react';
import { Component } from 'react';
import './search.css';
import Moment from 'moment';
class Articles extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = e =>{
        e.preventDefault();
        //Save article data to a variable
        let article = {
          img: e.target.img.value,
          headline: e.target.headline.value,
          body: e.target.body.value,
          date: e.target.date.value,
          link: e.target.link.value
      };
      //Pass the article over to the Search component
      this.props.handleSave(article);
      }   
    }
        
      render() {
        //Get current state of the articles and current user
        let loadedArticle = this.props.articles;
        let currentUser = localStorage.getItem('erapp_user');
        return (
                <div className="ui segment">
                  <h3>{this.props.info} { loadedArticle.length && !currentUser?"Please sign in to save your favorite articles.":
                                          loadedArticle.length && currentUser?"Click Save button to save your favorite articles.":""}
                  </h3>
                <div className="ui divider"></div>
                    <div className="ui divided items">
                    {this.props.articles.length > 0?this.props.articles.map((article,i) =>
                      <div className="item" key={i}>
                        <div className="image">
                        <img src={article.multimedia[0] === undefined?
                          "http://www.wolfgroupweb.com/en/wolfclub/168-about?showimage_bcy=article.gif": 
                          "https://www.nytimes.com/"+article.multimedia[0].url
                            } alt="article"/>
                        </div>
                        <div className="content">
                          <a href={article.web_url} className="header" target="_blank" rel="noopener">{article.headline.main}</a>
                            <div className="meta">
                              <span className="cinema">Published {Moment(article.pub_date).format('llll')}</span>
                            </div>
                          <div className="description">
                              <p>{article.snippet}</p>
                          </div>
                          <div className="extra">
                              <form id={i} onSubmit={this.handleSubmit}>
                                <input type="hidden" name="img" value={article.multimedia[0] === undefined?
                                  "http://www.wolfgroupweb.com/en/wolfclub/168-about?showimage_bcy=article.gif": 
                                  "https://www.nytimes.com/"+article.multimedia[0].url}/>
                                <input type="hidden" name="headline" value={article.headline.main} />
                                <input type="hidden" name="date" value={Moment(article.pub_date).format('llll')}/>
                                <input type="hidden" name="body" value={article.snippet}/>
                                <input type="hidden" name="link" value={article.web_url}/>
                                {currentUser?
                                <button type="submit" className="ui inverted right floated green button">Save</button>:''}
                              <a href={article.web_url} className="ui inverted right floated primary button" target="_blank" rel="noopener">Link</a>
                              </form>
                            </div>
                          </div>
                        </div>
                      ):""}
                    </div>  
                </div>  
                );
              }
            }

export default Articles;




