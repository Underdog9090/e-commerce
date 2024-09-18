export default function DetailPage({ blok }) {
    console.log("DETAIL PAGE", blok);

    // Access product data directly from `blok`
    const product = blok; 

    return (
        <div className="product-detail">
            {/* Product Image */}
            {product.image && (
                <div className="product-image">
                    <img
                        src={product.image.filename}
                        alt={product.image.alt || product.title}
                        width="500"
                    />
                </div>
            )}

            {/* Product Title */}
            <h1>{product.title}</h1>

            {/* Product Price */}
            <p className="product-price">Price: ${product.price}</p>

            {/* Product Description */}
            <p className="product-description">{product.description}</p>

            {/* Product Colors */}
            {product.colour && product.colour.length > 0 && (
                <div className="product-colors">
                    <h3>Available Colors:</h3>
                    <ul>
                        {product.colour.map((color) => (
                            <li key={color._uid}>
                                <span>{color.colorname}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Product Sizes */}
            {product.size && product.size.length > 0 && (
                <div className="product-sizes">
                    <h3>Available Sizes:</h3>
                    <ul>
                        {product.size.map((size) => (
                            <li key={size._uid}>
                                <span>{size.sizelabel}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
