import { useState,useEffect } from "react";
import axios from "axios";
import Img2 from "../img/ice.png"
import Img3 from "/src/img/coca.png"
import Img4 from "/src/img/wurk.png"
import Img5 from "/src/img/krud.webp"
import Img6 from "/src/img/champian.png"
import Img7 from "/src/img/bakas.jpg"
import Img8 from "/src/img/pokari.png"
import Img9 from "/src/img/express.png"
import Img10 from "/src/img/idol.jpg"
import Img11 from "/src/img/bostrong.jpg"
import Img12 from "/src/img/Carabao-Energy-Drink-768x768-1.webp"
import Img13 from "/src/img/Pepsi-330ml-Can.avif"

import Img14 from "/src/img/1.png"
import Img15 from "/src/img/2.png"
import Img16 from "/src/img/3.png"
import Img17 from "/src/img/4.png"
import Img18 from "/src/img/5.png"
import Img19 from "/src/img/Fresh beef burger isolated -1.png"
const Product = () => {

    const [itemsdrink,setitemsdrink] = useState ([
        {   id:"1",name:"Ice",price:"1.00",images:Img2},
        {   id:"2",name:"Coca-Cola",price:"1.00",images:Img3},
        {   id:"3",name:"Work",price:"1.00",images:Img4},
        {   id:"4",name:"Krud",price:"1.00",images:Img5},
        {   id:"5",name:"Champian",price:"1.00",images:Img6},
        {   id:"6",name:"Bacchus",price:"1.00",images:Img7},
        {   id:"7",name:"Pocari",price:"1.00",images:Img8},
        {   id:"8",name:"Express",price:"1.00",images:Img9},
        {   id:"9",name:"Idol",price:"1.00",images:Img10},
        {   id:"10",name:"Bostrong",price:"1.00",images:Img11},
        {   id:"11",name:"Carabao",price:"1.00",images:Img12},
        {   id:"12",name:"Pepsi",price:"1.00",images:Img13}        
    ]);
   
    const [itemsfood , setitemsfood] = useState ([
        {   id:"1",name:"Burger-Beef",price:"1.00",images:Img14},
        {   id:"2",name:"Burger-Stack",price:"1.00",images:Img15},
        {   id:"3",name:"Burger-Chicken",price:"1.00",images:Img16},
        {   id:"4",name:"Burger-Yee",price:"1.00",images:Img17},
        {   id:"5",name:"Burger-taa",price:"1.00",images:Img18},
        {   id:"6",name:"Burger-lov",price:"1.00",images:Img19},        
    ] );

    const [materials , setMaterial] = useState([]);
    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products")
        .then((res)=>{
            return res.json();
        })
        .then(data=>{
            setMaterial(data);
        })
        .catch((error)=>
            console.log('Error:', error));
    },[])

    const [beers , setBeer] = useState([]);
    useEffect(()=>{
        fetch("https://api.sampleapis.com/beers/ale")
        .then((res)=>{
            return res.json();
        })
        .then(data=>{
            
            // chang pi image tv images

            const updatdata = data.map((item) => ({
                ...item,
                images: [item.image],
            }));
            setBeer(updatdata);
           
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
    }else if (category === "beer") {
      setCurrentItems(beers);
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
            <div className="w-4/6 grid grid-cols-3 m-4 border border-gray-700 rounded xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:ml-10">
               
                {
                   currentItems.map((item)=>(
                            <div key={item.id} className="card w-56 h-96 m-5 justify-between bg-gray-300 justify-items-center shadow-lg rounded p-2">
                                
                                <img className="w-44 h-44 bg-white object-contain rounded items-center mt-2 bg-none" 
                                    src={item.images} 
                                    alt="loading..." 
                                    />
                                   
                                <div className="text-start w-full p-3">
                                    <h1>ID. {item.id}</h1>
                                    <h1 className="text-green-600">{item.name}</h1>
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