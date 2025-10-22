import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, signInWithGoogle, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasMinLength) {
      return "Password must be at least 6 characters long";
    }
    if (!hasUpperCase) {
      return "Password must contain at least one uppercase letter";
    }
    if (!hasLowerCase) {
      return "Password must contain at least one lowercase letter";
    }
    return null;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    createUser(formData.email, formData.password)
      .then(() => {
        // Update profile with name and photo
        updateUserProfile(formData.name, formData.photoURL)
          .then(() => {
            toast.success("Account created successfully!");
            navigate("/");
          })
          .catch((error) => {
            toast.error("Profile update failed: " + error.message);
          });
      })
      .catch((error) => {
        toast.error("Registration failed: " + error.message);
      });
  };

  const handleGoogleRegister = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Registration with Google successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Google registration failed: " + error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body p-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-8">
            Register to GreenNest
          </h2>

          {/* Registration Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name Field */}
            <div className="form-control w-full">
              <label className="label pb-1">
                <span className="label-text font-medium">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control w-full">
              <label className="label pb-1">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Photo URL Field */}
            <div className="form-control w-full">
              <label className="label pb-1">
                <span className="label-text font-medium">Photo URL</span>
              </label>
              <input
                type="url"
                name="photoURL"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
                value={formData.photoURL}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control w-full">
              <label className="label pb-1">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full pr-12"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>
              <label className="label pt-1">
                <span className="label-text-alt text-xs text-gray-500">
                  Must have 6+ characters, 1 uppercase & 1 lowercase letter
                </span>
              </label>
            </div>

            {/* Register Button */}
            <div className="form-control w-full pt-2">
              <button
                type="submit"
                className="btn btn-success text-white w-full"
              >
                Register
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider my-4">OR</div>

          {/* Google Registration Button */}
          <button
            onClick={handleGoogleRegister}
            className="btn btn-outline btn-success w-full"
          >
            <FaGoogle className="text-lg" />
            Register with Google
          </button>

          {/* Login Link */}
          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-success hover:underline font-semibold"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
