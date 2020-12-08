const express = require('express')
const router = express.Router()
const passport = require('passport')

const User = require('../models/user.model')

const bcrypt = require('bcryptjs')
const bcryptSalt = 10

// // Sign up Form
// router.get('/signup', (req, res, next) => res.render('auth/auth-signup'))

// Sign up
router.post('/signup', (req, res) => {

    const { username, password, name } = req.body

    if (!username || !password || !name) {
        res.status(400).json({ message: 'Por favor, rellena todos los campos' })
        return
    }

    User
        .findOne({ username })
        .then(theUser => {
            if (theUser) {
                res.status(400).json({ message: 'Nombre de usuario ya registrado.' })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ username, password: hashPass, name })
                .then(newUser => req.login(newUser, err => err ? res.status(500).json({ message: 'Error en el registro' }) : res.status(200).json(newUser)))
                .catch(() => res.status(500).json({ message: 'Error al registrar un usuario en la BBDD.' }))

        })
})

// // Login Form - Company
// router.get('/company/login', (req, res, next) => res.render('company/company-login', { errorMsg: req.flash('error') }))

// Login Form
router.post('/login', (req, res, next) => {

    passport.authenticate('local', (err, theUser, failureDetails) => {

        if (err) {
            res.status(500).json({ message: 'Error al comprobar usuario' })
            return;
        }

        if (!theUser) {
            res.status(401).json(failureDetails)
            return;
        }

        req.login(theUser, err => err ? res.status(500).json({ message: 'Error en el registro' }) : res.status(200).json(theUser))

    })(req, res, next)
})

// Logout
router.post('/logout', (req, res) => {
    req.logout()
    res.status(200).json({ message: 'Cierre de sesión completado' })
})

router.get('/loggedin', (req, res) => req.isAuthenticated() ? res.status(200).json(req.user) : res.status(403).json({message: 'Desautorizado'}))


// // Login Form - Schools
// router.get('/academy/login', (req, res, next) => res.render('academy/academy-login', { errorMsg: req.flash('error') }))

// // Login Form Management 
// router.post('/academy/login', passport.authenticate('local', {
//     successRedirect: '/academy/private-academy', //are-privada/perfil
//     failureRedirect: '/auth/academy/login',
//     failureFlash: true,
//     passReqToCallback: true
// }))

// // Logout - Schools
// router.get('/academy/logout', (req, res) => {
//     req.logout()
//     res.redirect('/auth/academy/login')
// })

// // Login Form - Students
// router.get('/student/login', (req, res, next) => res.render('student/student-login', { errorMsg: req.flash('error') }))

// // Login Form Management - Students
// router.post('/student/login', passport.authenticate('local', {
//     successRedirect: '/student/private-student',
//     failureRedirect: '/auth/student/login',
//     failureFlash: true,
//     passReqToCallback: true
// }))

// // Logout - Students
// router.get('/student/logout', (req, res) => {
//     req.logout()
//     res.redirect('/auth/student/login')
// })

module.exports = router