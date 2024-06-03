const express = require("express");
const router = express.Router();
const controllers = require("../controllers/authController")
const {signUpSchema,signInSchema} = require("../validation/authValidation")
const validate = require("../middlewares/validateMiddleware")
const contactForm = require("../controllers/contactController")



router.get("/",controllers.home)
router.get("/register",controllers.register)
router.post("/login",validate(signInSchema),controllers.login)
router.post("/",controllers.home)
router.post("/register",validate(signUpSchema),controllers.register)
router.post("/contact",contactForm)


module.exports = router;