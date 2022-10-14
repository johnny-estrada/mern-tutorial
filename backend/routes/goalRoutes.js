const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// router.get("/", (request, response) => {
//   response.status(200).json({ message: "Get goals" });
// });

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

// router.get("/", getGoals);

// router.post("/", postGoals);

// router.put("/:id", putGoals);

// router.delete("/:id", deleteGoals);

module.exports = router;
