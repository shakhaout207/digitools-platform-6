const Stats = () => {
  const items = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <section className="bg-gradient-to-r from-[#5636F3] to-[#B012F0]">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 text-center text-white py-12">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={`${index !== 2 ? "md:border-r md:border-white/30" : ""} py-3`}
          >
            <h3 className="text-[44px] md:text-[50px] font-bold">{item.value}</h3>
            <p className="mt-3 text-[17px] text-white/80">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;