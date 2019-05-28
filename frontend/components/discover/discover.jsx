import React from 'react';
import DiscoverGroup from './discover_group';

export default () => {
  return (
    <div className="discover-container">
      <div className="discover-left">
        <DiscoverGroup
          header="New Music Now"
          description="The latest hits, updated all the time"
          songs={[51, 53, 55, 56]}
        />
        <DiscoverGroup
          header="CloudSound Charts"
          description="The most played tracks on CloudSound this week"
          songs={[52, 39, 57, 54]}
        />
        <DiscoverGroup
          header="Club Bangers"
          description="The best dance and electronic"
          songs={[58, 61, 59, 62]}
        />
      </div>
      <div className="discover-right" />
    </div>
  );
};
