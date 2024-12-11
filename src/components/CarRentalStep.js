import React from 'react';
import PriceTier from './PriceTier';

const CarRentalStep = ({ data, selection, onSelect }) => {
  if (!data) return null;
  
  return (
    <div className="step-card">
      <h3>Car Rental</h3>
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
};

export default CarRentalStep; 