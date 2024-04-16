const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/task-manager-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

// Import the Task model
const Task = require('./models/Task');

// Import routes
const taskRoutes = require('./routes/tasks');

// Use routes
app.use('/api', taskRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
