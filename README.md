# MERN Estate

Welcome to MERN Estate, a full-stack web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. This project enables users to explore real estate listings, view property details, contact the listing agent, and update their profiles.

## Live Demo

Check out the live demo of MERN Estate [here](https://mern-estate-lqkc.onrender.com).

https://github.com/TejasPatne/mern-estate/assets/107361404/a3987981-0843-4268-828d-195791b12625

### Test Credentials

  Feel free to use the following test credentials to explore and test the website:
  
  - **User Email:** test@gmail.com
  - **Password:** test


## Features

- **User Authentication:** Secure user authentication using JWT tokens and Firebase OAuth (Google authentication).
- **Property Listings:** Browse through a list of available real estate properties with infinite scroll for seamless loading.
- **Property Details:** View detailed information about each property, including images, price, and specifications.
- **Contact Agent:** Interested in


 a property? Contact the listing agent via the provided contact form.
- **State Management:** Utilizes Redux Toolkit for efficient global state management.
- **Protected Routes:** Ensures a secure user experience with protected routes and pages.
- **Profile Update:** Users can update their profiles with personalized information.
- **Advanced Search:** A modern sidebar enables users to perform advanced searches, allowing them to search by title, limit search results, and apply sorting options.

## Infinite Scroll

The application implements an infinite scroll feature for property listings. Instead of traditional pagination, where you click through pages, this feature allows you to continuously load more listings as you scroll down the page, providing a seamless and user-friendly experience.

## Firebase Image Storage and Google OAuth Integration

- **Firebase Image Storage:** Property images are securely stored using Firebase Storage, ensuring efficient and reliable access to images for the listings.

- **Google OAuth Integration:** User authentication is handled seamlessly through Firebase Authentication, allowing users to log in securely using their Google credentials. This integration enhances security and simplifies the user login experience.

## Redux Toolkit for Global State Management

- **Redux Toolkit:** The application utilizes Redux Toolkit for global state management, providing a predictable and efficient way to manage the application's state.

## Protected Routes and Pages

- **Protected Routes:** Certain routes and pages are protected to ensure that only authenticated users can access them. This enhances the overall security of the application and protects sensitive information.

## Profile Update

- **Profile Update:** Users have the ability to update their profiles, allowing them to personalize and manage their information within the application.

## Advanced Search

- **Advanced Search:** The application features a modern sidebar with advanced search functionality, enabling users to search by title, limit search results, and apply sorting options to find properties that match their criteria.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```
   git clone https://github.com/TejasPatne/mern-estate.git
   cd mern-estate
   ```

2. **Create a .env file in the root folder:**

   ```
   PORT=5000
   MONGODB_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   ```
   Replace <Your MongoDB URI> and <Your JWT Secret> with your actual MongoDB connection string and a secret key for JWT token generation.

3. **Create a .env file in the client folder:**

   ```
   VITE_FIREBASE_API_KEY=your_actual_api_key
   ```

4. **Install Dependencies and Run the Application:**

   In the root folder:
   ```
   npm install
   npm run dev
   ```
   This command will install the necessary dependencies for both the API (backend) and the client (frontend) and run them concurrently.

5. **Create a New Terminal and Navigate to the Client Folder:**

   ```
   cd client
   npm install
   npm run dev
   ```
   
## Technologies Used

### Frontend:

- React with Tailwind CSS for styling
- Fetch for API requests
- Redux Toolkit for state management
- Redux Persist for persisting the Redux state
- Firebase for OAuth (Google authentication) and image storage
- Vite for the frontend build system

### Backend:

- Node.js
- Express.js
- MongoDB for the database
- Mongoose ODM for MongoDB interactions
- JSON Web Tokens (JWT) for authentication

## Acknowledgements

A special thank you to Sahand, the creator of the tutorial on the [React & Next js Projects with Sahand](https://www.youtube.com/@reactproject) YouTube channel. This project was inspired and built based on his insightful tutorial.

I deeply appreciate the effort and dedication put into creating educational content that has empowered developers like me to bring this project to life.

Thank you, Sahand!


If you find this project helpful or have any suggestions for improvement, please feel free to share your feedback.

## Show Your Support

If you find this project helpful or interesting, your support would mean a lot! Please consider giving it a star [🌟](https://github.com/TejasPatne/mern-estate).

