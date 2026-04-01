import designTool from "../assets/products/design-tool.png";
import operation from "../assets/products/operation.png";
import portfolio from "../assets/products/portfolio.png";
import shoppingCart from "../assets/products/shopping-cart.png";
import socialMedia from "../assets/products/social-media.png";
import writing from "../assets/products/writing_2327400 1.png";

const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    description:
      "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    price: 29,
    period: "Mo",
    tag: "Best Seller",
    image: writing,
    features: [
      "Unlimited AI generations",
      "50+ writing templates",
      "Grammar checker",
    ],
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description:
      "2000+ premium templates for social media, presentations, and marketing materials.",
    price: 49,
    period: "One-Time",
    tag: "Popular",
    image: designTool,
    features: [
      "2000+ templates",
      "Monthly updates",
      "Commercial license",
    ],
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description:
      "Access millions of royalty-free photos, videos, and graphics for your projects.",
    price: 19,
    period: "Mo",
    tag: "New",
    image: portfolio,
    features: [
      "10M+ assets",
      "Commercial use",
      "No attribution",
    ],
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description:
      "Automate repetitive tasks and streamline your workflow with powerful tools.",
    price: 79,
    period: "Mo",
    tag: "Popular",
    image: operation,
    features: [
      "50+ automations",
      "API access",
      "Custom workflows",
    ],
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description:
      "Create professional resumes and cover letters that stand out in interviews.",
    price: 15,
    period: "One-Time",
    tag: "New",
    image: shoppingCart,
    features: [
      "100+ templates",
      "ATS optimization",
      "Export to PDF",
    ],
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    description:
      "Complete toolkit for creating engaging social media content across all platforms.",
    price: 39,
    period: "Mo",
    tag: "Best Seller",
    image: socialMedia,
    features: [
      "5000+ assets",
      "Scheduler included",
      "Analytics dashboard",
    ],
  },
];

export default products;