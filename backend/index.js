require("dotenv").config();
const express = require("express");
const { connectDb } = require("./db/connectDb");
const cors = require("cors");
const { tweetRoutes } = require("./routes/tweetRoutes");
const { userRoutes } = require("./routes/userRoutes");
const { authRoutes } = require("./routes/auth");
const { verifyAuthToken } = require("./middleware/authMiddleware");
const app = express();
const PORT = 8000;
const path = require("path");

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

connectDb();

app.use(express.static(path.join(__dirname, 'client','build')))
app.get('*', async(req,res)=>{
    res.sendFile(path.join(__dirname, 'client', 'build','index.html'))
})

app.use("/api/tweet", verifyAuthToken, tweetRoutes);
app.use("/api/user", verifyAuthToken, userRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Backend is running on port: ", PORT);
});