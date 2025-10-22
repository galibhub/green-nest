# 🌿 GreenNest - Indoor Plant Care & Store

A beautiful React single-page application for plant lovers to explore, learn about, and book consultations for indoor plants.

## ✨ Features

- 🔐 **Authentication** - Email/Password & Google Sign-In with Firebase
- 🌱 **Plant Catalog** - Browse 6+ indoor plants with filtering by category
- 🛡️ **Protected Routes** - Secure plant details and profile pages
- 📋 **Plant Details** - View detailed information and book consultations
- 👤 **User Profile** - Update your name and photo in real-time
- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop

## 🚀 Live Demo

Live link: https://green-nest-00.netlify.app/
## 🛠️ Technologies Used

- **React** - Frontend framework
- **React Router** - Navigation
- **Firebase** - Authentication
- **Tailwind CSS** - Styling
- **DaisyUI** - UI components
- **React Toastify** - Notifications
- **Vite** - Build tool

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/galibhub/green-nest.git
cd green-nest
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Firebase**
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Email/Password and Google authentication
   - Copy your config to `src/firebase/firebase.config.js`

4. **Run the development server**
```bash
npm run dev
```


## 🔧 Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

## 📂 Project Structure

```
green-plant/
├── public/
│   ├── plant.json          # Plant data
│   └── _redirects          # Netlify routing config
├── src/
│   ├── components/         # Reusable components
│   ├── context/            # Auth context
│   ├── firebase/           # Firebase config
│   ├── pages/              # Page components
│   └── main.jsx            # Entry point
└── package.json
```

## 🌐 Deployment

This project is ready to deploy on **Netlify**, **Vercel**, or **Firebase Hosting**.

For Netlify:
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Add Firebase environment variables in Netlify settings

## 📝 Usage

1. **Sign Up** - Create an account or use Google Sign-In
2. **Browse Plants** - Explore plants and filter by category
3. **View Details** - Click "View Details" to see full information (requires login)
4. **Book Consultation** - Fill out the consultation form on plant detail pages
5. **Update Profile** - Edit your name and photo from the profile page

## 🔑 Features Breakdown

### Authentication
- Email/Password registration with validation
- Google authentication
- Password reset via email
- Protected routes redirect to login

### Plant Management
- Display all plants from JSON data
- Filter plants by category
- Show top-rated plants on homepage
- Detailed plant information page

### User Profile
- View user information
- Update display name and photo
- Real-time Firebase profile updates


## 👨‍💻 Author

**Galib**  
GitHub: [@galibhub](https://github.com/galibhub)

---

Made with 💚 by plant lovers, for plant lovers