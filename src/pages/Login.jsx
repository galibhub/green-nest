import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const { signIn, signInWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    signIn(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Login failed: " + error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Login with Google successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Google login failed: " + error.message);
      });
  };

  const handleForgotPassword = () => {
    if (!resetEmail) {
      toast.error("Please enter your email address");
      return;
    }

    resetPassword(resetEmail)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        document.getElementById("forgot_password_modal").close();
      })
      .catch((error) => {
        toast.error("Failed to send reset email: " + error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body p-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-8">
            Login to GreenNest
          </h2>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div className="form-control w-full">
              <label className="label pb-1">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Enter your password"
                  className="input input-bordered w-full pr-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-success hover:underline font-medium"
                onClick={() =>
                  document.getElementById("forgot_password_modal").showModal()
                }
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <div className="form-control w-full pt-2">
              <button
                type="submit"
                className="btn btn-success text-white w-full"
              >
                Login
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider my-4">OR</div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-success w-full"
          >
            <FaGoogle className="text-lg" />
            Login with Google
          </button>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-sm">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-success hover:underline font-semibold"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <dialog id="forgot_password_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl mb-4">Reset Password</h3>
          <p className="text-gray-600 mb-4">
            Enter your email address and we&apos;ll send you a password reset
            link.
          </p>
          <div className="form-control w-full">
            <label className="label pb-1">
              <span className="label-text font-medium">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="input input-bordered w-full"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
          </div>
          <div className="modal-action mt-6">
            <button
              onClick={handleForgotPassword}
              className="btn btn-success text-white"
            >
              Send Reset Link
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
