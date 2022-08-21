import React, { useState } from "react";

function FilterString(){

    const [ unFilteredArray ] = useState([
        ['blue', 'black', "green"], 
        ["pink", "purple", "red"], 
        ['orange', 'brown', 'yellow']])
    const [ userInput, setUserInput ] = useState('')
    const [ filteredArray, setFilteredArray] = useState([])

    let clickHandler = () => {
        setFilteredArray(unFilteredArray.filter(str => 
            str.includes(userInput)
        ))
    }

    return(
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">{unFilteredArray}</span>
            <input className="inputLine" onChange={(e)=> setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={clickHandler}>Filter</button>
            <span className="resultsBox filterStringRB">{filteredArray}</span>
        </div>
    );
}

export default FilterString;