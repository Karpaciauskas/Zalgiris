import React from "react"
import {Button,Modal,Form} from 'react-bootstrap';

function StatisticsComponent(props){
    return (
        <div className=" text-center block_main_4 rounded shadow">
            <img className="padding" src="../images/results.png" alt="logo" width="50%" height="auto" />
                <div className="board_grid text-center">
                    <div className="stat_item_1">
                        <img src="../images/LT_PL_text.png" alt="logo" width="100%" height="auto" /> 
                        <b>         padarė</b><h4>{props.user_DMG}</h4> <b>žalos taškų</b>
                    </div> 
                    <div className="stat_item_2">
                        <img src="../images/DE_text.png" alt="logo" width="100%" height="auto" />
                        <b> padarė</b>  <h4>{props.ai_DMG}</h4> <b>žalos taškų</b> 
                    </div>
                    <Modal show={props.show_score} animation={false}>
                    <Modal.Header >
                        <Modal.Title className="w-100 text-center"> <center className="text-center"><h1>Žalgirio mūšio pabaiga</h1></center></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group >        
                        {
                        <ul>
                            <div> 
                                {props.ai_lifepoints<=0 && props.user_lifepoints<=0 
                                ? <div className="card custom">                   
                                    <div className="card-header bg-secondary text-dark custom_2 text-center">
                                        <div><img src="../images/draw_text.png" alt="logo" width="40%" height="auto" /><br></br><b>Abi pusės pralaimėjo Žalgirio mūšį</b></div>     
                                    </div>
                                    <div className="card-body text-center">     
                                        <div className="card-text text-center">
                                            <h2>Viso surinkta taškų: {props.total_points}</h2>
                                            <b>Viso išleista auksinių: {props.total_spent}</b><br></br>
                                            <b>Atsakyta testo klausimų: {props.answeredQuestions}/10</b>
                                        </div>
                                    </div>
                                </div>
                                
                                : props.ai_lifepoints<=0  
                                ? <div className="card custom">                   
                                    <div className="card-header bg-success text-dark custom_2 text-center">
                                        <div><img src="../images/LT_PL_text.png" alt="logo" width="40%" height="auto" /><br></br><b>Laimėjo Žalgirio mūšį</b></div>     
                                    </div>
                                    <div className="card-body text-center">     
                                        <div className="card-text text-center">
                                            <h2>Viso surinkta taškų: {props.total_points}</h2>
                                            <b>Viso išleista auksinių: {props.total_spent}</b><br></br>
                                            <b>Atsakyta testo klausimų: {props.answeredQuestions}/10</b>
                                        </div>
                                    </div>
                                </div>
                                : <div className="card custom">                   
                                    <div className="card-header bg-danger text-dark custom_2 text-center">
                                        <div><img src="../images/DE_text.png" alt="logo" width="40%" height="auto" /> <br></br><b>Laimėjo Žalgirio mūšį</b></div>
                                    </div>
                                    <div className="card-body text-center">                              
                                        <div className="card-text text-center">
                                            <h2>Viso surinkta taškų: {props.total_points}</h2>
                                            <b>Viso išleista auksinių: {props.total_spent}</b><br></br>
                                            <b>Atsakyta testo klausimų: {props.answeredQuestions}/10</b>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </ul>
                        }
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <div>         
                        <Button className="rounded-pill-quiz" variant="warning" onClick={props.onCloseModal}>Uždaryti<br></br> </Button> 
                    </div>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}  

export default StatisticsComponent