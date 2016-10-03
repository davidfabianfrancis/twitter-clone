var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/user')
.get(function(req, res) {
  res.render('index', { title: 'Express auth' });
});

module.exports = router;
