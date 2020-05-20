import React from "react"
import {Form } from 'react-bootstrap';

function AiComponent(props){
    return (
        <div className="AI text-center block_main rounded shadow">
            <img src="../images/DE_text.png" alt="logo" width="100%" height="auto" />
            <h3> Strategija</h3>
            <input 
                type="range" 
                min="1" max="3" 
                className="slider_ai" 
                name="ai_range_value"
                disabled
                value={props.ai_range_value}
                step="1">
            </input>
                <form>
                {props.ai_range_value==1 && (   
                    <div>
                        <h3> Artima kova</h3>
                        <h5><Form.Check
                                type="radio"
                                label="Stiprus smūgis"
                                name="ai_attack_type"
                                value="1"
                                id="ai_AT1"
                                checked={props.ai_attack_type===1}
                                disabled
                            />
                            <br></br>
                            <Form.Check
                                type="radio"
                                label="Stipri gynyba"
                                name="ai_attack_type"
                                value="2"
                                id="ai_AT2"
                                checked={props.ai_attack_type===2}
                                disabled
                            /> </h5>
                        <br></br>
                    </div>
                    )}             
                {props.ai_range_value==2 && (
                    <div>
                        <h3> Tolima kova</h3>
                        <h5><Form.Check
                                type="radio"
                                label="Lankai"
                                name="ai_attack_type"
                                value="3"
                                id="ai_TK1"
                                checked={props.ai_attack_type===3}
                                disabled
                            />
                            <br></br>
                            <Form.Check
                                type="radio"
                                label="Ietys"
                                name="ai_attack_type"
                                value="4"
                                id="ai_TK2"
                                checked={props.ai_attack_type===4}
                                disabled
                            /></h5>
                        <br/>
                    </div>
                    )}
                {props.ai_range_value==3 && (
                    <div>
                        <h3> Judėjimo būdas</h3>
                        <h5><Form.Check
                                type="radio"
                                label="Ant kovos žirgų"
                                name="ai_attack_type"
                                value="5"
                                id="ai_JB1"
                                checked={props.ai_attack_type===5}
                                disabled
                            /></h5>
                        <br/><br/><br/>
                    </div>
                )}
            </form>
        <br></br><br></br>   
        </div>
    )
}       
export default AiComponent