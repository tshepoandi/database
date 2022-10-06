const Users = require('../models/usersSchema')
const jwt = require('jsonwebtoken')

exports.store_user = async function (req, res) {
  let User = new Users({
    role: 'user',
    username: req.body.username,
    password: req.body.password,
  })

  await User.save()
    .then((data) => {
      if (data) {
        let payload = {
          role: 'user',
        }

        const user_token = jwt.sign(payload, 'secret-key', {
          algorithm: 'HS256',
        })
        res.status(200).send(user_token)
      }
    })
    .catch((error) => {
      if (error)
        res
          .status(500)
          .send(
            'internal server error: could not register user onto the system',
          )
    })
}
