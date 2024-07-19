import { initPlayers } from "./routes/players";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

initPlayers(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
