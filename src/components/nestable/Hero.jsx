import Image from "next/image";

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

      {/* Display the image */}
      <Image
        src={blok?.images?.filename}
        alt={blok?.title} // Changed to match the title key in the JSON
        width={200}
        height={200}
      />
    </div>
  );
}
