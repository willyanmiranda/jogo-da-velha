import { useState } from 'react';
import './styles/style.scss';

function App() {

  const initialState = {
    box0: "",
    box1: "",
    box2: "",
    box3: "",
    box4: "",
    box5: "",
    box6: "",
    box7: "",
    box8: "",
  }

  const winningCombinations = {
    horizontal1: false,
    horizontal2: false,
    horizontal3: false,
    vertical1: false,
    vertical2: false,
    vertical3: false,
    diagonal1: false,
    diagonal2: false
  }

  const [plays, setPlays] = useState(initialState);
  const [winCombo, setWinCombo] = useState(winningCombinations)
  const [marks, setMarks] = useState(["X"]);
  
  const handlePlays = (box) => {
    let currentPlays = plays
    if(currentPlays[box] === "") {
      currentPlays[box] = handleMarks()
    }
    setPlays(currentPlays)
    checkWinner()
  }

  const handleMarks = () => {
    if(marks[marks.length - 1] === "X") {
      setMarks([...marks, "O"])
    } else {
      setMarks([...marks, "X"])
    }
    return marks[marks.length - 1]
  }

  const checkCombo = (id) => {
    let combinations = winCombo
    combinations[id] = true
    setWinCombo(combinations)
    setTimeout(() => {
      reset()
    }, 1000)
  }

  const reset = () => {
   let confirmation = window.confirm(`${marks[marks.length - 1]} venceu!!! reiniciar?`)
   
   if(confirmation === true) {
    setPlays(initialState);
    setWinCombo(winningCombinations)
   }

  }

  console.log(marks)

  const checkWinner = () => {
    if((plays.box0 === "X" && plays.box1 === "X" && plays.box2 === "X") || (plays.box0 === "O" && plays.box1 === "O" && plays.box2 === "O")) {
      checkCombo("horizontal1")

    } else if((plays.box3 === "X" && plays.box4 === "X" && plays.box5 === "X") || (plays.box3 === "O" && plays.box4 === "O" && plays.box5 === "O")) {
      checkCombo("horizontal2")

    } else if((plays.box6 === "X" && plays.box7 === "X" && plays.box8 === "X") || (plays.box6 === "O" && plays.box7 === "O" && plays.box8 === "O")) {
      checkCombo("horizontal3")

    } else if((plays.box0 === "X" && plays.box3 === "X" && plays.box6 === "X") || (plays.box0 === "O" && plays.box3 === "O" && plays.box6 === "O")) {
      checkCombo("vertical1")

    } else if((plays.box1 === "X" && plays.box4 === "X" && plays.box7 === "X") || (plays.box1 === "O" && plays.box4 === "O" && plays.box7 === "O")) {
      checkCombo("vertical2")

    } else if((plays.box2 === "X" && plays.box5 === "X" && plays.box8 === "X") || (plays.box2 === "O" && plays.box5 === "O" && plays.box8 === "O")) {
      checkCombo("vertical3")

    } else if((plays.box0 === "X" && plays.box4 === "X" && plays.box8 === "X") || (plays.box0 === "O" && plays.box4 === "O" && plays.box8 === "O")) {
     checkCombo("diagonal1")

    } else if((plays.box2 === "X" && plays.box4 === "X" && plays.box6 === "X") || (plays.box2 === "O" && plays.box4 === "O" && plays.box6 === "O")) {
      checkCombo("diagonal2")

    } else if(marks.length > 9) {
      console.log("chamou")
      reset()
    }
  }

  return (
    <div className='container bg-light' id='container'>
      <div className='row d-flex align-items-center'>
        <div className='col border border-dark-subtle d-flex justify-content-center align-items-center' id="box" onClick={() => handlePlays("box0")}>
          <div id={winCombo.vertical1 ? "vertical" : winCombo.diagonal1 ? "diagonal1" : ""}></div>
          <div className='d-flex justify-content-center text-danger' id="mark">{plays.box0}</div>
        </div>

        <div className='col border border-dark-subtle d-flex justify-content-center align-items-center' id="box" onClick={() => handlePlays("box1")}>
          <div id={winCombo.vertical2 ? "vertical" : ""}></div>
          <div className='d-flex justify-content-center text-danger' id="mark">{plays.box1}</div>
        </div>

        <div className='col border border-dark-subtle d-flex justify-content-center align-items-center' id="box" onClick={() => handlePlays("box2")}>
          <div id={winCombo.vertical3 ? "vertical" : winCombo.diagonal2 ? "diagonal2" : ""}></div>
          <div className='d-flex justify-content-center text-danger' id="mark">{plays.box2}</div>
        </div>
        <div id={winCombo.horizontal1 ? "horizontal" : ""}></div>
      </div>

      <div className='row d-flex align-items-center'>
        <div className='col border border-dark-subtle d-flex justify-content-center align-items-center' id="box" onClick={() => handlePlays("box3")}>
          <div id={winCombo.vertical1 ? "vertical" : ""}></div>
          <div className='d-flex justify-content-center text-danger' id="mark">{plays.box3}</div>
        </div>

        <div className='col border border-dark-subtle d-flex justify-content-center align-items-center' id="box" onClick={() => handlePlays("box4")}>
          <div id={winCombo.vertical2 ? "vertical" : winCombo.diagonal1 ? "diagonal1" : winCombo.diagonal2 ? "diagonal2" : ""}></div>
          <div className='d-flex justify-content-center text-danger' id="mark">{plays.box4}</div>
        </div>

        <div className='col border border-dark-subtle d-flex justify-content-center align-items-center' id="box" onClick={() => handlePlays("box5")}>
          <div id={winCombo.vertical3 ? "vertical" : ""}></div>
          <div className='d-flex justify-content-center text-danger' id="mark">{plays.box5}</div>
        </div>
        <div id={winCombo.horizontal2 ? "horizontal" : ""}></div>
      </div>

      <div className='row d-flex align-items-center'>
        <div className='col border border-dark-subtle d-flex justify-content-center align-items-center' id="box" onClick={() => handlePlays("box6")}>
          <div id={winCombo.vertical1 ? "vertical" : winCombo.diagonal2 ? "diagonal2" : ""}></div>
          <div className='d-flex justify-content-center text-danger' id="mark">{plays.box6}</div>
        </div>

        <div className='col border border-dark-subtle d-flex justify-content-center align-items-center' id="box" onClick={() => handlePlays("box7")}>
        <div id={winCombo.vertical2 ? "vertical" : ""}></div>  
        <div className='d-flex justify-content-center text-danger' id="mark">{plays.box7}</div>
        </div>

        <div className='col border border-dark-subtle d-flex justify-content-center align-items-center' id="box" onClick={() => handlePlays("box8")}>
        <div id={winCombo.vertical3 ? "vertical" : winCombo.diagonal1 ? "diagonal1" : ""}></div>
          <div className='d-flex justify-content-center text-danger' id="mark">{plays.box8}</div>
        </div>
        <div id={winCombo.horizontal3 ? "horizontal" : ""}></div>
      </div>
    </div>
    
  );
}

export default App;