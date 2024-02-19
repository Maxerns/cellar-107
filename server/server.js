const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

app.options('/api/subscribe', cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server is running. Use the appropriate API endpoints.');
  });

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email address is required' });
  }

  // Your subscription logic here

  console.log(`New subscription: ${email}`);

  return res.json({ message: 'Subscription successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});