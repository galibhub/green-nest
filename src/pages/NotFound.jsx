import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-success">404</h1>
        <h2 className="text-4xl font-bold mt-4 mb-4">Page Not Found</h2>
        <p className="text-xl mb-8 text-gray-600">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link to="/" className="btn btn-success text-white">
          <FaHome className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
