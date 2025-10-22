# 🌿 GreenNest - Indoor Plant Care & Store

A fully functional React single-page application for plant lovers, featuring indoor plant shopping, care tips, and expert consultation booking.

## 🚀 Features

### Authentication

- ✅ Email/Password authentication with Firebase
- ✅ Google Sign-In integration
- ✅ Password validation (min 6 chars, 1 uppercase, 1 lowercase)
- ✅ Password show/hide toggle
- ✅ Forgot password with email reset
- ✅ Protected routes (Plant Details, Profile)

### Pages

#### Home Page

- Hero slider with Swiper.js (3 slides with nature backgrounds)
- Top Rated Indoor Plants section (plants with rating ≥ 4.7)
- Plant Care Tips (Watering, Sunlight, Fertilizing)
- Meet Our Green Experts section
- Plant of the Week bonus section

#### Plants Page

- Display all plants from `plant.json`
- Category filter buttons (All categories visible)
- Selected category has green background
- Grid layout with responsive design
- Plant cards with image, name, category, price, rating
- "View Details" button for each plant

#### Plant Details Page (Protected)

- Requires login to access
- Redirects to login then back after authentication
- Large plant image
- Full plant information (name, description, price, rating, stock, provider)
- Book Consultation form (Name, Email, Book Now button)
- Success toast on form submission with form clearing

#### Profile Page (Protected)

- Display user's name, email, and photo
- Update Profile functionality using Firebase `updateProfile()`
- Real-time profile updates

#### Auth Pages

- **Login**: Email/password, Google login, forgot password modal
- **Register**: Name, email, photo URL, password with validation, Google registration

### UI/UX

- Tailwind CSS + DaisyUI components
- Framer Motion animations
- React Toastify notifications
- Responsive design (mobile, tablet, desktop)
- Active route highlighting in navbar
- Smooth SPA navigation

### Navigation

- **Navbar**: Logo, Home/Plants/Profile links, conditional login/register or avatar dropdown
- **Footer**: Quick links, social media icons, copyright notice
- Both navbar and footer persist across all pages

## 🛠️ Tech Stack

| Technology            | Purpose             |
| --------------------- | ------------------- |
| React 19.1.1          | Frontend framework  |
| Vite 7.1.7            | Build tool          |
| React Router 7.9.4    | Routing             |
| Firebase 12.4.0       | Authentication      |
| Tailwind CSS 4.1.15   | Styling             |
| DaisyUI 5.3.7         | UI components       |
| React Toastify 11.0.5 | Toast notifications |
| Framer Motion         | Animations          |
| Swiper                | Hero slider         |
| React Icons           | Icons               |

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Running the Application

The application is now running at: **http://localhost:5174/**

## 📁 Project Structure

```
green-plant/
├── public/
│   └── plant.json              # Plant data
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Footer.jsx          # Footer
│   │   └── PrivateRoute.jsx    # Route protection
│   ├── context/
│   │   └── AuthContext.jsx     # Firebase auth context
│   ├── pages/
│   │   ├── Home.jsx            # Home page with hero & sections
│   │   ├── Plants.jsx          # Plants listing with filters
│   │   ├── PlantDetails.jsx   # Individual plant details
│   │   ├── Profile.jsx         # User profile
│   │   ├── Login.jsx           # Login page
│   │   └── Register.jsx        # Registration page
│   ├── firebase/
│   │   └── firebase.config.js  # Firebase configuration
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🔥 Firebase Configuration

Firebase is already configured in `src/firebase/firebase.config.js` with:

- Firebase Authentication (Email/Password + Google)
- Real-time auth state monitoring
- Profile updates with `updateProfile()`
- Password reset functionality

## ✨ Key Features Implemented

### Authentication Features

- ✅ Email/Password registration with validation
- ✅ Google Sign-In/Sign-Up
- ✅ Password strength validation (6+ chars, uppercase, lowercase)
- ✅ Password visibility toggle
- ✅ Forgot password with Firebase email reset
- ✅ Protected routes with redirect to login
- ✅ Redirect back to intended page after login
- ✅ Toast notifications for all auth actions

### Data & Filtering

- ✅ Fetch plants from local JSON file (`/plant.json`)
- ✅ Category filtering with all categories visible
- ✅ Active category gets green background
- ✅ Top-rated plants filter (rating ≥ 4.7)

### User Experience

- ✅ Responsive design across all devices
- ✅ Smooth animations with Framer Motion
- ✅ Hero slider with Swiper.js
- ✅ Active route highlighting in navbar
- ✅ Loading spinners for async operations
- ✅ Form validation with error messages
- ✅ Success notifications with toast
- ✅ Clean form clearing after submissions

### Bonus Features

- ✅ Working `updateProfile()` for name and photo
- ✅ Working forgot password with email reset
- ✅ Password show/hide toggle on all forms
- ✅ Extra "Plant of the Week" section on home page
- ✅ Expert consultation booking form
- ✅ Navbar avatar dropdown with user info

## 🎨 Design Highlights

- Nature-inspired color scheme with green accents
- DaisyUI components for consistent styling
- Card-based layouts for plants
- Smooth hover effects and transitions
- Professional typography and spacing
- Mobile-first responsive design

## 📱 Pages Overview

1. **Home (/)**: Hero slider, top plants, care tips, experts, plant of the week
2. **Plants (/plants)**: All plants with category filtering
3. **Plant Details (/plants/:id)**: Protected - Full plant info + consultation form
4. **Profile (/profile)**: Protected - User info with update capability
5. **Login (/login)**: Email/password + Google login
6. **Register (/register)**: Full registration with validation

## 🎯 Usage

1. **Browse Plants**: Visit home or plants page without login
2. **View Details**: Login required to see plant details
3. **Book Consultation**: Fill form on plant details page
4. **Update Profile**: Go to profile page and click "Update Profile"
5. **Filter Plants**: Click category buttons on plants page

## ✅ All Requirements Met

- ✅ React + Vite setup
- ✅ Tailwind CSS + DaisyUI styling
- ✅ React Router with protected routes
- ✅ Firebase Authentication (email/password + Google)
- ✅ React Toastify notifications
- ✅ Framer Motion animations
- ✅ Swiper.js hero slider
- ✅ Local JSON data loading
- ✅ Category filtering with all categories visible
- ✅ Password validation and toggle
- ✅ Forgot password functionality
- ✅ Update profile with Firebase
- ✅ Protected routes with redirect
- ✅ Responsive design
- ✅ Active route highlighting
- ✅ Consultation booking form
- ✅ All 6 plants from JSON displayed

## 🎉 Ready to Use!

Your GreenNest application is fully functional and ready to use. Visit **http://localhost:5174/** to explore all features!

---

**© 2025 GreenNest. All rights reserved.**
