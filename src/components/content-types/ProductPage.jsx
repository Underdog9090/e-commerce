import { StoryblokComponent } from "@storyblok/react/rsc";

export default function ProductPage({ blok }) {
  const productDetails = blok?.productdetails?.[0]; // Access the first product detail block

  return (
    <main className="flex flex-col items-center">
      {/* Product Title */}
      <h1 className="text-2xl font-bold mb-4">{blok?.title}</h1>
      <p>{blok.description}</p>

      {/* Product Image */}
      {blok?.productImage?.filename && (
        <img
          src={blok.productImage.filename}
          alt={blok.productImage.alt || blok.title}
          className="w-full h-auto object-cover mb-4"
        />
      )}

      {/* Product Details */}
      {productDetails && (
        <div className="flex flex-col items-start w-full max-w-lg">
          <h2 className="text-xl font-semibold mb-2">{productDetails.title}</h2>
          
          {/* Product Description */}
          <p className="mb-4">{productDetails.description}</p>

          {/* Product Price */}
          <p className="text-lg font-bold mb-2">${productDetails.price}</p>

          {/* Product Colors */}
          {productDetails.colour && productDetails.colour.length > 0 && (
            <div className="mb-2">
              <span className="font-medium">Color: </span>
              {productDetails.colour.map((color, index) => (
                <span key={index} className="inline-block ml-1">
                  {color.colorname}
                </span>
              ))}
            </div>
          )}

          {/* Product Sizes */}
          {productDetails.size && productDetails.size.length > 0 && (
            <div className="mb-4">
              <span className="font-medium">Size: </span>
              {productDetails.size.map((size, index) => (
                <span key={index} className="inline-block ml-1">
                  {size.sizelabel}
                </span>
              ))}
            </div>
          )}

          {/* Add more details as necessary */}
        </div>
      )}
    </main>
  );
}
