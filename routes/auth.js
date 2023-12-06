const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt")

//Register

router.post("/register", async(req, res)=> {

    try{

            // generate new user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
        

        //password encryption
        const salt =await bcrypt.genSalt(10);
        const hashedpasswd= await bcrypt.hash(req.body.password, salt);
        // const newUser = await new User({
        //     username: req.body.username,
        //     email: req.body.email,
        //     password: hashedpasswd,
        // });


        //save user and respond 
        const user = await newUser.save();
        res.status(200).json(user);
    }catch (err) {

        console.log(err);

    }

    // router.get("/register", async(req, res)=> {

//         const user = await new User({
//         username: "john",
//         email:"john@gmail.com",
//         password: "12345678"
//     })

//    await user.save()

//    res.send("ok")
// })

});


//Login

router.post("/login", async(req, res)=> {

    try{
    const user = await User.findOne({email:req.body.email});
    !user && res.status(404).json("user not found");

    // const validPassword = await bcrypt.compare(req.body.password,user.password)
    // console.log(req.body.password)
    // console.log(user.password)

    
    
    const validPassword = await User.findOne({password:req.body.password})

    !validPassword && res.status(400).json("passwor is wrong");

    res.status(200).json(user);
    }
    catch (err) {

        console.log(err)
    }
    

});

module.exports = router;