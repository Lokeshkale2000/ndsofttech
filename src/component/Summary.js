import React from "react";
import "./Summary.css";
import userData from "./userData";
import { Line } from "react-chartjs-2";
import chartData from "./chartData";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Summary = () => {
  const { impact} = userData.summary;


  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Reputation Over Time",
        font: {
          size: 18,
          family: "Arial, sans-serif",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <h2 className="summary-header">Summary</h2>
      <div style={{ display: "flex" }}>
        <div className="summary-container">
          <div className="impact-section">
            <div className="imapact-section-main-container">
              <h3 style={{ margin: "0" }}>Impact</h3>
              <div className="Summary-impact-p">
                <p>
                  <span>{impact.questions}</span>
                  <br></br>Questions
                </p>
                <p>
                  <span>{impact.articles}</span>
                  <br></br>Articles{" "}
                </p>
                <p>
                  <span>{impact.followers}</span>
                  <br></br>Followers{" "}
                </p>
              </div>

              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "25px" }}>{impact.peopleReached}</span>
                <br></br>People Reached
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "black",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              marginLeft: "150px",
              marginTop: "10px",
            }}
          >
            <Line data={chartData} options={options} />
          </div>
        </div>
      </div>
      <div>
       
      </div>
    </>
  );
};

export default Summary;
