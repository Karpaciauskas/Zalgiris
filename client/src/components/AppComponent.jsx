import React, {Component} from "react"
import User from "../containers/User"
import AI from "../containers/AI"
import Statistics from "../containers/Statistics"
import Header from "../containers/Header";
import FooterComponent from "../containers/Footer";
import User_lifepoints from '../containers/User_lifepoints'
import AI_lifepoints from '../containers/AI_lifepoints'
import Board from "../containers/Board";
import Field from "../containers/Field"

import Restart from "../containers/Restart";
import NavBar from "../containers/NavBar";
import PlaceholderComponent from "../containers/Placeholder";

class AppComponent extends Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.onHandleAttacks()
    }
    render() {
    return(


        <div className="bg">
            <div className="game">
            <div className="body_1">
            <NavBar/>
            <Header />
            <PlaceholderComponent/>
            </div>
            <div className="body" >
                <div className="hp_item_user"><User_lifepoints/></div>
                <div className="middle_top"><Field/></div>
                <div className="hp_item_ai"><AI_lifepoints/></div>
                <div className="item_1"><User /></div>
                <div className="item_2"><Board /><Statistics /></div>
                <div className="item_3"><AI /><Restart/></div>
                
            </div>
            <FooterComponent />
            </div>
        </div>
    )
    }
}

export default AppComponent