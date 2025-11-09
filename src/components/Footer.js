import './Footer.css';

function Footer() {
  return (
    <header className="footer">
      <nav className="nav">
        <ul>
            <li className="footer_item">
                <img src="/images/ig_icon.png" className="icon"/>
                <a href="https://www.instagram.com/swe.ucla/?hl=en" target="_blank">@swe.ucla</a>
            </li>

            <li className="footer_item">
                <img src="/images/ig_icon.png" className="icon"/>
                <a href="https://www.instagram.com/uclasweoutreach/?hl=en" target="_blank">@uclasweoutreach</a>
            </li>
            
            <li className="footer_item">
                <a href="/" target="_blank">[web url TBD]</a>
            </li>
            
            <li className="footer_item">
                <img src="/images/globe_icon.png" className="icon"/>
                <a href="https://ucla.swe.org/" target="_blank">ucla.swe.org</a>
            </li>

            <li className="footer_item">
                <img src="/images/mail_icon.png" className="icon"/>
                <a href="mailto:outreach.swe.ucla@gmail.com" target="_blank">outreach.swe.ucla@gmail.com</a>
            </li>
        </ul>
      </nav>
    </header>
  );
}
export default Footer;