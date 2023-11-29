import express from 'express';
import GamesController from '../controllers/gamesController.js';
import GamesVotesRoute from './votesRoutes.js';

const route = express.Router();

route.route('/games')
  .get(GamesController.getGames)
  .post(GamesController.createGame);
route.get('/games/edition', GamesController.getGamesOrderByScore)
route.route('/games/:id')
  .get(GamesController.getGameById)
  .patch(GamesController.updateGame);

route.use('/games', GamesVotesRoute);

export default route;