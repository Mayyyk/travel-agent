import React from 'react';
import PriceTier from './PriceTier';

const AccommodationStep = ({ data, selection, onSelect }) => (
  <div className="step-card">
    <h3>Accommodation</h3>
    {['Budget', 'Standard', 'Premium'].map(tier => (
      <PriceTier 
        key={tier}
        tier={tier}
        data={data[tier]}
        isSelected={selection === tier}
        onSelect={onSelect}
      />
    ))}
  </div>
);

export default AccommodationStep; 