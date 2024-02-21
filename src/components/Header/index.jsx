import { useState } from "react";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({ onClick, cartList }) => {
   const [value, setValue] = useState("");



   return (
      <header>
         <div className="header__container">
            <h2>Burger <span>Dev</span></h2>
            <div className="header__cart">
               <button onClick={onClick}>
                  <MdShoppingCart size={25} />
                  <span>{cartList.length}</span>
               </button>
               {/* <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form> */}
            </div>
         </div>
      </header>

   );
};
