const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(express.static('public'));

app.post('/upload', upload.array('images'), (req, res) => {
  // Handle image classification here
  res.send('Images uploaded');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
