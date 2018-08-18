# Newsopedia

This is a MERN application built using MongoBD for database, Express js for server-side routing, React Js for client-side rendering and Node js framework. The app is fetching data from the New York Times article API. 

* Users can seacrh articles based on key terms. The app takes the user input from client side and route request to the backend express server that makes an external API request using NPM request package. The json response is then manipulated and rendered using a react component and displayed for the user in a polished Semantic UI page. 

* Users will have to be authenticated in order to save an articule. This ensures that saved articles are associated with users in the database. When a user saves an article, the frontend data is formulated into a JavaScript object and a post request is sent to the express server to save the data into MongoDB using Mongoose ODM.

* Users can view their saved articles any time when they log in. When a user goes to the app "Saved" route, a get request is made to the database for all articles that match the current user.

* Users can also delete an article from their saved articles. When a delete request is made by the user for a particular article, the articlue's id is sent via a delete request that uses mongoose's findByIdAndRemove method to delete the article.

### Start searching for your favorite articles [express-react-js-app.herokuapp.com](https://express-react-js-app.herokuapp.com/)
