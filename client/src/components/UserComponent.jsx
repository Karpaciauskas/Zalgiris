import React from "react"
import {Button, Modal, Form } from 'react-bootstrap'

function UserComponent(props){
    return (
        <div className="USER text-center block_main rounded shadow">
            <img src="../images/LT_PL_text.png" alt="logo" width="100%" height="auto" />
            <b>Turimi auksiniai: </b><b className="yellow_label">{props.user_coins}</b><img src="../images/coins.png" alt="logo" width="10%" height="auto" />
            <h3> Strategija (1-3)</h3>
            <input 
                type="range" 
                min="1" max="3" 
                className="slider" 
                name="range_value"
                value={props.range_value}
                onChange={props.handleRangeChange}
                step="1">
            </input>
                <form onChange={props.handleInputChange}>
                {props.range_value==1 && (   
                    <div>
                        <h3> Artima kova</h3>
                        <h5><Form.Check
                                type="radio"
                                label="Stiprus smūgis"
                                name="attack_type"
                                value="1"
                                id="AT1"
                            />
                            <br></br>
                            <Form.Check
                                type="radio"
                                label="Stipri gynyba"
                                name="attack_type"
                                value="2"
                                id="AT2"
                            />  </h5>
                        
                    </div>
                    )}             
                {props.range_value==2 && (
                    <div>
                        <h3> Tolima kova</h3>
                        <h5><Form.Check
                                type="radio"
                                label="Lankai"
                                name="attack_type"
                                value="3"
                                id="TK1"
                            />
                            <br></br>
                            <Form.Check
                                type="radio"
                                label="Ietys"
                                name="attack_type"
                                value="4"
                                id="TK2"
                            /></h5>
                        
                    </div>
                    )}
                {props.range_value==3 && (
                    <div>
                        <h3> Judėjimo būdas</h3>
                        <h5><Form.Check
                                type="radio"
                                label="Ant kovos žirgų"
                                name="attack_type"
                                value="5"
                                id="JB1"
                            /></h5>
                        <br/><br/>
                    </div>
                    )}
                    <br></br>
                    <b className="points_label">{props.attack_damage}</b><img src="../images/attack.png" alt="logo" width="8%" height="auto" />
                    <b className="points_label">{props.attack_defense}</b><img src="../images/defense.png" alt="logo" width="8%" height="auto" /><br></br>
                    <b>Pasirinktų karių skaičius: </b><b className="yellow_label">{props.attack_user_amount[props.attack_type]}</b>
                    <br></br><br></br>
                {props.user_lifepoints>0 
                && props.ai_lifepoints>0 
                && props.attack_type!=0 
                && props.attack_user_amount[props.attack_type]>0
                && <Button className="rounded-pill" variant="warning" value="Kovoti"  type="button" onClick={props.aiStrategyChange}>Kovoti</Button> || <Button className="rounded-pill" variant="secondary" value="Kovoti"  type="button" disabled>Kovoti</Button>}
                <br></br><br></br>
                {props.attack_type!=0 
                && props.user_coins!=0
                && props.user_lifepoints>0 
                && props.ai_lifepoints>0 
                && props.user_coins>=props.attack_cost[props.attack_type]
                && <Button className="rounded-pill" variant="success" value="Pirkti" type="button" onClick={props.confirmBuy}>Pirkti už {props.attack_cost[props.attack_type]} <img src="../images/coins.png" alt="logo" width="25%" height="auto" /></Button> || <Button className="rounded-pill" variant="secondary" value="Pirkti" type="button" disabled >Pirkti <img src="../images/coins.png" alt="logo" width="25%" height="auto"  /></Button>}
            </form>
        <br></br>  
        </div>
    )
}       

export default UserComponent