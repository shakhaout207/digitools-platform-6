const tagStyle = {
  "Best Seller": "bg-[#FCE8B2] text-[#E89100]",
  Popular: "bg-[#E2DCFF] text-[#7A4DFF]",
  New: "bg-[#DDF7E6] text-[#2DA45D]",
};

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white border border-[#E7E8EE] rounded-[18px] p-6 text-left shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-full border border-[#ECECF3] flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-8 h-8 object-contain"
          />
        </div>

        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            tagStyle[product.tag] || "bg-[#EFEFEF] text-[#555]"
          }`}
        >
          {product.tag}
        </span>
      </div>

      <h3 className="text-[20px] font-bold text-[#1F2738]">{product.name}</h3>

      <p className="mt-3 text-[#7B8798] text-[15px] leading-6 min-h-[72px]">
        {product.description}
      </p>

      <div className="mt-4">
        <span className="text-[18px] font-bold text-[#1F2738]">${product.price}</span>
        <span className="text-[#8C95A6] text-[15px]">/{product.period}</span>
      </div>

      <ul className="mt-4 space-y-2 text-[15px] text-[#6F7B8A]">
        {product.features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>

      <button
        onClick={() => addToCart(product)}
        className="mt-6 w-full h-[50px] rounded-full text-white font-semibold bg-gradient-to-r from-[#5636F3] to-[#B012F0] hover:opacity-95"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;