import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="header">Home</h2>

      {/* Buttons */}
      <div className="button-container">
        <button className="button" onClick={() => console.log("Logistic Regression")}>Logistic Regression</button>
        <button className="button" onClick={() => console.log("KNN")}>KNN</button>
        <button className="button" onClick={() => console.log("SVM")}>SVM</button>
        <button className="button" onClick={() => console.log("Random Forest")}>Random Forest</button>
        <button className="button" onClick={() => console.log("LSTM")}>LSTM</button>
      </div>

      {/* Static Values */}
      <div className="static-values-container">
        <div className="static-values">
            <br></br>
            <br></br>
          <p><b>Temp:</b> 25°C</p>
          <br></br>
          <p><b>Heartrate:</b>80 bpm</p>
          <br></br>
          <p><b>SPO2:</b> 96%</p>
          <br></br>
          <p><b>Fall Detection: </b>2</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
