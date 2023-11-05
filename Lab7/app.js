const express = require('express');
const app = express();
// Define a route for the home page
app.get('/', (req, res) => {
 res.send('Hello, welcome to the home page!'); });
// Define a route for about page
app.get('/about', (req, res) => {
 res.send('This is the about page.'); });
// Define a route for contact page
app.get('/contact', (req, res) => {
 res.send('Contact us at example@example.com.'); });
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`); });
