const express = require("express")
const authRouter = require("./auth.routes")

const router = express.Router()

router.use("/auth", authRouter)

router.get("/", (req, res) => {

})

module.exports = router