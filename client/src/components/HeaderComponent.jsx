import React, {Fragment} from "react"
import {Row,Col} from 'react-bootstrap';

function HeaderComponent(){
    return (
    <Fragment>
        <Row className="p-2  m-2">
          <Col className ="sm-8 xl-8 text-center">
          <img className="logo" src="../images/zalgirio_musis.png" ></img>
          </Col>
        </Row>
    </Fragment>
    )
}

export default HeaderComponent