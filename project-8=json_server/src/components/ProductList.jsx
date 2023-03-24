import React, { useEffect } from "react";
import { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  //console.log(products);

  //This takes two parameters 1st = Function & 2nd = Hhen we need to run this
  useEffect(() => {
    console.log(products);
    //console.log("Mounted")
    //return console.log("UnMounted")
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  /*fetch ("http://localhost:3000/products")
  .then(response => response.json())
  .then (data => console.log(data));*/

  return (
    <>
      <p>Product-Lists</p>
    </>
  );
};

export default ProductList;
