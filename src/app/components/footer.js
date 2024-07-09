import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function footer() {
  return (
    <>
      <footer className="bg-slate-950 text-white py-6 min-h-40">
        <div className="container mx-auto flex justify-center space-x-8">
          <a href="#" className="text-white hover:text-blue-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="mt-4 text-center text-gray-500 text-sm">
          <a href="#" className="mx-2 hover:underline">
            Work
          </a>
          <a href="#" className="mx-2 hover:underline">
            Services
          </a>
          <a href="#" className="mx-2 hover:underline">
            Careers
          </a>
          <a href="#" className="mx-2 hover:underline">
            Contact Us
          </a>
        </div>
        <div className="mt-2 text-center text-gray-500 text-sm">
          &copy; 2024 GeoMARKET
        </div>
      </footer>
    </>
  );
}
