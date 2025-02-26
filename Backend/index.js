import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRouter from "./route/book.route.js";
import cors from "cors";

const app = express();

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5000;
const URI = process.env.MongoDBURI;
console.log("MongoDB URI:", URI);

// connect to mongo db
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
}
catch (error) {
  console.log(error);
}

// defining routes
app.use("/books", bookRouter);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
