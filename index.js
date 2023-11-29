import express from 'express'
import cors from 'cors';
import gamesRoutes from './routes/gamesRoutes.js';
import votesRoutes from './routes/votesRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(gamesRoutes);
app.use(votesRoutes);

app.listen(2023, function () {
    console.log("El servidor esta levantado! http://localhost:2023");
})