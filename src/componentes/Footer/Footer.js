import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://github.com/">
          <img src="/img/github.png" alt="github" />
        </a>
        <a href="https://linkedin.com/">
          <img src="/img/twitter.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com/">
          <img src="/img/instagram.png" alt="Instagram" />
        </a>
      </div>
      <img className="footer-logo" src="/img/logo.png" alt="Logo" />
      <strong>Desarrolado por Antony Rodriguez</strong>
    </footer>
  );
};

export default Footer;
