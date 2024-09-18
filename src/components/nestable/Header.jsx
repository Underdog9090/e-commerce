export default function Header({ blok }) {
  console.log("HEADER", blok);
  return (
    <header>
      {/* Promo Text */}
      {config.promo_text && (
        <span className="text-white font-bold">{config.promo_text}</span>
      )}

      {/* Navigation Links */}
      <nav className="flex space-x-4">
        {config.nav_links.map((item) => (
          <a
            href={item.url.cached_url}
            key={item._uid}
            className="text-white hover:text-gray-300"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
