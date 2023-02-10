function Home({title,value,ma,img}){
    return (
        <>
        <div className="flex flex-1 bg-black text-blue-800" > 
           <div className="w-[100px] h-[100px] m-6"><span className="text-white font-bold">title:</span>{title}</div> 
            <div className="w-[200px] h-[200px]"><span className="text-white font-bold">price:</span>{value} </div>
            <div className="w-[200px] h-[200px]"> <span className="text-white font-bold">id:</span>{ma}</div> 
            <img src={img} className="w-[200px] h-[200px]"/>
        </div>
 
        </>
    )
}



export default Home;




