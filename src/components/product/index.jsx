import './product.scss';

export default function Product({image, brand, title, price}){
    return(
        <a className="product">
            <div className="product--image"><img src={image} title={title} alt={title} /></div>
            <div className="product--text">
                <div className="product--brand">{brand}</div>
                <div className="product--title">{title}</div>
            </div>
            <div className="product--price">${price}</div>
        </a>
    )
}