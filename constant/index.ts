import {
  BellPlus,
  Building2,
  Globe,
  GlobeIcon,
  Instagram,
  Linkedin,
  Phone,
  PhoneIcon,
  SearchXIcon,
  Twitter,
  Youtube,
} from "lucide-react";

export const Links = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const Companies = [
  { name: "cachet", imageUrl: "/images/clients/cachet.svg" },
  { name: "guitar", imageUrl: "/images/clients/guitar-center.svg" },
  { name: "profil", imageUrl: "/images/clients/profil-rejser.svg" },
  { name: "shopify", imageUrl: "/images/clients/shopify.svg" },
  { name: "tokico", imageUrl: "/images/clients/tokico.svg" },
];
export const ServicesContent = [
  {
    name: "Websites",
    price: "$2,400",
    desc: "You may want to explore Too CSS for great collection of free HTML CSS templates.",
    icon: Globe,
  },
  {
    name: "Branding",
    price: "$1,200",
    desc: "You can explore more CSS templates on TemplateMo website by browsing through different tags.",
    icon: BellPlus,
  },
  {
    name: "Ecommerce",
    price: "$3,600",
    desc: "If you need a customized ecommerce website for your business, feel free to discuss with me.",
    icon: Phone,
  },
  {
    name: "SEO",
    price: "$1,450",
    desc: "To list your website first on any search engine, we will work together. First Portfolio is one-page CSS Template for free download.",
    icon: SearchXIcon,
  },
];
export const ProjectContent = [
  {
    name: "BRANDING",
    title: "Zoik agency",
    imgUrl: "/images/projects/project1.jpg",
  },
  {
    name: "PHOTOGRAPHY",
    title: "The  Watch",
    imgUrl: "/images/projects/project2.jpg",
  },
  {
    name: "WEBSITE",
    title: "Polo",
    imgUrl: "/images/projects/project3.jpg",
  },
];
export const Stats = [
  {
    number: "20+",
    text: "Years of Experiences",
  },
  {
    number: "245",
    text: "Happy Customers",
  },
  {
    number: "640",
    text: "Project Finished",
  },
  {
    number: "72+",
    text: "Digital Awards",
  },
];
export const ContactData = [
  {
    icon: GlobeIcon,
    name: "Websites",
  },
  {
    icon: Building2,
    name: "Branding",
  },
  {
    icon: PhoneIcon,
    name: "Ecommerce",
  },
  {
    icon: SearchXIcon,
    name: "SEO",
  },
];

export const Services = ["Websites", "Branding", "Ecommers", "SEO"];
export const Media = [Instagram, Twitter, Youtube, Linkedin];
