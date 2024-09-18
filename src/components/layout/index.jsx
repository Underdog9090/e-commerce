// //Uses config set global components for the layout
// export default function Layout({ config, children }) {
//     //Create at least a header and footer component
//     //Use console.log to determine blok object structure if unsure...
//     return (
//         <>
//             <header>
                
//             </header>
//             <main>{children}</main>
//             <footer>

//             </footer>
//         </>
//     );
// }

export default function Layout({ config, children }) {
    // Destructure config to extract necessary data
    const { nav_links, promo_text, cart_count, cart_icon, support_text, search_placeholder } = config.content.config[0];
    const footerData = config.content.config[1]; // The footer data
  
    return (
      <>
        {/* Header Section */}
        <header>
          <nav>
            <ul className="nav-links">
              {nav_links.map((link) => (
                <li key={link._uid}>
                  <a href={`/${link.url.cached_url}`}>{link.label}</a>
                </li>
              ))}
            </ul>
            {/* Display Cart and Promo */}
            <div className="promo-cart">
              <span className="promo-text">{promo_text}</span>
              <span className="cart">
                <img src={cart_icon.filename} alt="Cart Icon" />
                <span>{cart_count}</span>
              </span>
              <span className="support">{support_text}</span>
              <input type="text" placeholder={search_placeholder} className="search-input" />
            </div>
          </nav>
        </header>
  
        {/* Main Content */}
        <main>{children}</main>
  
        {/* Footer Section */}
        <footer>
          <div className="footer-newsletter">
            <h2>{footerData.titlte}</h2>
            <p>{footerData.description}</p>
            <input type="email" placeholder={footerData.email_placeholder} />
            <button>{footerData.button_text}</button>
          </div>
          {/* Footer Links Section */}
          <div className="footer-links">
            {footerData.link_sections.map((section) => (
              <div key={section._uid} className="footer-link-section">
                <h3>{section.label}</h3>
                <ul>
                  {section.url.map((link) => (
                    <li key={link._uid}>
                      <a href={`/${link.url.cached_url}`}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </footer>
      </>
    );
  }
  
