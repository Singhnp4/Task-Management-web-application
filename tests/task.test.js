const request = require('supertest');
const app = require('../server'); // Assuming your Express app is exported from server.js

describe('Test Task API Endpoints', () => {
    it('GET /api/tasks should return all tasks', async () => {
        const response = await request(app).get('/api/tasks');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(0); // Adjust as per your data
    }, 10000);

    // Write more test cases for other endpoints (POST, PUT, DELETE, etc.)
});
