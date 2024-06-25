const express = require("express");
const app = express();
const userRouter = require("./routes/route");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("Hii");
  // res.sendStatus(500);
  // res.status(500).send("Error...");
  // res.status(500).json({ message: "This is the Error message" });
  // res.json({message: "Hey Json here"})
  // res.download("server.js")
  // res.render('index');
  res.render("index", {
    name: "My name is Anthony gone service. Mai Duniya mai Ek Akela hu",
  });
});

app.use(logger);

function logger(req, res, next) {
  console.log("------------------------------");
  console.log(req.originalUrl);
  next();
}

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server is started on port 3000");
});
