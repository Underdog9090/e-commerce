import { StoryblokCMS } from "@/utils/cms";
import Image from "next/image";

export default async function ProductList({ blok }) {
 
  
  // Fetch products from Storyblok
  const products = await StoryblokCMS.getProducts();
  console.log("PRODUCTLIST DATA", products);

  return (
    <div className="flex flex-col">
      {products.map((product, index) => {
        console.log("PRODUCT", product);
   
        return (
            <div key={index} className="product">
               <p>{product?.content?.title}</p> 
               <p>{product?.content?.description}</p>
               <Image 
                  src={product?.content?.productImage?.filename} 
                  alt={product.content.title} 
                  width={50} 
                  height={50} 
                />
            </div>
        );
      })}
    </div>
  );
}

              
