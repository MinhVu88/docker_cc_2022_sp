const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.get('/', (req, res) => {
	res.json([
		{
			"id":"1",
			"title":"Book Review: Animal Farm"
		},
		{
			"id":"2",
			"title":"Game Review: Alien Isolation"
		},
		{
			"id":"3",
			"title":"Show Review: Better Call Saul"
		}
	])
});

app.listen(port, () => console.log(`listening for requests on port ${port}`));