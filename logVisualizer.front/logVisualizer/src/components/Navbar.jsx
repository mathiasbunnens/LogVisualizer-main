import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../utils/darkmode";

const Navbar = () => {
  /* const [darkMode, setDarkMode] = useState(false); */
  const currentDarkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();

  const changeDarkMode = () => {
    dispatch(changeMode());
  };

  useEffect(() => {
    if (!currentDarkMode) {
      document.body.classList.add("darkMode-body");
    }

    return () => {
      document.body.classList.remove("darkMode-body");
    };
  }, [currentDarkMode]);

  return (
    <div className="navbar">
      <span className={currentDarkMode ? "nav-title" : "nav-title title-darkM"}>
        logVisualizer
      </span>
      <div
        className={
          currentDarkMode ? "dark-light" : "dark-light dark-light-switch"
        }
      >
        <input
          type="checkbox"
          value={currentDarkMode}
          onClick={() => changeDarkMode()}
        />
        <div className={currentDarkMode ? "sun-moon" : "sun-moon darkM-img"}>
          <img
            className="sun"
            src="https://img.icons8.com/ios/50/000000/sun--v1.png"
          />
          <img
            className="moon"
            src="https://img.icons8.com/ios/50/000000/moon-symbol.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
