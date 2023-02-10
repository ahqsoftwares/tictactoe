import { useState } from "react";
import makeMove from "./manager/ai";
import Block from "./manager/Block";
import checkIfWon from "./manager/checkIfWon";
import getState, { registerHook, setState } from "./manager/state";

const human = true;

const humanWon = 1;
const botWon = 2;
const going = 3

export default function App() {
  const [humanFirst, setStarter] = useState(true);
  const [started, setStarted] = useState(false);
  const [turn, setTurn] = useState(human);
  const [currentState, setMainState] = useState(getState());
  const [won, setWon] = useState(going);

  function performMove(index: number, XO: string, XIsHuman: boolean): boolean {
    setStarted(true);
    setState((state) => {
      state[index] = XO;

      return state;
    });
    setTurn((current) => !current);

    const {
      won,
      by
    } = checkIfWon(currentState);

    if (won) {
      if (by == "X" && XIsHuman) {
        setWon(humanWon);
      } else {
        setWon(botWon);
      }
      return true;
    } else return false;
  }

  registerHook((state) => {
    setMainState(state);
  });

  return (
    <div className="mx-auto flex flex-row pt-5">
      <div className="w-[40rem] m-auto h-[40rem] grid grid-cols-3 grid-rows-3">
        {currentState.map((state, index) => <Block ai={!turn || won === humanWon || won === botWon} currentState={state} onClick={() => {
          const stop = performMove(index, humanFirst ? "X" : "O", humanFirst);

          if (!stop) {
            setTimeout(() => {
              let indexA = makeMove(currentState);
              performMove(indexA, !humanFirst ? "X" : "O", humanFirst);
            }, 250);
          }
        }}  />)}
      </div>
      <div className="flex flex-col mx-auto my-auto w-[20rem]">
        <span className={`${won === going ? "hidden" : ""} text-2xl mx-auto mb-5 font-extrabold`}>{won == humanWon ? "Human" : "Bot"} won the game</span>
        <span className="mx-auto text-2xl" style={{"userSelect": "none"}}>Current Turn: <strong>{turn ? "Human" : "Ai"}</strong></span>
        <button className="mx-auto mt-5 text-3xl p-3 transition-all text-white bg-green-800 hover:bg-green-900 disabled:hover:bg-gray-400 disabled:bg-gray-400 rounded-xl shadow-xl" disabled={started} onClick={() => {
          if (!started) {
            setStarter((data) => !data);
            setTurn((data) => !data);
          }
        }}>Set {humanFirst ? "Ai" : "Human"} to start</button>

        <button className="mx-auto mt-5 text-3xl p-3 transition-all text-white bg-blue-800 hover:bg-blue-900 disabled:hover:bg-gray-400 disabled:bg-gray-400 rounded-xl shadow-xl" disabled={!started && humanFirst} onClick={() => {
          if (!started) {
            setStarted(true);
            setState((state) => {
              state[0] = "X";

              return state;
            });
            setTurn((current) => !current);
          } else {
            setStarter(true);
            setStarted(false);
            setTurn(human);
            setWon(going);
            setState((items) => {
              for (let i = 0; i < items.length; i++) {
                items[i] = "";
              }

              return items;
            });
          }
        }}>{!started ? "Start" : "Reset"}</button>
      </div>
    </div>
  );
};
