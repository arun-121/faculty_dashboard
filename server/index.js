const express = require("express")
const app = express();
const mongoose = require("mongoose");

app.use(express.json());


mongoose.connect("mongodb://localhost:27017/faculty").then(() => {
    console.log("database connected");
    app.listen(3000, () => {
        console.log("server running on port 3000");
    })
}).catch((e) => {
    console.log(e);
})


app.use("/api", require("./routes/authRoutes"));


