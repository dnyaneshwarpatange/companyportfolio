const express = require("express");
const router = express.Router();
const controllers = require("../controllers/authController")
const signUpSchema = require("../validation/authValidation")
const validate = require("../middlewares/validateMiddleware")


router.get("/",controllers.home)
router.get("/register",controllers.register)
router.post("/login",controllers.login)


router.post("/",controllers.home)
router.post("/register",validate(signUpSchema),controllers.register)


module.exports = router;