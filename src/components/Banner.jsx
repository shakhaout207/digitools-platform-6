import banner from "../assets/banner.png";
import play from "../assets/Play.png";

const Banner = () => {
  return (
    <section className="py-16 md:py-18">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 bg-[#E9E4FF] text-[#6B38FF] px-4 py-2 rounded-full text-sm mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6B38FF]"></span>
            New: AI-Powered Tools Available
          </p>

          <h2 className="text-[44px] md:text-[68px] leading-[1.02] font-bold text-[#222B3D] max-w-[600px]">
            Supercharge Your Digital Workflow
          </h2>

          <p className="mt-5 text-[#7B8798] text-[17px] leading-8 max-w-[560px]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <p className="mt-2 text-[#7B8798] text-[18px]">Explore Products</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="h-[56px] px-8 rounded-full text-white font-semibold bg-gradient-to-r from-[#5B3DF5] to-[#A020F0] hover:opacity-95">
              Explore Products
            </button>

            <button className="h-[56px] px-7 rounded-full border border-[#7A3EF4] text-[#7A3EF4] font-semibold bg-white hover:bg-[#faf8ff] flex items-center justify-center gap-2">
              <img src={play} alt="Play" className="w-4 h-4 object-contain" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={banner}
            alt="Digital workflow"
            className="w-full max-w-[360px] md:max-w-[420px] rounded-[10px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;