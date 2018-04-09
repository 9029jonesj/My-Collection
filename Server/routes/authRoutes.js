const passport = require("passport");

module.exports = app => {
  app.get("/auth/google/callback", passport.authenticate("google"));
  app.get("/login/facebook", passport.authenticate("facebook"));
  app.get("/auth/twitter", passport.authenticate("twitter"));

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  app.get(
    "/login/facebook/return",
    passport.authenticate("facebook", {failureRedirect: "/login"}),
    function(req, res) {
      res.redirect("/");
    }
  );
  app.get(
    "/auth/twitter/callback",
    passport.authenticate("twitter", {failureRedirect: "/login"}),
    function(req, res) {
      res.redirect("/");
    }
  );
};
