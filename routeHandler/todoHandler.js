const express = require('express');
const mongoose = require('mongoose');
const checkLogin = require('../middlewares/checkLogin');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');
const Todo = new mongoose.model('Todo', todoSchema);

// GET ALL THE TODOS
router.get('/', checkLogin, (req, res) => {
  Todo.find()
  .populate('user', 'name username -_id')
  .select({
    _id: 0,
    __v: 0,
    date: 0
  })
  .limit(2)
  .exec((err, data) => {
    if (err) {
      res.status(500).json({
        error: 'There was a server side error'
      })
    } else {
      res.status(200).json({
        result: data,
        message: 'Todo get successfully'
      })
    }
  })
});

// GET ACTIVE TODOS
router.get('/active', async (req, res) => {
  const todo = new Todo();
  const data = await todo.findActive();
  res.status(200).json({
    data,
  })
});

// GET ACTIVE TODOS with callback
router.get('/active-callback', (req, res) => {
  const todo = new Todo();
  todo.findActiveCallback((err, data) => {
    res.status(200).json({
      data,
    })
  });
});

// GET ACTIVE TODOS
router.get('/js', async (req, res) => {
  const data = await Todo.findByJS();
  res.status(200).json({
    data,
  });
});

// GET TODOS BY LANGUAGE
router.get('/language', async (req, res) => {
  const data = await Todo.find().byLanguage('react');
  res.status(200).json({
    data,
  });
});

// GET A TODO by ID
router.get('/:id', async (req, res) => {
  await Todo.find({_id: req.params.id}, (err, data) => {
    if (err) {
      res.status(500).json({
        error: 'There was a server side error'
      })
    } else {
      res.status(200).json({
        result: data,
        message: 'Todo get successfully'
      })
    }
  })
});

// POST A TODO
router.post('/', checkLogin, async (req, res) => {
  const newTodo = new Todo({
    ...req.body,
    user: req.userId
  });

  try {
    await newTodo.save();
    res.status(200).json({
      message: 'Todo was inserted successfully'
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: 'There was a server side error'
    })
  }
});

// POST MULTIPLE TODO
router.post('/all', async (req, res) => {
  await Todo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: 'There was a server side error'
      })
    } else {
      res.status(200).json({
        message: 'Todos were inserted successfully'
      })
    }
  })
});

// PUT TODO
router.put('/:id', async (req, res) => {
  const result = await Todo.findByIdAndUpdate(
    {_id: req.params.id},
    {
      $set: {
        status: 'inactive',
        title: 'Learn DSA from Setu',
      }
    },
    {
      new: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: 'There was a server side error'
        })
      } else {
        res.status(200).json({
          message: 'Todo was updated successfully'
        })
      }
    })
  console.log(result);
});

// DELETE TODO
router.delete('/:id', async (req, res) => {
  await Todo.deleteOne({_id: req.params.id}, (err) => {
    if (err) {
      res.status(500).json({
        error: 'There was a server side error'
      })
    } else {
      res.status(200).json({
        message: 'Todo was deleted successfully'
      })
    }
  })
});

module.exports = router;