import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "./Products/Banner";
import ProductCard from "./Products/ProductCard";
import { productsData } from "./Products/data.jsx";
import Contact from "./Home/Contact";

function Products() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const images = document.querySelectorAll(".hover-animate");
    images.forEach((img) => {
      img.style.animation = "auto-slide 10s infinite alternate ease-in-out";
    });
  }, []);

  return (
    <>
      <Banner />
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Contact />
    </>
  );
}

export default Products;
