import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeProductFromCart, }) => {
   return (
      <li className="cart__card__item">
         <div>
            <div className="cart__img__container">
               <img src={product.img} alt={product.name} />
            </div>
            <div className="cart__info">
               <h3>{product.name}</h3>
               <p>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</p>
            </div>
         </div>
         <button aria-label="delete" title="Remover item"
            onClick={removeProductFromCart}
         >
            <MdDelete size={21} />
         </button>
      </li>
   );
};
