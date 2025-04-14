import express from 'express';
import cors from 'cors';


const app = express();
app.use (express().json());
app.use (cors());

const port = 5858;

// const pool = new pg.Pool({

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);
