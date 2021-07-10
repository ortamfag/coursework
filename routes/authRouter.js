const Router = require('express')
const router = new Router()
const controller = require('../controllers/authController')
const {check} = require("express-validator")
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')


router.get('/registration', (req, res) => {
    res.render('registration', {
        title: 'Зарегистрироваться'
    })
})

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Войти'
    })
})

router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быьь больше 4 и меньше 10 символов").isLength({min:4,max:10})
], controller.registration)

router.post('/registration', controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(["ADMIN"]), controller.getUsers)

module.exports = router