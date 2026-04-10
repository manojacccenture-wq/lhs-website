"use client";

import "@/app/styles/components/footer.css";

export default function Footer() {
  return (
    <footer className="footer mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP GRID */}
        <div className="footer-grid">

          {/* LOGO + DESC */}
          <div>
            <h2 className="footer-logo">Logo</h2>
            <p className="footer-text">
              Building practical systems that work in the real world.
            </p>

            {/* SOCIAL */}
            <div className="footer-social">
              <span>f</span>
              <span>t</span>
              <span>ig</span>
              <span>in</span>
              <span>yt</span>
            </div>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="footer-heading">Resources</h4>
            <a className="footer-link">Blogs</a>
            <a className="footer-link">Case studies</a>
            <a className="footer-link">Videos</a>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <a className="footer-link">Technology</a>
            <a className="footer-link">Delivery Framework</a>
            <a className="footer-link">Careers</a>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="footer-heading">Products</h4>
            <a className="footer-link">Products 1</a>
            <a className="footer-link">Products 2</a>
            <a className="footer-link">Products 3</a>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="footer-heading">Contacts us</h4>
            <p className="footer-contact">admin@lhindia.com</p>
            <p className="footer-contact">(+414) 687 - 5892</p>
            <p className="footer-contact">
              NO-12, Ranapratap Path, Behind ICICI Bank, Kadma,
              Jamshedpur, Jharkhand, 831005
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <span>Copyright © 2026 Livelihood System</span>

          <div>
            <span>All Rights Reserved |</span>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}