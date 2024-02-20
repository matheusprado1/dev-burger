import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({ onClick }) => {
   const [value, setValue] = useState("");


   return (
      <header>
         <div className="header__container">
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div className="header__cart">
               <button onClick={onClick}>
                  <MdShoppingCart size={25} />
                  <span>0</span>
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
