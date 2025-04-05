import {
  Smartphone,
  Globe,
  Cog,
  PhoneCall,
  Brain,
  Shield,
  BarChart2,
  MessageSquare,
  Repeat,
  Link2,
} from "lucide-react";
import file from "../assets/images/png/file.png";
import graph from "../assets/images/png/graph.png";
import rocket from "../assets/images/png/rocket.png";
import start from "../assets/images/png/start.png";
import integrity from "../assets/images/png/integrity.png";
import quality from "../assets/images/png/quality.png";
import success from "../assets/images/png/success.png";
import Infinite from "../assets/images/png/Infinite.png";
//industries
import governance from "../assets/images/industries/governance.jpg";
import fintech from "../assets/images/industries/fintech.jpg";
import healthcare from "../assets/images/industries/healthcare.jpg";
import advancedrobotics from "../assets/images/industries/advancedrobotics.jpg";
import energy from "../assets/images/industries/energy.jpg";
import edtech from "../assets/images/industries/edtech.jpg";
import space from "../assets/images/industries/space.jpg";
import security from "../assets/images/industries/security.jpg";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";
//portfolio
import nanoflow from "../assets/portfolio/nanoflow.png";
import padipal from "../assets/portfolio/padipal.png";
import cryptopadie from "../assets/portfolio/cryptopadie.png";

import { CgWebsite } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  FaAppStoreIos,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiFlutter } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import MobileAppImg1 from "../assets/images/services/MobileAppImg1.jpg";
import WebDevImg1 from "../assets/images/services/WebDevImg1.jpg";
import CustomSoftImg1 from "../assets/images/services/CustomSoftImg1.jpg";
import AICallingImg1 from "../assets/images/services/AICallingImg1.jpg";
import AIDevImg1 from "../assets/images/services/AIDevImg1.jpg";
import CyberSecurityImg1 from "../assets/images/services/CyberSecurityImg1.jpg";
import DataAnalyticsImg1 from "../assets/images/services/DataAnalyticsImg1.jpg";
import NLPImg1 from "../assets/images/services/NLPImg1.jpg";
import RPAImg1 from "../assets/images/services/RPAImg1.jpg";
import BlockchainImg1 from "../assets/images/services/BlockchainImg1.jpg";

export const companyDetails = {
  name: "Cerevanta AI",
  email: "support@cerevantaai.com",
  // email: "remeesreme4u@gmail.com",
  phone: "+91-9911690596",
  address:
    "Daftar Cowork 1.0 - HQ. Building No.2, State Bank Colony. Main Road - GT Karnal Rd. Delhi- 110009",
  socialLinks: [
    {
      href: "https://www.linkedin.com/company/cerevanta/",
      icon: FaLinkedin,
    },
    // {
    //   href: "",
    //   icon: FaInstagram,
    // },
    // { href: "", icon: FaXTwitter },
    // {
    //   href: "",
    //   icon: FaYoutube,
    // },
  ],
  whatsapp:
    "https://api.whatsapp.com/send/?phone=919911690596&text&type=phone_number&app_absent=0",
};

export const services = [
  {
    title: "Mobile App Development",
    link: "mobile-app-development",
    image: MobileAppImg1,
    description:
      "We build secure, high-performance iOS and Android apps with modern UI/UX.",
    icon: Smartphone,
    bgColor: "bg-blue-500",
  },
  {
    title: "Web Development",
    link: "web-development",
    image: WebDevImg1,
    description:
      "Design and develop responsive, scalable, and robust web applications.",
    icon: Globe,
    bgColor: "bg-gray-900",
  },
  {
    title: "Custom Software Development",
    link: "custom-software-development",
    image: CustomSoftImg1,
    description:
      "Tailored software solutions built to meet unique business needs and goals.",
    icon: Cog,
    bgColor: "bg-gray-900",
  },
  {
    title: "AI Calling",
    link: "ai-calling",
    image: AICallingImg1,
    description:
      "Automate conversations using AI voice agents for smarter customer support.",
    icon: PhoneCall,
    bgColor: "bg-gray-900",
  },
  {
    title: "Artificial Intelligence Development",
    link: "artificial-intelligence-development",
    image: AIDevImg1,
    description:
      "Create AI-powered solutions to automate workflows and improve decision-making.",
    icon: Brain,
    bgColor: "bg-gray-900",
  },
  {
    title: "Cybersecurity",
    link: "cybersecurity",
    image: CyberSecurityImg1,
    description:
      "Secure your digital infrastructure with advanced cybersecurity solutions.",
    icon: Shield,
    bgColor: "bg-gray-900",
  },
  {
    title: "Data Analytics and Business Intelligence",
    link: "data-analytics-business-intelligence",
    image: DataAnalyticsImg1,
    description:
      "Unlock insights and drive strategy with data analytics and BI tools.",
    icon: BarChart2,
    bgColor: "bg-gray-900",
  },
  {
    title: "Natural Language Processing (NLP)",
    link: "natural-language-processing",
    image: NLPImg1,
    description:
      "Build NLP solutions for text analysis, chatbots, sentiment analysis, and more.",
    icon: MessageSquare,
    bgColor: "bg-gray-900",
  },
  {
    title: "Robotic Process Automation (RPA)",
    link: "robotic-process-automation",
    image: RPAImg1,
    description:
      "Streamline business operations by automating repetitive and manual tasks.",
    icon: Repeat,
    bgColor: "bg-gray-900",
  },
  {
    title: "Blockchain Development",
    link: "blockchain-development",
    image: BlockchainImg1,
    description:
      "Build decentralized apps and smart contracts for secure, trustless systems.",
    icon: Link2,
    bgColor: "bg-gray-900",
  },
];

