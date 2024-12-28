import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-20 border-t border-white">
      {/* Links Section */}
      <div className="flex flex-wrap justify-around py-8 px-4">
        <div className="w-full sm:w-1/3 lg:w-1/4 p-3">
          <a href="" className="font-semibold block py-2 hover:text-green-400">Home</a>
          <a href="" className="font-semibold block py-2 hover:text-green-400">About Us</a>
          <a href="" className="font-semibold block py-2 hover:text-green-400">Affiliate</a>
        </div>
        <div className="w-full sm:w-1/3 lg:w-1/4 p-3">
          <a href="" className="font-semibold block py-2 hover:text-green-400">Contact Us</a>
          <a href="" className="font-semibold block py-2 hover:text-green-400">My Account</a>
          <a href="" className="font-semibold block py-2 hover:text-green-400">Logout</a>
        </div>
        <div className="w-full sm:w-1/3 lg:w-1/4 p-3">
          <a href="" className="font-bold block py-2 hover:text-green-400">DriveEase</a>
          <a href="mailto:DriveEase@gmail.com" className="font-semibold block py-2 hover:text-green-400">
            DriveEase@gmail.com
          </a>
          <a href="tel:+917029345783" className="font-semibold block py-2 hover:text-green-400">
            Phone: +91 7029345783
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap justify-between items-center py-4 px-6 border-t border-gray-600 text-center sm:text-left">
        {/* Copyright */}
        <div className="w-full sm:w-1/3">
          <p className="text-sm">Copyright © 2024 DriveEase. All rights reserved.</p>
        </div>

        {/* Social Media */}
        <div className="w-full sm:w-1/3 py-4 sm:py-0">
          <p className="text-sm mb-2">Follow us on:</p>
          <div className="flex justify-center sm:justify-start gap-4 text-lg">
            <a href="#" className="hover:text-green-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaFacebookSquare />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Policies */}
        <div className="w-full sm:w-1/3 flex justify-center sm:justify-end flex-wrap gap-2">
          <a href="" className="text-xs hover:text-green-400">Privacy Policy</a>
          <a href="" className="text-xs hover:text-green-400">Terms & Conditions</a>
          <a href="" className="text-xs hover:text-green-400">Refund Policy</a>
          <a href="" className="text-xs hover:text-green-400">Cancellation Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
