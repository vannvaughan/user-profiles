var profile = require('./profileCtrl')

var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {

    login: function(req, res){
        var name = req.body.name;
        var password = req.body.password;
        for (var i = 0; i < users.length; i++){
            if (name == users[i].name && password == users[i].password) {
                req.session.currentUser = users[i]
                return res.status(200).send({ userFound: true })
            }
        }
        return res.status(200).send({ userFound: false })
    },
};