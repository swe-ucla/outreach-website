import './Contact.css';
import Header from './components/Header';
import Footer from './components/Footer'

function Contact() {
  return (
    <div>
        <Header />
        <h1 className="contact_title">contact us:</h1>
        <div className="box_row">
            <a href="https://forms.gle/eE1FqQzhnTRzESs86" target="_blank">
              <img className="image_box" src="/images/contact_1.png" />
            </a>
            <a href="mailto:outreach.swe.ucla@gmail.com" target="_blank">
              <img className="image_box" src="/images/contact_2.png" />
            </a>
        </div>
        <Footer/>
    </div>
  );
}
export default Contact;