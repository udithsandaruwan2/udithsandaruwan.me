# Portfolio & LMS - Udith Sandaruwan

A modern, responsive portfolio website with an integrated Learning Management System (LMS) for students. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

### Portfolio Website
- 🎨 **Modern Black Theme** - Sleek, professional design inspired by contemporary web aesthetics
- 🏠 **Hero Section** - Eye-catching introduction with your photo and professional title
- 💼 **Projects Showcase** - Display your best backend and fullstack projects
- 📊 **Experience Timeline** - Interactive timeline of your professional journey
- 🎓 **Education & Certifications** - Academic background and professional achievements
- 💬 **Student Testimonials** - Real feedback from your students
- 📱 **Fully Responsive** - Perfect on all devices from mobile to desktop

### Student LMS Dashboard
- 📚 **Course Modules** - Organized learning materials with progress tracking
- 📥 **Downloadable Materials** - PDFs, videos, code examples, and more
- 📊 **Progress Tracking** - Visual progress bars for each module
- ⭐ **Testimonial System** - Students can leave feedback and ratings
- 🔒 **Authentication** - Login and registration system (frontend only)
- 🎯 **Module Status** - Completed, In Progress, and Locked states

## Tech Stack

- **React** - UI library
- **Vite** - Fast build tool and dev server
- **React Router** - SPA routing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites
- Node.js 18+ (or use nvm to switch versions)

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Adding Your Photo

Replace the placeholder in `src/components/Hero.jsx`:

1. Add your photo to `public/` folder (e.g., `public/profile.jpg`)
2. In `Hero.jsx`, uncomment and update the image section:

```jsx
<img 
  src="/profile.jpg" 
  alt="Udith Sandaruwan"
  className="w-full h-full object-cover"
/>
```

### Customizing Content

- **Personal Info**: Edit `src/components/Hero.jsx`
- **Projects**: Modify the projects array in `src/components/Projects.jsx`
- **Experience**: Update experiences in `src/components/Experience.jsx`
- **Education**: Edit education data in `src/components/Education.jsx`
- **Testimonials**: Modify testimonials in `src/components/Testimonials.jsx`
- **LMS Modules**: Update modules in `src/pages/Dashboard.jsx`

### Colors and Theme

The color scheme is defined in `tailwind.config.js`:

```js
colors: {
  dark: {
    bg: '#0a0a0a',
    card: '#111111',
    border: '#222222',
  }
}
```

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── Dashboard.jsx
│   ├── context/        # React context
│   │   └── AuthContext.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Features to Implement (Backend)

This is currently a frontend-only implementation. To make it fully functional, you'll need to implement:

1. **Authentication API**
   - User registration endpoint
   - Login endpoint with JWT tokens
   - Password hashing and validation

2. **LMS API**
   - Course modules CRUD
   - File upload and storage (AWS S3, Cloudinary, etc.)
   - Progress tracking
   - Testimonial submission and approval

3. **Database**
   - User schema
   - Course modules schema
   - Progress tracking schema
   - Testimonials schema

## Mock Data

The application currently uses mock data for:
- User authentication (any email/password will work)
- Course modules and materials
- Download functionality (alerts instead of actual downloads)
- Testimonial submission (console logs)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy!

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms

The built files in `dist/` can be deployed to any static hosting service.

## License

MIT

## Author

**Udith Sandaruwan**
- Fullstack Developer
- Backend Specialist
- Instructor

---

**Note**: This is a frontend implementation. For a complete application, integrate with a backend API.

