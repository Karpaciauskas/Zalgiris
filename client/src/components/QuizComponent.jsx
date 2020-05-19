import React, {Component} from "react"
import {Button, Modal, Form } from 'react-bootstrap';

class QuizComponent extends Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.onHandleQuestions()
    }
    render(){
        const props = this.props
        const q = this.props.questions
        if (q.length==0) return (<div>{this.props.onHandleQuestions}</div>)
        return (
        <div className=" text-center block_main_6 rounded shadow">
          
            {props.activeQuestion ==0 && props.user_lifepoints==0 && <div><br></br><Button className="rounded-pill" variant="warning" onClick={props.onHandleOpen}>TESTAS</Button><br></br><br></br></div>}
            
            <div>
              <Modal show={props.show} animation={false}>
                <Modal.Header >
                  <Modal.Title className="w-100 text-center"> <center><h1>Jūs pralaimėjote ! </h1><br></br><h2>Atsakykite į klausimus ir gaukite antrą šanšą! </h2></center></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group >        
                  {
                    <b><ul>
                      <div>
                        {q.map((item,index) =>
                          <div key={index}>
                            {index===props.activeQuestion && (
                              <div>
                                {item.id}.{item.question}<br></br>
                                <br></br>Atsakymo variantai:<br></br>
                                {item.answers.map((data,i)=>
                                  <div key={i}>
                                    <Form.Check
                                    type="radio"
                                    label={data.content}
                                    name="formHoriontalRadios"
                                    key={data.content}
                                    value={data.isRight}
                                    onChange={props.onInput}
                                    data-isright="true"
                                    id={data.content}/>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </ul></b>
                  }
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <div>      
                    {props.activeQuestion != 9 && <Button className="rounded-pill-quiz" variant="warning" onClick={props.onNextQuestion}>Kitas klausimas<br></br> </Button>}    
                    {props.activeQuestion == 9 && <Button className="rounded-pill-quiz" variant="warning" onClick={props.endTestResult}>Baigti testą<br></br> </Button>}  
                    
                </div>
              </Modal.Footer>
            </Modal>
          </div>
          {props.activeQuestion >9 && 
          <div><b>Teisingų testo atsakymų: </b><b className="text-warning">{props.answeredQuestions}</b><br></br></div>} 
              {props.answeredQuestions>0 && props.show!=true && <div><b>Jums suteiktas antras šansas - pridėta </b><b className="text-warning">{props.test_rewards}</b><b> gyvybės taškų ir </b><b className="text-warning">{props.test_coin_rewards}</b><b> auksinių!</b></div>}
        </div>
      )
    }
}   

export default QuizComponent