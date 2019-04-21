const db = require("../../models");
const router = require("express").Router();


module.exports = function(app) {
 
  router.route("/signup")
  .post(function(req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  })
   
  router.route("/login")
  // 2; Add a join to include all of the Author's Posts here
  .get(function(req, res){ 
    console.log(req.User) 
   db.User.findAll({
    where: {
      userName: req.user.username,
      passwordHash: req.user.password
    }
  }).then(function(dbUser) {
    console.log("this is the response obj" + dbUser)
    res.json(dbUser);
  });
});

};
module.exports = router   
    
    
