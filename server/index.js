const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
dotenv.config();

app.use(express.json());

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: true,
	})
	.then(console.log("Connected to MongoDB"))
	.catch((err) => console.log(err));


app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.listen("8000", () => {
	console.log("Listening port 8000");
});
