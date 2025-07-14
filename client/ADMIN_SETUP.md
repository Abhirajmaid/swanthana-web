# Swanthana Admin Dashboard Setup Guide

This guide will help you set up and configure the admin dashboard for managing Swanthana blog posts with Firebase integration.

## Prerequisites

- Firebase account (free tier is sufficient)
- Node.js and npm installed
- Basic understanding of Firebase and React/Next.js

## 🔥 Firebase Setup

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter project name: `swanthana-web` (or your preferred name)
4. Enable Google Analytics (optional)
5. Click "Create project"

### 2. Set up Firestore Database

1. In Firebase Console, navigate to **Firestore Database**
2. Click **Create database**
3. Choose **Start in test mode** (for development)
4. Select a location closest to your users
5. Click **Done**

### 3. Set up Authentication

1. Navigate to **Authentication** → **Sign-in method**
2. Enable **Email/Password** authentication
3. Click **Save**

### 4. Create Admin User

1. Go to **Authentication** → **Users**
2. Click **Add user**
3. Enter email: `admin@swanthana.com` (or your preferred admin email)
4. Enter a strong password
5. Click **Add user**

### 5. Get Firebase Configuration

1. Go to **Project settings** (gear icon)
2. Scroll down to **Your apps**
3. Click **Web app** icon (`</>`)
4. Register app name: `swanthana-admin`
5. Copy the config object

## 🔧 Environment Configuration

### 1. Create Environment File

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

Replace the values with your actual Firebase configuration from step 5 above.

### 2. Update Admin Emails

Edit `client/src/lib/authService.js` and update the admin emails list:

```javascript
const adminEmails = [
  "admin@swanthana.com",
  "manager@swanthana.com",
  // Add more admin emails as needed
];
```

## 🚀 Running the Application

### 1. Install Dependencies

```bash
cd client
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Access Admin Dashboard

1. Open browser and navigate to: `http://localhost:3000/admin/login`
2. Login with the admin credentials you created in Firebase
3. You should be redirected to the admin dashboard

## 📊 Initial Data Migration

### Option 1: Using the Migration Page (Recommended)

1. Navigate to: `http://localhost:3000/admin/migrate`
2. Click **Start Migration** to transfer existing blog data to Firebase
3. Wait for the migration to complete
4. Verify blogs in the admin dashboard

### Option 2: Manual Migration (Development)

1. Open browser console on any admin page
2. Run: `migrateBlogsToFirebase()`
3. Monitor the console for migration progress

## 🎯 Admin Dashboard Features

### Dashboard Overview

- **Stats Cards**: Total blogs, monthly publications, author count
- **Quick Actions**: Create new blog, manage existing blogs
- **Recent Blogs**: Latest blog posts with edit/view links

### Blog Management

- **Create Blog**: Rich form with title, content, author, image, etc.
- **Edit Blog**: Modify existing blog posts
- **Delete Blog**: Remove unwanted blog posts
- **Search/Filter**: Find blogs by title, author, or content

### Blog Fields

- **Title**: Blog post title (auto-generates slug)
- **Slug**: URL-friendly identifier
- **Author**: Author name
- **Date**: Publication date
- **Image**: Featured image URL
- **Excerpt**: Brief description for blog listing
- **Content**: Main blog content (supports paragraph formatting)

## 🔒 Security & Permissions

### Firestore Security Rules

Update your Firestore security rules for production:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read access for blogs
    match /blogs/{document} {
      allow read: if true;
      allow write: if request.auth != null &&
        request.auth.token.email in ['admin@swanthana.com', 'manager@swanthana.com'];
    }
  }
}
```

### Authentication Rules

- Only users with emails in the `adminEmails` array can access admin features
- All other users are redirected to the login page
- Authentication state is managed globally via React Context

## 🌐 Frontend Integration

The public blog pages automatically fetch data from Firebase:

- **Blog Listing**: `/blogs` - Shows all published blogs
- **Individual Blog**: `/blogs/[slug]` - Shows specific blog content
- **Loading States**: Proper loading indicators while fetching data
- **Error Handling**: Graceful error handling for missing blogs

## 🛠️ Customization

### Adding New Admin Features

1. Create new admin pages in `client/app/admin/`
2. Add navigation items to `client/src/components/AdminSidebar.jsx`
3. Protect routes with `ProtectedRoute` component

### Styling Customization

- Main styles: Tailwind CSS classes
- Admin theme: Blue color scheme (`blue-600`, `blue-700`)
- Responsive design: Mobile-first approach

### Adding Rich Text Editor

For better content editing, consider adding a rich text editor:

```bash
npm install react-quill
```

Then replace the textarea in blog forms with the rich text editor component.

## 📱 Mobile Responsiveness

The admin dashboard is fully responsive:

- **Desktop**: Full sidebar navigation
- **Mobile**: Collapsible sidebar with hamburger menu
- **Tablet**: Adaptive layout with proper spacing

## 🚨 Troubleshooting

### Common Issues

1. **Firebase not initialized**

   - Check environment variables in `.env.local`
   - Verify Firebase config values

2. **Authentication errors**

   - Ensure admin email is in the `adminEmails` array
   - Check Firebase Authentication is enabled

3. **Firestore permission denied**

   - Update Firestore security rules
   - Ensure user is authenticated

4. **Blog not found errors**
   - Run the migration script to populate database
   - Check Firestore collection name matches `BLOGS_COLLECTION`

### Debug Mode

Enable debug logging by adding to your environment:

```env
NEXT_PUBLIC_DEBUG=true
```

## 📈 Production Deployment

### 1. Build Application

```bash
npm run build
```

### 2. Update Firestore Rules

Replace test mode rules with production-ready security rules.

### 3. Environment Variables

Set up environment variables in your hosting platform (Vercel, Netlify, etc.).

### 4. Admin Access

Ensure admin users are created in Firebase Authentication before deployment.

## 🎉 Success!

You should now have a fully functional admin dashboard for managing Swanthana blog posts. The system includes:

- ✅ Firebase Firestore database integration
- ✅ Admin authentication and authorization
- ✅ Complete CRUD operations for blogs
- ✅ Responsive admin interface
- ✅ Public blog pages reading from Firebase
- ✅ Data migration tools
- ✅ Search and filtering capabilities

For support or questions, please refer to the Firebase documentation or contact your development team.
