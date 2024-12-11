import './App.css';
import React, { useState } from 'react';
import TravelBudgetForm from './components/TravelBudgetForm';
import TravelBudgetResults from './components/TravelBudgetResults';

function App() {
	const [showResults, setShowResults] = useState(false);
	const [budgetResults, setBudgetResults] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleFormSubmit = async (formData) => {
		setIsLoading(true);
		setError(null);
		
		try {
			const response = await fetch('http://localhost:3000/calculate-budget', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					departure: formData.departure,
					destination: formData.destination,
					dates: `${formData.startDate} to ${formData.endDate}`,
					travelers: formData.travelers,
					budget: formData.budgetLimit
				})
			});

			if (!response.ok) {
				throw new Error('Failed to calculate budget');
			}

			const data = await response.json();
			setBudgetResults(data);
			setShowResults(true);
		} catch (err) {
			setError(err.message);
			console.error('Error:', err);
		} finally {
			setIsLoading(false);
		}
	};

	const handleBack = () => {
		setShowResults(false);
		setBudgetResults(null);
	};

	// Mock data for testing
	const mockData = {
      Flights: {
          "Budget": {
              "min": 200,
              "max": 400,
              "confidence": 80,
              "source": "Skyscanner"
          },
          "Standard": {
              "min": 400,
              "max": 700,
              "confidence": 85,
              "source": "Expedia"
          },
          "Premium": {
              "min": 700,
              "max": 1200,
              "confidence": 90,
              "source": "Airline Direct"
          }
      },
      Accommodation: {
          "Budget": {
              "min": 50,
              "max": 100,
              "confidence": 75,
              "source": "Booking.com"
          },
          "Standard": {
              "min": 100,
              "max": 200,
              "confidence": 85,
              "source": "Hotels.com"
          },
          "Premium": {
              "min": 200,
              "max": 500,
              "confidence": 90,
              "source": "Luxury Hotels"
          }
      },
      Food: {
          "Budget": {
              "min": 30,
              "max": 50,
              "confidence": 70,
              "source": "Local Research"
          },
          "Standard": {
              "min": 50,
              "max": 100,
              "confidence": 80,
              "source": "TripAdvisor"
          },
          "Premium": {
              "min": 100,
              "max": 200,
              "confidence": 85,
              "source": "Michelin Guide"
          }
      },
      CarRental: {
          "Budget": {
              "min": 25,
              "max": 40,
              "confidence": 75,
              "source": "RentalCars"
          },
          "Standard": {
              "min": 40,
              "max": 80,
              "confidence": 80,
              "source": "Hertz"
          },
          "Premium": {
              "min": 80,
              "max": 200,
              "confidence": 85,
              "source": "Luxury Rentals"
          }
      },
      Activities: {
          "Budget": {
              "min": 20,
              "max": 50,
              "confidence": 70,
              "source": "Local Tours"
          },
          "Standard": {
              "min": 50,
              "max": 100,
              "confidence": 80,
              "source": "GetYourGuide"
          },
          "Premium": {
              "min": 100,
              "max": 300,
              "confidence": 85,
              "source": "Private Tours"
          }
      }
  
	};

	const handleShowMockResults = () => {
		setBudgetResults(mockData);
		setShowResults(true);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Travel Budget Calculator</h1>
			</header>
			<main>
				{error && (
					<div style={{ color: 'red', margin: '10px 0' }}>
						Error: {error}
					</div>
				)}
				
				{!showResults ? (
					<>
						<TravelBudgetForm 
							onSubmit={handleFormSubmit} 
							isLoading={isLoading} 
						/>
						<button onClick={handleShowMockResults} style={{ marginTop: '20px' }}>
							Show Mock Results
						</button>
					</>
				) : (
					<TravelBudgetResults 
						results={budgetResults} 
						onBack={handleBack} 
					/>
				)}
        
			</main>
		</div>
	);
}

export default App;