export const whyChooseUs = [
  "Tailored Solutions: We customize every project to align with your business goals, ensuring a perfect fit for your needs.",
  "Cutting-Edge Innovation: We leverage the latest technologies in AI, blockchain, RPA, and more to keep you ahead of the curve.",
  "Proven Success: With a strong portfolio and track record, our solutions deliver real results and measurable impact.",
  "Commitment to Excellence: Quality and integrity are at the core of everything we do, from strategy to deployment.",
  "End-to-End Collaboration: From consultation to launch, we work closely with clients, offering support at every stage of the journey.",
];

export const testimonials = [
  {
    quote:
      "Partnering with this team transformed our digital strategy. Their tailored approach and deep tech expertise helped us launch a seamless web solution that’s both scalable and secure.",
    author: "Ananya R., Co-Founder, Retail Tech Startup",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "From AI integration to real-time dashboards, their data analytics and business intelligence solutions empowered our operations with sharper insights and faster decisions.",
    author: "Kiran D., Head of Operations, Manufacturing Group",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Their blockchain development was top-notch. They delivered a secure and transparent infrastructure that enhanced trust and performance for our fintech product.",
    author: "Sneha P., Product Manager, Fintech Platform",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "We needed a custom mobile app powered by AI. The team delivered beyond expectations—seamless UI, strong backend, and smart features that impressed our users.",
    author: "Ravi V., CEO, Logistics Tech Firm",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Their AI calling system completely upgraded our customer engagement. It's fast, multilingual, and integrated perfectly with our CRM—game-changing for our support team.",
    author: "Priya T., Customer Experience Manager, Telecom Brand",
    rating: 5,
    gridClass: "col-span-1",
  },
];

export const highlights = [
  {
    id: 1,
    icon: file,
    title: "Tailored Technology Solutions",
    description:
      "From startups to enterprises, we deliver customized digital solutions designed to meet unique business goals and drive measurable growth.",
  },
  {
    id: 2,
    icon: graph,
    title: "Data-Driven Intelligence",
    description:
      "We empower businesses with AI and data science tools that turn raw data into real-time insights, optimizing decisions and performance.",
  },
  {
    id: 3,
    icon: rocket,
    title: "Automation & Efficiency at Scale",
    description:
      "Our RPA and AI services streamline operations, reduce manual effort, and improve accuracy, helping you achieve more with less.",
  },
  {
    id: 4,
    icon: start,
    title: "End-to-End Development Expertise",
    description:
      "From idea to deployment, our collaborative approach ensures seamless execution across web, mobile, and AI-powered platforms.",
  },
];

export const faqs = [
  {
    question: "What is this company about?",
    answer: `• We are a technology-driven company specializing in AI, app and web development, blockchain, RPA, data analytics, NLP, and cybersecurity.
• Our mission is to deliver tailored digital solutions that empower businesses to innovate and scale.`,
  },
  {
    question: "How do your services work?",
    answer: `• We begin with a consultation to understand your business goals and tech needs.
• Based on that, we craft custom strategies using the latest tools and technologies.
• From development to deployment, we offer end-to-end execution and support.`,
  },
  {
    question: "What key services do you offer?",
    answer: `• Mobile App & Web Development – Scalable, responsive digital products.
• Artificial Intelligence & NLP – Intelligent solutions for automation, insights, and smart interaction.
• Data Analytics – Actionable business intelligence from complex data sets.
• RPA – Automation of repetitive tasks for operational efficiency.
• Blockchain Development – Secure, decentralized apps for next-gen systems.
• Cybersecurity – Robust protection for digital assets and infrastructure.
• AI Calling – Advanced AI-powered calling systems for customer engagement.`,
  },
  {
    question: "Who are your services designed for?",
    answer: `• Startups and enterprises aiming to digitize and scale operations.
• Companies seeking intelligent automation or secure data systems.
• Businesses exploring AI calling, analytics, or blockchain transformation.`,
  },
  {
    question: "What makes your company different?",
    answer: `• We provide custom-built solutions, not one-size-fits-all packages.
• Our team blends deep tech expertise with strategic business insight.
• We value transparency, innovation, and long-term partnerships.`,
  },
  {
    question: "Do you offer support after the project is completed?",
    answer: `• Yes, we provide maintenance, updates, and continuous technical support.
• As your business grows, we help optimize and upgrade your systems accordingly.`,
  },
  {
    question: "How do I get started with your team?",
    answer: `• Contact us through our website or inquiry form.
• We'll schedule a discovery session to understand your goals and tech stack.
• Once we align on vision, we move into planning and development.`,
  },
  {
    question: "What industries do you work with?",
    answer: `• We serve diverse sectors including fintech, healthcare, logistics, education, and retail.
• Our solutions are adapted to meet each industry's operational and security needs.`,
  },
  {
    question: "How is data privacy handled?",
    answer: `• We implement strong encryption and follow industry-standard cybersecurity protocols.
• Your data remains private and protected, with full compliance to global privacy regulations.`,
  },
  {
    question: "Can I collaborate on a custom project?",
    answer: `• Absolutely. We welcome collaboration and co-creation.
• Whether it's AI calling, blockchain integration, or a unique app idea—let’s build it together.`,
  },
  {
    question: "What technologies do you specialize in?",
    answer: `• We use modern stacks like React, Node.js, Flutter, Python, Solidity, TensorFlow, and secure cloud platforms.
• Our expertise covers both frontend, backend, and AI/ML pipelines.`,
  },
  {
    question: "Where can I learn more or get in touch?",
    answer: `• Visit our website for service insights, case studies, and blogs.
• Use the contact form or reach out directly to book a consultation.`,
  },
];

