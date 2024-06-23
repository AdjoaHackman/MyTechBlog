const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes')

router.use('/', homeRoutes);
router.use('login', userRoutes);
router.use('logout', userRoutes);
router.use('/user', userRoutes);
router.use('/post',postRoutes);
router.use('/comment',commentRoutes);
router.use('/dashboard', homeRoutes, postRoutes);

module.exports = router;
