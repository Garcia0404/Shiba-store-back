import express from 'express';
import data from '../data/gamingCatalog.json' assert { type: 'json' };
import { playStationRouter } from './playStation.js';

export const router = express.Router();

router.get('/games', async (req, res) => {
  res.json({'playstation':data});
});
router.use('/games/playstation', playStationRouter);
