const Cart = ({ cart, removeFromCart, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-[860px] mx-auto bg-white border border-[#DBE2F0] rounded-[18px] p-6 text-left">
      <h3 className="text-[18px] font-bold text-[#1F2738] mb-4">Your Cart</h3>

      {cart.length === 0 ? (
        <div className="text-center py-10 text-[#7B8798]">
          Your cart is empty.
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="bg-[#F7F8FC] rounded-[14px] px-4 py-4 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#ECECF3] flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-7 h-7 object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1F2738]">{item.name}</h4>
                    <p className="text-[#7B8798] text-sm">${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[#FF4A85] font-medium text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E6E9F2] flex justify-between items-center">
            <span className="text-[#7B8798]">Total:</span>
            <span className="text-[32px] font-bold text-[#1F2738]">${total}</span>
          </div>

          <button
            onClick={clearCart}
            className="mt-5 w-full h-[52px] rounded-full text-white font-semibold bg-gradient-to-r from-[#5636F3] to-[#B012F0] hover:opacity-95"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;