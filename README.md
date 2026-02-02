# Instagram Login Clone

A React-based web application that replicates the Instagram login and signup experience, featuring responsive design and modern UI components.

## Description

This project is a front-end clone of Instagram's authentication pages, built with React and Vite. It includes login and signup functionality with form validation, local storage for user data, and routing between pages. The design closely mimics Instagram's branding and user interface.

## Features

- User login with email/username and password
- User registration with email, full name, username, and password
- Responsive design for mobile and desktop
- Form validation and error handling
- Local storage for user data persistence
- React Router for navigation
- Instagram-inspired UI with gradient backgrounds and clean styling

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Styling:** CSS
- **State Management:** React Hooks (useState, useEffect)
- **Development:** ESLint for code linting

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd instagram-login
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

- Navigate to the login page to sign in with existing credentials
- Click on the signup link to create a new account
- Form data is stored locally in the browser's localStorage
- After successful signup, users are redirected to the login page

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
instagram-login/
├── public/
├── src/
│   ├── components/
│   │   ├── LoginPage.jsx
│   │   └── SignupPage.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Development

This project uses Vite for fast development and hot module replacement. The application is structured with reusable components and follows React best practices.

### Key Components

- **LoginPage:** Handles user authentication
- **SignupPage:** Manages user registration
- **App:** Main application component with routing

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is for educational purposes only and is not affiliated with Instagram or Meta Platforms, Inc.

## Disclaimer

This is a demonstration project and should not be used for actual user authentication in production. Real-world applications should implement proper security measures, server-side validation, and secure data storage.
