const Goal = require("../models/goalModel");

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = async (request, response) => {
  const goals = await Goal.find();

  response.status(200).json(goals);
};

// @desc Set goal
// @route SET /api/goals
// @access Private
const setGoal = async (request, response) => {
  try {
    if (!request.body.text) {
      // response.status(400).json({message: 'Please add a text field'})

      // This is the express error handler syntax. Above is not ^.
      response.status(400);
      throw new Error("Please add text field");
    }

    const goal = await Goal.create({
      text: request.body.text,
    });

    response.status(200).json(goal); 
  } catch (error) {
    console.log("Caught error");
    console.log(`${error}`);
  }
};

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async (request, response) => {
  try {
    const goal = await Goal.findById(request.params.id);

    if (!goal) {
      response.status(400);
      throw new Error("Goal not found");
    }

    const updateGoal = await Goal.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );

    response.status(200).json(updateGoal);
  } catch (error) {
    console.log("Caught error");
    console.log(`${error}`);
  }
};

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = async (request, response) => {
  try {
    const goal = await Goal.findById(request.params.id);

    if (!goal) {
      response.status(400);
      throw new Error("Goal not found");
    }

    await goal.remove();

    response.status(200).json({id: request.params.id});
  } catch (error) {
    console.log("Caught error");
    console.log(`${error}`);
  }
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
