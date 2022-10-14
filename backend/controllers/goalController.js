// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = async (request, response) => {
  response.status(200).json({ message: "Get goals" });
};

// @desc Set goal
// @route SET /api/goals
// @access Private
const setGoal = async (request, response) => {
  try {
    if (!request.body.text) {
      // response.status(400).json({message: 'Please add a text field'})
  
      // This is the express error handler syntax. Above is not ^.
      response.status(400)
      throw new Error('Please add text field')
    }
  
    response.status(200).json({ message: "Set goal" });
  } catch(error) {
    console.log('Caught error')
    console.log(`${error}`)
  }
  
};

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = async (request, response) => {
  try {
    response.status(200).json({ message: `Update goal ${request.params.id}` });
  } catch(error) {
    console.log('Caught error')
    console.log(`${error}`)
  }
  
};

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = async (request, response) => {
  try {
    response.status(200).json({ message: `Delete goal ${request.params.id}` });
  } catch(error) {
    console.log('Caught error')
    console.log(`${error}`)
  }
  
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
