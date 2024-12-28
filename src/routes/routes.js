import express from 'express';
import { readJsonFile } from '../utils/readJsonFile.js';

export const router = express.Router();
const data = await readJsonFile();
router.get('/consoles', async (req, res) => {
  res.json(data);
});
router.get('/games',async(req,res) => {
  const games = data.flatMap(console => console.games)
  res.json(games)
})
router.get('/consoles/:id',async(req,res) => {
  const { id } = req.params
  const console = data.find(consl => consl.id === id)
  if(console){
    res.json(console)
  } else res.status(404).send('Not found')
})
router.get('/consoles/:id/games',async(req,res) => {
  const { id } = req.params
  const console = data.find(consl => consl.id == id)
  if(console){
    const games = console.games
    res.json(games)
  } else res.status(404).send('Not found')
})
router.get('/games/:id',async(req,res) => {
  const { id } = req.params
  const games = data.flatMap(console => console.games)
  const game = games.find(gme => gme.id == id)
  if(game) res.json(game)
  else res.status(404).send('Not found')
})
