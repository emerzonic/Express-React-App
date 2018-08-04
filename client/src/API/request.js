import axios from "axios";
import formatter from './formatter';


export default {
  // Gets articles from the NYT API
  searchArticles: function (data) {
    let q = formatter(data).q;
    let begin_date = formatter(data).begin_date;
    let end_date = formatter(data).end_date;
    return axios.get(`/API/search/${q}/${begin_date}/${end_date}`);
  },

  // Gets all saved articles
  getSavedArticles: function () {
    return axios.get("/articles/saved");
  },
  // Saves an article to the database
  saveArticle: function (article) {
    return axios.post('/save_articles', article);
  },
  // Deletes the saved article with the given id
  deleteArticle: function (id) {
    return axios.delete("/" + id);
  }
};