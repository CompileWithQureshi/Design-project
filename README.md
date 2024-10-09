# Admin Dashboard with Login Functionality

This project is a **React-based Admin Dashboard** application with a **Login Page** and an Admin interface. It uses various libraries such as `React Router`, `Framer Motion`, `Swiper`, and `Axios` to create a dynamic and responsive user experience.

## Key Features

1. **Login Page**: 
   - Users can log in using a form that collects username, password, and unit selection.
   - Simple and responsive UI with animations provided by `Framer Motion` and `Fade`.

2. **Admin Dashboard**:
   - After login, users are redirected to the Admin page which displays:
     - A **welcome banner** with the user's name and a live date/time display.
     - A **side navigation bar** with icons representing different sections (using `react-icons`).
     - A **product list** with real-time data on availability, price, and other details.
     - A **top doctors section** showing featured doctors with ratings.
     - A **consultation section** that dynamically displays appointments with sliding functionality (`Swiper`).

3. **Data Fetching**:
   - The Admin page retrieves random user data via the `Random User API` using Axios for asynchronous data fetching.

4. **Dynamic Components**:
   - Reusable and modularized components including:
     - `LoginPage` for user authentication.
     - `AdminPage` for displaying admin-specific content and actions.
     - `CardContainer` for displaying featured doctors.
     - `Consultation` for viewing available consultations.
     - `Calendars` for live date and time updates.
     - `Product` for showcasing product details dynamically.
     - `Sidenavbar` for admin navigation.

## Libraries Used

- **React Router DOM**: To manage navigation and routing between pages (`LoginPage` and `AdminPage`).
- **Framer Motion**: For smooth animations and transitions on the login and admin components.
- **React Icons**: For embedding a clean and simple icon set for the navigation menu.
- **Axios**: For making API requests to fetch random user data.
- **Swiper**: To implement a swipeable view for consultation bookings.
- **Lazy Load Image**: For efficient image loading and display.

## Project Structure

```bash
src/
│
├── components/
│   ├── LoginPage.js          # Login Page component
│   ├── AdminPage.js          # Admin dashboard page
│   ├── Sidenavbar.js         # Side navigation bar for admin
│   ├── cardfolder/
│   │   ├── CardContainer.js  # Display featured doctors
│   │   └── data.js           # Mock data for doctors
│   ├── consultation/
│   │   └── consultation.js   # Display consultation appointments
│   ├── Product/
│   │   ├── Product.js        # Display product details
│   │   └── productdata.js    # Product data
│   ├── calender.js           # Date and time component
│   └── App.js                # Main app file
├── App.css                   # Main styles for the app
└── index.js                  # Entry point of the app

Setup Instructions
Prerequisites
Ensure you have the following installed on your machine:

Node.js (v12 or above)
npm or yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/admin-dashboard-app.git
Navigate to the project directory:

bash
Copy code
cd admin-dashboard-app
Install dependencies:

bash
Copy code
npm install
or

bash
Copy code
yarn install
Run the development server:

bash
Copy code
npm start
This will start the application locally on http://localhost:3000/.

Build for Production
To create a production-ready build of the project, run:

bash
Copy code
npm run build
The optimized output will be located in the /build folder.

Usage
Login Page: The user is prompted to enter a username, password, and select a unit from a dropdown. After submitting the form, the user is redirected to the Admin Dashboard.

Admin Dashboard:

The admin panel features a welcome message with a real-time clock and date.
Users can view product listings, doctor cards, and consultations in a card-based layout.
The side navigation bar allows users to quickly access different sections of the admin dashboard.
Responsive Design: The app is fully responsive, adjusting its layout based on the screen size, ensuring a great user experience across devices.

Future Improvements
Authentication: Integrate a real authentication system (e.g., Firebase or JWT) for secure login functionality.
More Dynamic Data: Fetch real data for products, consultations, and doctors from a backend API.
Unit Testing: Implement testing with Jest or React Testing Library to ensure component reliability.
Contributing
Fork the repository.
Create a new branch with your feature or bug fix (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
License
This project is licensed under the MIT License.
