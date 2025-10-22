import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar, FaWater, FaSun, FaSeedling } from "react-icons/fa";

const Home = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plant.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error loading plants:", error));
  }, []);

  // Get top rated plants (rating >= 4.7)
  const topRatedPlants = plants.filter((plant) => plant.rating >= 4.7);

  // Plant care tips
  const careTips = [
    {
      icon: <FaWater className="text-4xl text-blue-500" />,
      title: "Watering",
      tip: "Water when the top inch of soil feels dry. Overwatering is the #1 killer of indoor plants.",
    },
    {
      icon: <FaSun className="text-4xl text-yellow-500" />,
      title: "Sunlight",
      tip: "Most indoor plants prefer bright, indirect light. Avoid direct harsh sunlight.",
    },
    {
      icon: <FaSeedling className="text-4xl text-green-500" />,
      title: "Fertilizing",
      tip: "Feed your plants during growing season (spring/summer) with balanced fertilizer monthly.",
    },
  ];

  // Green experts
  const experts = [
    {
      name: "Dr. Sarah Green",
      specialization: "Plant Pathology",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Michael Plant",
      specialization: "Indoor Gardening",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Emma Bloom",
      specialization: "Succulent Specialist",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
  ];

  return (
    <div>
      {/* Hero Section with Swiper */}
      <section className="mb-16">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[400px] md:h-[500px]"
        >
          <SwiperSlide>
            <div
              className="hero h-full"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=1200)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-md"
                >
                  <h1 className="mb-5 text-5xl font-bold">
                    Welcome to GreenNest
                  </h1>
                  <p className="mb-5">
                    Bringing nature into your home, one plant at a time
                  </p>
                  <Link to="/plants" className="btn btn-success text-white">
                    Explore Plants
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero h-full"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1200)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-md"
                >
                  <h1 className="mb-5 text-5xl font-bold">Indoor Plant Care</h1>
                  <p className="mb-5">
                    Expert tips and guidance for healthy, thriving plants
                  </p>
                  <Link to="/plants" className="btn btn-success text-white">
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero h-full"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=1200)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-md"
                >
                  <h1 className="mb-5 text-5xl font-bold">
                    Transform Your Space
                  </h1>
                  <p className="mb-5">
                    Create your perfect green sanctuary with our collection
                  </p>
                  <Link to="/plants" className="btn btn-success text-white">
                    Shop Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Top Rated Plants */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Top Rated Indoor Plants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRatedPlants.map((plant) => (
              <motion.div
                key={plant.plantId}
                whileHover={{ scale: 1.05 }}
                className="card bg-base-100 shadow-xl"
              >
                <figure className="h-48">
                  <img
                    src={plant.image}
                    alt={plant.plantName}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{plant.plantName}</h3>
                  <p className="text-sm text-gray-600">{plant.category}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xl font-bold text-success">
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
                      className="btn btn-success btn-sm text-white"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Plant Care Tips */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Essential Plant Care Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {careTips.map((tip, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="card bg-base-100 shadow-xl"
                >
                  <div className="card-body items-center text-center">
                    <div className="mb-4">{tip.icon}</div>
                    <h3 className="card-title">{tip.title}</h3>
                    <p>{tip.tip}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Green Experts */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet Our Green Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="card bg-base-100 shadow-xl"
              >
                <figure className="px-10 pt-10">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="rounded-full w-32 h-32 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title">{expert.name}</h3>
                  <p className="text-success font-semibold">
                    {expert.specialization}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Plant of the Week - Bonus Section */}
      <section className="bg-gradient-to-r from-green-400 to-green-600 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🌟 Plant of the Week
            </h2>
            <p className="text-xl mb-6">Monstera - The Swiss Cheese Plant</p>
            <p className="max-w-2xl mx-auto mb-8">
              A stunning tropical plant with unique fenestrated leaves. Perfect
              for adding a bold statement to any room. Easy to care for and
              fast-growing!
            </p>
            <Link to="/plants/6" className="btn btn-neutral">
              Discover More
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
