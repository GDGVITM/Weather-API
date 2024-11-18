Weather App 🌦️

A simple weather application that fetches real-time weather data using the OpenWeatherMap API and dynamically displays weather information with user-friendly visuals.

Features
- 🌍 Search for weather details by city name.
- 🌡️ Displays current temperature, humidity, minimum & maximum temperature, and weather descriptions.
- 🎨 Dynamic visuals with icons and background images based on weather conditions (hot, cold, rainy, etc.).
- ❌ Error handling for invalid city names.

Tech Stack
- Frontend: React, Material-UI (MUI).
- API: OpenWeatherMap.

Screenshots
![image](https://github.com/user-attachments/assets/98713df9-391e-40ec-9c34-2c8ed1908818)


Installation
1. Clone the repository:
   git clone https://github.com/yourusername/weather-app.git

2. Navigate to the project directory:
   cd weather-app

3. Install dependencies:
   npm install

4. Add your OpenWeatherMap API key to the SearchBox.jsx file:
   const API_KEY = "your_api_key_here";

5. Start the development server:
   npm start

Usage
- Enter the city name in the search box and click Search.
- View real-time weather data and corresponding visuals.

Project Structure
src
├── components  
│   ├── InfoBox.jsx    # Displays weather information
│   ├── SearchBox.jsx  # Allows user to search for a city's weather
├── WeatherApp.jsx      # Main application component
└── index.js            # Entry point of the app

Future Enhancements
- 🌐 Add support for multiple languages.
- 📍 Integrate geolocation to fetch weather automatically for the user's location.
- 📊 Include graphs for temperature trends over the week.

Contributing
Contributions are welcome!
1. Fork the project.
2. Create your feature branch: git checkout -b feature/new-feature.
3. Commit your changes: git commit -m 'Add some feature'.
4. Push to the branch: git push origin feature/new-feature.
5. Open a pull request.

License
This project is licensed under the MIT License.
