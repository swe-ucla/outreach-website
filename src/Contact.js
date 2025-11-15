import './Contact.css';
import Header from './components/Header';
import Footer from './components/Footer'

function Contact() {
  return (
    <div>
        <Header />
        <h1 className="contact_title">contact us:</h1>
        <div className="box_row">
            <img className="image_box" src="/images/contact_1.png" />
            <img className="image_box" src="/images/contact_2.png" />
        </div>
        <Footer/>
    </div>
  );
}
export default Contact;