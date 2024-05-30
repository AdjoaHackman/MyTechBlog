const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes')

router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('./post',postRoutes);

module.exports = router;
