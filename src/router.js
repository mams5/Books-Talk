const express = require('express');
const userController = require('./controllers/userController');
const userMiddleware = require('./middleware/usersMiddleware');

const router = express.Router();

router.get('/users', userController.getAll);
router.post('/users',
    userMiddleware.validateFieldName,
    userMiddleware.validateFieldPhoneNumber,
    userMiddleware.validateFieldAddress,
    userController.createUser
);
router.delete('/users/:id', userController.deleteUser);
router.put('/users/:id',
    userMiddleware.validateFieldName,
    userMiddleware.validateFieldPhoneNumber,
    userMiddleware.validateFieldAddress,
    userController.updateUser);

module.exports = router;