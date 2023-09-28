const express = require("express")
const { AuthController } = require("../controllers")

const router = express.Router()

router.post("/register", AuthController.handleRegister)
router.get("/login", AuthController.loginSession)
router.post("/login", AuthController.handleUserLogin)
router.get("/logout", AuthController.removeCookie)

module.exports = router