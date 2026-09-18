// 1. Import the express library
import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2. Create an instance of an Express application
const app = express();

// 3. Define the port the server will run on
const port = 3000;


// Mount middleware
app.use(express.static('public'));
app.use(express.json());

// 4. Define a route handler for GET requests to the root URL ('/')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contact.html'));
});
// 5. Start the server and have it listen for incoming connections
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});