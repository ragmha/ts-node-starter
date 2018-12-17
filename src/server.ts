import express from 'express';

const app: express.Application = express();
const port: number = 3003;

app.get('/', (req, res) => res.send('Yo!'));
app.listen(port, () => console.log(`Listening at http://localhost:${port}/`));
