import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import productsData from "./data/products";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    const item = cart.find((p) => p.id === id);
    setCart((prev) => {
      const index = prev.findIndex((p) => p.id === id);
      if (index === -1) return prev;
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
    if (item) toast.info(`${item.name} removed from cart`);
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Checkout complete. Cart cleared.");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] overflow-x-hidden">
      <ToastContainer position="top-right" autoClose={1800} />

      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />

      <section className="py-20">
        <div className="max-w-[1180px] mx-auto px-6 lg:px-8 text-center">
          <div className="w-8 h-1 rounded-full bg-sky-500 mx-auto mb-6"></div>

          <h2 className="text-[34px] md:text-[56px] leading-tight font-bold text-[#111827]">
            Premium Digital Tools
          </h2>

          <p className="mt-4 text-[#7A8699] max-w-[620px] mx-auto text-[15px] md:text-[17px] leading-6">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

          <div className="mt-8 mb-10 flex justify-center">
            <div className="inline-flex items-center bg-white rounded-full p-1 border border-[#E8E8EF] shadow-sm">
              <button
                onClick={() => setShowCart(false)}
                className={`min-w-[110px] px-6 py-3 text-sm font-semibold rounded-full transition ${
                  !showCart
                    ? "text-white bg-gradient-to-r from-[#5B3DF5] to-[#A020F0] shadow"
                    : "text-[#3E3A60]"
                }`}
              >
                Products
              </button>

              <button
                onClick={() => setShowCart(true)}
                className={`min-w-[110px] px-6 py-3 text-sm font-semibold rounded-full transition ${
                  showCart
                    ? "text-white bg-gradient-to-r from-[#5B3DF5] to-[#A020F0] shadow"
                    : "text-[#3E3A60]"
                }`}
              >
                Cart ({cart.length})
              </button>
            </div>
          </div>

          <div className="w-8 h-1 rounded-full bg-pink-500 mx-auto mb-10"></div>

          {showCart ? (
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          ) : (
            <Products products={productsData} addToCart={addToCart} />
          )}

          <div className="w-8 h-1 rounded-full bg-sky-500 mx-auto mt-12"></div>
        </div>
      </section>

      <Steps />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;