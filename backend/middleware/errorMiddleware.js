// Middleware are functions that execute during the respond cycle
const errorHandler = (error, request, response, next) => { 
    // get status code from controller, else 500
  const statusCode = response.statusCode ? response.statusCode : 500;

  response.status(statusCode);

  response.json({
    message: error.message,
    //only send error stack when in development
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
};

module.exports = {
  errorHandler,
};
