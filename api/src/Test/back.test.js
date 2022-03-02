const request = require('supertest');
const server = require('../app.js');

it('should reply the GET method with status code 200', async () => {
  const res = await request(server).get('/countries');
  expect(res.statusCode).toBe(200);
});

it('should reply the GET method with status code 200', async () => {
  const res = await request(server).get('/activities');
  expect(res.statusCode).toBe(200);
});

it('should reply the POST method /activities with status code 400 if data not send', async () => {
  const res = await request(server).post('/activities');
  expect(res.statusCode).toBe(400);
});