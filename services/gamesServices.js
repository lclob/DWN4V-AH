import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("DWN4V-AH");
const GameCollection = db.collection('games');

async function getGames() {
  await client.connect();
  return GameCollection.find({}).toArray();
}

async function getGameById(id) {
  await client.connect();
  return GameCollection.findOne({ _id: new ObjectId(id) });
}

async function updateGame(id, game) {
  await client.connect();
  await GameCollection.updateOne({ _id: new ObjectId(id) }, { $set: game });
  return game;
}

async function createGame(game) {
  await client.connect();
  game.totalPoints = 0;
  await GameCollection.insertOne(game);
  return game;
}

async function getGamesOrderByScore(filter = {}) {
  await client.connect();
  filter = { genre: { filter } }
  return GameCollection.find(filter).sort({totalScore: -1}).toArray();
}


export {
  getGames,
  getGameById,
  updateGame,
  createGame,
  getGamesOrderByScore
}

export default {
  getGames,
  getGameById,
  updateGame,
  createGame,
  getGamesOrderByScore
}