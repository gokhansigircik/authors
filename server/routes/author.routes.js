// const PersonController = require('../controllers/person.controller');
const { 
  title,
  create,
  findAll,
  findOne,
  updateOne,
  deleteOne } = require('../controllers/author.controller');

const express = require('express');
// const { updateOne } = require('../models/manager.model');
// const { create } = require('../models/manager.model');
const authorRouter = express.Router();

// module.exports = function(app){
//     app.get('/api', PersonController.index);
// }

authorRouter
  .route('/')
  .get(title); 

authorRouter
  .route('/authors')
  .post(create)
  .get(findAll);

authorRouter
  .route('/authors/:id')
  .get(findOne)
  .put(updateOne)
  .delete(deleteOne);
  
module.exports = authorRouter;