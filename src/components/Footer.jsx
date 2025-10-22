import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              🌿 GreenNest
            </h3>
            <p className="text-sm">
              Your trusted partner for indoor plant care and plant shopping.
              Bringing nature into your home, one plant at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="link link-hover">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-success"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-success"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-success"
              >
                <FaPinterest className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="divider"></div>
        <div className="text-center text-sm">
          <p>© 2025 GreenNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
