import React, { useState } from 'react';
import './TravelBudgetResults.css';
import FlightsStep from './FlightsStep.js';
import AccommodationStep from './AccommodationStep.js';
import CarRentalStep from './CarRentalStep.js';
import ActivitiesStep from './ActivitiesStep.js';
import FoodStep from './FoodStep.js';


const STEPS = ['Flights', 'Accommodation', 'Car Rental', 'Activities', 'Food'];

const TravelBudgetResults = ({ results, onBack }) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [selections, setSelections] = useState({});
	const currentCategory = STEPS[currentStep];
	const categoryData = results[currentCategory];

	const handleSelect = (tier) => {
		setSelections(prev => ({
			...prev,
			[currentCategory]: tier
		}));
	};

	const handleNext = () => {
		if (currentStep < STEPS.length - 1) {
			setCurrentStep(prev => prev + 1);
		}
	};

	const handleBack = () => {
		if (currentStep > 0) {
			setCurrentStep(prev => prev - 1);
		} else {
			onBack();
		}
	};

	const renderStep = () => {
		switch (currentCategory) {
			case 'Flights':
				return <FlightsStep data={categoryData} selection={selections[currentCategory]} onSelect={handleSelect} />;
			case 'Accommodation':
				return <AccommodationStep data={categoryData} selection={selections[currentCategory]} onSelect={handleSelect} />;
			case 'Car Rental':
				return <CarRentalStep data={categoryData} selection={selections[currentCategory]} onSelect={handleSelect} />;
			case 'Activities':
				return <ActivitiesStep data={categoryData} selection={selections[currentCategory]} onSelect={handleSelect} />;
			case 'Food':
				return <FoodStep data={categoryData} selection={selections[currentCategory]} onSelect={handleSelect} />;
			default:
				return null;
		}
	};

	if (!results) return null;

	return (
		<div className="results-container">
			<div className="step-indicator">
				{STEPS.map((step, index) => (
					<div 
						key={step} 
						className={`step ${index === currentStep ? 'active' : ''} 
								   ${index < currentStep ? 'completed' : ''}`}
					>
						<div className="step-number">{index + 1}</div>
						<div className="step-name">{step}</div>
					</div>
				))}
			</div>

			<div className="step-content">
				{renderStep()}
			</div>

			<div className="navigation-buttons">
				<button 
					className="nav-button back"
					onClick={handleBack}
				>
					{currentStep === 0 ? 'Back to Form' : 'Previous Step'}
				</button>
				
				{currentStep < STEPS.length - 1 && (
					<button 
						className="nav-button next"
						onClick={handleNext}
						disabled={!selections[currentCategory]}
					>
						Next Step
					</button>
				)}
				
				{currentStep === STEPS.length - 1 && (
					<button 
						className="nav-button finish"
						onClick={() => console.log('Finish with selections:', selections)}
						disabled={!selections[currentCategory]}
					>
						Finish
					</button>
				)}
			</div>
		</div>
	);
};

export default TravelBudgetResults;
