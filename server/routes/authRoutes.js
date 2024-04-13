const { login, signin, saveuid, updateDegrees } = require("../controllers/userController")
const router = require("express").Router();




router.post('/updateDegrees', updateDegrees)
router.post('/saveuid', saveuid)
router.post('/signin', signin)
router.post('/login', login)

module.exports = router;