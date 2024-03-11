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

const Trainers = () => {
  return (
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Course Details</title>
        <meta content name="description" />
        <meta content name="keywords" />
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
        <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="assets/css/style.css" rel="stylesheet" />
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
              <h2>Faculty Details</h2>
            </div>
          </div>
          <section id="trainers" className="trainers">
            <div className="container" data-aos="fade-up">
              <div className="row" data-aos="zoom-in" data-aos-delay={100}>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="member">
                    <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" alt="" />
                    <div className="member-content">
                      <h4>Sundar Pichai</h4>
                      <span>Computer Science</span>
                      <p>
                        Computer Science is a dynamic and fast growing area that has become an integral part of our daily lives. 
                      </p>
                      <div className="social">
                        <Link to><i className="bi bi-twitter" /></Link>
                        <Link to><i className="bi bi-facebook" /></Link>
                        <Link to><i className="bi bi-instagram" /></Link>
                        <Link to><i className="bi bi-linkedin" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="member">
                    <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt="" />
                    <div className="member-content">
                      <h4>Tony Stark</h4>
                      <span>Artificial Intelligence and datascience</span>
                      <p>
                        The biggest ever technological advancement this century has witnessed is making machines to think and act like human, engaging the science of Artificial Intelligence, powered by Data
                      </p>
                      <div className="social">
                        <Link to><i className="bi bi-twitter" /></Link>
                        <Link to><i className="bi bi-facebook" /></Link>
                        <Link to><i className="bi bi-instagram" /></Link>
                        <Link to><i className="bi bi-linkedin" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="member">
                    <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt="" />
                    <div className="member-content">
                      <h4>Elon Musk</h4>
                      <span>Mechanical Engineering</span>
                      <p>
                        Mechanical Engineering is the mother of all engineering branches, driving the core engineering and other sectors over several centuries.
                      </p>
                      <div className="social">
                        <Link to><i className="bi bi-twitter" /></Link>
                        <Link to><i className="bi bi-facebook" /></Link>
                        <Link to><i className="bi bi-instagram" /></Link>
                        <Link to><i className="bi bi-linkedin" /></Link>
                      </div>
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

export default Trainers;