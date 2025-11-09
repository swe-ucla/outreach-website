import './Contact.css';

import Footer from './Footer'

function Contact() {
  return (
    <div>
        <h1 className="title">contact us:</h1>
        <div className="box_row">
            <img className="image_box" src="/images/contact_1.png" />
            <img className="image_box" src="/images/contact_2.png" />
        </div>
        <Footer/>
    </div>
  );
}
export default Contact;