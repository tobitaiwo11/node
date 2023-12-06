const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv =require("dotenv");
const helmet =require("helmet");
const morgan =require("morgan");
const userRoute=require("./routes/users")
const authRoute=require("./routes/auth")


dotenv.config();

// const dburl="mongodb+srv://team7:ltkGPJWOy8wvjUZZ@cluster0.6zf4jvu.mongodb.net/social?retryWrites=true&w=majority";

const dburl="mongodb://team7:ltkGPJWOy8wvjUZZ@ac-17okmoc-shard-00-00.6zf4jvu.mongodb.net:27017,ac-17okmoc-shard-00-01.6zf4jvu.mongodb.net:27017,ac-17okmoc-shard-00-02.6zf4jvu.mongodb.net:27017/social?ssl=true&replicaSet=atlas-p2496o-shard-0&authSource=admin&retryWrites=true&w=majority"
const connectParms= {

    useNewUrlParser : true,

    useUnifiedTopology: true,
};

mongoose
.connect(dburl, connectParms)
.then(() => {

    console.info("connected to DB");
})
.catch((e) => {
    console.log("Error:", e);
});


// mongoose.connect(process.env.MONGO_URL)
// .then(console.log("MongoDb Connection established"))
// .catch((err) => console.log(err.message))


//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))


app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)


// app.get("/", (req, res)=> {

//     res.send("welcome to home page")b
// })


// app.get("/users", (req, res)=> {

//     res.send("welcome to home page")
// })


app.listen(8800, ()=>{
    console.log("Backend server is running!!!")
})