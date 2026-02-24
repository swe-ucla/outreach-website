import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer_nav">
        <ul>
            <li className="footer_item">
                <img src="/images/ig_icon.png" className="footer_icon" alt="Instagram"/>
                <a href="https://www.instagram.com/swe.ucla/?hl=en" target="_blank" rel="noreferrer">@swe.ucla</a>
            </li>

            <li className="footer_item">
                <img src="/images/ig_icon.png" className="footer_icon" alt="Instagram"/>
                <a href="https://www.instagram.com/uclasweoutreach/?hl=en" target="_blank" rel="noreferrer">@uclasweoutreach</a>
            </li>
            
            <li className="footer_item">
                <a href="/">SWE Outreach Home</a>
            </li>
            
            <li className="footer_item">
                <img src="/images/globe_icon.png" className="footer_icon" alt="Website"/>
                <a href="https://ucla.swe.org/" target="_blank" rel="noreferrer">ucla.swe.org</a>
            </li>

            <li className="footer_item">
                <img src="/images/mail_icon.png" className="footer_icon" alt="Email"/>
                <a href="mailto:outreach.swe.ucla@gmail.com" target="_blank" rel="noreferrer">outreach.swe.ucla@gmail.com</a>
            </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;
