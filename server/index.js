import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import router from "./routes/routes.js";

/*configs*/
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Now use the router after all the middleware
app.use('/api', router);

// Test route
app.get('/test', (req, res) => res.send('Test route working'));

/*Mongoose*/
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL) .then(async () => {
  app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
}) .catch((error) => console.log(`${error} did not connect`));

