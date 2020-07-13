require("dotenv").config();
// if (envvars.error) {
//   console.log("Problem loading environment variables.");
//   // throw envvars.error;
// }

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const grant = require("grant-express");

const indexRouter = require("./routes/index.js");
const todosRouter = require("./routes/todos-router.js");
const authRouter = require("./routes/auth-router.js");
const membersRouter = require("./routes/members-router.js");
const householdRouter = require("./routes/households-router");

const restricted = require("./middleware/restricted.js");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// OAuth Setup
app.use(
  session({
    secret: process.env.SESSION_KEY,
    saveUninitialized: true,
    resave: true
  })

);
app.use(
  grant({
    defaults: {
      protocol: process.env.OAUTH_PROTOCOL,
      host: process.env.OAUTH_URL,
      transport: "session",
      state: true
    },
    google: {
      key: process.env.G_CLIENT_ID,
      secret: process.env.G_CLIENT_SECRET,
      scope: [
        "profile",
        "email",
        "openid"
      ],
      nonce: true,
      custom_params: { access_type: "offline" },
      callback: "/auth/hello"
    },
    facebook: {
      key: process.env.F_CLIENT_ID,
      secret: process.env.F_CLIENT_SECRET,
      scope: ["profile"],
      nonce: true,
      custom_params: { access_type: "offline" },
      callback: "/auth/hello"
    }
  })
);

app.use("/", indexRouter);
app.use("/todos", restricted, todosRouter);
app.use("/auth", authRouter);
app.use("/members", restricted, membersRouter);
app.use("/household", restricted, householdRouter);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
