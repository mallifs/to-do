import React from "react"
import ToDoList from "../components/ToDolist"
import User from "../components/user"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hobbies from "../components/Hobbies"
 function Home(){
    return (
        <div>
            <Hobbies/>
            <Navbar/>
            <Footer/>
            <User/>
            <ToDoList/>
        </div>
    )
}
export default Home

 