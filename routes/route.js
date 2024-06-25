const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get User List");
});

router.get("/new", (req, res) => {
  res.send("New User");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User with ID : ${req.params.id}`);
  })
  .post((req, res) => {
    res.send(`Create User ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Edit User ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User ${req.params.id}`);
  });

// router.post("/:id", (req, res) => {
//   res.send(`Create User ${req.params.id}`);
// });

// router.get("/:id", (req, res) => {
//   res.send(`Get User with ID : ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   res.send(`Edit User ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   res.send(`Delete User ${req.params.id}`);
// });

// ################ MIDDLEWARE ###############
const User = [{ name: "Darshana" }, { name: "Bhumi" }, { name: "kalash" }];
router.param("id", (req, res, next, id) => {
  req.user = User[id];
  console.log(`Id: ${id}, Name : ${User[id].name}`);
  next();
});

module.exports = router;
