import './App.css';
import React from "react";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import HeaderContainer from "./components/Header/HeaderContainer";
import {initializeApp} from "./redux/app-reducer";
import {connect} from 'react-redux';
import Preloader from "./components/common/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader />
        }
        return (
            <div className="App">
                <HeaderContainer/>
                <Sidebar/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isInitialized: state.app.isInitialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App);
