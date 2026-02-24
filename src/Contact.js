import './Contact.css';
import Header from './components/Header';
import Footer from './components/Footer'

function Contact() {
  return (
    <div className='contact-wrapper'>
        <Header />
        <div className='contact-content'>
          <h1 className="contact_title">contact us:</h1>
          <div className="box_row">
              <a href="https://forms.gle/eE1FqQzhnTRzESs86" target="_blank" rel="noreferrer">
                <img className="image_box" src="/images/contact_1.png" alt="Outreach interest form" />
              </a>
              <a href="mailto:outreach.swe.ucla@gmail.com" target="_blank" rel="noreferrer">
                <img className="image_box" src="/images/contact_2.png" alt="Email Outreach SWE" />
              </a>
          </div>
        </div>
        
        <Footer/>
    </div>
  );
}
export default Contact;
