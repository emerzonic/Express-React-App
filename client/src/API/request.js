import axios from "axios";
import formatter from './formatter';


export default {
  // Send a new user data to the database
  sendNewUserData: function (newUser) {
    return axios.post('/signup', newUser);
  },

  // Send a user login data to the database
  sendPreviousUserData: function (previousUser) {
    return axios.post('/signin', previousUser);
  },

  // Gets articles from the NYT API
  searchArticles: function (data) {
    let q = formatter(data).q;
    let begin_date = formatter(data).begin_date;
    let end_date = formatter(data).end_date;
    return axios.get(`/API/search/${q}/${begin_date}/${end_date}`);
  },

  // Gets all saved articles
  getSavedArticles: function (userid) {
    return axios.get("/articles/saved/" + userid);
  },

  // Saves an article to the database
  saveArticle: function (article, userId) {
    return axios.post('/save_articles/' + userId, article);
  },

  // Deletes the saved article with the given id
  deleteArticle: function (id) {
    return axios.delete("/" + id);
  }
};