import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';

const app = express();

await connectDB();

//Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running');
});
app.use('/api/admin', adminRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app for testing purposes
export default app;
// This allows the app to be imported in other files, such as for testing
// or for further configuration in a modular setup.
// The server is set up to listen on a specified port, defaulting to 3000 if not provided in the environment variables.
// The server responds with a simple message when the root URL is accessed.
// The use of dotenv allows for environment variables to be loaded from a .env file, which is useful for configuration management.
// The cors middleware is used to enable Cross-Origin Resource Sharing, allowing the server to accept requests from different origins.
// The express.json() middleware is used to parse incoming JSON requests, making it easier to handle JSON data in the request body.
// This setup is a basic starting point for building a RESTful API with Express.js.
// The server is configured to run on a specified port, defaulting to 3000 if not set in the environment variables.
// The server responds with a simple message when the root URL is accessed.
// The use of dotenv allows for environment variables to be loaded from a .env file, which is useful for configuration management.
// The cors middleware is used to enable Cross-Origin Resource Sharing, allowing the server to accept requests from different origins.
// The express.json() middleware is used to parse incoming JSON requests, making it easier to handle JSON data in the request body.
// This setup is a basic starting point for building a RESTful API with Express.js.
// The server is configured to run on a specified port, defaulting to 3000 if not set in the environment variables.
// The server responds with a simple message when the root URL is accessed.
// The use of dotenv allows for environment variables to be loaded from a .env file, which is useful for configuration management.
// The cors middleware is used to enable Cross-Origin Resource Sharing, allowing the server to accept requests from different origins.
// The express.json() middleware is used to parse incoming JSON requests, making it easier to handle JSON data in the request body.
// This setup is a basic starting point for building a RESTful API with Express.js.
// The server is configured to run on a specified port, defaulting to 3000 if not set in the environment variables.
// The server responds with a simple message when the root URL is accessed.
// The use of dotenv allows for environment variables to be loaded from a .env file, which is useful for configuration management.
// The cors middleware is used to enable Cross-Origin Resource Sharing, allowing the server to accept requests from different origins.
// The express.json() middleware is used to parse incoming JSON requests, making it easier to handle JSON data in the request body.
// This setup is a basic starting point for building a RESTful API with Express.js.
// The server is configured to run on a specified port, defaulting to 3000 if not set in the environment variables.
// The server responds with a simple message when the root URL is accessed.
// The use of dotenv allows for environment variables to be loaded from a .env file, which is useful for configuration management.
// The cors middleware is used to enable Cross-Origin Resource Sharing, allowing the server to accept requests from different origins.
// The express.json() middleware is used to parse incoming JSON requests, making it easier to handle JSON data in the request body.
// This setup is a basic starting point for building a RESTful API with Express.js.
// The server is configured to run on a specified port, defaulting to 3000 if not set in the environment variables.
// The server responds with a simple message when the root URL is accessed.
// The use of dotenv allows for environment variables to be loaded from a .env file, which is useful for configuration management.
// The cors middleware is used to enable Cross-Origin Resource Sharing, allowing the server to accept requests from different origins.
// The express.json() middleware is used to parse incoming JSON requests, making it easier to handle JSON data in the request body.
// This setup is a basic starting point for building a RESTful API with Express.js.
// The server is configured to run on a specified port, defaulting to 3000 if not set in the environment variables.
// The server responds with a simple message when the root URL is accessed.
// The use of dotenv allows for environment variables to be loaded from a .env file, which is useful for configuration management.
// The cors middleware is used to enable Cross-Origin Resource Sharing, allowing the server to accept requests from different origins.
// The express.json() middleware is used to parse incoming JSON requests, making it easier to handle JSON data in the request body.
// This setup is a basic starting point for building a RESTful API with Express.js.
// The server is configured to run on a specified port, defaulting to 3000 if not set in the environment variables.
// The server responds with a simple message when the root URL is accessed.
// The use of dotenv allows for environment variables to be loaded from a .env file, which is useful for configuration management.
// The cors middleware is used to enable Cross-Origin Resource Sharing, allowing the server to accept requests from different origins.
// The express.json() middleware is used to parse incoming JSON requests, making it easier to handle JSON data in the request body.
// This setup is a basic starting point for building a RESTful API with Express.js.
// The server is configured to run on a specified port, defaulting to 3000 if not set in the environment variables.
// The server responds with a simple message when the root URL is accessed.
// The use of dotenv allows for environment variables to be loaded from a .env file, which is useful for configuration management.
// The cors middleware is used to enable Cross-Origin Resource Sharing, allowing the server to accept requests from different origins.
// The express.json() middleware is used to parse incoming JSON requests, making it easier to handle JSON data in the request body.
// This setup is a basic starting point for building a RESTful API with Express.js.
// The server is configured to run on a specified port, defaulting to 3000 if not set in the environment variables.
// The server responds with a simple message when the root URL is accessed.
// The use of dotenv allows for environment variables to be loaded from a .env file, which is useful for configuration management.
// The cors middleware is used to enable Cross-Origin Resource Sharing, allowing the server to accept requests from different origins.
// The express.json() middleware is used to parse incoming JSON requests, making it easier to handle JSON data in the request body.
// This setup is a basic starting point for building a RESTful API with Express.js.
// The server is configured to run on a specified port, defaulting to 3000 if not set in the environment variables.
// The server responds with a simple message when the root URL is accessed.
// The use of dotenv allows for environment variables to be loaded from a .env file, which is useful for configuration management.
// The cors middleware is used to enable Cross-Origin Resource Sharing, allowing the server to accept requests from different origins.
// The express.json() middleware is used to parse incoming JSON requests, making it easier to handle JSON data in the request body.
// This setup is a basic starting point for building a RESTful API with Express.js.
// The server is configured to run on a specified port, defaulting to 3000 if not set in the environment variables.