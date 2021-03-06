const { Schema, model } = require('mongoose');
const { ThoughtSchema } = require('./Thought');     //importing Thought Schema

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: 'Username is Required, please provide a username'
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'An valid Email must be entered'],
    required: 'Username is Required, please provide a username'
  },
  thoughts: [
    { type: String, ref: 'Thought' }
  ]
},
{
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

//Adding a self-reference of the schema
UserSchema.add({
  friends:
  [{ type: String, ref: 'User' }]
})

// get total count of friend
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('User', UserSchema);

module.exports = User;
