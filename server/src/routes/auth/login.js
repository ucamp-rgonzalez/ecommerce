const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

const getToken = (user) => {
  if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET is not defined.');
    process.exit(1);
  }
  return jwt.sign(
    { id: user._id, firstName: user.firstName },
    process.env.JWT_SECRET,
    { expiresIn: '2h' },
  );
};

const login = async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = await User.findOne({ email });

    if (user === null) {
      return response.status(400).json({
        message: 'User not found',
      });
    }

    if (!user.isActive) {
      return response.status(400).json({
        message: 'User is not active',
      });
    }

    const samePassword = await bcrypt.compare(password, user.password);

    if (!samePassword) {
      return response.status(400).json({
        message: 'Not valid credentials',
      });
    }

    const token = getToken(user);

    response.status(200).json({
      data: { token },
    });
  } catch (error) {
    console.error(error);
    response.status(400).json({
      message: 'Error',
    });
  }
};

module.exports = login;
