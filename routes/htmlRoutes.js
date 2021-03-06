var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", { layout: "landing" });
  });


  // Render 404 page for any unmatched routes.
  app.get("*", function(req, res) {
    res.render("404");
  });
};