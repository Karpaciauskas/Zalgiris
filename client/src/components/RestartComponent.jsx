import React from "react"
import {Button} from 'react-bootstrap';

function RestartComponent(props){
    return (
            <div className=" text-center block_main_6 rounded shadow">
                {props.activeQuestion >9 && props.user_lifepoints==0 ? <div><br></br>
                    <Button className="rounded-pill" variant="warning" onClick={props.onRestart}>Pradėti iš naujo</Button>
                <br></br><br></br></div>
                : props.ai_lifepoints==0 && <div><br></br>
                    <Button className="rounded-pill" variant="warning" onClick={props.onRestart}>Pradėti iš naujo</Button>
                <br></br><br></br></div>}
            </div>
    )
}       

export default RestartComponent