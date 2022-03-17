import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LogVisualizer = () => {
  const [pastedText, setPastedText] = useState("");
  const [logViz, setLogViz] = useState("");
  const currentDarkMode = useSelector((state) => state.darkMode.value);

  const [pasted, setPasted] = useState(false);
  const [copy, setCopy] = useState(false);
  const [runLogs, setRunLogs] = useState(false);

  const pasteText = () => {
    navigator.clipboard
      .readText()
      .then((text) => setPastedText(pastedText + text));
    setPasted(true);
  };

  const copyText = () => {
    navigator.clipboard.writeText(logViz);
    setCopy(true);
  };

  const runLogViz = () => {
    setLogViz(pastedText);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (copy) setCopy(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [copy]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pasted) setPasted(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [pasted]);

  return (
    <div
      className={currentDarkMode ? "logVisualizer" : "logVisualizer darkM-logV"}
    >
      {/* <div className={currentDarkMode ? "filtre-log" : "filtre-log line-darkM"}>
        <select className={currentDarkMode ? "" : "btn-darkM"}>
          <option value="0" disabled>
            Select...
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div> */}
      <div className={currentDarkMode ? "logs" : "logs line-after-darkM"}>
        <div className="paste-log">
          <textarea
            className={currentDarkMode ? "" : "darkM-input"}
            placeholder="Paste logs..."
            value={pastedText}
            onChange={(e) => setPastedText(e.target.value)}
          ></textarea>
          <div
            className={
              currentDarkMode
                ? "copyPaste-log-icon"
                : "copyPaste-log-icon BG-darkM"
            }
            onClick={() => pasteText()}
          >
            <img src="https://img.icons8.com/material-outlined/96/000000/paste.png" />
            <span>{pasted ? "pasted !" : "paste"}</span>
          </div>
        </div>
        <div className="copy-log">
          <div className="select-area">
            <span className={currentDarkMode ? "" : "darkM-input"}>
              Filters
            </span>
            <select
              className={
                currentDarkMode ? "select-log" : "select-log btn-darkM"
              }
            >
              <option value="0" disabled>
                Select...
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <p
            className={
              currentDarkMode ? "result-log" : "result-log darkM-input"
            }
          >
            {logViz}
          </p>

          <div
            className={
              currentDarkMode
                ? "copyPaste-log-icon"
                : "copyPaste-log-icon BG-darkM"
            }
            onClick={() => copyText()}
          >
            <img src="https://img.icons8.com/material-outlined/96/000000/copy.png" />
            <span>{copy ? "copied !" : "copy"}</span>
          </div>
        </div>
      </div>

      <button
        className={currentDarkMode ? "run" : "run btn-darkM"}
        style={{
          transform: !pastedText && "translateY(150%) translateX(-50%)",
        }}
        onClick={() => runLogViz()}
      >
        Run logVisualizer
      </button>
    </div>
  );
};

export default LogVisualizer;
