# Random Name and Email Generator

This project is a simple application that generates random names and email addresses using a Node.js backend and a React frontend.

## Project Structure

```
random-name-email-generator
├── backend
│   ├── src
│   │   ├── app.js          # Entry point for the Node.js backend
│   │   ├── routes
│   │   │   └── generator.js # API routes for generating random data
│   │   └── utils
│   │       └── randomGenerator.js # Utility functions for generating random names and emails
│   ├── package.json        # Backend dependencies and scripts
│   └── README.md           # Documentation for the backend
├── frontend
│   ├── public
│   │   └── index.html      # Main HTML file for the React application
│   ├── src
│   │   ├── App.js          # Main component of the React application
│   │   ├── components
│   │   │   └── Generator.js # Component for generating random names and emails
│   │   ├── services
│   │   │   └── api.js      # API service for making requests to the backend
│   │   └── index.js        # Entry point for the React application
│   ├── package.json        # Frontend dependencies and scripts
│   └── README.md           # Documentation for the frontend
└── README.md               # Overview of the entire project
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/random-name-email-generator.git
   ```

2. Navigate to the backend directory and install dependencies:

   ```
   cd random-name-email-generator/backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:

   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:

   ```
   cd backend
   npm start
   ```

2. In a new terminal, start the frontend application:

   ```
   cd frontend
   npm start
   ```

#### Troubleshooting
SSL issues
```log
library: 'digital envelope routines',
reason: 'unsupported',
code: 'ERR_OSSL_EVP_UNSUPPORTED'
```

Add the following environment variable to bypass the OpenSSL issue:
```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

You can run this command in your terminal before starting the React app:
```bash
export NODE_OPTIONS=--openssl-legacy-provider && npm start
```

3. Open your browser and go to `http://localhost:3000` to access the application.

### Usage

- Use the interface provided in the frontend to generate random names and email addresses.
- The frontend communicates with the backend API to fetch the generated data.

### Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.