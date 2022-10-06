const Users = require('../models/usersSchema')
const jwt = require('jsonwebtoken')

//module finds user in the db to allow them to login
//find user by their password and username
//generate user token for authentication
exports.login = async function(req,res){
    await Users.find({
        username: req.body.username,
        password: req.body.password
    })
    .then(()=>{
        let payload = {
            role: "user",
        }
        //token of authentication
        const user_token = jwt.sign(payload, 'secret-key', {algorithm:"HS256"})
        res.status(200).send(user_token)
    })
    .catch((error)=>{
       if(error)  res.status(401).send('not authorised to access resources')
    })
}
