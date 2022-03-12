import React from 'react';
import Filters from '../Common/Filters';
import './delivery.css';

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rs-settings-sliders absolute-center"></i>,
    title: 'Filters',
  },
  {
    id: 2,
    title: 'Rating: 4.0+',
  },
  {
    id: 3,
    title: 'Safe and Hygienic',
  },
  {
    id: 4,
    title: 'Pure Veg',
  },
  {
    id: 5,
    icon: <i className="fi fi-rs-apps-sort absolute-center"></i>,
    title: 'Delivery Time',
  },
  {
    id: 6,
    title: 'Great Offers',
  },
];

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
    </div>
  );
};

export default Delivery;
