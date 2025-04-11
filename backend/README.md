# Random Name and Email Generator Backend

This is the backend part of the Random Name and Email Generator project. It is built using Node.js and Express.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/random-name-email-generator.git
   cd random-name-email-generator/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   npm install axios --save
   npm install cors
   ```

3. **Run the server:**
   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

### Generate Random Name

- **Endpoint:** `/api/name`
- **Method:** `GET`
- **Description:** Generates a random name.
- **Response:**
  ```json
  {
    "name": "John Doe"
  }
  ```

### Generate Random Email

- **Endpoint:** `/api/email`
- **Method:** `GET`
- **Description:** Generates a random email address.
- **Response:**
  ```json
  {
    "email": "johndoe@example.com"
  }
  ```

## Folder Structure

- `src/app.js`: Entry point for the backend application.
- `src/routes/generator.js`: Defines the API routes for generating random names and emails.
- `src/utils/randomGenerator.js`: Contains utility functions for generating random names and emails.

## License

This project is licensed under the MIT License.