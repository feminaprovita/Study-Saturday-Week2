'use strict';
const Sequelize = require('Sequelize');
const Student = require('./student');
const Test = require('./test');

Student.hasMany(Test);
Test.belongsTo(Student, { as: 'student' });

module.exports = { Student, Test };
