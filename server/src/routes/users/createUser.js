const bcrypt = require('bcrypt');

const User = require('../../models/User');

const createUser = async (request, response) => {
  const { firstName, lastName, email, password } = request.body;

  try {
    const hashedPassword = await bcrypt.hash(
      password,
      +process.env.BCRYPT_SALT,
    );
    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    response.status(201).json({
      message: 'User created',
    });
  } catch (error) {
    response.status(400).json({
      message: error.message,
    });
  }
};

module.exports = createUser;
