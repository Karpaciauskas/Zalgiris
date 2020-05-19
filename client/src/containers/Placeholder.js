import {connect} from "react-redux"
import PlaceholderComponent from "../components/PlaceholderComponent"

const mapStateToProps = ({main}) => {
    return{
    }
}

const mapDispatchToProps = dispatch => {
    return{

    }
}

const Placeholder = connect(mapStateToProps, mapDispatchToProps)(PlaceholderComponent)
export default Placeholder