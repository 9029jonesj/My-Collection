const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", {scope: ["public_profile", "email"]})
  );
  app.get("/auth/twitter", passport.authenticate("twitter"), (req, res) => {
    res.redirect("/api/current_user");
  });
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/api/current_user");
    }
  );
  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", {failureRedirect: "/login"}),
    (req, res) => {
      res.redirect("/api/current_user");
    }
  );
  app.get(
    "/auth/twitter/callback",
    passport.authenticate("twitter", {failureRedirect: "/login"}),
    (req, res) => {
      res.redirect("/api/current_user");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
