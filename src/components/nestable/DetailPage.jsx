export default function DetailPage({ blok }) {
    console.log("DETAIL PAGE", blok);
  
    // Access product data directly from `blok`
    const product = blok; 
  
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Flex Container for Product Image and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Product Image */}
          {product.image && (
            <div className="product-image">
              <img
                src={product.image.filename}
                alt={product.image.alt || product.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
  
          {/* Product Details */}
          <div className="product-details">
            
            {/* Product Title */}
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
  
            {/* Product Price */}
            <p className="text-2xl font-semibold text-gray-900 mb-6">${product.price}</p>
  
            {/* Product Description */}
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
  
            {/* Product Colors */}
            {product.colour && product.colour.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Color</h3>
                <div className="flex space-x-4">
                  {product.colour.map((color) => (
                    <span
                      key={color._uid}
                      className="inline-block w-8 h-8 rounded-full border border-gray-300"
                      style={{ backgroundColor: color.colorname }}
                    ></span>
                  ))}
                </div>
              </div>
            )}
  
            {/* Product Sizes */}
            {product.size && product.size.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Size</h3>
                <div className="flex space-x-2">
                  {product.size.map((size) => (
                    <span
                      key={size._uid}
                      className="inline-block px-4 py-2 border border-gray-300 text-sm text-gray-800 rounded-md"
                    >
                      {size.sizelabel}
                    </span>
                  ))}
                </div>
              </div>
            )}
  
            {/* Size & Fit Guide (Optional link) */}
            <div className="mt-4">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Size & Fit Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  