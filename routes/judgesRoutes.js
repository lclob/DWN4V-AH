import express from 'express';
import JudgesController from '../controllers/judgesController.js';

const route = express.Router();

route.route('/judges')
  .get(JudgesController.getJudges)
  .post(JudgesController.createJudge);
route.get('/judges/:id', JudgesController.getJudgeById);
route.get('/judges/:id/votes', JudgesController.getJudgeVotesById);

export default route;