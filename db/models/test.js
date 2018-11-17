'use strict';
const Sequelize = require('sequelize');
const db = require('../db');

const Test = db.define('test', {
  subject: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Test;
