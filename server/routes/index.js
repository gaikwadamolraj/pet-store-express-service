const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.status(200).send({
    message: 'App is running!',
}));
router.use('/api/v1', require('./routes'));

module.exports = router