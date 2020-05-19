import {connect} from "react-redux"
import FieldComponent from "../components/FieldComponent"

const mapStateToProps = ({main}) => {
    return{
        field_type      :   main.field_type
    }
}

const mapDispatchToProps = dispatch => {
    return{

    }
}

const Field = connect(mapStateToProps, mapDispatchToProps)(FieldComponent)
export default Field