import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaBox, FaLeaf } from "react-icons/fa";
import { toast } from "react-toastify";

const PlantDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    fetch("/plant.json")
      .then((res) => res.json())
      .then((data) => {
        const foundPlant = data.find((p) => p.plantId === parseInt(id));
        setPlant(foundPlant);
      })
      .catch((error) => console.error("Error loading plant:", error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      "Consultation booked successfully! We will contact you soon."
    );
    setFormData({ name: "", email: "" });
  };

  if (!plant) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-success"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Plant Image */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-96 object-cover rounded-lg"
            />
          </figure>
        </div>

        {/* Plant Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{plant.plantName}</h1>

          <div className="badge badge-success badge-lg text-white mb-4">
            {plant.category}
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500 text-xl" />
              <span className="text-2xl font-semibold">{plant.rating}</span>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="text-3xl font-bold text-success">
              ${plant.price}
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <FaBox className="text-success text-xl" />
              <span className="text-lg">
                <strong>Stock:</strong> {plant.availableStock} available
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaLeaf className="text-success text-xl" />
              <span className="text-lg">
                <strong>Care Level:</strong> {plant.careLevel}
              </span>
            </div>
            <div className="text-lg">
              <strong>Provider:</strong> {plant.providerName}
            </div>
          </div>

          <div className="divider"></div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed">{plant.description}</p>
          </div>

          <div className="divider"></div>

          {/* Book Consultation Form */}
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-4">Book a Consultation</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Your Name</span>
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

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Your Email</span>
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

                <button
                  type="submit"
                  className="btn btn-success btn-block text-white"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PlantDetails;
