# Payment App

## Server Setup

Before running the app you need to set up and start the backend server:

1. Clone the server repo:

    ```bash
    git clone https://github.com/DimitarSD/transaction-server
    ```

2. Install the server dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

Ensure the server is running on `http://localhost:3001` before proceeding with the steps below.

## Installation

```bash
git clone https://github.com/DimitarSD/payment-app.git
cd payment-app
npm install
```

## Environment Variables

The application uses the [ExchangeRate API](https://v6.exchangerate-api.com) to fetch currency rates. You need to create a local `.env` file in the root of the project with the following content:

```bash
REACT_APP_EXCHANGE_RATE_API_KEY="api-key"
```

You will find this API key in the email.

## Running the App

```bash
npm start
```

Visit `http://localhost:3000` in your browser to view the app.

## Testing

To run the Jest unit tests:

```bash
npm run test
```

## Cypress E2E Tests

Make sure the app is running, then open Cypress:

```bash
npm run cypress:open
```

In the Cypress test runner, click on a test to run it.

## ESLint

```bash
npm run lint
```

## Redux

While the initial requirements mentioned Redux setup (without explicitly specifying that it must be used), I decided not using it in this project. Given the simplicity of the app and its state management needs, Redux would have been overkill. The project primarily deals with localized state within individual components, which is effectively managed using React’s built-in hooks like useState and useEffect. Introducing Redux would have added unnecessary complexity without providing significant benefits, making it an inefficient choice for this small-scale application.
