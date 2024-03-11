import React from 'react';
import { Link } from 'react-router-dom';

import "./assets/img/favicon.png"
import "./assets/img/apple-touch-icon.png"
import "./assets/vendor/animate.css/animate.min.css"
import "./assets/vendor/aos/aos.css"
import "./assets/vendor/bootstrap/css/bootstrap.min.css"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "./assets/vendor/boxicons/css/boxicons.min.css"
import "./assets/vendor/swiper/swiper-bundle.min.css"
import "./assets/css/style.css"

const Index = () => {
  return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SECE WEB</title>
        <meta name="description" content="true" />
        <meta name="keywords" />
        <link rel="icon" href="assets/img/favicon.pn.g" />
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
                <li className="dropdown">
                  <Link to="/#">
                    <span>Academics</span> <i className="bi bi-chevron-down" />
                  </Link>
                  <ul>
                    <li><Link to="//pricing.jsx">Fees Structure</Link></li>
                    <li className="dropdown">
                      <Link to="/#">
                        <span>Departments</span> <i className="bi bi-chevron-right" />
                      </Link>
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
        <section id="hero" className="d-flex justify-content-center align-items-center">
          <div className="container position-relative" data-aos="zoom-in" data-aos-delay={100}>
            <h1>Begin your,<br />Success story </h1>
            <h2>Developed by Sam Meshach</h2>
            <Link to="/courses.jsx" className="btn-get-started">Login/Signup</Link>
            </div>
            </section>
        <section id="hero" className="d-flex justify-content-center align-items-center">
          <div className="container position-relative" data-aos="zoom-in" data-aos-delay={100}>
            <h1>Begin your,<br />Success story </h1>
            <h2>Developed by Sam Meshach</h2>
            <Link to="/courses.jsx" className="btn-get-started">Login/Signup</Link>
          </div>
        </section>
        <main id="main">
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
                  <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                  <h3>Sri Eshwar at a Glance</h3>
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
          <section id="why-us" className="why-us">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="content">
                    <h3>Why Choose SECE?</h3>
                    <p>
                    </p><ul><li>Providing outcome and value based engineering education</li>
                      <li>Nurturing research and entrepreneurial culture</li>
                      <li>Enabling students to be industry ready and fulfill their career aspirations</li>
                      <li>Grooming students through behavioral and leadership training programs</li>
                      <li>Making students socially responsible</li>
                    </ul>
                    <p />
                    <div className="text-center">
                    <Link to="/about.jsx" className="more-btn">Learn More <i className="bx bx-chevron-right" /></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <i className="bx bx-receipt" />
                          <h4>Centre for Training and Placement
                          </h4>
                          <p>Sri Eshwar provides its students with the best placement opportunities. The college has a well-qualified and highly experienced in-house Training and Placement Team and an awesome training infrastructure.</p>
                        </div>
                      </div>
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <i className="bx bx-cube-alt" />
                          <h4>Centre for Foreign Languages
                          </h4>
                          <p>Sri Eshwar college of Engineering has established the Centre for Foreign Languages to make students imbibe communication skills in foreign languages. Giving the opportunity for our students to learn the most wanted Foreign Languages like Japanese and German
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-4 d-flex align-items-stretch">
                        <div className="icon-box mt-4 mt-xl-0">
                          <i className="bx bx-images" />
                          <h4>Centre for Higher Education</h4>
                          <p>Centre for Higher Education is formed with field specialists to identify the student’s interest &amp; potential and guide them to pursue their higher education. The team will also concentrate and convey the importance of qualifying CAT,MAT,GATE,GMAT,SAT.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="popular-courses" className="courses">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Courses</h2>
                <p>Popular Courses</p>
              </div>
              <div className="row" data-aos="zoom-in" data-aos-delay={100}>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                  <div className="course-item">
                    <img src="assets/img/course-1.jpg" className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Computer Science</h4>
                        <p className="price">₹180000</p>
                      </div>
                      <h3><Link to="/course-details.jsx">Computer science</Link></h3>
                      <p>Computer Science is a dynamic and fast growing area that has become an integral part of our daily lives. In the new age world, almost everything revolves around information technology and software.</p>
                      <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                          <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" alt="" />
                          <span>Sundar Pichai</span>
                        </div>
                        <div className="trainer-rank d-flex align-items-center">
                          <i className="bx bx-user" />&nbsp;500
                          &nbsp;&nbsp;
                          <i className="bx bx-heart" />&nbsp;650
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                  <div className="course-item">
                    <img src="assets/img/course-2.jpg" className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Data Science</h4>
                        <p className="price">₹200000</p>
                      </div>
                      <h3><Link to="/course-details.jsx">Artificial Intelligence and Data Science</Link></h3>
                      <p>The biggest ever technological advancement this century has witnessed is making machines to think and act like human, engaging the science of Artificial Intelligence, powered by Data</p>
                      <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                          <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt="" />
                          <span>Tony Stark</span>
                        </div>
                        <div className="trainer-rank d-flex align-items-center">
                          <i className="bx bx-user" />&nbsp;905
                          &nbsp;&nbsp;
                          <i className="bx bx-heart" />&nbsp;402
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                  <div className="course-item">
                    <img src="assets/img/course-3.jpg" className="img-fluid" alt="..." />
                    <div className="course-content">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Mechanical</h4>
                        <p className="price">₹100000</p>
                      </div>
                      <h3><Link to="/course-details.jsx">Mechanical Engineering</Link></h3>
                      <p>Mechanical Engineering is the mother of all engineering branches, driving the core engineering and other sectors over several centuries. </p>
                      <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-profile d-flex align-items-center">
                          <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt="" />
                          <span>Elon Musk</span>
                        </div>
                        <div className="trainer-rank d-flex align-items-center">
                          <i className="bx bx-user" />&nbsp;200
                          &nbsp;&nbsp;
                          <i className="bx bx-heart" />&nbsp;85
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </section>
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
                  <form action="true" method="post">
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

export default Index;