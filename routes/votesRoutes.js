import express from 'express';
import VotesController from '../controllers/votesController.js';

const route = express.Router();

route.route('/:game_id/votes')
  .get(VotesController.getVotes)
  .post(VotesController.createVote);
route.get('/:game_id/average', VotesController.getAverage);

export default route;
