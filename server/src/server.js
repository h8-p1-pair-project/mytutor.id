require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const router = require("./routers")

const server = express()
const port = process.env.PORT

server.use(express.json())
server.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"],
    credentials: true
}))
server.use(cookieParser())
server.use(express.urlencoded({ extended : true }))
server.use(session({
    key: "id",
    secret: process.env.ACCESS_TOKEN_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}))

server.use(router)

server.listen(port, () => {
    console.log("server is up and running", port)
})