export const coreValues = [
  {
    id: 1,
    icon: integrity,
    title: "Integrity",
    description:
      "We operate with transparency, honesty, and a commitment to doing what’s right—for our clients and our team.",
  },
  {
    id: 2,
    icon: quality,
    title: "Quality",
    description:
      "From development to design, we deliver high-quality solutions that meet the highest standards of performance and reliability.",
  },
  {
    id: 3,
    icon: success,
    title: "Customer Success",
    description:
      "We measure our success by our clients' achievements, working closely with them to deliver results that drive growth and impact.",
  },
  {
    id: 4,
    icon: Infinite,
    title: "Continuous Learning",
    description:
      "We embrace innovation and constantly evolve our skills and knowledge to stay ahead in a rapidly changing tech landscape.",
  },
];

export const visionAndMission = [
  {
    title: "Our Vision",
    description:
      "To become a leading force in driving digital transformation through innovative technologies like AI, blockchain, and automation, helping businesses thrive in a connected world.",
  },
  {
    title: "Our Mission",
    description:
      "To deliver customized, cutting-edge technology solutions that empower organizations to solve complex challenges, streamline operations, and achieve measurable success.",
  },
  {
    title: "Our Journey",
    description:
      "Founded by a team of passionate technologists, our company has grown into a trusted digital partner for startups and enterprises alike. From strategy to deployment, we work hand-in-hand with clients across industries to build scalable, secure, and impactful solutions.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    // icon: require("./assets/images/icons/online-shopping.png"),
    img: CgWebsite,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: GoFileMedia,
    // icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: TfiLayoutMediaRightAlt,
    // icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: MdOutlineDashboardCustomize,
    // icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: FaAppStoreIos,
    // icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: IoLogoAndroid,
    // icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: SiFlutter,

    // icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: TbDeviceMobileCode,
    // icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

export const futureTechSectors = [
  {
    id: 1,
    img: governance,
    title: "Governance & Law",
    description:
      "Leveraging AI and digital solutions to improve public services, enable transparent decision-making, and modernize legal and administrative systems.",
  },
  {
    id: 2,
    img: fintech,
    title: "Fintech & Digital Economy",
    description:
      "Building secure, scalable platforms using blockchain and AI for digital payments, DeFi applications, and personalized financial services.",
  },
  {
    id: 3,
    img: healthcare,
    title: "Healthcare & Bioinformatics",
    description:
      "Delivering AI-powered diagnostics, predictive analytics, and health platforms for personalized treatment, operational efficiency, and improved patient outcomes.",
  },
  {
    id: 4,
    img: advancedrobotics,
    title: "Robotics & Automation",
    description:
      "Creating intelligent automation systems for manufacturing, logistics, and service industries to boost productivity and reduce costs.",
  },
  {
    id: 5,
    img: energy,
    title: "Energy & Sustainability",
    description:
      "Applying AI and IoT for efficient energy management, smart grid solutions, and sustainable environmental practices.",
  },
  {
    id: 6,
    img: edtech,
    title: "EdTech & Digital Learning",
    description:
      "Building immersive and personalized e-learning platforms with AI-driven content, analytics, and engagement tools for learners and educators.",
  },
  {
    id: 7,
    img: space,
    title: "Aerospace & Emerging Tech",
    description:
      "Supporting research and development in aerospace, remote sensing, and advanced tech sectors through custom software and AI solutions.",
  },
  {
    id: 8,
    img: security,
    title: "Security & Defense Tech",
    description:
      "Developing secure digital infrastructures, surveillance systems, and AI-powered threat detection tools for public and private sector safety.",
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const blockchainPortfolio = [
  {
    id: 1,
    img: nanoflow,
    title: "Nanoflow",
    link: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
  },
  {
    id: 2,
    img: padipal,
    title: "Padipal",
    link: "https://padiepal.com",
  },
  {
    id: 3,
    img: cryptopadie,
    title: "Cryptopadie",
    link: "https://cryptopadie.com/",
  },
];
