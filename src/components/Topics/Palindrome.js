import React, { useState } from "react";

function Palindrome(){

    let [userInput, setUserInput ] = useState('')
    let [ palindrome, setPalindrome ] = useState('')


    let checkPalindrome = () => setPalindrome = (userInput) => {
        let forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if(forwards === backwards) {
            setPalindrome(true)
        } else {
            setPalindrome(false)
        }
    }

    return(
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input  className="inputLine" onChange={(e) => setUserInput(e.target.value)}></input>
            <button className="confirmationButton" onClick={checkPalindrome}>Submit</button>
            <span className="resultsBox">Palindrome: {palindrome}</span>

        </div>
    );
}

export default Palindrome;