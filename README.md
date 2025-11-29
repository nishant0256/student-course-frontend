# Student Course Frontend

A modern React-based frontend application for managing students and courses. Built with Vite for fast development and Tailwind CSS for styling.

## Features

- **Dashboard**: Overview of the application
- **Student Management**: View and manage student information
- **Course Management**: Handle course details and enrollments
- Responsive design with Tailwind CSS
- API integration using Axios

## Tech Stack

- **React**: UI library for building user interfaces
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API requests

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd student-course-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (default Vite port).

## Usage

- Navigate to `/dashboard` for the main overview
- Go to `/students` to manage student data
- Visit `/courses` to handle course information

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run preview`: Preview the production build locally

## Project Structure

```
src/
├── api/
│   └── api.js          # API configuration and calls
├── components/
│   └── Navbar.jsx      # Navigation component
├── pages/
│   ├── Dashboard.jsx   # Dashboard page
│   ├── Student.jsx     # Student management page
│   └── Course.jsx      # Course management page
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and not licensed for public use.
