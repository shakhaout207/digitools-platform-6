import user from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocket from "../assets/rocket.png";

const steps = [
  {
    id: "01",
    icon: user,
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    id: "02",
    icon: packageIcon,
    title: "Choose Products",
    description:
      "Browse our catalog and select the tools that fit your needs.",
  },
  {
    id: "03",
    icon: rocket,
    title: "Start Creating",
    description:
      "Download and start using your premium tools immediately.",
  },
];

const Steps = () => {
  return (
    <section className="py-20 bg-[#f5f5f7]">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-[34px] md:text-[56px] font-bold text-[#111827]">
          Get Started In 3 Steps
        </h2>
        <p className="mt-4 text-[#8A95A5]">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E7E8EE] rounded-[18px] overflow-hidden bg-white">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`relative px-8 py-14 ${idx !== 2 ? "md:border-r border-[#E7E8EE]" : ""}`}
            >
              <span className="absolute top-4 right-4 w-8 h-8 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#5B3DF5] to-[#A020F0] flex items-center justify-center">
                {step.id}
              </span>

              <div className="w-20 h-20 rounded-full bg-[#EEE7FF] mx-auto flex items-center justify-center mb-6">
                <img src={step.icon} alt={step.title} className="w-9 h-9 object-contain" />
              </div>

              <h3 className="text-[20px] font-bold text-[#1F2738]">{step.title}</h3>
              <p className="mt-4 text-[#7B8798] text-[15px] leading-6 max-w-[260px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;