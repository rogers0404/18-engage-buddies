const router = require('express').Router();
const {Thought, User} = require('../../models')

//GET route for all Thoughts
router.get('/', (req, res) => {
    Thought.find({})
    .populate({
        path: 'reactions',    //Displaying reactions of every Thought
        select: '-__v'
    })
    .select('-__v')
    .sort({ _id: -1 })
    .then(dbThought => {
        res.json(dbThought);
      })
    .catch(err => {
        res.json(err);
      });
  });

  //GET route for User by _Id
router.get('/:id', ({params}, res) => {
    Thought.findOne({ _id: params.id })
    .populate({
        path: 'reactions',    //Displaying reactions of one thought searched by Id
        select: '-__v'
    })
    .select('-__v')
    .sort({ _id: -1 })
    .then(dbThought => {
        res.json(dbThought);
      })
    .catch(err => {
        res.json(err);
      });
  });


// POST route to Create a new Thought and associate it with user
router.post('/', ({ body }, res) => {
    Thought.create(body)
      .then(({ _id }) =>
        User.findOneAndUpdate({_id: body.userId}, { $push: { thoughts: _id } }, { new: true })
      )
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });

   //PUT route to Update Thought by _Id
router.put('/:id', ({ params, body }, res) => {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(dbThought => {
        if (!dbThought) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbThought);
      })
    .catch(err => {
        res.json(err);
      });
  });

  //DELETE route for Thought
  router.delete('/:id', ({ params }, res) => {
    Thought.findOneAndDelete({ _id: params.id })
      .then(dbThought => {
        if (!dbThought) {
          res.json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbThought);
      })
      .catch(err => {
        res.json(err);
      });
  });


  // POST route to add reaction to one Thought
  router.post('/:id/reactions', ({params, body}, res) => {
    Thought.findOneAndUpdate(
      { _id: params.id },
      { $addToSet: { reactions: body } }, 
      { runValidators: true, new: true }
    )
      .then(dbThought => {
        if (!dbThought) {
          return res.status(404).json({ message: 'No reaction with this id!' });
        }
        res.json(dbThought);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.delete('/:id/reactions/:reactionId', ({params}, res) => {
    Thought.findOneAndUpdate(
      { _id: params.id },
      { $pull: { reactions: {_id: params.reactionId} } },
      { runValidators: true, new: true }
    )
      .then(dbThought => {
        if (!dbThought) {
          return res.status(404).json({ message: 'No reaction found with this id!' });
        }
        res.json(dbThought);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;


