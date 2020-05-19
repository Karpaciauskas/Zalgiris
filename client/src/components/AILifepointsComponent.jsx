import React from "react"
import ProgressBar from 'react-bootstrap/ProgressBar'

function AILifepointsComponent(props){
    return (
        <div className="text-center block_main_3 rounded shadow">
            <div className="lifepoints">
                <b>Gyvybės taškai:</b> <b className="ai_lifepoints">{props.ai_lifepoints}</b>
            </div>
            <ProgressBar>
                <ProgressBar striped variant="primary" animated now={props.ai_lifepoints} key={1} />
                <ProgressBar striped variant="danger" animated now={1000-props.ai_lifepoints} key={2} />
            </ProgressBar>
        </div>
    )
}       

export default AILifepointsComponent