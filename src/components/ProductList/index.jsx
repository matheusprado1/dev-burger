import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList }) => {
   return (
      <ul className="products__container">
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </ul>
   );
};
