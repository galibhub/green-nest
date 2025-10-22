import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/plant.json")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setFilteredPlants(data);

        // Extract unique categories
        const uniqueCategories = [
          "All",
          ...new Set(data.map((plant) => plant.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error loading plants:", error));
  }, []);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredPlants(plants);
    } else {
      const filtered = plants.filter((plant) => plant.category === category);
      setFilteredPlants(filtered);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8">
          Explore Our Plant Collection
        </h1>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`btn btn-sm ${
                selectedCategory === category
                  ? "btn-success text-white"
                  : "btn-outline btn-success"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant) => (
            <motion.div
              key={plant.plantId}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="card bg-base-100 shadow-xl"
            >
              <figure className="h-56">
                <img
                  src={plant.image}
                  alt={plant.plantName}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl">{plant.plantName}</h3>
                <div className="badge badge-success badge-outline">
                  {plant.category}
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {plant.description}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-2xl font-bold text-success">
                    ${plant.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold">{plant.rating}</span>
                  </div>
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/plants/${plant.plantId}`}
                    className="btn btn-success btn-block text-white"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              No plants found in this category.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Plants;
