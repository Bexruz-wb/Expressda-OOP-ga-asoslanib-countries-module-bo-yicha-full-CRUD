 import express from "express";
import countryRoutes from "./routes/countryRoutes.js";

const app = express();

app.use(express.json()); // <-- MUHIM

app.use("/countries", countryRoutes);

app.listen(3000, () => console.log("Server running on 3000"));
