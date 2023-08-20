import React ,{useState} from 'react'
import './style.css';


const UseState = () => {
  
  const initialdata= 0;
  const [ myNum, setMyNum ]= React.useState(initialdata)
  
  return (
    <div>
      <div className="center_div">
        <p>{myNum }</p>
        <div class="button2" onClick={() => { setMyNum(myNum+1)}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2" onClick={() =>{myNum >0 ?  setMyNum(myNum-1) : setMyNum(0)}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </div>
  )
}

export default UseState
