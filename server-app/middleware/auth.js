
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = (req, res, next) => {
    const token = req.headers.cookie.replace('Authorization=Bearer ', '')
    if (token == null) return res.sendStatus(401)
    const retoken = jwt.verify(token, 'newtokencreated', (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
module.exports = auth
