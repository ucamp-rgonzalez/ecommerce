const jwt = require('jsonwebtoken');

const User = require('../models/User');

const authToken = async (request, response, next) => {
  const token = request.headers['token'];

  if (!token) {
    return response.status(400).json({
      message: 'A token is required',
    });
  }

  try {
    const { id: userId } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(userId);

    if (user === null) {
      return response.status(400).json({
        message: 'User not valid',
      });
    }

    if (!user.isActive) {
      return response.status(400).json({
        message: 'User is not active',
      });
    }

    request.userId = userId;
  } catch (error) {
    return response.status(400).json({
      message: 'Invalid token',
    });
  }
  next();
};

module.exports = authToken;
