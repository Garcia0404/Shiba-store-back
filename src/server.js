import express from 'express';
import cors from 'cors';
import { router } from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/api', router);

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});