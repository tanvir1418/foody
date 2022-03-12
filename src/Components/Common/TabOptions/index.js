import React from 'react';
import './tabOptions.css';

const tabs = [
  {
    id: 1,
    name: 'Delivery',
    active_img: 'https://cdn-icons-png.flaticon.com/512/2830/2830305.png',
    backdrop: '#FCEEC0',
    inactive_img: 'https://cdn-icons-png.flaticon.com/512/2830/2830175.png',
  },
  {
    id: 2,
    name: 'Dining Out',
    active_img: 'https://cdn-icons-png.flaticon.com/512/2086/2086880.png',
    backdrop: '#E5F3F3',
    inactive_img: 'https://cdn-icons-png.flaticon.com/512/2081/2081991.png',
  },
  {
    id: 3,
    name: 'Nightlife',
    active_img: 'https://cdn-icons-png.flaticon.com/512/1934/1934239.png',
    backdrop: '#EDF4FF',
    inactive_img: 'https://cdn-icons-png.flaticon.com/512/1934/1934146.png',
  },
];

const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-options">
      <div className="max-width options-wrapper">
        {tabs.map((tab) => {
          return (
            <div onClick={() => setActiveTab(tab.name)} className={`tab-item absolute-center cur-po ${activeTab === tab.name ? 'active-tab' : ''}`}>
              <div
                className="tab-image-container absolute-center"
                style={{
                  backgroundColor: `${activeTab === tab.name ? tab.backdrop : ''}`,
                }}
              >
                <img className="tab-image" alt={tab.name} src={activeTab === tab.name ? tab.active_img : tab.inactive_img} />
              </div>
              <div className="tab-name">{tab.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabOptions;
