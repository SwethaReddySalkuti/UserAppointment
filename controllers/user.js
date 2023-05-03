const User = require('../models/user');

exports.getAddUser = (req, res, next) => {
  //console.log('Into get');
  User.fetchAll(users => {
    console.log(users);
    res.render('user', {
      users: users,
      pageTitle: 'Add User',
      path: '/user/add-user'
    });
  });
};

exports.postAddUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    
    const user = new User(null, name,email, phone);
    user
      .save()
      .then(() => {
        res.redirect('/user/add-user');
      })
      .catch(err => console.log(err));
  };