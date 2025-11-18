# Swanthana Rehabilitation Center - Website

A modern, responsive website for Swanthana Rehabilitation Center, built with Next.js. The platform showcases the center's services, success stories, blog posts, and provides an admin dashboard for content management.

## 🚀 Features

- **Public Website**

  - Homepage with hero section, services, and impact stories
  - Blog posts and articles
  - Treatment and disorder information
  - Success stories and testimonials
  - Doctor profiles
  - Gallery and annual reports
  - Contact and donation pages
  - Responsive design for all devices

- **Admin Dashboard**

  - Secure authentication with Firebase
  - Blog management (Create, Read, Update, Delete)
  - Donation tracking
  - Content migration tools
  - Protected routes and role-based access

- **Analytics**
  - Google Analytics integration for tracking user interactions

## 🛠️ Technologies

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Backend**: Firebase (Firestore, Authentication)
- **Icons**: Lucide React
- **Carousel**: Swiper
- **Font**: DM Sans (Google Fonts)

## 📋 Prerequisites

- Node.js 18+ and npm
- Firebase account (for admin features)
- Google Analytics account (optional, for analytics)

## 🔧 Getting Started

### 1. Install Dependencies

```bash
cd client
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the `client` directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
client/
├── app/
│   ├── (admin)/          # Admin dashboard routes
│   │   └── admin/        # Admin pages (login, dashboard, blogs, etc.)
│   ├── (primary)/        # Public website routes
│   │   ├── about-us/
│   │   ├── blogs/
│   │   ├── contact-us/
│   │   ├── donate/
│   │   └── ...
│   └── layout.jsx        # Root layout with Google Analytics
├── src/
│   ├── components/       # React components
│   │   ├── common/      # Shared components (Navbar, Footer)
│   │   └── home/        # Homepage sections
│   ├── contexts/        # React contexts (AuthContext)
│   ├── data/            # Static data files
│   ├── lib/             # Utilities and services
│   │   ├── firebase.js  # Firebase configuration
│   │   ├── authService.js
│   │   └── blogService.js
│   └── constants/       # Constants and configuration
└── public/              # Static assets (images, videos)
```

## 🔐 Admin Setup

For detailed instructions on setting up the admin dashboard, Firebase configuration, and authentication, see [ADMIN_SETUP.md](./ADMIN_SETUP.md).

## 📊 Google Analytics

Google Analytics (gtag.js) is integrated into the root layout. The tracking ID `G-BHGX3XRDKX` is configured to track page views and user interactions across the website.

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set all Firebase environment variables in your hosting platform:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is private and proprietary.
