import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [isOpen, setIsOpen] = useState(false);

   const toggleModal = () => {
      setIsOpen(!isOpen);
   }

   useEffect(() => {
      const getProducts = async () => {
         const { data } = await api.get("/products");
         console.log(data);
         setProductList(data);

      }
      getProducts();
   }, [])

   useEffect(() => {
      isOpen ? document.body.classList.add('modal-open') :
         document.body.classList.remove('modal-open')
   }, [isOpen]);


   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header onClick={toggleModal} />
         <main>
            <ProductList productList={productList} />
            {isOpen &&
               <CartModal
                  cartList={cartList}
                  onClick={toggleModal}
               />
            }
         </main>
      </>
   );
};
