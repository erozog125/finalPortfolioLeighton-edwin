import './Footer.css'
import imageFacebook from "../images/facebook-logo-24.png";
import imageInstagram from "../images/instagram-logo-24.png";
import imageLinkedin from "../images/linkedin-logo-24.png";
import imageGitHub from "../images/github-logo-24.png";

function Footer() {
    return (
      <>
        <footer>
            <div>
            <a href="https://www.facebook.com/joge8807"><img src={imageFacebook} alt="facebook" /></a>
            <a href="https://www.instagram.com/jorge.leighton/"><img src={imageInstagram} alt="instagram" /></a>
            <a href="https://www.linkedin.com/in/jorge-eliécer-leighton-romero-35168a246/"><img src={imageLinkedin} alt="linkedin" /></a>
            <a href="https://github.com/Leighton8807"><img src={imageGitHub} alt="github" /></a>
            </div>
            <div>
                <p> &copy; Jorge Eliecer Leighton Romero 2023</p>
            </div>
        </footer>
      </>
    )
  }

  export default Footer;