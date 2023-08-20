import React, { useEffect } from 'react'
import './style.css';

const UseEffect = () => {

  const [ myNum, setMyNum ]= React.useState(0)
  
  useEffect(() =>{
    document.title = `Chats(${myNum})`
  })

    return (
        <div>
            <div className="center_div">
                <p>{myNum}</p>
                <div class="button2" onClick={() => { setMyNum(myNum+1)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
            </div>
        </div>
    )
}

export default UseEffect
