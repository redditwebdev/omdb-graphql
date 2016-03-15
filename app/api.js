'use strict';

import express from 'express';
let router = express.Router();

router.get('/', (req, res) => {
  res.json({
    msg: 'Hello World'
  });
});

module.exports = router;
