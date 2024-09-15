import React, { useState } from 'react';
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilUserCircle,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
import img1 from "../imgs/img1.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Frequency curves",
  },
  {
    icon: UilUsersAlt,
    heading: "Load Curves",
  },
  {
    icon: UilPackage,
    heading: 'Personalized suggestions'
  },
  {
    icon: UilUserCircle,
    heading: 'Login'
  },
];

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [temperature, setTemperature] = useState('91 F');
  const [maxPeak, setMaxPeak] = useState('6,100 MW');
  const [minPeak, setMinPeak] = useState('3054 MW');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleButtonClick = () => {
    fetch('http://localhost/project2/backend/samp.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        date: selectedDate,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Update the card data based on the response
        setTemperature('${data.avg_temperature} F');
        setMaxPeak('${data.max_peak} MW');
        setMinPeak('${data.min_peak} MW');
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  // Analytics Cards
  const cardsData = [
    {
      title: "Temperature",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: temperature,
      png: UilClipboardAlt,
      series: [
        {
          name: "Temperature",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Max Peak",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 60,
      value: maxPeak,
      png: UilClipboardAlt,
      series: [
        {
          name: "Max Peak",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
    {
      title: "Min Peak",
      color: {
        backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: minPeak,
      png: UilClipboardAlt,
      series: [
        {
          name: "Min Peak",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];

  const UpdatesData = [
    {
      img: img1,
      noti: "New data uploaded",
      time: "2 minutes ago",
    },
    {
      img: img1,
      noti: "System update completed",
      time: "10 minutes ago",
    },
  ];

  return (
    <div>
      <div className="sidebar">
        {SidebarData.map((item, index) => (
          <div key={index} className="sidebar-item">
            <item.icon />
            <span>{item.heading}</span>
          </div>
        ))}
      </div>
      <div className="dashboard">
        <div className="date-picker">
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
          <button onClick={handleButtonClick}>Submit</button>
        </div>
        {/* Render your analytics cards here */}
        {cardsData.map((card, index) => (
          <div key={index} className="card" style={{ background: card.color.backGround, boxShadow: card.color.boxShadow }}>
            <h3>{card.title}</h3>
            <div className="card-content">
              <card.png size={30} />
              <div>{card.value}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Recent Update Card Data */}
      <div className="updates">
        {UpdatesData.map((update, index) => (
          <div key={index} className="update">
            <img src={update.img} alt="update" />
            <div>{update.noti}</div>
            <span>{update.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;