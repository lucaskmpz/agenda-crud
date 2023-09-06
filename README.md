# CRUD Agenda Application

**Overview:**

The CRUD Agenda Application is a simple web application that enables users to manage their contacts. Users can sign up, log in, add, edit, and delete contacts. This README provides an overview of the application, lists the technologies used, outlines prerequisites, provides setup instructions, and explains how the application works.

**Technologies Used:**

- Node.js
- Express.js
- MongoDB (or your preferred database)
- HTML, CSS, and JavaScript
- Passport.js for authentication
- Express-Session for session management
- EJS for templating
- Flash messages for user feedback

**Prerequisites:**

Before you begin, ensure you have the following prerequisites installed:

- Node.js and npm: [Install Node.js](https://nodejs.org/)
- MongoDB (or your preferred database): [Install MongoDB](https://www.mongodb.com/try/download/community)

**Setup:**

Setting up the application:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/crud-agenda.git
   ```

2. **Install Dependencies:**

   Navigate to the project directory and install the necessary dependencies using npm:

   ```bash
   cd crud-agenda
   npm install
   ```

3. **Database Configuration:**

   Configure your database connection settings in the application code. You may need to set up a database and provide the connection details in the appropriate configuration files.

4. **Environment Variables:**

   Create an environment variable file (e.g., `.env`) with the following information:

   ```plaintext
   SESSION_SECRET=your_session_secret
   ```

   Replace `your_session_secret` with a secret key for session management.

5. **Run the Application:**

   Start the application using the following command:

   ```bash
   npm start
   ```

   The application will run on `http://localhost:3000` by default. You can access it in your web browser.

**How It Works:**

Application functionality:

- Registration: Users can sign up for an account with their credentials.
- Login: Registered users can log in to their accounts securely.
- Contact Management: Users can add, edit, and delete contact information, including name, lastname, email, and phone.
- User Authentication: The application ensures secure user authentication and authorization.
- Session Management: User sessions are maintained for a seamless experience.
- Flash Messages: Users receive informative flash messages for successful and unsuccessful operations.
- Logout: Users can log out of their accounts securely.
