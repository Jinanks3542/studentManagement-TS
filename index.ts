import * as dotenv from "dotenv";
dotenv.config()
import * as express from "express";
import mainRoute from "./router/mainRoute";
import mongoose from 'mongoose'

const mongoURL = process.env.MONGODB_URL;

if (!mongoURL) {
  throw new Error(" MONGODB_URL is not defined in your .env file.");
}

mongoose.connect(mongoURL).then(()=>{
   console.log("Mongo connected ..")
}).catch((err)=>{
  console.log(" MongoDB connection error:", err)
})

const app:express.Express = express()

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(req,res)=>{
  console.log("reached")
  res.send("hiiii")
})

app.use('/',mainRoute)

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`server is running`);
});
