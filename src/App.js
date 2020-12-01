import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

function App(props) {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Content state = {props.state}/>
            <Footer/>
        </div>
    );
}


export default App;
