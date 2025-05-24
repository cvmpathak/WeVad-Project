# WeVad Media

WeVad Media is a modern React application designed for digital brand management and social media growth. It features a clean UI, responsive design, and leverages popular libraries such as React Router, React Icons, Tailwind CSS, and Framer Motion. The app demonstrates routing, component-based architecture, and scalable TypeScript usage.

---

## Features

- **Modern React (v18+) with TypeScript**
- **Routing** with React Router v6
- **Reusable Components** for services, navigation, and more
- **Responsive Design** using Tailwind CSS
- **Animated UI** with Framer Motion
- **Form Handling** with React Hook Form
- **Social Media Icons** via React Icons and FontAwesome
- **404 Not Found Page** for undefined routes
- **Strict Type Checking** with TypeScript

---

## Project Structure

```
my-react-app
├── src
│   ├── App.tsx             # Main component that sets up routing and layout
│   ├── index.tsx           # Entry point of the application
│   ├── components          # Reusable UI components (e.g., Navbar, Footer, ServicesSection)
│   ├── pages
│   │   ├── Home.tsx        # Home page component
│   │   └── NotFound.tsx    # Not Found (404) page component
│   └── types
│       └── index.ts        # TypeScript types and interfaces
├── public
│   └── index.html          # HTML template
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # Project documentation
```

---

## Tech Stack

- **React** `^18.3.1`
- **TypeScript** `^4.9.5`
- **React Router DOM** `^6.0.0`
- **React Icons** `^5.5.0`
- **FontAwesome** `^6.7.2`
- **Tailwind CSS** `^2.0.0`
- **Framer Motion** `^12.12.2`
- **React Hook Form** `^7.0.0`
- **Lucide React** `^0.511.0`

---

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd my-react-app
npm install
```

---

## Running the Application

To run the application in development mode, use:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Building for Production

To build the application for production, use:

```bash
npm run build
```

This will create an optimized build of the application in the `build` directory.

---

## Folder Highlights

- **`src/components/`**: Contains reusable UI components (e.g., Navbar, Footer, ServicesSection).
- **`src/pages/`**: Contains main page components (Home, NotFound).
- **`src/types/`**: Contains TypeScript type definitions for props and data models.

---

## Customization

- **Add new pages** in `src/pages/` and update routing in `App.tsx`.
- **Add new services or features** by creating new components in `src/components/`.
- **Style** using Tailwind CSS utility classes or extend the Tailwind config.

---

## License

This project is licensed under the MIT License.