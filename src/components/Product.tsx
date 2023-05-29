import { IProduct } from "../../types"
interface IProductProps {
    product: IProduct;
    handleAddToCartClick(id: number): void;
}
const Product = ({ product, handleAddToCartClick}: IProductProps) => {
    return (
        <>
        <p>{product.id}. {product.title}🚀 {product.price}💵</p>
        <button onClick={()=>handleAddToCartClick(product.id)}>Add to cart</button>
        </>
    )
}

export default Product