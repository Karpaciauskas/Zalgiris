import React, {Fragment} from "react"
import {Row,Col} from 'react-bootstrap';

const Author = [
      'Evaldas Karpačiauskas © 2020'
]

function FooterComponent(){
    return (
    <Fragment>
          <Col className ="sm-8 xl-8 text-left Copyright text-warning">
            {Author}
          </Col>
        
    </Fragment>
    )
}

export default FooterComponent