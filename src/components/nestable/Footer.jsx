export default function Footer({ blok }) {
    return (
      <div className="flex flex-wrap">
        {config.link_sections.map((section) => (
          <div key={section._uid} className="mr-8 mb-4">
            <p className="font-bold">{section.label}</p>
            <ul>
              {section.url.map((link) => (
                <li key={link._uid}>
                  <a
                    href={link.url.cached_url}
                    className="text-gray-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  