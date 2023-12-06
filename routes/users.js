const router = require("express").Router();


router.get("/", (req, res)=> {

    res.send("welcome to home page user")
})

module.exports = router