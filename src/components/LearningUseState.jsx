import React, { useState } from 'react'

function LearningUseState() {
    const[counter,setCounter]=useState(0)
    function increaseCounter(){
        setCounter(counter+1);
        console.log(counter+1);
    }
     function decreaseCounter(){
        setCounter(counter-1);
        console.log(counter-1);
        if(counter<=0){
            setCounter(0);
        }

    }
    // let counter=0
    // function increaseCounter(){
    //     counter+=1;
    //     console.log(counter);
    // }
    // function decreaseCounter(){
    //     counter-=1;
    //     console.log(counter)
    // }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
    </div>
  )
}

export default LearningUseState


