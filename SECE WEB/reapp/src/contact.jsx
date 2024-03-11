import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SECE WEB</title>
        <meta name="description" content="true" />
        <meta name="keywords" />
        <link rel="icon" href="assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png" />
      </head>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto"><Link to="/index.jsx">Sri Eshwar College of Engineering</Link></h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><Link to="/index.jsx">Home</Link></li>
              <li><Link to="/about.jsx">About</Link></li>
              <li><Link to="/courses.jsx">Courses</Link></li>
              <li><Link to="/trainers.jsx">Faculty</Link></li>
              <li><Link to="/events.jsx">Events</Link></li>
              <li><Link to="/pricing.jsx">Fees Structure</Link></li>
              <li className="dropdown">
                <Link to="/#">Academics <i className="bi bi-chevron-down" /></Link>
                <ul>
                  <li><Link to="/#">Fees Structure</Link></li>
                  <li className="dropdown">
                    <Link to="/#">Departments <i className="bi bi-chevron-right" /></Link>
                    <ul>
                      <li><Link to="/#">Ai&amp;DS</Link></li>
                      <li><Link to="/#">CSE</Link></li>
                      <li><Link to="/#">ECE</Link></li>
                      <li><Link to="/#">EEE</Link></li>
                      <li><Link to="/#">MECH</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/#">Library</Link></li>
                  <li><Link to="/#">Sports</Link></li>
                  <li><Link to="/#">Placements</Link></li>
                </ul>
              </li>
              <li><Link to="/contact.jsx" className="active">Contact</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          <Link to="/courses.jsx" className="get-started-btn">Login/Signup</Link>
        </div>
      </header>
      <main id="main">
      <div className="breadcrumbs" data-aos="fade-in">
          <div className="container">
            <h2>Contact Us</h2>
          </div>
        </div>
        <section id="contact" className="contact">
          <div data-aos="fade-up">
            <iframe 
              title="Sri Eshwar College of Engineering Location" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7829807748426!2d77.05794187451775!3d10.82791325824298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84ee37569ae7f%3A0x3c5b1824b6e79192!2sSri%20Eshwar%20College%20of%20Engineering%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1709182210490!5m2!1sen!2sin" 
              width={1500} 
              height={450} 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="container" data-aos="fade-up">
            <div className="row mt-5">
              <div className="col-lg-4">
                {/* Contact info */}
              </div>
              <div className="col-lg-8 mt-5 mt-lg-0">
                <form action="forms/contact.php" method="post" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer">
      <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Sam Meshach</h3>
                <p>
                  Sri Eshwar College <br />
                  Coimbatore<br />
                  Tamilnadu <br /><br />
                  <strong>Phone:</strong> +91 8148777587<br />
                  <strong>Email:</strong> sammeshach333@gmail.com<br />
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><Link to="/#">Home</Link></li>
                  <li><Link to="/#">About us</Link></li>
                  <li><Link to="/#">Services</Link></li>
                  <li><Link to="/#">Terms of service</Link></li>
                  <li><Link to="/#">Privacy policy</Link></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><Link to="/#">Web Design</Link></li>
                  <li><Link to="/#">Web Development</Link></li>
                  <li><Link to="/#">Product Management</Link></li>
                  <li><Link to="/#">Marketing</Link></li>
                  <li><Link to="/#">Graphic Design</Link></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <form action method="post">
                  <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              © Copyright <strong><span>Sammeshach</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              Designed by <Link to="/https://main--sammeshach.netlify.app/">Sammeshach</Link>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <Link to="/#" className="twitter"><i className="bx bxl-twitter" /></Link>
            <Link to="/#" className="facebook"><i className="bx bxl-facebook" /></Link>
            <Link to="/#" className="instagram"><i className="bx bxl-instagram" /></Link>
            <Link to="/#" className="google-plus"><i className="bx bxl-skype" /></Link>
            <Link to="/https://www.linkedin.com/in/sam-meshach-483877259/" className="linkedin"><i className="bx bxl-linkedin" /></Link>
          </div>
        </div>
      </footer>
      <div id="preloader" />
      <Link to="/#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></Link>
    </div>
  );
}

export default Contact;
