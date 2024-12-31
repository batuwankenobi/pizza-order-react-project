import React from "react";

import logoFooter from "/images/iteration-2-images/footer/logo-footer.svg";
import icon1 from "/images/iteration-2-images/footer/icons/icon-1.png";
import icon2 from "/images/iteration-2-images/footer/icons/icon-2.png";
import icon3 from "/images/iteration-2-images/footer/icons/icon-3.png";
import insta1 from "/images/iteration-2-images/footer/insta/li-0.png";
import insta2 from "/images/iteration-2-images/footer/insta/li-1.png";
import insta3 from "/images/iteration-2-images/footer/insta/li-2.png";
import insta4 from "/images/iteration-2-images/footer/insta/li-3.png";
import insta5 from "/images/iteration-2-images/footer/insta/li-4.png";
import insta6 from "/images/iteration-2-images/footer/insta/li-5.png";


export default function Footer() {
	return (
	    <footer>
		  <section className="footer-container">
			<section className="footer-left">
			    <div className="head-logo">
				  <img src={logoFooter} alt="Logo of Teknolojik Yemekler" />
			    </div>
			    <div className="info">
                        <img src={icon1} alt="Address Icon" />
                        <p>
                            341 Londonderry Road,
                            <br /> İstanbul Türkiye
                        </p></div>
                    <div className="info">
                        <img src={icon2} alt="Email Icon" />
                        <p>aciktim@teknolojikyemekler.com</p>
                    </div> <div className="info">
                        <img src={icon3} alt="Phone Icon" />
                        <p>+90 216 123 45 67</p>
                    </div> </section>
                <section className="footer-middle">
                    <h1>Hot Menu</h1>
                    <p>Terminal Pizza</p>
                    <p>5 Kişilik Hackathlon Pizza</p>
                    <p>useEffect Tavuklu Pizza</p>
                    <p>Beyaz Console Frosty</p>
                    <p>Testler Geçti Mutlu Burger</p>
                    <p>Position Absolute Acı Burger</p>
                </section><div className="instagram-gallery">
                    <h1>Instagram</h1>
                    <div className="instagram-posts">
                        <img src={insta1} alt="Instagram Post 1" />
                        <img src={insta2} alt="Instagram Post 2" />
                        <img src={insta3} alt="Instagram Post 3" />
                        <img src={insta4} alt="Instagram Post 4" />
                        <img src={insta5} alt="Instagram Post 5" />
                        <img src={insta6} alt="Instagram Post 6" />
                    </div></div>
            </section>
            <section className="footer-bottomblock">
                <div className="orijinal">
                    <p>© 2023 Teknolojik Yemekler.</p>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com/username" title="Facebook">
                        <i className="fa-brands fa-facebook" />
                    </a>
                    <a href="https://twitter.com/username" title="Twitter">
                        <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="https://instagram.com/username" title="Instagram">
                        <i className="fa-brands fa-instagram" />
                    </a>
                </div>
            </section>
        </footer>
    );
}