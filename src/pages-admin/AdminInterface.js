import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components-admin/NavbarAdmin";


export default function AdminInterface(){

    return (
        <>
            <NavbarAdmin/>
            
            <Outlet />
            <div>footer</div>
        </>
    )
}