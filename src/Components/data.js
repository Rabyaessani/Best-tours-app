import Img1 from "../images/tour-1.jpeg";
import Img2 from "../images/tour-2.jpeg";
import Img3 from "../images/tour-3.jpeg";
import Img4 from "../images/tour-4.jpeg";
import Img5 from "../images/tour-5.jpeg";
import Img6 from "../images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#About", text: "About" },
  { id: 3, href: "#Services", text: "Services" },
  { id: 4, href: "#tour", text: "tour" },
];

export const SocialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: Img1 ,
    title: "Tibet Adventure",
    date: "august 26th, 2020",
    location: "china",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    Duration: "6 days",
    price: "2100",
  },
  {
    id: 2,
    image:  Img2 ,
    title: "Bali Waves",
    date: "october 1th, 2020",
    location: "indonesia",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    Duration: "11 days",
    price: "1400",
  },
  {
    id: 3,
    image: Img3 ,
    title: "explore hong kong",
    date: "september 15th, 2020",
    location: "hong kong",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    Duration: "8 days",
    price: "5000",
  },
  {
    id: 4,
    image: Img4 ,
    title: "kenya highlights",
    date: "december 5th, 2019",
    location: "kenya",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    Duration: "30 days",
    price: "3300",
  },
  {
    id: 5,
    image: Img5 ,
    title: "The Jungle Book",
    date: "January 5th, 2019",
    location: "Africa",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    Duration: "20 days",
    price: "4300",
  },
  {
    id: 6,
    image: Img6 ,
    title: "The Royal Route",
    date: "January 5th, 2019",
    location: "India",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    Duration: "20 days",
    price: "2300",
  },
];
