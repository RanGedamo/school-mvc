const router = require('express').Router();
const { getAllNames,addName} = require('../controllers/names-controller')

router.get('/', getAllNames);
router.post('/newName',addName);



module.exports = router