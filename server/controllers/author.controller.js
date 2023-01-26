const Author = require('../models/author.model');

const title = (req, res) => {
  res.json({
    // title:"Hello World",
  });
};

const create = (req, res) => {
  Author.create(req.body)
    .then(author => res.status(201).json(author))
    .catch(err => res.status(400).json(err))
};

const findAll = (req, res) => {
  Author.find()
  .then(authors => res.status(201).json(authors))
  .catch(err => res.status(400).json(err))
};

const findOne = (req, res) => {
  const { id } = req.params;
  Author.findById(id)
  .then(author => res.status(201).json(author))
  .catch(err => res.status(400).json(err))
};

const updateOne = (req, res) => {
  const { id } = req.params;
  Author.findByIdAndUpdate(id, req.body)
    .then(author => res.status(200).json(author))
    .catch(err => res.status(400).json(err)) 
}

const deleteOne = (req, res) => {
  const { id } = req.params;
  Author.findByIdAndDelete(id)
    .then(author => res.status(200).json(author))
    .catch(err => res.status(400).json(err))
}

module.exports = { title, create, findAll, findOne, updateOne, deleteOne };  

