const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.post('/api/receive-data', (req, res) => {
    const receivedData = req.body;
    console.log(receivedData)
    res.json({ message: 'Data received successfully' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
