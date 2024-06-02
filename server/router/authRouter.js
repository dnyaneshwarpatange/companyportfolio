const express = require("express");
const router = express.Router();
const controllers = require("../controllers/authController")

router.get("/",controllers.home)
router.get("/register",controllers.register)
router.post("/login",controllers.login)


router.post("/",controllers.home)
router.post("/register",controllers.register)


module.exports = router;