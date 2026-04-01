const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: "$0",
    period: "/Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
    featured: false,
  },
  {
    name: "Pro",
    subtitle: "Best for professionals",
    price: "$29",
    period: "/Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: "$99",
    period: "/Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-[#f5f5f7]">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-[34px] md:text-[56px] font-bold text-[#111827]">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-[#8A95A5]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[18px] p-7 text-left border ${
                plan.featured
                  ? "bg-gradient-to-r from-[#5636F3] to-[#B012F0] text-white border-transparent"
                  : "bg-white border-[#E7E8EE]"
              }`}
            >
              {plan.featured && (
                <div className="flex justify-center -mt-11 mb-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#F6D37B] text-[#B36A00]">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-[18px] font-bold">{plan.name}</h3>
              <p className={`mt-2 text-sm ${plan.featured ? "text-white/80" : "text-[#7B8798]"}`}>
                {plan.subtitle}
              </p>

              <div className="mt-6">
                <span className="text-[52px] font-bold">{plan.price}</span>
                <span className={`${plan.featured ? "text-white/80" : "text-[#7B8798]"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-[15px]">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full h-[50px] rounded-full font-semibold ${
                  plan.featured
                    ? "bg-white text-[#6B38FF]"
                    : "text-white bg-gradient-to-r from-[#5636F3] to-[#B012F0]"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;