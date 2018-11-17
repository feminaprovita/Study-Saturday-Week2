const router = require('express').Router();
const { Test, Student } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const allTests = await Test.findAll();
    res.json(allTests);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const thisTest = await Test.findById(req.params.id);
    if (thisTest) res.json(thisTest);
    else res.sendStatus(404);
  } catch (err) {
    next(err);
  }
});

router.post('/student/:studentId', async (req, res, next) => {
  try {
    const newTest = await Test.create(req.body);
    const thisStudent = await Student.findById(req.params.studentId);
    await newTest.setStudent(thisStudent);
    // sequelize made this method automatically when i associated the two tables
    res.status(201);
    res.json(newTest);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const thisTest = await Test.findById(req.params.id);
    await thisTest.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
