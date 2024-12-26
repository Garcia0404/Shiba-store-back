import express from 'express';
import { readJsonFile } from '../utils/readJsonFile.js';
import { playStationRouter } from './playStation.js';

export const router = express.Router();
router.get('/games', async (req, res) => {
  const data = await readJsonFile();
  res.json({'playstation':data});
});
router.use('/games/playstation', playStationRouter);
