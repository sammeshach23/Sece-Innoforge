import React from 'react';
import { Link } from 'react-router-dom';

import "./assets/img/favicon.png"
import "./assets/img/apple-touch-icon.png"
// import "./https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i";
import "./assets/vendor/animate.css/animate.min.css"
import "./assets/vendor/aos/aos.css"
import "./assets/vendor/bootstrap/css/bootstrap.min.css"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "./assets/vendor/boxicons/css/boxicons.min.css"
// import "./assets/vendor/remixicon/remixicon.css"
import "./assets/vendor/swiper/swiper-bundle.min.css"
import "./assets/css/style.css"

const Events = () => {
  return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SECE WEB</title>
        <meta name="description" content="true" />
        <meta name="keywords" />
        <link rel="icon" href="assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
        <link rel="stylesheet" href="assets/vendor/animate.css/animate.min.css" />
        <link rel="stylesheet" href="assets/vendor/aos/aos.css" />
        <link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/vendor/bootstrap-icons/bootstrap-icons.css" />
        <link rel="stylesheet" href="assets/vendor/boxicons/css/boxicons.min.css" />
        <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto"><Link to="/index.jsx">Sri Eshwar College of Engineering</Link></h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li><Link className="active" to="/index.jsx">Home</Link></li>
                <li><Link to="/about.jsx">About</Link></li>
                <li><Link to="/courses.jsx">Courses</Link></li>
                <li><Link to="/trainers.jsx">Faculty</Link></li>
                <li><Link to="/events.jsx">Events</Link></li>
                <li><Link to="/pricing.jsx">Fees Structure</Link></li>
                <li className="dropdown"><Link to="/#"><span>Academics</span> <i className="bi bi-chevron-down" /></Link>
                  <ul>
                    <li><Link to="/#">Fees Structure</Link></li>
                    <li className="dropdown"><Link to="/#"><span>Departments</span> <i className="bi bi-chevron-right" /></Link>
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
                <li><Link to="/contact.jsx">Contact</Link></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            <Link to="/courses.jsx" className="get-started-btn">Login/Signup</Link>
          </div>
        </header>
        <main id="main">
          <div className="breadcrumbs" data-aos="fade-in">
            <div className="container">
              <h2>Events</h2>
            </div>
          </div>
          <section id="events" className="events">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="card">
                    <div className="card-img">
                      <img src="assets/img/events-1.jpg" alt="..." />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title"><Link to>CodeCraft Winter Internship</Link></h5>
                      <p className="fst-italic text-center">Crafting Excellence in Java and Python web frameworks</p>
                      <p className="card-text">We are very glad to inform you that 15 Days Internship program on "CodeCraft Winter Internship: Crafting Excellence in Java and Python web frameworks" is organized for II AI&amp;DS and II CSE(AI&amp;ML) Students.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="card">
                    <div className="card-img">
                      <img src="assets/img/events-2.jpg" alt="..." />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title"><Link to>Dhrona</Link></h5>
                      <p className="fst-italic text-center">March 22nd &amp;23rd at 9:00 pm</p>
                      <p className="card-text">Dhrona 2024 was a techno-sports-culture-food fest that included events and happiness. Dhrona 2024 included a cultural feast, foodie fest, and sports day.</p>
                    </div>
                  </div>
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
                    <li><i className="bx bx-chevron-right" /> <Link to="/#">Home</Link></li>
                    <li><i className="bx bx-chevron-right" /> <Link to="/#">About us</Link></li>
                    <li><i className="bx bx-chevron-right" /> <Link to="/#">Services</Link></li>
                    <li><i className="bx bx-chevron-right" /> <Link to="/#">Terms of service</Link></li>
                    <li><i className="bx bx-chevron-right" /> <Link to="/#">Privacy policy</Link></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <Link to="/#">Web Design</Link></li>
                    <li><i className="bx bx-chevron-right" /> <Link to="/#">Web Development</Link></li>
                    <li><i className="bx bx-chevron-right" /> <Link to="/#">Product Management</Link></li>
                    <li><i className="bx bx-chevron-right" /> <Link to="/#">Marketing</Link></li>
                    <li><i className="bx bx-chevron-right" /> <Link to="/#">Graphic Design</Link></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Join Our Newsletter</h4>
                  <p>Join Our Newsletter For Daily Update About Our College</p>
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

export default Events;