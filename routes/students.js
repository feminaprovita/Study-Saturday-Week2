const router = require('express').Router();
const { Test, Student } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const allStudents = await Student.findAll();
    res.json(allStudents);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const thisStudent = await Student.findById(req.params.id);
    if (thisStudent) res.json(thisStudent);
    else res.sendStatus(404);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201);
    res.json(newStudent);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const thisStudent = await Student.findById(req.params.id);
    await thisStudent.update(req.body);
    res.json(thisStudent);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const thisStudent = await Student.findById(req.params.id);
    await thisStudent.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
