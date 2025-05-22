import { Link } from "react-router-dom";
import Img1 from "../img/Hengg_Nero_AI_Background_Remover.png"
import Img2 from "../img/logo.png"
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { MdOutlineExpandCircleDown } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";
import { TbMessageReportFilled } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineBorderColor } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
const Sibar = (props) => {
    return ( 
      
        
        <div class="flex h-20">
            {/* saibar */}
            <div class="w-60 bg-gray-800 text-white p-4 fixed top-0 left-0 h-screen">
                <h1 class="text-lg font-bold mb-6">Dashboard</h1>
                    <ul className="-inset-4 text-stone-300 p-0">
                        <Link to="/"><li className="p-3 rounded-lg hover:bg-blue-600"><RiCustomerService2Fill className=" inline-block mr-2"/> Customer</li></Link>
                        <Link to="/order"><li className="p-3 rounded-lg hover:bg-blue-600"><MdOutlineBorderColor className=" inline-block mr-2"/> Order</li></Link>
                        <Link to="/product"><li className="p-3 rounded-lg hover:bg-blue-600"><MdProductionQuantityLimits className=" inline-block mr-2"/> Product</li></Link>
                        <Link to="/addproduct"><li className="p-3 rounded-lg hover:bg-blue-600"><BiSolidPurchaseTag className=" inline-block mr-2"/> Add Product</li></Link>
                        <Link to="/service"><li className="p-3 rounded-lg hover:bg-blue-600"><MdOutlineExpandCircleDown className=" inline-block mr-2"/> Expanse</li></Link>
                        <li className="p-3 rounded-lg hover:bg-blue-600"><FaUsersLine className=" inline-block mr-2"/> Employee</li>
                        <li className="p-3 rounded-lg hover:bg-blue-600"><TbMessageReportFilled className=" inline-block mr-2"/> Report</li>
                        <li className="p-3 rounded-lg hover:bg-blue-600"><LuUserRound className=" inline-block mr-2"/> User</li>
                        <li className="p-3 rounded-lg hover:bg-blue-600"><MdOutlineSettings className=" inline-block mr-2"/> Setting</li>
                        {props.children}
                    </ul>
            </div>

            {/* header */}
            <div class="ml-60 p-3 flex-1 flex justify-between bg-cyan-100">
                
                <div className="w-4/6 flex items-center ">
                    <img src={Img2} alt="" 
                        className="w-10 mr-5 rounded-full items-center"
                    />
                    <div>
                        <h1 className="text-lg text-center font-bold">POS-SHOP</h1>
                        <p className="text-center text-xs">Drink & Beer</p>
                    </div>
                    <input type="search"
                        placeholder="Search"
                        className="h-8 w-36 outline-none ml-5 p-3 rounded border text-sm border-gray-600"
                    />
                    <span className="h-8 w-8 bg-white rounded border border-gray-600 "><CiSearch className="m-auto mt-2"/></span>
                </div>
                <div className="w-1/4 flex justify-end items-center ">
                    <IoIosNotifications className="text-3xl m-5"/>
                    <MdOutlineMarkEmailUnread className="text-3xl"/>
                    <div className="ml-5 mr-5 ">
                        <h1 className="text-sx font-bold">Admin HENG</h1>
                        <p className="text-xs">Admin</p>
                    </div>
                    <img src={Img1} alt="" 
                    className="w-10 rounded-full"/>
                </div>
            </div>
        </div>
     );
}
 
export default Sibar;