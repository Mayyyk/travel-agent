import React from 'react';
import PriceTier from './PriceTier';

const FlightsStep = ({ data, selection, onSelect }) => (
  <div className="step-card">
    <h3>Flights</h3>
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

export default FlightsStep; 