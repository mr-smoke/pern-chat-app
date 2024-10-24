# Chat App - Fullstack

![Banner](https://i.ibb.co/RP6K7wm/banner.png)

## Table of Contents

- [About The Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About The Project

Chat App is a full-stack chat application built with React, Node.js, Express.js, Prisma, PostgreSQL, Zustand, Socket.io, and Tailwind CSS. This project provides a platform for users to engage in real-time conversations. It includes user authentication and authorization, allowing users to manage their own conversations while ensuring data privacy. The application leverages the power of React for building a dynamic and responsive user interface, Prisma for a flexible and scalable database solution, PostgreSQL for reliable and robust data storage, Express.js for handling server-side logic and API endpoints, Zustand for state management, Socket.io for real-time communication, and Tailwind CSS for styling and responsive design.

### Larger Devices

- Click to play the gif.

<a href="https://i.ibb.co/gdyNSsB/chat-app.gif" target="_blank"><img src="https://i.ibb.co/kJKj4YW/chat-app.gif" alt="blog-app" border="0" /></a>

### Smaller Devices

- Click to play the gif.

<a href="https://i.ibb.co/GMBGfZQ/mobile-chat-app.gif" target="_blank"><img src="https://i.ibb.co/gWHQb0Z/mobile-chat-app.gif" alt="blog-app" border="0" /></a>

### Key Use Cases:

- User authentication and authorization.
- Real-time messaging with Socket.io.
- Search functionality to find conversations easily.
- Display online users.
- Real-time message animations and notifications.
- Infinite scroll for better performance and seamless data loading.
- Efficient data management and querying with Prisma.
- State management using Zustand for a predictable and maintainable state.
- User-friendly and responsive interface built with Tailwind CSS.
- Real-time updates.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mr-smoke/pern-chat-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pern-chat-app
   ```

3. Install the [dependencies](#dependencies) for the backend:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory and add the necessary environment variables.

   ```bash
   DATABASE_URL=your_database_connection_string
   JWT_SECRET=your_jwt_key
   NODE_ENV=development
   PORT=3000
   ```

5. Start the backend development server:

   ```bash
   npm run dev
   ```

6. Open a new terminal and navigate to the frontend directory in project:

   ```bash
   cd pern-chat-app/frontend
   ```

7. Install the [dependencies](#dependencies) for the frontend:

   ```bash
   npm install
   ```

8. Start the frontend development server:

   ```bash
   npm run dev
   ```

Now both the backend and frontend servers should be running, and you can use the application.

## Usage

To use the chat app, follow these steps:

1. Open your browser and navigate to `http://localhost:5173`.
2. Register for a new account or log in with an existing account.
3. Choose a user and start the conversation.

### Example Commands

- To add a new conversation:

  1. Search for user you want to chat with using search bar.
  2. Type a message and start the chat.

## Features

- **Authentication**: Secure login and session management using JSON Web Tokens (JWT). Includes login, logout, and sign up functionality.
- **Real-time Messaging**: Real-time communication using Socket.io, allowing users to send and receive messages instantly without page reloads.
- **Search Functionality**: Easily search through conversations to quickly find specific users.
- **Online Users**: Display online users in real-time, providing visibility into who is currently active and available for chat.
- **Message Animations and Notifications**: Real-time message animations and notifications to enhance user experience.
- **Infinite Scroll**: Seamless data loading with infinite scroll for better performance.
- **Prisma Integration**: Efficient data management and querying with Prisma, providing a robust and scalable database interact.
- **Database Integration**: PostgreSQL for reliable and robust data storage, ensuring data integrity and performance.
- **State Management**: Efficient state management using Zustand, which simplifies the handling of application state and improves performance.
- **Server-side Rendering**: Improved performance and SEO with server-side rendering using Express.js.
- **Error Handling**: Comprehensive error handling and validation to ensure data integrity and provide meaningful feedback to users.
- **Security**: Implemented security best practices, including password hashing, input validation, and secure authentication mechanisms.
- **TypeScript**: Strongly typed programming language that builds on JavaScript, providing better tooling at any scale.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Real-time Updates**: Dynamic updates without page reloads.

## Technologies Used

- [![React][React.js]][React-url]
- [![Express][Express.js]][Express-url]
- [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
- [![Node][Node.js]][Node-url]
- [![Prisma][Prisma]][Prisma-url]
- [![Socket][Socket.io]][Socket-url]
- [![Zustand][Zustand]][Zustand-url]
- [![Tailwind][Tailwind.css]][Tailwind-url]

## Dependencies

### Backend Dependencies

- **@prisma/client**: Prisma Client for database access.
- **bcrypt**: For hashing passwords and ensuring secure authentication.
- **cookie-parse**: Parse HTTP request cookies.
- **dotenv**: Load environment variables from a .env file.
- **express**: Web framework for Node.js.
- **jsonwebtoken**: For generating and verifying JSON Web Tokens.
- **prisma**: For data management and querying.
- **socket.io**: For real-time communication.

### Frontend Dependencies

- **react**: JavaScript library for building user interfaces.
- **react-dom**: Entry point of the DOM-related rendering paths.
- **react-hot-toast**: React component for displaying toast notifications.
- **react-icons**: Include popular icons in your React projects easily.
- **react-router-dom**: DOM bindings for React Router.
- **socket-io-client**: Client library for Socket.io.
- **zustand**: State management library.

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Contact

For questions or feedback, feel free to reach out:

- Email: [muhammetbakiduman@gmail.com](mailto:muhammetbakiduman@gmail.com)
- LinkedIn: [Baki Duman](https://www.linkedin.com/in/muhammet-baki-duman-019451195/)

---

[React.js]: https://img.shields.io/badge/react-000000?style=for-the-badge&logo=react&logoColor=white
[React-url]: https://react.dev
[Express.js]: https://img.shields.io/badge/express-20232A?style=for-the-badge&logo=express&logoColor=61DAFB
[Express-url]: https://expressjs.com
[PostgreSQL]: https://img.shields.io/badge/postgresql-000000?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org
[Node.js]: https://img.shields.io/badge/nodejs-20232A?style=for-the-badge&logo=nodedotjs&logoColor=61DAFB
[Node-url]: https://nodejs.org/en
[Prisma]: https://img.shields.io/badge/prisma-000000?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io
[Socket.io]: https://img.shields.io/badge/Socket.io-20232A?style=for-the-badge&logo=Socket.io&logoColor=61DAFB
[Socket-url]: https://socket.io
[Zustand]: https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=Zustand&logoColor=white
[Zustand-url]: https://zustand-demo.pmnd.rs
[Tailwind.css]: https://img.shields.io/badge/tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=61DAFB
[Tailwind-url]: https://tailwindcss.com
