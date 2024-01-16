import { useParams } from "react-router-dom";

import Product from "../components/Product";
import useGetProduct from "../hooks/useGetProduct";

export default function ItemPage() {
  const { id } = useParams();
  const { product } = useGetProduct(id);
  const item = product;

  if (!item) return <div>Item not found</div>;

  const { description } = item;

  return (
    <div style={{ display: "flex" }}>
      <Product product={item} />
      <div style={{ marginTop: "10em" }}>{description}</div>
    </div>
  );
}
