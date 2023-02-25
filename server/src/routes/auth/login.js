const bcrypt = require('bcrypt');

const User = require('../../models/User');

const login = async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = await User.findOne({ email });
    if (user === null) {
      return response.status(400).json({
        message: 'User not found',
      });
    }

    const isLoginValid = await bcrypt.compare(password, user.password);
    if (!isLoginValid) {
      return response.status(400).json({
        message: 'Not valid credentials',
      });
    }

    const { password: _, _id, __v, ...userData } = user.toObject();

    response.status(200).json({
      data: userData,
    });
  } catch (error) {
    response.status(400).json({
      message: 'Error',
    });
  }
};

module.exports = login;
