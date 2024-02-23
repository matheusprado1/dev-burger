import { useForm } from "react-hook-form";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({ onClick, cartList, onSearch }) => {
   const { register, handleSubmit } = useForm();

   const submit = (formData) => {
      onSearch(formData.product)
   }



   return (
      <header>
         <div className="header__container">
            <h2>Burger <span>Dev</span></h2>
            <div className="header__cart">
               <button onClick={onClick}>
                  <MdShoppingCart size={25} />
                  <span>{cartList.length}</span>
               </button>
               <form className="search__container" onSubmit={handleSubmit(submit)}>
                  <input type="text" {...register("product")} />
                  <button type="submit">
                     <MdSearch size={21} />
                  </button>
               </form>
            </div>
         </div>
      </header>

   );
};
