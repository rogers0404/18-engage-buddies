const router = require('express').Router();
const User = require('../../models/User')

//GET route for User
router.get('/', (req, res) => {
    User.find({})
    .populate({
        path: 'friends',    //Displaying Friends of every User
        select: '-__v'
    })
    .select('-__v')
    .sort({ _id: -1 })
    .then(dbUser => {
        res.json(dbUser);
      })
    .catch(err => {
        res.json(err);
      });
  });

  //GET route for User by _Id
router.get('/:id', ({params}, res) => {
    User.findOne({ _id: params.id })
    .populate({
        path: 'friends',    //Displaying Friends of one User searched by Id
        select: '-__v'
    })
    .select('-__v')
    .sort({ _id: -1 })
    .then(dbUser => {
        res.json(dbUser);
      })
    .catch(err => {
        res.json(err);
      });
  });

    //POST route to Create User
router.post('/', ({ body }, res) => {
    User.create(body)
    .then(dbUser => res.json(dbUser))
    .catch(err => {
        res.json(err);
      });
  });

   //PUT route to Update User by _Id
router.put('/:id', ({ params, body }, res) => {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(dbUser => {
        if (!dbUser) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUser);
      })
    .catch(err => {
        res.json(err);
      });
  });

  router.delete('/:id', ({ params }, res) => {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUser => {
        if (!dbUser) {
          res.json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });


module.exports = router;