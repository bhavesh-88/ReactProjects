import React ,{useState} from 'react';
import './style.css';
import Menu  from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList = [...new Set(Menu.map((curElem) =>{
    return curElem.category;
})),"All",
];

// console.log(uniqueList);

const Resturant = () => {
    // create a obj = const myred ={color : "red"}
    // and use in tag 
    // style = {myred}

    // hooks will be top 
    const[menuData , setMenuData] = useState(Menu);
    const[menulist , setMenulist] = useState(uniqueList);
    // console.log(menuData);

    const filteritem =(category) =>{
        if(category === "All"){
            setMenuData(Menu);
            return ;
        }
        const updatelist = Menu.filter((curElem) =>{
            return curElem.category === category;
        });

        setMenuData(updatelist);
    }
  return (
    <>
     <Navbar filteritem={filteritem} menulist={menulist} setMenuData={setMenuData}/>
     <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant
