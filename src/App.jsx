const phoneNumbers = ['918423438308', '918808444108'];
const logoUrl = `${import.meta.env.BASE_URL}au-travel-mark.svg`;

const services = [
  { icon: '✈', title: 'Flight booking', text: 'Compare options and book domestic or international flights.' },
  { icon: '⌂', title: 'Hotels & stays', text: 'Find a comfortable stay that fits your plans and budget.' },
  { icon: '▣', title: 'Visa assistance', text: 'Get guidance with documents and visa application steps.' },
  { icon: '☾', title: 'Umrah packages', text: 'Plan your pilgrimage with thoughtful travel support.' },
  { icon: '◎', title: 'Holiday tours', text: 'Make your next family getaway easy from start to finish.' },
  { icon: '⇄', title: 'Money exchange', text: 'Get help arranging foreign currency for your journey.' },
];

const packages = [
  {
    name: 'Kashmir Getaway',
    place: 'Srinagar · Gulmarg · Pahalgam',
    duration: '5 nights / 6 days',
    price: 'From ₹24,999',
    theme: 'kashmir',
    symbol: '🏔',
    label: 'Mountain escape',
  },
  {
    name: 'Dubai Discovery',
    place: 'Dubai, United Arab Emirates',
    duration: '4 nights / 5 days',
    price: 'From ₹39,999',
    theme: 'dubai',
    symbol: '🌇',
    label: 'International favorite',
  },
  {
    name: 'Umrah Journey',
    place: 'Makkah · Madinah',
    duration: '10 nights / 11 days',
    price: 'Ask for a quote',
    theme: 'umrah',
    symbol: '🕌',
    label: 'Travel with care',
  },
];

function whatsappLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function formatPhone(number) {
  return `+${number.slice(0, 2)} ${number.slice(2, 5)} ${number.slice(5, 8)} ${number.slice(8)}`;
}

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="AU Tours and Travels home">
          <img className="brand-mark" src={logoUrl} alt="" />
          <span className="brand-name">AU <strong>TOURS &amp; TRAVELS</strong></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href={whatsappLink(phoneNumbers[0], 'Hello AU Tours & Travels, I would like to plan a trip.')}>
          <span aria-hidden="true">☏</span> Talk to an expert
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> YOUR JOURNEY, OUR CARE</p>
            <h1>Make room for<br /><em>new memories.</em></h1>
            <p className="hero-intro">
              From a family holiday to your sacred journey, we make travel planning feel simple.
              Tell us where you want to go — we’ll help with the rest.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#packages">Explore packages <span aria-hidden="true">→</span></a>
              <a className="button button-outline" href={whatsappLink(phoneNumbers[0], 'Hello, I would like help planning a trip.')}>
                <span aria-hidden="true">◉</span> Chat on WhatsApp
              </a>
            </div>
            <div className="hero-note">
              <span className="note-icon" aria-hidden="true">✦</span>
              <span><strong>Personal travel support</strong><small>Before, during, and after your trip</small></span>
            </div>
          </div>
          <div className="hero-art" aria-label="Illustration of a plane flying over mountains">
            <div className="sun" />
            <div className="hero-stamp">GO<br />EXPLORE</div>
            <div className="flight-path" />
            <div className="hero-plane" aria-hidden="true">✈</div>
            <div className="mountain mountain-back" />
            <div className="mountain mountain-front" />
            <div className="art-caption"><span>✦</span> THE WORLD IS WAITING</div>
          </div>
          <div className="hero-bottom">
            <span>Thoughtful planning</span><i /> <span>Trusted guidance</span><i /> <span>Journeys to remember</span>
          </div>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HOW WE HELP</p>
              <h2>Everything for a smoother trip</h2>
            </div>
            <p>One friendly team for the details that make a journey come together.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-icon" aria-hidden="true">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={whatsappLink(phoneNumbers[0], `Hello, I need help with ${service.title.toLowerCase()}.`)} aria-label={`Ask us about ${service.title}`}>Ask us <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="packages-section" id="packages">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">A LITTLE INSPIRATION</p>
                <h2>Popular ways to get away</h2>
              </div>
              <p>These sample itineraries are a starting point. We can tailor the details to you.</p>
            </div>
            <div className="package-grid">
              {packages.map((item) => (
                <article className="package-card" key={item.name}>
                  <div className={`package-art ${item.theme}`}>
                    <span className="package-label">{item.label}</span>
                    <span className="package-symbol" aria-hidden="true">{item.symbol}</span>
                    <span className="package-art-title">{item.name}</span>
                  </div>
                  <div className="package-info">
                    <p className="package-place">{item.place}</p>
                    <h3>{item.name}</h3>
                    <div className="package-meta"><span>◷ &nbsp;{item.duration}</span><strong>{item.price}</strong></div>
                    <a className="package-link" href={whatsappLink(phoneNumbers[0], `Hello, please share details about the ${item.name} package.`)}>
                      Enquire on WhatsApp <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="price-note">Package prices shown are sample placeholders. Final rates depend on your dates, group size, and inclusions.</p>
          </div>
        </section>

        <section className="contact-banner section-wrap" id="contact">
          <div>
            <p className="eyebrow">LET’S PLAN YOUR NEXT TRIP</p>
            <h2>Where would you like to go?</h2>
            <p>Share your plans with us and we’ll help you find the right way there.</p>
          </div>
          <div className="contact-actions">
            {phoneNumbers.map((number) => (
              <a className="button button-light" href={whatsappLink(number, 'Hello AU Tours & Travels, I would like to discuss a trip.')} key={number}>
                <span aria-hidden="true">◉</span> WhatsApp {formatPhone(number)}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#home">
              <img className="brand-mark" src={logoUrl} alt="" />
              <span className="brand-name">AU <strong>TOURS &amp; TRAVELS</strong></span>
            </a>
            <p>Making the details of travel a little easier, one journey at a time.</p>
            <p className="owners">Pro, Abdul Aleem Nadwi<br />Mohammad Ubaid Nadwi</p>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#services">Our services</a>
            <a href="#packages">Holiday packages</a>
            <a href="#packages">Umrah journeys</a>
          </div>
          <div className="footer-column">
            <h3>Get in touch</h3>
            <a href="mailto:autravels12@gmail.com">autravels12@gmail.com</a>
            {phoneNumbers.map((number) => (
              <a href={`tel:+${number}`} key={number}>{formatPhone(number)}</a>
            ))}
            <p>1st Floor Shahnaz Mahalipat Mau,<br />Lucknow</p>
          </div>
          <div className="footer-column footer-whatsapp">
            <h3>Quick chat</h3>
            <p>Choose either number to message our team on WhatsApp.</p>
            {phoneNumbers.map((number) => (
              <a className="whatsapp-link" href={whatsappLink(number, 'Hello AU Tours & Travels!')} key={number}>
                ◉ &nbsp; {formatPhone(number)}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AU Tours &amp; Travels</span>
          <span>Travel well. Travel thoughtfully.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
