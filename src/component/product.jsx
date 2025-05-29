import { useState,useEffect } from "react";
import axios from "axios";
const Product = () => {

    const [itemsdrink,setitemsdrink] = useState ([
        {   id:"1",name:"Ice",price:"1.00",images:"/src/img/ice.png"},
        {   id:"2",name:"Coca-Cola",price:"1.00",images:"/src/img/coca.png"},
        {   id:"3",name:"Work",price:"1.00",images:"/src/img/wurk.png"},
        {   id:"4",name:"Krud",price:"1.00",images:"/src/img/krud.webp"},
        {   id:"5",name:"Champian",price:"1.00",images:"/src/img/champian.png"},
        {   id:"6",name:"Bacchus",price:"1.00",images:"/src/img/bakas.jpg"},
        {   id:"7",name:"Pocari",price:"1.00",images:"/src/img/pokari.png"},
        {   id:"8",name:"Express",price:"1.00",images:"/src/img/express.png"},
        {   id:"9",name:"Idol",price:"1.00",images:"/src/img/idol.jpg"},
        {   id:"10",name:"Bostrong",price:"1.00",images:"/src/img/bostrong.jpg"},
        {   id:"11",name:"Carabao",price:"1.00",images:"/src/img/Carabao-Energy-Drink-768x768-1.webp"},
        {   id:"12",name:"Pepsi",price:"1.00",images:"/src/img/Pepsi-330ml-Can.avif"}        
    ]);
   
    const [itemsfood , setitemsfood] = useState ([
        {   id:"1",name:"Burger-Beff",price:"1.00",images:"/src/img/1.png"},
        {   id:"2",name:"b",price:"1.00",images:"/src/img/2.png"},
        {   id:"3",name:"c",price:"1.00",images:"/src/img/3.png"},
        {   id:"4",name:"f",price:"1.00",images:"/src/img/4.png"},
        {   id:"5",name:"b",price:"1.00",images:"/src/img/5.png"},
        {   id:"6",name:"r",price:"1.00",images:"/src/img/Fresh beef burger isolated -1.png"},        
    ] );

    const [materials , setMaterial] = useState([]);

    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products")
        .then((res)=>{
            return res.json();
        })
        .then(data=>{
            console.table(data);
            setMaterial(data);
        })
        .catch((error)=>
            console.log('Error:', error));
    },[])


    const [currentItems, setCurrentItems] = useState(itemsdrink);
    const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (category === "food") {
      setCurrentItems(itemsfood);
    } else if (category === "drink") {
      setCurrentItems(itemsdrink);
    } else if (category === "material") {
      setCurrentItems(materials);
    }
    };

    return ( 
       <div className="container mt-5 ml-64 p-3 flex-1 w-4/5 bg-slate-100 rounded border border-gray-700">

            <div className="w-3/6 flex justify-around">
                <p className=" text-xs mt-2">Product </p>
                <input type="search" 
                    placeholder="Search"
                    className="border border-gray-700 text-sm outline-none p-2 h-8 rounded w-44"
                />
                <select onChange={handleCategoryChange } name="" id="" className="border border-gray-700 h-8 w-36 rounded text-sm">
                    <option value="drink">Category</option>
                    <option value="drink">Drink</option>
                    <option value="beer">Beer</option>
                    <option value="material">Material</option>
                    <option value="food">Food</option>
                </select>
                <select name="" id="" className="border border-gray-700 h-8 w-36 rounded text-sm">
                    <option value="">Cambodia</option>
                    <option value="">Thailand</option>
                    <option value="">USA</option>
                    <option value="">Korea</option>
                    <option value="">China</option>

                </select>
                <button type="search" className="bg-cyan-600 text-white p-1 text-sm h-8 rounded w-14">Search</button>
            </div>
            <div className="w-4/6 grid grid-cols-3 m-4 border border-gray-700 rounded">
               
                {
                   currentItems.map((item)=>(
                            <div key={item.id} className="card w-56 h-80 m-5 justify-between bg-gray-300 justify-items-center shadow-lg rounded  p-2">
                                
                                <img className="w-44 h-44 bg-white object-contain rounded items-center mt-2 bg-none" 
                                    src={item.images} 
                                    alt="" 
                                    />
                                   
                                <div className="text-start w-full p-3">
                                    <h1>ID. {item.id}</h1>
                                    <h1 className="text-green-600 font-semibold">{item.name}</h1>
                                    <h1 className="text-red-700">{item.price}$</h1>
                                    <button className="bg-cyan-600 text-white rounded text-xs p-1 h-8">Add Card</button>
                                </div>
                                
                            </div>
                        
                    ))
                }
              
            </div>
             
       </div>
     );
}
 
export default Product;