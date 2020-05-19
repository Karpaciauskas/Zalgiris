import React from "react"
import ProgressBar from 'react-bootstrap/ProgressBar'

function UserLifepointsComponent(props){
    return (
        <div className="text-center block_main_3 rounded shadow">
            <div className="lifepoints">
                <b>Gyvybės taškai:</b> <b className="user_lifepoints">{props.user_lifepoints}</b>
            </div>
            <ProgressBar>
                <ProgressBar striped variant="warning" animated now={props.user_lifepoints} key={1} />
                <ProgressBar striped variant="danger" animated now={1000-props.user_lifepoints} key={2} />
            </ProgressBar> 
        </div>
    )
}       

export default UserLifepointsComponent