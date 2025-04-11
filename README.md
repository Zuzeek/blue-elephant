# Random Name and Email Generator

This project is a simple application that generates random names and email addresses. It consists of a Node.js backend and a React frontend.

## Project Structure

```
random-name-email-generator
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── routes
│   │   │   └── generator.js
│   │   └── utils
│   │       └── randomGenerator.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   └── Generator.js
│   │   ├── services
│   │   │   └── api.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

The backend will be running on `http://localhost:5000`.

## Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React application:
   ```
   npm start
   ```

The frontend will be running on `http://localhost:3000`.

## API Usage

The backend provides the following endpoints:

- `GET /api/generate-name`: Generates a random name.
- `GET /api/generate-email`: Generates a random email address.

You can use these endpoints in the frontend to fetch random names and emails.

## License

This project is licensed under the MIT License.