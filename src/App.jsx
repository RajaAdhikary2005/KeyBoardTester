import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    function removingBg(keyElement) {
      keyElement.classList.remove("pressed");
    }
    function handleKeyDown(k) {
      k.preventDefault();
      let keyName = k.key;
      let keyCode = k.code;
      let keyElement;
      if (keyName === "Shift" && keyCode === "ShiftLeft") {
        keyElement = document.querySelector(".ShiftLeft");
      } else if (keyName === "Shift" && keyCode === "ShiftRight") {
        keyElement = document.querySelector(".ShiftRight");
      } else if (keyName === "Control" && keyCode === "ControlLeft") {
        keyElement = document.querySelector(".ControlLeft");
      } else if (keyName === "Control" && keyCode === "ControlRight") {
        keyElement = document.querySelector(".ControlRight");
      } else if (keyName.length === 1 && /[A-Z]/.test(keyName)) {
        keyName = k.key.toLowerCase();
        keyElement = document.getElementById(keyName);
      } else {
        keyElement = document.getElementById(keyName);
      }
      if (keyElement) {
        keyElement.classList.add("pressed");
      }
      let allButtons = document.querySelectorAll("button");
      allButtons.forEach((button) => {
        setTimeout(function () {
          removingBg(button);
        }, 10000);
      });
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
          <div className="header">
            <p className="heading">Keyboard Testing</p>
          </div>
          <div className="main">
            <div className="f-keys">
              <button id="Escape">ESC</button>
              <button id="F1">F1</button>
              <button id="F2">F2</button>
              <button id="F3">F3</button>
              <button id="F4">F4</button>
              <button id="F5">F5</button>
              <button id="F6">F6</button>
              <button id="F7">F7</button>
              <button id="F8">F8</button>
              <button id="F9">F9</button>
              <button id="F10">F10</button>
              <button id="F11">F11</button>
              <button id="F12">F12</button>
            </div>
            <div className="firstthreekeys">
              <button>PrtSc</button>
              <button id="ScrollLock">ScrLk</button>
              <button id="Pause">Pause</button>
            </div>
            <div className="alphabetkeys">
              <div className="firstalpha">
                <button id="`">~</button>
                <button id="1">1</button>
                <button id="2">2</button>
                <button id="3">3</button>
                <button id="4">4</button>
                <button id="5">5</button>
                <button id="6">6</button>
                <button id="7">7</button>
                <button id="8">8</button>
                <button id="9">9</button>
                <button id="0">0</button>
                <button id="-">-</button>
                <button id="=">=</button>
                <button id="Backspace" style={{ width: "110px" }}>Backsp</button>
              </div>
              <div className="secondalpha">
                <button id="Tab" style={{ width: "85px" }}>TAB</button>
                <button id="q">Q</button>
                <button id="w">W</button>
                <button id="e">E</button>
                <button id="r">R</button>
                <button id="t">T</button>
                <button id="y">Y</button>
                <button id="u">U</button>
                <button id="i">I</button>
                <button id="o">O</button>
                <button id="p">P</button>
                <button id="[">[</button>
                <button id="]">]</button>
                <button id="\\" style={{ width: "85px" }}>\</button>
              </div>
              <div className="thirdalpha">
                <button id="CapsLock" style={{ width: "95px" }}>CAPSLK</button>
                <button id="a">A</button>
                <button id="s">S</button>
                <button id="d">D</button>
                <button id="f">F</button>
                <button id="g">G</button>
                <button id="h">H</button>
                <button id="j">J</button>
                <button id="k">K</button>
                <button id="l">L</button>
                <button id=";">;</button>
                <button id="'">'</button>
                <button id="Enter" style={{ width: "130px" }}>ENTER</button>
              </div>
              <div className="fourthalpha">
                <button className="ShiftLeft" style={{ width: "150px" }}>SHIFT</button>
                <button id="z">Z</button>
                <button id="x">X</button>
                <button id="c">C</button>
                <button id="v">V</button>
                <button id="b">B</button>
                <button id="n">N</button>
                <button id="m">M</button>
                <button id=",">,</button>
                <button id=".">.</button>
                <button id="/">/</button>
                <button className="ShiftRight" style={{ width: "150px" }}>SHIFT</button>
              </div>
              <div className="fifthalpha">
                <button className="ControlLeft">CTRL</button>
                <button id="Meta">WIN</button>
                <button id="Alt">ALT</button>
                <button id=" " style={{ width: "450px" }}>SPACE</button>
                <button id="AltGraph">ALT</button>
                <button id="">FN</button>
                <button id="ContextMenu">SEL</button>
                <button className="ControlRight">CTRL</button>
              </div>
            </div>
            <div className="sidekeys">
              <div className="secondthreekeys">
                <button id="Insert">INS</button>
                <button id="Home">HOME</button>
                <button id="PageUp">PGUP</button>
              </div>
              <div className="thirdthreekeys">
                <button id="Delete">DEL</button>
                <button id="End">END</button>
                <button id="PageDown">PGDN</button>
              </div>
              <div></div>
              <div className="firstarrowkey">
                <button id="ArrowUp">↑</button>
              </div>
              <div className="secondarrowkeys">
                <button id="ArrowLeft">←</button>
                <button id="ArrowDown">↓</button>
                <button id="ArrowRight">→</button>
              </div>
            </div>
          </div>
        </div>
    
    );
  }

  export default App;
