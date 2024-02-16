import './App.css';
import bannerimage from '../assets/bannerimage.png';
import bannerGirlImage from '../assets/bannerGirlImage.png';
import frameHomePage from '../assets/frameHomePage.png';
import saysAboutUS from '../assets/saysAboutUS.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Home = () => {
  const navigate = useNavigate()
  const scrollLeft = () => {
    document.querySelector('.tcardcontainer').scrollBy({
      left: -250, // Adjust according to your card width
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    document.querySelector('.tcardcontainer').scrollBy({
      left: 250, // Adjust according to your card width
      behavior: 'smooth',
    });
  };
  const Logout = () => {
    localStorage.removeItem('email');
    navigate('/');
  }

  useEffect(() => {
    if (!localStorage.getItem('email')) {
      navigate('/');
    }
  }, [navigate]);
  return (
    <div id='mainDiv'>
      <nav>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <div class="dropdown">
            <button class="dropbtn">Services</button>
            <div class="dropdown-content">
              <a href="#">Phots</a>
              <a href="#">Videos</a>
              <a href="#">Diary</a>
            </div>
          </div>

          <li>
            <a href='#'>Contact</a>
          </li>
          <button onClick={Logout} >Logout</button>
        </ul>
      </nav>
      <img id='banner' src={bannerimage} alt='Banner' />
      <div id='bannerText'>
        <div>
          Preserving Memories for Lifetimes: Share Your Journey in Our Time Capsule of Life
        </div>
        <button className='contactUS'>Contact Us</button>
      </div>
      <img id='bannerGirl' src={bannerGirlImage} alt='Banner Girl' />
      <div className='blogMain'>
        <p className='qTag'>WHO ARE WE?</p>
        <div className='qheadding'>Expert in Making Homes Smarter in Maharastra</div>
        <div className='qdiscription'>
          Lampsun innovation Pvt Ltd addresses Safety, Security, Comfort, Convenience, Energy
          Efficiency and Entertainment to enhance the living experience for residents in
          Apartments and Villas. We are specialist in providing complete home and office
          automation solutions for new and existing set up. We are also capable to take full
          responsibility for consultation,design, wiring, installation, connection and
          management that is tailored to suit your budget and requirements.
        </div>
      </div>
      <div className='blogMain'>
        <p className='qTag'>WHO ARE WE?</p>
        <div className='qheadding'>Expert in Making Homes Smarter in Maharastra</div>
        <div className='qdiscription'>
          Lampsun innovation Pvt Ltd addresses Safety, Security, Comfort, Convenience, Energy
          Efficiency and Entertainment to enhance the living experience for residents in
          Apartments and Villas. We are specialist in providing complete home and office
          automation solutions for new and existing set up. We are also capable to take full
          responsibility for consultation,design, wiring, installation, connection and
          management that is tailored to suit your budget and requirements.
        </div>
      </div>
      <div className='blogMain'>
        <p className='qTag'>WHO ARE WE?</p>
        <div className='qheadding'>Expert in Making Homes Smarter in Maharastra</div>
        <div className='qdiscription'>
          Lampsun innovation Pvt Ltd addresses Safety, Security, Comfort, Convenience, Energy
          Efficiency and Entertainment to enhance the living experience for residents in
          Apartments and Villas. We are specialist in providing complete home and office
          automation solutions for new and existing set up. We are also capable to take full
          responsibility for consultation,design, wiring, installation, connection and
          management that is tailored to suit your budget and requirements.
        </div>
      </div>
      <div className='blogMain'>
        <p className='qTag'>WHO ARE WE?</p>
        <div className='qheadding'>Expert in Making Homes Smarter in Maharastra</div>
        <div className='qdiscription'>
          Lampsun innovation Pvt Ltd addresses Safety, Security, Comfort, Convenience, Energy
          Efficiency and Entertainment to enhance the living experience for residents in
          Apartments and Villas. We are specialist in providing complete home and office
          automation solutions for new and existing set up. We are also capable to take full
          responsibility for consultation,design, wiring, installation, connection and
          management that is tailored to suit your budget and requirements.
        </div>
      </div>
      <div className='blogMain'>
        <p className='qTag'>WHO ARE WE?</p>
        <div className='qheadding'>Expert in Making Homes Smarter in Maharastra</div>
        <div className='qdiscription'>
          Lampsun innovation Pvt Ltd addresses Safety, Security, Comfort, Convenience, Energy
          Efficiency and Entertainment to enhance the living experience for residents in
          Apartments and Villas. We are specialist in providing complete home and office
          automation solutions for new and existing set up. We are also capable to take full
          responsibility for consultation,design, wiring, installation, connection and
          management that is tailored to suit your budget and requirements.
        </div>
      </div>

      <div id='ContainerframeHomePage'>
        <img id='frameHomePage' src={frameHomePage} alt='Frame Home Page Image' />
        <div class='startPortion'>
          <h1 id='H1ofStartPortion'>Bringing Foremost Innovation to You!</h1>
          <div id='disOfStartPortion'>
            We Seamlessly integrated cutting-edge and custom smart home technology for your home
            and office. Our Home Automation Price Starts at Rs 100000 Only.
          </div>
          <button id='StartButton'>Book Free Consultation Call!</button>
        </div>
      </div>
      <div className='saysAboutUSContainer'>
        <img className='saysAboutUSImage' src={saysAboutUS} alt='Says About Us' />
        <div className='saysAboutUsPostion'>
          <p className='TESTIMONIALSP'>TESTIMONIALS</p>
          <div className='whatSaysAboutUs'>What Our Clients Say About Us</div>
        </div>

        <div className='tcardcontainer'>
          <button className='scroll-left' onClick={scrollLeft}>
            &#10094;
          </button>

          <div className='Tcard'>
            <div className='Tcomments' >
              Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.
            </div>
            <div className='Tname' >
              Kyle Roberts DVM
            </div>
          </div>

          <div className='Tcard'>
            <div className='Tcomments' >

              I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone.
            </div>
            <div className='Tname' >
              Kyle Roberts DVM
            </div>
          </div>
          <div className='Tcard'>
            <div className='Tcomments' >

              If you want real marketing that works and effective implementation - mobile app's got you covered.

            </div>
            <div className='Tname' >
              Kyle Roberts DVM
            </div>
          </div>
          <button className='scroll-right' onClick={scrollRight}>
            &#10095;
          </button>
        </div>
      </div>
      <br />
      <div id='iframeContainer' >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27940672.013363563!2d36.681705999999984!3d31.25599200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1707598132871!5m2!1sen!2sin"
          id='mapView' width="98%" height="550" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  );
};

export default Home;
