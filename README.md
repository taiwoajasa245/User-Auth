# User Auth

This project is a full-stack web application built with React, Vite, and Node.js. It provides functionality for user registration, login, and a dashboard page. User authentication is implemented using JSON Web Tokens (JWT) and password encryption with bcrypt.

## Features

- **User Registration:** Users can sign up for an account by providing necessary information such as username, email, and password.
- **User Login:** Registered users can log in to the application using their credentials.
- **Dashboard:** Authenticated users are redirected to a dashboard page upon successful login.
- **JWT Authentication:** JSON Web Tokens are used for user authentication, ensuring secure communication between the frontend and backend.
- **Password Encryption:** User passwords are hashed using bcrypt before being stored in the database, ensuring security and confidentiality.

## Tech Stack

- **Frontend:**
  - React - JavaScript library for building user interfaces.
  - Vite - Next-generation frontend tooling.
  - React Router - Declarative routing for React.
  - Axios - Promise-based HTTP client for making AJAX requests.
  
- **Backend:**
  - Node.js - JavaScript runtime environment.
  - Express.js - Web application framework for Node.js.
  - JSON Web Tokens (JWT) - Securely transmitting information between parties.
  - Bcrypt - Password hashing library for Node.js.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/taiwoajasa245/User-Auth.git
   ```

2. **Install dependencies:**

   ```bash

   # Navigate to the frontend directory
   cd client
   npm install

   # Navigate to the backend directory
   cd server
   npm install
   

   ```

3. **Set up environment variables:**

   Create a `.env` file in the `backend` directory and add the following variables:

   ```plaintext
   PORT = 4000
   DATABASE_URI = your_mongodbconnection string
   JWT_SECRET= your_jwt_secret

   ```

4. **Start the development servers:**

   ```bash
   # Start the frontend server
   cd client
   npm run dev

   # Start the backend server
   cd server
   npm run start

   ```

to get your own 

JWT_secret you run this command in your command line 

```bash  
    node  
    require('crypto').randomBytes(64).toString('hex')
```

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
