import { useState } from "react";
import  RadarChart from "./components/RadarChart";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "rgba(234,192,132,1)",
          "rgba(165,12,192,1)",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (<>
    <div className="App_up"> 
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      </div>
      <div className="App_down">
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    
      <div style={{ width: 700 }}>
        < RadarChart chartData={userData} />
      </div>
     
      </div>
      </>
   
  );
}

export default App;
