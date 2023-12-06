const router = require("express").Router();
const User = require("../models/Users");

// //Register
// router.get("/register", async (req, res)=> {

//     const user = await new User({
//         username: "john",
//         email:"john@gmail.com",
//         password: "12345678"
//     })

//    await user.save()

//    res.send("ok")

// });

router.get("/register", async(req, res)=> {

        const user = await new User({
        username: "john",
        email:"john@gmail.com",
        password: "12345678"
    })

   await user.save()

   res.send("ok")
})

module.exports = router;