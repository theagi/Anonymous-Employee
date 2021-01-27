const router = require('express').Router();
const userops = require('./controllers/UserOperations');

router.post('/newcandidate', userops.newcandidate);
// router.get('/',(req,res) => res.send('test'));

module.exports = router;