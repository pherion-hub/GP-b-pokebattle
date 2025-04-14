import express from 'express';
import cors from 'cors';
import UserScore from "./models/UserScore.js"

const app = express();
app.use (express.json());
app.use (cors());

const port = 5858;

app.get("/leaderboard", async (req, res)=> {
    const leaderboard = await UserScore.findAll()
    res.json({ message: "Wer gewinnt?", data: leaderboard})
})

app.post("/leaderboard", async (req, res)=> {
    const {name, score} = req.body
    console.log (req.body)
    // if (!name || !score ) return res.status(400).json({ message: 'All fields are required!' });
    const newentry = await UserScore.create({
        name, score
    })
    res.json({ message: "Wer gewinnt?", data: newentry})
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

