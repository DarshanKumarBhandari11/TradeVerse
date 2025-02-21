# TradeVerse 📈
**TradeVerse** is a full-stack stock trading platform that provides users with a seamless and intuitive experience for managing their investments. With its robust features and user-friendly interface, TradeVerse empowers both novice and experienced traders to navigate the stock market with ease.


## Features ✨
* **🛒 Order Management:**
    -   Place buy and sell orders with ease.
    -   Track order status and execution details.

* **🔐 Secure Authentication:**
    -   Secure user accounts with robust authentication measures.
    -   Toast notifications for successful logins and logouts, or failed authentications.

* **📊 Comprehensive Dashboard:**
    -   Access a centralized dashboard to view portfolio summary, orders, holdings, and positions.
    -   Track investment performance, monitor open orders, and manage holdings efficiently.

* **📈 Interactive Charts:**
    -   Visualize market trends and analyze stock performance with interactive charts.
    -   Utilize technical analysis tools to identify trading opportunities.

* **💰 Portfolio Tracking:**
    -   Monitor portfolio value, investment gains and losses, and overall performance.
    -   Analyze holdings and make informed decisions to optimize investment strategy.

* **📜 Detailed Holdings:**
    -   View detailed information on individual stock holdings, including quantity, average cost, current price, and profit/loss.
    -   Track investment performance and make informed decisions about buying or selling stocks.

* **ℹ️ Informative Positions:**
    -   Monitor open positions and track their performance.
    -   Analyze risk and reward profiles to make informed trading decisions.

* **🙋‍♂️ Responsive Support:**
    -   Access a comprehensive support portal for assistance with platform features and trading inquiries.
    -   Submit support tickets for personalized assistance.

**Note:** TradeVerse currently does not provide live market data. Stock prices are simulated for demonstration purposes.


## Tech Stack 🛠️
### Frontend:
* **React:** A JavaScript library for building user interfaces.
* **Chart.js:** A JavaScript library for creating interactive charts.
* **Material UI:** A React UI component library for building modern and responsive user interfaces.
* **Axios:** A promise-based HTTP client for making API calls.
* **Bootstrap:** For responsive design and styling.
* **Font Awesome:** For icons.
* **React Toastify:** For displaying toast notifications.
* **Unit Testing:** Implemented using Jest and React Testing Library for reliable code.

### Backend:
* **Node.js & Express.js:** Core backend framework for handling requests.
* **MongoDB & Mongoose:** NoSQL database for storing user data, stock information, and trading history.
* **JSON Web Tokens (JWT):** For authentication and authorization.
* **bcrypt:** For password hashing.
* **cors:** For handling cross-origin requests.


## Testing 🧪
TradeVerse incorporates unit testing using Jest and React Testing Library to ensure code reliability and maintainability.

* **Unit Tests:**
    * Comprehensive unit tests are written for key components, such as the `Hero` component within the landing page, to verify their functionality.
    * Testing ensures that components render correctly, handle user interactions as expected, and maintain consistency across different scenarios.

* **Testing Libraries:**
    * **Jest:** A JavaScript testing framework used for writing and running unit tests.
    * **React Testing Library:** A library that provides utilities for testing React components by focusing on user behavior rather than implementation details.
    * **@testing-library/jest-dom:** Extends Jest with custom matchers for asserting on DOM nodes, making tests more expressive and readable.
    * **@testing-library/react:** Provides utilities for rendering and interacting with React components in a testing environment.
    * **@testing-library/user-event:** Simulates user interactions such as clicks, typing, and other events.

Example test snippet:
```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/pricing/Hero";

describe('Hero Component', () => {
    test('renders hero image', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("intradayTradesImg");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/images/intradayTrades.svg');
    });
});
```


## How to Run Locally 🖥️
### Prerequisites
* Node.js and npm installed on your system
* A code editor like VS Code
* Git (Optional, but recommended for version control)
* MongoDB (Local or Atlas)

### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/DarshanKumarBhandari11/TradeVerse.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd TradeVerse
    ```

3.  **Install dependencies for frontend, backend, and dashboard:**
    ```bash
    cd frontend
    npm install

    cd ..
    cd backend
    npm install

    cd ..
    cd dashboard
    npm install
    ```

4.  **Set up environment variables:**
    * Create a `.env` file in the `backend` directory and add the following:
    ```bash
    TOKEN_KEY=your_jwt_secret_key
    PORT=3002 (or your preferred port)
    MONGO_URL=your_mongodb_connection_string
    ```

5.  **Run the app:**
    * For development:
    ```bash
    # In one terminal window (Backend):
    cd backend
    npm start

    # In another terminal window (Frontend):
    cd frontend
    npm start

    # In another terminal window (Dashboard):
    cd dashboard
    npm start
    ```

6.  **Open your browser and navigate to:**
    * Development: `http://localhost:3000`
    * Production: Hosted URL (if deployed)


## Contributing 🤝
*Contributions* are welcome! If you'd like to contribute, please fork the repository and submit a pull request.


## Contact 📞
For questions or feedback, feel free to reach out to me at darshankumarbhandari11@gmail.com .
