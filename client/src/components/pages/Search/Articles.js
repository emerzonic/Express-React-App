import React from 'react';
import { Component } from 'react';
import './search.css';
class Articles extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = e =>{
        e.preventDefault();
        let article = {
          img: e.target.img.value,
          headline: e.target.headline.value,
          body: e.target.body.value,
          date: e.target.date.value,
          link: e.target.link.value
      };
  
      this.props.handleSave(article);
      }
    }

      render() {
        let loadedArticle = this.props.articles;
        let currentUser = localStorage.getItem('user');
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
                          <img src={"https://www.nytimes.com/"+article.multimedia[0].url} alt="article"/>
                        </div>
                        <div className="content">
                          <a href={article.web_url} className="header" target="_blank" rel="noopener">{article.headline.print_headline}</a>
                            <div className="meta">
                              <span className="cinema">Published {article.pub_date}</span>
                            </div>
                          <div className="description">
                              <p>{article.snippet}</p>
                          </div>
                          <div className="extra">
                              <form id={i} onSubmit={this.handleSubmit}>
                                <input type="hidden" name="img" value={"https://www.nytimes.com/"+article.multimedia[0].url} />
                                <input type="hidden" name="headline" value={article.headline.print_headline} />
                                <input type="hidden" name="date" value={article.pub_date}/>
                                <input type="hidden" name="body" value={article.snippet}/>
                                <input type="hidden" name="link" value={article.web_url}/>
                                {currentUser?
                                <button type="submit" className="ui inverted right floated secondary button">Save</button>:''}
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

