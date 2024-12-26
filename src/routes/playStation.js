import express from 'express';
import { readJsonFile } from '../utils/readJsonFile.js';
export const playStationRouter = express.Router();

playStationRouter.get('/', async (req, res) => {
  const data = await readJsonFile();
  res.json(data);
});
playStationRouter.get('/:id', async (req, res) => {
  const data = await readJsonFile();
  const game = data.find(game => game.id === req.params.id);
  if (game) {
    res.json(game);
  } else {
    res.status(404).send('Game not found');
  }
});