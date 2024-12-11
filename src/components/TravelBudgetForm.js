import React from 'react';
import './TravelBudgetForm.css';

const TravelBudgetForm = ({ onSubmit, isLoading }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      departure: formData.get('departure'),
      destination: formData.get('destination'),
      startDate: formData.get('startDate'),
      endDate: formData.get('endDate'),
      travelers: Number(formData.get('travelers')),
      budgetLimit: Number(formData.get('budgetLimit')),
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="travel-form">
      <h2>Travel Budget Calculator</h2>
      
      <label htmlFor="departure">Airport Departure</label>
      <input type="text" id="departure" name="departure" required />

      <label htmlFor="destination">Destination</label>
      <input type="text" id="destination" name="destination" required />

      <label htmlFor="startDate">Start Date</label>
      <input type="date" id="startDate" name="startDate" required />

      <label htmlFor="endDate">End Date</label>
      <input type="date" id="endDate" name="endDate" required />

      <label htmlFor="travelers">Number of Travelers</label>
      <input type="number" id="travelers" name="travelers" min="1" required />

      <label htmlFor="budgetLimit">Budget Limit</label>
      <input type="number" id="budgetLimit" name="budgetLimit" min="0" step="0.01" required />

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Calculating...' : 'Calculate Budget'}
      </button>
    </form>
  );
};

export default TravelBudgetForm;

