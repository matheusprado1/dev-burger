export const ProductCard = ({ product, addToCart }) => {
    return (
        <li className="product__card">
            <div className="image__container">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="product__content">
                <h3>{product.name}</h3>
                <span className="product__category">
                    {product.category}
                </span>
                <span className="product__price">
                    {product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}
                </span>
                <button onClick={() => addToCart(product)}>
                    Adicionar
                </button>
            </div>
        </li>
    )
}