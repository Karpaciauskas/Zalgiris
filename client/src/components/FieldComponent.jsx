import React, {Fragment} from "react"

function FieldComponent(props){
    return (
    <Fragment>
        <div>
          <div className ="text-center block_main_5 rounded shadow">
          {props.field_type==0 && (<div className="nonfield"><img src="../images/terrain.png" alt="logo" width="100%" height="auto" /><br></br><img src="../images/nonfield.png" alt="logo" width="90%" height="auto" /></div>)}
          {props.field_type==1 && (<div className="fields"><img src="../images/terrain.png" alt="logo" width="100%" height="auto" /><br></br><img src="../images/fields.png" alt="logo" width="90%" height="auto" /></div>)}
          {props.field_type==2 && (<div className="forest"><img src="../images/terrain.png" alt="logo" width="100%" height="auto" /><br></br><img src="../images/forest.png" alt="logo" width="90%" height="auto" /></div>)}
          {props.field_type==3 && (<div className="river"><img src="../images/terrain.png" alt="logo" width="100%" height="auto" /><br></br><img src="../images/river.png" alt="logo" width="90%" height="auto" /></div>)}
          </div>
        </div>
    </Fragment>
    )
}

export default FieldComponent