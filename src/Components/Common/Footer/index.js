import React from 'react';
import './footer.css';
import FooterInfo from './FooterInfo';

const footerList = [
  {
    id: 1,
    title: 'COMPANY',
    listLinks: [
      { title: 'Who We Are', link: '' },
      { title: 'Blog', link: '' },
      { title: 'Career', link: '' },
      { title: 'Report Fraud', link: '' },
      { title: 'Contact', link: '' },
      { title: 'Investor Relations', link: '' },
    ],
  },
  {
    id: 2,
    title: 'FOR FOODIES',
    listLinks: [
      { title: 'Code of Conduct', link: '' },
      { title: 'Community', link: '' },
      { title: 'Blogger Help', link: '' },
      { title: 'Mobile Apps', link: '' },
    ],
  },
  {
    id: 3,
    title: 'FOR RESTAURANTS',
    listLinks: [
      { title: 'Add Restaurants', link: '' },
      { title: 'Business App', link: '' },
      { title: 'Restaurant Widgets', link: '' },
      { title: 'Products for Business', link: '' },
    ],
  },
  {
    id: 4,
    title: 'FOR YOU',
    listLinks: [
      { title: 'Privacy', link: '' },
      { title: 'Terms', link: '' },
      { title: 'Security', link: '' },
      { title: 'Sitemap', link: '' },
    ],
  },
  {
    id: 5,
    title: 'SOCIAL LINKS',
    socialLinks: [
      { icon: <i class="fi fi-brands-facebook absolute-center"></i>, link: '' },
      { icon: <i class="fi fi-brands-twitter absolute-center"></i>, link: '' },
      {
        icon: <i class="fi fi-brands-instagram absolute-center"></i>,
        link: '',
      },
    ],
    appBadge: [
      {
        icon: <i class="fi fi-brands-apple absolute-center"></i>,
        title: 'App Store',
      },
      {
        icon: <i class="fi fi-brands-google absolute-center"></i>,
        title: 'Google Play',
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper max-width">
        <div className="footer-heading">
          <div className="footer-logo">
            <img
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/gwnfuhywcvf7jrordlk0"
              alt="Foody-logo"
              class="header-logo"
            />
          </div>
          <div className="footer-location">
            <div className="footer-country">
              <i class="fi fi-br-globe-alt absolute-center"></i>
              <span>Bangladesh</span>
              <i class="fi fi-br-angle-small-down absolute-center"></i>
            </div>
            <div className="footer-language">
              <i class="fi fi-br-globe absolute-center"></i>
              <span>English</span>
              <i class="fi fi-br-angle-small-down absolute-center"></i>
            </div>
          </div>
        </div>
        <div className="footer-link-wrapper">
          {footerList &&
            footerList.map((list) => (
              <FooterInfo listData={list} key={list.id} />
            ))}
        </div>
        <div className="footer-separator"></div>
        <div className="footer-credit">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy and Content Policies. All trademarks are properties of
          their respective owners. 2022 &copy; Foody<sup>TM</sup> Ltd. All
          rights reserved.
        </div>
        <div className="dev-credit absolute-center">
          Made with ❤️ by &nbsp;
          <a
            href="http://github.com/tanvir1418"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tanvir Ahmed
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
