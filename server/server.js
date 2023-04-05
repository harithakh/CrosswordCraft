const express = require("express");
const bodyParser = require("body-parser");

const db = require('./dbConnection'); //this  loads and executes the /dbConnection.js file in server.js.
const apiRouter = require('./api');

const app = express(); //a function that represents the express module
const port = 8000;

/*below line of code is creating a middleware(the bridge between the database and the application)
for our Express app.
By adding this middleware, we are telling our Express app that any request that 
begins with '/api' should be handled by the 'apiRouter'.
*/
app.use('/api', apiRouter); 

// listn on a port 8000 for http requests that get sent to the server
app.listen(port, () => {
  // calback function
  console.log(`server stsarted on port ${port}`);
});

