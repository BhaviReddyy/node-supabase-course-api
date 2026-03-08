import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import logger from "./middleware/logger.js";
import courseRoutes from "./routes/courses.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/", courseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});