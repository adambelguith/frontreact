import { Outlet } from "react-router-dom";
import Navbar from "../componentsnav/Navbar";


export default function UserInterface(){

    return (
        <>
            <Navbar/>

            <Outlet />
            
            <div>footer</div>
        </>
    )
}