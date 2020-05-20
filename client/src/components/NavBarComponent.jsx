import React, {Component} from "react"
import {Button, Modal, Form} from 'react-bootstrap';

class NavBarComponent extends Component {
    
  constructor(props) {
      super(props)
  }

  componentDidMount() {
      this.props.onHandleModal()
  }
  render(){
      const props = this.props
      const a = this.props.about
      const b = this.props.grunwald
      if (a.length==0 || b.length==0) return (<div>{this.props.onHandleModal}</div>)
      return (

      <div>
        <br></br>
        <div className="nav btn-group shadow" >
          <Button className="button_color custom_weight" onClick={props.onHandleOpenModalFirst}>Apie žaidimą</Button>
          <Button className="button_color custom_weight" onClick={props.onHandleOpenModalSecond}>Žalgirio mūšis</Button>
        </div>
        
          <div className="modals">
            <Modal show={props.show_first} animation={false}>
              <Modal.Header >
                <Modal.Title className="w-100 text-center"> <center><h1>Apie žaidimą</h1></center></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group >        
                {<b><ul>
                  <div>
                      {a.map((item,index) =>
                        <div key={index}>                   
                          <div>     
                            <p>{item.text}</p>
                          </div>
                      </div>)}
                  </div>
                </ul></b>}
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
              <div>         
                  <Button className="rounded-pill-quiz" variant="warning" onClick={props.onCloseModal}>Uždaryti<br></br> </Button> 
              </div>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
            <Modal show={props.show_second} animation={false}>
              <Modal.Header >
                <Modal.Title className="w-100 text-center"> <center className="text-center"><h1>Žalgirio mūšis</h1></center></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group >        
                {
                  <ul>
                    <div>
                        {b.map((item,index) =>
                          <div key={index} className="card custom">                   
                          <Button className="card-header bg-warning text-dark custom_2" value={item.id} onClick={props.onNextInfo}><b>{item.title}</b></Button>
                          {item.id==props.activeSelection && (
                            <div className="card-body">     
                              <p className="card-text">{item.text}</p>
                            </div>)}
                        </div>)}
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
}   

export default NavBarComponent