const express = require('express');
const router = require('./routes');
const app = express();

app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
	console.log('> Server is up and running on PORT : ' + PORT)
);
