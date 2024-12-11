# Travel Budget Calculator Frontend

A React-based travel budget calculator that helps users plan their trip expenses across different categories and price tiers.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Backend server running (see backend README)

## Running Locally

1. Clone the repository:

```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the frontend root directory:

```
REACT_APP_API_URL=http://localhost:3000
```

4. Start the development server:

```bash
npm start
```

The app will run on http://localhost:3001

5. Test the complete setup:
- Ensure backend is running on http://localhost:3000
- Open http://localhost:3001 in your browser
- Fill out the travel form and submit
- You should see budget calculations from the backend

## Troubleshooting

1. If you get a PORT already in use error:
   - Kill the process using the port: `kill $(lsof -t -i:3001)`
   - React will automatically suggest using the next available port

2. If you can't connect to the backend:
   - Ensure backend is running (see backend README)
   - Check that REACT_APP_API_URL in .env matches your backend URL
   - Check browser console for CORS errors
   - Verify backend is responding at http://localhost:3000/test-perplexity

3. If the app doesn't load:
   - Clear your browser cache
   - Delete node_modules and run `npm install` again
   - Check for JavaScript errors in browser console

## Project Structure

```

src/
  ├── components/         # React components
  │   ├── TravelBudgetForm.js
  │   ├── TravelBudgetResults.js
  │   ├── FlightsStep.js
  │   └── ...
  ├── App.js             # Main application component
  ├── index.js           # Application entry point
  └── styles/            # CSS styles
```

## Available Scripts

### `npm start`
Runs the app in development mode at http://localhost:3001

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

## Features

- Multi-step budget planning wizard
- Three price tiers for each category (Budget, Standard, Premium)
- Real-time budget calculations
- Interactive UI with confidence levels
- Price range estimates from multiple sources

## API Integration

The frontend makes POST requests to `/calculate-budget` endpoint with the following payload structure:

```

{
  "departure": "string",
  "destination": "string",
  "dates": "string",
  "travelers": "number",
  "budget": "number"
}
```

## Development Notes

1. The app uses React 19 with modern hooks and patterns
2. Styling is done with CSS modules
3. API calls are made using the fetch API
4. Environment variables must start with REACT_APP_

## Production Build

1. Update .env for production:
```

REACT_APP_API_URL=https://your-backend-railway-url.app
```

2. Create production build:
```

npm run build
```

3. The `build` folder will contain deployment-ready files

## Running the Complete Stack

1. Start the backend:
```

cd ../backend
npm install
npm start
```

2. Start the frontend (in a new terminal):
```

cd ../frontend
npm install
npm start
```

3. Visit http://localhost:3001 in your browser

Both servers must be running for the application to work properly:
- Backend on http://localhost:3000
- Frontend on http://localhost:3001

