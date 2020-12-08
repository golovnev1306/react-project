import './App.css';
import React from "react";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <Sidebar/>
            <Content/>
            <Footer/>
        </div>
    );
}


export default App;
