const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors()); // Enable CORS for all routes
app.get('/api/greeting', (req, res) => {
res.json({ message: 'Hello from backend!' });
});
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
})