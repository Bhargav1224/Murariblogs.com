const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const categoryRouter = require("./routes/categories");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/Images", express.static(path.join(__dirname, "/Images")));
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: true,
	})
	.then(console.log("Connected to MongoDB"))
	.catch((err) => console.log(err));


const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "Images");
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	}
})

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
	res.status(200).json("File has been uploaded");
})

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoryRouter);

app.listen(process.env.PORT || 8000, () => {
    console.log("Listening on port 8000");
  });