import React, { useState } from "react";

function Palindrome(){

    const [userInput, setUserInput ] = useState('')
    const [ palindrome, setPalindrome ] = useState(false)
    const [ checked, setChecked] = useState(false)


    const checkPalindrome = () => {
        setChecked(true)
        let backwards = userInput.split('').reverse().join('');

        if(userInput === backwards) {
            setPalindrome(true)
        } 
    }

    return(
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input  className="inputLine" onChange={(e) => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={checkPalindrome}>Submit</button>
            <span className="resultsBox">Palindrome: {checked ? JSON.stringify(palindrome) : ''}</span>

        </div>
    );
}

export default Palindrome;