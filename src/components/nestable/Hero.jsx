import Image from "next/image";

export default function Hero({ blok }) {
  return (
    <div className="hero bg-gray-100 py-16">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-4">{blok?.title}</h1>

      {/* Description */}
      <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-6">
        {blok?.description}
      </p>

      {/* Button */}
      {blok?.button_link?.cached_url && (
        <div className="text-center mb-10">
          <a href={`/${blok?.button_link?.cached_url}`}>
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
              {blok?.button_text}
            </button>
          </a>
        </div>
      )}

      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={blok?.images?.filename}
          alt={blok?.title}
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
