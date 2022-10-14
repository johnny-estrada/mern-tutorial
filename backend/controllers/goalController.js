// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (request, response) => {
  response.status(200).json({ message: "Get goals" });
};

// @desc Get goals
// @route SET /api/goals
// @access Private
const postGoal = (request, response) => {
  response.status(200).json({ message: "Set goal" });
};

// @desc Get goals
// @route PUT /api/goals
// @access Private
const putGoal = (request, response) => {
  response.status(200).json({ message: `Update goal ${request.params.id}` });
};

// @desc Get goals
// @route DELETE /api/goals
// @access Private
const deleteGoal = (request, response) => {
  response.status(200).json({ message: `Delete goal ${request.params.id}` });
};

module.exports = {
  getGoals,
  postGoal,
  putGoal,
  deleteGoal
};
