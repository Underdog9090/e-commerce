import { StoryblokCMS } from "@/utils/cms";
import Image from "next/image";

export default async function ProductList({ blok }) {
  console.log("PRODUCTLIST", blok);
  
  // Fetch products from Storyblok
  const products = await StoryblokCMS.getProducts();
  console.log("PRODUCTLIST DATA", products);

  return (
    <div className="product-list">
      {products.map((product) => {
        const productContent = product.content;

        // Log each product's content to inspect the structure
        console.log("PRODUCT CONTENT:", productContent);

        // Check if the product has a valid image object and filename
        const productImage = productContent?.productImage?.filename;
        
        // Handle cases where product image is not available
        return (
          <div key={product.uuid} className="product-item">
            {/* Product Title */}
            <p>{productContent?.title || "No title available"}</p>

            {/* Log the image filename */}
            {console.log("PRODUCT IMAGE URL:", productImage)}

            {/* Product Image */}
            {productImage ? (
              <Image
                src={productImage}
                alt={productContent.title || "Product Image"}
                width={200}  // Adjust based on your layout
                height={200}
                objectFit="cover"  // Helps with consistent image rendering
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

              
