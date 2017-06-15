var user = require('./userCtrl')

var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {

    
    getFriendsProfile:  function(req, res){
        var friendsArr = [];
        var friends = req.session.currentUser.friends;
        for (i=0; i < friends.length; i++){
            for (j=0; j < profiles.length; j++){
                if (friends[i] == profiles[j].name) {
                    friendsArr.push(profiles[j])
                }
            }
        }
        res.status(200).json({ currentUser: req.session.currentUser, friends: friendsArr });
    }

}