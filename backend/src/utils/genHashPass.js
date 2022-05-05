const bcrypt = require('bcryptjs');

const genereteHashPassword = (password) => {
  const hash = bcrypt.hashSync(password, 8);

  return hash
}

const verifyHash = (str, hash) => {
  const isValid = bcrypt.compareSync(str, hash);

  return isValid;
}

module.exports = { genereteHashPassword, verifyHash }
