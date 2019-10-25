"use strict";

var express = require('express');

var router = express.Router();
router.get('/', function (req, res) {
  return res.status(200).send({
    message: 'App is running!'
  });
});
router.use('/api/v1', require('./routes'));
module.exports = router;
//# sourceMappingURL=index.js.map