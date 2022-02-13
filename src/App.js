import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { AboutModal, HowToPlayModal, Input, SettingsModal, SharingModal } from "./components"
import React from 'react';


function App() {

  // TODO: need routing for FAQs
  const [expression, setExpression] = useState("12345678")
  const [attemptNumber, setAttemptNumber] = useState(0)
  const [guess, setGuess] = useState([
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
    "        ",
  ])
  const [modalState, setModalState] = useState({
    about: false,
    howToPlay: false,
    settings: false,
    sharing: false
  });

  const handleInput = function (input) {
    console.log(input)
    if (input != "ENTER" && input != "DELETE") {
      if (guess[attemptNumber].includes(" ")) {
        setGuess(function (prev) {
          console.log(prev);
          let newGuess = [...prev];
          let newInput = prev[attemptNumber].trim() + input;
          for (let i = 0; newInput.length < 8; i++) {
            newInput += " "
          }
          newGuess[attemptNumber] = newInput;
          return newGuess
        });
      }
    }
    if (input == "DELETE") {
      setGuess(function (prev) {
        let newGuess = [...prev];
        let newLine = newGuess[attemptNumber].trim().slice(0, -1)
        console.log(newLine)
        for (let i = 0; newLine.length < 8; i++) {
          newLine += " ";
        }
        newGuess[attemptNumber] = newLine;
        return newGuess
      })
    }
    if (input =="ENTER"){
      if(guess[attemptNumber].includes(" ")){
        alert("that guess doesn't compute!")
      }
      else{
        // compareToExpression(guess[attemptNumber], )
      }
    }
  }

  const toggleModal = function (modalName, open = true) {
    // Takes a string, modalName, and a boolean, open.
    // updates the modalState to indicate if a modal is open and if so which one.
    let modalStateNew = { ...modalState };
    if (open) {
      modalStateNew[modalName] = true;
    }
    else {
      modalStateNew[modalName] = false;
    }
    setModalState(() => modalStateNew)
  };

  return (
    <div className="App">
      {modalState["about"] && <AboutModal toggleModal={toggleModal} />}
      {modalState["howToPlay"] && <HowToPlayModal toggleModal={toggleModal} />}
      {modalState["settings"] && <SettingsModal toggleModal={toggleModal} />}
      {modalState["sharing"] && <SharingModal toggleModal={toggleModal} />}
      <header>
        nerdle+infinity
        <ul className="controls">
          <li><button onClick={() => toggleModal("howToPlay")} >?</button></li>
          <li><button onClick={() => toggleModal("about")}>i</button></li>
          <li><button onClick={() => toggleModal("sharing")}>↪</button></li>
          <li><button onClick={() => toggleModal("settings")}>{'\u2699'}</button></li>
        </ul>
      </header>
      <table className="guessesTable">
        <tbody className="guessesBody">
          {guess.map(g => {
            return (
              <tr className="guessesRow" key={uuidv4()}>
                {g.split("").map(i => {
                  return (
                    <td className="guessesDiv" key={uuidv4()}>{i}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <Input handleInput={handleInput} />
    </div>

  );
}

export default App;
