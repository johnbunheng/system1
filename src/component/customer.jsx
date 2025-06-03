import { useEffect, useState } from "react";
const Customer = () => {
    const [getcustomer,setCustomer] = useState([]);
    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/users")
        .then(res=>{
            return res.json();
        })
        .then((data)=>{
            setCustomer(data);
            console.log(data);
        })
        .catch((error)=>{
            console.log("Error:",error);
        })
    },[])
    
    // "id": 1,
    // "email": "john@mail.com",
    // "password": "changeme",
    // "name": "Jhon",
    // "role": "customer",
    // "avatar": "https://i.imgur.com/LDOO4Qs.jpg",
    // "creationAt": "2025-06-01T21:16:45.000Z",
    // "updatedAt": "2025-06-01T21:16:45.000Z"


    return ( 
        <div className=" w-4/5 ml-64 p-3">
           <div>
                <p>Customer</p>
                <table className=" mt-4 min-w-full border border-gray-700 m-auto text-center rounded-xl">
                        <thead>
                            <tr className="border h-16 border-gray-700 bg-gray-200">
                                <th className="border p-2 border-gray-700 bg-gray-200">No.</th>
                                <th className="border border-gray-700 bg-gray-200">Name</th>
                                <th className="border border-gray-700 bg-gray-200">Role</th>
                                <th className="border border-gray-700 bg-gray-200">Email</th>
                                <th className="border border-gray-700 bg-gray-200">Password</th>
                                <th className="border border-gray-700 bg-gray-200">Photo</th>
                                <th className="border border-gray-700 bg-gray-200">Create</th>
                                <th className="border border-gray-700 bg-gray-200">Update</th>
                            </tr>
                        </thead>
                        <tbody >
                            {getcustomer.map((item,index)=>{
                                return(
                                <tr key={item.id} className="border border-gray-700">
                                    <td  className="border border-gray-700 bg-gray-200">{index+1}</td>
                                    <td  className="border border-gray-700 bg-gray-200">{item.name}</td>
                                    <td  className="border border-gray-700 bg-gray-200 ">{item.role}</td>
                                    <td  className="border border-gray-700 bg-gray-200">{item.email}</td>
                                    <td  className="border border-gray-700 bg-gray-200">{item.password}</td> 
                                    <td  className="border border-gray-700 bg-gray-200 justify-items-center"><img src={item.avatar} alt="" className="w-20 h-20  rounded-md" /></td>
                                    <td  className="border border-gray-700 bg-gray-200">{item.creationAt}</td>
                                    <td  className="border border-gray-700 bg-gray-200">
                                        <button className="w-20 h-10 bg-blue-600 rounded-md text-white">Edite</button>
                                    </td>
                                </tr>
                                )
                                
                            })}
                        </tbody>
                </table>
           </div> 
        </div>
     );
}
 
export default Customer;