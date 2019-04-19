
const express = require('express');
const bodyParser = require('body-parser');
// const morgan = require('morgan')

const db = require("./models");
const user = require("./routes/user-api-routes");
const sequence = require("./routes/sequence-api-routes");
// const session = require('express-session')
// const dbConnection = require('./client/server/database') 
// const SequelStore = require('sequelStore');
// const passport = require('./client/server/passport');
const app = express()
// const port = 3001;
// const PORT = 3001;
// // Route requires
// const user = require('./client/server/routes/user')

// MIDDLEWARE
// app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())


if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

  // Add routes, both API
	app.use(user);
	app.use(sequence);
  
  const PORT = process.env.PORT || 3001;
  
  db.sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, function() {
	  console.log(`🌎 ==> API server now on port ${PORT}!`);
	});
  });
