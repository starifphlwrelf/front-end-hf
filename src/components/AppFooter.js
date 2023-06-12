import React from 'react';
import { BackTop } from 'antd';
const FooterPage = () => {
  return (
    <div className="footerCopyright">
      <div className="container">
      <div className="copyright">Copyright &copy; 2020 Starif</div>
      <nav>
        <ul>
          <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </nav>
        <BackTop>
          <div className="toTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
};
export default FooterPage;
