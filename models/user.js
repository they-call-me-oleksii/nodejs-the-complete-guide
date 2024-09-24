const users = [];

module.exports = class User {
  constructor(username) {
    this.name = username;
  }

  save() {
    users.push(this);
  }

  static fetchAll() {
    return users;
  }
};
