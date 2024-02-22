import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

export const CartModal = ({ cartList, onClick, removeProductFromCart, removeAllProductsFromCart }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className="modal-backdrop">
         <div className="cart__container" role="dialog">
            <div className="cart__header">
               <h2>Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" onClick={onClick}>
                  <MdClose size={21} />
               </button>
            </div>
            <div className="cart__content">
               <ul>

                  {cartList.length > 0 ? cartList.map((product, index) => (
                     <CartItemCard key={index}
                        product={product}
                        removeProductFromCart={() => removeProductFromCart(index)}
                     />
                  )) :
                     <div className="cart__empty">
                        <h3>Carrinho vazio</h3>
                        <p>Adicione produtos</p>
                     </div>
                  }
               </ul>
            </div>
            <div className="cart__total">
               <div className="total__container">
                  <span>Total</span>
                  <span className="total">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button onClick={() => removeAllProductsFromCart()}>Remover todos</button>
            </div>
         </div>
      </div>

   );
};
