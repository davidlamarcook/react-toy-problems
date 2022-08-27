import React, {useState} from "react";

function Sum(){

    let [number1, setNumber1] = useState(0)
    let [number2, setNumber2] = useState(0)
    let [sum, setSum] = useState(null)

    let add = () => setSum((+number1) + (+number2))

    return(
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine" onChange={(e) => setNumber1(e.target.value)}></input>
            <input className="inputLine" onChange={(e) => setNumber2(e.target.value)}></input>
            <button className="confirmationButton" onClick={add}>Add</button>
            <span className="resultsBox">{sum}</span>
        </div>
    );
}

export default Sum;