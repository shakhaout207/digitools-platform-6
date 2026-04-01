import { ShoppingCart } from "lucide-react";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">
          DigiTools
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 text-sm">
          <li className="hover:text-purple-600 cursor-pointer">Products</li>
          <li className="hover:text-purple-600 cursor-pointer">Features</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-6 text-sm">
          
          {/* Login (NO ICON) */}
          <span className="cursor-pointer text-gray-700 hover:text-purple-600">
            Login
          </span>

          {/* Cart */}
          <div className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-purple-600">
            <ShoppingCart size={18} />
            <span>
              Cart (
              <span className="text-red-500 font-semibold">
                {cartCount}
              </span>
              )
            </span>
          </div>

          {/* Button */}
          <button className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-purple-600 to-pink-500">
            Get Started
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;