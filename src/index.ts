import express from 'express';
import { config } from './config';
import { erc } from './contracts';

const app = express();

app.use(express.json());

app.post('/update', async (req, res) => {
	const { value } = req.body;
	const data = await erc.update(value);
	res.send(data);
});

app.listen(config.PORT, () => console.log(`Server running on http://localhost:${config.PORT}`));
