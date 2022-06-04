import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Notfound from "./pages-user/pages/Notfound";
import Signup from "./User/Signup";
import Signin from "./User/Signin";

import Home from "./pages-user/pages/Home";
import Upload from "./pages-user/pages/Upload";
import Download from "./pages-user/pages/Download";

import Update from "./pages-user/pages/Update";
import Verifier from "./pages-admin/pages/Verifier";
import ManageUsers from "./pages-admin/pages/ManageUsers";

import UserInterface from "./pages-user/UserInterface";
import AdminInterface from "./pages-admin/AdminInterface";


function App() {
  return (

      <Routes>

        <Route path="/user" element={<UserInterface/>}>
            <Route index element={<Home/>}/>
            <Route path="download" element={<Download/>}/>
            <Route path="upload" element={<Upload/>}/>
            <Route path="update" element={<Update/>}/>
        </Route>


        <Route path="/admin" element={<AdminInterface/>}>
            <Route index element={<Verifier/>}/>
            <Route path="manageusers" element={<ManageUsers/>}/>
            <Route path="update" element={<Update/>}/>
        </Route>

        <Route path="*" element={<Notfound/>}/>
        <Route path="/" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
  
  );
}

export default App;