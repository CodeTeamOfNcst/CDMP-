const databases = require('../dbconfig/dbinit')

const User = require('../dbconfig/dbinit').User

const test = function () {
    User.create({account: 'admin', password:'123456', name: 'admin'})
    console.log("success")
}

module.exports.test = test