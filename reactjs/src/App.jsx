import Home from "./component/home";
import { useState } from "react";
import api from "./component/api.json"

// const arr =[1,2,3,4,"simplyjs"];

function App() {
  const [initialstate ,setinitalstate]=useState("sagar")
  // 1st intial value 2nd update initial value
  function update(){
    setinitalstate("simplyjs");
  }

  return (
    <>
    <div onClick={update} className=" bg-black text-blue-800" >change</div>
    
    <div className=" bg-black text-blue-800">{initialstate}</div>

    { (initialstate=="simplyjs")?   api.map((a)=>{
            return (
            <Home title={a.title} value={a.price} ma={a.id} img={a.image} />
            )
        }):<div>this is not simplyjs</div>
     
    }
     
    </>
  );
}

export default App;
