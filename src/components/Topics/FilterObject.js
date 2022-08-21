import React, { useState } from "react";

function FilterObject() {

    let [unFilteredArray] = useState([{
        name: 'David',
        age: 27,
        isCool: true
    }, {
        name: 'Parker',
        age: 27
    }])
    let [userInput, setUserInput] = useState('')
    let [filteredArray, setFilteredArray] = useState([])


    let clickHandler = () => {
        setFilteredArray(unFilteredArray.filter(arr =>
            arr.hasOwnProperty(userInput)
        ))
    }

    return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">{JSON.stringify(unFilteredArray)}</span>
            <input className="inputLine" onChange={(e) => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={clickHandler}>Filter</button>
            <span className="resultsBox filterObjectRB">{JSON.stringify(filteredArray)}</span>
        </div>

    );
}

export default FilterObject;