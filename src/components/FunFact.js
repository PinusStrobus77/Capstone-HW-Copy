import React from "react";
const facts = [ 'Fun fact test.', 'Fun fact test 2.'];

const FunFact = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById('factDisplay').innerHTML = facts[randomNumber];
return(
    <div>
    
    </div>
)
}


export default FunFact;