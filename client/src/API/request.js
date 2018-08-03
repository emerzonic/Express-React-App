import axios from "axios";
import formatter from './formatter';

// import filterParams from "./filterParams";

export default {

  // Gets articles from the NYT API
  getArticles: function (data) {
    // formatter(data, function (formattedData) {
    // console.log("this is formateddata  " + JSON.stringify(formattedData))
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: formatter(data)
    });
    // })

  },

  // Gets all saved articles
  getSavedArticles: function () {
    return axios.get("/articles/saved");
  },
  // Deletes the saved article with the given id
  deleteArticle: function (id) {
    return axios.delete("/" + id);
  },
  // Saves an article to the database
  saveArticle: function (article) {

    return axios.post('/save_articles', article);
  }
};