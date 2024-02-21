import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeProductFromCart, }) => {
   return (
      <li className="cart__card__item">
         <div>
            <div className="cart__img__container">
               <img src={product.img} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
         </div>
         <button aria-label="delete" title="Remover item"
            onClick={removeProductFromCart}
         >
            <MdDelete size={21} />
         </button>
      </li>
   );
};
