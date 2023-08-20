import React, { useState, useEffect } from 'react'
import "./style.css";

// get the localstorage data back
const getlocalData = () =>{
    const list = localStorage.getItem("mytodolist");

    if (list) {
        return JSON.parse(list);
    }else{
        return [];
    }
}


const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getlocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, settoggleButton] = useState(false);


    // add the item function
    const addItem = () => {
        if (!inputdata) {
            alert("plz fill the data");
        }else if(inputdata &&  toggleButton){
            setItems(items.map((curElem) =>{
                if(curElem.id === isEditItem){
                    return {...curElem,name:inputdata}
                }
                return curElem;
            }))
            setInputData();
            setIsEditItem(null);
            settoggleButton(false)
        }else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            };
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    }


    // edit the item
    const editItem = (index) =>{
        const item_todo_edited = items.find((curElem) =>{
            return curElem.id === index;
        });
        setInputData(item_todo_edited.name);
        setIsEditItem(index);
        settoggleButton(true)
    }



    // delete iteme
    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem) => {
          return curElem.id !== index;
        });
        setItems(updatedItems);
      };


    //delete all item
    const removeAll =()=>{
        setItems([]);
    }


    // adding localStorage
    useEffect(() =>{
        localStorage.setItem("mytodolist", JSON.stringify(items))
    },[items])




    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src='./images/todo.svg' alt='todo'></img>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input
                            type="text"
                            placeholder=" Add Item"
                            className="form-control"
                            onChange={(event) => setInputData(event.target.value)}
                            value={inputdata}

                        />
                        {toggleButton ? (<i className="far fa-edit add-btn" onClick={addItem} ></i>) : 
                        (<i className="fa fa-plus add-btn" onClick={addItem} />)}   
                    </div>
                    <div>
                        {/* show our item */}
                        <div className='showItems'>
                            {items.map((curElem,index) => {
                                return (
                                    <div className='eachItem' key={index}>
                                        <h3>{curElem.name}</h3>
                                        <div className='todo-btn'>
                                            <i className="far fa-edit add-btn" onClick={ () =>editItem(curElem.id)} />
                                            <i className="far fa-trash-alt add-btn" onClick={ () =>deleteItem(curElem.id)}/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/* remove all button */}
                        <div className='showItems'>
                            <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}>
                                <span>CHECK LIST</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
