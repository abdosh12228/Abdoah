const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'qalbin' && password === '1234') {
    res.json({ message: 'تم الدخول بنجاح!' });
  } else {
    res.json({ message: 'بيانات غير صحيحة.' });
  }
});

app.get('/', (req, res) => {
  res.send('خادم قلبين يعمل!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
