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

const About = () => {
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
              <h2>About Us</h2>
            </div>
          </div>
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
                  <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                  <h3> Sri Eshwar at a Glance</h3>
                  <p className="fst-italic">
                    Sri Eshwar College of Engineering is an Autonomous Institution, Approved by AICTE, New Delhi and Affiliated to Anna University, Chennai.
                  </p>
                  <ul>
                    <li><i className="bi bi-check-circle" /> Sri Eshwar is located in a tranquil and conducive ambience creating an ideal learning environment to stimulate intellectual and personal growth.</li>
                    <li><i className="bi bi-check-circle" />  It is housed near Kinathukadavu, at a distance of 25km from Coimbatore Railway station.</li>
                    <li><i className="bi bi-check-circle" /> Sri Eshwar is committed to attain rigorous academic study and the excitement of discovery </li></ul>
                  <p>
                    Sri Eshwar has an enduring commitment to develop and maintain its courses on par with outstanding premier institutions.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="counts" className="counts section-bg">
            <div className="container">
              <div className="row counters">
                <div className="col-lg-3 col-6 text-center">
                  <span data-purecounter-start={0} data-purecounter-end={1800} data-purecounter-duration={1} className="purecounter" />
                  <p>Students</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span data-purecounter-start={0} data-purecounter-end={9} data-purecounter-duration={1} className="purecounter" />
                  <p>Courses</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span data-purecounter-start={0} data-purecounter-end={2} data-purecounter-duration={1} className="purecounter" />
                  <p>Events</p>
                </div>
                <div className="col-lg-3 col-6 text-center">
                  <span data-purecounter-start={0} data-purecounter-end={110} data-purecounter-duration={1} className="purecounter" />
                  <p>Trainers</p>
                </div>
              </div>
            </div>
          </section>
          <section id="testimonials" className="testimonials">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Testimonials</h2>
                <p>What are they saying</p>
              </div>
              <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-wrap">
                      <div className="testimonial-item">
                        <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                        <h3>Sam Meshach</h3>
                        <h4>Ceo &amp; Founder</h4>
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left" />
                          The faculty members and the professors are so nice and give a clear cut explanations about the courses which we study in our college life.
                          <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-wrap">
                      <div className="testimonial-item">
                        <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                        <h3>Stark Yeshuva</h3>
                        <h4>Designer</h4>
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left" />
                          The faculty and training staff are most experience in both technical and industrial knowledge
                          <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-wrap">
                      <div className="testimonial-item">
                        <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                        <h3>Harry Potter</h3>
                        <h4>Hogwards professor</h4>
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left" />
                          The faculty and training staff have knowledge in both technical and industrial knowledge
                          <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                      </div>
                    </div>
                  </div>&lt;
                  <div className="swiper-slide">
                    <div className="testimonial-wrap">
                      <div className="testimonial-item">
                        <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                        <h3>Vijay Joseph</h3>
                        <h4>Actor</h4>
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left" />
                          The faculty and training staff have knowledge in both technical and industrial knowledge
                          <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-wrap">
                      <div className="testimonial-item">
                        <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                        <h3>Ajith Kumar</h3>
                        <h4>Entrepreneur</h4>
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left" />
                          The faculty members and the professors are so nice and give a clear cut explanations
                          <i className="bx bxs-quote-alt-right quote-icon-right" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
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

export default About;