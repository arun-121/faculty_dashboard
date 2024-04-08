const { login, signin } = require("../controllers/userController")
const router = require("express").Router();




router.post('/signin', signin)
router.post('/login', login)
module.exports = router;