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
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-center justify-center mb-6">
            Login to GreenNest
          </h2>

          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered w-full pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                <button
                  type="button"
                  className="label-text-alt link link-hover text-success"
                  onClick={() =>
                    document.getElementById("forgot_password_modal").showModal()
                  }
                >
                  Forgot password?
                </button>
              </label>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-success text-white">
                Login
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-success"
          >
            <FaGoogle className="mr-2" />
            Login with Google
          </button>

          <p className="text-center mt-4">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="link link-success font-semibold">
              Register here
            </Link>
          </p>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <dialog id="forgot_password_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Reset Password</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter your email</span>
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="input input-bordered"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
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
