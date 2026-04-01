const SocialCircle = ({ children }) => (
  <div className="w-10 h-10 rounded-full bg-white text-[#14203C] flex items-center justify-center font-semibold">
    {children}
  </div>
);

const Footer = () => {
  return (
    <footer>
      <div className="bg-gradient-to-r from-[#5636F3] to-[#B012F0] text-white">
        <div className="max-w-[1180px] mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="text-[34px] md:text-[56px] font-bold">
            Ready To Transform Your Workflow?
          </h2>
          <p className="mt-5 text-white/85 text-[16px] leading-7 max-w-[700px] mx-auto">
            Join thousands of professionals who are already using Digitools to work smarter.
            <br />
            Start your free trial today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="h-[52px] px-8 rounded-full bg-white text-[#6B38FF] font-semibold">
              Explore Products
            </button>
            <button className="h-[52px] px-8 rounded-full border border-white text-white font-semibold">
              View Pricing
            </button>
          </div>

          <p className="mt-6 text-white/75 text-[15px]">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>

      <div className="bg-[#071633] text-white">
        <div className="max-w-[1180px] mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-1">
              <h3 className="text-[28px] font-bold">DigiTools</h3>
              <p className="mt-4 text-[#B6BDD0] leading-8">
                Premium digital tools for creators, professionals, and businesses.
                Work smarter with our suite of powerful tools.
              </p>
            </div>

            <div>
              <h4 className="text-[18px] font-semibold mb-5">Product</h4>
              <ul className="space-y-3 text-[#B6BDD0]">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[18px] font-semibold mb-5">Company</h4>
              <ul className="space-y-3 text-[#B6BDD0]">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[18px] font-semibold mb-5">Resources</h4>
              <ul className="space-y-3 text-[#B6BDD0]">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[18px] font-semibold mb-5">Social Links</h4>
              <div className="flex gap-3">
                <SocialCircle>◉</SocialCircle>
                <SocialCircle>f</SocialCircle>
                <SocialCircle>x</SocialCircle>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-[#8D97AF] text-sm">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;