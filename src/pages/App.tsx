import React, { useState, useEffect } from "react";
import { Button, Container, withStyles } from "@material-ui/core";
import { Link, graphql, useStaticQuery } from "gatsby";
import LandingPage from "./components/landingPage";

interface IProductColor {
  hex_value: string;
  color_name: string;
}
interface IProduct {
  api_featured_image: string;
  brand: string;
  category: string;
  created_at: string;
  currency: string;
  description: string;
  id: number;
  image_link: string;
  name: string;
  price: string | number;
  price_sign: string;
  product_api_url: string;
  product_colors: IProductColor[];
  product_link: string;
  product_type: string;
  rating: string | null;
  tag_list: string[];
  updated_at: string;
  website_link: string;
}
const App = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getData: () => void = () => {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
      .then(r => r.json())
      .then(j => setProducts(j));
  };
  useEffect(() => {
    getData();
  }, []);
  const StyledButton = withStyles({
    root: {
      backgroundColor: "#4444ee",
      padding: "1rem 2rem",
    },
  })(Button);
  return (
    <div>
      <LandingPage />
      {/* {products.map((el, i) => {
        if (i > 20) return;
        return <img key={i} height='200' width='200' src={el.image_link} alt='' />;
      })} */}
    </div>
  );
};

export default App;
