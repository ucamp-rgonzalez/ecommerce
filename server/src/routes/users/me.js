const User = require('../../models/User');

const me = async (request, response) => {
  try {
    const { userId } = request;
    const user = await User.findById(userId).select('-password');
    response.json(user);
  } catch (error) {
    response.json({
      message: 'Error',
    });
  }
};

module.exports = me;
