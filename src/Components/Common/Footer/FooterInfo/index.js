import React from 'react';
import './footerInfo.css';

const FooterInfo = ({ listData }) => {
  return (
    <div className="footer-list">
      {listData.title && (
        <div className="footer-list-title">{listData.title}</div>
      )}
      {listData.listLinks &&
        listData.listLinks.map((item) => (
          <a href={item.link} className="footer-list-subtitle cur-po">
            {item.title}
          </a>
        ))}
      <div className="social-links">
        {listData.socialLinks &&
          listData.socialLinks.map((item) => (
            <a href={item.link}>{item.icon}</a>
          ))}
      </div>
      <div className="app-links">
        {listData.appBadge &&
          listData.appBadge.map((item) => (
            <div className="app-badge">
              {item.icon}
              <span className="app-title">{item.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FooterInfo;
