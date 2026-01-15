# ☀️ Weather App – Real‑Time City Weather

A simple and clean **Weather Application** built using **HTML, CSS, and JavaScript**. The app fetches real‑time weather data using the **wttr.in free weather API** and displays temperature, weather condition, humidity, wind speed, pressure, and weather icons.

---

## 🚀 Features

* 🌍 Search weather by **city name**
* ⌨️ Press **Enter key** to search
* 🌡️ Displays **current temperature (°C)**
* 🤔 Shows **feels like temperature**
* 💧 Humidity, 🌬️ wind speed, ⚖️ pressure
* 🎨 Emoji‑based **weather icons**
* ⏳ Loading indicator
* ❌ Error handling for invalid cities
* 📍 Default city loaded on page load (Hyderabad)

---

## 🛠️ Tech Stack

* **HTML5** – Structure
* **CSS3** – Styling & layout
* **JavaScript (ES6)** – Logic & API handling
* **wttr.in API** – Free weather data (no API key required)

---

## 📂 Project Structure

```
weather-app/
│
├── index.html     # Main HTML file
├── style.css      # Styling (optional if separated)
├── script.js      # Weather logic & API calls
├── README.md      # Project documentation
```

## ▶️ How to Run the Project

1. Download or clone the project
2. Open the project folder
3. Open `index.html` in any modern browser
**OR**
Use VS Code Live Server

## 🔧 How It Works

1. User enters a city name
2. App calls:

   ```
   https://wttr.in/{city}?format=j1
   ```
3. Weather data is fetched using `fetch()`
4. UI updates dynamically using DOM manipulation
5. Weather icons are matched using condition keywords

---

## 🌤️ Weather Icons Mapping

| Condition    | Icon |
| ------------ | ---- |
| Clear        | ☀️   |
| Clouds       | ☁️   |
| Rain         | 🌧️  |
| Thunderstorm | ⛈️   |
| Snow         | ❄️   |
| Fog / Mist   | 🌫️  |
| Tornado      | 🌪️  |

---

## 📌 Limitations

* Uses free API (limited accuracy)
* No forecast (current weather only)
* Frontend‑only project

---

## 🚀 Future Improvements

* 📅 5‑day weather forecast
* 📍 Location‑based weather (Geolocation API)
* 🌙 Dark / Light mode toggle
* 📱 Better mobile responsiveness
* 🔄 Unit switch (°C / °F)

---

## 👨‍💻 Author

Jayhind Yadav**
Frontend Developer | JavaScript Projects

---
## ⭐ Support

If this project helped you:

* ⭐ Star it on GitHub
* 📤 Share with friends
* 🧠 Use it for learning & interviews

---

Happy Coding 🌈
