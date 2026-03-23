import http from 'http';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  try {
    res.status(200).send('Server is up and running!');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.post('/login', (req, res) => {
  try {
    res.status(200).send('Login successful!');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  } 
});

app.put('/update', (req, res) => {
  try {
    res.status(200).send('Update successful!');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;