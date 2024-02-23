import { useEffect, useState, useRef } from "react";
import useEscapeKey from "../../hooks/useEscapeKey";
import useOutsideCLick from "../../hooks/useOutsideClick";
import { api } from "../../services/api";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [cartModalIsOpen, setCartModalIsOpen] = useState(false);
   const [filteredProductList, setFilteredProductList] = useState([]);
   const ref = useRef();

   useOutsideCLick(ref, () => {
      if (cartModalIsOpen) setCartModalIsOpen(false);
   })

   useEscapeKey(() => {
      if (cartModalIsOpen) setCartModalIsOpen(false);
   })

   const toggleModal = () => {
      setCartModalIsOpen(!cartModalIsOpen);
   }

   const handleSearch = (searchTerm) => {
      const filteredProducts = productList.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProductList(filteredProducts)
   }

   const addToCart = (index) => {
      const selectedProduct = filteredProductList.length > 0 ? filteredProductList[index] : productList[index];
      setCartList(oldCartList => {
         const newCartList = [...oldCartList, selectedProduct];
         localStorage.setItem("cart", JSON.stringify(newCartList));
         return newCartList;
      });
   }


   const removeProductFromCart = (index) => {
      setCartList(oldCartList => {
         const updatedCartList = oldCartList.filter((item, i) => i !== index);
         localStorage.setItem("cart", JSON.stringify(updatedCartList));
         return updatedCartList;
      });
   }

   const removeAllProductsFromCart = () => {
      setCartList([])
      localStorage.setItem("cart", [])
   }

   // Carregar dados do localStorage no início
   useEffect(() => {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
         setCartList(JSON.parse(savedCart));
      }
   }, []);

   useEffect(() => {
      const getProducts = async () => {
         const { data } = await api.get("/products");
         setProductList(data);
      }
      getProducts();
   }, []);

   useEffect(() => {
      cartModalIsOpen ? document.body.classList.add('modal-open')
         : document.body.classList.remove('modal-open')
   }, [cartModalIsOpen]);

   return (
      <>
         <Header
            onClick={toggleModal}
            cartList={cartList}
            onSearch={handleSearch}
         />
         <main>
            <ProductList
               productList={filteredProductList.length > 0 ? filteredProductList : productList}
               addToCart={addToCart}
            />
            {cartModalIsOpen &&
               <CartModal
                  ref={ref}
                  cartList={cartList}
                  onClick={toggleModal}
                  removeProductFromCart={removeProductFromCart}
                  removeAllProductsFromCart={removeAllProductsFromCart}
               />
            }
         </main>
      </>
   );
};
