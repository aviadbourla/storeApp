const express = require('express');
const User = require('../models/user')
const mongoose = require('mongoose')
const auth = require('../middleware/auth')
const jwt = require('jsonwebtoken')
const router = new express.Router()


router.post('/signin', async (req, res) => {
    console.log("im here")
    const user = new User(req.body.newUser);
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/users', auth, async (req, res) => {
    try {
        const users = await User.find({})
        console.log(users)
        res.send(users)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/isconnected', auth, async (req, res) => {
    try {
        res.send(req.user)
    } catch (e) {
        console.log("didnt worked")
        res.send(false)
        res.status(500).send(e)
    }
})

router.post('/login', async (req, res) => {
    try {
        console.log("enter to /login route")
        const user = await User.FindIfUserExists(req.body.newuserlogin.userEmail, req.body.newuserlogin.userPassword)
        if (user) {
            const userEmail = req.body.newuserlogin.userEmail
            const user = { userEmail: userEmail }
            const accessToken = jwt.sign(user, 'newtokencreated', { expiresIn: '1h' })
            res.send({ accessToken: accessToken })
        } else {
            res.send(Boolean(user))
        }
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/deleteuser', async (req, res) => {
    const id = req.body.id;
    try {
        await User.findByIdAndDelete(id, (error, data) => {
            res.send(true);
        })
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/userlogout', auth, async (req, res) => {
    try {
        req.user.token = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/userslogoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router;