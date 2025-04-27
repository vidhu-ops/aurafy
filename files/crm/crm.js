const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

let clients = []; // Sample client data
let healers = []; // Sample healer data

// Healer adds availability
app.post('/healer/add', (req, res) => {
  const healer = req.body;
  healers.push(healer);
  res.json({ message: 'Healer added successfully', healers });
});

// Client chooses a healer
app.post('/client/choose', (req, res) => {
  const { client, healerId } = req.body;
  const healer = healers.find(h => h.id === healerId);
  if (!healer) return res.status(404).json({ error: 'Healer not found' });
  clients.push({ ...client, healer });
  res.json({ message: 'Healer chosen successfully', clients });
});

app.listen(PORT, () => console.log(`CRM running on port ${PORT}`));