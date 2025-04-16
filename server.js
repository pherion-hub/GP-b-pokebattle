import express from "express";
import cors from "cors";
import UserScore from "./models/UserScore.js";

const app = express();
const port = 5858;

app.use(express.json());

const corsOptions = {
  origin: "https://pokebattlegame.netlify.app", // Replace this with the URL of your React app
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization", // Allowed headers
  credentials: false, // If you use cookies set to true
};

app.use(cors(corsOptions));

app.get("/leaderboard", async (req, res) => {
  const leaderboard = await UserScore.findAll();
  res.json({ message: "Wer gewinnt?", data: leaderboard });
});

app.post("/leaderboard", async (req, res) => {
  const { name, score } = req.body;
  console.log(req.body);
  if (!name || !score)
    return res.status(400).json({ message: "All fields are required!" });
  const newentry = await UserScore.create({
    name,
    score,
  });
  res.json({ message: "Wer gewinnt?", data: newentry });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
