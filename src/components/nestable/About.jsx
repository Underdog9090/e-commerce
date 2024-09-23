export default function About({ blok }) {
  console.log("ABOUT blok:", blok);

  return (
    <div className="hero bg-gray-100 py-16 flex flex-col items-center">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
        {blok?.title}
      </h1>

      {Array.isArray(blok?.content) ? (
        <div className="text-center text-lg text-gray-700 max-w-2xl mx-auto">
          {blok.content.map((item, index) => (
            <p key={index} className="mb-2">
              {item}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto">
          {blok?.content}
        </p>
      )}
    </div>
  );
}
