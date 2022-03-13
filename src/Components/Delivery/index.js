import React from 'react';
import { restaurants } from '../../data/restaurants';
import ExploreSection from '../Common/ExploreSection';
import Filters from '../Common/Filters';
import './delivery.css';
import DeliveryCollections from './DeliveryCollections';
import TopBrands from './TopBrands';

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

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionName="Delivery Restaurants in Bogra"
      />
    </div>
  );
};

export default Delivery;
