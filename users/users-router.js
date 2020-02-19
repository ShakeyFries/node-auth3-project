const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');
const checkRole = require('../auth/check-role-middleware');

router.get('/', restricted, (req, res) => {
      Users.find()
        .then(users => {
          res.json(users);
        })
        .catch(err => res.send(err));
    });


    router.get('/something', restricted, checkRole('Student'), checkRole('Tutor'), ( req, res ) => {
      // do your thing here.
      res.end();
    });
    
    module.exports = router;