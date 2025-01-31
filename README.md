# Weather App

This **Weather App** allows users to check the weather of any city in real-time. The app features an interactive, user-friendly interface with the ability to switch between **Dark** and **Light** modes for an enhanced visual experience. Below are the key features and technologies used in this project:

## Key Features

### 1. **Real-time Weather Data**
- **City Name** and **Country** are displayed.
- **Current Temperature** (in Celsius) shown.
- **Weather Description** (e.g., sunny, cloudy, etc.).
- **Humidity Level** is displayed.
- If the city entered is not found or an error occurs, an appropriate error message is shown.

### 2. **Dark and Light Mode Toggle**
- The app supports **Dark Mode** and **Light Mode**.
- A toggle button is provided to switch between the two themes, allowing users to choose their preferred mode.
- **Dark Mode** features a dark background with light-colored text, while **Light Mode** uses a white background with dark text, improving readability in bright environments.

### 3. **Responsive Design**
- The app is fully **responsive**, ensuring it adapts to different screen sizes, including mobile devices and tablets.
- The layout adjusts automatically, keeping the user interface clean and easy to navigate on all devices.

### 4. **Modern User Interface (UI)**
- Smooth **transitions** and **animations** enhance the user experience, especially the transition between light and dark modes.
- **Stylish input fields** and buttons are styled with modern CSS, making the app visually appealing and intuitive to use.
- **Hover effects** and **focus styles** are implemented to make interactions more engaging and intuitive.

### 5. **API Integration**
- Weather data is fetched using the **OpenWeatherMap API**, providing up-to-date and accurate weather information.
- The API call is made when the user submits a city name, and the results are displayed in the app interface in real time.

### 6. **Error Handling**
- If the user enters an invalid city name or if there’s an issue with the API request, the app will display an error message, indicating that the entered city could not be found.

### 7. **User-friendly Layout**
- The weather data is presented in a clean, structured way, with clear separation of information.
- Input fields and buttons are placed logically, making it simple for users to search for weather details without confusion.

## Technologies Used

- **HTML**: Used for structuring the web pages.
- **CSS**: Styled the app with a modern, responsive design.
- **JavaScript**: Handles user interactions, API calls, and theme toggling functionality.
- **OpenWeatherMap API**: Fetches real-time weather data for the entered city.

## How to Use

1. Enter the name of a city in the input field.
2. Click the "Get Weather" button to fetch the weather data.
3. Switch between **Dark Mode** and **Light Mode** using the toggle button.
4. The weather data for the entered city will be displayed below the input field.

## License

This project is open-source and available under the [MIT License](LICENSE).
