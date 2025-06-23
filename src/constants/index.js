import { FaWhatsapp, FaInstagramSquare, FaYoutube, FaTiktok  } from "react-icons/fa";

import Customer1 from "../assets/images/customer2.jpg";
import Customer2 from "../assets/images/customer3.jpg";
import Customer3 from "../assets/images/customer4.jpg";
import Customer4 from "../assets/images/customer5.jpg";
import Customer5 from "../assets/images/customer6.jpg";
import Customer6 from "../assets/images/customer7.jpg";
import Customer7 from "../assets/images/customer8.jpg";

// import { FaY } from "react-icons/fa6";

export const reviews = [
  {
    imgURL: Customer1,
    customerName: 'Tunde Adebayo',
    rating: '5/5',
    feedback: "Absolutely love my new metal card! It adds a level of luxury I didn't know I needed. Highly recommended!"
  },
  {
    imgURL: Customer2,
    customerName: 'Sarah Okechukwu',
    rating: '4.8/5',
    feedback: "The craftmanship is incredible. My friends keep asking where I got it. I'll back for more!"
  },
  {
   imgURL: Customer3,
    customerName: 'Ahmed Hassan',
    rating: '4.7/5',
    feedback: "The process was seamless from start to finish. I'm amazed at how beautiful the final product is."
  },
  {
    imgURL: Customer4,
    customerName: 'Fatima Adesanya',
    rating: '4.9/5',
    feedback: "My new metal card is stunning and feels great n hand. This is luxury redefined!"
  },
  {
    imgURL: Customer5,
    customerName: 'David Obi',
    rating: '4.6/5',
    feedback: "Signature Cards really knows how to create something special. Worth every penny!"
  },
  {
    imgURL: Customer6,
    customerName: 'Chidinma Okoro',
    rating: '5/5',
    feedback: "I couldn't be happier with the result. The attention to details is exceptional. Will definitely recommend."
  },
  {
    imgURL: Customer7,
    customerName: 'Ifeanyi Eze',
    rating: '4.8/5',
    feedback: "The best decision I made this year was upgrading my card. It's Stylish, Unique and built to last."
  },
  // {
  //   imgURL: customer4,
  //   customerName: 'Grace Nwosu',
  //   rating: '4.7/5',
  //   feedback: "From the design selction to delivery, everything was perfect. My metal card turns heads every time!"
  // },
  // {
  //   imgURL: customer3,
  //   customerName: 'Emeka Umeh',
  //   rating: '4.9/5',
  //   feedback: "The customization options were fantastic and the final product is simply beautiful. I'm impressed!"
  // },
  // {
  //   imgURL: customer2,
  //   customerName: 'kemi Ayodele',
  //   rating: '4.4/5',
  //   feedback: "My metal card feels premium and looks amazing. the service was excellent and I'm beyond satisfied."
  // }
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Metal Debit Cards", link: "/products" },
      { name: "Custom Business Cards", link: "/" },
      // { name: "Air Jordan 1", link: "/" },
      // { name: "Air Force 2", link: "/" },
      // { name: "Nike Waffle Racer", link: "/" },
      // { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Our story", link: "/#about" },
      { name: "FAQs", link: "/#faq" },
      { name: "How it works", link: "/#info" },
      { name: "Privacy policy", link: "/privacy-policy" },
      { name: "Payment policy", link: "/payment-policy" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "info@signaturecards.ng", link: "mailto:info@signaturecards.ng" },
      { name: '+2348055777333', link: "https://wa.me/8055777333" }
    ],
  },
];

export const socialMedia = [
  { icon: FaWhatsapp, alt: "Whatsapp", link:"https://wa.me/8055777333" },
  { icon: FaYoutube, alt: "Facebook", link: "https://youtube.com/@signatureCards_ng" },
  { icon: FaTiktok, alt: "X", link:"https://tiktok.com/signaturecards_ng" },
  { icon: FaInstagramSquare, alt: "Instagram", link:"https://instagram.com/signaturecards_ng" },
];