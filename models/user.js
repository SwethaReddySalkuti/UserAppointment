const db = require('../database.js');

module.exports = class User {
  constructor(id, name, email,phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;

  }

  save() {
    return db.execute(
      'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)',
      [this.name,this.email,this.phone]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute('SELECT * FROM users');
  }

  
};
