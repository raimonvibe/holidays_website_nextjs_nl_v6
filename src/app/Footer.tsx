import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faYoutube,
  faTiktok,
  faInstagram,
  faMedium,
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const metadata = {
  title: 'Footer | Raimonvibe',
  description: 'Voettekst met links naar sociale media en juridische informatie.',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="container-fluid">
        <div className="spacing4"></div>
        <a
          className="footer-link"
          href="https://x.com/raimonvibe/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link naar Twitter"
        >
          <FontAwesomeIcon icon={faXTwitter} size="1x" />
        </a>
        <a
          className="footer-link footer-link2"
          href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link naar YouTube"
        >
          <FontAwesomeIcon icon={faYoutube} size="1x" />
        </a>
        <div className="spacing4"></div>
        <a
          className="footer-link"
          href="https://www.tiktok.com/@raimonvibe/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link naar TikTok"
        >
          <FontAwesomeIcon icon={faTiktok} size="1x" />
        </a>
        <a
          className="footer-link"
          href="https://www.instagram.com/raimonvibe/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link naar Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="1x" />
        </a>
        <div className="spacing4"></div>
        <a
          className="footer-link"
          href="https://medium.com/@raimonvibe/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link naar Medium"
        >
          <FontAwesomeIcon icon={faMedium} size="1x" />
        </a>
        <a
          className="footer-link footer-link3"
          href="https://github.com/raimonvibe/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link naar GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </a>
        <div className="spacing4"></div>
        <a
          className="footer-link footer-link3"
          href="https://www.linkedin.com/in/raimonvibe/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link naar LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
        <a
          className="footer-link"
          href="https://www.facebook.com/profile.php?id=61563450007849"
          target="_blank"
          rel="noreferrer"
          aria-label="Link naar Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} size="1x" />
        </a>
        <div className="spacing4"></div>
        <Link
          className="footer-link footer-link2"
          href="/PrivacyNotice"
          aria-label="Link naar Privacyverklaring"
        >
          Privacyverklaring
        </Link>
        <div className="spacing4"></div>
        <Link
          className="footer-link footer-link2"
          href="/LegalNotice"
          aria-label="Link naar Juridische kennisgeving"
        >
          Juridische kennisgeving
        </Link>
        <p className="footer-link">
          <a
            className="footer-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.raimonvibe.nl/"
            aria-label="Link naar Raimonvibe Startpagina"
          >
            © {currentYear} raimonvibe
          </a>
        </p>
      </footer>
    </div>
  );
}
