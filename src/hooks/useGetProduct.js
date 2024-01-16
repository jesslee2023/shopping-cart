// import { useEffect, useState } from "react";
// import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import { products } from "../data";

export default function useGetProduct(id) {
  const [product, setProduct] = useState();

  useEffect(() => {
    const foundProduct = products.find((p) => {
      return p.id === +id;
    });

    setProduct(foundProduct);
  }, [id]);

  return { product };
  // const { data } = useFetch(`/products/${id}`);
  // const product = data
  // return { product };
}
