import { useRef } from "react";
import React, { useState }from "react";
import { BiSolidPurchaseTag } from "react-icons/bi";

const Addproduct = () => {
    const [proname, setProname] = useState("");
    const [price, setPrice] = useState("");
    const [files, setFile] = useState(null);
    const fileInputRef = useRef(null);
    
    const [arrIteim, setArritem] = useState([]);

    const Additeim = () => {
        if (!proname || !price) {
            alert("Please enter product name and price");
            return;
        }
        // Add item to array object 

        let object_item = {
            "proname": proname,
            "price": price,
            "files": URL.createObjectURL(files)
        };
        let new_item = [...arrIteim, object_item];
        localStorage.object_item;
        setArritem(new_item); 
        
        // Restet atfer input value
        setProname("");
        setPrice("");
        if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset file input
    }
    };
    const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]; // យក file ទីមួយ
    setFile(selectedFile); // រក្សាទុក file នៅក្នុង state
    };

    return ( 
        <div className="container mt-5 ml-64 p-3 flex-1 w-4/5 bg-slate-100 rounded border border-gray-700">
            <div className=" flex justify-between">
                <input
                    value={proname}
                    className="p-2 h-8"
                    placeholder="Product name" 
                    onChange={(e) => setProname(e.target.value)}
                />
                <input 
                    value={price}
                    className="p-2 h-8"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input 
                    className="p-2"
                    type="file"
                    onChange={handleFileChange}
                    ref={fileInputRef} // Fixed: Use files[0]
                />
                 <button className="w-20 h-8 bg-green-600 text-white rounded-md m-2" onClick={Additeim}>Add</button>
               <div className="p-2">
                 <BiSolidPurchaseTag className=" inline-block"/> 
               </div>
            </div>
            <div>
                <div className="w-4/5 flex justify-around border mt-5 mb-5 text-lg font-semibold border-none ">
                    <h1>ID</h1>
                    <h1>Name</h1>
                    <h1>Price</h1>
                    <h1>Photo</h1>
                    <h1>Delete</h1>
                </div>
                {
                    arrIteim.map((iteim, index) => {
                        return (
                            <div key={index} className=" w-4/5 flex justify-around border border-gray-800 m-2 rounded-lg items-center">
                                <h1 className="p-2">{index+1}</h1>
                                <h className="p-5">{iteim.proname}</h>
                                <p className="p-2">{iteim.price}</p>
                                <div><img src={iteim.files} alt="" className="w-20 p-2 h-20 object-contain" /></div>
                                    <div>
                                        <button 
                                            className="w-20 h-8 bg-red-600 text-white rounded-md" 
                                            onClick={() => {
                                                setProname("");
                                                setPrice("");
                                                fileInputRef.current.value = null; 
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                            </div>

                        );
                    })
                }
            </div>
        </div>
    );
}
 
export default Addproduct;