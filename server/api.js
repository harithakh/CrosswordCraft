const express = require("express");
const router = express.Router();
const puzzle = require("./dataModel");
const User = require("./userDataModel");

router.get("/home", (req, res) => {
  const ids = [1, 2, 3]; // this must be changed with random numbers.

  puzzle.find({ puzzle_id: { $in: ids } }, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      //console.log(data);
      res.send(data);
    }
  });
});

router.get("/puzzles/:id", (req, res) => {
  const puzzleId = req.params.id;
  puzzle.findOne({ puzzle_id: puzzleId }, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else if (!data) {
      res.sendStatus(404);
    } else {
      res.send(data);
    }
  });
});


router.post("/register", (req, res) => {
  const { email, username, password } = req.body;

  // need validate the email, username, and password fields here

  const newUser = new User({ email, username, password });

  newUser.save((err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error registering new user, please try again." });
    } else {
      res.status(200).json({ message: "User registration successful!" });
    }
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // need to validate the email and password fields from here

  User.findOne({ email }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error logging in, please try again." });
    } else if (!user) {
      res.status(401).json({ error: "Invalid email or password." });
    } else {
      user.comparePassword(password, (err, isMatch) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: "Error logging in, please try again." });
        } else if (!isMatch) {
          res.status(401).json({ error: "Invalid email or password." });
        } else {
          // TODO: generate and send a JWT token to the client
          res.status(200).json({ message: "Login successful!" });
        }
      });
    }
  });
});

module.exports = router;

/* if we have more routs,we must define them here.
ex: 
apiRouter.get('/about', (req, res) => {
  // handle GET request for all users
});

--------------------------------------------------------------------
Then, we can register these routers with the main Express app like this:

const express = require('express');
const app = express();

// register routers with app
app.use('/api', apiRouter);
app.use('/auth', authRouter);

*/

//   This code defines a route for handling GET requests to '/'.
//   When a GET request is received, the route handler retrieves all documents
//   from the "dataModel" collection using the dataModel.find() method and sends
//   the result back to the client.
