import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaCamera } from "react-icons/fa";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    updateUserProfile(formData.displayName, formData.photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
        setIsEditing(false);
        // Force page refresh to show updated data
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Profile update failed: " + error.message);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">My Profile</h1>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            {/* Profile Photo */}
            <div className="flex justify-center mb-6">
              <div className="avatar">
                <div className="w-33 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    alt={user?.displayName || "User"}
                  />
                </div>
              </div>
            </div>

            {!isEditing ? (
              // Display Mode
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-base-200 rounded-lg">
                  <FaUser className="text-success text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="text-lg font-semibold">
                      {user?.displayName || "Not set"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-base-200 rounded-lg">
                  <FaEnvelope className="text-success text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-semibold">{user?.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-base-200 rounded-lg">
                  <FaCamera className="text-success text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Photo URL</p>
                    <p className="text-sm break-all">
                      {user?.photoURL || "Not set"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-success btn-block text-white mt-6"
                >
                  Update Profile
                </button>
              </div>
            ) : (
              // Edit Mode
              <form onSubmit={handleUpdateProfile}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Display Name</span>
                  </label>
                  <input
                    type="text"
                    name="displayName"
                    placeholder="Enter your name"
                    className="input input-bordered"
                    value={formData.displayName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-control mb-6">
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

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="btn btn-success flex-1 text-white"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        displayName: user?.displayName || "",
                        photoURL: user?.photoURL || "",
                      });
                    }}
                    className="btn btn-outline flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
