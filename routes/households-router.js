const router = require("express").Router();
const Households = require("../models/households-model.js");
const Members = require("../models/members-model.js");
const bcrypt = require("bcryptjs");

router.post("/unlock", (req, res, next) => {
  if (req.body.pin) {
    Members.getById(req.body.id)
      .then((member) => {
        if (bcrypt.compareSync(req.body.pin, member.password)) {
          res.status(200).json({ success: true });
        } else {
          res.status(400).json({message: "Invalid password" });
        }
      })
      .catch((err) => {
        next(err);
      });
  } else {
    res.status(400).json({message: "Password field cannot be blank"})
  }
});


router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  Households.update(id, req.body)
    .then((household) => {
      res.status(200).json({ household });
    })
    .catch((err) => {
      next(err);
    });
});

router.delete("/", (req, res) =>{
  const id  = req.decodedToken.current_household;
  Households.remove( id )
  .then((message) => {
    res.status(200).json({ message: "Successfully deleted household" });
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;