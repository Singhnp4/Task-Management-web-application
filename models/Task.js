const mongoose = require('mongoose');

// Define the schema for the Task model
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false },
    // You can add more fields as needed
});

// Create and export the Task model
module.exports = mongoose.model('Task', taskSchema);
