import express from 'express';
import data from '../data/gamingCatalog.json' assert { type: 'json' };
export const playStationRouter = express.Router();

playStationRouter.get('/', async (req, res) => {
  res.json(data);
});
playStationRouter.get('/:id', async (req, res) => {
  const game = data.find(game => game.id === req.params.id);
  if (game) {
    res.json(game);
  } else {
    res.status(404).send('Game not found');
  }
});