import classes from "./footer.module.css";
import twitter_ico from "../../assets/twitter.png";
import email_ico from "../../assets/email.png";
import instagram_ico from "../../assets/instagram.png";

const Footer = () => {
  return (
    <footer className={classes.footerWrapper}>
      <div className={classes.footerLine}></div>
      <h1>Fique por dentro das novidades</h1>
      <div className={classes.footerIcons}>
        <a href="/" target="_blank">
          <img src={twitter_ico} alt="twitter" />
        </a>
        <a href="/" target="_blank">
          <img src={email_ico} alt="email" />
        </a>
        <a href="/" target="_blank">
          <img src={instagram_ico} alt="instagram" />
        </a>
      </div>
      <p>Copyright © 2022 Zarein Inc.</p>
    </footer>
  );
};

export default Footer;
