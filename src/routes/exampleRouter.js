const router = require('express').Router();
const exampleController = require('../controllers/exampleController');

router.route('/example')
    .get((req, res) => exampleController.init(req, res));

module.exports = router;