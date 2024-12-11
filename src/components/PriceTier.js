import React from 'react';

const PriceTier = ({ tier, data, isSelected, onSelect }) => (
  <div 
    className={`price-tier ${tier.toLowerCase()} ${isSelected ? 'selected' : ''}`}
    onClick={() => onSelect(tier)}
  >
    <div className="tier-header"><strong>{tier}</strong></div>
    <div className="tier-price">Price: ${data.min} - ${data.max}</div>
    <div className="tier-confidence">Confidence: {data.confidence}%</div>
    <div className="tier-source">Source: {data.source}</div>
  </div>
);

export default PriceTier; 