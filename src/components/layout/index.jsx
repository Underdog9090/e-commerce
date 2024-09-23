export default function Layout({ config, children }) {
  const {
    nav_links,
    promo_text,
    cart_count,
    cart_icon,
    support_text,
    search_placeholder,
  } = config.content.config[0];
  const footerData = config.content.config[1]; // The footer data

  return (
    <>
      <header className="bg-gray-100 border-b border-gray-200">
        <div className="bg-black text-white text-sm py-2 flex justify-between items-center px-6">
          <div>USD</div>
          <div>{promo_text}</div>
          <div>{support_text}</div>
        </div>
        <div className="flex items-center py-4 px-6">
          <nav className="flex space-x-4 text-gray-700 mx-auto">
            {nav_links.map((link) => (
              <a
                key={link._uid}
                href={`/${link.url.cached_url}`}
                className="hover:text-blue-500"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex space-x-4 items-center ml-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder={search_placeholder}
                className="border rounded-full pl-8 pr-4 py-1 text-gray-500"
              />
              <svg
                className="w-5 h-5 absolute left-2 top-2 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M15 11A6 6 0 1111 5a6 6 0 014 1.73A6 6 0 0115 11z"
                />
              </svg>
            </div>
            {/* Cart Icon */}
            <div className="text-gray-700 relative">
              <img
                src={cart_icon.filename}
                alt="Cart Icon"
                className="h-6 w-6 inline"
              />
              <span className="ml-2">{cart_count}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-10">
        {/* Newsletter Section */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <h2 className="text-xl font-bold mb-2">{footerData.title}</h2>
          <p className="text-gray-600 mb-4">{footerData.description}</p>
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder={footerData.email_placeholder}
              className="border border-gray-300 rounded-md p-2 w-64"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              {footerData.button_text}
            </button>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="bg-gray-200 py-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
            {footerData.link_sections.map((section) => (
              <div key={section._uid}>
                <h3 className="font-semibold text-gray-700 mb-3">
                  {section.label}
                </h3>
                <ul className="space-y-2">
                  {section.url.map((link) => (
                    <li key={link._uid}>
                      <a
                        href={`/${link.url.cached_url}`}
                        className="text-gray-600 hover:text-blue-500"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
