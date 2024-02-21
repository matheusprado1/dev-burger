import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, addToCart }) => {
   return (
      <ul className="products__container">
         {productList.map((product, index) => (
            <ProductCard key={product.id}
               product={product}
               addToCart={() => addToCart(index)}
            />
         ))}
      </ul>
   );
};
