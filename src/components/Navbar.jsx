const CartIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0"
  >
    <path
      d="M3 4H5L7.2 14.4C7.3 14.9 7.7 15.2 8.2 15.2H17.4C17.9 15.2 18.3 14.9 18.4 14.4L20 7H6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="20" r="1.5" fill="currentColor" />
    <circle cx="17" cy="20" r="1.5" fill="currentColor" />
  </svg>
);

const Navbar = ({ cartCount }) => {
  return (
    <header className="bg-white border-b border-[#E8E8EF]">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <h1 className="text-[28px] md:text-[32px] font-bold text-[#6B38FF] leading-none">
          DigiTools
        </h1>

        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#2A3142]">
          <a href="#" className="hover:text-[#6B38FF]">Products</a>
          <a href="#" className="hover:text-[#6B38FF]">Features</a>
          <a href="#" className="hover:text-[#6B38FF]">Pricing</a>
          <a href="#" className="hover:text-[#6B38FF]">Testimonials</a>
          <a href="#" className="hover:text-[#6B38FF]">FAQ</a>
        </nav>

        <div className="flex items-center gap-4 md:gap-5">
          <button className="hidden md:flex items-center gap-2 text-[14px] font-medium text-[#2A3142]">
            <CartIcon />
            <span>Login</span>
          </button>

          <div className="flex items-center gap-2 text-[14px] font-medium text-[#2A3142]">
            <CartIcon />
            <span>Cart ({cartCount})</span>
          </div>

          <button className="px-5 py-2.5 rounded-full text-white text-[14px] font-semibold bg-gradient-to-r from-[#5B3DF5] to-[#A020F0] hover:opacity-95">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;