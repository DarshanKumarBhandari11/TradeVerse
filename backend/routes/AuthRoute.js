const { Signup, Login, Logout } = require("../Controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/logout', Logout);
router.post('/verify', userVerification);

module.exports = router;