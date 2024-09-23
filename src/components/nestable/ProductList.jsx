import { StoryblokCMS } from "@/utils/cms";
import Image from "next/image";

export default async function ProductList({ blok }) {
  // Fetch products from Storyblok
  const products = await StoryblokCMS.getProducts();
  
  // Assume blok has the header section data (title, description, buttons)
  const { title, description, buttons } = blok?.headerSection || {};

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <p className="mt-4 text-lg text-gray-600">{description}</p>

        {/* Buttons for Categories */}
        <div className="mt-8 flex justify-center space-x-4">
          {buttons?.map((button, index) => (
            <a
              key={index}
              href={button.link}
              className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-lg"
            >
              {button.label}
            </a>
          ))}
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border p-4 bg-white shadow-md rounded-md">
            {/* Product Image */}
            {product?.content?.productImage?.filename && (
              <Image
                src={product.content.productImage.filename}
                alt={product.content.title}
                width={300}
                height={300}
                className="w-full h-auto object-cover mb-4"
              />
            )}

            {/* Product Title */}
            <h2 className="text-lg font-semibold mb-2">{product?.content?.title}</h2>

            {/* Product Price */}
            <p className="text-lg font-bold mb-2">{product?.content?.price} kr</p>

            {/* Product Size */}
            {product?.content?.size && product.content.size.length > 0 && (
              <div className="mb-4">
                <span className="font-medium">Available Sizes: </span>
                {product.content.size.map((sizeOption, sizeIndex) => (
                  <span key={sizeIndex} className="inline-block ml-2">
                    {sizeOption.sizelabel}
                  </span>
                ))}
              </div>
            )}

            {/* Product Description */}
            <p className="text-sm text-gray-600">{product?.content?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
