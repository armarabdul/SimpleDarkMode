import React, { useState } from "react";
import Button from "./Button";
import "./Styles.scss";
import bleach from "../Assets/bleach.png";
import percent from "../Assets/percentage.png";
import moon from "../Assets/moon.png";
import moonBtn from "../Assets/moonBtn.png";

const MainPage: React.FC = () => {
  const [showTriangle, setShowTriangle] = useState(true);
  const [showPercent, setShowPercent] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleTriangleClick = () => {
    setShowTriangle(true);
    setShowPercent(false);
    setDarkMode(false);
  };

  const handlePercentClick = () => {
    setShowPercent(true);
    setShowTriangle(false);
    setDarkMode(false);
  };

  const handleMoonClick = () => {
    setDarkMode(true);
    setShowTriangle(false);
    setShowPercent(false); // Show the percent content
  };

  return (
    <div className={`main-page ${darkMode ? "dark-mode" : ""}`}>
      <div className="content">
        <Button onClick={handleTriangleClick}>
          <img src={bleach} alt="Triangle Icon" className="image" />
        </Button>
        <Button onClick={handlePercentClick}>
          <img src={percent} alt="Triangle Icon" className="image" />
        </Button>
        <Button onClick={handleMoonClick}>
          <img src={moonBtn} alt="Triangle Icon" className="image" />
        </Button>
      </div>

      {showTriangle && (
        <div className="triangle">
          <img src={bleach} alt="" height={100} width={100} />
        </div>
      )}

      {showPercent && (
        <div className="percent">
          <img src={percent} alt="" height={100} width={100} />
        </div>
      )}

      {darkMode && (
        <div className="moon">
          <img src={moon} alt="" height={100} width={100} />
          <div className="dark-mode-text">
            <span style={{ marginLeft: "0.5rem" }}>darkMode</span>
          </div>
        </div>
      )}
      <p
        className={`text ${darkMode ? "dark-mode-text" : ""}`}
        style={{ marginTop: "15%" }}
      >
        © 2023 <a href="https://github.com/armarabdul/SimpleDarkMode">aMa</a> by
        abdul
      </p>
    </div>
  );
};

export default MainPage;
