// FooterBottom.jsx
import React from "react";
import styles from "./Footer.module.css";

const services = [
  { title: "Amazon Music", desc: "Stream millions of songs" },
  { title: "Amazon Ads", desc: "Reach customers wherever they spend their time" },
  { title: "6pm", desc: "Score deals on fashion brands" },
  { title: "AbeBooks", desc: "Books, art & collectibles" },
  { title: "ACX", desc: "Audiobook Publishing Made Easy" },
  { title: "Sell on Amazon", desc: "Start a Selling Account" },
  { title: "Veeqo", desc: "Shipping Software Inventory Management" },
  { title: "IMDb", desc: "Movies, TV & Celebrities" },
  { title: "Amazon Business", desc: "Everything For Your Business" },
  { title: "AmazonGlobal", desc: "Ship Orders Internationally" },
  { title: "Audible", desc: "Listen to Books & Original Audio Performances" },
  { title: "Prime Video Direct", desc: "Video Distribution Made Easy" },
  { title: "Shopbop", desc: "Designer Fashion Brands" },
  { title: "Woot!", desc: "Deals and Shenanigans" },
  { title: "Zappos", desc: "Shoes & Clothing" },
  { title: "Ring", desc: "Smart Home Security Systems" },
  { title: "Kindle Direct Publishing", desc: "Indie Digital & Print Publishing Made Easy" },
  { title: "eero WiFi", desc: "Stream 4K Video in Every Room" },
  { title: "Blink", desc: "Smart Security for Every Home" },
  { title: "Neighbors App", desc: "Real-Time Crime & Safety Alerts" },
  { title: "Amazon Subscription Boxes", desc: "Top subscription boxes" },
  { title: "PillPack", desc: "Pharmacy Simplified" },
  { title: "Goodreads", desc: "Book reviews & recommendations" },
  { title: "Box Office Mojo", desc: "Find Movie Box Office Data" },
  { title: "IMDbPro", desc: "Get Info Entertainment Professionals Need" },
  { title: "Amazon Web Services", desc: "Scalable Cloud Computing Services" },
  { title: "Amazon Devices", desc: "Smartphones, Echo, and more" },
  { title: "Amazon Science", desc: "Research and Innovation" },
  { title: "Amazon Prime", desc: "Fast, Free Shipping & Streaming" },
  { title: "Alexa", desc: "Voice Assistant & Smart Devices" },
  { title: "Amazon Renewed", desc: "Certified Refurbished Products" },
  { title: "Amazon Fresh", desc: "Grocery & Everyday Essentials" },
  { title: "Amazon Pantry", desc: "Pantry Items Delivered" },
  { title: "Amazon Pharmacy", desc: "Prescription Medications" },
  { title: "Amazon Outlet", desc: "Discounted Products" },
  { title: "Amazon Fashion", desc: "Clothing, Shoes & Jewelry" },
  { title: "Amazon Handmade", desc: "Unique Artisanal Products" },
  { title: "Amazon Explore", desc: "Virtual Experiences & Tours" },
  { title: "Amazon Photos", desc: "Unlimited Photo Storage" },
  { title: "Amazon Prime Video", desc: "Streaming Movies & TV Shows" },
  { title: "Amazon Drive", desc: "Secure Cloud Storage" },
];

function FooterBottom() {
  return (
    <div className={styles.footerBottom}>
      <div className={styles.servicesGrid}>
        {services.map((item, index) => (
          <div key={index} className={styles.service}>
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <p className={styles.copyright}>
        © 1996-2026, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  );
}

export default FooterBottom;
