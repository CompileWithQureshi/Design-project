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
