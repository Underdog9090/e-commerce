export default function Hero({ blok }) {
    return (
      <div className="hero">
        <h1>{blok?.title}</h1>
    
        {/* Display the description */}
        <p>{blok?.description}</p>
        <p>
          {blok?.button_link?.cached_url && (
            <a href={`/${blok?.button_link?.cached_url}`}>
              <button>{blok?.button_text}</button>
            </a>
          )}
        </p>
    
        {/* Display the images */}
        {blok?.image?.map((img, index) => (
          <img
            key={index}
            src={img?.filename}
            alt={blok?.title || `Image ${index + 1}`} // Fallback alt text if title is not available
            width={200}
            height={200}
          />
        ))}
      </div>
    );
  }
  