export default function LatestArrivals({ blok }) {
  return (
    <div className="arrivals bg-gray-100 py-16">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-4">{blok?.title}</h2>

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

      {/* Images in a flexbox row */}
      <div className="flex justify-center space-x-8">
        {blok?.image?.map((img, index) => (
          <div key={index}>
            <img
              src={img?.filename}
              alt={blok?.title || `Image ${index + 1}`}
              className="w-64 h-auto rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

  