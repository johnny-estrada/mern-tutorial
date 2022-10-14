const express = require("express");
const router = express.Router();
const {
  getGoals,
  postGoal,
  putGoal,
  deleteGoal,
} = require("../controllers/goalController");

// router.get("/", (request, response) => {
//   response.status(200).json({ message: "Get goals" });
// });

router.route('/').get(getGoals).post(postGoal)
router.route('/:id').put(putGoal).delete(deleteGoal)

// router.get("/", getGoals);

// router.post("/", postGoals);

// router.put("/:id", putGoals);

// router.delete("/:id", deleteGoals);

module.exports = router;
