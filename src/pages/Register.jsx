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
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-center justify-center mb-6">
            Register to GreenNest
          </h2>

          <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photoURL"
                placeholder="Enter photo URL"
                className="input input-bordered"
                value={formData.photoURL}
                onChange={handleChange}
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full pr-10"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <label className="label">
                <span className="label-text-alt text-xs">
                  Password must be at least 6 characters with 1 uppercase and 1
                  lowercase letter
                </span>
              </label>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-success text-white">
                Register
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleRegister}
            className="btn btn-outline btn-success"
          >
            <FaGoogle className="mr-2" />
            Register with Google
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="link link-success font-semibold">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
