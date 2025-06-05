import Img1 from "../img/heng5.jpg"
import Img2 from "../img/hong.jpg"
import Img3 from "../img/seth.jpg"
import Img4 from "../img/sorn.jpg"
import Img5 from "../img/Hour.jpg"

import { FaCode } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { useState } from "react";

const User = () => {

    const [users, Setuser] = useState([
        {id:"1",name:'John Bunheng',posistion:"Software Developer",Image:Img1},
        {id:"2",name:"Por Sivhong",posistion:"Web Developer",Image:Img2},
        {id:"3",name:"Mao Menghour",posistion:"Software Enggineer",Image:Img5},
        {id:"4",name:"Khim Piseth",posistion:"Back-End Developer",Image:Img3},
        {id:"5",name:"Som Sorn",posistion:"Front-End Developer",Image:Img4},
    ]);

    return ( 
        <div className="container w-4/5 mt-5 ml-64 justify-items-center p-3 grid grid-cols-3 bg-gray-100 border border-gray-500 rounded">
            {users.map((item)=>{
                return(
                        <div key={item.id} className="w-96 m-2 h-60 bg-gray-200 border justify-items-center border-gray-500 rounded">
                            <FaAward className="mt-1 text-red-500 text-xl ml-80"/>
                            <img src={item.Image}
                            className=" w-24 rounded-full object-contain"
                            alt="" />
                            <h1 className=" font-semibold text-xl">{item.name}</h1>
                            <p className="text-sky-900"><FaCode className=" inline-block text-yellow-500 animate-spin"/> {item.posistion}</p>
                            <button  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Message</button>
                        </div>
                    );
            })}
        </div>
     );
}
 
export default User;