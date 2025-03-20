import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialMediaLinks = [
  { id: 1, label: "Facebook", icon: FaFacebookF, path: "" },
  { id: 2, label: "Instagram", icon: FaInstagram, path: "" },
  { id: 3, label: "Youtube", icon: FaYoutube, path: "" },
  { id: 4, label: "XTwitter", icon: FaXTwitter, path: "" },
  { id: 4, label: "Linkedin", icon: FaLinkedinIn, path: "" },
];

export const footerLinks = [
  {
    id: 1,
    title: "Quick Links",
    links: [
      { id: 1, label: "Home", path: "/" },
      { id: 2, label: "About", path: "/about" },
      { id: 3, label: "Toursim", path: "/tourism" },
      { id: 4, label: "Contact", path: "/connect" },
    ],
  },
  {
    id: 2,
    title: "Initiatives",
    links: [
      { id: 1, label: "Annadhaanam", path: "/initiatives/annadhaanam" },
      { id: 2, label: "Gowshala", path: "/initiatives/gowshala" },
      { id: 3, label: "Education", path: "/initiatives/education" },
      { id: 4, label: "Healthcare", path: "/initiatives/healthcare" },
      {
        id: 5,
        label: "Women's Empowerment",
        path: "/initiatives/women-empowerment",
      },
    ],
  },
  {
    id: 3,
    title: "Fundraisers",
    links: [
      {
        id: 1,
        label: "School Renovation",
        path: "/fundraisers/school-renovation",
      },
      {
        id: 2,
        label: "Home Renovation",
        path: "/fundraisers/home-renovation",
      },
      { id: 3, label: "Old Age Home", path: "/fundraisers/old-age-home" },
      { id: 4, label: "Orphanage", path: "/fundraisers/orphanage" },
    ],
  },
  {
    id: 4,
    title: "Others",
    links: [
      { id: 1, label: "Construction", path: "/temple/construction" },
      { id: 2, label: "Festivals", path: "/temple/festivals" },
      { id: 3, label: "Terms & Conditions", path: "/terms-and-conditions" },
      { id: 4, label: "Privacy Policy", path: "/privacy-policy" },
      {
        id: 5,
        label: "Refund And Cancellation Policy",
        path: "/refund-and-cancellation",
      },
    ],
  },
];
