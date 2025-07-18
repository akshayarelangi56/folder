Delhi Electricity Demand Forecasting 
This project focuses on forecasting electricity demand for the Delhi region using historical load data, weather patterns, public holidays, and solar radiation. The objective is to accurately predict future demand, identify peak loads, and help in smart grid management and planning.

Project Objective:
To develop a robust and scalable AI/ML model that can forecast short-term and long-term electricity demand in Delhi, considering:
Seasonal and daily load variations
Duck curve patterns
Real estate development
Public holidays and local events
Weather factors like temperature, humidity, and wind
Solar power contribution

Dataset:
The dataset contains hourly-level data with the following features:
date – Date of the observation
time – Time of the observation
temp – Temperature (°C)
humidity – Relative Humidity (%)
wind – Wind Speed (km/h)
holiday – Indicator of public holidays
solar – Solar irradiance level
delhi – Electricity demand in Delhi (MW)

Technologies Used:
Python, Pandas, NumPy, Matplotlib, Seaborn
Scikit-learn, XGBoost, LSTM (Keras/TensorFlow)
React.js frontend for visualization
MySQL / MongoDB for backend storage
PHP for lightweight API integration (if applicable)

Features:
Hourly demand prediction
Peak and minimum load identification
Temperature and weather-based forecasting
Demand curve (load profile) visualization
Public holiday adjustment
Scrollable, responsive UI for data display



