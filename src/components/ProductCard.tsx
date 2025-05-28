interface Card{
    title: string,
    image: string,
    brand: string,
    price: number
}

const ProductCard : React.FC <Card> = (props) => {
    const {title, image, brand, price} = props
  return (
        <div className = "product">
            <img src = {image} alt = {title}/>
            <div className="product-brand">{brand}</div>
                <div className="product-detail">
                    <div>{title}</div>
                    <div>${price}</div>
                </div>
        </div>
  )
}

export default ProductCard