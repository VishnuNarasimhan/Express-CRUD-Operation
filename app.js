const express = require('express');
const app = express();
const path = require('path');
const users = require("./routes/tasks");
const connectDB = require("./database/connection");
require('dotenv').config();
const methodOverride = require('method-override')




//EJS
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
//--------------------------------------------------

//middleware(Body Parser)...
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))

//method-override...
app.use(methodOverride('_method'))
//--------------------------------------------------



app.use("/", users);


//PORT and Mongo Connection...
const PORT = process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();