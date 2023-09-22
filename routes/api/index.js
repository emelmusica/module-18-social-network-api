const router = require('express').Router();
const userRoutes = require('./userRoutes'); // Update the import path
const thoughtRoutes = require('./thoughtRoutes'); // Update the import path

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
